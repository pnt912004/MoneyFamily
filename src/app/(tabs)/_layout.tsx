import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo-vector-icons/build/MaterialCommunityIcons';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.outline,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 1,
          borderTopColor: theme.colors.surfaceVariant,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: 'BeVietnamPro_600SemiBold',
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tổng quan',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Lịch sử',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Thêm',
          tabBarIcon: ({ color }) => (
            <View style={[styles.addButton, { backgroundColor: theme.colors.primary }]}>
              <MaterialCommunityIcons name="plus" size={28} color={theme.colors.onPrimary} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="fund"
        options={{
          title: 'Quỹ gia đình',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-group-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="limit"
        options={{
          title: 'Hạn mức',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-pie" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Elevate it slightly
    shadowColor: '#006e1c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
