// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const myProps = {
  name: "Ernesto",
  lastName: "Ordoñez",
  age: 28,
  favColor: "Red"
}

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" pageHeading="Homepage">
      <p>My name is {myProps.name} {myProps.lastName}, I'm {myProps.age} years old and I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src="../images/loki-190422.jpeg"
        alt="Loki"
        placeholder="blurred"
        layout="fixed"
        width={400}
        height={400}
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage