import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
const imageDemo = "1.jpg";
const App = () => (
  <div>
    <Parallax bgImage={imageDemo} strength={500}>
      <div style={{ height: 500 }}>
        <div>HTML inside the parallax</div>
      </div>
    </Parallax>
  </div>
);
