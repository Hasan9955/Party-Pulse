import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";



const Register = () => {
    const { createUser, googleSign } = useContext(AuthContext)

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        setError("")


        if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{6,}$/.test(password)) {
            return setError('please provide  at last 6 character')
        }

        createUser(email, password)
            .then(result => {

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                toast.success('Registration successful!')
                navigate('/')
                location.reload() 

            })
            .catch(error => {
                console.error(error)
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
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <span className="absolute hidden md:flex md:left-80  xl:left-80 mb-16 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>

                                }
                            </span>
                            {
                                error &&
                                <ul className="text-red-400 list-disc text-sm">
                                    <li>Minimum six in length !</li>
                                    <li>At least one upper case letter !</li>
                                    <li>At least one special character !</li>
                                </ul>
                            }
                        </label>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Register</button>
                    </div>

                </form>
                <div className="pb-5 px-5">
                    <div className="flex gap-4 items-center mb-2">
                        <p>Registration with: </p>
                        <button onClick={handleGoogle} className="btn text-2xl"><FcGoogle></FcGoogle></button>
                    </div>
                    <p className="mx-auto">Already have an account? <Link className="text-blue-500" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;