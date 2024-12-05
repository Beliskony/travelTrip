import { View, Text } from "react-native";

interface TitresEtBProps {
    MotCles: string;
  }

const TitresEtB: React.FC<TitresEtBProps> =({MotCles})=>{
    return(
        <View className="flex flex-row justify-between m-4 items-center">
          <Text className="text-xl font-semibold">{MotCles}</Text>
          <Text className="text-sm text-orange-600 font-medium">Clear</Text>
        </View>
    );
};

export default TitresEtB;