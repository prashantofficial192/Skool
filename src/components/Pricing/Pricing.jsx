import React from 'react'
import CheckSvg from "../assets/images/10008.svg";
import "./Pricing.css"
import "./responsive.css"

function Pricing() {
    return (
        <>
            <main>
                <div className="pricing-section">
                    {/* 1 */}
                    <div className="pricing-heading">
                        <div className="pricing-h1">
                            <h1>Simple pricing</h1>
                        </div>
                        <div className="pricing-p">
                            <p>1 plan with everything included. No hidden fees.</p>
                            <p>Get started with a 14-day free trial. Cancel anytime.</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="pricing-card">
                        <div className="pricing-tag">
                            <h1>$99/month</h1>
                        </div>
                        <div className="pricing-features">
                            <div className="pricing">
                                <img src={CheckSvg} alt="SVG Image" />
                                <span>1</span>
                                <p>group</p>
                            </div>
                            <div className="pricing">
                                <img src={CheckSvg} alt="SVG Image" />
                                <span>All</span>
                                <p>features</p>
                            </div>
                            <div className="pricing">
                                <img src={CheckSvg} alt="SVG Image" />
                                <span>Unlimited</span>
                                <p>courses</p>
                            </div>
                            <div className="pricing">
                                <img src={CheckSvg} alt="SVG Image" />
                                <span>Unlimited</span>
                                <p>members</p>
                            </div>
                            <div className="pricing">
                                <img src={CheckSvg} alt="SVG Image" />
                                <span>2.9%</span>
                                <p>transaction fee</p>
                            </div>
                        </div>
                        <div className="pricing-btn">
                            <button>START 14-DAY FREE TRIAL</button>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="pricing-fees">
                        <div className="fees">
                            <p>Skool has the cheapest transaction fees.</p>
                        </div>
                        <div className="platform-fees">
                            <div className="platform">
                                <p>Patreon</p>
                                <p>14%</p>
                            </div>
                            <div className="platform">
                                <p>Discord</p>
                                <p>16%</p>
                            </div>
                            <div className="platform">
                                <p>Gumroad</p>
                                <p>14%</p>
                            </div>
                            <div className="platform">
                                <p>Kajabi</p>
                                <p>4.9%</p>
                            </div>
                            <div className="platform">
                                <p>Stripe</p>
                                <p>4.9%</p>
                            </div>
                            <div className="platform">
                                <p>Skool</p>
                                <p>2.9%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Pricing
