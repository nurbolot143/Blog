import React from "react";
import { Banner, Posts, SideBar } from "../../components";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="container home__inner">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
