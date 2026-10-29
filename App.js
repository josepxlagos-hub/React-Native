
// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>

      {/* STEP 1: Profile card */}
      <View style={styles.card}>
        <Text style={styles.name}>Alex Rivera</Text>
        <Text style={styles.role}>Mobile Developer</Text>
        <Text style={styles.location}>Lisbon, Portugal</Text>
        <Text style={styles.bio}>{BIO}</Text>
      </View>

      {/* TODO STEP 2: add the banner and the avatar with Image */}
      {/* TODO STEP 3: header row and stats row with Flexbox */}
      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 18,
  },
  location: {
    color: 'gray',
  },
  bio: {
    marginTop: 16,
  },
});
