import { UserContext } from "context/user.context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./dashboard.styles.scss";

export const Dashboard = () => {
  // const { isOTPVerified, user } = useContext(UserContext);

  // if (!user || !isOTPVerified) return <Navigate to="/signin" />;

  return (
    <div className="home-container">

      <section>
        <h1>
          Dashboard and co
        </h1>
      </section>

    </div>
  );
};
