import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "react-native";
import { useState } from "react";
import OngletChoix from "@/components/voirTousLieux/OngletChoix";
import VoirBack from "@/components/voirTousLieux/VoirBack";


export default function VoirTous() {
    const [selectSection, setSelectSection] = useState(1) //gerer la selection active
    return(
        <SafeAreaView className="h-screen w-full bg-slate-50 px-3" style={{ paddingTop: StatusBar.currentHeight }}>
            <View><VoirBack></VoirBack></View>
            <View className="h-full w-full">
                <OngletChoix></OngletChoix>
            </View>

        </SafeAreaView>
    )
}