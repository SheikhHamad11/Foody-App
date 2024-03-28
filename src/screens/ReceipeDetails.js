import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Animate,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
export default function ReceipeDetails(props) {
  const navigation = useNavigation();
  const item = props.route.params;
  console.log('item', item);
  const [isFav, setIsFav] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
      className="bg-white flex-1">
      <View className="flex flex-row justify-center">
        <Animated.Image
          source={{uri: item.strMealThumb}}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 53,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          sharedTransitionTag={item.strMealThumb}
        />
      </View>

      <View className="w-full flex flex-row justify-between absolute item-center pt-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-3 rounded-full bg-white ml-3">
          <Icon name="arrow-left" style={{fontSize: 20}} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFav(!isFav)}
          className="p-3 rounded-full bg-white mr-3">
          <Icon
            name="heart"
            color={isFav ? 'red' : 'grey'}
            style={{fontSize: 20}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
