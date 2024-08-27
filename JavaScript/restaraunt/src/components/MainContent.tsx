import { createBrowserRouter, RouterProvider, RouterProviderProps, Router, Outlet } from "react-router-dom"

/** main content holds content outside of header and footer */
export default function MainContent() {
    console.log("main content")
    return (
        <div style={{height: "100vh"}}>
            <Outlet></Outlet>
        </div>
        
    )
}