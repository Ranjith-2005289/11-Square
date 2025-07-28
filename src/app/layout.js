import './globals.css';

export const metadata = {
  title: '11score - Find Your Property',
  description: 'Your next home, investment, or international property.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}