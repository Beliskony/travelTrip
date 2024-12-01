import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ea580c',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Acceuil"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
          
        }}
      />

<Tabs.Screen
        name="Likers"
        options={{
          title: 'Likers',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="favorite-outline" color={color} />,
        }}
      />

<Tabs.Screen
        name="Recherchez"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="search" color={color} />,
        }}
      />

<Tabs.Screen
        name="Calendrier"
        options={{
          title: 'Calendrier',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="calendar-today" color={color} />,
        }}
      />



<Tabs.Screen
        name="Comptes"
        options={{
          title: 'Compte',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person-outline" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
