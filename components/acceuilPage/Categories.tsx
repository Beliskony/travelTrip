import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

const Categories = () => {
  const [selected, setSelected] = useState('Popular');

  const categories = ['Popular', 'Newest', 'For You', 'Recommended'];

  return (
    <View className="flex-row justify-center space-x-2 mt-4">
      {categories.map((category) => (
        <Pressable
          key={category}
          onPress={() => setSelected(category)}
          className={`px-4 py-2 rounded-xl mx-2 ${
            selected === category
              ? 'bg-orange-500 text-white'
              : 'border border-gray-300 bg-white text-gray-700'
          }`}
        >
          <Text
            className={`text-sm font-medium ${
              selected === category ? 'text-white' : 'text-gray-700'
            }`}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Categories;
