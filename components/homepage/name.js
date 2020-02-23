import Typewriter from 'typewriter-effect';
import { Tween, SplitLetters } from 'react-gsap';

var TitleName = ""

function onTypingComplete() {
    document.getElementsByClassName('desc-wrapper')[0].classList.add("render-complete");
}

class Name extends React.Component {
    componentDidMount() {
        if  (document.documentElement.clientWidth <= 800) {
            TitleName = "jeff";
        } else if (document.documentElement.clientWidth <= 1200) {
            TitleName = "jeffrey";
        } else {
            TitleName = "jeffrey lin";
        }

        setTimeout(
            function() { 
                document.getElementsByClassName('name-wrapper')[0].style.display = "inline-flex";
            }, 
        5100);
    }

    render () {
        return (
            <>
                <div className="name-wrapper">
                    <h1 className="jeffrey-lin">
                        <Typewriter
                            options={{
                            // cursor: " »"
                            cursor: "."
                            }}
                            onInit={(typewriter) => {
                                typewriter.pauseFor(5000).typeString(TitleName).callFunction(() => {
                                        onTypingComplete()
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