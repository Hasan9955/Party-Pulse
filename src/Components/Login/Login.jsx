import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

    const { signIn, googleSign } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation();
    

    const handleLogin = e => {
        e.preventDefault();
        setError("")

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(() => {
                toast.success('Successfully Login!!!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setError('Invalid email or password')
            })
    }
    const handleGoogle = () => {
        googleSign()
            .then(() => {
                toast.success('Registration successful!')
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="flex justify-center">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleLogin}>
                    {
                        error && <p className="text-red-500 mx-auto">{error}</p>
                    }

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                            <label className="text-2xl absolute hidden md:flex ml-72 mt-3" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>

                                }
                            </label>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                    
                </form>
                <div className="pb-5 px-5 flex flex-col justify-center items-center">
                    <div className="flex gap-4 items-center mb-2">
                        <p>Registration with: </p>
                        <button onClick={handleGoogle} className="btn text-2xl"><FcGoogle></FcGoogle></button>
                    </div>
                    <p className="mx-auto">New here? <Link className="text-blue-500" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;