import "./globals.css";
import { portfolioData } from "../data/portfolioData";

export const metadata = {
  title: `${portfolioData.personalInfo.name} | Portfolio`,
  description: `Personal portfolio of ${portfolioData.personalInfo.name}, ${portfolioData.personalInfo.subTitle}`,
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
