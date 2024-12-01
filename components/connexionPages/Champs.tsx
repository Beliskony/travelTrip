import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, TextInput } from "react-native";

const Champs = () => {
    return(
    <View className="py-3">
        <View className="flex flex-row justify-between items-center px-3 my-3 border border-gray-500 rounded-xl">
            <View className="flex-col justify-center px-2">
                <Text className="text-gray-500 font-medium">Email</Text>
                <TextInput autoCapitalize="none" keyboardType="email-address" placeholder="Votre@mail.com" placeholderTextColor={"#000"} ></TextInput>
            </View>

            <View>
                <MaterialIcons name="check" size={28} color="gray" style={{marginVertical:10, paddingHorizontal:20}}/>
            </View>
        </View>

        <View className="flex flex-row justify-between items-center px-3 my-3 border border-gray-500 rounded-xl">
            <View className="flex-col justify-center px-2">
                <Text className="text-gray-500 font-medium">Mot de passe</Text>
                <TextInput  secureTextEntry={true} placeholder="******" placeholderTextColor={"#000"} ></TextInput>
            </View>

            <View>
                <MaterialIcons name="storm" size={28} color="gray" style={{marginVertical:10, paddingHorizontal:20}}/>
            </View>
        </View>
    </View>
    );
};

export default Champs;