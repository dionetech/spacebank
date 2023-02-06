import { Suspense } from "react";
import Footer from "../components/nav/Footer";
import Navbar from "../components/nav/Navbar";
import AppLoader from "../utils/appLoader";
import useDarkmode from "../hooks/useDarkmode";
// import { ToastContainer } from "react-toastify";

const Page = ({ children }) => {

    const { darkmode, toggleDarkmode } = useDarkmode();

    return (
        <Suspense fallback={<AppLoader />}>
            {/* <ToastContainer /> */}
            <Navbar
                darkmode={darkmode}
                toggleDarkmode={toggleDarkmode}
            />
            <div
                className={`App ${darkmode?'darkmode':''}`}
                id="butter"
            >{children}</div>
            <Footer
                darkmode={darkmode}
            />
        </Suspense>
    )
}

export default Page;