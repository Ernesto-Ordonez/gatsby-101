import * as React from 'react'
import Layout from '../../components/layout'
import { graphql  } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Para poder renderizar archivos .mdx correctamente usamos el plugin
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
  // console.log("Nuestra data:", data);

  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log("La foto:", image);

  return (
    <Layout pageTitle={ data.mdx.frontmatter.title }  pageHeading={ data.mdx.frontmatter.title }>
      <p>Published: { data.mdx.frontmatter.datePublished }</p>

      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>Photo Credit:{" "}
        <a href={ data.mdx.frontmatter.hero_image_credit_link } target="_blank" rel="noreferrer">{data.mdx.frontmatter.hero_image_credit_text}</a>
      </p>

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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost