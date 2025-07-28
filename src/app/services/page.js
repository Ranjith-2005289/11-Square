'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServicesPage = () => {
    const handleButtonClick = (serviceType) => {
        let message = '';
        switch(serviceType) {
            case 'legal':
                message = 'You have requested a legal consultation. We will contact you shortly.';
                break;
            case 'loan':
                message = 'You have started a home loan eligibility check. We will guide you through the process.';
                break;
            case 'builder':
                message = 'You are now viewing our detailed builder scores. A dedicated representative will assist you.';
                break;
            default:
                message = 'Your request has been received. We will get in touch with you.';
        }
        alert(message);
    };

    return (
        <>
            <Header />

            <div className="page-header">
                <div className="header-content">
                    <h1 className="page-title">Professional Real Estate Services</h1>
                    <p className="page-subtitle">Comprehensive solutions backed by expertise, technology, and transparency to ensure your property investment success.</p>
                </div>
            </div>

            <main>
                <section className="services-section">
                    <div className="services-grid">
                        <div className="service-card fade-in">
                            <div className="service-header">
                                <div className="service-icon">⚖️</div>
                                <h3>Legal Due Diligence</h3>
                            </div>
                            <p className="service-description">
                                Comprehensive legal verification to protect your investment from potential disputes and ensure clear title ownership with complete documentation transparency.
                            </p>
                            <ul className="service-features">
                                <li>Title deed verification and chain analysis</li>
                                <li>RERA compliance and approval checks</li>
                                <li>Encumbrance certificate review</li>
                                <li>Property tax and utility clearances</li>
                                <li>Building plan approval verification</li>
                                <li>Legal opinion report with recommendations</li>
                            </ul>
                            <button className="service-btn" onClick={() => handleButtonClick('legal')}>Schedule Consultation</button>
                        </div>
                        
                        <div className="service-card fade-in">
                            <div className="service-header">
                                <div className="service-icon">💰</div>
                                <h3>Home Loan Assistance</h3>
                            </div>
                            <p className="service-description">
                                Navigate the complex loan landscape with expert guidance, competitive rates comparison, and streamlined application processes across multiple lenders.
                            </p>
                            <ul className="service-features">
                                <li>Loan eligibility assessment and pre-approval</li>
                                <li>Interest rate comparison across 25+ banks</li>
                                <li>Documentation support and submission</li>
                                <li>Application tracking and follow-up</li>
                                <li>Negotiation for better terms and rates</li>
                            </ul>
                            <button className="service-btn" onClick={() => handleButtonClick('loan')}>Check Eligibility</button>
                        </div>

                        <div className="service-card fade-in">
                            <div className="service-header">
                                <div className="service-icon">⭐</div>
                                <h3>Builder Trust Score</h3>
                            </div>
                            <p className="service-description">
                                Data-driven builder evaluation system providing transparent ratings based on delivery track record, financial stability, and regulatory compliance.
                            </p>
                            <ul className="service-features">
                                <li>Historical project delivery analysis</li>
                                <li>RERA compliance and customer satisfaction scores</li>
                                <li>Financial health and credit rating review</li>
                                <li>Litigation history and dispute resolution</li>
                                <li>Quality standards and construction practices</li>
                                <li>Market reputation and peer comparisons</li>
                            </ul>
                            <button className="service-btn" onClick={() => handleButtonClick('builder')}>View Builder Scores</button>
                        </div>
                    </div>
                </section>

                <section className="innovations-section">
                    <div className="innovations-container">
                        <div className="section-header">
                            <h2 className="section-title">Innovation-Driven Excellence</h2>
                            <p className="section-subtitle">
                                Pioneering transparency and accountability in real estate through cutting-edge technology and customer-centric innovations.
                            </p>
                        </div>
                        <div className="innovation-grid">
                            <div className="innovation-card">
                                <div className="innovation-icon">🗣️</div>
                                <h4>Agent Performance Review System</h4>
                                <p>Revolutionary feedback mechanism allowing clients to rate and review agent performance after property visits, ensuring professional service standards and continuous improvement in customer experience.</p>
                            </div>
                            
                            <div className="innovation-card">
                                <div className="innovation-icon">📡</div>
                                <h4>Builder Reputation Radar</h4>
                                <p>Advanced analytics platform providing real-time builder reputation scores, historical case studies, and comprehensive background checks to empower informed decision-making.</p>
                            </div>

                            <div className="innovation-card">
                                <div className="innovation-icon">🔍</div>
                                <h4>Property Intelligence Hub</h4>
                                <p>AI-powered market analysis providing property valuation trends, neighborhood insights, and investment potential assessments based on comprehensive data analytics.</p>
                            </div>

                            <div className="innovation-card">
                                <div className="innovation-icon">📱</div>
                                <h4>Digital Transaction Management</h4>
                                <p>End-to-end digital platform managing the entire property transaction lifecycle from initial inquiry to final registration with complete transparency and milestone tracking.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trust-section">
                    <div className="trust-container">
                        <h2 className="section-title">Trusted by Thousands</h2>
                        <p className="section-subtitle">
                            Our commitment to excellence has earned the trust of homebuyers, investors, and industry professionals across the globe.
                        </p>
                        <div className="trust-stats">
                            <div className="trust-stat">
                                <span className="trust-number">2,500+</span>
                                <div className="trust-label">Successful Transactions</div>
                            </div>
                            <div className="trust-stat">
                                <span className="trust-number">98%</span>
                                <div className="trust-label">Client Satisfaction Rate</div>
                            </div>
                            <div className="trust-stat">
                                <span className="trust-number">150+</span>
                                <div className="trust-label">Verified Builders</div>
                            </div>
                            <div className="trust-stat">
                                <span className="trust-number">₹500Cr+</span>
                                <div className="trust-label">Transactions Facilitated</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    );
};

export default ServicesPage;