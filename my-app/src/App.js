import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';

import './App.css';
import "./Assets/tailwind.css";
import {Routes}  from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const reactRoutes= useRoutes(Routes)

  return (
    <Fragment>
      {reactRoutes}
    </Fragment>
  )
}

export default App;
