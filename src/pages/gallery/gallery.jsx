import './gallery.styles.scss';
import { useEffect } from 'react';

export const Gallery = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="gallery">
                <div className="contents">
                    <h2> Gallery And Media </h2>

                </div>                
            </section>

        </div>
    );

};

