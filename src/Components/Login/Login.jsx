import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


const Login = () => {

    const { signIn } = useContext(AuthContext)
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
                    <p className="mx-auto">New here? <Link className="text-blue-500" to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;