import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./askquestions.styles.scss";
import { useEffect, useState } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { handleClick } from "utils/utils";


const firstCategory = ["Member Categories", "Community Associates", "Potential Store Owners", "Inactive Store Owners", "Store Under Construction", "Upcoming Stores", "Stores Available"];

export const AskQuestions = ({ title }) => {
    const apiUrl = process.env.REACT_APP_API_URL || 'https://paysprint.ca/api/v1';
    const [setError] = useState(null);
    const [categories, setData5] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    axios.get(`${apiUrl}/ashopree/product/category`) 
    .then(response => {
      setData5(response.data.data);
    }).catch(error => {
      setError('Error fetching Hot-deals product data: ' + error.message);
    });

}, [apiUrl, title, setError]);

  const [selectedCategory, setSelectedCategories] = useState('');
  const [selectedSubCategories, setSelectedSubCategories] = useState('');

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategories(selected);
  };

  const handleSubCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedSubCategories(selected);
  };


  return (
    <div className="estore-container">
         
        <section className="askquestions">
            <div className="big-title">
                <h2> Ask Questions </h2>
            </div>

            <div className="before-the-row">
                <div className="row">
                    <div className="home">
                        <button type="button" onClick={() => handleClick('/community', navigate)}> <FontAwesomeIcon icon={faHome} /> Goto Community </button>
                    </div>
                   
                    <div className="real-section">
                        <p className="welcome"> Good day! Welcome to Ashopree community.👏 </p>
                        <div className="form-starts">
                            <form action="" method="GET"> 
                                <div>
                                    <p> Categories <span> * </span> </p>
                                    {firstCategory.length !== 0 ? (
                                        Array.isArray(firstCategory) ? (  
                                            <select value={selectedCategory} onChange={handleCategoryChange} name="category" required>
                                                <option value=""> Select Category </option>
                                                {firstCategory.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <p>Sorry, an error occurred</p>
                                        )
                                    ) : (
                                        <p> Loading Categories.... </p> 
                                    )}
                                </div>
                                {selectedCategory && (
                                    <div>
                                        <p> Select Sub-Categories <span> * </span> </p>
                                        <select value={selectedSubCategories} onChange={handleSubCategoryChange} name="sub-categories" id="" required>
                                            <option value=""> Select Specific </option>
                                            {categories.map((theSubCats, index) => (
                                                <option key={index} value={theSubCats.category} >
                                                    {theSubCats.category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div>
                                    <p> Your question <span> * </span> </p>
                                    <input type="text" name="question" placeholder="What is your questions?" required/>
                                </div>
                                <div>
                                    <p> What's this about (Optional) </p>
                                    <input type="file" name="insertedFile" />
                                    <textarea name="addedDetails" id="" cols="30" rows="10" placeholder="Feel free to describe in details what you've uploaded here"></textarea>
                                </div>
                                <div className="name-and-email">
                                    <div>
                                        <p> Name <span> * </span> </p>
                                        <input type="text" name="name" placeholder="What is your name?" required/>
                                    </div>
                                    <div>
                                        <p> Email <span> * </span> </p>
                                        <input type="email" name="email" placeholder="Email Address" required/>
                                    </div>
                                </div>

                                <button type="submit" name="submit"> Submit </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>

  );

};
