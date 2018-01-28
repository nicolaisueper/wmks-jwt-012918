import {Home} from "./Home";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default withRouter(connect(state => state)(Home));
