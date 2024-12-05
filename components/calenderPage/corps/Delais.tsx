import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Delais =()=>{
    return(
        <View className="flex flex-row space-x-4 justify-between mx-4 border-b border-gray-400 py-1">
            <View className="  flex-col">
                <Text className="text-gray-400">Du</Text>
                <Text className="text-black font-medium text-lg">25, Dec 2024</Text>
            </View>

            <View>
                <MaterialIcons name="calendar-today" size={28} color={"#EA580C"}/>
            </View>

            <View className="  flex-col">
                <Text className="text-gray-400">Au</Text>
                <Text className="text-black font-medium text-lg">01, Janvier 2025</Text>
            </View>
            
        </View>
    );
};

export default Delais;