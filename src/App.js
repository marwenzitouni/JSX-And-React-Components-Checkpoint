import React from "react";
import ProfilMarwen from "./Component/image/profilmz.jpg";
import NameMarwen from "./Component/Profil/FullName";
import AdressMarwen from "./Component/Profil/Address";
import "./App.css";
function App() {
  return (
    <div className="apps">
      <NameMarwen />
      <br />
      <img width="400" height="400" src={ProfilMarwen} alt="person" />
      <br />
      <AdressMarwen />
    </div>
  );
  
}
export default App