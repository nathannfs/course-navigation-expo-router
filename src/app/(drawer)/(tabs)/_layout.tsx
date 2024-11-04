import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#cecece',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          tabBarLabel: 'Pedido',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-bag" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  )
}
