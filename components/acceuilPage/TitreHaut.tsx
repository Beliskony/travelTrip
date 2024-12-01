import { View, Text } from "react-native";

const TitreHaut = () =>{
    return(
       <View className=" flex-1 flex-col px-4">
         <View>
            <Text className="font-extrabold text-5xl text-wrap text-black my-3">
               Let's pack for your trip
            </Text>
         </View>

         <View>
            <Text className="text-gray-600 text-xl text-wrap">
              Use one of our suggestions or make a list of
              what a pack
            </Text>
         </View>
       </View>
    );
};

export default TitreHaut;