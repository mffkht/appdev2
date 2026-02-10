import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Course & Section: AppDev2 - BSIT</Text>
        <Text style={styles.text}>Name: Pia</Text>
        <Text style={styles.text}>Age: 20</Text>
        <Text style={styles.text}>Favorite Hobby: Coding</Text>
        <Text style={styles.text}>
          Short Bio: I enjoy learning mobile and web development and improving my technical skills.
        </Text>

        <Text style={styles.subTitle}>Pet Peeves in Class:</Text>
        <Text style={styles.text}>• Late classmates</Text>
        <Text style={styles.text}>• Not participating in group work</Text>
        <Text style={styles.text}>• Using phones during discussions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  infoBox: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
