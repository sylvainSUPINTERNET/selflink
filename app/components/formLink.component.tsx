"use client";

import { Session } from "next-auth";
import { createContext, useContext, useState } from "react";
import  { useForm, Controller }  from  "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

let ibantools = require("ibantools")
const animatedComponents = makeAnimated();

export default function FormLinkComponent(props: {sessionData: Session}) {

    const { register, handleSubmit, formState:{errors}, reset, control } = useForm();

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const options = [
        { label: 'FR', value: 'FR' },
        { label: 'ES', value: 'ES' },
        { label: 'IT', value: 'IT' },
        { label: 'DE', value: 'DE' },
        { label: 'GB', value: 'GB' }
    ];

    function isValidURL(val:string) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?' + // port
            '(\\/[-a-z\\d%_.~+]*)*' + // path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(val);
    }

    const onSubmitNewLink = ( data :any ) => {
        
        setLoadingSubmit(true);

        setTimeout( async () => {

            try {
                const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL as string}/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "name": data.name,
                        "price": data.price,
                        "quantity": data.quantity,
                        "currency": "EUR",
                        "iban": data.iban,
                        // "category": data.category,
                        // "subcategory": data.subcategory,
                        "description": data.description,
                        "images": [data.images],
                        "linkName": data.linkName,
                        "countriesShipping": data.countries.map((country:any) => country.value)
                    })
                });
    
                const res = await req.json();
    
                if  ( req.status === 200 ) {
                    toast.success('Lien de paiement ajouté !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    reset()
                    setLoadingSubmit(false);
                }else {
                    setLoadingSubmit(false);
                }
    
            } catch ( e ) {
                // TODO handle error
                setLoadingSubmit(false);
            }

        },2000)

    }

    //FR1420041010050500013M02606
    function ibanValidation (ibanValue:any) {
        return ibantools.isValidIBAN(`${ibanValue}`);
    }

    return (
            <div>
                
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />

                <h1 className="p-3 rounded-lg text-2xl font-bold mb-1">Générer un lien de paiement</h1>

                <form className="p-4 space-y-4" onSubmit={handleSubmit(onSubmitNewLink)}>
                    
                    <div className="md:flex md:justify-around md:space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Nom du produit<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Nom de produit" className="input input-bordered font-bold" {...register("name", { required: true, maxLength:30, minLength:1 })}/>
                            <div className="p-2">
                                {errors.name && <p className=" text-red-500 font-bold text-sm">Nom de produit non valide, le nom doit être entre 1 et 30 caractères</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Nom du lien<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Nom du lien" className="input input-bordered" {...register("linkName", { required: true, maxLength:100, minLength:1 })} />
                            {errors.linkName && <p className="p-3 text-red-500 font-bold text-sm">Nom du lien invalide</p>}
                        </div>
                    </div>
                    

                    <div>
                        <Controller
                            name="countries"
                            control={control}
                            rules={{ required: "Ce champ est requis." }}
                            defaultValue={[
                                {
                                    label: 'FR',
                                    value: 'FR'
                                }
                            ]}
                                render={({ field, fieldState }) => (
                                    
                                    <div className="">

                                        <label className="label">
                                            <span className="text-md font-bold">Pays éligible pour livraison<span className="text-red-500">*</span></span>
                                        </label>
                                    
                                        <Select
                                            {...field}
                                            options={options}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            noOptionsMessage={() => 'Aucune option'}
                                            openMenuOnClick={true}
                                            isSearchable={true}
                                        />
                                        {fieldState.invalid && <p className="p-3 text-red-500 font-bold text-sm">{fieldState.error?.message}</p>}
                                    </div>
        
                                    )}
                                />
                    </div>
  
                    
                    <div className="md:flex md:justify-around md:space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Prix unitaire<span className="text-red-500">*</span></span>
                            </label>
                            <input type="number" placeholder="2" className="input input-bordered font-bold" {...register("price", { required: true, min:2 })}/>
                            <div className="p-2">
                                {errors.price && <p className=" text-red-500 font-bold text-sm">Prix invalide, 2 minimum</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Quantité stock<span className="text-red-500">*</span></span>
                            </label>
                            <input type="number" placeholder="2" className="input input-bordered font-bold" {...register("quantity", { required: true, min:1 })}/>
                            <div className="p-2">
                                {errors.quantity && <p className=" text-red-500 font-bold text-sm">Quantité invalide, minimum 1</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-md font-bold">Devise<span className="text-red-500">*</span></span>
                            </label>
                            <select className="select select-bordered w-full" {...register("currency", { required: true })}>
                                <option>EUR</option>
                            </select>
                            <div className="p-2">
                                {errors.currency && <p className="text-red-500 font-bold text-sm">Devise non valide</p>}
                            </div>
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">IBAN<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="IBAN" className="input input-bordered font-bold" {...register("iban", { required: true, validate: ibanValidation })}/>
                        {errors.iban && <p className="p-3 text-red-500 font-bold text-sm">IBAN non valide</p>}
                    </div>

                    {/* <div className="md:flex justify-around space-x-2">
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
                            <input type="text" placeholder="Smartphone" className="input input-bordered" {...register("subcategory", { required: true })} />
                            {errors.subcategory && <p className="p-3 text-red-500 font-bold text-sm">Sous catégorie invalide</p>}
                        </div>
                    </div> */}



                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">Description du produit<span className="text-red-500"></span></span>
                        </label>
                        <textarea placeholder="A sample product description" className="textarea textarea-bordered h-24" {...register("description", { required: true, maxLength:155 })}></textarea>
                        {errors.description && <p className="p-3 text-red-500 font-bold text-sm">Description du produit non valide, 155 caractères maximum</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="text-md font-bold">Image du produit<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="https://img.example.com/image.jpg" className="input input-bordered" {...register("images", { required: true , validate:isValidURL})} />
                        <div className="mt-2 text-md">
                            <p className="text-sm">Pas d'image pour le moment ? <span className="font-bold">télécharger</span> votre image sur <a className="text-blue-400" target="blank" href="https://postimages.org">https://postimages.org</a> et <span className="font-bold">copier/coller</span> votre <span className="font-bold">Direct link</span> généré ici</p>
                        </div>
                        {errors.images && <p className="p-3 text-red-500 font-bold text-sm">URL invalide</p>}
                    </div>

                    
                    <div className="form-control">
                        {
                            !errors.name 
                            && !errors.price 
                            // && !errors.description 
                            && !errors.images
                            //&& !errors.category && !errors.subcategory 
                            && !errors.quantity
                            && !errors.currency
                            && !errors.iban
                            && !errors.linkName
                            && !errors.countries                        
                            ? (

                                
                                (
                                    !loadingSubmit ? (
                                        <div className="flex justify-center mt-4 p-2">
                                            <button type="submit" className="btn btn-primary w-2/4">
                                                Générer
                                            </button>
                                        </div>

                                    ) : (
                                        <div className="flex justify-center mt-4 p-2">
                                            <button type="submit" className="btn btn-primary  cursor-not-allowed w-2/4" disabled>
                                                <span className="loading loading-spinner loading-md">
                                                </span>
                                                Générer
                                            </button>
                                        </div>
                                    )
                                )

                            ) : (
                                <button type="submit" className="btn btn-primary cursor-not-allowed w-2/4" disabled>Générer</button>
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