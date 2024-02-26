import React, { Component } from 'react';
import { Switch, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GeneralTips from './GeneralTips';
import QuestionStack from './QuestionStack';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { TipProvider } from './TipContext';
import ResultsPage from './ResultsPage';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// Define the MainTabs component outside the render method
const MainTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      activeColor={theme.colors.tertiaryColor}
      inactiveColor={theme.colors.secondaryColor}
      barStyle={{ backgroundColor: theme.colors.primaryColor }}
    >
      <Tab.Screen
        name="Home"
        component={QuestionStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chat-question"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={GeneralTips}
        options={{
          tabBarLabel: 'Tips',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="notebook-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWFTheme: true,
    };
    this.showTips = false;
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isWFTheme: !prevState.isWFTheme,
    }));
  };

  render() {
    const { isWFTheme } = this.state;

    const theme = isWFTheme
      ? {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primaryColor: '#9E7E38',
            secondaryColor: '#000000',
            tertiaryColor: '#FFFFFF',
            backgroundColor: '#FFFFF',
            text: '#000000',
            secondaryContainer: '#000000', // removes oval outline from active tab navigation
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primaryColor: '#00818a',
            secondaryColor: '#050505',
            tertiaryColor: '#f4f8f9',
            backgroundColor: '#FFFFF',
            text: '#000000',
            secondaryContainer: '#000000', // removes oval outline from active tab navigation
          },
        };

    return (
      <PaperProvider theme={theme}>
        <TipProvider>
          <NavigationContainer>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 30,
              }}
            >
              <Switch
                value={isWFTheme}
                onValueChange={this.toggleTheme}
                trackColor={{
                  false: theme.colors.secondaryColor,
                  true: theme.colors.secondaryColor,
                }}
                thumbColor={theme.colors.primaryColor}
              />
            </View>
            <Stack.Navigator>
              {/* Use MainTabs component instead of inline function */}
              <Stack.Screen
                name="MainTabs"
                options={{ headerShown: false }}
                component={MainTabs}
              />
              <Stack.Screen
                name="Results"
                component={ResultsPage}
                options={{ title: 'Results' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </TipProvider>
      </PaperProvider>
    );
  }
}

export default App;
