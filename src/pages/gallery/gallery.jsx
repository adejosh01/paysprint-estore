import './gallery.styles.scss';
import { useEffect } from 'react';
import galleryImage from 'assets/ashopree/gallery_and_media/galleryHeadImg.png';
import calenderIcon from 'assets/svg/calendar.svg';


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
                    <div className='gridItems'>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                        <div className="galleryitems">
                            <img src={galleryImage} alt="" />
                            <div>
                                <h5> Ashopree  lorem ipsum </h5>
                                <p> <span>Written by: </span> Ashopree</p>
                                <p> <img src={calenderIcon} alt="" /> 20/03/24 </p>
                            </div>
                            <a href="/"> Link to more </a>
                        </div>
                    </div>
                </div>                
            </section>

        </div>
    );

};

