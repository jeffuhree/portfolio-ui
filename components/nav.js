import { TweenMax, TimelineLite } from "gsap"
import { Tween } from "react-gsap"

export class NavigationIcon extends React.Component {
    constructor() {
        super()
        this.clickedState = false

        this.hover = this.hover.bind(this)
        this.unhover = this.unhover.bind(this)
        this.click = this.click.bind(this)

        this.clickedStateToggle = this.clickedStateToggle.bind(this)
    }

    hover() {
        if (!this.clickedState) {
            TweenMax.killTweensOf("#main-nav-icon")
            TweenMax.to("#main-nav-icon", 0.5, {scale: 1, opacity: 1, rotate: 45})
        }
    }

    unhover() {
        if (!this.clickedState) {
            TweenMax.killTweensOf("#main-nav-icon")
            TweenMax.to("#main-nav-icon", 1, {scale: 1, opacity: 1, rotate: -45})        
        }
    }

    click() {
        this.clickedStateToggle()

        var timeline = new TimelineLite()
        timeline.to("#main-nav-icon", 0.1, {scale: 1.2})
        timeline.to("#main-nav-icon", 0.3, {display: "none", opacity: 0, scale: 0, rotate: -90})
        
        document.getElementById("main-nav").style.display = "flex" // fix for immediately panning off

        timeline.fromTo("#main-nav", 1, 
        {
            opacity: 0, 
            translateY: "-10px"
        },
        {
            opacity: 1, 
            translateY: "0px"
        });

        timeline.eventCallback("onComplete", this.clickedStateToggle)

    }

    clickedStateToggle() {
        this.clickedState = !this.clickedState
    }

    render () {
        const halfHeight = this.props.windowHeight / 2
        return (
            <>
            <div id="main-nav-icon"
                onMouseOver={ this.hover } onMouseLeave={ this.unhover } onClick={ this.click }
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                    {/* <path fill="#ff6984" d="M225.38,233.37a32,32,0,1,0,45.25,0A32,32,0,0,0,225.38,233.37Zm148.76-77.32-66,144.35a31.94,31.94,0,0,1-15.77,15.77l-144.34,66c-16.65,7.61-33.81-9.55-26.2-26.2l66-144.35a31.94,31.94,0,0,1,15.77-15.77l144.34-66c16.65-7.6,33.8,9.55,26.19,26.2Z"/> */}
                    <path fill="#efefef" d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"/>
                </svg>
            </div>
            <style jsx>{`
                #main-nav-icon {
                    cursor: pointer;
                    position: fixed;
                    zIndex: 1001;
                    right: 0;
                    top: ${halfHeight}px;

                    transform: translate(0, -75px);
                    margin: 70px;

                    width: 30px;

                    opacity: 0;
                    display: none;
                }
            `}</style>
            </>
        )
    }
}

export class Navigation extends React.Component {
    constructor() {
        super()
        this.nav = [null, null, null, null, null]

        this.onMouseover = this.onMouseover.bind(this)
        this.onMouseleave = this.onMouseleave.bind(this)
    }

    onMouseover(index) {
        const tweenElement = this.nav[index-1].children[0].children[0]
        if (this.props.fullpageApi.getActiveSection().index == index - 1) {
            TweenMax.to(tweenElement, 0.5, {translateX: "-2.5px"})
        } else {
            TweenMax.to(tweenElement, 0.5, {translateX: "-5px", opacity: 1})
            TweenMax.to(tweenElement.children[0], 0.5, {fill: "#fa8072"})
        }
    }

    onMouseleave(index) {
        const tweenElement = this.nav[index-1].children[0].children[0]
        TweenMax.to(tweenElement, 0.5, {translateX: "0px", opacity: this.props.opacities[index-1]})
        TweenMax.to(tweenElement.children[0], 0.5, {fill: "#efefef"})
    }

    onUnhoverNav() {
        var timeline = new TimelineLite()
        timeline.to("#main-nav", 0.3, {
            display: "none",
            opacity: 0, 
            translateY: "-10px"
            });  
        timeline.fromTo("#main-nav-icon", 0.5, 
        {
            display: "none",
            scale: 0,
            rotate: -90,
            opacity: 0,
        },
        {
            display: "block",
            scale: 1.2,
            rotate: 0,
            opacity: 1,
        })
        timeline.to("#main-nav-icon", 0.2, {scale: 1})
    }

    render () { 
        const halfHeight = this.props.windowHeight / 2
        return (
            <>
            <nav id="main-nav" className="navbar"
                onMouseLeave={ this.onUnhoverNav }
            >
                <ul id="nav-inner">
                    <li ref={el => this.nav[0] = el}>
                        <a onClick={ () => this.props.fullpageApi.moveTo(1) } onMouseOver={() => this.onMouseover(1)} onMouseLeave={() => this.onMouseleave(1)}> 
                            <svg id="nav-landing-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="#efefef" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                            </svg>
                        </a>
                    </li>
                    <li ref={el => this.nav[1] = el}>
                        <a onClick={ () => this.props.fullpageApi.moveTo(2) } onMouseOver={() => this.onMouseover(2)} onMouseLeave={() => this.onMouseleave(2)}> 
                            <svg style={{opacity: 0.8}} id="nav-about-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="#efefef" d="M256.12 245.96c-13.25 0-24 10.74-24 24 1.14 72.25-8.14 141.9-27.7 211.55-2.73 9.72 2.15 30.49 23.12 30.49 10.48 0 20.11-6.92 23.09-17.52 13.53-47.91 31.04-125.41 29.48-224.52.01-13.25-10.73-24-23.99-24zm-.86-81.73C194 164.16 151.25 211.3 152.1 265.32c.75 47.94-3.75 95.91-13.37 142.55-2.69 12.98 5.67 25.69 18.64 28.36 13.05 2.67 25.67-5.66 28.36-18.64 10.34-50.09 15.17-101.58 14.37-153.02-.41-25.95 19.92-52.49 54.45-52.34 31.31.47 57.15 25.34 57.62 55.47.77 48.05-2.81 96.33-10.61 143.55-2.17 13.06 6.69 25.42 19.76 27.58 19.97 3.33 26.81-15.1 27.58-19.77 8.28-50.03 12.06-101.21 11.27-152.11-.88-55.8-47.94-101.88-104.91-102.72zm-110.69-19.78c-10.3-8.34-25.37-6.8-33.76 3.48-25.62 31.5-39.39 71.28-38.75 112 .59 37.58-2.47 75.27-9.11 112.05-2.34 13.05 6.31 25.53 19.36 27.89 20.11 3.5 27.07-14.81 27.89-19.36 7.19-39.84 10.5-80.66 9.86-121.33-.47-29.88 9.2-57.88 28-80.97 8.35-10.28 6.79-25.39-3.49-33.76zm109.47-62.33c-15.41-.41-30.87 1.44-45.78 4.97-12.89 3.06-20.87 15.98-17.83 28.89 3.06 12.89 16 20.83 28.89 17.83 11.05-2.61 22.47-3.77 34-3.69 75.43 1.13 137.73 61.5 138.88 134.58.59 37.88-1.28 76.11-5.58 113.63-1.5 13.17 7.95 25.08 21.11 26.58 16.72 1.95 25.51-11.88 26.58-21.11a929.06 929.06 0 0 0 5.89-119.85c-1.56-98.75-85.07-180.33-186.16-181.83zm252.07 121.45c-2.86-12.92-15.51-21.2-28.61-18.27-12.94 2.86-21.12 15.66-18.26 28.61 4.71 21.41 4.91 37.41 4.7 61.6-.11 13.27 10.55 24.09 23.8 24.2h.2c13.17 0 23.89-10.61 24-23.8.18-22.18.4-44.11-5.83-72.34zm-40.12-90.72C417.29 43.46 337.6 1.29 252.81.02 183.02-.82 118.47 24.91 70.46 72.94 24.09 119.37-.9 181.04.14 246.65l-.12 21.47c-.39 13.25 10.03 24.31 23.28 24.69.23.02.48.02.72.02 12.92 0 23.59-10.3 23.97-23.3l.16-23.64c-.83-52.5 19.16-101.86 56.28-139 38.76-38.8 91.34-59.67 147.68-58.86 69.45 1.03 134.73 35.56 174.62 92.39 7.61 10.86 22.56 13.45 33.42 5.86 10.84-7.62 13.46-22.59 5.84-33.43z"/>
                            </svg>
                        </a>
                    </li>           
                    <li ref={el => this.nav[2] = el}>
                        <a onClick={ () => this.props.fullpageApi.moveTo(3) } onMouseOver={() => this.onMouseover(3)} onMouseLeave={() => this.onMouseleave(3)}> 
                            <svg style={{opacity: 0.6}} id="nav-work-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="#efefef" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/>
                            </svg>
                        </a>
                    </li>
                    <li ref={el => this.nav[3] = el}>
                        <a onClick={ () => this.props.fullpageApi.moveTo(4) } onMouseOver={() => this.onMouseover(4)} onMouseLeave={() => this.onMouseleave(4)}> 
                            <svg style={{opacity: 0.4}} id="nav-edu-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="#efefef" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"/>
                            </svg>
                        </a>
                    </li>
                    <li ref={el => this.nav[4] = el}>
                        <a onClick={ () => this.props.fullpageApi.moveTo(5) } onMouseOver={() => this.onMouseover(5)} onMouseLeave={() => this.onMouseleave(5)}> 
                            <svg style={{opacity: 0.2}} id="nav-project-page" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" >
                                <path fill="#efefef" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <style jsx>{`

                .navbar {
                    position: fixed;
                    zIndex: 1000;
                    right: 0;
                    top: 0;
                    
                    height: 100%;

                    display: none;
                    opacity: 0;

                    padding: 70px;
                }

                ul {
                    list-style-type: none;

                    margin-top: auto;

                    height: calc(${halfHeight}px + 90px);
                }

                li {
                    margin: 0 auto;
                    width: 25px;

                    padding-top: 35px;
                    padding-bottom: 35px;

                    transform: scale(1, 1);
                }

                a {
                    cursor: pointer;
                }

                svg {
                    display: block;
                    margin: auto;
                }

                #nav-landing-page {
                    transform: scale(2, 2);
                }

            `}</style>
            </>
        )
    }
}
