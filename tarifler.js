const tarifler = [
    {
        id: '1',
        isim: 'UwU Özel Latte',
        sure: 5,
        resim: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['1 shot Espresso', '200ml Süt', 'Karamel Şurubu', 'Krema'],
        yapilis: 'Espressoyu hazırlayın. Sütü buhar çubuğuyla köpürtün. Karamel şurubunu bardağın dibine ekleyin, üzerine kahve ve sütü ilave edip krema ile süsleyin.',
        zorluk: 'kolay',
        kategori: 'Kahve'
    },
    {
        id: '2',
        isim: 'Çilekli Matcha Boba',
        sure: 10,
        resim: 'https://images.unsplash.com/photo-1620556276859-e9354e12e84c?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Matcha Tozu', 'Taze Çilek Püresi', 'Süt', 'Boba İncileri', 'Buz'],
        yapilis: 'Bardağın en altına çilek püresini ve bobaları ekleyin. Üzerine buz ve süt ilave edin. En üste hazırladığınız matcha shot\'ını dökün.',
        zorluk: 'orta',
        kategori: 'İçecek'
    },
    {
        id: '3',
        isim: 'Kedi Patisi Kurabiye',
        sure: 30,
        resim: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Un', 'Tereyağı', 'Pudra Şekeri', 'Vanilya', 'Pembe Gıda Boyası'],
        yapilis: 'Hamuru yoğurun ve ikiye ayırın. Bir yarısını pembe renklendirin. Beyaz hamurdan yuvarlaklar yapın, pembe hamurdan pati desenleri ekleyip 180 derecede pişirin.',
        zorluk: 'orta',
        kategori: 'Tatlı'
    },
    {
        id: '4',
        isim: 'Kavrulmuş Fındıklı Tiramisu',
        sure: 20,
        resim: 'https://images.unsplash.com/photo-1571115177098-24c428080bf7?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Kedi Dili Biskuvi', 'Mascarpone', 'Yumurta Sarısı', 'Espresso', 'Kavrulmuş Fındık'],
        yapilis: 'Kedi dillerini espresso ile ıslatın. Mascarpone kremasını hazırlayın ve kat kat dizin. Üzerine kakao ve kavrulmuş fındık serpip dolapta dinlendirin.',
        zorluk: 'orta',
        kategori: 'Tatlı'
    },
    {
        id: '5',
        isim: 'Orman Meyveli Cheesecake',
        sure: 45,
        resim: 'https://images.unsplash.com/photo-1533134242443-d4fdac980482?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Burçak Bisküvi', 'Krema', 'Labne', 'Orman Meyveleri', 'Şeker'],
        yapilis: 'Bisküvileri ezip taban yapın. Kremayı hazırlayıp üzerine dökün. Orman meyvelerinden sos yapıp en üste ekleyin ve soğumaya bırakın.',
        zorluk: 'zor',
        kategori: 'Tatlı'
    },
    {
        id: '6',
        isim: 'Avokado Poşe Yumurta Tost',
        sure: 15,
        resim: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Ekşi Mayalı Ekmek', 'Olgun Avokado', 'Yumurta', 'Zeytinyağı', 'Pul Biber'],
        yapilis: 'Ekmeği kızartın. Avokadoyu ezip ekmeğe sürün. Suda poşelediğiniz yumurtayı üzerine koyun. Zeytinyağı ve pul biber ile servis edin.',
        zorluk: 'orta',
        kategori: 'Kahvaltılık'
    },
    {
        id: '7',
        isim: 'Sıcak Pofuduk Tarçınlı Rulo',
        sure: 60,
        resim: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Mayalı Hamur', 'Esmer Şeker', 'Tarçın', 'Krem Peynir Sosu'],
        yapilis: 'Hamuru açıp içine margarin, esmer şeker ve tarçın sürün. Rulo yapıp dilimleyin. Piştikten sonra üzerine özel krem peynir sosunu gezdirin.',
        zorluk: 'zor',
        kategori: 'Tatlı'
    },
    {
        id: '8',
        isim: 'Brownie Intense',
        sure: 35,
        resim: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Bitter Çikolata', 'Tereyağı', 'Yumurta', 'Un', 'Ceviz'],
        yapilis: 'Çikolatayı eritin. Yumurtalarla şekeri çırpıp birleştirin. Un ve ceviz ekleyip 160 derece fırında içi yumuşak kalacak şekilde pişirin.',
        zorluk: 'kolay',
        kategori: 'Tatlı'
    },
    {
        id: '9',
        isim: 'Kruvasan Sandviç',
        sure: 10,
        resim: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['Büyük Kruvasan', 'Cheddar Peyniri', 'Hindi Füme', 'Marul', 'Zeytinyağı'],
        yapilis: 'Kruvasanı ortadan ikiye kestiğiniz arasına marul, cheddar peyniri ve hindi fümeyi yerleştirin. İsteğe göre ısıtarak servis yapın.',
        zorluk: 'kolay',
        kategori: 'Kahvaltılık'
    },
    {
        id: '10',
        isim: 'UwU Cold Brew',
        sure: 15,
        resim: 'https://images.unsplash.com/photo-1517701550927-30cfcb64ac45?q=80&w=800&auto=format&fit=crop',
        malzemeler: ['İnce Çekilmiş Kahve', 'Soğuk Su', 'Buz', 'Süt Köpüğü'],
        yapilis: 'Kahveyi soğuk suyla 12 saat demleyin. Süzdükten sonra bol buzlu bardağa alın, üzerine isteğe bağlı süt köpüğü ekleyip hafifçe karıştırın.',
        zorluk: 'kolay',
        kategori: 'Kahve'
    }
];

export default tarifler;
