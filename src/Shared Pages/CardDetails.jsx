import { Link, useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {

    const data = useLoaderData();

    const { id } = useParams()

    const myCard = data.filter(card => card.id == id)


    const { image, description, title } = myCard[0];


    return (
        <div>
            
            <div className="card bg-base-100 shadow-xl p-3 max-w-7xl mx-auto">
                <figure><img className="w-full" src={image} alt=" " /></figure>
                <div className=" p-3">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions mt-2 ">
                        <Link><button className="btn btn-secondary text-white">Show Details</button></Link>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CardDetails;