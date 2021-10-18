import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export const getIdFromUrl = (url) => {
	// eslint-disable-next-line
	const [_endpoint, id] = url.replace('https://api.themoviedb.org/3', '').slice(0, -1).split('/');
	return id;
}
