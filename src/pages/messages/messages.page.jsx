import './messages.scss';
import profileIcon from 'assets/images/messagesIcon.png';


export const Messages = ({title}) => {

      return (
            <div className="estore-container">
                <section className="messages">

                    <div className="firstside">
                        <h3> My Messages </h3>
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
                        </div>
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
                        </div>
                    </div>

                    <div className="secondside">
                        <p> Start a Convo</p>
                    </div>

                </section>
            </div>
      );
} ;