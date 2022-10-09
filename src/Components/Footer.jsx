import React, { useEffect, useState } from "react";
import image1 from "../assets/images/1.png";

function Footer({mouseMove}) {

 
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  
 


  return (
    <>
      <span className="copyright copyright-year line line-vertical">
        &copy;2022
      </span>

      <span className="copyright copyright-name line line-horizontal">
        Automation X, LLC. All rights reserved.
      </span>
      <img
        src={image1}
       
        alt=""
        className="shape has-in-common sm-hidden"
        data-offset=".05"
        style={{ "--delay": "0.5s" , translate: `${(windowSize.innerWidth -mouseMove.x) * 0.05}px ${(windowSize.innerHeight -mouseMove.y )* 0.05}px`}}
      />
      <img
        src={image1}
        alt=""
        className="shape shape-md has-in-common sm-hidden"
        data-offset=".025"
        style={{ "--delay": "0.25s",translate: `${(windowSize.innerWidth -mouseMove.x)* 0.025}px ${(windowSize.innerHeight -mouseMove.y )* 0.025}px` }}
      />
      <img
        src={image1}
        alt=""
        className="shape shape-lg has-in-common sm-hidden"
        data-offset=".02"
        style={{ "--delay": "0.35s" ,translate: `${(windowSize.innerWidth -mouseMove.x)* 0.02}px ${(windowSize.innerHeight -mouseMove.y ) * 0.02}px`}}
      />
    </>
  );
}

export default Footer;
