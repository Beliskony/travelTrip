import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, ScrollView } from "react-native";

const PlanTarifs =()=>{
    return(
        <View className="flex flex-col">
            <Text className="text-2xl text-black font-medium">Trip plan</Text>
            <ScrollView horizontal className="py-3 w-screen">
              <View className="mx-4 flex-row">
                <View className="h-28 w-44 border border-gray-400 rounded-2xl flex-col justify-center items-center">
                    <Text className="text-gray-400 text-[18px] font-semibold">Jours 1 . 06h00</Text>
                    <Text className="text-black text-2xl">Departement</Text>
                </View>
                <View className="justify-center items-center mx-2">
                    <MaterialIcons name="play-arrow" size={28} color="gray"/>
                </View>
              </View>

              <View className="mx-4 flex-row">
                <View className="h-28 w-44 border border-gray-400 rounded-2xl flex-col justify-center items-center">
                    <Text className="text-gray-400 text-[18px] font-semibold">Jours 1 . 06h00</Text>
                    <Text className="text-black text-2xl">Departement</Text>
                </View>
                <View className="justify-center items-center mx-2">
                    <MaterialIcons name="play-arrow" size={28} color="gray"/>
                </View>
              </View>

              <View className="mx-4 flex-row">
                <View className="h-28 w-44 border border-gray-400 rounded-2xl flex-col justify-center items-center">
                    <Text className="text-gray-400 text-[18px] font-semibold">Jours 1 . 06h00</Text>
                    <Text className="text-black text-2xl">Departement</Text>
                </View>
                <View className="justify-center items-center mx-2">
                    <MaterialIcons name="play-arrow" size={28} color="gray"/>
                </View>
              </View>

              <View className="mx-4 flex-row">
                <View className="h-28 w-44 border border-gray-400 rounded-2xl flex-col justify-center items-center">
                    <Text className="text-gray-400 text-[18px] font-semibold">Jours 1 . 06h00</Text>
                    <Text className="text-black text-2xl">Departement</Text>
                </View>
                <View className="justify-center items-center mx-2">
                    <MaterialIcons name="play-arrow" size={28} color="gray"/>
                </View>
              </View>

            </ScrollView>
        </View>
    );
};

export default PlanTarifs;