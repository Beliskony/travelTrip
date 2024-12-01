import BoutonLogin from "@/components/connexionPages/BoutonLogin";
import Champs from "@/components/connexionPages/Champs";
import Oublier from "@/components/connexionPages/Oublier";
import Propositions from "@/components/connexionPages/Propositions";
import TitreLog from "@/components/connexionPages/TitreLog";
import { View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "react-native";


export default function Comptes() {
    return(
        <SafeAreaView className="h-screen w-full bg-slate-100 px-3" style={{ paddingTop: StatusBar.currentHeight }}>
          
          <View className="h-screen w-full flex flex-col bg-slate-100 px-3 justify-center"> 
            <View><TitreLog></TitreLog></View> 
            <View><Champs></Champs></View>
            <View className="w-48 ml-64"><Oublier></Oublier></View>
            <View><BoutonLogin></BoutonLogin></View>
            <View><Propositions></Propositions></View>
          </View>
        </SafeAreaView>
    )
}