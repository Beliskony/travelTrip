import React from 'react';
import { View, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import InformationsLieux from './prixTest/InformationsLieux';
import { router } from 'expo-router';
import { HotelProd } from '@/data/HotelProd';

const Lieux = () =>{
    return(
      <FlatList data={HotelProd} keyExtractor={(item, index)=> index.toString()} horizontal
          renderItem={({item})=>(
      <View className='h-52 mr-3'>
        
        <TouchableOpacity className='h-36 w-64 object-cover flex items-center justify-center'
        onPress={()=> router.push('/screens/Details')}>
            <ImageBackground className='h-36 w-64 items-center border rounded-xl ' source={item.Image}>
              <View className='flex justify-center p-2'>
                <InformationsLieux Ville={item.Ville} type={item.type} tarifs={item.tarifs}/>
              </View>
            </ImageBackground>
        </TouchableOpacity>
        
      </View>
      )}
      />
    );
};

export default Lieux;