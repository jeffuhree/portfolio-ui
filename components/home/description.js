import Pronunciation from "./pronunciation";
import Definition from "./definition";

class Description extends React.Component {

    render () {
        return (
            <> 
                <div id="homepage-description" className="desc-wrapper">
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
                    `}
                </style>
            </>
        )
    }
}

export default Description