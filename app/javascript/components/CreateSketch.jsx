import React, { useState, useEffect } from 'react';
import Sketch from "../components/Sketch";

function CreateSketch() {
    const [line, setLine] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Counter
          </button>
          <button onClick={() => setLine(!line)}>
            {line ? "line" : "circle"}
          </button>
          <Sketch line={line} setLine={setLine}/>
        </div>
      );
}

export default CreateSketch;