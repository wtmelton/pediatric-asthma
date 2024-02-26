import React from 'react';
import { Button, View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const ResultsPage = ({ navigation }) => {
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
        style={{ color: theme.colors.text, fontSize: 20, fontWeight: 'bold' }}
      >
        Your results indicate that your child could benefit from these tips.
      </Text>
      <Button
        title="Go to tips"
        onPress={() => navigation.navigate('Tips')}
        color={theme.colors.primaryColor}
      />
    </View>
  );
};

export default ResultsPage;
