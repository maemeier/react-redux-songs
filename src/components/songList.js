import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    return <div>song lists </div>;
  }
}
// state : all data from redux
const mapStateToProps = state => {
  console.log(state);

  return state;
};
export default connect(mapStateToProps)(SongList);
