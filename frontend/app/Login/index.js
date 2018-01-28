import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {Login} from "./Login";
import * as loginActions from './actions';

export default withRouter(connect(null, loginActions)(Login));
