import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import CounterScreen from './src/screens/CounterScreen';
import SquareScreen from './src/screens/SquareScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'SmokeHub',
    },
  }
);

export default createAppContainer(navigator);
