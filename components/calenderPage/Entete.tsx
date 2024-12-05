import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

const Entete =()=> {
  return (
    <View className="flex flex-row">
      <TouchableOpacity
        className="h-16 w-16 bg-gray-400 rounded-full justify-center items-center"
        onPress={() => router.back()}
      >
        <MaterialIcons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <View className="justify-center items-center mx-28">
        <Text className="text-2xl font-semibold text-center">Validations</Text>
      </View>

    </View>
  );
};

export default Entete;
