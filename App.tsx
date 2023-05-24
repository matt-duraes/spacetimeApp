import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-gray-50 font-bold text-5xl">Organize-se</Text>
      <StatusBar style="auto" translucent/>
    </View>
  );
}

