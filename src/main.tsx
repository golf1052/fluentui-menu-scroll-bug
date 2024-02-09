import React from 'react'
import { render } from 'react-dom';
// import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
