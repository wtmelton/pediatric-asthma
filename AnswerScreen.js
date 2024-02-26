import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const AnswerScreen = ({ route }) => {
  const { selectedOption, currentQuestion } = route.params;
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <Text
        style={{ fontSize: 18, textAlign: 'center', color: theme.colors.text }}
      >
        {selectedOption === 'yes'
          ? currentQuestion.yesContent
          : currentQuestion.noContent}
      </Text>
    </View>
  );
};

export default AnswerScreen;
