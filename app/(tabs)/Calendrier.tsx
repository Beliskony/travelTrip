import Delais from "@/components/calenderPage/corps/Delais";
import PassagerNombre from "@/components/calenderPage/corps/PassagerNombre";
import TitresEtB from "@/components/calenderPage/corps/TitresEtB";
import Entete from "@/components/calenderPage/Entete";
import { View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

export default function Calendrier() {
    return(
        <SafeAreaView className=" flex-col h-screen w-full bg-slate-200 px-3" style={{ paddingTop: StatusBar.currentHeight }}>
          <View><Entete></Entete></View>
          <View className="flex flex-col mx-2 bg-white shadow-2xl h-4/5 my-2 rounded-xl">

            <View><TitresEtB MotCles="Dates" /></View>
          
            <View className="my-4"><Delais></Delais></View>
          
            <View className="my-2"><TitresEtB MotCles="Voyageurs"/></View>
          
            <View className="flex-col my-2 mx-4 h-16">

                <PassagerNombre genre="Adultes" trancheAge="Sup 12" nombres={2}/>
                <PassagerNombre genre="Enfants" trancheAge="entre 0-12" nombres={1}/>

            </View>

          </View>
        </SafeAreaView>
    )
}