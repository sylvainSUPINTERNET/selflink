import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (<div className="lg:h-[70em]">
    {
      [...Array(8)].map((e, i) => {
        return (
          <Skeleton key={i} count={3} className='mb-5' />
        )
      })
    }
  </div>)
  }