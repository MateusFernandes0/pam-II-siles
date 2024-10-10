import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para ícones

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Transações */}
      <Text style={styles.sectionTitle}>Transações</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="swap-horizontal" size={24} color="orange" />
          <Text>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="cash" size={24} color="orange" />
          <Text>Pagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="card" size={24} color="orange" />
          <Text>Cartões</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="send" size={24} color="orange" />
          <Text>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="document-text" size={24} color="orange" />
          <Text>Boleto</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.sectionTitle}>Investimentos</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="piggy-bank" size={24} color="green" />
          <Text>Meu Porquinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="stats-chart" size={24} color="green" />
          <Text>Renda Fixa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="logo-bitcoin" size={24} color="green" />
          <Text>Cripto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="archive" size={24} color="green" />
          <Text>Tesouro Direto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="home" size={24} color="green" />
          <Text>Ações Brasil</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Empréstimos</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="time" size={24} color="pink" />
          <Text>Antecipar FGTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="cash-outline" size={24} color="pink" />
          <Text>Consignado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="car" size={24} color="pink" />
          <Text>Financiar Veículos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="business" size={24} color="pink" />
          <Text>Consórcio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="home-outline" size={24} color="pink" />
          <Text>Home Equity</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Compras</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="basket" size={24} color="skyblue" />
          <Text>Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="gift" size={24} color="skyblue" />
          <Text>Gift Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="phone-portrait" size={24} color="skyblue" />
          <Text>Recargas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="airplane" size={24} color="skyblue" />
          <Text>Viagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="restaurant" size={24} color="skyblue" />
          <Text>Duo Gourmet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    height: 80,
    marginVertical: 10,
    borderRadius: 20,
    padding: 0,
  },
});
