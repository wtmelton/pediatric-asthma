import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

const ListWithDividers = ({ items }) => {
  const theme = useTheme();

  return (
    <ScrollView>
      {items.map((item, index) => (
        <View key={index}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              color: theme.colors.text,
            }}
          >
            {item}
          </Text>
          {index < items.length - 1 && (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                marginBottom: 10,
              }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ListWithDividers;
