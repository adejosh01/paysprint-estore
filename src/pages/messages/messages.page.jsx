import './messages.scss';
import profileIcon from 'assets/images/messagesIcon.png';
import random from 'assets/images/convo.png';
import attachment from 'assets/icons/profile/attach.png';
import mic from 'assets/icons/profile/microphoneIcon.png';
import sendmsg from 'assets/icons/profile/sendIcon.png';


export const Messages = ({title}) => {

    const handleTheDisplay = () => {
        document.getElementById('defaultmsg').style.display = 'none';
        document.getElementById('mainmsg').style.display = 'flex';
    };

    return (
            <div className="estore-container">
                <section className="messages">

                    <div className="firstside">
                        <h3> My Messages </h3>
                        <hr />
                        <div className='asidetitle' onClick={handleTheDisplay}>
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
                        <div className='asidetitle' onClick={handleTheDisplay}>
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

                    <div id='defaultmsg' className="secondside">
                        <div>
                            <img src={random} alt="justrandom" />
                        </div>
                    </div>

                    <div id='mainmsg' className="realmsgs" hidden>
                        <div className="title"> 
                            <div>
                                <img src={profileIcon} alt="profile icon" />
                                <h4> Adebambo's Store </h4>
                            </div>
                            <p> Last seen today at 11:29 </p>
                        </div>
                        <p className='thedate'> July 27th, 2023 </p>
                        <div>
                            <p>
                                I would love to order for a fashion service
                            </p>
                        </div>
                        <div>
                            <p>
                                Ok, Thank you for reaching out to us. We can  please kindly ....
                            </p>
                        </div>

                        <section>
                            <div className='compose'>
                                <input type="text" placeholder='Write your comment' />
                                <div>
                                    <button type='button'>
                                        <img src={attachment} alt="attachment icon" />
                                    </button>
                                    <button type='button'>
                                        <img src={mic} alt="microphone icon" />
                                    </button>
                                    <button type='button'>
                                        <img src={sendmsg} alt="send the message icon" />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    

                </section>
            </div>
      );
} ;