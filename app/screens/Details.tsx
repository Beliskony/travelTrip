import DescriptionDet from "@/components/pageDetails/DescriptionDet";
import DetHeader from "@/components/pageDetails/DetHeader";
import LocationResume from "@/components/pageDetails/LocationResume";
import PlanTarifs from "@/components/pageDetails/PlanTarifs";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "react-native";

export default function Details() {
    return(
       <SafeAreaView className="h-screen w-full bg-slate-50 px-3" style={{ paddingTop: StatusBar.currentHeight }}>
         <ScrollView>
         <View><DetHeader></DetHeader></View>
         <View><LocationResume></LocationResume></View>
         <View><PlanTarifs></PlanTarifs></View>
         <View><DescriptionDet></DescriptionDet></View>
         </ScrollView>
       </SafeAreaView>
    );
};