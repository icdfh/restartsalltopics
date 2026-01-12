import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()

    function handleLogin(){
        localStorage.setItem("token", "demo-token")
        navigate("/profile")
    }
    return(
        <>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login (demo token)</button>
        </>
    )
    
}
export default Login