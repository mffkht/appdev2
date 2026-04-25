import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: number;
  };
};

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 42,
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const { itemId } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>

      <Button
        onPress={() => navigation.push('Details', { itemId: 42 })}
      >
        Go to Details... again
      </Button>

      <Button
        onPress={() =>
          navigation.setParams({
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        Update itemId
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go back
      </Button>

      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>

      <Button onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Details: {
      screen: DetailsScreen,
      initialParams: {
        itemId: 42,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}