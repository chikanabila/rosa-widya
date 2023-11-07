import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>GPT-3.0</title>
        <meta name="description" content="GPT-3.0" />
        <meta name="keywords" content="GPT-3.0" />
        <meta name="author" content="GPT-3.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="App">
        <div className="bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
