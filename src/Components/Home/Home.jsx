
import { Link } from "react-router-dom";
import About from "./About";
import OurStap from "./OurStap";
import Services from "./Services";


const Home = () => {
    return (
        <div>

            <header className="flex flex-col justify-center items-center max-w-7xl mx-auto">
                <img className="opacity-40  w-11/12 " src="https://i.ibb.co/qNq7L4M/Birthdgay-Kids-1.jpg" alt="" />
                <div className="p-12 absolute text-center ">
                    <div>
                        <h1 className="font-bold md:text-5xl text-xl "><span className="text-pink-500">Your Event,</span>
                            <span>Our Expertise </span></h1>

                        <p className="font-medium text-center text-sm md:text-lg">Planning a Wedding, Proposal or Event in our busy city is not so easy!!!</p>
                        <button data-aos="zoom-in-down" data-aos-duration="2000" className="md:mt-3 rounded-full p-2 text-white bg-pink-600 hover:bg-pink-700 text-sm ">Explore more</button>
                    </div>
                </div>
            </header>
            <Services></Services>
            <About></About>
            <OurStap></OurStap>


            <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl text-center text-pink-500">Gallery</h3>
                <p className="text-3xl text-center">Our Recent Projects!!!</p>
                <div className="grid md:grid-cols-2 lg:px-44  md:px-10 mt-5 p-5 grid-cols-1 gap-5">
                    <img data-aos="fade-right" data-aos-duration="1500" className="rounded-xl" src="https://i.ibb.co/W36QWHJ/download.jpg" alt="" />
                    <img data-aos="fade-left" data-aos-duration="1500" className="rounded-xl" src="https://i.ibb.co/gPRJwg5/images.jpg" alt="" />
                    <img data-aos="fade-right" data-aos-duration="1500" className="rounded-xl" src="https://i.ibb.co/7SJnC0g/lrelyea-even.jpg" alt="" />
                    <img data-aos="fade-left" data-aos-duration="1500" className="rounded-xl" src="https://i.ibb.co/wzLkJ14/images-2.jpg" alt="" />
                </div>
                <Link to='/gallery'><button data-aos="zoom-in" data-aos-duration="1500" className="btn btn-secondary text-white">Show more</button></Link>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 p-3">
                <h2 className="text-4xl text-pink-500">Shop</h2>
                <p className="text-center mt-2">Welcome in our shop, your one-stop destination for all things beautiful and extraordinary. Step into a <br /> world of creativity, where artistry meets craftsmanship, and inspiration knows no bounds.</p>
                <div className="flex flex-col md:flex-row gap-5 mt-5 ">

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img data-aos="fade-right" data-aos-duration="1500" src="https://i.ibb.co/YWRMLQw/images.jpg" alt="product" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Birthday Balloons Set</h2>
                            <p className="text-red-500">Price: 16.55 $</p>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img data-aos="fade-left" data-aos-duration="1500" src="https://i.ibb.co/Dfr8Hrv/download.jpg" alt="product" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Party Hats Pack</h2>
                            <p className="text-red-500">Price: 20 $</p>
                        </div>
                    </div>
                </div>
                <Link to='/shop'><button data-aos="zoom-in" data-aos-duration="1500" className="btn btn-secondary mt-5 text-white">Visit Shop</button></Link>
            </div>





{/* Testimonials */}

            <div className="flex flex-col items-center justify-center mt-10 p-3">
                <h2 className="text-4xl text-pink-500">Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-5 md:px-5 mt-10 lg:px-36">
                    <div className="bg-base-100 p-5 border rounded-xl shadow-xl ">
                        <h2 className="text-center">I recently used Party Plus to plan my sisters bridal shower, and I could not be happier with the results. The website user-friendly interface made it a breeze to browse through various vendor options and find the perfect venue. Highly recommended!</h2>
                        <div className="flex gap-2 items-center justify-center mt-4">
                            <img src="https://i.ibb.co/FxbJFg1/Ellipse-1.png" alt="" />
                            <p>Sara Liam</p>
                        </div>
                    </div>
                    <div className="bg-base-100 p-5 border rounded-xl shadow-xl ">
                        <h2 className="text-center">Party Plus is a game-changer for event enthusiasts like me. I recently attended a friends wedding that was planned through this website, and it was a magical experience. I will definitely use Party plus for my next event!</h2>
                        <div className="flex gap-2 items-center justify-center mt-4">
                            <img src="https://i.ibb.co/d52Cr6W/Ellipse-1-1.png" alt="" />
                            <p>Linada Movrizza</p>
                        </div>
                    </div>
                    <div className="bg-base-100 p-5 border rounded-xl shadow-xl ">
                        <h2 className="text-center">Party Plus is a valuable tool for event planning. The vendor directory helped me discover a talented cake artist, and the party planning tools saved me a lot of time. My only suggestion would be to add more interactive features for kids party planning specifically, like themed decoration ideas.</h2>
                        <div className="flex gap-2 items-center justify-center mt-4">
                            <img src="https://i.ibb.co/JntWWGL/Ellipse-1-2.png" alt="" />
                            <p>Jessica Mann</p>
                        </div>
                    </div>
                    <div className="bg-base-100 p-5 border rounded-xl shadow-xl ">
                        <h2 className="text-center">I can not say enough about the fantastic experience I had with Party Plus. From booking our engagement party venue to finding the perfect photographer, everything was smooth and efficient. It truly made our special day even more memorable.</h2>
                        <div className="flex gap-2 items-center justify-center mt-4">
                            <img src="https://i.ibb.co/kDytKCM/Ellipse-1-3.png" alt="" />
                            <p>Jane Sandoers</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;