import { useAuth } from "hook/AuthProvider";
import config from "../../config";
import { useEffect, useState } from "react";
import axios from "axios";


const AshopreePromos = ({ title }) => {
    const apiUrl = config().baseUrl;
    const user = useAuth();
    const [rewardMetrics, setRewardMetrics] = useState([]);

    const getRewardMetrics = async () => {
        try {


            const thisconfig = {
                method: 'get',
                url: `${apiUrl}/ashopree/myashopree/reward-metrics`,
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            };

            const response = await axios(thisconfig);

            console.log(response.data);

            setRewardMetrics(response.data.data);


        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setTimeout(() => window.location.href = '/login', 1000);
                }

                if (error.response.data.message === "Unathorized user") {
                    setTimeout(() => window.location.href = '/login', 1000);
                }
            }
            
        }
    }


    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
          getRewardMetrics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className="promos">
            <h4> Promos </h4>

            {/* <div className='parent'>
                <div>
                    <div> <p> 01 </p> <p> Freebies </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 03 </p> <p> Order discount </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 01 </p> <p> Freebies </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 03 </p> <p> Order discount </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 01 </p> <p> Freebies </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 03 </p> <p> Order discount </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 01 </p> <p> Freebies </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 02 </p> <p> Free shipping </p> </div>
                    <button> Get </button>
                </div>
                <div>
                    <div> <p> 03 </p> <p> Order discount </p> </div>
                    <button> Get </button>
                </div>
            </div> */}

            <div className='parent'>
                {
                    rewardMetrics ? (
                        rewardMetrics.promos?.length > 0 ? (
                            rewardMetrics.promos.map((item, index) => (
                                <div key={index}>
                                    <div> <p> {index + 1} </p> <p> {item.name} </p> </div>
                                    <button> Get </button>
                                </div>
                            ))
                        ) : (
                            <div>
                                <div style={{ textAlign: "center" }}> No available promo </div>
                            </div>
                        )
                    ) : (<p>Loading ...</p>)
                }
            </div>

        </div>
    );
};


export default AshopreePromos;