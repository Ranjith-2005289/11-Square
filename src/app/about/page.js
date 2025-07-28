'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const AboutPage = () => {
    const handleCtaClick = () => {
        alert('Thank you for your interest! We will contact you shortly to schedule your Discovery Call.');
    };

    return (
        <>
            <Header />

            <div className="page-header">
                <div className="header-content">
                    <h1 className="page-title">About 11score</h1>
                    <p className="page-subtitle">
                        Bengaluru-rooted, data-led real estate intelligence firm. Our platform empowers informed property investment decisions through cutting-edge technology and hyperlocal market insights.
                    </p>
                    
                    <div className="company-stats">
                        <div className="stat-item">
                            <span className="stat-number">50K+</span>
                            <span className="stat-label">Properties Analyzed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2.5K+</span>
                            <span className="stat-label">Successful Transactions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <main className="main-content-area">
                <div className="mission-vision-grid">
                    <div className="mission-vision-card">
                        <h3 className="card-title">
                            <span className="card-icon">🎯</span>
                            Our Mission
                        </h3>
                        <p>
                            To revolutionize real estate decision-making in Bengaluru by providing comprehensive, data-driven insights that empower buyers to make informed investment choices with confidence and clarity.
                        </p>
                        <p>
                            We believe that every property purchase should be backed by thorough analysis, market intelligence, and transparent information—removing guesswork from one of life's most significant investments.
                        </p>
                    </div>
                    
                    <div className="mission-vision-card">
                        <h3 className="card-title">
                            <span className="card-icon">🚀</span>
                            Our Vision
                        </h3>
                        <p>
                            A clean, tech-forward platform tailored for Bengaluru property buyers. Focused solely on property sales, it's designed like a smart real estate cockpit for serious buyers - blending premium UI, hyperlocal data, and AI-assisted tools.
                        </p>
                        <p>
                            We envision a future where every real estate transaction is powered by comprehensive data analysis, predictive insights, and intelligent recommendations tailored to individual investor profiles.
                        </p>
                    </div>
                </div>

                <section>
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="section-subtitle">
                        The principles that guide our mission to transform real estate intelligence and serve our clients with excellence.
                    </p>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">📊</div>
                            <h4>Data-Driven Excellence</h4>
                            <p>Every recommendation is backed by comprehensive market analysis, predictive modeling, and real-time data validation to ensure accuracy and reliability.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">🔍</div>
                            <h4>Transparency First</h4>
                            <p>We believe in complete transparency in our methodologies, data sources, and market assessments, empowering clients with full visibility into their investment decisions.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">🏗️</div>
                            <h4>Innovation & Technology</h4>
                            <p>Continuously pushing the boundaries of prop-tech through AI-powered analytics, machine learning algorithms, and cutting-edge visualization tools.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h4>Client-Centric Approach</h4>
                            <p>Every feature, analysis, and recommendation is designed with our clients' success in mind, providing personalized insights that align with individual investment goals.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">🌟</div>
                            <h4>Market Leadership</h4>
                            <p>Setting industry standards for real estate intelligence through thought leadership, innovative solutions, and consistently delivering exceptional value to our stakeholders.</p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">⚡</div>
                            <h4>Agile Excellence</h4>
                            <p>Rapidly adapting to market changes, embracing new technologies, and continuously evolving our platform to meet the dynamic needs of the real estate landscape.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Leadership Team</h2>
                    
                    <div className="team-intro">
                        <p>
                            Our leadership team combines decades of experience in real estate, technology, data science, and finance. Together, we're building the future of property intelligence, driven by a shared vision of making real estate investment accessible, transparent, and profitable for everyone.
                        </p>
                    </div>
                    
                    <div className="leadership-grid">
                        <div className="leader-card">
                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" alt="Rajesh Sharma - Founder & CEO" className="leader-avatar" width={120} height={120} />
                            <h4>Rajesh Sharma</h4>
                            <p className="role">Founder & CEO</p>
                            <p className="bio">
                                Former VP of Strategy at a leading prop-tech unicorn with 15+ years in real estate technology. Holds an MBA from IIM Bangalore and has led digital transformation initiatives worth over ₹2000 crores.
                            </p>
                            <div className="leader-credentials">
                                <span className="credential">IIM Bangalore</span>
                                <span className="credential">15+ Years Experience</span>
                                <span className="credential">PropTech Expert</span>
                            </div>
                        </div>
                        
                        <div className="leader-card">
                            <Image src="https://images.unsplash.com/photo-1494790108755-2616b612b002?w=120&h=120&fit=crop&crop=face" alt="Priya Nair - Chief Technology Officer" className="leader-avatar" width={120} height={120} />
                            <h4>Priya Nair</h4>
                            <p className="role">Chief Technology Officer</p>
                            <p className="bio">
                                Ex-Google Senior Engineering Manager with expertise in large-scale data systems and machine learning. PhD in Computer Science from IISc with 12+ years building AI-powered platforms at global scale.
                            </p>
                            <div className="leader-credentials">
                                <span className="credential">PhD IISc</span>
                                <span className="credential">Ex-Google</span>
                                <span className="credential">AI/ML Expert</span>
                            </div>
                        </div>
                        
                        <div className="leader-card">
                            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" alt="Arjun Reddy - Head of Data Science" className="leader-avatar" width={120} height={120} />
                            <h4>Arjun Reddy</h4>
                            <p className="role">Head of Data Science</p>
                            <p className="bio">
                                Former Principal Data Scientist at Flipkart with 10+ years in predictive analytics and market modeling. Specializes in real estate valuation algorithms and has published 15+ research papers in data science journals.
                            </p>
                            <div className="leader-credentials">
                                <span className="credential">Ex-Flipkart</span>
                                <span className="credential">10+ Years Analytics</span>
                                <span className="credential">Research Published</span>
                            </div>
                        </div>
                        
                        <div className="leader-card">
                            <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face" alt="Sarah Khan - Head of Operations" className="leader-avatar" width={120} height={120} />
                            <h4>Sarah Khan</h4>
                            <p className="role">Head of Operations</p>
                            <p className="bio">
                                Operations veteran from Amazon India, responsible for scaling seamless customer experiences. Brings 18+ years of expertise in logistics, customer service, and process optimization.
                            </p>
                            <div className="leader-credentials">
                                <span className="credential">Ex-Amazon</span>
                                <span className="credential">18+ Years Operations</span>
                                <span className="credential">Customer Experience</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Our Growth Story</h2>
                    <p className="section-subtitle">
                        A visual timeline of our key milestones and achievements.
                    </p>
                    <div className="timeline-container">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2023</div>
                                <h4 className="timeline-title">Concept & Market Research</h4>
                                <p className="timeline-description">Laying the groundwork for 11score's unique approach, focusing on the dynamic real estate landscape.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2024</div>
                                <h4 className="timeline-title">Beta Platform Launch</h4>
                                <p className="timeline-description">First users experience our smart real estate cockpit, blending premium UI and hyperlocal data.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2025</div>
                                <h4 className="timeline-title">AI-Assisted Tools & Expansion</h4>
                                <p className="timeline-description">Integrating AI-assisted tools for property matching and exploring expansion to other markets.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2026</div>
                                <h4 className="timeline-title">Advanced Predictive Analytics</h4>
                                <p className="timeline-description">Launching our enhanced Predictive Price Forecast Tool for deeper market insights.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2027</div>
                                <h4 className="timeline-title">Strategic Partnerships & Growth</h4>
                                <p className="timeline-description">Forging key industry partnerships and expanding our service offerings to new customer segments.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <section className="cta-section">
                <h2>Ready to Make an Informed Decision?</h2>
                <p>Book a discovery call with our expert team to get personalized guidance and unlock the full potential of 11score's intelligence.</p>
                <div className="cta-buttons">
                    <button onClick={handleCtaClick} className="cta-button">Book a Discovery Call</button>
                    <Link href="#" className="cta-button secondary">Contact Sales</Link>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutPage;