import Typewriter from 'typewriter-effect';

const TextBody = "a human; code writer, critical thinker and food lover.";

class Definition extends React.Component {

    render () {
        return (
            <> 
                <div className="container">
                    <h1 className="definition">
                        {TextBody}
                    </h1>
                </div>
                <style jsx>
                    {`
                        .definition {
                            width: 526px;
                            height: 33px;
                            font-family: Assistant;
                            font-size: 25px;
                            font-weight: 200;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.32;
                            letter-spacing: normal;
                            text-align: left;
                            color: #efefef;
                            margin: 0px;
                        }

                    `}
                </style>
            </>
        )
    }
}

export default Definition