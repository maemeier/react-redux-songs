import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select the song</div>;
  }
  return (
    <div className="ui card">
      <div className="image">
        <img src="http://2.bp.blogspot.com/-9fOoJjRGbqs/VQGMWeiF2dI/AAAAAAAARMo/mhuh6BYzCJQ/s1600/DumboFlying1.jpeg" />
      </div>
      <div className="content">
        <a className="header">Details for:</a>
        <div className="meta">
          <span className="date">Singer:</span>
        </div>
        <div className="description">Title:{song.title}</div>

        <div className="description">Duration:{song.duration}</div>
      </div>

      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Likes
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
