/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{ReactNode} from "react"
//import Header from "./header"
//import MobileNav from "./mobileNav"
//import Footer from "./footer" 
import ScrollUp from "./scrollUp"

interface Props {
  children: ReactNode;
  class_name?:string;
  isHome?:boolean;
}
const Layout = ({ children,class_name,isHome=false } : Props) => {

  return (
    <>
      {/*<MobileNav atHome={isHome}/>
      <Header atHome={isHome}/>*/}
      <main className={class_name}>{children}</main>
      {/*<Footer />*/}
      <ScrollUp />
    </>
  )
}

export default Layout
