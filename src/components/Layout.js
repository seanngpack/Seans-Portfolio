import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>       
        <Header />        
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
