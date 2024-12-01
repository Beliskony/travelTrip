import { View,Text, TouchableOpacity } from "react-native";

const Oublier = () =>{
    return(
        <View>
          <TouchableOpacity>
            <Text className="text-orange-500 font-semibold">Mot de passe oublie ?</Text>
          </TouchableOpacity>
        </View>
    );
};

export default Oublier;