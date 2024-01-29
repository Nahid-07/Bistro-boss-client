import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${user?.email}`)
        .then(res => res.json())
        .then( data => setIsAdmin(data.admin))
    },[user.email])
    return[isAdmin]
};

export default useAdmin;