import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage, banner }) => {
  return (
    <Layout categories={categories} banner={banner}>
      <Seo seo={homepage.seo} />
      <div className="uk-section uk-section-secondary">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const [articles, categories, homepage, banner] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/banner"),
  ])

  return {
    props: { articles, categories, homepage, banner },
    revalidate: 1,
  }
}

export default Home
