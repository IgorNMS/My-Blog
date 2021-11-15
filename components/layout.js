import Nav from "./nav"

const Layout = ({ children, categories, seo, banner }) => (
  <>
    <Nav categories={categories} banner={banner} />
    {children}
  </>
)

export default Layout
