import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';

    

const GetStarted = () => {
    return (
      <TouchableOpacity className='bg-orange-500 rounded-3xl px-6 py-3 shadow-md' onPress={
        ()=> router.replace("/(tabs)/Acceuil")
      }>
            <Text className='text-white text-center text-lg font-semibold'>
                Get Started
            </Text>
        </TouchableOpacity>
    );
};

export default GetStarted;
