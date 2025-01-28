// import react from "react";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState('');

    const {session,signUpNewUser} = UserAuth();
    const navigate = useNavigate();
    console.log(session);
    const handleSignUp = async(e)=>{
        e.preventDefault()
        try {
            const result = await signUpNewUser(email,password);

            if(result.success){
                navigate('/dashboard');
            }
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('an error occurred');
        }finally{
            setLoading(false);
        }
    }


    return (
    <div>
        <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today?</h2>
        <p>already have an account?<Link to="/Signin">Sign in</Link></p>

        <div className="flex flex-col py-4">
            <input onChange={(e)=>setEmail(e.target.value)} className="p-3 mt-6" type="email" placeholder="email" />
            
            <input onChange={(e)=>{setPassword(e.target.value)}} className="p-3 mt-6" type="password" placeholder="password" />
            
            <button type="submit" disabled={loading} className="mt-6 w-full">Sign up</button>
        </div>
        </form>
        {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
    </div>
    )
};

export default Signup;