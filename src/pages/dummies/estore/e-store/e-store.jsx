import EstoreSide from "@components/estore/EstoreSide";

const { default: Footer } = require("@components/estore/Footer");
const { default: Header } = require("@components/estore/Header");



const eStore = () => {


    return (
        
        <div className="estoremain">
            <Header />

            <div className="frame-416x">
                    <img className="rectangle-48" src={"/assets/images/estore/rectangle-480.png"} alt="backgroundImgs"/>
                    <img className="rectangle-49" src={"/assets/images/estore/rectangle-490.png"} alt="backgroundImgs"/>
                    <img className="rectangle-50" src={"/assets/images/estore/rectangle-500.png"} alt="backgroundImgs"/>
                    <img className="rectangle-51" src={"/assets/images/estore/rectangle-510.png"} alt="backgroundImgs"/>

                        <div className="rectangle-52"></div>
                        <div className="frame-450x">    
                            <div className="frame-439">
                                <div className="frame-438">
                                    <p className="get-all-products-and-services-you-need">
                                        E-store
                                    </p>
                                <p className="buy-products-and-order-for-services-from-our-registered-vendors-at-cheap-prices">
                                    Buy products and order for services from our registered vendors
                                    at cheap prices
                                </p>
                                </div>

                                <div className="frame-3212">
                                    <button type="button" className="frame-437">
                                        <p className="category">Category</p>
                                        <svg
                                        className="outline-interface-caret-down"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11.0201 5.97976C11.2154 6.17502 11.2154 6.4916 11.0201 6.68687L8.35347 9.35353C8.15821 9.54879 7.84163 9.54879 7.64637 9.35353L4.9797 6.68687C4.78444 6.4916 4.78444 6.17502 4.9797 5.97976C5.17496 5.7845 5.49154 5.7845 5.68681 5.97976L7.99992 8.29287L10.313 5.97976C10.5083 5.7845 10.8249 5.7845 11.0201 5.97976Z"
                                            fill="#A0A2A7"
                                        />
                                        </svg>
                                    </button>
                                    <input className="home" placeholder="search for a product services or e-store" />

                                    <button type="button" className="frame-436">
                                        <svg
                                        className="search-alt"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
            </div>

            <EstoreSide />

            <div className="estoreproducts">

              <div className="oneItem">
                <div className="frame-520">
                  <img className="rectangle-2" src={"/assets/images/estore/products/product1.png"} alt="products"/>
                  <div className="frame-519">

                    <div className="col-md-6">
                      <div className="frame-518">
                          <p className="text">Adebambo Store</p>
                        <p>
                          We curate an exquisite collection of the latest trends and timeless classics. Discover a seamless shopping experience with a wide range of products...
                        </p>
                      </div>

                      <div className="row gap-3"> 
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e6e5f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#7165e3", fontSize: "14px", fontWeight: "500" }}>
                            Fashion
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#ffedfc", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#d619b8", fontSize: "14px", fontWeight: "500" }}>
                            Beauty
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e2e7f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "##2d334a", fontSize: "14px", fontWeight: "500" }}>
                            Clothing
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="d-flex p-2">
                      <p className="go-to-store" style={{ color: "var(--primary, #e7aa07)", textAlign: "left", fontFamily: "PlusJakartaSans-SemiBold, sans-serif", fontSize: "16px", fontWeight: "600" }}> 
                        Go to store </p>
                        <svg
                          className="arrow-up-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#131A29"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg> 
                    </button>

                  </div>
                  
                </div>
              </div>

              <div className="oneItem">
                <div className="frame-520">
                  <img className="rectangle-2" src={"/assets/images/estore/products/product2.png"} alt="products"/>
                  <div className="frame-519">

                    <div className="col-md-6">
                      <div className="frame-518">
                          <p className="text">Adebambo Store</p>
                        <p>
                          We curate an exquisite collection of the latest trends and
                          timeless classics. Discover a seamless shopping experience with
                          a wide range of products...
                        </p>
                      </div>

                      <div className="row gap-3"> 
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e6e5f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#7165e3", fontSize: "14px", fontWeight: "500" }}>
                            Fashion
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#ffedfc", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#d619b8", fontSize: "14px", fontWeight: "500" }}>
                            Beauty
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e2e7f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "##2d334a", fontSize: "14px", fontWeight: "500" }}>
                            Clothing
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="d-flex p-2">
                      <p className="go-to-store" style={{ color: "var(--primary, #e7aa07)", textAlign: "left", fontFamily: "PlusJakartaSans-SemiBold, sans-serif", fontSize: "16px", fontWeight: "600" }}> 
                        Go to store </p>
                        <svg
                          className="arrow-up-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#131A29"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg> 
                    </button>

                  </div>
                  
                </div>
              </div>

              <div className="oneItem">
                <div className="frame-520">
                  <img className="rectangle-2" src={"/assets/images/estore/products/product3.png"} alt="products"/>
                  <div className="frame-519">

                    <div className="col-md-6">
                      <div className="frame-518">
                          <p className="text">Adebambo Store</p>
                        <p>
                          We curate an exquisite collection of the latest trends and
                          timeless classics. Discover a seamless shopping experience with
                          a wide range of products...
                        </p>
                      </div>

                      <div className="row gap-3"> 
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e6e5f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#7165e3", fontSize: "14px", fontWeight: "500" }}>
                            Fashion
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#ffedfc", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#d619b8", fontSize: "14px", fontWeight: "500" }}>
                            Beauty
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e2e7f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "##2d334a", fontSize: "14px", fontWeight: "500" }}>
                            Clothing
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="d-flex p-2">
                      <p className="go-to-store" style={{ color: "var(--primary, #e7aa07)", textAlign: "left", fontFamily: "PlusJakartaSans-SemiBold, sans-serif", fontSize: "16px", fontWeight: "600" }}> 
                        Go to store </p>
                        <svg
                          className="arrow-up-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#131A29"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg> 
                    </button>

                  </div>
                  
                </div>
              </div>

              <div className="oneItem">
                <div className="frame-520">
                  <img className="rectangle-2" src={"/assets/images/estore/products/product4.png"} alt="products"/>
                  <div className="frame-519">

                    <div className="col-md-6">
                      <div className="frame-518">
                          <p className="text">Adebambo Store</p>
                        <p>
                          We curate an exquisite collection of the latest trends and
                          timeless classics. Discover a seamless shopping experience with
                          a wide range of products...
                        </p>
                      </div>

                      <div className="row gap-3"> 
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e6e5f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#7165e3", fontSize: "14px", fontWeight: "500" }}>
                            Fashion
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#ffedfc", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "#d619b8", fontSize: "14px", fontWeight: "500" }}>
                            Beauty
                          </div>
                        </div>
                        <div className="col-xs-6 col-sm-2 mt-3" style={{ background: "#e2e7f8", borderRadius: "6px", padding: "6px 8px 6px 8px", display: "flex", justifyContent: "center" }}>
                          <div className="beauty" style={{ color: "##2d334a", fontSize: "14px", fontWeight: "500" }}>
                            Clothing
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="d-flex p-2">
                      <p className="go-to-store" style={{ color: "var(--primary, #e7aa07)", textAlign: "left", fontFamily: "PlusJakartaSans-SemiBold, sans-serif", fontSize: "16px", fontWeight: "600" }}> 
                        Go to store </p>
                        <svg
                          className="arrow-up-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#131A29"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg> 
                    </button>

                  </div>
                  
                </div>
              </div>
              
              


            </div>

            <div className="d-flex justify-center" style={{ top: "-85px", position: 'relative' }}>
                <nav aria-label="Pagination">
                  <ul class="flex list-none" style={{ gap: "20px" }}>
                    <li class="mr-2">
                      <a href="#" class="text-blue-500 hover:text-blue-700"> <span aria-hidden="true">&larr;</span> Previous</a>
                    </li>
                    <li className="pr-2"><a href="#">1</a></li>
                    <li className="pr-2"><a href="#">2 </a></li>
                    <li className="pr-2"><a href="#">3 </a></li>
                    <li className="pr-2"><a href="#">4 </a></li>
                    <li className="pr-2"><a href="#">5 </a></li>
                    <li>
                      <a href="#" class="text-blue-500 hover:text-blue-700">Next <span aria-hidden="true">&rarr;</span></a>
                    </li>
                  </ul>
                </nav>
              </div>

            <div className="d-flex justify-center">
              <div className="text-center p-5" style={{ background: "rgba(236, 239, 252, 1)" }}>
                    <p className="">
                      Are you a store owner?, or do you want to list your products or services on Paysprint market place? <br/>

                      Let’s get you started. Create a merchant account today and own your
                      E-store
                    </p>
                  <button type="button" className="btn btn-warning pt-2 mt-3">
                    Create Merchant account
                  </button>
              </div>
            </div>

            {/* <div className="frame-502">
              <div className="we-have-found-12-000-stores-for-you">
                We have found 12,000 stores for you
              </div>
              <div className="frame-501">
                <div className="sort-by">Sort by:</div>
                <div className="frame-500">
                  <div className="newest">Newest</div>
                  <svg
                    className="chevron-down3"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#131A29"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="frame-3979">
              <div className="frame-3977">
                <svg
                  className="arrow-sm-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M6 12L11 7M6 12L11 17"
                    stroke="#828282"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="previous">Previous</div> 
              </div>
              <div className="frame-3973">
                <div className="frame-3970">
                  <div className="_1">1</div>
                </div>
                <div className="frame-3971">
                  <div className="_2">2</div>
                </div>
                <div className="frame-3972">
                  <div className="_3">3</div>
                </div>
                <div className="frame-39732">
                  <div className="_4">4</div>
                </div>
                <div className="frame-3974">
                  <div className="div">...</div>
                </div>
                <div className="frame-3976">
                  <div className="_10">10</div>
                </div>
              </div>
              <div className="frame-3978">
                <div className="next">Next</div>
                <svg
                  className="arrow-sm-left2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12L6 12M18 12L13 17M18 12L13 7"
                    stroke="#2D334A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div> */}

            <Footer />
        </div>
    );
}


export default eStore;