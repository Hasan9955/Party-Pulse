
import { Link } from "react-router-dom";
import About from "./About";
import OurStap from "./OurStap";
import Services from "./Services";


const Home = () => {
    return (
        <div>

            <header className="flex flex-col justify-center items-center max-w-7xl mx-auto">
                <img className="opacity-40 hover:opacity-40 w-11/12 " src="https://i.ibb.co/qNq7L4M/Birthdgay-Kids-1.jpg" alt="" />
                <div className="p-12 absolute text-center ">
                    <div>
                        <h1 className="font-bold md:text-5xl text-xl "><span className="text-pink-500">Your Event,</span>
                            <span>Our Expertise </span></h1>

                        <p className="font-medium text-center text-sm md:text-lg">Planning a Wedding, Proposal or Event in our busy city is not so easy!!!</p>
                        <button className="md:mt-3 rounded-full p-2 text-white bg-pink-600 hover:bg-pink-700 text-sm ">Explore more</button>
                    </div>
                </div>
            </header>
            <Services></Services>
            <About></About>
            <OurStap></OurStap>


            <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl text-center text-pink-500">Gallery</h3>
                <p className="text-3xl text-center">Our Recent Projects!!!</p>
                <div className="grid md:grid-cols-2 lg:px-20  md:px-10 mt-5 p-5 grid-cols-1 gap-5">
                    <img className="rounded-xl" src="https://i.ibb.co/W36QWHJ/download.jpg" alt="" />
                    <img className="rounded-xl" src="https://i.ibb.co/gPRJwg5/images.jpg" alt="" />
                    <img className="rounded-xl" src="https://i.ibb.co/7SJnC0g/lrelyea-even.jpg" alt="" />
                    <img className="rounded-xl" src="https://i.ibb.co/wzLkJ14/images-2.jpg" alt="" />
                </div>
                <Link to='/gallery'><button className="btn btn-secondary text-white">Show more</button></Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 p-3">
                <h2 className="text-4xl text-pink-500">Shop</h2>
                <p className="text-center mt-2">Welcome in our shop, your one-stop destination for all things beautiful and extraordinary. Step into a <br /> world of creativity, where artistry meets craftsmanship, and inspiration knows no bounds.</p>
                <div className="flex flex-col md:flex-row gap-5 mt-5 ">
                    
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/YWRMLQw/images.jpg" alt="product" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Birthday Balloons Set</h2>
                            <p className="text-red-500">Price: 16.55 $</p>
                         </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img src="https://i.ibb.co/Dfr8Hrv/download.jpg" alt="product" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Party Hats Pack</h2>
                            <p className="text-red-500">Price: 20 $</p>
                         </div>
                    </div>
                </div>
                <Link to='/shop'><button className="btn btn-secondary mt-5 text-white">Visit Shop</button></Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 p-3">
                <h2 className="text-4xl text-pink-500">Testimonials</h2>
            </div>

        </div>
    );
};

export default Home;