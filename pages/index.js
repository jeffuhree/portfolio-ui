import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import { TweenMax } from "gsap"

import MyFont from '../components/font.js';
import { MyBackground, BackgroundAnimation } from '../components/background.js';
import Homepage from '../components/homepage/homepage.js';
import { Navigation, NavigationIcon } from '../components/nav.js';

class Home extends React.Component {
  state = {
    fullpageApi: null,
    windowHeight: 0,
    navOpacity: [1, 0.8, 0.6, 0.4, 0.2]
  }

  constructor() {
    super()
    this.navComponent = null

    this.sectionMapping = ["landing-page", "about-page", "work-page", "edu-page", "project-page"]

    this.afterFullpageRender = this.afterFullpageRender.bind(this)
    this.onSwitchSection = this.onSwitchSection.bind(this)
  }

  componentDidMount () {
    MyFont()
    MyBackground()
  }

  afterFullpageRender() {
    this.setState({
      fullpageApi: fullpage_api,
      windowHeight: window.innerHeight
    });
  }

  onSwitchSection(origin, destination, direction) {
    if (document.getElementById("main-nav-icon").style.display == "" && document.getElementById("main-nav").style.display == "") { // block scrolling when playing intro
      return false;
    }

    var pageNum = destination.index

    var opacities = []
    for (var i = 0; i < 5; ++i) {
      opacities.push(1 - (Math.abs(pageNum - i) * 0.2))
    }
    this.setState({
      navOpacity: opacities
    })

    var newHeight = window.innerHeight - pageNum * 95
    TweenMax.to("#main-nav", 1, { height: newHeight, marginTop: "auto"})

    for (const [i, sec] of this.sectionMapping.entries()) {
      const element = document.getElementById("nav-" + sec)
      if (origin.item.id == sec) {
        TweenMax.to(element, 0.5, { scale: 1, opacity: opacities[i] })
      } else if (destination.item.id == sec) {
        TweenMax.to(element, 0.5, { scale: 2, opacity: opacities[i] })
      } else {
        TweenMax.to(element, 0.5, { opacity: opacities[i] })
      }
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
            </>
          )
        }}
      />
      <NavigationIcon windowHeight={this.state.windowHeight}/>
      <Navigation opacities={this.state.navOpacity} windowHeight={this.state.windowHeight} fullpageApi={this.state.fullpageApi}/>
      <BackgroundAnimation/>
      </>
    )
  }
}

export default Home
