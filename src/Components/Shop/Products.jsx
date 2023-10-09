import { PropTypes } from "prop-types";
import { toast } from "react-toastify";


const Products = ({ product }) => {

    const { product_name, price, image, description } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="product" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <p>{description}</p>
                <p className="text-red-500">{price} $</p>
                <div className="card-actions">
                    <button onClick={() => toast(`${product_name}`)} className="btn btn-secondary text-white">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

Products.propTypes = {
    product: PropTypes.object
}

export default Products;