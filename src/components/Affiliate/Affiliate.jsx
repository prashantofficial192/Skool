import React from 'react'
import Navbar from '../Navbar/Navbar'
import Step1 from "../assets/images/100066.png"
import Step2 from "../assets/images/100065.png"
import Step3 from "../assets/images/100064.png"
import "./Affiliate.css"
import "./responsive.css"

function Affiliate() {
    return (
        <>
            <Navbar />
            <main>
                {/* Div 1 start */}
                <div className="headings">
                    <div className="title-1">
                        <h1>Earn 40% of recurring revenue</h1>
                    </div>
                    <div className="title-2">
                        <p>Refer people to Skool and earn 40% of monthly recurring revenue for life.</p>
                        <p>If somebody creates a group from your group, we attribute it to you automatically.</p>
                    </div>
                    <div className="title-3">
                        <button>BECOME AN AFFILIATE</button>
                    </div>
                </div>
                {/* Div 1 end */}

                {/* Div 2 start */}
                <div className="steps">
                    {/* 1 */}
                    <div className="step-1">
                        <div className="step-img">
                            <img src={Step1} alt="Step Image" />
                        </div>
                        <div className="step-title">
                            <h3>1. Share your link</h3>
                        </div>
                        <div className="step-desc">
                            <p>Share your referral link with your friends, followers, or customers.</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="step-1">
                        <div className="step-img">
                            <img src={Step2} alt="Step Image" />
                        </div>
                        <div className="step-title">
                            <h3>2. Somebody signs up</h3>
                        </div>
                        <div className="step-desc">
                            <p>When your friend signs up for Skool, they will be attributed to you.</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="step-1">
                        <div className="step-img">
                            <img src={Step3} alt="Step Image" />
                        </div>
                        <div className="step-title">
                            <h3>3. Earn 40% commission</h3>
                        </div>
                        <div className="step-desc">
                            <p>You'll earn 40% of their monthly subscription fee for life.</p>
                        </div>
                    </div>
                </div>
                {/* Div 2 ends */}

                {/* Div 3 Start */}

                <div className="instructions">
                    <div className="instruction-1">
                        <div className="i1">
                            <h1>💰  Your group earns money automatically</h1>
                            <p>If you have a group and one of your members creates a group — we'll attribute the referral to you automatically. This makes Skool an income stream, not a cost.</p>
                        </div>
                        <div className="i1">
                            <h1>📣  Use our proven marketing swipe files</h1>
                            <p>Feeling lazy? We make it easy for you. Copy/paste social media posts, emails, high-quality graphics, and marketing materials proven to convert.</p>
                        </div>

                    </div>
                    <div className="instruction-1">
                        <div className="i1">
                            <h1>📚  Get free training on how to promote it</h1>
                            <p>Don't know where to begin? Learn best practices for promoting Skool and making money. We share the best methods we know so you can get up to speed fast!</p>
                        </div>
                        <div className="i1">
                            <h1>👥  Join our affiliate community for support</h1>
                            <p>Need help, inspiration, or ideas? Join our affiliate community to collaborate with other affiliates, get support from our team, and stay up to date..</p>
                        </div>

                    </div>
                </div>

                {/* Div 3 ends */}
            </main>
        </>
    )
}

export default Affiliate
