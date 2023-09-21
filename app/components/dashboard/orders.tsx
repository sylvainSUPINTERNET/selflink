import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

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
}

function clickNextPage ( event:any, setCurrentPage:any, size: number, setOffset:any, currentPage: number ) {

    const nextPage = parseInt(event.target.innerHTML);

    if ( nextPage === currentPage ) return;

    const offset = (nextPage - 1) * size;
    setOffset(offset)
    setCurrentPage(parseInt(event.target.innerHTML))
}

function linkColor (stock:number):string {
    return stock > 0 ? "blue" : "red";
}

function displayPagination(count: string, size: number, offset: number, setCurrentPage: any, setOffset: any) {
    let countNb: number = parseInt(count);
    let nbPage: number = Math.ceil(countNb / size);
    let currentPage: number = Math.ceil(offset / size) + 1;
    const maxButtons = 5;
    
    let pages: number[] = [];
    let startPage: number = Math.max(2, currentPage - Math.floor((maxButtons - 2) / 2)); // -2 pour la première et la dernière page
    let endPage: number = Math.min(nbPage - 1, startPage + maxButtons - 3); // -3 pour la première page, la dernière page et la page actuelle
    
    if (startPage > 2) {
        pages.push(1, -1); // -1 représentera un point de suspension
    } else {
        pages.push(1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < nbPage - 1) {
        pages.push(-2, nbPage); // -2 représentera un autre point de suspension
    } else {
        pages.push(nbPage);
    }

    return (
        <div className="join flex justify-center mt-5">
            {pages.map((page, index) => {
                if (page < 0) {
                    return <span key={index}     style={{
                        backgroundColor: '#e2e8f0',
                        borderRadius: '0.375rem',
                        padding: '0.5rem 1rem',
                        margin: '0 0.25rem',
                        fontWeight: 500,
                        fontSize: '1rem',
                        display: 'inline-block'
                    }}>...</span>; // Points de suspension
                }
                return (
                    <button 
                        key={index} 
                        className={`join-item btn ${page === currentPage ? "btn-disabled" : ""}`} 
                        onClick={e => clickNextPage(e, setCurrentPage, size, setOffset, currentPage)}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
}

export const OrdersList = ({paymentLinkInit, paymentLinkInitUrl}:{paymentLinkInit:string | undefined, paymentLinkInitUrl: string|undefined}) => {

    let [stock, setStock] = useState<number>(0);
    let [offset, setOffset] = useState<number>(0);
    let [size, setSize] = useState<number>(20);
    let [currentPage, setCurrentPage] = useState(1);

    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`, fetcher);

    const {data: orderCount, error : errorOrderCount, isLoading : isLoadingOrderCount} = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/count?paymentLink=${paymentLinkInit}`, fetcher);
    
    useEffect( () => {
        console.log("order list eff", paymentLinkInit)
        console.log("Inside useEffect currentPage:", currentPage);
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

            setStock(data.response.data.stock)
        }
        fetchData()
    }, [paymentLinkInit, currentPage, stock])

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
            
        <div className="mt-2 p-2 mb-3">
            {
                paymentLinkInitUrl ? <>
                    <div className="flex justify-end">
                        {
                            stock > 0 ?
                                <p className="font-medium">Stock : <span className="font-bold">{ stock }</span></p>
                            :
                                <p className="font-medium">Stock épuisé <span className="font-bold">{ stock }</span></p>
                        }
                    </div>

                    <div className="flex mt-2 justify-center">
                    
                        {
                            stock > 0 ?
                            <a className="btn" target="blank" href={paymentLinkInitUrl}>
                                <svg fill="#000000" version="1.1" id="Capa_1" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.04 442.04"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
                                    Voir le lien
                            </a>
                            :
                            <a className="btn btn-disabled" >
                                <svg fill="#000000" version="1.1" id="Capa_1" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.04 442.04"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
                                    Lien desactivé
                            </a>
                        
                        
                        }
      
                    </div>
                 </>
                : 
                <p>""</p>
            }
        </div>

            
            {
                orderCount?.response?.data && data?.response?.data && data.response.data.length > 0 ? 
                    <>

                    <div className="flex justify-end mb-5">
                        <p className="font-medium">Commandes en cours <span className="font-bold">{ orderCount.response.data }</span></p>
                    </div>
                    


                    <div className="overflow-x-auto">
                        <table className="table table-xs text-center">

                            <thead>
                            <tr>
                                <th></th> 
                                <th>Command n°</th> 
                                <th>Quantité</th> 
                                <th>Date</th> 
                                <th>Produit n°</th> 
                                <th>Montant</th>
                                <th>Devise</th>
                            </tr>
                            </thead> 

                            <tbody>
                                {
                                    data.response.data.map((order:Order, index:number) => {
                                        return (<>
                                            <tr key={index}>
                                                <th>{index}</th>
                                                <td>{order.orderId}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.createdAt}</td>
                                                <td>{order.productId}</td>
                                                <td>{(order.amount / 100).toFixed(2)}</td>
                                                <td>{order.currency.toUpperCase()}</td>
                                            </tr>
                                        </>);
                                    })
                                }                            
                            </tbody> 
                        </table>
                    </div>
                    
                    {displayPagination(orderCount.response.data, size, offset, setCurrentPage, setOffset)}

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