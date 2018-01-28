import React, {Fragment} from 'react';
import jwt from 'jsonwebtoken';
import './Home.scss';


export const Home = (props) => {
  return (
    <Fragment>
      <h1>JWT Authentication Demo</h1>
      <div className="section">
        <p>You are currently {!props.token && 'not'} authenticated.</p>
        {props.token && <pre>{JSON.stringify(jwt.decode(props.token))}</pre>}
      </div>
    </Fragment>
  );
};
