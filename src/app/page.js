import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
    title: '11score - Find Your Property',
    description: 'Find your dream property with 11score. We specialize in sales and lettings across London and beyond.',
};

const HomePage = () => {
    return (
        <>
            <Header />

            <section className="hero">
                <h1 className="hero-title">FIND YOUR PROPERTY<br/>WITH 11SCORE</h1>
                <div className="search-container">
                    <form className="search-form">
                        <select className="city-select">
                            <option>City</option>
                            <option>London</option>
                            <option>Manchester</option>
                            <option>Birmingham</option>
                            <option>Liverpool</option>
                        </select>
                        <input type="text" className="search-input" placeholder="Search for property, location or keywords..."/>
                        <button type="submit" className="search-btn">SEARCH</button>
                    </form>
                </div>
                <div className="action-buttons">
                    <Link href="#buy" className="action-btn buy-btn">BUY</Link>
                    <Link href="#rent" className="action-btn rent-btn">SELL</Link>
                </div>
            </section>

            <section className="dream-properties-main-section">
                <div className="container">
                    <div className="info-section">
                        <div className="dream-properties-image-top"></div>
                        <div>
                            <div className="info-text">
                                <h2>Dream properties</h2>
                                <p>We specialise in selling and letting a wide range of homes, from modern London apartments to historical country houses, farms, and international properties.</p>
                                <div className="info-links">
                                    <Link href="#">Sell with us</Link>
                                    <Link href="#">Let with us</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-section-inner">
                        <div className="testimonial-text-inner">
                            <h3>We're here for you</h3>
                            <p>Whether you're looking to buy, sell or rent a property, as your next home or as an investment, we're committed to finding your perfect match.</p>
                            <div className="quote">
                                "This was by far and away the best experience I have had with an estate agency. Lovely people and above all supremely professional from start to finish, as a seller and the buyers."
                            </div>
                            <p><strong>10/10 from me as a seller and the buyers.</strong></p>
                            <p>Battersea office</p>
                        </div>
                        <div className="testimonial-image-bottom"></div>
                    </div>
                </div>
            </section>

            <section className="property-categories-section">
                <div className="container">
                    <h2>Find Properties by Type</h2>
                    <div className="categories-scroll-container">
                        <div className="category-item new-build-cat">
                            <h4>New build</h4>
                        </div>
                        <div className="category-item farm-house-cat">
                            <h4>Farm House</h4>
                        </div>
                        <div className="category-item sites-cat">
                            <h4>Sites</h4>
                        </div>
                        <div className="category-item cottage-cat">
                            <h4>Cottage</h4>
                        </div>
                        <div className="category-item pent-house-cat">
                            <h4>Pent house</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="valuation-section">
                <div className="container">
                    <div className="valuation-content">
                        <div className="valuation-text">
                            <h2>How much is your property worth?</h2>
                            <p>We will provide a reliable estimate of your property's value, based on the latest market insights.</p>
                            <button className="valuation-btn">Book your free valuation</button>
                        </div>
                        <div className="valuation-image"></div>
                    </div>
                </div>
            </section>

            <section className="recently-sold">
                <div className="container">
                    <h2>Our Recent Success</h2>
                    <div className="sold-grid">
                        <div className="sold-property property-1">
                            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '15px', zIndex: 2 }}>
                                <h3>Recently Sold</h3>
                                <p className="address">123 Main Street</p>
                                <p className="price">$550,000</p>
                            </div>
                        </div>
                        <div className="sold-property property-2">
                            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '15px', zIndex: 2 }}>
                                <h3>Recently Sold</h3>
                                <p className="address">456 Oak Avenue</p>
                                <p className="price">$725,000</p>
                            </div>
                        </div>
                        <div className="sold-property property-3">
                            <div style={{ background: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '15px', zIndex: 2 }}>
                                <h3>Recently Sold</h3>
                                <p className="address">789 Pine Lane</p>
                                <p className="price">$480,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews">
                <div className="container">
                    <h2>What Our Clients Say</h2>
                    <div className="reviews-grid">
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐⭐</p>
                            <p className="review-text">"Steve is an incredibly knowledgeable and professional real estate agent. He made the selling process seamless and stress-free."</p>
                            <p className="reviewer-name">- Diana Svenda</p>
                            <p className="office">Battersea office</p>
                        </div>
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐</p>
                            <p className="review-text">"After a couple dreadful months of tolerating my lower back pain, a friend referred me to Steve. He accurately diagnosed my issue and I'm feeling great now!"</p>
                            <p className="reviewer-name">- Kousha A</p>
                            <p className="office">Central London office</p>
                        </div>
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐⭐</p>
                            <p className="review-text">"I have known Steven for a very long time. He is always friendly, helpful, and provides excellent advice on property matters. Highly recommend!"</p>
                            <p className="reviewer-name">- Jake</p>
                            <p className="office">Canary Wharf office</p>
                        </div>
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐⭐</p>
                            <p className="review-text">"I've been lucky to know Steven my entire life, and when it came to finding my first home, there was no one else I trusted more. He truly cares about his clients."</p>
                            <p className="reviewer-name">- rangerman</p>
                            <p className="office">Chelsea office</p>
                        </div>
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐⭐</p>
                            <p className="review-text">"Steve is an incredibly knowledgeable and professional real estate agent. He made the selling process seamless and stress-free."</p>
                            <p className="reviewer-name">- Diana Svenda</p>
                            <p className="office">Battersea office</p>
                        </div>
                        <div className="review-item">
                            <p className="stars">⭐⭐⭐⭐</p>
                            <p className="review-text">"After a couple dreadful months of tolerating my lower back pain, a friend referred me to Steve. He accurately diagnosed my issue and I'm feeling great now!"</p>
                            <p className="reviewer-name">- Kousha A</p>
                            <p className="office">Central London office</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default HomePage;