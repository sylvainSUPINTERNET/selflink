import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AuthGuard from "../guard/authguard";
import { useRouter } from "next/navigation";

export default function OrdersComponent(props: {sessionData: Session}) {
    return (
            <div>
                <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Commandes</h1>
                <p>Liste de commandes, trié par ID de lien</p>*
                <p>On doit pouvoir voir le montant estimé - stripe frai + mes frai en sub</p>
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