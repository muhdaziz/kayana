import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='home'/>
      <Tabs.Screen name='stock'/>
      <Tabs.Screen name='transactions'/>
      <Tabs.Screen name='insight'/>
    </Tabs>
  )
}