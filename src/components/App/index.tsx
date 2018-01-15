import * as React from 'react';
import AppHeader from '../AppHeader';
import VisibleRestaurantList from '../containers/VisibleRestaurantList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <VisibleRestaurantList />
    </div>
  )
}


export default App;
