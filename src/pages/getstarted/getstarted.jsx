// import VideoBackground from "components/videoPlayBack/video";
import "./getstarted.scss";
import { useEffect } from "react";

export const GetStarted = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

  }, [title]);


  return (
    <div className="estore-container">
          {/* <VideoBackground /> */}
        
        <section className="get-started">
          <div className="main">
            <h1> Get Started </h1>
            <p> Some texts </p>
            <p> Some texts </p>
            <p> Some texts </p>
          </div>
        </section>

    </div>

  );

};
