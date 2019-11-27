import React from "react";
import SongList from "./songList";
import SongDetail from "./songDetail";
import NavBar from "./navBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ marginLeft: "90px", marginTop: "70px", color: "#574D35" }}>
        LAZYMAE DISNEY SONGS{" "}
      </h1>
      <div style={{ marginTop: "70px" }}>
        <div class="ui two column very relaxed grid">
          <div className="ui container grid">
            <div className="ui row">
              <div className="column eight wide">
                <SongList />
              </div>

              <div className="column eight wide">
                <SongDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
