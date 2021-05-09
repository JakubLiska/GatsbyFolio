import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({data}) {
  const {title, copyright, developedBy} = data.allSite.edges[0].node.siteMetadata
  return (
    <Layout>  
      <section className={styles.header}>
        <div>
          <h2>Main Page </h2>
          <h3>My Name is Jakub Liska and this is a Main Page!</h3>
          <Link className={styles.btn} to="/projects">My Portfolio projects!</Link>
          <p>This is my {title}, developed by: {developedBy}, {copyright}</p>
        </div>
      <img src="/portfolio.png" alt="portfolio icon" style={{maxWidth: '50%'}}></img>
      </section>
    </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  allSite(filter: {}) {
    edges {
      node {
        siteMetadata {
          copyright
          title
          developedBy
        }
      }
    }
  }
}
`
