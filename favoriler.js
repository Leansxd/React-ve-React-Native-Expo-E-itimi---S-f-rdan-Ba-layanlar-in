import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import tarifler from '../data/tarifler';

export default function Favoriler({ navigation, favoriIdler = [], toggleFavori }) {
    const favoriTarifler = tarifler.filter((tarif) => favoriIdler.includes(tarif.id));

    const renderFavori = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.kart}
                onPress={() => navigation.navigate('TarifDetay', {
                    isim: item.isim,
                    sure: item.sure,
                    malzemeler: item.malzemeler,
                    yapilis: item.yapilis,
                    zorluk: item.zorluk,
                    id: item.id,
                    toggleFavori: toggleFavori,
                    favoriMi: true,
                })}
            >
                <View style={styles.kartHeader}>
                    <Text style={styles.kartBaslik} numberOfLines={2}>{item.isim}</Text>
                    <View style={styles.heartContainer}>
                        <Ionicons name="bookmark" size={16} color="#FF69B4" />
                    </View>
                </View>
                <View style={styles.kartFooter}>
                    <View style={styles.sureContainer}>
                        <Ionicons name="timer-outline" size={12} color="#E91E63" />
                        <Text style={styles.kartSure}>{item.sure} dk</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <LinearGradient colors={['#FCE4EC', '#F8BBD0', '#FFF0F5']} style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="bookmark" size={28} color="#FF69B4" />
                <Text style={styles.baslik}>Favorilerim</Text>
            </View>

            {favoriTarifler.length === 0 ? (
                <View style={styles.bosAlani}>
                    <Ionicons name="bookmark-outline" size={80} color="#F8BBD0" style={{ marginBottom: 20 }} />
                    <Text style={styles.bosMesaj}>Henüz favori yok.</Text>
                    <Text style={styles.bosAciklama}>Tariflerdeki ayraç ikonuna tıklayarak buraya tarif ekleyebilirsin.</Text>
                </View>
            ) : (
                <FlatList
                    data={favoriTarifler}
                    renderItem={renderFavori}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 60 },
    header: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    baslik: { fontSize: 24, fontWeight: 'bold', color: '#D81B60', marginLeft: 10 },
    listContainer: { padding: 15, paddingBottom: 150 },
    row: { justifyContent: 'space-between', marginBottom: 15 },
    kart: {
        width: '47%',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#F8BBD0',
        minHeight: 120,
        justifyContent: 'space-between',
        shadowColor: '#D81B60',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5
    },
    kartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
    kartBaslik: { fontSize: 16, fontWeight: '700', color: '#D81B60', flex: 1, marginRight: 10 },
    heartContainer: {
        padding: 5,
    },
    kartFooter: { paddingTop: 10 },
    sureContainer: { flexDirection: 'row', alignItems: 'center' },
    kartSure: { fontSize: 12, color: '#E91E63', marginLeft: 4, fontWeight: '500' },
    bosAlani: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, marginTop: -50 },
    bosMesaj: { fontSize: 20, fontWeight: 'bold', color: '#D81B60', textAlign: 'center', marginBottom: 10 },
    bosAciklama: { fontSize: 15, color: '#F06292', textAlign: 'center', lineHeight: 22 }
});
