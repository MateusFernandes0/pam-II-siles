import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const PlaceholderImage = require('../assets/images/banco-inter-logo-0-1-2048x2048.png');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={PlaceholderImage} 
          style={styles.logo}
        />
        <View style={styles.conta}>
            <Text style={styles.contatext}>R$ 2,29
            </Text>
            <Text style={styles.contadigital}>Conta Digital</Text>
        

        <View style={styles.opcoes}>
                <Text style={styles.pix}><MaterialIcons name="pix"/>Pix
                </Text> 
                <Text style={styles.barcode}><MaterialCommunityIcons name="barcode-scan" size={14}/>Pagar
                </Text> 
                <Text style={styles.cartoes}>
                <MaterialIcons name="credit-card"/>Cartões
                </Text>  
        </View>
        <View style={styles.buttons}>
        <MaterialCommunityIcons style={styles.shopping} name="shopping-outline" size={24} />
        <MaterialIcons style={styles.shopping} name="trending-up" size={24} color="black" />
        <MaterialIcons style={styles.shopping} name="attach-money" size={24} color="black" />
        <Link style={styles.shopping} href={'/index3'}>
        <Pressable>
        <MaterialIcons style={styles.shopping} name="more-horiz" size={24} color="black" />
        </Pressable>
        </Link>
        </View>
        <View style={styles.desc}>
          <Text style={styles.descricao}>Shopping</Text>
          <Text style={styles.descricao}>Invest</Text>
          <Text style={styles.descricao}>Recarga</Text>
        <Text style={styles.descricao}>Mostrar mais</Text>
         
        </View> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 20,
  },
  header: {
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 40,
    marginBottom: 20,
  },
  conta:{
    width:'100%',
    height:150,
    backgroundColor:'#ffff',
    borderRadius:25,
    top:70,
  },
  contatext:{
    fontSize:20,
    fontWeight: 'bold',
    top:50,
    left:10,
    fontStyle:'italic',
  },
  contadigital:{
    fontSize:10,
    color:'#9B9B9B',
    left:10,
  },

  opcoes:{
    marginRight:'50%',
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    paddingRight:'30%'
    
  },
  pix:{
    backgroundColor:'#EEEEEE',
    borderRadius:55,
    width:'30%',
    height:'100%',
    top:75,
    left:10,
    textAlign:'center',
    fontSize:18,
    fontStyle:'italic',
  },
  barcode:{
    backgroundColor:'#EEEEEE',
    borderRadius:55,
    width:'30%',
    height:'100%',
    top:75,
    left:20,
    fontSize:18,
    fontStyle:'italic',
    textAlign:'center',
  },
  cartoes:{
    backgroundColor:'#EEEEEE',
    borderRadius:55,
    width:'30%',
    height:'100%',
    top:75,
    left:20,
    fontSize:18,
    fontStyle:'italic',
    textAlign:'center',
  },
  buttons:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    top:100,
  },
  shopping:{
    backgroundColor:'#fff',
    borderRadius:15,
    width:'15%',
    height:'200%',
    textAlign:'center',
    textAlignVertical:'center',
    
  },
  desc:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
    top:130,
  },
  descricao:{
    fontSize:15,
    fontStyle:'italic',
    textAlign:'center',
    textAlignVertical:'center',
  }
});
