import './pricing.styles.scss';
import { useEffect } from 'react';

export const Pricing = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="pricing">
                <h2> Plans & Pricing </h2>
                
                <div className='plans'>
                    
                </div>
            </section>

        </div>
    );

};

