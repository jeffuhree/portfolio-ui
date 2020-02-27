import Typewriter from 'typewriter-effect';

class Definition extends React.Component {

    render () {
        return (
            <> 
                <div className="container">
                    <h1 id="titlepage-definition" className="definition">
                    </h1>
                </div>
                <style jsx>
                    {`
                        .definition {
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