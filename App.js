
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

// STEP 5: Centralized color palette
const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
  primary: '#2563EB',
  primaryLight: '#DBEAFE',
  border: '#E5E7EB',
  online: '#22C55E',
};

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
          <Text
            style={styles.bio}
            numberOfLines={3}
          >
            {BIO}
          </Text>

          {/* STEP 3 and 5: Statistics */}
          <View style={styles.statsRow}>
            {STATS.map((stat, index) => (
              <View
                key={stat.label}
                style={[
                  styles.stat,
                  index > 0 && styles.statDivider,
                ]}
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
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.skillText}>
                  {skill}
                </Text>
              </View>
            ))}
          </View>

          {/* STEP 4: Action buttons */}
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
    </View>
  );
}

const styles = StyleSheet.create({

  // STEP 5: Center the card
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },

  // STEP 5: Rounded card and shadow
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.text,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  content: {
    padding: 20,
  },

  // STEP 2: Banner
  banner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  // STEP 3: Header
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  // STEP 2 and 4: Avatar
  avatarContainer: {
    width: 96,
    height: 96,
    marginTop: -48,
    position: 'relative',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
  },

  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: COLORS.card,
    backgroundColor: COLORS.online,
  },

  // STEP 5: Typography
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  role: {
    fontSize: 16,
    color: COLORS.primary,
    marginTop: 4,
  },

  location: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 4,
  },

  bio: {
    marginTop: 20,
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.text,
  },

  // STEP 3 and 5: Stats with borders
  statsRow: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statDivider: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.border,
  },

  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },

  statLabel: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 4,
  },

  // STEP 4 and 5: Skills
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },

  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: COLORS.primaryLight,
  },

  skillText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '500',
  },

  // STEP 4 and 5: Buttons
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  followButton: {
    backgroundColor: COLORS.primary,
  },

  messageButton: {
    backgroundColor: COLORS.card,
  },

  followText: {
    color: COLORS.card,
    fontWeight: '600',
  },

  messageText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

});
