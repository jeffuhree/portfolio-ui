import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';

import MyFont from '../components/font.js';
import { MyBackground, BackgroundAnimation } from '../components/background.js';
import Homepage from '../components/homepage/homepage.js';
import { Navigation, NavigationIcon } from '../components/nav.js';

class Home extends React.Component {
  componentDidMount () {
    MyFont()
    MyBackground()
  }

  render () {
    var navComponent = null
    return (
      <>
      <ReactFullpage
 
        licenseKey = {'1403168F-F2F146E3-9D05AA83-872631F1'}
        scrollingSpeed = {1000}
        verticallyCentered = {true}
        navigation
    
        render={({ state, fullpageApi }) => {
          if (state.initialized) {
            navComponent = (
              <>
              <NavigationIcon/>
              <Navigation state={state} fullpageApi={fullpageApi}/>
              </>
            )
          }

          return (
            <>
            <ReactFullpage.Wrapper>
              <Homepage/>
              <div className="section"></div>
              <div className="section"></div>
              <div className="section"></div>
              <div className="section"></div>
            </ReactFullpage.Wrapper>
            {navComponent}
            <BackgroundAnimation/>
            </>
          )
        }}
      />
      </>
    )
  }
}

export default Home
