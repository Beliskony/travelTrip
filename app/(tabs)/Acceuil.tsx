import { SafeAreaView, ScrollView, View } from "react-native";
import TitreHaut from "../../components/acceuilPage/TitreHaut";
import SearchBarToo from "@/components/acceuilPage/SearchBarToo";
import Categories from "@/components/acceuilPage/Categories";
import Produits from "@/components/acceuilPage/Produits";
import Lieux from "@/components/acceuilPage/Lieux";
import TitreSecond from "@/components/acceuilPage/prixTest/TitreSecond";
import ListeLieux from "@/components/acceuilPage/listeInfos/ListeLieux";
import { StatusBar } from "react-native";

export default function Acceuil() {
    return(
      <SafeAreaView className="h-screen w-full bg-slate-50 px-3" style={{ paddingTop: StatusBar.currentHeight }}>
        <ScrollView className="h-screen w-full flex flex-col bg-slate-50  px-3">

          <View>
            <View><TitreHaut></TitreHaut></View>
            <View><SearchBarToo></SearchBarToo></View>
          </View>

          <View>
            <View><Categories></Categories> </View>
            <View><Produits></Produits></View>
            <View>
              <Lieux></Lieux>
            </View>
          </View>

          <View>
             <View><TitreSecond></TitreSecond></View>
             <View>
              <View>
                <ListeLieux></ListeLieux>
              </View>
             </View>

          </View>
          
        </ScrollView>
        </SafeAreaView>
    );
};

