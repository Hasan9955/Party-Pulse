import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ data }) => {

    const { id, image, title, description, price } = data;
    return (
        <div data-aos="fade-down" data-aos-duration="1500" className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt=" " /></figure>
            <div className=" p-3">
                <h2 className="card-title">{title}</h2>
                <p>{

                    description.length > 50 ? <> {description.slice(0, 65)} <Link to={`/details/${id}`} className='font-bold text-blue-500 ml-1'> see more...</Link></>: description

                }</p>
                <p className='text-pink-500 ml-1'>Price: {price} $</p>
                <div className="card-actions mt-2 ">
                    <Link to={`/details/${id}`}><button  className="btn btn-secondary text-white">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    data: PropTypes.object
}
export default Card;