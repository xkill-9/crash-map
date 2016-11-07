import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import Header from './Header';
import Map from './Map';
import FiltersDrawer from '../filters/FiltersDrawer';
import FiltersActivePanel from '../filters/FiltersActivePanel';
import ShareDrawer from '../share/ShareDrawer';

import '../assets/sass/app.scss';

const App = () => (
  <div>
    <Header />
    <LinearProgress mode="indeterminate" />
    <FiltersActivePanel />
    <FiltersDrawer />
    <ShareDrawer />
    <Map />
  </div>
);

export default App;
