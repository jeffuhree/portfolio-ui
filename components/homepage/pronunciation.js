const TextBody = "je-fuh-ree\xa0\xa0•\xa0\xa0noun";

class Pronunciation extends React.Component {

    render () {
        return (
            <> 
                <div className="container">
                    <h1 className="pronunciation">
                        {TextBody}
                    </h1>
                </div>
                <style jsx>
                    {`
                        .pronunciation {
                            width: 288px;
                            height: 52px;
                            font-family: Assistant;
                            font-size: 40px;
                            font-weight: 200;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.3;
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