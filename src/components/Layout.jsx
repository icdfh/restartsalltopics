import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout(){
    return(
    <div>
        <Nav/>
        <hr/>
        <div>
            <Outlet/>
        </div>
    </div>
    )
}
export default Layout