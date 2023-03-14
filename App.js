import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/imageScreen';
import CounterScreenReducer from './src/screens/CounterScreenReducer';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreenReducer from './src/screens/SqaureScreenReducer';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreenReducer,
    Colour: ColourScreen,
    Sqaure: SquareScreenReducer,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
