import { View } from 'react-native';
import LottieView from 'lottie-react-native'
import { useEffect } from 'react';

interface AnimationEntrerProps {
  onFinish: () => void; // Propriété obligatoire
}


const AnimationEntrer: React.FC<AnimationEntrerProps> = ({ onFinish }) => {
  useEffect(() => {
    // Simulez une durée pour terminer l'animation, ou connectez à un événement réel
    const timeout = setTimeout(onFinish, 5000);

    return () => clearTimeout(timeout);
  }, [onFinish]);



    return ( 
     <View className='flex h-full w-full justify-center items-center bg-black'>
  
         <LottieView
        autoPlay
        
        onAnimationFailure={onFinish}
        style={{
          width: "70%",
          height: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../assets/images/AnimationEntrer.json')}
      />
            
        </View>
    );
}

export default AnimationEntrer;

