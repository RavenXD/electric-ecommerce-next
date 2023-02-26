import "./globals.css";
import Header from "./(Components)/Header";
import Footer from "./(Components)/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="max-w-7xl m-auto ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
