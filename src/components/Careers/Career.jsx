import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Career.css"
import "./responsive.css"
import Image1 from "../assets/images/10070.png";
import Image2 from "../assets/images/10068.png";
import Image3 from "../assets/images/10069.png";
import Image4 from "../assets/images/10067.png"

function Career() {
    return (
        <>
            <Navbar />
            <main>
                {/* div 1 starts */}
                <div className="career-heading">
                    <div className="career-heading-1">
                        <h1>Work for Skool</h1>
                    </div>
                    <div className="career-heading-2">
                        <p>Skool is home to a diverse group of engineers and designers — gamers and geeks.</p>
                    </div>
                    <div className="career-heading-3">
                        <p>We prioritize quality and take our time to make sure we get it just right. Our team come from places like Riot, Facebook, Coinbase, SpaceX, Amazon, Tesla, and NASA.
                        </p>
                        <p>We're fully remote (27 people) across the US and Canada. We get everybody together a few times a year to eat good food, hang out, and play games. We like to have fun.</p>
                    </div>
                </div>
                {/* div 1 ends */}
                {/* div 2 start */}
                <div className="career-photos">
                    <div className="career-photo-1">
                        <img src={Image1} alt="career-image" />
                    </div>
                    <div className="career-photo-2">
                        <img src={Image2} alt="career-image" />
                    </div>
                    <div className="career-photo-3">
                        <img src={Image3} alt="career-image" />
                    </div>
                </div>
                {/* div 2 ends */}

                {/* div 3 starts */}
                <div className="career-position">
                    <div className="position-heading">
                        <h1>Open positions (all remote)</h1>
                    </div>
                    <div className="position-data">
                        <div className="positions">
                            <div className="position-title">
                                <h1>Principal Software Engineer, Backend</h1>
                            </div>
                            <div className="position-desc">
                                <p>Stack: Go</p>
                                <p>Experience: Senior or more</p>
                            </div>
                            <div className="position-link">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        <div className="positions">
                            <div className="position-title">
                                <h1>Technical Product Manager</h1>
                            </div>
                            <div className="position-desc">
                                <p>Stack: Product Management</p>
                                <p>Experience: Senior or more</p>
                            </div>
                            <div className="position-link">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 3 ends */}

                {/* div 4 starts */}

                <div className="growing">
                    <div className="growing-heading">
                        <h1>We're growing fast</h1>
                    </div>
                    <div className="growing-graph">
                        <img src={Image4} alt="Image" />
                    </div>
                </div>

                {/* div 4 ends */}

                {/* div 5 start */}
                <div className="team">
                    <div className="team-heading">
                        <h1>Words from our team</h1>
                    </div>
                    <div className="team-words">
                        <div className="team1">
                            <div className="team1-words">
                                <p>“As an ex-faang engineer, I know that it will be faangs (s for skool) in the upcoming years”.</p>
                            </div>
                            <div className="team1-words">
                                <p>“Skool is startup culture at its best. You'll be surrounded by some of the best engineers in the industry. It's all the best pieces of more established companies, but with none of the unnecessary”.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-words">
                        <div className="team1">
                            <div className="team1-words">
                                <p>“Of everywhere I've worked on any level - it's the best. I get to work with engaged, driven, super smart people everyday who are eager to help and share the common passion to make our platform better. We have a direct connection to our users so we get to see instant impact and ship features and fixes that actually seem to matter in an online space that continues to grow. We deal with minimal BS and bureaucracy which allows us to do our best work without stressing unimportant processes. Our team outings make us feel tight-knit while all working remote to the point where everyone I work with feels more like a personal friend than a coworker I'm forced to collaborate with”.</p>
                            </div>
                            <div className="team1-words">
                                <p>“Skool is a very special place for me. Everything that we do feels meaningful, intentional, and most importantly fulfilling. There is a sense that things always fall in the right place as if it's meant to be. I believe miracles like that only happen when good people come together to build something awesome and put their heart and soul into it. Which is what working at Skool feels like. We are here because we genuinely want to be here, not for any other superficial reason. I have huge respect for the leadership team for facilitating this environment. It was a bit of a culture shock coming into Skool and seeing how effective the team is. There is very little noise. Only signal. And I absolutely love that about Skool”.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-words">
                        <div className="team1">
                            <div className="team1-words">
                                <p>“From an engineer's perspective, my favorite thing about working at Skool is how the product team does such a great job finding out what our customers need so everything we build is impactful and our efforts are well-spent”.</p>
                            </div>
                            <div className="team1-words">
                                <p>“If a company itself were a product, I would give it five stars for all of its features. Meaningful work with visible progress, a great product that users love, awesome co-workers, a management team that listens, and very fair compensation & benefits. Love it here”.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* div 6 ends */}
            </main>
        </>
    )
}

export default Career
