import React from "react";
import Footer from "./Services/Footer";
import Routes from "./Services/Rotas/routes"
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
