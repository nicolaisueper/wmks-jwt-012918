import ax from 'axios';

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? '' : 'http://localhost:8080';

export const login = (username, password, success, failure) => dispatch => {
  ax.post(baseUrl + '/api/auth/login', {username, password})
    .then(res => res.data)
    .then(data => data.token)
    .then(token => dispatch({type: 'LOGIN', payload: token}))
    .then(() => success())
    .catch(err => failure(JSON.parse(JSON.stringify(err))));
};
