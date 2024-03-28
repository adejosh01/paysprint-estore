import React, { useState } from 'react';

function SearchComponent({ categories, topProducts, getConditionalClassName }) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://paysprint.ca/api/v1/ashopree/product/search?search=${encodeURIComponent(searchQuery)}&pageNumber=10`);
            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }
            const data = await response.json();
            setSearchResults(data.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const [isSubMenuOpen] = useState(false);


    return (
        <div className="searchIt">
            <form onSubmit={handleFormSubmit} style={{ display: 'flex' }}>
                <div className={getConditionalClassName(isSubMenuOpen, "submenu", "active")}>
                    <select name="category" defaultValue={'default'} style={{ width: '100%', color: '#A0A2A7' }}>
                        <option value="default" disabled> Categories </option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.category}>{item.category}</option>
                        ))}
                    </select>
                </div>
                <input className="home" type="text" placeholder="Search for a product, service, or online store" value={searchQuery} onChange={handleInputChange} />
                <button type="submit" className="searchbtn" name="submit">
                    <svg style={{ marginLeft: '1.5rem' }} className="search-alt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
            </form>
            <div>
                {searchResults.map((product, index) => (
                    <div key={index}>
                        <h3>{product.productName}</h3>
                        <img src={product.image} alt={product.productName} />
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchComponent;
