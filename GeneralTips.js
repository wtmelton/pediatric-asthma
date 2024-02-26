import tips from './Tips';
import { View } from 'react-native';
import ListWithDividers from './ListWithDividers';
import { useTheme } from 'react-native-paper';

const GeneralTips = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 45,
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <ListWithDividers items={tips} />
    </View>
  );
};

export default GeneralTips;
