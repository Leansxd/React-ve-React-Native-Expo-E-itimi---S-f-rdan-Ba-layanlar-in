import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TarifDetay({ route, navigation, toggleFavori, favoriIdler = [] }) {
    const { isim, sure, malzemeler, yapilis, id, zorluk, kategori } = route.params;
    const isFavori = favoriIdler.includes(id);

    return (
        <LinearGradient colors={['#FCE4EC', '#FFF0F5', '#F8BBD0']} style={styles.mainContainer}>
            <View style={styles.headerBar}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={28} color="#D81B60" />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>{isim}</Text>
                <TouchableOpacity style={styles.favoriteHeaderBtn} onPress={() => toggleFavori && toggleFavori(id)}>
                    <Ionicons name={isFavori ? "bookmark" : "bookmark-outline"} size={28} color="#FF69B4" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 150 }}>
                <View style={styles.detayContainer}>
                    <Text style={styles.baslik}>{isim}</Text>
                    <Text style={styles.yapilisKisa} numberOfLines={3}>{yapilis}</Text>

                    <View style={styles.infoRow}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoVal}>{sure} dk</Text>
                            <Text style={styles.infoLabel}>SÜRE</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoVal}>450 kcal</Text>
                            <Text style={styles.infoLabel}>KALORİ</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={[styles.infoVal, { textTransform: 'capitalize' }]}>{zorluk}</Text>
                            <Text style={styles.infoLabel}>ZORLUK</Text>
                        </View>
                    </View>

                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Malzemeler</Text>
                    </View>

                    {malzemeler.map((malzeme, index) => (
                        <View key={index} style={styles.malzemeBox}>
                            <Text style={styles.malzemeText}>• {malzeme}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    headerBar: { flexDirection: 'row', alignItems: 'center', paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, backgroundColor: 'transparent', borderBottomWidth: 1, borderBottomColor: 'rgba(248, 187, 208, 0.5)' },
    backBtn: { padding: 5 },
    headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#D81B60', marginLeft: 15 },
    favoriteHeaderBtn: { padding: 5 },
    scrollArea: { flex: 1 },
    detayContainer: { flex: 1, backgroundColor: 'transparent', paddingHorizontal: 20, paddingTop: 20, minHeight: 600 },
    baslik: { fontSize: 26, fontWeight: 'bold', color: '#D81B60', marginBottom: 10 },
    yapilisKisa: { fontSize: 15, color: '#E91E63', lineHeight: 22, paddingBottom: 20 },
    infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
    infoBox: { width: '31%', paddingVertical: 18, alignItems: 'center' },
    infoVal: { fontSize: 15, fontWeight: 'bold', color: '#D81B60', marginTop: 10 },
    infoLabel: { fontSize: 10, color: '#F06292', marginTop: 3, fontWeight: '700' },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#D81B60' },
    itemCount: { fontSize: 13, color: '#F06292' },
    malzemeBox: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F8BBD0', marginBottom: 5 },
    rowCenter: { flexDirection: 'row', alignItems: 'center' },
    malzemeText: { fontSize: 15, fontWeight: '500', color: '#D81B60', paddingLeft: 5 },
    amountText: { fontSize: 14, color: '#F06292', fontWeight: '500' },
    tipBox: { backgroundColor: 'rgba(252, 228, 236, 0.7)', padding: 20, borderRadius: 20, borderLeftWidth: 4, borderLeftColor: '#FF69B4', marginBottom: 20 },
    tipText: { fontSize: 15, color: '#D81B60', fontStyle: 'italic', lineHeight: 24 }
});
