import axios from "axios"
import { useEffect } from "react"
import useSWR from "swr"


type PaymentLink = {
    id: number
}


// TODO : use real paymentLink + verif token
const fetcher = (url:string) => axios.post(url, {
    "email": "email@email.com"
}).then(res => res.data)

export const PaymentLinkSelector = ({ changePaymentLink , setInitLink }: { changePaymentLink: any, setInitLink: any }) => {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/paymentLink`, fetcher);


    useEffect( () => {
        console.log("effect selector link")
        setInitLink(data?.response?.data[0]?.paymentLinks[0]);
    }, [data]) 
    
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
        <select className="select select-primary w-full max-w-xs mb-5" onChange={changePaymentLink}>
            {
                data?.response?.data[0]?.paymentLinks && data.response.data[0].paymentLinks.map((link:PaymentLink) => (
                    <option key={link.id}>{`Lien ${link.id}`}</option>
                ))
            }
        </select>
    </>

}