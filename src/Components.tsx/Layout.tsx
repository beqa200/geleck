import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Layout(){
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/home")
    },[])
    return(
        <>
        
        <Outlet/>
        </>
    )
}
export default Layout