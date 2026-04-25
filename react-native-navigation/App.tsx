import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

type RootStackParamList = {
  Home: {
    post?: string;
  };
  CreatePost: undefined;
};

function HomeScreen({ route }: any) {
  const navigation = useNavigation<any>();

  // Monitor updates to params
  React.useEffect(() => {
    if (route.params?.post) {
      alert('New post: ' + route.params.post);
    }
  }, [route.params?.post]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create Post
      </Button>

      <Text style={{ margin: 10 }}>
        Post: {route.params?.post}
      </Text>
    </View>
  );
}

function CreatePostScreen() {
  const navigation = useNavigation<any>();
  const [postText, setPostText] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      }}
    >
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{
          height: 200,
          padding: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          marginBottom: 20,
        }}
        value={postText}
        onChangeText={setPostText}
      />

      <Button
        onPress={() => {
          navigation.navigate('Home', {
            post: postText,
          });
        }}
      >
        Done
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      initialParams: {
        post: '',
      },
    },
    CreatePost: CreatePostScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}