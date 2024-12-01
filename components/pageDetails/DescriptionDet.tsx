import { View, Text, TextInput } from "react-native";

const DescriptionDet = () =>{
    return(
        <View>
            <Text className="text-2xl font-bold text-black">Description</Text>
            <TextInput multiline numberOfLines={5} placeholder="Entrez la description ici" placeholderTextColor={"gray"}
               className=" h-52 w-full border rounded-2xl border-gray-500"
            />
        </View>
    );
};

export default DescriptionDet