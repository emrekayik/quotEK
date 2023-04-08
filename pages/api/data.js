const noImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png';
const reviews = [
  /* Ocak-2006 */
  {
    id: 1,
    yazar: 'Albert Einstein',
    yazarLink: 'https://tr.wikipedia.org/wiki/Albert_Einstein',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/250px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    soz: 'Önyargıyı yıkmak, atomu parçalamaktan daha zor.',
  },
  {
    id: 2,
    yazar: 'Barış Manço',
    yazarLink: 'https://tr.wikipedia.org/wiki/Bar%C4%B1%C5%9F_Man%C3%A7o',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bar%C4%B1%C5%9F_Man%C3%A7o_cropped.JPG/220px-Bar%C4%B1%C5%9F_Man%C3%A7o_cropped.JPG',
    soz: 'İnsanın öğrenmesi gereken ilk dil tatlı dildir.',
  },
  {
    id: 3,
    yazar: 'Necip Fazıl Kısakürek',
    yazarLink:
      'https://tr.wikipedia.org/wiki/Necip_Faz%C4%B1l_K%C4%B1sak%C3%BCrek',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Necip_Faz%C4%B1l_K%C4%B1sak%C3%BCrek_2014-05-04_10-06_%28cropped%29.jpg/225px-Necip_Faz%C4%B1l_K%C4%B1sak%C3%BCrek_2014-05-04_10-06_%28cropped%29.jpg',
    soz: 'Zaman insanları değil, armutları olgunlaştırır.',
  },
  {
    id: 4,
    yazar: 'Süleyman Demirel',
    yazarLink: 'https://tr.wikipedia.org/wiki/S%C3%BCleyman_Demirel',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Suleyman_Demirel_1998.jpg/220px-Suleyman_Demirel_1998.jpg',
    soz: 'Dün dündür, bugün bugündür.',
  },
  {
    id: 5,
    yazar: 'Montaigne',
    yazarLink: 'https://tr.wikipedia.org/wiki/Michel_de_Montaigne',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg/200px-Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg',
    soz: 'Kral da, dilenci de aynı iştahla acıkırlar.',
  },
  {
    id: 6,
    yazar: 'Cenap Şahabettin',
    yazarLink: 'https://tr.wikipedia.org/wiki/Cenap_%C5%9Eahabettin',
    yazarResmi: 'https://upload.wikimedia.org/wikipedia/tr/e/ef/Cenab.gif',
    soz: 'Meşe gölgesinde filizlenen yosunlar, çok kez kendilerini meşe fidanı sanırlar.',
  },
  {
    id: 7,
    yazar: 'Mustafa Kemal Atatürk',
    yazarLink: 'https://tr.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ataturk1930s.jpg/220px-Ataturk1930s.jpg',
    soz: 'İnsan topluluğu kadın ve erkek denilen iki cins insandan mürekkeptir. Kabil midir ki, bu kütlenin bir parçasını ilerletelim, ötekini ihmal edelim de kütlenin bütünlüğü ilerleyebilsin? Mümkün müdür ki, bir cismin yarısı toprağa zincirlerle bağlı kaldıkça öteki kısmı göklere yükselebilsin?',
  },
  {
    id: 8,
    yazar: 'Konfüçyüs',
    yazarLink: 'https://tr.wikipedia.org/wiki/Konf%C3%BC%C3%A7y%C3%BCs',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Confucius_Tang_Dynasty.jpg/170px-Confucius_Tang_Dynasty.jpg',
    soz: 'Gerçeği bilenler ile onu sevenler hiçbir zaman eşit değildirler.',
  },
  {
    id: 9,
    yazar: 'Douglas Adams',
    yazarLink: 'https://tr.wikipedia.org/wiki/Douglas_Adams',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Douglas_adams_cropped.jpg/220px-Douglas_adams_cropped.jpg',
    soz: 'Bir kitap yazmamak inanılmaz zaman alıyor.',
  },
  {
    id: 10,
    yazar: 'Victor Hugo',
    yazarLink: 'https://tr.wikipedia.org/wiki/Victor_Hugo',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/220px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
    soz: 'Gençliğe, yaşlılıktan çok hürmet etmeliyiz.',
  },
  {
    id: 11,
    yazar: 'Freddie Mercury',
    yazarLink: 'https://tr.wikipedia.org/wiki/Freddie_Mercury',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/220px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg',
    soz: 'Eğer anlamıyorlarsa, boşver tatlım.',
  },
  /* Şubat-2006 */
  {
    id: 12,
    yazar: 'Mevlana',
    yazarLink:
      'https://tr.wikipedia.org/wiki/Mevl%C3%A2n%C3%A2_Cel%C3%A2ledd%C3%AEn-i_R%C3%BBm%C3%AE',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/%C4%B0zmir_Buca_Mevlana_heykeli_ve_mesire_alan%C4%B1_5.jpg/220px-%C4%B0zmir_Buca_Mevlana_heykeli_ve_mesire_alan%C4%B1_5.jpg',
    soz: 'Sabır, demir kalkandır.',
  },
  {
    id: 13,
    yazar: 'Rudyard Kipling',
    yazarLink: 'https://tr.wikipedia.org/wiki/Rudyard_Kipling',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rudyard_Kipling_%28portrait%29.jpg/200px-Rudyard_Kipling_%28portrait%29.jpg',
    soz: 'Başarısızlık için kırk milyon neden vardır da, bir tek özür yoktur.',
  },
  {
    id: 14,
    yazar: 'Platon(Eflatun)',
    yazarLink: 'https://tr.wikipedia.org/wiki/Platon',
    yazarResmi:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/220px-Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    soz: 'Küçük şeylere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.',
  },
];

export default reviews;
