import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const About = ({ category, categories, bannerApi }) => {
  const seo = {
    metaTitle: "About",
    metaDescription: category.description,
  }

  return (
    <Layout categories={categories} banner={bannerApi}>
      <Seo seo={seo} />
      <div className="container">
        <h2>Hello there!!!</h2>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const category = await fetchAPI("/categories")
  const categories = await fetchAPI("/categories")
  const bannerApi = await fetchAPI("/banner")

  return {
    props: { category, categories, bannerApi },
    revalidate: 1,
  }
}

export default About
