import {NavBar} from "./NavBar";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as navActions from "./actions";

export default withRouter(connect(state => state, navActions)(NavBar));
