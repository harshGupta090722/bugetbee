import {Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "budgetbee",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className}`}>


    {/*header*/}

    
    <main>
    {children}
    </main>



    {/*footer*/}
    <footer className="bg-blue-50 py-12">
    <div className="container mx-auto px-4 text-center text-gray-600">
    <p>Made with Love by Harsh </p>
    </div>
    </footer>
    </body>
    </html>
  );
}
