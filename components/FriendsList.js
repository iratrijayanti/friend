import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const friends = [
  { id: '1', name: 'Ira Jayanti', description: 'Ira adalah seorang developer.' },
  { id: '2', name: 'Rivaldi', description: 'Rivaldi adalah seorang mahasiswa Perikanan dan Kelautan.' },
  { id: '3', name: 'Annasya', description: 'Annasya adalah seorang siswa kelas 1 SD.' },
  { id: '4', name: 'Arsyad', description: 'Arsyad adalah seorang siswa kelas 4 SD.' },
  { id: '5', name: 'Arazzka', description: 'Arazzka adalah bayi umur 4.' },
];

const FriendsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 18,
  },
});

export default FriendsList;