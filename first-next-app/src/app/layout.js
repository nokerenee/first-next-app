import NavBar from "@/components/NavBar"; // see next slide
import "./globals.css";
import { Inter } from "next/font/google"; // supports google fonts

const inter = Inter({ subsets: ["latin"] });

// Exported metadata will appear in the <head> section
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// All layouts support nesting via children prop
export default function RootLayout({ children }) {
  // Root layout must render the <html> and <body> elements
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

// View the source of http://localhost:3000 and /about and match
// the HTML structure back to the layout files
// ++ Modify the metadata and try to change fonts
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts
