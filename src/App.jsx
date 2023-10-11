import { useState } from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import Counter from "./Components/Counter";
import From from "./Components/From";
import List from "./Components/List";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";


function App() {
  const [menu, setMenu] = useState("counter");

  return (
    <div className="bg-blue-50 max-w-screen-xl mx-auto  ">
      <TopBar></TopBar>
      <div className="flex p-16">
        <div className="w-3/12 border-r-2">
          <Sidebar setMenu={setMenu}></Sidebar>
        </div>
        <div className="w-9/12 px-5">
          {menu === "counter" && <Counter></Counter>}

          {menu === "from" && <From></From>}

          {menu === "list" && <List></List>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
