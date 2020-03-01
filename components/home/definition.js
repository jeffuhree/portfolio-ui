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
                            font-family: Assistant;
                            font-size: 0.8em;
                            font-weight: 200;
                            font-stretch: normal;
                            font-style: normal;
                            letter-spacing: normal;
                            line-height: normal;
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