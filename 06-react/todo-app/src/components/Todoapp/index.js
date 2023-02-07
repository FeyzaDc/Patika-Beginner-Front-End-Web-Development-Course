import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Todoapp() {
  return (
    <div className="todoapp">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default Todoapp;
