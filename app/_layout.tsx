import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import tw, { useDeviceContext } from 'twrnc';
export default function IndexLayout() {
  useDeviceContext(tw);
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the dynamic route.
        name="index"
        options={{
          headerShown: false,
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map" size={size} color={color} />
          ),
          // Ensure the tab always links to the same href.
          href: '/',
        }}
      />
    </Tabs>
  );
}
