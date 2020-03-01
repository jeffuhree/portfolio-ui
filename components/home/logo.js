import React, { Fragment } from 'react';
import { Tween, Timeline } from 'react-gsap';

export class Logo extends React.Component {

    render () {
        return (
            <>
            <Timeline wrapper={<div id="primary-logo" className="logo-wrapper"/>}
                target={
                    <svg id="logo-svg" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 757.28 735.76" style={{width: "100px"}}>
                        <clipPath id="l-rect-clip">
                            <path d="M389.4 0 389.4 32.11 725.17 367.88 389.4 703.66 389.4 735.76 757.28 367.88 389.4 0Z" />
                        </clipPath>
                        <clipPath id="r-rect-clip">
                            <path d="M367.88 703.66 32.11 367.88 367.88 32.11 367.88 0 0 367.88 367.88 735.76 367.88 703.66Z" />
                        </clipPath>
                        <clipPath id="j-clip">
                            <path d="M1084.94,915.91l-.06,3.24h-4.09a20.75,20.75,0,0,0-20.74,20.29v177.24c0,71.91-52.28,111.1-113.65,78.07l1-3.24c42.42,8.09,64-28.17,64-75.75V939.52a20.75,20.75,0,0,0-20.74-20.36h-4.1l-.05-3.24Z" transform="translate(-621.36 -632.12)"/>
                        </clipPath>
                        <clipPath id="l-clip">
                            <path d="M1173.27,1093.58c-23.58,15.12-59.09,15.93-103.12,8.1v15a146.51,146.51,0,0,1-1.53,21.39c39.38,6.32,77.82-1.65,106.87-41.89ZM929.32,1046.7V858.78c.3-11.47,9.43-20.35,21.54-20.35h3.31l.06-3.23H855.86l.06,3.23H860a20.74,20.74,0,0,1,20.71,20.35v179.49a20.74,20.74,0,0,1-20.69,20.35H855.9l0,3.23c31.85,0,56,10.69,76.87,20.73,19.32,9.35,43,22.51,68.58,33.87v-31.33c-18.61-5.35-38.13-11.46-58.38-18.09C932.53,1063.48,929.36,1057.28,929.32,1046.7Z" transform="translate(-621.36 -632.12)"/>
                        </clipPath>

                        <Timeline
                            target={
                                <Fragment >
                                    <path style={{opacity:0}} clipPath="url(#r-rect-clip)" stroke="#f1c85f" strokeLinecap="round" strokeWidth="150" d="M355.11 1.35 0.71 355.76 357.03 712.08"/>
                                    <path style={{opacity:0}} clipPath="url(#l-rect-clip)" stroke="#fff" strokeLinecap="round" strokeWidth="150" d="M371.01 711.08 725.41 356.67 369.09 0.35"/>
                                </Fragment>
                            }
                        >                          
                            <Tween from={{ opacity: 0, svgDraw: 0 }} to={{ opacity: 1, svgDraw: 1 }} duration={1}/>
                            <Timeline>
                                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1}>
                                    <path style={{opacity:0}} clipPath="url(#j-clip)" stroke="#fff" strokeLinecap="round" strokeWidth="150" d="M398.98 272.63 398.98 509.82 364.35 548.32 343.06 553.82 310.41 548.22"/>
                                </Tween>
                                <Tween from={{ opacity: 0, svgDraw: 0 }} to={{ opacity: 1, svgDraw: 1 }} duration={1.5}>
                                    <path style={{opacity:0}} clipPath="url(#l-clip)" stroke="#f1c85f" strokeLinecap="round" strokeWidth="150" d="M267.9 191.91 267.9 417.97 423.09 473.39 485.09 478.66 538.53 452.9"/>
                                </Tween>
                            </Timeline>
                            <Tween from={{ opacity: 1, svgDraw: 1 }} to={{ opacity: 0, svgDraw: 0 }} duration={0.5}/>
                            <Tween from={{ opacity: 0, svgDraw: [0, 0.5], }} to={{ opacity: 1, svgDraw: [1, 0], }} delay={1} duration={1} ease="Strong.easeOut"/>
                        </Timeline>
                    </svg>
                }
            >          
                <Tween to={{height: 0, opacity: 0}} delay={3.725} duration={1} ease={"Strong.easeOut"}
                    onComplete={
                        function() {
                            document.getElementById('primary-logo').style.margin = "0"
                            document.getElementById('logo-svg').classList.add("svg-after-initial-load")
                        }
                    }
                />

            </Timeline>
            </>
        )
    }
}
