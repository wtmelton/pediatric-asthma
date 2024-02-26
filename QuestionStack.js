import { createStackNavigator } from '@react-navigation/stack';
import AnswerScreen from './AnswerScreen';
import QuestionScreen from './QuestionScreen';
import { questions } from './Questions';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

const QuestionStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme.colors.primaryColor },
      }}
    >
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{ headerShown: false }}
        initialParams={{ questions }}
      />
      <Stack.Screen name="Answer" component={AnswerScreen} />
    </Stack.Navigator>
  );
};

export default QuestionStack;
