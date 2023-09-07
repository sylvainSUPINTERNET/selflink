import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AuthGuard from "../guard/authguard";
import { useRouter } from "next/navigation";

export default function GetStartedComponent(props: {sessionData: Session}) {
    return (
            <div>
                start compo
            </div>
    )
}

// Pour la récupération des données côté serveur avec Next.js
export async function getServerSideProps(context:any) {
    const session = await getServerSession(authOptions);
    
    console.log("server side", session);

    // Vous pouvez passer des données du serveur au composant via les props
    return {
        props: {
            sessionData: session
        }
    };
}