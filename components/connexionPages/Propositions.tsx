import { View, TouchableOpacity, Image, Text } from "react-native";

const Propositions =()=>{
    return(
        <View className="justify-center items-center">
            <Text className="text-center text-xl font-medium">Ou connectez-vous avec</Text>

            <View className="flex-row w-full justify-around items-center mt-5">
                <TouchableOpacity className="h-24 w-36 bg-white rounded-3xl shadow-xl py-4 items-center justify-center">
                    <Image source={require("../../assets/images/google.png")}/>
                </TouchableOpacity>

                <TouchableOpacity className="h-24 w-36 bg-white rounded-3xl shadow-xl py-4 items-center justify-center">
                    <Image source={require("../../assets/images/facebook.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Propositions;