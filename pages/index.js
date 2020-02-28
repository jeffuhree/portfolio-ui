import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { TweenMax } from "gsap"

import MyFont from '../components/font.js';
import { MyBackground, BackgroundAnimation } from '../components/background.js';
import Homepage from '../components/homepage/homepage.js';
import { Navigation, NavigationIcon } from '../components/nav.js';

class Home extends React.Component {
  constructor() {
    super()
    this.navComponent = null

    this.afterFullpageRender = this.afterFullpageRender.bind(this)
    this.onSwitchSection = this.onSwitchSection.bind(this)
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

  onSwitchSection(origin, destination, direction) {
    if (document.getElementById("main-nav-icon").style.display == "" && document.getElementById("main-nav").style.display == "") { // block scrolling when playing intro
      return false;
    }

    if (direction != null) { // main menu
      var pageNum = destination.index
      var newHeight = window.innerHeight - pageNum * 95

      TweenMax.to("#nav-" + origin.item.id, 0.5, { scale: 1 })
      TweenMax.to("#nav-" + destination.item.id, 0.5, { scale: 2 })  
      TweenMax.to("#main-nav", 1, { height: newHeight, marginTop: "auto"})
    }

    if (document.getElementById("main-nav-icon").style.display != "" && document.getElementById("main-nav-icon").style.display != "none") {
      TweenMax.fromTo("#main-nav-icon", 0.5, {rotation: 0}, {rotation: 25, repeat: 1, yoyo: true})
    }
  }

  render () {
    return (
      <>
      <ReactFullpage
 
        licenseKey = {'1403168F-F2F146E3-9D05AA83-872631F1'}
        scrollingSpeed = {1000}
        verticallyCentered = {true}
        afterRender={() => { this.afterFullpageRender()} }
        onLeave={(origin, destination, direction) => { return this.onSwitchSection(origin, destination, direction) } }
    
        render={({ state, fullpageApi }) => {
          return (
            <>
            <ReactFullpage.Wrapper>
              <Homepage/>
              <div id="about-page" className="section"></div>
              <div id="work-page" className="section"></div>
              <div id="edu-page" className="section"></div>
              <div id="project-page" className="section"></div>
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
