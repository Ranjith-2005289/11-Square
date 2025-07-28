// components/Header.js
import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <Link href="/" className="logo">
                11score
            </Link>
            <nav className="nav">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/properties" className="nav-link">Properties</Link>
                <Link href="/services" className="nav-link">Services</Link>
                <Link href="/about" className="nav-link">About Us</Link>
                <Link href="/signin" className="sign-in">Sign In</Link>
            </nav>
        </header>
    );
};

export default Header;