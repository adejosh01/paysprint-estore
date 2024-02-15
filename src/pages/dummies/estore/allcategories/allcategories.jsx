

import Header from "@components/estore/Header";
import Footer from "@components/estore/Footer";
import EstoreSide from "@components/estore/EstoreSide";


const AllCategories = () => {
    return(
        <div className="marketplace">
            <Header />

            <section className="d-flex mt-5">

                <div className="m-2 " style={{ width: "320px", height: "783px", background: "#f5f5f5", borderRadius: "8px" }}>

                    <div class="row p-3">
                        <p class="col-xs-9">STORE CATGORY</p>

                        <div class="row">
                            <div class="col-8 p-3">
                                <a href="#" class="accounting-18">Accounting (18)</a>
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="art-craft-10">Art &amp; Craft (10)</a>
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="automotive-23">Automotive (23)</a>
                            </div>

                            <div class="col-11 p-3">
                                <a href="#" class="aviation-aerospace-5">Aviation/ Aerospace (5)</a> 
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="chemicals-5">Chemicals (5)</a>
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="chemicals-5">Chemicals (5)</a>
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="chemicals-5">Chemicals (5)</a>
                            </div>

                            <div class="col-8 p-3">
                                <a href="#" class="chemicals-5">Chemicals (5)</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-grid ml-2 mt-3" style={{ width: "100%" }}>
                    <div className="col-xs-9">
                        <div className="d-flex justify-between"> 
                            <h4>Home & Office</h4>
                            <div className="mr-3" style={{ color: "rgba(231, 170, 7, 1)" }}>
                                <a href="#"><h4>See all</h4></a>
                            </div>
                        </div>   

                        <div className="d-flex p-3 justify-between">
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category1.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office Chair</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category2.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office chair + table</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category3.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Workspace set up</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-9 mt-2">
                        <div className="d-flex justify-between">
                            <h4>Electronics</h4> 
                            <div className="mr-3" style={{ color: "rgba(231, 170, 7, 1)" }}>
                                <a href="#"><h4>See all</h4></a>
                            </div>
                        </div>

                        <div className="d-flex p-3 justify-between">
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category4.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office Chair</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category5.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office chair + table</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category6.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Workspace set up</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-9 mt-2">
                        <div className="d-flex justify-between">
                            <h4>Electronics</h4>
                            <div className="mr-3" style={{ color: "rgba(231, 170, 7, 1)" }}>
                                <a href="#"><h4>See all</h4></a>
                            </div>
                        </div>

                        <div className="d-flex p-3 justify-between">
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category1.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office Chair</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category2.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Office chair + table</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <img className="rectangle-2" src={"/assets/images/estore/allcategories/category3.png"} alt="categoryImages"/>
                                <b><h5 className="pt-2">Workspace set up</h5></b>
                                <p>#1200.00 <br/>
                                    <span className="d-flex">
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/fullStar.png"} width={"30px"} alt="starRating" />
                                        <img src={"/assets/icons/halfStar.png"} width={"30px"} alt="starRating" />
                                        <span className="mt-2" style={{ color: '#a69f9f', font: '500 14px "PlusJakartaSans-Medium", sans-serif' }}>4.56 (132 reviews)</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <Footer />
        </div>
    );


}


export default AllCategories;