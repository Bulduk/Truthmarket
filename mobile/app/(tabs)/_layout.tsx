import { Tabs } from 'expo-router';
import { Home, BarChart2, PlusCircle, Wallet, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#0b0e11',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(255,255,255,0.1)',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#0b0e11',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.1)',
        },
        tabBarActiveTintColor: '#fcd535',
        tabBarInactiveTintColor: '#888',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          title: 'Markets',
          tabBarIcon: ({ color }) => <BarChart2 color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <Wallet color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
