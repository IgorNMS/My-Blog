import Nav from "./nav"

const Layout = ({ children, categories, seo, banner }) => (
  <div className="salve">
    <Nav categories={categories} banner={banner} />
    {children}
  </div>
)

export default Layout
