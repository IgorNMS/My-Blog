import React from "react"
import Link from "next/link"
import Banner from "./banner"

const Nav = ({ categories, banner }) => {
  return (
    <div>
      <Banner banner={banner} />
      <nav
        className="uk-navbar uk-navbar-container uk-navbar-transparent"
        data-uk-navbar
      >
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav uk-light">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`}>
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link href="/about">
                <a className="uk-link-reset">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
