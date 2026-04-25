import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export default function DetailsScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const { itemId, otherParam } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other: {otherParam}</Text>

      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  );
}