import { View, Text, Image } from "react-native";
import { HotelProd } from "@/data/HotelProd";
import { FlatList } from "react-native";

const ListeLieux = () => {
    return(
        <FlatList data={HotelProd} keyExtractor={(item, index)=> index.toString()}
          renderItem={({item})=>(
        <View className="flex flex-row  items-center my-3 w-96">
            <View className="rounded-2xl flex-row items-center w-80">
                <Image source={item.Image}
                className="h-32 w-32 rounded-2xl"/>
            

            <View className="flex-col mx-3">
                 <Text className="font-extrabold text-black text-xl w-36 text-wrap">{item.type}</Text>
                 <Text className="text-gray-500 text-xl">Cote d'ivoire</Text>
                 <View className="flex-row items-center">
                    <Text className="text-orange-600 text-xl font-extrabold">{item.distance} km</Text>
                    <Text className="font-medium text-black"> {item.Ville}</Text>
                 </View>
            </View>
            </View>

            <View className="flex-col items-center w-20 m-4">
                <Text className="text-orange-600 text-2xl font-bold">${item.tarifs}</Text>
                <Text className="text-black font-medium">par jours</Text>
            </View>

        </View>
          )}
          />
    );
};

export default ListeLieux;