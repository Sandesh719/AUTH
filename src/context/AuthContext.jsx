/* eslint-disable react/prop-types */
import { createContext,useState,useContext,useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";
// import { data } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [session,setSession] = useState(undefined);
    //sing up
    const signUpNewUser = async(email,password)=>{
        const {data,error} = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if(error){
            console.error("there was a problem signing up : ",error);
            return {success:false,error:error.message}
        }
        return {success:true,data};
    };

    //sign in
    const signInUser = async(email,password)=>{
        try {
            const {data,error} = await supabase.auth.signInWithPassword({
                email:email,
                password: password
            })
            if(error){
                console.error('sign in error occurred : ',error);
                return {success:false,error:error.message}
            }
            return {success:true,data};
        } catch (error) {
            console.error('an error occurred : ',error);
        }
    }

    useEffect(()=>{
        supabase.auth.getSession().then(({data:{session}})=>{
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event,session)=>{
            setSession(session);
        })
    },[])
    //sign out
    const signOut = ()=>{
        const {error} = supabase.auth.signOut();
        if(error){
            console.log('there was an : ',error);
        }
    }


    

    return (
        <AuthContext.Provider value={{session,signUpNewUser,signInUser,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext);
}