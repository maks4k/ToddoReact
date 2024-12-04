import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import "./index.css";//импорт стилей(обязяательно в индекс фАЙЛ)


// const Element=<h1>переменная со всеми компонентами</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

