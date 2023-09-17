"use client";

import { Session } from "next-auth";
import { useReducer, useState } from "react";
import  { useForm }  from  "react-hook-form";

export default function FormLinkComponent(props: {sessionData: Session}) {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const onSubmitNewLink = ( data :any ) => {
        setLoadingSubmit(true);
        // TODO call API 
        // TODO s3 file
        setTimeout(() => {
            setLoadingSubmit(false);
        }, 2000);
    }

    return (
            <div>
                <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Générer un lien de paiement</h1>

                <form className="p-4 space-y-4" onSubmit={handleSubmit(onSubmitNewLink)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">Nom du produit<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="Nom de produit" className="input input-bordered font-bold" {...register("name", { required: true })}/>
                        {errors.name && <p className="p-3 text-red-500 font-bold text-sm">Nom de produit non valide</p>}
                    </div>

  
                    
                    <div className="md:flex justify-around space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Prix unitaire<span className="text-red-500">*</span></span>
                            </label>
                            <input type="number" placeholder="2" className="input input-bordered font-bold" {...register("price", { required: true, min:2 })}/>
                            {errors.price && <p className="p-3 text-red-500 font-bold text-sm">Prix unitaire du produit invalide, 2 euros minimum</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Devise<span className="text-red-500">*</span></span>
                            </label>
                            <select className="select select-bordered w-full" {...register("currency", { required: true })}>
                                <option>EUR</option>
                                <option>USD</option>
                            </select>
                            {errors.currency && <p className="p-3 text-red-500 font-bold text-sm">Devise non valide</p>}
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">IBAN<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="IBAN" className="input input-bordered font-bold" {...register("iban", { required: true })}/>
                        {errors.iban && <p className="p-3 text-red-500 font-bold text-sm">IBAN non valide</p>}
                    </div>

                    <div className="md:flex justify-around space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Catégorie<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Electronique" className="input input-bordered" {...register("category", { required: true })} />
                            {errors.category && <p className="p-3 text-red-500 font-bold text-sm">Catégorie invalide</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Sous catégorie<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Téléphone" className="input input-bordered" {...register("subcategory", { required: true })} />
                            {errors.subcategory && <p className="p-3 text-red-500 font-bold text-sm">Sous catégorie invalide</p>}
                        </div>
                    </div>



                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">Description du produit<span className="text-red-500">*</span></span>
                        </label>
                        <textarea placeholder="A sample product description" className="textarea textarea-bordered h-24" {...register("description", { required: true })}></textarea>
                        {errors.description && <p className="p-3 text-red-500 font-bold text-sm">Description du produit non valide</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">Image du produit<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="https://img.example.com/image.jpg" className="input input-bordered" {...register("images", { required: true })} />
                        <div className="mt-2 text-md">
                            <p>Pas d'image pour le moment ? héberger votre image sur <a className="text-blue-400" href="https://postimages.org">https://postimages.org</a></p>
                        </div>
                        {errors.images && <p className="p-3 text-red-500 font-bold text-sm">URL invalide</p>}
                        

                    </div>
                    {/* Continuez avec les autres champs de la même manière... */}

                    <div className="form-control">
                        {
                            !errors.name && !errors.price && !errors.description && !errors.images && !errors.category && !errors.subcategory ? (

                                (
                                    !loadingSubmit ? (
                                        <button type="submit" className="btn btn-primary">
                                            Générer
                                        </button>
                                    ) : (
                                        <button type="submit" className="btn btn-primary  cursor-not-allowed" disabled>
                                            <span className="loading loading-spinner loading-md">
                                            </span>
                                        </button>
                                    )
                                )

                            ) : (
                                <button type="submit" className="btn btn-primary cursor-not-allowed" disabled>Générer</button>
                            )
                        }
                    </div>
                </form>
            </div>
    )
}

// // Pour la récupération des données côté serveur avec Next.js
// export async function getServerSideProps(context:any) {
//     const session = await getServerSession(authOptions);
    
//     console.log("server side", session);

//     // Vous pouvez passer des données du serveur au composant via les props
//     return {
//         props: {
//             sessionData: session
//         }
//     };
// }