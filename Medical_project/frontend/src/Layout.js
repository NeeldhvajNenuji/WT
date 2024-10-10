import { Link,Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout(){

    return(

        <div className="container">
            <div className="row">
                <div className="col">
                <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    )


}

export default Layout;