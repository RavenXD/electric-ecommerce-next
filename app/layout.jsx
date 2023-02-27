import "./globals.css";
import Footer from "./(Components)/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="max-w-7xl m-auto ">
        {children}
        <Footer />
      </body>
    </html>
  );
}
