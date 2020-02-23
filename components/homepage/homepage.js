import Particles from "react-particles-js"
import { Timeline } from 'react-gsap'

import MyHead from "../head"
import Name from "./name"
import Description from "./description"
import ParticleOptions from "../particle-options"
import { Logo } from "./logo"

class Homepage extends React.Component {

    render () {
        return (
            <div className="section">
                <MyHead/>
                <div className="content">
                    <Logo/>
                    <Name/>
                    <Description/>
                </div>
                <Particles params = {ParticleOptions} className="particle-canvas"/>                  
                <style jsx global>
                    {`
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
                        }

                        #logo {
                            padding-top: 35px;
                            padding-bottom: 25px;
                        }
    
                        .logo-wrapper {
                            display: inline-flex;
                            align-items: center;
                            height: 160px;
                            padding-right: 20px;
    
                            margin: 0 auto;
                        }

                        .after-initial-load {
                            margin: 0 !important;
                        }

                        .svg-after-initial-load {
                            animation: fadein 0.5s ease-out;
                            opacity: 1 !important;
                            transform: none !important;
                            height: 160px !important;
                        }

                        @keyframes fadein {
                            0% { height: 0; opacity: 0; }
                            50% { height: 120px; opacity: 0.8; }
                            100% { height: 160px; opacity: 1; }
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Homepage