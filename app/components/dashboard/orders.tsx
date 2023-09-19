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



export const OrdersList = ({paymentLinkInit}:{paymentLinkInit:string | undefined}) => {

    let [offset, setOffset] = useState<number>(0);
    let [size, setSize] = useState<number>(20);
    let [currentPage, setCurrentPage] = useState(1);

    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`, fetcher);

    const {data: orderCount, error : errorOrderCount, isLoading : isLoadingOrderCount} = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/count?paymentLink=${paymentLinkInit}`, fetcher);
    
    useEffect( () => {
        console.log("order list eff", paymentLinkInit)
        console.log("Inside useEffect currentPage:", currentPage);
    }, [paymentLinkInit, currentPage])

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