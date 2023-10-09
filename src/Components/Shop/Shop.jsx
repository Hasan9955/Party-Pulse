
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { toast } from "react-toastify";


const Shop = () => {
    const data = useLoaderData()


    return (
        <div className="p-3">
            <h2 className="text-center text-2xl md:text-4xl text-pink-500">Explore Our Special Products</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 p-3 grid-cols-1 gap-5">
                {
                    data.map(card => <Products key={card.id} product={card}></Products>)
                }
            </div>
            <div className="flex justify-center m-10"><button onClick={() => toast('This feature will be coming Soon!!!')} className="btn btn-secondary text-white  w-40">My Cart</button></div>
        </div>
    );
};

export default Shop;