import React, {Component} from "react";

import '../style/Component/Slide.css';

class Slide extends Component{
    render() {
        return (
            <div className="slide-container">
                <div className="slide-image" style={{backgroundImage: `url(${this.props.imageURL}`}}/>
                <span className="slide-description">{this.props.description}</span>
            </div>
        );
    }
}

export default Slide;