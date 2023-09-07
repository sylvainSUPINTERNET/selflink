'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const AuthGuard = ({ children }: {children: ReactNode} ) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
  
    if (!session) {
      router.push('/api/auth/signin');
    }
  }, [session, router]);

  return <>{session && children}</>;
}
        
export default AuthGuard;


