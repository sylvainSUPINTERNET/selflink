"use client";

import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AuthGuard from "../guard/authguard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EstimationOrder } from "./dashboard/estimation";
import { PaymentLink, PaymentLinkSelector } from "./dashboard/paymentLink";
import { OrdersList } from "./dashboard/orders";
import axios from "axios";




export default function OrdersComponent() {


    // TODO quand on change de lien de paiement, il faut fetch les nouvelles commandes

    const [paymentLinkInit, setPaymentLinkInit] = useState<string>();
    const [paymentLinkInitUrl, setPaymentLinkInitUrl] = useState<string>();

    const [offset, setOffset] = useState<any>(0);

    const onChangePaymentLink = async (identifier:string, paymentUrl:string) => {
        setPaymentLinkInit(identifier)
        setPaymentLinkInitUrl(paymentUrl)
        setOffset(0);
    }

    useEffect ( () => {

        console.log("EFFECT parent order compo");

    }, [paymentLinkInit, paymentLinkInitUrl, offset]);


    return (
            <>

                <>

                                        
                <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Commandes</h1>
                
                <div className="flex justify-end mb-5">
                    <EstimationOrder/>
                </div>

                
                <PaymentLinkSelector changePaymentLink={onChangePaymentLink} setInitLink={setPaymentLinkInit} setPaymentLinkUrl={setPaymentLinkInitUrl}/>

                <OrdersList paymentLinkInit={paymentLinkInit} paymentLinkInitUrl={paymentLinkInitUrl} offset={offset} setOffset={setOffset}/>    

                </>
    

            </>
            
    )
}

