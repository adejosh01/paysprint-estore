import './storeLocation.styles.scss';
import { useEffect } from 'react';
import RewardSideBar from 'components/myRewards/side.page';



export const StoreLocation = ({ title }) => {

    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="location">
                
                <section className="all-items">
                    <RewardSideBar />

                    <h1> Store Location </h1>
                </section>

            </section>

        </div>
    );

};

