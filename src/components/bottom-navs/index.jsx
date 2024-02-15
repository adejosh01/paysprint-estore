/* eslint-disable jsx-a11y/anchor-is-valid */
import "./nav.scss";
import arrowleft from "assets/icons/arrowleft.png";
import arrowright from "assets/icons/arrowright.png";

export const BottomNav = () => {

  return (
    <>
      <div className="navigations">
        <div>
            <button type="button" className="justforstore">
            <img src={arrowleft} alt="arrowleft" />
            <span> Previous  </span>
            </button>

        <div>
            <button type="button"> 1 </button>
            <button type="button"> 2 </button>
            <button type="button"> 3 </button>
            <button type="button"> 4 </button>
            <button type="button"> ... </button>
            <button type="button"> 10 </button>
        </div>

        <button type="button" className="justforstore">
            <span> Next  </span>
            <img src={arrowright} alt="arrowright" />
        </button>
        </div>
      </div>
    </>
  );
};
