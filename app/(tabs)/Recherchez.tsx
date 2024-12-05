
import AirBNB from "@/components/recherchezPage/AirBNB";
import { StatusBar } from "react-native";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";


export default function Rcherchez() {
    return(
        <SafeAreaView className="flex-1">
            <MapView className="h-full w-full"/>
            
        </SafeAreaView>
    )
}