import Typewriter from 'typewriter-effect';
import { TweenMax, TimelineLite } from 'gsap';

class Name extends React.Component {
    constructor() {
        super()
        this.TitleName = "";
        this.Description = "";

    }

    componentDidMount() {
        if  (document.documentElement.clientWidth <= 800) {
            this.TitleName = "jeff";
            this.Description = "coder, innovator and food lover."
        } else if (document.documentElement.clientWidth <= 1200) {
            this.TitleName = "jeffrey";
            this.Description = "code writer, critical thinker and food lover."
        } else {
            this.TitleName = "jeffrey lin";
            this.Description = "a human; code writer, critical thinker and food lover."
        }
    }

    setToVisible() {
        document.getElementsByClassName('name-wrapper')[0].style.display = "inline-flex";
    }

    onTypingComplete() { // invoke description animation
        const descriptionWrapper = document.getElementsByClassName('desc-wrapper')[0]
        descriptionWrapper.style.display = "inline-flex"

        TweenMax.to(descriptionWrapper, 1, {opacity: 1})
        
        var timeline = new TimelineLite()
        timeline.to("#titlepage-definition", 2.5, {text: this.Description})
        timeline.to("#main-nav-icon", 2, {opacity: 1, display: "block"})
        
    }

    render () {
        return (
            <>
                <div className="name-wrapper">
                    <h1 className="jeffrey-lin">
                        <Typewriter
                            options={{
                            // cursor: " »"
                            cursor: ".",
                            delay: 75
                            }}
                            onInit={(typewriter) => {
                                typewriter.pauseFor(4500)
                                    .callFunction(() => {
                                        this.setToVisible()
                                    })
                                    .typeString(this.TitleName)
                                    .callFunction(() => {
                                        this.onTypingComplete()
                                    }).start()
                            }}
                        />
                    </h1>
                </div>
                <style jsx>
                {`
                    .jeffrey-lin {
                        font-family: Assistant;
                        font-size: 80px;
                        font-weight: 200;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.31;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ebebeb;
                        margin: 0px;
                    }

                    .name-wrapper {
                        display: none;
                        align-items: center;

                        height: 160px;

                        padding-left: 20px;
                        padding-right: 20px;
                    }
                `}</style>
            </>
        )
    }
}

export default Name