import { TweenMax } from "gsap"

class Information extends React.Component {
    constructor() {
        super()
        this.text = ["this site was designed and developed with", " and lots of"]

        this.onMouseoverDiamond = this.onMouseoverDiamond.bind(this)
        this.onMouseleaveDiamond = this.onMouseleaveDiamond.bind(this)
        this.onClickDiamond = this.onClickDiamond.bind(this)
        this.onMouseleaveBody = this.onMouseleaveBody.bind(this)
    }

    onMouseoverDiamond() {
        TweenMax.to("#diamond-icon", 0.5, {fill: "#89cff0"})
        TweenMax.to("#footer-expand-icon", 0.5, {scale: 1.2})
    }

    onMouseleaveDiamond() {
        if (!document.getElementById("footer-expand-icon").style.display == "inline-block") {
            TweenMax.to("#diamond-icon", 0.5, {fill: "#efefef"})
            TweenMax.to("#footer-expand-icon", 0.5, {scale: 1})
        }
    }

    onClickDiamond() {
        document.getElementById("footer-expand-icon").style.display = "inline-block"
        TweenMax.to("#footer-expand-icon", 0.5, {scale: 0})
        TweenMax.to("#footer-body", 0.5, {translateX: "-15px", opacity: 0.8})
    }

    onMouseleaveBody() {
        TweenMax.to("#footer-expand-icon", 0.5, {scale: 1, display: "block"})
        TweenMax.to("#footer-body", 0.5, {translateX: "0px", opacity: 0})
    }

    render() {
        return (
            <>
                <div id="footer-info" onMouseLeave={() => this.onMouseleaveBody()}>
                    <div id="footer-expand-icon" className="footer-icon footer-click" onMouseOver={() => this.onMouseoverDiamond()} onMouseLeave={() => this.onMouseleaveDiamond()}
                        onClick={() => this.onClickDiamond()}
                    >
                        <svg style={{bottom: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path id="diamond-icon" fill="#efefef" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"/>
                        </svg>
                    </div>
                    <div id="footer-body">
                        <p className="footer-text">{this.text[0]}</p>
                        <div className="footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#fa8072" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                            </svg>
                        </div>
                        <p className="footer-text">{this.text[1]}</p>
                        <div className="footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#f5f5dc" d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .footer-text {
                        display: inline-flex;
                        color: #efefef;
                        font-family: Assistant;
                        font-size: 0.5em;
                        font-weight: 200;

                        margin: auto 5px;
                    }

                    #footer-info {
                        height: 40px;
                        position: absolute;
                        padding: 20px;
                        left: 0;
                        top: calc(${this.props.windowSize[1]}px - 80px);

                        display: flex;
                        align-items: stretch;
                    }

                    #footer-body {
                        margin: auto;
                        display: flex;
                        align-items: stretch;

                        opacity: 0;
                    }

                    .footer-icon {
                        margin: auto 5px;
                        display: inline-block;
                        width: 16px;
                    }

                    svg {
                        display: block;
                        margin: auto;
                    }

                    .footer-click {
                        cursor: pointer;
                    }

                `}</style>
            </>
        )
    }
}

export default Information