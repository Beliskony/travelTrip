import { View, SafeAreaView, Image } from 'react-native';
import '../global.css';
import SectionTitre from '@/components/homePage/SectionTitre';
import GetStarted from '@/components/homePage/GetStarted';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 flex-col h-screen'>
        <View className='bg-white h-3/5 justify-center items-center'>
        <Image source={require("../assets/images/img1.jpg")} className='h-96 w-96' />
        </View>
        <View className='h-1/5'><SectionTitre></SectionTitre></View>
        <View className='bg-white h-1/5 justify-center items-center'><GetStarted></GetStarted></View>
    </SafeAreaView>
  );
}
