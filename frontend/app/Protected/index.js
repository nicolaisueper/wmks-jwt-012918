import {Protected} from "./Protected";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default withRouter(connect(state => state)(Protected));
