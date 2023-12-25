import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb | Vacation rentals, cabins, beach houses, & more",
  description: "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;