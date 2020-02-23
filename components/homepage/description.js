import Pronunciation from "./pronunciation";
import Definition from "./definition";

class Description extends React.Component {

    render () {
        return (
            <> 
                <div className="desc-wrapper">
                    <div>
                        <Pronunciation/>
                        <Definition/>
                    </div>
                </div>
                <style jsx>
                    {`
                        .desc-wrapper {
                            display: none;
                            align-items: center;
                            height: 160px;

                            padding-left: 20px;
                            padding-right: 20px;

                            opacity: 0;
                        }

                        .render-complete {
                            display: inline-flex;
                            opacity: 1;
                            animation: reveal 2s;
                        }
                          
                        @keyframes reveal {
                            0% {
                                opacity: 0;
                            }
                            100% {
                                opacity: 1;
                            }
                        }
                    `}
                </style>
            </>
        )
    }
}

export default Description