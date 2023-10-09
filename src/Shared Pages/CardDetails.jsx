import { Link, useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {

    const data = useLoaderData();

    const { id } = useParams()

    const myCard = data.filter(card => card.id == id)


    const { image, description, title, price } = myCard[0];


    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl p-3 max-w-7xl mx-auto">
                <figure><img className="w-full" src={image} alt=" " /></figure>
                <div className=" p-3">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="text-pink-500 my-2">Price: {price} $</p>
                    <div className="card-actions mt-2 ">
                        <Link><button className="btn btn-secondary text-white">Contact NOw</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CardDetails;