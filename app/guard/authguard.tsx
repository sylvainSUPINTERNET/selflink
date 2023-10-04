'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const AuthGuard = ({ children }: {children: ReactNode} ) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  
  useEffect(() => {
    if (status === 'unauthenticated') {
        router.push('/api/auth/signin');
    }
  }, [status, router]);


  if (status === 'loading') {
      return   <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>;
  }

  if ( status === 'authenticated') {
    return <>{session && children}</>;
  }


  
}
        
export default AuthGuard;


