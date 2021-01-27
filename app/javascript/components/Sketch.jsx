import React from "react";
import Sketch from "react-p5";
 
const sketch = ({line, setLine}) => {
    let angle = 0;
    let lineEndRandomizer = Math.random() * 2 - 1;
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.background(220);
        p5.angleMode(p5.DEGREES)
    };
 
    const draw = (p5) => {
        if (p5.mouseIsPressed) {
            p5.push()
            p5.translate(p5.width/2, p5.height/2)
            p5.rotate(angle)
            if (line) {
              p5.strokeWeight(10)
              p5.stroke(0,50)
              p5.line(p5.mouseX-p5.width/2, p5.mouseY-p5.height/2, (p5.width/2)*lineEndRandomizer, (p5.height/2)*lineEndRandomizer)
            } else {
              p5.noStroke()
              p5.circle(p5.mouseX-p5.width/2, p5.mouseY-p5.height/2, 10)
            }
            angle += 2; 
            p5.pop()
          } else {
            angle = 0;
            lineEndRandomizer = p5.random(-1,1);
          }

    };
 
    return <Sketch setup={setup} draw={draw} />;
};

export default sketch