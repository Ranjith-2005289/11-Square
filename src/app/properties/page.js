import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export const metadata = {
    title: 'Properties - 11score',
    description: 'Browse our wide range of properties, from modern new builds to charming cottages.',
};

const PropertiesPage = () => {
    return (
        <>
            <Header />

            <div className="container">
                <header className="main-header">
                    <h1>Find Properties by Type</h1>
                    <p className="subtitle">Discover the perfect property type for your needs</p>
                </header>

                <div className="property-types-grid">
                    <Link href="/properties/new-build" className="property-type-card">
                        <Image
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
                            alt="New Build Properties"
                            className="type-image"
                            width={600}
                            height={400}
                        />
                        <div className="type-overlay">
                            <div className="type-info">
                                <div className="type-title">New Build</div>
                                <div className="type-description">Modern properties with latest designs and energy efficiency</div>
                            </div>
                        </div>
                        <div className="property-count">24 Properties</div>
                    </Link>

                    <Link href="/properties/farm-house" className="property-type-card">
                        <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                            alt="Farm House Properties"
                            className="type-image"
                            width={600}
                            height={400}
                        />
                        <div className="type-overlay">
                            <div className="type-info">
                                <div className="type-title">Farm House</div>
                                <div className="type-description">Spacious rural properties with land and countryside charm</div>
                            </div>
                        </div>
                        <div className="property-count">12 Properties</div>
                    </Link>

                    <Link href="/properties/sites" className="property-type-card">
                        <Image
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                            alt="Development Sites"
                            className="type-image"
                            width={600}
                            height={400}
                        />
                        <div className="type-overlay">
                            <div className="type-info">
                                <div className="type-title">Sites</div>
                                <div className="type-description">Development opportunities and building plots</div>
                            </div>
                        </div>
                        <div className="property-count">8 Properties</div>
                    </Link>

                    <Link href="/properties/cottage" className="property-type-card">
                        <Image
                            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                            alt="Cottage Properties"
                            className="type-image"
                            width={600}
                            height={400}
                        />
                        <div className="type-overlay">
                            <div className="type-info">
                                <div className="type-title">Cottage</div>
                                <div className="type-description">Charming traditional homes with character and history</div>
                            </div>
                        </div>
                        <div className="property-count">16 Properties</div>
                    </Link>

                    <Link href="/properties/penthouse" className="property-type-card">
                        <Image
                            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop"
                            alt="Penthouse Properties"
                            className="type-image"
                            width={600}
                            height={400}
                        />
                        <div className="type-overlay">
                            <div className="type-info">
                                <div className="type-title">Penthouse</div>
                                <div className="type-description">Luxury high-rise living with panoramic views</div>
                            </div>
                        </div>
                        <div className="property-count">9 Properties</div>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PropertiesPage;