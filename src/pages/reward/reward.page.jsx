import './reward.styles.scss';
import { useEffect } from 'react';
import RewardSideBar from 'components/myRewards/side.page';



export const Reward = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="reward">
                
                <section className="all-items">
                    <RewardSideBar />
                    <main>
                        <div className="main-element">
                            <p> Main components </p>
                        </div>
                        <div className="right-side">
                            <p> Right hand side </p>
                        </div>
                    </main>
                </section>

            </section>

        </div>
    );

};

