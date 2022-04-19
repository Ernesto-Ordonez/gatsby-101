// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import { 
    container, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText } from "./layout.module.css"

// Step 2: Define your component
const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <main className={ container }>
            <title>{ pageTitle }</title>
            <nav>
                <ul className={ navLinks }>
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/">Home</Link></li>
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/about">About</Link></li>    
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1 className={ heading }>{ pageHeading }</h1>
            { children }
        </main>
    )
}

// Step 3: Export your component
export default Layout