//Change Routing to React Navigation
//Change Icons to match the Intention for Circle

import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import { t } from  'react-native-tailwindcss';
import {SafeAreaView} from 'react-native';

// Components
import BottomNav from './app/components/BottomNav';

// Pages
import Home from './app/screens/Home';
import Search from './app/screens/Search';
import AddPhoto from './app/screens/AddPhoto';
import Likes from './app/screens/Likes';
import MyPhotos from './app/screens/MyPhotos';


// Main App
function App() {
  return (
    <SafeAreaView style={[t.bgGray200, t.flex, t.hFull , t.wFull]}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/search' component={Search} />
        <Route exact path='/addPhoto' component={AddPhoto} />
        <Route exact path='/likes' component={Likes} />
        <Route exact path='/myPhotos' component={MyPhotos} />
      </Switch>
      <BottomNav/>
    </SafeAreaView>
  );
}

export default  () => (
  <NativeRouter>
    <App/>
  </NativeRouter>
)
