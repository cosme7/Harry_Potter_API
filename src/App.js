import React from "react";
import Footer from "./Pages/Footer/footer";
import Routes from "./Services/routes"
import { GlobalStyle } from "./Global/style";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Footer />
    </>
  );
}
