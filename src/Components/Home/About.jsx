
import { AiOutlinePhone } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillClockFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';

const About = () => {
    return (
        <div className='p-5 mt-10 text-center flex flex-col justify-center items-center'>
            <h3 className=" text-4xl text-pink-500">Hello! We Are an Event Planning Agency</h3>
            <h4 className="text-3xl my-2">Our Mission: Your Vision, Our Expertise</h4>
            <p>Our mission is simple yet profound: to bring your vision to life and exceed your expectations.  We believe<br /> that no two events are alike, which is why we take the time to understand your dreams,  your style,<br /> and your unique story. Whether you have a clear vision or need inspiration, we are here to guide you every step of the way.</p>
            <div>
                <div className='grid md:grid-cols-2 gap-5 mt-10'>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><FaLocationDot></FaLocationDot></div>
                        <div>
                            <p className="text-2xl">Postal Address</p>
                            <p>Party Pluse</p>
                            <p>2nd floor,Bhuiyan tower, <br />Hatirgil, Dhaka</p>
                        </div>

                    </div >
                    <div data-aos="fade-up-left" data-aos-duration="1500" className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><BsFillClockFill></BsFillClockFill></div>
                        <div>
                            <p className="text-2x">Open Hours</p>
                            <p>Monday-Friday</p>
                            <p>8.00 am - 5.00 pm</p>
                            <p>Weekends Close</p>
                        </div>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="1500" className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><AiOutlinePhone></AiOutlinePhone></div>
                        <div>
                            <p className="text-2xl">Phone & Email</p>
                            <p>Phone: <span className="text-blue-500 underline">(456) 789-1234</span></p>
                            <p>Fax: <span className="text-blue-500 underline"> (123) 456-7890</span></p>
                            <p>Email: <span className="text-blue-500 underline">hasan@gmail.com</span></p>
                        </div>

                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="1500" className=' flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><TfiWrite></TfiWrite></div>
                        <div>
                            <p className="text-2xl">Sessions</p>
                            <p>Mornings: 8 am - 12 am</p>
                            <p>Afternoons: 1 pm - 5 pm</p>
                            <p>Full Day: 8 am - 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;