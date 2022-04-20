// En este archivo se detalla como importar data cuando no se trata de un "building-block" sino de un page component
import * as React from "react"
import Layout from "../components/layout"

// Paso 1: Importamos la tag "graphql" del paquete "gastby"
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        // En el ejemplo esto esta anidado en un <div>, no es necesario pero es importante recordar que con React solo podemos devolver un parent
        <Layout pageTitle="Blog" pageHeading="Our Blog">
            <p>Blog posts will appear here!</p>

            <ul>
                {
                // Paso 3: Usamos los resultados del query en el componente:
                data.allFile.nodes.map(node => (
                    // La "key" property es algo que necesita React
                    <li key={ node.id }>
                        { node.name }
                    </li>
                ))
                }
            </ul>
        </Layout>
    )
}

// Paso 2: Exportamos nuestra page query
// El porque esta fuera del componente y otros detalles se pueden ver en: https://www.gatsbyjs.com/docs/tutorial/part-4/
export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
                id
            }
        }
    }
`

export default BlogPage