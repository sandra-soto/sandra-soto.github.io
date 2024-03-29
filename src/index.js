import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

WebFont.load({
   google: {
     families: ['Quicksand:300,400,500,600,700', 'Roboto:300,400,500,600,700']
   }
});
ReactDOM.render(
  <App>
  		<title>HTML Elements Reference</title>
       <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
  </App>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
