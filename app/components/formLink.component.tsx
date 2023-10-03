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
        const currency = "EUR";

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
                        "currency": currency,
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

                <h1 className="p-0.5 rounded-lg text-2xl font-bold">Générer un lien de paiement</h1>

                <form className="p-4" onSubmit={handleSubmit(onSubmitNewLink)}>
                    
                    <div className="md:flex md:justify-around md:space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-sm font-bold">Nom du produit<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Nom de produit" className="text-sm input input-bordered font-bold h-8" {...register("name", { required: true, maxLength:30, minLength:1 })}/>
                            <div className="p-0.5 min-h-[2.2em] ">
                                {errors.name && <p className=" text-red-500 font-bold text-sm">Valeur doit être en 1 et 30 caractères</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-sm font-bold">Nom du lien<span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Nom du lien" className="input input-bordered h-8" {...register("linkName", { required: true, maxLength:100, minLength:1 })} />
                            <div className="p-0.5 min-h-[2.2em]">
                                {errors.linkName && <p className="text-red-500 font-bold text-sm">Valeur doit être en 1 et 100 caractères</p>}
                            </div>
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

                                        <label className="label text-sm">
                                            <span className="text-md font-bold">Pays éligible pour livraison<span className="text-red-500">*</span></span>
                                        </label>
                                    
                                        <Select
                                            {...field}
                                            options={options}
                                            className="h-8"
                                            isMulti
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            noOptionsMessage={() => 'Aucune option'}
                                            openMenuOnClick={true}
                                            isSearchable={true}
                                        />
                                        <div className="p-0.5 min-h-[2.2em]">
                                            {fieldState.invalid && <p className="p-3 text-red-500 font-bold text-sm">{fieldState.error?.message}</p>}
                                        </div>
                                    </div>
        
                                    )}
                                />
                    </div>
  
                    
                    <div className="md:flex md:justify-around md:space-x-2">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-sm font-bold">Prix unitaire<span className="text-red-500">*</span></span>
                            </label>
                            <input type="number" placeholder="2" className="input input-bordered font-bold h-8" {...register("price", { required: true, min:2 })}/>
                            <div className="p-0.5 min-h-[2.2em]">
                                {errors.price && <p className=" text-red-500 font-bold text-sm">Prix invalide, 2 minimum</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-sm font-bold">Quantité stock<span className="text-red-500">*</span></span>
                            </label>
                            <input type="number" placeholder="2" className="input input-bordered font-bold h-8" {...register("quantity", { required: true, min:1 })}/>
                            <div className="p-0.5 min-h-[2.2em]">
                                {errors.quantity && <p className=" text-red-500 font-bold text-sm">Quantité invalide, minimum 1</p>}
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                            <span className="text-sm font-bold">Devise<span className="text-red-500">*</span></span>
                            </label>
                            <input  value="EUR" {...register("currency")} type="text" id="disabled-input" aria-label="disabled input" className="h-8  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                            </input>
                            <div className="p-0.5 min-h-[2.2em]">
                            {errors.currency && <p className="text-red-500 font-bold text-sm">Devise non valide</p>}
                            </div>
                        </div>

                    </div>


                    <div className="form-control">
                        <label className="label">
                        <span className="text-sm font-bold">IBAN<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="IBAN" className="input input-bordered font-bold h-8" {...register("iban", { required: true, validate: ibanValidation })}/>
                        <div className="p-0.5 min-h-[2.2em]">
                            {errors.iban && <p className=" text-red-500 font-bold text-sm">IBAN non valide</p>}
                        </div>
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
                        <span className="text-sm font-bold">Description du produit<span className="text-red-500"></span></span>
                        </label>
                        <textarea placeholder="A sample product description" className="textarea textarea-bordered text-sm h-10" {...register("description", { required: true, maxLength:155 })}></textarea>
                        <div className="p-0.5 min-h-[2.2em]">
                            {errors.description && <p className="text-red-500 font-bold text-sm">Description du produit non valide, 155 caractères maximum</p>}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="text-sm font-bold">Image du produit<span className="text-red-500">*</span></span>
                        </label>
                        <input type="text" placeholder="https://img.example.com/image.jpg" className="input input-bordered" {...register("images", { required: true , validate:isValidURL})} />
                        <div className="mt-2 text-sm">
                            <p>Pas d'image pour le moment ? <span className="font-bold">télécharger</span> votre image sur <a className="text-blue-400" target="blank" href="https://postimages.org">https://postimages.org</a> et <span className="font-bold">copier/coller</span> votre <span className="font-bold">Direct link</span> généré ici</p>
                        </div>
                        <div className="p-0.5 min-h-[2.2em]">
                            {errors.images && <p className="text-red-500 font-bold text-sm">URL invalide</p>}
                        </div>
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
                                <div className="flex justify-center mt-4 p-2">
                                    <button type="submit" className="btn btn-primary cursor-not-allowed w-2/4" disabled>Générer</button>
                                </div>
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