import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';

import type { RootTabParamList, MoreStackParamList } from './types';

/* -------------------- SCREENS -------------------- */
//Imported and configured TypeScript in App file

function SettingsScreen({ route }: any) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>User ID: {userId}</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

/* -------------------- STACK (MORE TAB) -------------------- */

const MoreStack = createNativeStackNavigator({
  initialRouteName: 'Settings',
  screens: {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
});

/* -------------------- TABS -------------------- */

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    More: MoreStack,
  },
});

/* -------------------- NAVIGATION -------------------- */

const Navigation = createStaticNavigation(RootTabs);

/* -------------------- APP -------------------- */

export default function App() {
  return <Navigation />;
}