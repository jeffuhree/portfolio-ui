import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import MyFont from '../components/font.js';
import { MyBackground, BackgroundAnimation } from '../components/background.js';
import Homepage from '../components/homepage/homepage.js';
import { Navigation, NavigationIcon } from '../components/nav.js';

class Home extends React.Component {
  constructor() {
    super()
    this.navComponent = null

    this.afterFullpageRender = this.afterFullpageRender.bind(this)
  }

  componentDidMount () {
    MyFont()
    MyBackground()
  }

  afterFullpageRender() {
    this.navComponent = (
      <>
      <NavigationIcon/>
      <Navigation fullpageApi={fullpage_api}/>
      </>
    )
    this.forceUpdate()
  }

  render () {
    return (
      <>
      <ReactFullpage
 
        licenseKey = {'1403168F-F2F146E3-9D05AA83-872631F1'}
        scrollingSpeed = {1000}
        verticallyCentered = {true}
        afterRender={() => { this.afterFullpageRender()} }
    
        render={({ state, fullpageApi }) => {
          return (
            <>
            <ReactFullpage.Wrapper>
              <Homepage/>
              <div className="section"></div>
              <div className="section"></div>
              <div className="section"></div>
              <div className="section"></div>
            </ReactFullpage.Wrapper>
            <BackgroundAnimation/>
            </>
          )
        }}
      />
      {this.navComponent}
      </>
    )
  }
}

export default Home
