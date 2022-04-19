// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
  
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
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage