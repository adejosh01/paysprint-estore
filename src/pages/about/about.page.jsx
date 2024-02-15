import { useEffect } from "react";

import "./about.styles.scss";

export const AboutPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="about-container">
      <section className="features">
        <div className="feature">
          <div className="content">
            <h3>Unmatched Multi-level Security for your Peace of mind</h3>
            <p>
              PaySprint, ensures your financial transactions are secure through
              multiple layers of security protocols. Trust PaySprint for a safe
              and secure transacting experience.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="content">
            <h3>Fees are a thing of the Past</h3>
            <p>
              Send and receive money locally and across the border while
              merchants can receive payments from customers on any mobile device
              (for In-store sales) and on the business's website (for online
              sale) with no usage fees.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="content">
            <h3>
              The Hassle-Free Solution for Seamless Transactions on any Device
            </h3>
            <p>
              At PaySprint, we prioritize seamless transactions across multiple
              devices, providing users with a hassle-free experience. Whether
              you're on your phone, tablet, or computer, our app ensures that
              you can easily and securely manage your finances without any
              disruptions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
