import { TweenMax, TimelineLite } from "gsap"

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
            TweenMax.to("#main-nav-icon", 0.5, {scale: 1, opacity: 1, rotate: 25})
        }
    }

    unhover() {
        if (!this.clickedState) {
            TweenMax.killTweensOf("#main-nav-icon")
            TweenMax.to("#main-nav-icon", 1, {scale: 1, opacity: 1, rotate: -25})
        }
    }

    click() {
        this.clickedStateToggle()

        var timeline = new TimelineLite()
        timeline.to("#main-nav-icon", 0.2, {display: "none", opacity: 0, scale: 0, rotate: -180})
        
        document.getElementById("main-nav").style.display = "flex" // fix for immediately panning off

        timeline.fromTo("#main-nav", 0.8, 
        {
            opacity: 0, 
            translateX: "20px"
        },
        {
            opacity: 1, 
            translateX: "0px"
        });

        timeline.eventCallback("onComplete", this.clickedStateToggle)

    }

    clickedStateToggle() {
        this.clickedState = !this.clickedState
    }

    render () {
        const halfHeight = window.innerHeight / 2
        return (
            <>
            <div id="main-nav-icon"
                onMouseOver={ this.hover } onMouseLeave={ this.unhover } onClick={ this.click }
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
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
        this.home = null;
        this.about = null;
        this.work = null;
        this.education = null;
        this.projects = null;
    }

    onUnhoverNav() {
        var timeline = new TimelineLite()
        timeline.to("#main-nav", 0.2, {
            display: "none",
            opacity: 0, 
            translateX: "20px"
            });  
        timeline.fromTo("#main-nav-icon", 0.8, 
        {
            display: "none",
            scale: 0,
            rotate: -180,
            opacity: 0
        },
        {
            display: "block",
            scale: 1,
            rotate: 0,
            opacity: 1
        })
    }

    render () { 
        const halfHeight = window.innerHeight / 2
        return (
            <>
            <nav id="main-nav" className="navbar"
                onMouseLeave={ this.onUnhoverNav }
            >
                <ul>
                    <li className="active">
                        <a id="nav-landing" onClick={ () => this.props.fullpageApi.moveTo(1) }> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" >
                                <path fill="#efefef" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="nav-about" onClick={ () => this.props.fullpageApi.moveTo(2) }> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                                <path fill="#efefef" d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v48h32v-48c0-8.8-7.2-16-16-16z"/>
                            </svg>
                        </a>
                    </li>           
                    <li>
                        <a id="nav-work" onClick={ () => this.props.fullpageApi.moveTo(3) }> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                                <path fill="#efefef" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="nav-edu" onClick={ () => this.props.fullpageApi.moveTo(4) }> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="#efefef" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a id="nav-proj" onClick={ () => this.props.fullpageApi.moveTo(5) }> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                                <path fill="#efefef" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/>
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
                    top: calc(${halfHeight}px - 60px);

                    padding-right: 60px;
                    padding-left: 60px;
                    
                    height: 100%;

                    display: none;
                    opacity: 0;
                }

                ul {
                    list-style-type: none;
                    height: 100%;
                }

                li {
                    margin: 0 auto;
                    width: 25px;

                    padding-top: 30px;
                    padding-bottom: 30px;
                }

                a {
                    cursor: pointer;
                }

                svg {
                    display: block;
                    margin: auto;
                }

                .active {
                    width: 50px;
                }
            
            `}</style>
            </>
        )
    }
}
