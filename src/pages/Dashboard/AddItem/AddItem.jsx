import { Helmet } from "react-helmet-async";
import SectionTitles from "../../../comonents/SectionTitles/SectionTitles";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, category, price, recipe } = data;
                    const newItem = { name, category, price: parseFloat(price), recipe, image: imgURL };
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if(data.data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })

    };



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitles heading="What's New" subHeading='Add an Item'></SectionTitles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select
                            defaultValue='Pick One'
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input type="file" {...register("image", { required: true })} className="mt-5 file-input w-full max-w-xs" />
                <br />
                <input className="btn mt-5 bg-[#835D23]" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;