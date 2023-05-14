import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000000',
                    borderTopColor: 'rgba(255, 255, 255, 0.3)',
                    height: 64,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Pesquisa" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" size={size} color={color} />
                    ),
                }}
                
            />
        </Tab.Navigator>
    );
    }
    