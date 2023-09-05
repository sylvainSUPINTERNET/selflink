import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function GetStartedComponent() {
    const session = await getServerSession(authOptions);
    console.log("server side", session);
    return <p>Lazy Component Loaded!</p>;
}