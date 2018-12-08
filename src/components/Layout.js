import React from 'react'
import Header from '../components/header/header'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>       
        <Header />
        {children}
      </div>
    )
  }
}

export default Layout
