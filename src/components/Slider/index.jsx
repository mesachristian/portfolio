import React, {useState} from 'react';

import './styles.css';

const Slider = (props) =>{
    
    const [slidesLeftMargin, setSlidesLeftMargin] = useState("-0%");
    const [currentChild, setCurrentChild] = useState(0);
    let elements = props.children;

    let temp = 100 * elements.length;
    let slidesWidth = `${temp}%`;

    let slideStyle = {
        width : slidesWidth,
        height : "100%",
        marginLeft : slidesLeftMargin
    }

    function changeChild(childIdx){
        let temp = 100 * childIdx;
        let newMarginLeft = `-${temp}%`;
        setSlidesLeftMargin(newMarginLeft);
        setCurrentChild(childIdx);
    }

    function onMouseDownListener(event, childIdx){
        let object = document.getElementById(`slide-${childIdx}`);
        object.addEventListener("onmousemove", (event) => {
            console.log('kk');
        });
    }

    function PPListener(event){
        console.log(event.clientX);
    }

    /*var interval = setInterval( () => {
        let newChild = currentChild == elements.length - 1 ? 0 : currentChild + 1;
        changeChild(newChild);
    }, 6000);*/

    return(
        <div className="slider">
            <div className="slides" style={slideStyle}>

                {/** CHILDREN **/}
                {elements.map( (child, childIdx) => {
                    return(
                        <div key={childIdx} className="slide" id={`slide-${childIdx}`} 
                            onDrag={(event) => PPListener(event)}
                            onMouseDown={(event) => onMouseDownListener(event, childIdx)}> 
                            {child}
                        </div>
                    );
                })}
            </div>

            {/** RADIO BUTTONS **/}
            <div className="slider-radio-button-container">
                {elements.map( (child, childIdx) => {
                    return(
                        <label key={childIdx} className="slider-radio-button" onClick={() => changeChild(childIdx)}></label>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;