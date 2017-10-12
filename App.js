import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckDetail from './components/DeckDetail';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Constants } from 'expo'
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import { setLocalNotification } from './utils/helpers';
import { Entypo } from '@expo/vector-icons';


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: () => <Entypo name="list" size={30} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarIcon: () => <Entypo name="add-to-list" size={30} />
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'blue' : 'white',
    style: {
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  },
  headerMode: 'none',
  
});

const MainNav = StackNavigator({
    Home: {
      screen: Tabs
    },
    DeckDetail: {
      screen: DeckDetail
    },
    Quiz: {
      screen: Quiz
    },
    AddCard: {
      screen: AddCard
    }
},{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (      
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar 
            backgroundColor={'transparent'}
            translucent />
        </View>
        <MainNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
