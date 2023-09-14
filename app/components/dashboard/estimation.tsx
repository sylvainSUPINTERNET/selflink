import useSWR from 'swr';
import axios from 'axios'


const fetcher = (url:string) => axios.get(url).then(res => res.data)

export const EstimationOrder = () => {
    // TODO => don't use paymentLink like this ! because any one can do it ! use token instead
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL as string}/orders/total?paymentLink=${"123454"}`, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
   
    // render data
    return <div>hello {data.name}!</div>
}