import React from "react";
import Sketch from "react-p5";
 
export default ({line, setLine}) => {
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
            let x = p5.mouseX-p5.width/2;
            let y = p5.mouseY-p5.height/2

            if (line) {
              p5.strokeWeight(10)
              p5.stroke(0,50)
              p5.line(x, y, (p5.width/2)*lineEndRandomizer, (p5.height/2)*lineEndRandomizer)
            } else {
              // p5.noStroke()
              p5.circle(x, y, p5.random(10, 80))
              let radialAngle = Math.atan2(y, x) * 180 / Math.PI
              let x2 = x/3*Math.cos(radialAngle)
              let y2 = y/3*Math.sin(radialAngle)

              // experimenting with multiple circles:
              p5.circle(x+x2, y+y2, p5.random(10, 80))
            }
            angle += 5; 

            p5.pop()
          } else {
            angle = 0;
            lineEndRandomizer = p5.random(-1,1);
          }

    };
 
    return <Sketch setup={setup} draw={draw} />;
};