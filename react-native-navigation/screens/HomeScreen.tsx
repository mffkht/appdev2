import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 42,
            otherParam: 'hello',
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}