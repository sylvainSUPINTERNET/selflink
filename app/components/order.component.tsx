"use client";

import { Session, getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AuthGuard from "../guard/authguard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EstimationOrder } from "./dashboard/estimation";
import { PaymentLinkSelector } from "./dashboard/paymentLink";
import { OrdersList } from "./dashboard/orders";




export default function OrdersComponent() {


    // TODO quand on change de lien de paiement, il faut fetch les nouvelles commandes

    const [paymentLinkInit, setPaymentLinkInit] = useState(null);


    const onChangePaymentLink = async (event:any) => {
        alert("Change link !")
        // TODO => fetch data for selected payment link
    }

    useEffect ( () => {
        console.log("EFFECT");
    }, []);


    return (
            <>

                <>

                                        
                <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Commandes</h1>
                
                <div className="flex justify-end mb-5">
                    <EstimationOrder/>
                </div>

                
                <PaymentLinkSelector changePaymentLink={onChangePaymentLink} setInitLink={setPaymentLinkInit}/>

                <OrdersList paymentLinkInit={paymentLinkInit}/>


                {/* <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                        <tr>
                            <th></th> 
                            <th>Name</th> 
                            <th>Job</th> 
                            <th>company</th> 
                            <th>location</th> 
                            <th>Last Login</th> 
                            <th>Favorite Color</th>
                        </tr>
                        </thead> 
                        <tbody>
                        <tr>
                            <th>1</th> 
                            <td>Cy Ganderton</td> 
                            <td>Quality Control Specialist</td> 
                            <td>Littel, Schaden and Vandervort</td> 
                            <td>Canada</td> 
                            <td>12/16/2020</td> 
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th> 
                            <td>Hart Hagerty</td> 
                            <td>Desktop Support Technician</td> 
                            <td>Zemlak, Daniel and Leannon</td> 
                            <td>United States</td> 
                            <td>12/5/2020</td> 
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>3</th> 
                            <td>Brice Swyre</td> 
                            <td>Tax Accountant</td> 
                            <td>Carroll Group</td> 
                            <td>China</td> 
                            <td>8/15/2020</td> 
                            <td>Red</td>
                        </tr>
                        <tr>
                            <th>4</th> 
                            <td>Marjy Ferencz</td> 
                            <td>Office Assistant I</td> 
                            <td>Rowe-Schoen</td> 
                            <td>Russia</td> 
                            <td>3/25/2021</td> 
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>5</th> 
                            <td>Yancy Tear</td> 
                            <td>Community Outreach Specialist</td> 
                            <td>Wyman-Ledner</td> 
                            <td>Brazil</td> 
                            <td>5/22/2020</td> 
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>6</th> 
                            <td>Irma Vasilik</td> 
                            <td>Editor</td> 
                            <td>Wiza, Bins and Emard</td> 
                            <td>Venezuela</td> 
                            <td>12/8/2020</td> 
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>7</th> 
                            <td>Meghann Durtnal</td> 
                            <td>Staff Accountant IV</td> 
                            <td>Schuster-Schimmel</td> 
                            <td>Philippines</td> 
                            <td>2/17/2021</td> 
                            <td>Yellow</td>
                        </tr>
                        <tr>
                            <th>8</th> 
                            <td>Sammy Seston</td> 
                            <td>Accountant I</td> 
                            <td>O'Hara, Welch and Keebler</td> 
                            <td>Indonesia</td> 
                            <td>5/23/2020</td> 
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>9</th> 
                            <td>Lesya Tinham</td> 
                            <td>Safety Technician IV</td> 
                            <td>Turner-Kuhlman</td> 
                            <td>Philippines</td> 
                            <td>2/21/2021</td> 
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>10</th> 
                            <td>Zaneta Tewkesbury</td> 
                            <td>VP Marketing</td> 
                            <td>Sauer LLC</td> 
                            <td>Chad</td> 
                            <td>6/23/2020</td> 
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>11</th> 
                            <td>Andy Tipple</td> 
                            <td>Librarian</td> 
                            <td>Hilpert Group</td> 
                            <td>Poland</td> 
                            <td>7/9/2020</td> 
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>12</th> 
                            <td>Sophi Biles</td> 
                            <td>Recruiting Manager</td> 
                            <td>Gutmann Inc</td> 
                            <td>Indonesia</td> 
                            <td>2/12/2021</td> 
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>13</th> 
                            <td>Florida Garces</td> 
                            <td>Web Developer IV</td> 
                            <td>Gaylord, Pacocha and Baumbach</td> 
                            <td>Poland</td> 
                            <td>5/31/2020</td> 
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>14</th> 
                            <td>Maribeth Popping</td> 
                            <td>Analyst Programmer</td> 
                            <td>Deckow-Pouros</td> 
                            <td>Portugal</td> 
                            <td>4/27/2021</td> 
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>15</th> 
                            <td>Moritz Dryburgh</td> 
                            <td>Dental Hygienist</td> 
                            <td>Schiller, Cole and Hackett</td> 
                            <td>Sri Lanka</td> 
                            <td>8/8/2020</td> 
                            <td>Crimson</td>
                        </tr>
                        </tbody> 
                        <tfoot>
                        <tr>
                            <th></th> 
                            <th>Name</th> 
                            <th>Job</th> 
                            <th>company</th> 
                            <th>location</th> 
                            <th>Last Login</th> 
                            <th>Favorite Color</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="join flex justify-center mt-5">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn btn-disabled">...</button>
                    <button className="join-item btn">99</button>
                    <button className="join-item btn">100</button>
                </div> */}

                </>
                
                {/* {
                    paymentLinks && paymentLinks.length == 0 ? 
                        <div className="flex justify-center items-center h-full">
                            <p className="text-2xl font-medium">Pas de lien de paiement en cours pour le moment</p>
                        </div>
                    : 
                    
                    <>

                        
                        <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Commandes</h1>
                        <div className="flex justify-end mb-5">
                            <EstimationOrder/>
                        </div>

                            <PaymentLinkSelector changePaymentLink={onChangePaymentLink}/>


                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                <tr>
                                    <th></th> 
                                    <th>Name</th> 
                                    <th>Job</th> 
                                    <th>company</th> 
                                    <th>location</th> 
                                    <th>Last Login</th> 
                                    <th>Favorite Color</th>
                                </tr>
                                </thead> 
                                <tbody>
                                <tr>
                                    <th>1</th> 
                                    <td>Cy Ganderton</td> 
                                    <td>Quality Control Specialist</td> 
                                    <td>Littel, Schaden and Vandervort</td> 
                                    <td>Canada</td> 
                                    <td>12/16/2020</td> 
                                    <td>Blue</td>
                                </tr>
                                <tr>
                                    <th>2</th> 
                                    <td>Hart Hagerty</td> 
                                    <td>Desktop Support Technician</td> 
                                    <td>Zemlak, Daniel and Leannon</td> 
                                    <td>United States</td> 
                                    <td>12/5/2020</td> 
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>3</th> 
                                    <td>Brice Swyre</td> 
                                    <td>Tax Accountant</td> 
                                    <td>Carroll Group</td> 
                                    <td>China</td> 
                                    <td>8/15/2020</td> 
                                    <td>Red</td>
                                </tr>
                                <tr>
                                    <th>4</th> 
                                    <td>Marjy Ferencz</td> 
                                    <td>Office Assistant I</td> 
                                    <td>Rowe-Schoen</td> 
                                    <td>Russia</td> 
                                    <td>3/25/2021</td> 
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>5</th> 
                                    <td>Yancy Tear</td> 
                                    <td>Community Outreach Specialist</td> 
                                    <td>Wyman-Ledner</td> 
                                    <td>Brazil</td> 
                                    <td>5/22/2020</td> 
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>6</th> 
                                    <td>Irma Vasilik</td> 
                                    <td>Editor</td> 
                                    <td>Wiza, Bins and Emard</td> 
                                    <td>Venezuela</td> 
                                    <td>12/8/2020</td> 
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>7</th> 
                                    <td>Meghann Durtnal</td> 
                                    <td>Staff Accountant IV</td> 
                                    <td>Schuster-Schimmel</td> 
                                    <td>Philippines</td> 
                                    <td>2/17/2021</td> 
                                    <td>Yellow</td>
                                </tr>
                                <tr>
                                    <th>8</th> 
                                    <td>Sammy Seston</td> 
                                    <td>Accountant I</td> 
                                    <td>O'Hara, Welch and Keebler</td> 
                                    <td>Indonesia</td> 
                                    <td>5/23/2020</td> 
                                    <td>Crimson</td>
                                </tr>
                                <tr>
                                    <th>9</th> 
                                    <td>Lesya Tinham</td> 
                                    <td>Safety Technician IV</td> 
                                    <td>Turner-Kuhlman</td> 
                                    <td>Philippines</td> 
                                    <td>2/21/2021</td> 
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>10</th> 
                                    <td>Zaneta Tewkesbury</td> 
                                    <td>VP Marketing</td> 
                                    <td>Sauer LLC</td> 
                                    <td>Chad</td> 
                                    <td>6/23/2020</td> 
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <th>11</th> 
                                    <td>Andy Tipple</td> 
                                    <td>Librarian</td> 
                                    <td>Hilpert Group</td> 
                                    <td>Poland</td> 
                                    <td>7/9/2020</td> 
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>12</th> 
                                    <td>Sophi Biles</td> 
                                    <td>Recruiting Manager</td> 
                                    <td>Gutmann Inc</td> 
                                    <td>Indonesia</td> 
                                    <td>2/12/2021</td> 
                                    <td>Maroon</td>
                                </tr>
                                <tr>
                                    <th>13</th> 
                                    <td>Florida Garces</td> 
                                    <td>Web Developer IV</td> 
                                    <td>Gaylord, Pacocha and Baumbach</td> 
                                    <td>Poland</td> 
                                    <td>5/31/2020</td> 
                                    <td>Purple</td>
                                </tr>
                                <tr>
                                    <th>14</th> 
                                    <td>Maribeth Popping</td> 
                                    <td>Analyst Programmer</td> 
                                    <td>Deckow-Pouros</td> 
                                    <td>Portugal</td> 
                                    <td>4/27/2021</td> 
                                    <td>Aquamarine</td>
                                </tr>
                                <tr>
                                    <th>15</th> 
                                    <td>Moritz Dryburgh</td> 
                                    <td>Dental Hygienist</td> 
                                    <td>Schiller, Cole and Hackett</td> 
                                    <td>Sri Lanka</td> 
                                    <td>8/8/2020</td> 
                                    <td>Crimson</td>
                                </tr>
                                </tbody> 
                                <tfoot>
                                <tr>
                                    <th></th> 
                                    <th>Name</th> 
                                    <th>Job</th> 
                                    <th>company</th> 
                                    <th>location</th> 
                                    <th>Last Login</th> 
                                    <th>Favorite Color</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="join flex justify-center mt-5">
                            <button className="join-item btn">1</button>
                            <button className="join-item btn">2</button>
                            <button className="join-item btn btn-disabled">...</button>
                            <button className="join-item btn">99</button>
                            <button className="join-item btn">100</button>
                        </div>
                    </>
                }        
 */}




            </>
            
    )
}

