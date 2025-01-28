import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const dashboard = () => {
    const {session,signOut} = UserAuth();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate();
    console.log(session);
    
    const handleSignOut = async(e)=>{
        e.preventDefault();
        try {
            await signOut();
            navigate("/");

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome,{session?.user?.email}</h2>
            <div>
                <p onClick={handleSignOut} className='hover:cursor-pointer border inline-block px-3 py-4 mt-3'>
                    Sign out
                </p>
            </div>
        </div>
    )
};

export default dashboard;