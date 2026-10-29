
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
      <View style={styles.card}>

        {/* STEP 2: Banner */}
        <Image
          source={require('./assets/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.content}>

          {/* STEP 3: Header row */}
          <View style={styles.headerRow}>

            <Image
              source={require('./assets/avatar.png')}
              style={styles.avatar}
              resizeMode="cover"
            />

            <View style={styles.profileInfo}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.role}>Mobile Developer</Text>
              <Text style={styles.location}>Lisbon, Portugal</Text>
            </View>

          </View>

          {/* STEP 1: Biography */}
          <Text style={styles.bio}>{BIO}</Text>

          {/* STEP 3: Stats row */}
          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

        </View>
      </View>

      {/* TODO STEP 4: online badge, skill tags and action buttons */}
      {/* TODO STEP 5: polish the styles */}

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
  borderRadius: 12,
},
content: {
  padding: 20,
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

  banner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  avatar: {
  width: 96,
  height: 96,
  borderRadius: 48,
  borderWidth: 4,
  borderColor: '#FFFFFF',








  
 
},

headerRow: {
  flexDirection: 'row',
  alignItems: 'center',
},

profileInfo: {
  flex: 1,
  marginLeft: 12,
},

statsRow: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
},

statItem: {
  alignItems: 'center',
},

statValue: {
  fontSize: 20,
  fontWeight: 'bold',
},

statLabel: {
  fontSize: 14,
  color: 'gray',
},

});
