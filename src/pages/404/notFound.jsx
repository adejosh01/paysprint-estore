import './notFound.styles.scss';
import { useEffect } from 'react';
import _404Image from 'assets/404Images/undraw_Page_not_found.png';
// import _404Image from 'assets/404Images/404_one.png';
import { Link } from 'react-router-dom';

export const NotFound404 = ({ title }) => {
    useEffect(() => {
      document.title = title;
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="estore-container">

            <section className="_404">
                <h2> Not Found </h2>
                <p> Sorry, the page you're looking for could not be found on our Server. You can navigate your way back right <Link to={'/'}> here </Link> </p>
                <img src={_404Image} alt=" Sorry, this page can't be found on our end" />
            </section>

        </div>
    );

};

