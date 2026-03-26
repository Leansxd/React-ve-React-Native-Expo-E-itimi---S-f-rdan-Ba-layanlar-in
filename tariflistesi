import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ScrollView, RefreshControl, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import tarifler from '../data/tarifler';

export default function TarifListesi({ navigation, toggleFavori, favoriIdler }) {
    const [aramaMetni, setAramaMetni] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [seciliKategori, setSeciliKategori] = useState('Tümü');
    const kategoriler = ['Tümü', ...new Set(tarifler.map(t => t.kategori).filter(Boolean))];

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 800);
    };

    const renderTarif = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.kart}
                onPress={() => navigation.navigate('TarifDetay', {
                    isim: item.isim,
                    sure: item.sure,
                    malzemeler: item.malzemeler,
                    yapilis: item.yapilis,
                    zorluk: item.zorluk,
                    kategori: item.kategori,
                    id: item.id,
                    toggleFavori: toggleFavori,
                    favoriMi: favoriIdler.includes(item.id),
                })}
            >
                <View style={styles.kartFooter}>
                    <View style={styles.headerRow}>
                        <Text style={styles.kartBaslik} numberOfLines={1}>{item.isim}</Text>
                    </View>

                    <View style={styles.sureContainer}>
                        <Ionicons name="timer-outline" size={14} color="#E91E63" />
                        <Text style={styles.kartSure}>{item.sure} dk</Text>

                        <Text style={styles.kartSure}>Zorluk:</Text>
                        <Text style={[styles.kartSure, { textTransform: 'capitalize' }]}>{item.zorluk}</Text>

                        {item.kategori && (
                            <>
                                <Text style={styles.kartSure}>Kategori:</Text>
                                <Text style={[styles.kartSure, { textTransform: 'capitalize' }]}>{item.kategori}</Text>
                            </>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <LinearGradient colors={['#FCE4EC', '#F8BBD0', '#FFF0F5']} style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={{ uri: 'https://8e216c4e759fe0cb2d2a.cdn6.editmysite.com/uploads/b/8e216c4e759fe0cb2d2aff7b494f5bea1273731906e6d30881536897743d5c09/Uwu_1653499887.png?width=2400&optimize=medium' }} 
                        style={styles.logoImage} 
                        resizeMode="contain"
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search-circle" size={26} color="#E91E63" style={{ marginLeft: 15 }} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Tarif ya da malzeme ara..."
                    placeholderTextColor="#F06292"
                    value={aramaMetni}
                    onChangeText={setAramaMetni}
                />
            </View>

            <View style={styles.kategoriContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.kategoriScroll}>
                    {kategoriler.map((kat, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.kategoriBtn, seciliKategori === kat && styles.kategoriBtnActive]}
                            onPress={() => setSeciliKategori(kat)}
                        >
                            <Text style={[styles.kategoriText, seciliKategori === kat && styles.kategoriTextActive]}>{kat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={tarifler.filter(t => t.isim.toLowerCase().includes(aramaMetni.toLowerCase()) && (seciliKategori === 'Tümü' || t.kategori === seciliKategori))}
                renderItem={renderTarif}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#FF69B4" colors={['#FF69B4']} />
                }
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30 },
    topBar: { alignItems: 'center', marginBottom: 25, marginTop: 0 },
    logoContainer: { 
        width: 140, 
        height: 140, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 70,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#F8BBD0',
        shadowColor: '#D81B60',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 10
    },
    logoImage: { width: 120, height: 110 },
    logoText: { fontSize: 32, fontWeight: '900', color: '#D81B60', letterSpacing: 1, textShadowColor: 'rgba(255, 255, 255, 0.8)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 },
    logoTextLight: { fontWeight: '400', color: '#E91E63' },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FCE4EC', marginHorizontal: 20, borderRadius: 5, height: 50, marginBottom: 20 },
    searchInput: { flex: 1, height: '100%', paddingHorizontal: 10, fontSize: 15, color: '#D81B60' },
    kart: { backgroundColor: 'rgba(255, 255, 255, 0.85)', borderRadius: 15, marginBottom: 15, borderWidth: 1, borderColor: '#F8BBD0', shadowColor: '#D81B60', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
    kartFooter: { padding: 15 },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    kartBaslik: { fontSize: 18, fontWeight: 'bold', color: '#D81B60', flex: 1, paddingRight: 10 },
    priceText: { fontSize: 16, fontWeight: 'bold', color: '#E67E22' },
    sureContainer: { flexDirection: 'row', alignItems: 'center' },
    kartSure: { fontSize: 14, color: '#E91E63', marginLeft: 6, fontWeight: '500' },
    kategoriContainer: { marginBottom: 20 },
    kategoriScroll: { paddingHorizontal: 20 },
    kategoriBtn: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: 'rgba(252, 228, 236, 0.7)', marginRight: 10, borderWidth: 1, borderColor: '#F48FB1' },
    kategoriBtnActive: { backgroundColor: '#FF69B4' },
    kategoriText: { color: '#E91E63', fontWeight: '600', fontSize: 14 },
    kategoriTextActive: { color: '#FFFFFF' }
});
