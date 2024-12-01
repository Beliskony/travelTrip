import { View, Text } from "react-native";

interface InformationsLieuxProps {
    Ville: string;
    type: string;
    tarifs: string | number;
  }

const InformationsLieux: React.FC<InformationsLieuxProps> = ({Ville,type,tarifs}) =>{
    return(
  
     <View className="flex flex-row justify-between z-50 mt-24 h-20 w-56 bg-white shadow-md rounded-xl items-center p-3 ">
        
        <View className=" flex-col text-wrap">
           <Text className="text-xl text-black font-extrabold w-40">{Ville}</Text>
           <Text>{type}</Text>
        </View>
        
        <View className="justify-center items-center">
            <Text className="text-xl text-orange-500 font-extrabold">${tarifs}</Text>
        </View>
          
     </View>
    );
};

export default InformationsLieux;