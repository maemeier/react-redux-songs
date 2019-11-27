import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select the song</div>;
  }
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={song.cover} />
        </div>
        <div className="content">
          <div className="meta">
            <span className="date">Artist: {song.artist}</span>
          </div>
          <div className="description">Title: {song.title}</div>

          <div className="description">Duration: {song.duration}</div>
        </div>

        <div className="extra content">
          <a>
            <i
              className="heart outline like icon"
              style={{ color: "#AD9661" }}
            ></i>
            {song.like}
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
