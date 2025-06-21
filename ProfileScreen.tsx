import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProfileCard from '../componento/ProfileCard';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        name="Dhanush"
        email="dhanush@example.com"
        avatar="https://cdn-icons-png.flaticon.com/128/16683/16683419.png"
      />

      {/* Stats */}
      <View style={styles.statsRow}>
        <Stat label="Posts" value="34" />
        <Stat label="Followers" value="1.2K" />
        <Stat label="Following" value="180" />
      </View>

      {/* Bio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>
          Aspiring developer passionate about mobile UI/UX, React Native
          enthusiast, and anime lover.
        </Text>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.outline]}>
          <Text style={[styles.actionText, styles.outlineText]}>Message</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <SettingsItem label="Account" />
        <SettingsItem label="Notifications" />
        <SettingsItem label="Privacy" />
        <SettingsItem label="Log out" />
      </View>
    </ScrollView>
  );
}
const Stat = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const SettingsItem = ({ label }: { label: string }) => (
  <TouchableOpacity style={styles.settingsItem}>
    <Text style={styles.settingsText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EC',
    padding: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
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
    color: '#6B7280',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  bio: {
    fontSize: 14,
    color: '#374151',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: '#4ADE80',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#4ADE80',
  },
  outlineText: {
    color: '#4ADE80',
  },
  settingsItem: {
    paddingVertical: 12,
    borderBottomColor: '#E5E7EB',
    borderBottomWidth: 1,
  },
  settingsText: {
    fontSize: 15,
    color: '#111827',
  },
});
