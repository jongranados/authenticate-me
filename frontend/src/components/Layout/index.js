import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

export default function Layout({ sessionUser }) { 

    return (
			<div className="min-h-screen flex flex-col justify-start">
                <Navigation sessionUser={ sessionUser }/>
                <Outlet/>
			</div>
    )
}
