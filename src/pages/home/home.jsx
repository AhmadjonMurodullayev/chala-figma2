import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import BannerSilder from "../../components/banner/banner";
import Productlayout from "../../components/prodoc-layout/product-layout";
import Card from "../../components/prodact-card/card";
export default function Home() {
  return (
    <div className="flex flex-col">
      <header>
        <Header />
      </header>
      <div>
        <BannerSilder />
        <Productlayout/>
        <Card/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
