import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Body />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
