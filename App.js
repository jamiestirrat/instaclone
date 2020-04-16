//Change Routing to React Navigation
//Change Icons to match the Intention for Circle

import React from 'react';
import { t } from  'react-native-tailwindcss';
import {SafeAreaView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faUser, faHeart, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

// Components - is BottomNav needed after we use StackNavigator?
import BottomNav from './app/components/BottomNav';
import AddPhotoButton from './app/components/AddPhotoButton';

// Pages
import Home from './app/screens/Home';
import Search from './app/screens/Search';
import AddPhoto from './app/screens/AddPhoto';
import Likes from './app/screens/Likes';
import MyPhotos from './app/screens/MyPhotos';

const TabNavigator = createBottomTabNavigator(
  {
  Home: { screen: Home,
          navigationOptions: {
            headerMode: false,
            tabBarIcon: () => <FontAwesomeIcon size={30} icon={faHome}/>
           }
        },
  Search: { screen: Search,
            navigationOptions: {
              headerMode: false,
              tabBarIcon: () => <FontAwesomeIcon size={30} icon={faSearch}/>
           }
        },
  AddPhoto: { screen: AddPhoto,
              navigationOptions: {
                headerTitle: "Upload Photo",
                tabBarIcon: <AddPhotoButton/>
           }
        },
  Likes: {screen: Likes,
          navigationOptions: {
            headerMode: false,
            tabBarIcon: () => <FontAwesomeIcon size={30} icon={faHeart}/>
           }
        },
  MyPhotos: {screen: MyPhotos,
             navigationOptions: {
               headerMode: false,
               tabBarIcon: () => <FontAwesomeIcon size={30} icon={faUser}/>
             }
           }
        },
  {
    initialRouteName: "Home", // headerMode: 'none'
    tabBarOptions: {
      showLabel: false
      }
    }
)

export default createAppContainer(TabNavigator);
