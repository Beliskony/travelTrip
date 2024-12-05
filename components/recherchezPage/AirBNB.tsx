import { View, Text, ImageBackground } from "react-native";
import MapView from "react-native-maps"

const AirBNB =()=>{
    return(
        <View className="bg-blue-700 h-full w-full justify-center">
            <Text className="text-6xl font-extrabold text-center">bonjour</Text>
           <MapView className="h-full w-full"/>
        </View>
    );
};

export default AirBNB;