import React, {Component, createRef} from "react";

import Sliders from "../model/Sliders";
import Slide from "./Slide";
import '../style/Component/Slider.css';

class Slider extends Component {
    containerRef = createRef();
    state = {currentIndex: 0};

    renderSlides() {
        return Sliders.map((slide, index) => {
            let isCurrent = false;
            if (index === this.state.currentIndex % Sliders.length) {
                isCurrent = true
            }
            return <Slide {...slide} index={index} isCurrent={isCurrent}/>
        })
    }

    render() {
        return (
            <div className="slider-container" ref={this.containerRef}>
                {this.renderSlides()}
                <div className="slider-next"
                     style={{left: `${(this.state.currentIndex % 5 + 1) * 100}%`}}
                     onClick={() => {
                    this.setState({currentIndex: this.state.currentIndex + 1})
                }}>
                    >
                </div>
                <div className="slider-prev"
                     style={{left: `${(this.state.currentIndex % 5) * 100}%`}}
                     onClick={() => {
                    this.setState({currentIndex: this.state.currentIndex + Sliders.length - 1})
                }}>
                    {'<'}
                </div>
            </div>
        );
    }
}

export default Slider;