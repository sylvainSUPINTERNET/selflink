import axios from "axios";
import useSWR from "swr";

// TODO : use real paymentLink + verif token
const fetcher = (url:string) => axios.get(url).then(res => res.data)


type PaymentLink = {
    id: number
}

export const OrdersList = ({paymentLinkInit}:{paymentLinkInit:PaymentLink | null}) => {

    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders?paymentLink=${"123454"}&offset=${0}&size=${20}`, fetcher);
    
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
                paymentLinkInit && paymentLinkInit != null && <p>LINK : {JSON.stringify(paymentLinkInit)}</p>
            }
            
            ORDERS LIST : {JSON.stringify(data)}

            <div className="overflow-x-auto">
                <table className="table table-xs">

                    <thead>
                    <tr>
                        <th></th> 
                        <th>Name</th> 
                        <th>Job</th> 
                        <th>company</th> 
                        <th>location</th> 
                        <th>Last Login</th> 
                        <th>Favorite Color</th>
                    </tr>
                    </thead> 

                    <tbody>
                    <tr>
                        <th>1</th> 
                        <td>Cy Ganderton</td> 
                        <td>Quality Control Specialist</td> 
                        <td>Littel, Schaden and Vandervort</td> 
                        <td>Canada</td> 
                        <td>12/16/2020</td> 
                        <td>Blue</td>
                    </tr>
                    </tbody> 

                    <tfoot>
                    <tr>
                        <th></th> 
                        <th>Name</th> 
                        <th>Job</th> 
                        <th>company</th> 
                        <th>location</th> 
                        <th>Last Login</th> 
                        <th>Favorite Color</th>
                    </tr>
                    </tfoot>

                </table>
            </div>

            <div className="join flex justify-center mt-5">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
            </div>
    </>

}