"use client";

import { signIn, useSession } from "next-auth/react"
import { authOptions } from '../../api/auth/[...nextauth]/route';

export default function SignIn()  {

    const { data: session } = useSession();


    if (session) {
        return { redirect: { destination: "/dashboard" } };
    }

    return (
        <>
        
            {
                Object.values(authOptions.providers!).map((provider:any) => (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))
            }
        </>
    )
}