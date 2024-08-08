import Shop from "./Shop"
import Home from "./Home"
import { createBrowserRouter, RouterProvider, RouterProviderProps, Router, Outlet } from "react-router-dom"

/** main content holds content outside of header and footer */
export default function MainContent() {

    return (
        <div style={{height: "100vh"}}>
            <Outlet></Outlet>
        </div>
        
    )
}