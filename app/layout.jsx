import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="max-w-7xl m-auto ">
        {children}
      </body>
    </html>
  );
}
