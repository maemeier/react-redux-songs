import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button"
              style={{ color: "white", background: "#AD9661" }}
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()} </div>;
  }
}

// state : all data from redux
const mapStateToProps = state => {
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
