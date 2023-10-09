
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
            
        </div>
    );
};

export default Home;