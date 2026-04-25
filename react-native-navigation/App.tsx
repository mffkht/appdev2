import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';

function SettingsScreen({ route }: any) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// IMPORTANT: This is a STACK inside the tab
const MoreStack = createNativeStackNavigator({
  initialRouteName: 'Settings',
  screens: {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
});

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('More', {
            screen: 'Settings',
            params: { userId: 'jane' },
          })
        }
      >
        Go to Settings
      </Button>
    </View>
  );
}

// TAB NAVIGATOR
const RootTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    More: MoreStack,
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  return <Navigation />;
}