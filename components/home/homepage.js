
import Name from "./name"
import Description from "./description"
import { Logo } from "./logo"

class Homepage extends React.Component {
    constructor() {
        super()
        this.description = null;
    }

    render () {
        return (
            <div id="landing-page" className="section">
                <div className="content">
                    <Logo/>
                    <Name windowSize={this.props.windowSize}/>
                    <Description/>
                </div>
                <style jsx global>
                    {`
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

                        .svg-after-initial-load {
                            animation: fadein 0.5s ease-out;
                            opacity: 1 !important;
                            transform: none !important;
                            height: 160px !important;
                        }

                        @keyframes fadein {
                            0% { height: 0; opacity: 0; }
                            60% { height: 80px; opacity: 0.5; }
                            100% { height: 160px; opacity: 1; }
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Homepage