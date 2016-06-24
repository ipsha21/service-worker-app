import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HomePage from "../components/HomePage";


function mapStateToProps(state) {
  return {
    messages: state.blog.messages
  };
}

export default connect(
  mapStateToProps
)(HomePage);
