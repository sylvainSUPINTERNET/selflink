import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { PaymentLink } from "./paymentLink";

// TODO : use real paymentLink + verif token
const fetcher = (url:string) => axios.get(url).then(res => res.data)

type Order = {
    orderId: number
    quantity: number
    createdAt: string
    currency: string
    productId: number
    amount: number
}



function displayPagination(count: string, size: number, offset: number) {
    let countNb: number = parseInt(count);
    let nbPage: number = Math.ceil(countNb / size);
    let currentPage: number = Math.ceil(offset / size) + 1;
    const maxButtons = 5; // Nombre maximal de boutons à afficher (vous pouvez ajuster ce nombre)

    let startPage: number = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage: number = Math.min(nbPage, startPage + maxButtons - 1);

    // Ajustement si on a moins de boutons que maxButtons au départ
    if (endPage - startPage + 1 < maxButtons && startPage > 1) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    let pages: number[] = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className="join flex justify-center mt-5">
            {pages.map((page, index) => (
                <button key={index} className={`join-item btn ${page === currentPage ? "btn-disabled" : ""}`}>
                    {page}
                </button>
            ))}
        </div>
    );
}


export const OrdersList = ({paymentLinkInit}:{paymentLinkInit:PaymentLink | undefined}) => {

    let size:number = 20;
    let offset:number = 0;

    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${paymentLinkInit}&offset=${offset}&size=${size}`, fetcher);

    const {data: orderCount, error : errorOrderCount, isLoading : isLoadingOrderCount} = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/count?paymentLink=${paymentLinkInit}`, fetcher);
    
    useEffect( () => {
        console.log("order list eff")
    }, [paymentLinkInit])

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

            { JSON.stringify(orderCount)}


            
            {
                orderCount?.response?.data && data?.response?.data && data.response.data.length > 0 ? 
                    <>

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
                    
                    {displayPagination(orderCount.response.data, size, offset)}

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