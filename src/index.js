import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Products, {NavBar} from "./Products";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <div>
    <Greeting title = "Holaa mundo" />
    <Greeting title = "Holaa React" />
    <Greeting title = "Holaa JXS" />
    <Greeting title = "Holaa amigo" />
    


  </div>
);
