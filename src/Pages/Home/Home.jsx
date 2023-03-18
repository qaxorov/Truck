import React from "react";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import AboutSec from "../../components/Main/About/AboutSec";
import Blogd from "../../components/Main/blog.jsx/blogd";
import Services from "../../components/Main/OurService/services";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSec />
        <Services />
        <Blogd/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}
