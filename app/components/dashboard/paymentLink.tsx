import axios from "axios"
import { useEffect } from "react"
import useSWR, { mutate } from "swr"

export type PaymentLink = {
    id: number,
    identifier: string,
    paymentUrl: string,
    name: string
}


// TODO : use real paymentLink + verif token
const fetcher = (url:string) => axios.post(url, {
    "email": "email@email.com"
}).then(res => res.data)

export const PaymentLinkSelector = ({ changePaymentLink , setInitLink, setPaymentLinkUrl}: { changePaymentLink: any, setInitLink: any, setPaymentLinkUrl:any }) => {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/paymentLink`, fetcher);


    useEffect( () => {
        console.log("effect selector link")
        if ( data?.response?.data[0]?.paymentLinks && data.response.data[0].paymentLinks.length > 0 ) {
            setInitLink(data?.response?.data[0]?.paymentLinks[0].identifier);
            setPaymentLinkUrl(data?.response?.data[0]?.paymentLinks[0].paymentUrl)
        }

    }, [data]) 


    const refreshLink = () => {
        mutate(`${process.env.NEXT_PUBLIC_API_URL as string}/paymentLink`);
    }
    
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

    if (isLoading) return <div>        
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5 animate-pulse"></div>
    </div>

    return <>
        <div className="flex space-x-3">

            <select onClick={e => refreshLink()} className="select select-primary w-full max-w-xs mb-5" onChange={e => {
                const filtered = data?.response?.data[0]?.paymentLinks && data.response.data[0].paymentLinks.filter((link:PaymentLink) => link.identifier === e.target.value);
                if ( filtered && filtered.length > 0 ) {
                    changePaymentLink(e.target.value, filtered[0].paymentUrl);
                } else {
                    changePaymentLink(e.target.value, "Pas de lien de paiement");
                }
            } }>
                {
                    data?.response?.data[0]?.paymentLinks && data.response.data[0].paymentLinks.map((link:PaymentLink) => (
                        <option key={link.id} value={link.identifier}>{`${link.name}`}</option>
                    ))
                } 
            </select>
        </div>


        <div className="alert font-medium mb-1 text-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>En cas de rupture de stock, le lien sera désactivé automatiquement</span>
        </div>
    </>

}