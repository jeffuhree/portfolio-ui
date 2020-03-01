import { gsap } from "gsap"
import TextPlugin from "gsap/dist/TextPlugin"

gsap.registerPlugin(TextPlugin);

const PronunciationText = "je-fuh-ree\xa0\xa0•\xa0\xa0noun";

class Pronunciation extends React.Component {
    
    render () {
        return (
            <> 
                <div className="container"
                >
                    <h1 id="titlepage-pronunciation" className="pronunciation">
                        {PronunciationText}
                    </h1>
                </div>
                <style jsx>
                    {`
                        .pronunciation {
                            font-family: Assistant;
                            font-size: 1em;
                            font-weight: 200;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: normal;
                            letter-spacing: normal;
                            text-align: left;
                            color: #f1c85f;
                            margin: 0px;
                        }

                    `}
                </style>
            </>
        )
    }
}

export default Pronunciation