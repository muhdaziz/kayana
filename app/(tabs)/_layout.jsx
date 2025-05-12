import { Tabs } from 'expo-router';
import React from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home' 
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='stock'
      options={{
        tabBarLabel:'Stock',
        tabBarIcon:({color})=><Feather name="package" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='transactions'
      options={{
        tabBarLabel:'home',
        tabBarIcon:({color})=><Entypo name="wallet" size={24} color={color} />
      }}
      />
      <Tabs.Screen name='insight'
      options={{
        tabBarLabel:'home',
        tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />
      }}
      />
    </Tabs>
  )
}