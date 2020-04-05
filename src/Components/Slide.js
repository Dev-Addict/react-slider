import React, {Component, createRef} from "react";

import '../style/Component/Slide.css';

class Slide extends Component {
    slideRef = createRef();

    render() {
        if (this.props.isCurrent) {
            setTimeout(() => {
                window.scrollTo(this.slideRef.current.offsetLeft, 0);
            }, 50);
        }
        return (
            <div className="slide-container" ref={this.slideRef}>
                <div className="slide-image" style={{backgroundImage: `url(${this.props.imageURL}`}}/>
                <span className="slide-description" style={{
                    left: `${this.props.index * 100 + 50}%`
                }}>{this.props.description}</span>
            </div>
        );
    }
}

export default Slide;