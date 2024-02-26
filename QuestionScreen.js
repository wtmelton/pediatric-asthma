import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useTheme, ProgressBar } from 'react-native-paper';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useTips } from './TipContext';

const QuestionScreen = ({ navigation, route }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { questions } = route.params;
  const theme = useTheme();
  const { showTips, toggleTips } = useTips();

  const handleSwipe = (direction) => {
    const newIndex = direction === 'left' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handleButton = (selectedOption) => {
    const currentQuestion = questions[currentIndex];
    if (
      currentQuestion.expandedRecommendationsIndicator.toUpperCase() ===
        selectedOption.toUpperCase() &&
      !showTips
    ) {
      toggleTips();
    }
    const newIndex = currentIndex + 1;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentIndex(newIndex);
    }
    if (newIndex === questions.length) {
      navigation.navigate('Results');
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex + 1) / questions.length;

  return (
    <GestureRecognizer
      onSwipeLeft={() => handleSwipe('left')}
      onSwipeRight={() => handleSwipe('right')}
      config={config}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <View style={{ width: '90%', marginBottom: 40 }}>
        <ProgressBar progress={progress} color={theme.colors.primaryColor} />
      </View>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {currentQuestion.text}
      </Text>
      <View flexDirection="row" style={{ marginTop: 20 }}>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Button
            title="Yes"
            onPress={() => handleButton('yes')}
            color={theme.colors.primaryColor}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Button
            title="No"
            onPress={() => handleButton('no')}
            color={theme.colors.primaryColor}
          />
        </View>
      </View>
    </GestureRecognizer>
  );
};

export default QuestionScreen;
