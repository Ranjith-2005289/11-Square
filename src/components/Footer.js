// components/Footer.js
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Knight Frank</h3>
                        <ul>
                            <li><Link href="#">Our story</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="#">Regulatory fund</Link></li>
                            <li><Link href="#">ESG</Link></li>
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Sales</Link></li>
                            <li><Link href="#">Treatment statement</Link></li>
                            <li><Link href="#">Valuations</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Market Insights</h3>
                        <ul>
                            <li><Link href="#">Research</Link></li>
                            <li><Link href="#">The Wealth Report</Link></li>
                            <li><Link href="#">Active Capital</Link></li>
                            <li><Link href="#">The London Report</Link></li>
                            <li><Link href="#">The London Survey</Link></li>
                            <li><Link href="#">The Global Living Index</Link></li>
                            <li><Link href="#">Agent Property Report</Link></li>
                            <li><Link href="#">Proptech Survey</Link></li>
                            <li><Link href="#">Acquisitions</Link></li>
                            <li><Link href="#">Disposals</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Tools and guides</h3>
                        <ul>
                            <li><Link href="#">Find an office nearby</Link></li>
                            <li><Link href="#">Buy vs rent area calculator</Link></li>
                            <li><Link href="#">Overseas buyer stamp calculator</Link></li>
                            <li><Link href="#">Property search</Link></li>
                            <li><Link href="#">Business rates calculator</Link></li>
                            <li><Link href="#">Home lettings</Link></li>
                            <li><Link href="#">Buying guide</Link></li>
                            <li><Link href="#">Selling guide</Link></li>
                            <li><Link href="#">Lettings guide</Link></li>
                            <li><Link href="#">Tenant guide</Link></li>
                            <li><Link href="#">Mortgage</Link></li>
                            <li><Link href="#">My Knight Frank</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Governance</h3>
                        <ul>
                            <li><Link href="#">Company information</Link></li>
                            <li><Link href="#">Protection against fraud</Link></li>
                            <li><Link href="#">Feedback & complaints</Link></li>
                            <li><Link href="#">Anti tax evasion - APT</Link></li>
                            <li><Link href="#">Tenant fees - non APT</Link></li>
                            <li><Link href="#">Landlord fees</Link></li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">t</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Instagram">ig</a>
                        <a href="#" aria-label="YouTube">yt</a>
                    </div>
                    <p>&copy; 2025 11score. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;