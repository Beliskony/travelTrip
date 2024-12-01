import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import ListeLieux from "../acceuilPage/listeInfos/ListeLieux";

const OngletChoix = () =>{
    const [selectionSection, setSelectSection] = useState(1)
    
    const choixSection=()=>{
        switch (selectionSection) {
            case 1:
                return(
                    <View className="h-full">
                        <ListeLieux></ListeLieux>
                    </View>
                )
            case 2:
                return(
                    <View className="h-full bg-slate-200">
                        <ListeLieux></ListeLieux>
                    </View>
                )
            default:
                return(
                    <View className="h-full">
                        <ListeLieux></ListeLieux>
                    </View>
                )
        }
    }
    return(
        <View className="w-full mr-3 my-4">
          <View className="flex-row h-20 bg-gray-400 w-full items-center justify-between px-6 rounded-2xl">
            <TouchableOpacity onPress={() => setSelectSection(1)} className={`h-16 w-44 rounded-2xl justify-center items-center ${
                        selectionSection === 1 ? "bg-white" : "bg-gray-300"
                    }`}>
                <Text className="text-2xl font-extrabold text-black">Places</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectSection(2)} className={`h-16 w-44 rounded-2xl justify-center items-center ${
                        selectionSection === 2 ? "bg-white" : "bg-gray-300"
                    }`}>
                <Text className="text-2xl font-extrabold text-black">Guide</Text>
            </TouchableOpacity>
         </View>
            <View className="flex ">
                {choixSection()}
            </View>
        </View>

    
    );
};

export default OngletChoix;