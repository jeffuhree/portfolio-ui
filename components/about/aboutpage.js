
class About extends React.Component {
    constructor() {
        super()
        this.description = null;
    }

    render () {
        return (
            <div id="about-page" className="section">
                <div className="content">
                    <h1 className="about-me">about me</h1>
                </div>                
                <style jsx global>
                    {`
                        .content {
                            padding-left: 8%;
                            padding-right: 8%;
                            display: flex;
                            align-items: stretch;
                        }

                        .about-me {
                            font-family: Assistant;
                            font-size: 1em;
                            font-weight: 200;
                            font-stretch: normal;
                            font-style: normal;
                            letter-spacing: normal;
                            text-align: left;
                            color: #f1c85f;
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default About