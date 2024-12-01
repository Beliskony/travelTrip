import { Text, TouchableOpacity } from "react-native";

const BoutonLogin = () =>{
    return(
        <TouchableOpacity className=" h-16 w-full bg-orange-600 justify-center my-6 rounded-xl">
            <Text className="text-center text-white text-2xl font-bold">Login</Text>
        </TouchableOpacity>
    );
};

export default BoutonLogin;