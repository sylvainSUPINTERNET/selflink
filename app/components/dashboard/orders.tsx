import axios from "axios";
import { useEffect, useState } from "react";
import useSWR, {mutate} from "swr";
import ResponsivePagination from 'react-responsive-pagination';
import "./order.css"
import { useSession } from "next-auth/react";

// TODO : use real paymentLink + verif token
const fetcher = (url:string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(url)
                .then(res => {
                    resolve(res.data);
                })
                .catch(reject);
        }, 250);
    });
}

type Order = {
    orderId: number
    quantity: number
    createdAt: string
    currency: string
    productId: number
    amount: number
    shippingCity: string;
    shippingCountry: string;
    shippingLine1: string;
    shippingLine2: string;
    shippingPostalCode: string;
    shippingState: string;
    shippingName: string;
    phoneNumber: string;
    buyerEmail: string;
    productname: string;
    status: "pending" | "shipped",
    refund: boolean;
    paymentIntentId: string;
}



export const OrdersList = ({paymentLinkInit, paymentLinkInitUrl, offset, setOffset}:{paymentLinkInit:string | undefined, paymentLinkInitUrl: string|undefined, offset:any, setOffset:any}) => {

    let [userData, setUserData] = useState<any>();
    let [stock, setStock] = useState<number>(0);
    let [size, setSize] = useState<number>(20);
    let [currentPage, setCurrentPage] = useState(1);
    let [orderCount, setOrderCount] = useState<any>();
    let [amountEstimate, setAmountEstimate] = useState<number>(0);
    let [orderToRefund, setOrderToRefund] = useState<Order|null>(null);
    let [tagged, setTagged] = useState<Array<any>>([]);

    let [btnRefundClicked, setBtnRefundClicked] = useState<number | null>(null);
    let [loadingRefundBtn, setLoadingRefundBtn] = useState<boolean>(false);
    
    const changeOrderStatus = (ev:any, order:Order) => {

        if ( tagged.includes(order.orderId) ) {
            setTagged(tagged.filter((id:any) => id !== order.orderId));
        } else {
            setTagged([...tagged, order.orderId]);
        }
    }

    const refund = async ( ev:any, order:Order ) => {
        setBtnRefundClicked(order.orderId);

        if ( document != null) {
            if ( document.getElementById('my_modal_3') != null && order.refund === false) {
                setOrderToRefund(order);
                (document.getElementById('my_modal_3') as any).showModal();
            }
        }
    }

    const confirmRefund = async (ev:any) => {
        setLoadingRefundBtn(true);
    
        if ( orderToRefund != null ) {
            try {
                const {data} = await axios(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/refund`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "paymentIntentId": orderToRefund.paymentIntentId
                    }
                });
    
                await mutate(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`);
                setLoadingRefundBtn(false)
                setBtnRefundClicked(null);
            } catch ( e ) {                
                alert("Erreur est survenue")
                setLoadingRefundBtn(false);
                setBtnRefundClicked(null);
            }
        }


    }

    const saveOrderStatus = async () => {
        try {
            const {data} = await axios(`${process.env.NEXT_PUBLIC_API_URL as string}/orders`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "orderIds": tagged
                }
            });

            await mutate(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`) 
            setTagged([]);

        } catch ( e ) {
            alert("Une erreur est survenue")
            setTagged([]);
        }

    }

    // const generateCellBg = (order:Order) => {
    //     if ( tagged.includes(order.orderId) ) {
    //         return "border-l-green-400 border-l-8";
    //     } else {
    //         return "border-l-0";
    //     }
    // }
    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead to check
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`, fetcher, {
        revalidateOnFocus: false
    });
    
    
    const { data: session, status } = useSession();

    useEffect( () => {

        if (session && status === 'authenticated') {
            
            setUserData(session.user)
            
            const fetchData = async () => {
                if ( !paymentLinkInit ) return;
                const {data} = await axios(`${process.env.NEXT_PUBLIC_API_URL as string}/products/identifier`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "identifier": paymentLinkInit
                    }
                })

                const {data:orderCountData} = await axios(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/count?paymentLink=${paymentLinkInit}`);
                setOrderCount(parseInt(orderCountData.response.data));

                const {data:estimateAmountData} = await axios(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/total?paymentLink=${paymentLinkInit}`);
                setAmountEstimate(parseInt(estimateAmountData.response.data))
                
                if ( data.response) {
                    setStock(data.response.data.stock)
                }
            }
            fetchData()
        }

    }, [paymentLinkInit, currentPage, stock, orderCount, amountEstimate, status])

    if (error) return <div>
        <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
                <span className="font-medium">Erreur est survenue</span>
            </div>
        </div>
    </div>

    if (isLoading) return <>        
        <div role="status" className="max-w-full mt-10 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
            <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-baseline mt-4 space-x-6">
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                <div className="w-full bg-gray-200 rounded-t-lg h-80 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    </>

    return <>

        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                {/* <form method="dialog">
                if there is a button in form, it will close the modal
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form> */}
                <h3 className="font-bold text-2xl text-center mt-3 mb-5 p-3">Demande de remboursement</h3>
                <div className=" mt-3">
                    <form method="dialog" action="">
                        <div className="flex justify-evenly py-4">
                            <button className="btn btn-primary rounded text-lg md:text-2xl text-white font-medium cursor-pointer" onClick={e=> confirmRefund(e)}>Confirmer</button>
                            <button className="btn btn-error  bg-red-600 rounded text-lg md:text-2xl text-white font-medium cursor-pointer">Annuler</button>
                        </div>
                    </form>
                </div> 
            </div>
        </dialog>
            
        <div className="mt-2 p-2 mb-3">

        <div className="flex justify-center  p-0.5 text-2xl">
                        {tagged.length > 0 ? 
            <button className="btn btn-primary text-white  w-2/4" onClick={e => {
                saveOrderStatus()
            }}>Sauvegarder</button>
            : 
            <button className="btn btn-disabled text-white  w-2/4">Sauvegarder</button>
            }
        </div>
            

            
        </div>

        <div className="flex justify-center  mb-4">
                    {
                        stock > 0 ?
                        <a className="btn btn-primary text-white" target="blank" href={paymentLinkInitUrl}>
                            <svg fill="#fff" version="1.1" id="Capa_1" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.04 442.04"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
                                Voir le lien
                        </a>
                        :
                        <a className="btn btn-disabled " >
                            <svg fill="#000000" version="1.1" id="Capa_1" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.04 442.04"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
                                Lien desactivé { stock === 0 ? " (stock épuisé)" : ""}
                        </a>
                    
                    
                    }
        </div>

        {
                paymentLinkInitUrl ? <>
                    <div className="justify-center flex space-x-3 mb-5 md:mb-0">
                        <div className="">
                            {
                                    // <p className="font-medium">TOTAL {
                                    //     <span className="font-bold">
                                    //         {new Intl.NumberFormat('fr-FR', {
                                    //             style: 'currency',
                                    //             currency: 'EUR',
                                    //         }).format(amountEstimate)}
                                    //     </span>
                                    //     }</p>

                                        <>
                                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"> <span className="font-bold mr-0.5">TOTAL </span> {new Intl.NumberFormat('fr-FR', {
                                                            style: 'currency',
                                                            currency: 'EUR',
                                                        }).format(amountEstimate)}</span>
                                        </>
                            }
                        </div>

                        <div>
         
                            {
                                stock > 0 ?
                                    <>
                                        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"> <span className="font-bold mr-0.5">STOCK </span>{ stock } produit{stock > 1 ? "s" : ""} disponible{stock > 1 ? "s" : ""}</span>
                                    </>
                                :
                                    <>
                                        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                            <span className="font-bold mr-0.5">Rupture de stock</span>
                                        </span>
                                    </>
                            }

                        </div>
                    </div>
                 </>
                : 
                <></>
            }
            
            {
                orderCount ? 
                    <>

                    <div className="flex justify-end">
                        <span className="mb-3 bg-gray-100 text-gray-800 text-md font-medium inline-flex items-center px-2.5 py-1.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400">
                            <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                            Commandes total { orderCount }
                        </span>


                    </div>


                    <div className="overflow-x-auto h-[32em] lg:h-[22em]">
                        <table className="table table-xs">

                            <thead>
                            <tr className="text-center">
                                <th>Produit</th>
                                <th>Remboursement</th>
                                <th>Commande</th> 
                                <th>Montant</th>
                                <th>Info livraison</th>
                                <th>Status</th>
                            </tr>
                            </thead> 

                            <tbody>
                                {
                                    (data as unknown as any).response.data.map((order:Order, index:number) => {
                                        return (<>
                                            <tr key={index} className={"text-center border-b border-gray-200"}>
                                                <td className="text-center">{order.productname}</td>
                                                <td className="text-center">
                                                    {
                                                        order.refund === true ? <div>
                                                           <button className="btn btn-disabled">Rembourser</button>
                                                        </div>
                                                        :
                                                        <>
                                                        {
                                                            loadingRefundBtn === true && btnRefundClicked === order.orderId ? <>
                                                                <button className="btn btn-disabled">Rembourser</button>
                                                            </> : <>
                                                                <button className="btn btn-primary" onClick={e => refund(e, order)}>Rembourser</button>
                                                            </>
                                                        }
                                                            
                                                        </>
                                                    }   
                                                </td>
                                                <td className="text-center">
                                                    <div>
                                                        <p className="mb-3">n° <span className="font-bold">{order.orderId}</span></p>
                                                        <p><span className="font-bold">{new Date(order.createdAt).toLocaleString('fr-FR')}</span></p>
                                                    </div>
                                                </td>
                                                <td className="text-center">{order.quantity} x {(order.amount / 100).toFixed(2)} {order.currency.toUpperCase()}</td>
                                                <td>
                                                    <div className="text-left">
                                                        <p>Pays: <span className="font-bold">{order.shippingCountry}</span></p>
                                                        {
                                                            order.shippingState === "" ? <></> : <p>Province: <span className="font-bold">{order.shippingState}</span></p>
                                                        }
                                                        <p>Code: <span className="font-bold">{order.shippingPostalCode}</span></p>
                                                        <p>Ville: <span className="font-bold">{order.shippingCity}</span></p>
                                                        <p>Adresse: <span className="font-bold">{order.shippingLine1}</span></p>
                                                        <p>Adresse2: <span className="font-bold">{order.shippingLine2}</span></p>
                                                        <p>Nom: <span className="font-bold">{order.shippingName}</span></p>
                                                        <p>Tel: <span className="font-bold">{order.phoneNumber}</span></p>
                                                        <p>Email: <span className="font-bold">{order.buyerEmail}</span></p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>

                                                        {
                                                            order.refund === true ?
                                                            <>
                                                                <div className="p-2 text-center rounded-lg btn btn-disabled">
                                                                    Remboursé
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                            
                                                                {
                                                                    order.status === "pending" ? 
                                                                        <div className="cursor-pointer p-2 text-center rounded-lg btn btn-primary shadow-lg" onClick={e=>{
                                                                            changeOrderStatus(e, order)
                                                                        }}>
                                                                            { tagged.includes(order.orderId) ? "Expédié" : "Attente" }
                                                                        </div>
                                                                    : 
                                                                        <div className="cursor-pointer p-2 text-center rounded-lg btn btn-primary shadow-lg"  onClick={e=>{
                                                                            changeOrderStatus(e, order)
                                                                        }}>
                                                                            { tagged.includes(order.orderId) ? "Attente" : "Expédié" }
                                                                        </div>
                                                                }
                                                            
                                                            </>
                                                        }

                                                    </div>

                                                </td>
                                            </tr>
                                        </>);
                                    })
                                }                            
                            </tbody> 
                        </table>
                    </div>
        
                    <div className="p-0.3 m-[0.5em]">
                        <ResponsivePagination
                        total={Math.ceil(orderCount / size) }
                        previousLabel="‹" nextLabel="›"
                        current={currentPage}
                        onPageChange={page => {
                            setOffset((page-1) * size)
                            setCurrentPage(page)
                    }}
                        />
                    </div>

                    </>


                :
                    <>
                        <div className="flex justify-center items-center h-2/4">
                            <p className="text-xl font-medium">Pas de commande en cours pour le moment</p>
                        </div>
                    </>
            }

            

    </>

}