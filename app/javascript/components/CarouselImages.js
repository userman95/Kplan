import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../assets/images/logo.png'
import img1 from '../../assets/images/filip.jpg'

export default class CarouselImages extends React.Component {
    render(){
        return(
            <div className="container">
                <Carousel centerMode emulateTouch width={"700px"} dynamicHeight>
                    <div>
                        <img src={img} />
                        <p className="legend">
                        </p>
                    </div>
                    { <div>
                        <img src={img1}/>
                        <p className="legend">
                        </p>
                    </div>}{/*
                    <div>
                        <img src="/assets/3.jpeg" />
                        <p className="legend">
                        </p>
                    </div>
                    <div>
                        <img src="/assets/4.jpeg" />
                        <p className="legend">
                        </p>
                    </div>
                    <div>
                        <img src="/assets/5.jpeg" />
                        <p className="legend">
                        </p>
                    </div> */}
                </Carousel>
            </div>
        );
    }
}
