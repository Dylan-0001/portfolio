import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer.jsx";

export const Layout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    );
}