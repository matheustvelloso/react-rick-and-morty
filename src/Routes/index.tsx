import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Character from 'pages/Character';
import Episodes from 'pages/Episodes';
import Home from 'pages/Home';
import Locations from 'pages/Locations';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
