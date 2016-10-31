import React from 'react';
import Header from './Header';
import Map from './Map';
import FiltersDrawer from '../filters/FiltersDrawer';
import ShareDrawer from '../share/ShareDrawer';

import '../assets/sass/app.scss';

const App = () => (
  <div>
    <Header />
    <FiltersDrawer />
    <ShareDrawer />
    <Map />
  </div>
);

export default App;
