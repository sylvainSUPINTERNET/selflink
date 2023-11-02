"use client";

import { Session, getServerSession } from "next-auth";
import AuthGuard from "../guard/authguard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PaymentLink, PaymentLinkSelector } from "./dashboard/paymentLink";
import { OrdersList } from "./dashboard/orders";
import axios from "axios";




export default function OrdersComponent() {

    const [paymentLinkInit, setPaymentLinkInit] = useState<string>();
    const [paymentLinkInitUrl, setPaymentLinkInitUrl] = useState<string>();

    const [offset, setOffset] = useState<any>(0);

    const onChangePaymentLink = async (identifier:string, paymentUrl:string) => {
        setPaymentLinkInit(identifier)
        setPaymentLinkInitUrl(paymentUrl)
        setOffset(0);
    }

    useEffect ( () => {
        console.log(paymentLinkInit)
    }, [paymentLinkInit, paymentLinkInitUrl, offset]);


    return (
            <>

                <>

                <h1 className="rounded-lg text-2xl font-bold mb-5">Commandes</h1>
       
                <PaymentLinkSelector changePaymentLink={onChangePaymentLink} setInitLink={setPaymentLinkInit} setPaymentLinkUrl={setPaymentLinkInitUrl}/>
                <OrdersList paymentLinkInit={paymentLinkInit} paymentLinkInitUrl={paymentLinkInitUrl} offset={offset} setOffset={setOffset}/>    

                </>
    

            </>
            
    )
}

