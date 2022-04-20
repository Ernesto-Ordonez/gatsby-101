// mportamos React para poder usar JSX
import * as React from "react"

// Importamos el "building block" component para usar links con Gatsby
import { Link } from "gatsby"

// Importamos los estilos
import { 
    container,
    siteTitle, 
    heading,
    navLinks,
    navLinkItem,
    navLinkText } from "./layout.module.css"

// Imporamos el "hook" de Gatsby para hacer queries con GraphQL
import { useStaticQuery, graphql } from "gatsby"

// Definimos el componente
const Layout = ({ pageTitle, pageHeading, children }) => {

    // Hacemos un query para sacar el nombre del sitio de la config de Gatsby (gatsby-config.js)
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `
    );

    // console.log("mi query:", data);

    return (
        <main className={ container }>
            <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
            <p className={ siteTitle }>{ data.site.siteMetadata.title }</p>
            <nav>
                <ul className={ navLinks }>
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/">Home</Link></li>
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/about">About</Link></li>    
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/contact">Contact</Link></li>
                    <li className={ navLinkItem }><Link className={ navLinkText } to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <h1 className={ heading }>{ pageHeading }</h1>
            { children }
        </main>
    )
}

// Exportamos el componente
export default Layout