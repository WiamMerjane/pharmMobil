import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import logo from './logo1.png';

function Header() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={logo} style={{ width: 100, height: 100 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
              PharmaLOCATIONS
            </Text>
            <Text style={{ color: 'black' }}>Votre santé, Notre priorité.</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

export default Header;
