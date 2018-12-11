import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
// import './index.css'
import './style.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
     {/* <Header siteTitle={data.site.siteMetadata.title} /> */} 
<header>
    <div className="inner">
      <h1><Link to="/">GraphQL Consulting</Link></h1>
      <nav>
        <a href="" className="button primary">Features</a>
        <a href="" className="button default">Open Source</a>
      </nav>
    </div>
  </header>

    
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '0px 1.0875rem 1.45rem',
      //   paddingTop: 0,
      // }}
    >
      {children()}

       <footer>
    <div className="inner">

      <div>
        <p>&copy; 2018. GraphQL Consultants. All Rights Reserved.</p>
        <p className="part-of">Part of <a href="https://www.infiniti7.com/" target="_blank">Infiniti7</a> Inc.</p>
      </div>

    </div>
  </footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
