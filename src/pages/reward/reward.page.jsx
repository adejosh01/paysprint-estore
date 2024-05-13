import './reward.styles.scss';
import { useEffect } from 'react';

export const Reward = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="reward">
                <h2> Reward Page </h2>
                
            </section>

        </div>
    );

};

