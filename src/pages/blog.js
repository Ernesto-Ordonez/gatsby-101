// En este archivo se detalla como importar data cuando no se trata de un "building-block" sino de un page component
import * as React from "react"
import Layout from "../components/layout"

// Paso 1: Importamos la tag "graphql" del paquete "gastby"
import { graphql } from 'gatsby'

// Para poder renderizar archivos .mdx correctamente usamos el plugin
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPage = ({ data }) => {
    return (
        // En el ejemplo esto esta anidado en un <div>, no es necesario pero es importante recordar que con React solo podemos devolver un parent
        <Layout pageTitle="Blog" pageHeading="Our Blog">
            <p>Blog posts will appear here!</p>
                {
                // Paso 3: Usamos los resultados del query en el componente:
                data.allMdx.nodes.map(node => (
                    // La "key" property es algo que necesita React
                    <article key={ node.id }>
                        <hr></hr>
                        <h1>{ node.frontmatter.title }</h1>
                        <h5>Published: { node.frontmatter.datePublished }, by { node.frontmatter.author }</h5>
                        <h6>Last edited: { node.parent.modifiedTime }</h6>

                        <MDXRenderer>
                            { node.body }
                        </MDXRenderer>
                        
                    </article>
                ))
                }
        </Layout>
    )
}

// Paso 2: Exportamos nuestra page query
// El porque esta fuera del componente y otros detalles se pueden ver en: https://www.gatsbyjs.com/docs/tutorial/part-4/

// Ejemplo usando allFile (solamente podemos acceder al nombre del archivo, y otros detalles como metadata, pero no el contenido)
// export const query = graphql`
//     query {
//         allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//             nodes {
//                 name
//                 id
//             }
//         }
//     }
// `

// Ejemplo usando allMdx (para poder acceder al contenido de los archivos) | La fecha fue formateada usando MomentJS (https://momentjs.com/)
export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
    nodes {
      frontmatter {
        author
        datePublished(formatString: "dddd, MMMM Do YYYY", locale: "en-us")
        title
      }
      id
      body
      parent {
        ... on File {
          modifiedTime(formatString: "dddd, MMMM Do YYYY")
        }
      }
    }
  }
}
`

export default BlogPage