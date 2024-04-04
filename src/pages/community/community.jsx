import "./community.styles.scss";
import { useEffect } from "react";


export const Community = ({ title }) => {

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

}, [title]);


  return (
    <div className="estore-container">
         
        <section className="community">
            
        </section>

    </div>

  );

};
