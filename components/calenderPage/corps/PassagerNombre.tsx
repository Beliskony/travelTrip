import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface PassagerNombreProps{
    genre:string
    trancheAge:string
    nombres:number
}

const PassagerBombre: React.FC<PassagerNombreProps> =({genre, trancheAge, nombres})=>{
    return(
        <View className="flex flex-row justify-between px-4 h-16 rounded-xl my-3 border border-gray-400">

            <View className="flex-col items-center">
                <Text className="text-black text-lg font-bold">{genre}</Text>
                <Text className="text-gray-500 text-sm font-bold">{trancheAge}</Text>
            </View>

            <View className="flex-row w-24 justify-between items-center">
              <TouchableOpacity>
                <MaterialIcons name="add" size={15} color={"#000"} className="border rounded-full h-5"/>
              </TouchableOpacity>
                
                 <Text>{nombres}</Text>
              
              <TouchableOpacity>
                <MaterialIcons name="horizontal-rule" size={15} color={"#000"} className="border rounded-full h-5"/>
              </TouchableOpacity>
            </View>

        </View>
    );
};

export default PassagerBombre;