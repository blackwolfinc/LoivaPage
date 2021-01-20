import './App.css';
import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Page2 } from './pages/Page2';
import { Page1 } from './pages/Page1';
import { Page3 } from './pages/Page3';
import { LoginAdmin } from './pages/AdminPages/LoginAdmin';
import { DashboardPage } from './pages/AdminPages/DashboardPage';
import { NotFoundPage } from './pages/AdminPages/NotFoundPage';
import { MapsPage } from './pages/AdminPages/MapsPage';
import { TablesPage } from './pages/AdminPages/TablesPage';
import { ProfilePage } from './pages/AdminPages/ProfilePage';





function App() {
  return (
    //route aplikasi 
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/admin/profil">
      <ProfilePage/>
      </Route>
      <Route path="/admin/tabel">
      <TablesPage/>
      </Route>
      <Route path="/admin/maps">
      <MapsPage/>
      </Route>
      <Route path="/admin/404">
      <NotFoundPage/>
      </Route>
      <Route path="/admin/home">
      <DashboardPage/>
      </Route>
      <Route path="/admin">
      <LoginAdmin/>
      </Route>
      <Route path="/nav3">
      <Page3/>
      </Route>
      <Route path="/nav2">
      <Page2/>
      </Route>
      <Route path="/">
      <Page1/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
