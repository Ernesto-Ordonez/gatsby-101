import * as React from 'react'
import Layout from '../../components/layout'
import { graphql  } from 'gatsby';

// Para poder renderizar archivos .mdx correctamente usamos el plugin
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
  console.log("Nuestra data:", data);
  return (
    <Layout pageTitle={ data.mdx.frontmatter.title }  pageHeading={ data.mdx.frontmatter.title }>
      <p>Published: { data.mdx.frontmatter.datePublished }</p>

      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        author
        datePublished(formatString: "dddd, MMMM Do YYYY", locale: "en-US")
      }
      body
    }
  }
`

export default BlogPost