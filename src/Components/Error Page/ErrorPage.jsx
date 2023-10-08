import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h4 className="text-4xl text-amber-500 font-bold text-center mt-60">Oops!!!! <br /><Link to='/'><button className="btn btn-primary mt-5">Go Home</button></Link></h4>
        </div>
    );
};

export default ErrorPage;