import React, {Component, createRef} from "react";

import Sliders from "../model/Sliders";
import Slide from "./Slide";
import '../style/Component/Slider.css';

window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

class Slider extends Component {
    containerRef = createRef();
    state = {currentIndex: 0};

    renderSlides() {
        return Sliders.map((slide, index) => {
            let isCurrent = false;
            if (index === this.state.currentIndex % Sliders.length) {
                isCurrent = true;
            }
            return <Slide {...slide} index={index} isCurrent={isCurrent}/>
        })
    }

    renderNavigation() {
        return Sliders.map((slide, index) => {
            if (index === this.state.currentIndex % Sliders.length) {
                return <div className="slider-navigation-button slider-navigation-button-selected"/>;
            }
            return <div className="slider-navigation-button"
                        onClick={() => {
                            this.setState({currentIndex: index})
                        }}/>;
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
                <div className="slider-navigation" style={{left: `${(this.state.currentIndex % 5) * 100 + 10}%`}}>
                    {this.renderNavigation()}
                </div>
            </div>
        );
    }
}

export default Slider;