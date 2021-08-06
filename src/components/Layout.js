import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

export default function Layout({ children, seo }) {
  return (
    <div className="container p-6">
      {/* <AppHeader seo={seo} /> */}
      {children}
      <Footer />
    </div>
  );
}
