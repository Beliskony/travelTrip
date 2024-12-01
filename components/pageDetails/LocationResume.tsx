import { View, Image, Text } from "react-native";

const LocationResume =()=>{
    return(
        <View className="my-3 py-3">

            <View className="h-72 w-full flex object-cover rounded-xl py-3 my-2">
                <Image source={{uri:"https://i.pinimg.com/736x/1b/71/54/1b71544fd625b08eabddf2640ecf2762.jpg"}}
                className="h-full w-full rounded-xl"/>
            </View>

            <View className="flex flex-row w-full px-3 justify-between my-3">
                <View className="flex-col">
                    <Text className="text-2xl font-semibold text-black">Bali Koumassi Assinie</Text>
                    <View className="flex-row justify-center items-center">
                     <Text className="text-gray-500 font-medium">Africa, Ivory</Text>
                     <Text className="text-orange-600 font-bold text-xl"> 27Km </Text>
                     <Text className="text-gray-500 font-medium">from java</Text>
                    </View>
                </View>

                <View className="flex-col justify-center items-center">
                    <Text className="text-orange-600 font-extrabold text-2xl">$49</Text>
                    <Text className="text-black text-xs font-semibold">par jours</Text>
                </View>

            </View>
        </View>
    );
};

export default LocationResume;