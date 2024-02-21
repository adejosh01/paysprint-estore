import './messages.scss';
import profileIcon from 'assets/images/messagesIcon.png';
import random from 'assets/images/convo.png';


export const Messages = ({title}) => {

      return (
            <div className="estore-container">
                <section className="messages">

                    <div className="firstside">
                        <h3> My Messages </h3>
                        <hr />
                        <div className='asidetitle'>
                            <img src={profileIcon} alt="profile icon" />
                            <div className='inner'>
                                <div className="title"> 
                                    <h4> Adebambo's Store </h4>
                                    <p> 05 Aug </p>
                                </div>
                                <p> Office Chair and workspace </p>
                                <p> You can reach us via .... </p>
                            </div>
                        </div> <hr />
                        <div className='asidetitle'>
                            <img src={profileIcon} alt="profile icon" />
                            <div className='inner'>
                                <div className="title"> 
                                    <h4> Adebambo's Store </h4>
                                    <p> 05 Aug </p>
                                </div>
                                <p> Office Chair and workspace </p>
                                <p> You can reach us via .... </p>
                            </div>
                        </div> <hr />
                    </div>

                    <div className="secondside">
                        <div>
                            <img src={random} alt="justrandom" />
                        </div>
                    </div>

                </section>
            </div>
      );
} ;