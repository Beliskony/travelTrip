import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, TextInput } from "react-native";

const SearchBarToo = () =>{
    return(
        <View className="h-16 w-full flex-row justify-center my-7">
            <View className="bg-white h-full w-5/6 rounded-xl justify-between mx-1 shadow-md flex-row items-center">
             
                 <MaterialIcons name="search" size={28} color="gray" style={{marginVertical:10, paddingHorizontal:20}}/>
                
                <TextInput placeholder="Recherche Espace" className="text-gray-500 text-center pr-24"></TextInput>
            </View>

            <View className="bg-orange-600 h-full w-[50px] rounded-xl shadoz-md">
              <MaterialIcons name="settings" size={30} color="white" style={{margin:10}} />
            </View>
        </View>
    );
};

export default SearchBarToo;