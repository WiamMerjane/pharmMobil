import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import ContactPage from './ContactPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <View style={styles.contentContainer}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Pharmacies') {
                  iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                } else if (route.name === 'Contacts') {
                  iconName = 'ios-list';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Pharmacies">
              {() => (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                  <Body />
                </ScrollView>
              )}
            </Tab.Screen>
            <Tab.Screen name="Contacts">
              {() => (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                  <ContactPage />
                </ScrollView>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    flex: 7,
    
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
});
