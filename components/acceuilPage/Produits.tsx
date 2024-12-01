import { router } from "expo-router";
import { View, Text, TouchableOpacity, } from "react-native";

const Produits = () => {
    return(
        <View>
            <View className="w-full justify-between items-center flex flex-row py-2">
             <Text className="text-4xl font-extrabold">Favoris</Text>
               <TouchableOpacity onPress={()=>router.navigate("/screens/VoirTous")}>
                <Text className="text-gray-500">tous</Text>
               </TouchableOpacity>
            </View>
        </View>
    );
};

export default Produits;