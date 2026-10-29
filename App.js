
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = [
  'React Native',
  'JavaScript',
  'UI Design',
  'Git',
  'Flexbox',
];

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

            {/* STEP 4: Avatar and online badge */}
            <View style={styles.avatarContainer}>
              <Image
                source={require('./assets/avatar.png')}
                style={styles.avatar}
                resizeMode="cover"
              />

              <View style={styles.onlineBadge} />
            </View>

            {/* STEP 1: Profile information */}
            <View style={styles.profileInfo}>
              <Text style={styles.name}>
                Alex Rivera
              </Text>

              <Text style={styles.role}>
                Mobile Developer
              </Text>

              <Text style={styles.location}>
                Lisbon, Portugal
              </Text>
            </View>

          </View>

          {/* STEP 1: Biography */}
          <Text style={styles.bio}>{BIO}</Text>

          {/* STEP 3: Statistics */}
          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View
                key={stat.label}
                style={styles.statItem}
              >
                <Text style={styles.statValue}>
                  {stat.value}
                </Text>

                <Text style={styles.statLabel}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>

          {/* STEP 4: Skill tags */}
          <View style={styles.skills}>
            {SKILLS.map((skill) => (
              <View
                key={skill}
                style={styles.skillTag}
              >
                <Text style={styles.skillText}>
                  {skill}
                </Text>
              </View>
            ))}
          </View>

          {/* STEP 4: Action buttons layout */}
          <View style={styles.actions}>

            <View
              style={[
                styles.button,
                styles.followButton,
              ]}
            >
              <Text style={styles.followText}>
                Follow
              </Text>
            </View>

            <View
              style={[
                styles.button,
                styles.messageButton,
              ]}
            >
              <Text style={styles.messageText}>
                Message
              </Text>
            </View>

          </View>

        </View>
      </View>

      {/* TODO STEP 5: Polish styles */}

    </View>
  );
}

const styles = StyleSheet.create({

  // General screen
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },

  // Profile card
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  content: {
    padding: 20,
  },

  // Profile information
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

  // Banner
  banner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  // Avatar
  avatarContainer: {
    width: 96,
    height: 96,
    position: 'relative',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },

  // Online badge
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    backgroundColor: '#22C55E',
  },

  // Header row
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  // Statistics
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

  // Skills
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },

  skillTag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#EEF1F6',
  },

  skillText: {
    fontSize: 12,
  },

  // Action buttons
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2563EB',
  },

  followButton: {
    backgroundColor: '#2563EB',
  },

  messageButton: {
    backgroundColor: '#FFFFFF',
  },

  followText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  messageText: {
    color: '#2563EB',
    fontWeight: '600',
  },

});
