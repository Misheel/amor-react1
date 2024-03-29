import React from 'react';


function About() {
    return (
        <section class="about_us">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6">
                        <div class="about_us_img">
                            <img src="img/top_service.png" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about_us_text">
                            <h5>
                                2000<br /><span>since</span>
                            </h5>
                            <h2>About Believe</h2>
                            <p>According to the research firm Frost & Sullivan, the estimated
                                size of the North American used test and measurement equipment
                                market was $446.4 million in 2004 and is estimated to grow to
                                $654.5 million by 2011. For over 50 years, companies and governments
                            have procured used test and measurement instruments.</p>
                            <div class="banner_item">
                                <div class="single_item">
                                    <h2> <span class="count">50</span>k</h2>
                                    <h5>Total
                                    Volunteer</h5>
                                </div>
                                <div class="single_item">
                                    <h2><span class="count">25</span>k</h2>
                                    <h5>Successed
                                    Mission</h5>
                                </div>
                                <div class="single_item">
                                    <h2><span class="count">100</span>k</h2>
                                    <h5>Total
                                    Collection</h5>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="col-lg-12">
                        <div class="text-center about_btn">
                            <a class="btn_3 " href="#">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
