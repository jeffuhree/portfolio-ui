import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Particles from "react-particles-js"
import throttle from 'lodash/throttle';
import { TweenMax } from "gsap"

import MyFont from '../components/font.js';
import { MyBackground, BackgroundAnimation } from '../components/background.js';
import Homepage from '../components/home/homepage.js';
import { Navigation, NavigationIcon } from '../components/nav.js';
import Information from '../components/info.js';
import MyHead from '../components/head.js';
import ParticleOptions from '../components/particle-options.js';
import About from '../components/about/aboutpage.js';

class Home extends React.Component {
  state = {
    fullpageApi: null,
    windowSize: [0,0],
    navOpacity: [1, 0.8, 0.6, 0.4, 0.2]
  }

  constructor() {
    super()
    this.navComponent = null

    this.sectionMapping = ["landing-page", "about-page", "work-page", "edu-page", "project-page"]

    this.afterFullpageRender = this.afterFullpageRender.bind(this)
    this.onSwitchSection = this.onSwitchSection.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  onResize() {
    this.setState({
      windowSize: [window.innerWidth, window.innerHeight]
    });
  }

  handleResize = throttle(() => {
    this.onResize();
  }, 100)

  componentDidMount () {
    MyFont()
    MyBackground()

    window.addEventListener('resize', this.handleResize); 
    window.addEventListener("orientationchange", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); 
    window.removeEventListener("orientationchange", this.handleResize);
  }

  afterFullpageRender() {
    this.setState({
      fullpageApi: fullpage_api,
      windowSize: [window.innerWidth, window.innerHeight]
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
        TweenMax.to(element.children[0], 0.5, {fill: "#efefef"})
      } else if (destination.item.id == sec) {
        TweenMax.to(element, 0.5, { scale: 2, opacity: opacities[i] })
        TweenMax.to(element.children[0], 0.5, {fill: "#fa8072"})
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
      <MyHead/>
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
              <Homepage windowSize={this.state.windowSize}/>
              <About/>
              <div id="work-page" className="section"></div>
              <div id="edu-page" className="section"></div>
              <div id="project-page" className="section"></div>
              <Particles params = {ParticleOptions} className="particle-canvas"/>  
            </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
      <NavigationIcon windowSize={this.state.windowSize}/>
      <Navigation opacities={this.state.navOpacity} windowSize={this.state.windowSize} fullpageApi={this.state.fullpageApi}/>
      <Information windowSize={this.state.windowSize}/>
      <BackgroundAnimation/>
      <style jsx global>{`
        .content {
          padding-left: 8%;
          padding-right: 8%;
          display: flex;
          align-items: stretch;
        }

        .particle-canvas {
          position:fixed !important;
          left:0;
          top:0;
          width:100%;
          height:100%;
          z-index: -1;
        }

        html {
          font-size: calc(1em + 1vw);
        }
      `}</style>
      </>
    )
  }
}

export default Home
