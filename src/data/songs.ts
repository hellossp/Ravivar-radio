export interface Song {
  id: string;
  title: string;
  artist: string;
  year: number;
  language: 'HINDI' | 'ODIA';
  category: 'ROMANTIC' | 'SAD' | '90s CLASSICS';
  youtubeId: string; // YouTube Video ID for real playback
  album?: string;
  duration?: string;
  badge?: string;
}

export const CATEGORIES = ['ALL', 'ODIA', 'HINDI', 'ROMANTIC', 'SAD', '90s CLASSICS'] as const;
export type CategoryType = typeof CATEGORIES[number];

export const SONGS: Song[] = [
  {
    "title": "He Faguna Tume",
    "artist": "Akshaya Mohanty",
    "year": 1980,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "2xup4-sdx0A",
    "album": "Classic Akshaya",
    "duration": "04:30",
    "id": "odia-01"
  },
  {
    "title": "Chandramallika Hase",
    "artist": "Akshaya Mohanty",
    "year": 1982,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Du1IieL_AF0",
    "album": "Evergreen Odia",
    "duration": "04:15",
    "id": "odia-02"
  },
  {
    "title": "Budha Budhi Tuan Tuin",
    "artist": "Akshaya Mohanty",
    "year": 1979,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "-0iHwJe01BA",
    "album": "Folk Hits",
    "duration": "04:45",
    "id": "odia-03"
  },
  {
    "title": "Kabata Khola Priye",
    "artist": "Akshaya Mohanty",
    "year": 1985,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "dRzycCzqElw",
    "album": "Romantic Melodies",
    "duration": "05:10",
    "id": "odia-04"
  },
  {
    "title": "Maichia Gokhei Sahu",
    "artist": "Akshaya Mohanty",
    "year": 1981,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "KvwvA8Bg42I",
    "album": "Evergreen Odia",
    "duration": "04:20",
    "id": "odia-05"
  },
  {
    "title": "Hai Prabhu",
    "artist": "Mu Jhulan Mohanty",
    "year": 1990,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "UPeVxrcrEpc",
    "album": "Devotional Hits",
    "duration": "05:00",
    "id": "odia-06"
  },
  {
    "title": "Mayabini Bana Jochhana",
    "artist": "Akshaya Mohanty",
    "year": 1973,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "EMUn5h7z674",
    "album": "Ghara Bahuda",
    "duration": "04:50",
    "id": "odia-07"
  },
  {
    "title": "Mayuri Go Tama Akasha Mu",
    "artist": "Mohammed Rafi",
    "year": 1967,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Q8stEi8yQIQ",
    "album": "Arundhati",
    "duration": "04:15",
    "badge": "Developer's Mom Favorite ❤️",
    "id": "odia-08"
  },
  {
    "title": "E Banara Chai",
    "artist": "Amit Kumar & Suman Kalyanpur",
    "year": 1976,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "IeHoRrhbZnc",
    "album": "Gapa Helebi Sata",
    "duration": "04:30",
    "id": "odia-09"
  },
  {
    "title": "Dura Akasara Janha Tia",
    "artist": "Babushan Mohanty",
    "year": 2012,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "H6bJkTldxMU",
    "album": "Dura Akasa Ra Janha",
    "duration": "04:55",
    "id": "odia-10"
  },
  {
    "title": "Kichi Bata Chali",
    "artist": "Tapu Mishra & Babushan",
    "year": 2011,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "96R-p8_SIQE",
    "album": "Chocolate",
    "duration": "05:05",
    "id": "odia-11"
  },
  {
    "id": "odia-12",
    "title": "Jaare Bhasi Bhasi Ja Nauka Mor",
    "artist": "Akshaya Mohanty",
    "year": 1978,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "OjSDaH0vVFQ",
    "album": "Evergreen Odia",
    "duration": "09:18"
  },
  {
    "id": "odia-13",
    "title": "Hrudayara Ei Sunyataku",
    "artist": "Subas Das",
    "year": 1993,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "X0G_eqEjhW4",
    "album": "Samar Selim Simon",
    "duration": "05:04"
  },
  {
    "id": "odia-14",
    "title": "Phur Kina Udi Gala Bani",
    "artist": "Trupti Das & Gita Pattnaik",
    "year": 1975,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "llPdTnEtjUo",
    "album": "Jajabara",
    "duration": "04:49"
  },
  {
    "id": "odia-15",
    "title": "Eije Bana Lata Pahada",
    "artist": "Akshaya Mohanty",
    "year": 1982,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "Tdxvq2dO7mk",
    "album": "Classic Akshaya",
    "duration": "05:54"
  },
  {
    "id": "odia-16",
    "title": "E Duniya Re Kehi Na Kehi",
    "artist": "Akshaya Mohanty & Gita Pattnaik",
    "year": 1975,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "IGT90wEMBuA",
    "album": "Jajabara",
    "duration": "04:42"
  },
  {
    "id": "odia-17",
    "title": "Emiti Rati Seje Abhula Smriti",
    "artist": "Chitta Jena",
    "year": 1985,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Tb-EG7CmTa8",
    "album": "Classic Odia",
    "duration": "04:13"
  },
  {
    "id": "odia-18",
    "title": "Jajabara Theme Song",
    "artist": "Akshaya Mohanty",
    "year": 1975,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "JT8lu7MxVPk",
    "album": "Jajabara",
    "duration": "06:31"
  },
  {
    "id": "odia-19",
    "title": "Jhia Dekhili Tiniti",
    "artist": "Akshaya Mohanty",
    "year": 1980,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "0jWbsjGxREY",
    "album": "Akshaya Geeti",
    "duration": "03:21"
  },
  {
    "id": "odia-20",
    "title": "E Parabata Kunchi Kunchika",
    "artist": "Chitta Jena",
    "year": 1984,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "gq7MYvNOwV0",
    "album": "Odia Golden Hits",
    "duration": "04:12"
  },
  {
    "id": "odia-21",
    "title": "Sathire Mun Je Janena Kaha",
    "artist": "Akshaya Mohanty",
    "year": 1988,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "jD10rh93DPQ",
    "album": "Golden Collection",
    "duration": "05:55"
  },
  {
    "id": "odia-22",
    "title": "Sapana Ra Pathe Pathe",
    "artist": "Pranab Patnaik",
    "year": 1986,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "luOLzbV0IQo",
    "album": "Classic Odia",
    "duration": "04:06"
  },
  {
    "id": "odia-23",
    "title": "Mo Priya Tharu Kehi Sundara",
    "artist": "Chitta Jena",
    "year": 1976,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "jBo-SRByqLs",
    "album": "Sindura Bindu",
    "duration": "04:32"
  },
  {
    "id": "odia-24",
    "title": "Nida Bhara Rati",
    "artist": "Akshaya Mohanty",
    "year": 1982,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "N2dVe3Yq56c",
    "album": "Odia Classics",
    "duration": "03:07"
  },
  {
    "id": "odia-25",
    "title": "Mo Priya Tharu Kie Sundara",
    "artist": "Chitta Jena",
    "year": 1976,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "jBo-SRByqLs",
    "album": "Odia Hits",
    "duration": "04:08"
  },
  {
    "id": "odia-26",
    "title": "Re Atman Nidra Parihari",
    "artist": "Pranab Patnaik",
    "year": 1975,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "H5fFzqyojM0",
    "album": "Mamata",
    "duration": "03:14"
  },
  {
    "id": "odia-27",
    "title": "Gadi Chale Pachhei",
    "artist": "Akshaya Mohanty & Trupti Das",
    "year": 1975,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "GyE5TF3s2t0",
    "album": "Jajabara",
    "duration": "05:01"
  },
  {
    "id": "odia-28",
    "title": "Na Jare Naja Gori Bali Jatara",
    "artist": "Chitta Jena",
    "year": 1983,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "NzgWCfD3I98",
    "album": "Odia Classics",
    "duration": "02:42"
  },
  {
    "id": "odia-29",
    "title": "Kehi Na Kehi Nije Sahe",
    "artist": "Akshaya Mohanty",
    "year": 1975,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "4I1DjQRR-a8",
    "album": "Jajabara",
    "duration": "03:02"
  },
  {
    "id": "odia-30",
    "title": "Na Jaa Radhika",
    "artist": "Raghunath Panigrahi",
    "year": 1976,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Bv_2MJG8IM0",
    "album": "Sindura Bindu",
    "duration": "04:51"
  },
  {
    "id": "odia-31",
    "title": "Malo Hun Hun Malo",
    "artist": "Akshaya Mohanty",
    "year": 1980,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "QiKUpYKnsMw",
    "album": "Odia Folk Classic",
    "duration": "03:04"
  },
  {
    "id": "odia-32",
    "title": "Mo Akhira Kete Katha",
    "artist": "Pranab Patnaik",
    "year": 1981,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "53hZ0Evo2Wo",
    "album": "Odia Classics",
    "duration": "03:08"
  },
  {
    "id": "odia-33",
    "title": "Rupa Hoithiba Labanya Bati",
    "artist": "Chitta Jena",
    "year": 1985,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "wPkLpvUdbJ8",
    "album": "Golden Odia Hits",
    "duration": "03:55"
  },
  {
    "id": "odia-34",
    "title": "Kathatie Kahun Kathatie Kahun",
    "artist": "Trupti Das & Gita Pattnaik",
    "year": 1978,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "tlz0CjYps-I",
    "album": "Ta'poi",
    "duration": "04:39"
  },
  {
    "id": "odia-35",
    "title": "Aaji Akashe Ki Ranga Laagila",
    "artist": "Nirmala Mishra",
    "year": 1960,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "JBQFzhdtOFU",
    "album": "Sri Lokanath",
    "duration": "02:57"
  },
  {
    "id": "odia-36",
    "title": "Mun Paradeshi Chadhei",
    "artist": "Akshaya Mohanty",
    "year": 1990,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "N67duEt85kc",
    "album": "Paradeshi Chadhei",
    "duration": "03:58"
  },
  {
    "id": "odia-37",
    "title": "Kamala Desha Raja Kumara",
    "artist": "Prafulla Kar",
    "year": 1979,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "PrU33_YU3bI",
    "album": "Classic Odia",
    "duration": "03:15"
  },
  {
    "id": "odia-38",
    "title": "Ei Amari Gaan",
    "artist": "Sikandar Alam & Nirmala Mishra",
    "year": 1970,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "o9QPQDqd9XE",
    "album": "Adina Megha",
    "duration": "03:53"
  },
  {
    "id": "odia-39",
    "title": "Nadira Nama Alasa Kanya",
    "artist": "Akshaya Mohanty",
    "year": 1982,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "RrQWZ5DsHOA",
    "album": "Akshaya Classics",
    "duration": "03:12"
  },
  {
    "id": "odia-40",
    "title": "Sapana Bilasi",
    "artist": "Pranab Patnaik",
    "year": 1984,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Ful4H26kGtM",
    "album": "Odia Golden Melodies",
    "duration": "04:45"
  },
  {
    "id": "odia-41",
    "title": "Rakata Talamala",
    "artist": "Akshaya Mohanty",
    "year": 1965,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "sm2G9_5fGao",
    "album": "Mala Janha",
    "duration": "03:40"
  },
  {
    "id": "odia-42",
    "title": "Chupi Chupi Gori Kane",
    "artist": "Akshaya Mohanty & Trupti Das",
    "year": 1987,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "cOE-hQ7Wldw",
    "album": "Evergreen Odia",
    "duration": "09:01"
  },
  {
    "id": "odia-43",
    "title": "Jaha Mu Khojichhi Taha Mu Paichhi",
    "artist": "Pranab Patnaik",
    "year": 1983,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "-IRt2Io_SjI",
    "album": "Classic Odia",
    "duration": "04:11"
  },
  {
    "id": "odia-44",
    "title": "Phur Kina Udi Gala Bani (Original)",
    "artist": "Trupti Das",
    "year": 1975,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "kbW61_Ut794",
    "album": "Jajabara",
    "duration": "02:56"
  },
  {
    "id": "odia-45",
    "title": "Mo Sange Lagena Re",
    "artist": "Akshaya Mohanty",
    "year": 1985,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "A01jd4Pq1m4",
    "album": "Odia Classics",
    "duration": "06:46"
  },
  {
    "id": "odia-46",
    "title": "Abhimanini Ye Amania Dheu",
    "artist": "Akshaya Mohanty",
    "year": 1986,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "Wh0N-u-jz6k",
    "album": "Odia Classics",
    "duration": "05:04"
  },
  {
    "id": "odia-47",
    "title": "Arundhati Theme Song",
    "artist": "Pranab Patnaik",
    "year": 1967,
    "language": "ODIA",
    "category": "90s CLASSICS",
    "youtubeId": "p_Enug3eNO4",
    "album": "Arundhati",
    "duration": "03:25"
  },
  {
    "id": "odia-48",
    "title": "Kahala Tu Kaha Gori",
    "artist": "Akshaya Mohanty",
    "year": 1984,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "afT8kPKWPek",
    "album": "Golden Collection",
    "duration": "02:44"
  },
  {
    "id": "odia-49",
    "title": "Naali Naali Ei Krushnachuda Sate",
    "artist": "Raghunath Panigrahi",
    "year": 1978,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "c62xM-d2QFo",
    "album": "Odia Classics",
    "duration": "03:17"
  },
  {
    "id": "odia-50",
    "title": "Dhali Dia Sara",
    "artist": "Chitta Jena",
    "year": 1983,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "YxpMIFh62wA",
    "album": "Odia Old Gold",
    "duration": "04:18"
  },
  {
    "id": "odia-51",
    "title": "Dheu Dheuka Pahada Tale",
    "artist": "Akshaya Mohanty",
    "year": 1982,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "x5bw58-oWic",
    "album": "Odia Melodies",
    "duration": "03:05"
  },
  {
    "id": "odia-52",
    "title": "Bhasa Megha Muje Bhasi Jae Dure",
    "artist": "Pranab Patnaik",
    "year": 1985,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "pMG-tNa17E0",
    "album": "Odia Golden Classics",
    "duration": "03:12"
  },
  {
    "id": "odia-53",
    "title": "Adine Malli Mahaka",
    "artist": "Akshaya Mohanty & Trupti Das",
    "year": 1970,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "ZE_BrfnLkeo",
    "album": "Adina Megha",
    "duration": "04:38"
  },
  {
    "id": "odia-54",
    "title": "Ei Lagane Mo Mana Bujhena",
    "artist": "Pranab Patnaik",
    "year": 1981,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "Q90pbuXkhTM",
    "album": "Classic Odia",
    "duration": "02:38"
  },
  {
    "id": "odia-55",
    "title": "Bhula Mana Re Tora Kehi Nuhen",
    "artist": "Akshaya Mohanty",
    "year": 1984,
    "language": "ODIA",
    "category": "SAD",
    "youtubeId": "cQZjgA_pdmg",
    "album": "Odia Hits",
    "duration": "03:10"
  },
  {
    "id": "odia-56",
    "title": "Ai Lagane Mo Mana Bujhena (Duet)",
    "artist": "Pranab Patnaik & Nirmala Mishra",
    "year": 1981,
    "language": "ODIA",
    "category": "ROMANTIC",
    "youtubeId": "KRwRMyQkLn4",
    "album": "Golden Hits",
    "duration": "02:44"
  },
  {
    "id": "hindi-01",
    "title": "Pehla Nasha",
    "artist": "Udit Narayan & Sadhana Sargam",
    "year": 1992,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "ODu7OyAqK-Q",
    "album": "Jo Jeeta Wohi Sikandar",
    "duration": "04:51"
  },
  {
    "id": "hindi-02",
    "title": "Tu Mile Dil Khile",
    "artist": "Kumar Sanu & Chithra",
    "year": 1994,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "nqTS7ngviwQ",
    "album": "Criminal",
    "duration": "05:08"
  },
  {
    "id": "hindi-03",
    "title": "Tujhe Dekha To Ye Jaana Sanam",
    "artist": "Kumar Sanu & Lata Mangeshkar",
    "year": 1995,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "cNV5hLSa9H8",
    "album": "Dilwale Dulhania Le Jayenge",
    "duration": "05:02"
  },
  {
    "id": "hindi-04",
    "title": "Dil To Pagal Hai",
    "artist": "Lata Mangeshkar & Udit Narayan",
    "year": 1997,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "Q6QltfoVV5o",
    "album": "Dil To Pagal Hai",
    "duration": "05:38"
  },
  {
    "id": "hindi-05",
    "title": "Chaiyya Chaiyya",
    "artist": "Sukhwinder Singh & Sapna Awasthi",
    "year": 1998,
    "language": "HINDI",
    "category": "90s CLASSICS",
    "youtubeId": "9MX-QejdVaQ",
    "album": "Dil Se..",
    "duration": "06:54"
  },
  {
    "id": "hindi-06",
    "title": "Dheere Dheere Se Meri Zindagi Mein Aana",
    "artist": "Kumar Sanu & Anuradha Paudwal",
    "year": 1990,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "Mcs2xEZ6K8o",
    "album": "Aashiqui",
    "duration": "05:27"
  },
  {
    "id": "hindi-07",
    "title": "Mera Dil Bhi Kitna Pagal Hai",
    "artist": "Kumar Sanu & Alka Yagnik",
    "year": 1991,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "FsNc7I33w60",
    "album": "Saajan",
    "duration": "05:25"
  },
  {
    "id": "hindi-08",
    "title": "Ye Kaali Kaali Aankhen",
    "artist": "Kumar Sanu & Anu Malik",
    "year": 1993,
    "language": "HINDI",
    "category": "90s CLASSICS",
    "youtubeId": "axtCauVo24M",
    "album": "Baazigar",
    "duration": "06:12"
  },
  {
    "id": "hindi-09",
    "title": "Tip Tip Barsa Paani",
    "artist": "Udit Narayan & Alka Yagnik",
    "year": 1994,
    "language": "HINDI",
    "category": "90s CLASSICS",
    "youtubeId": "BtlnpBb4O8E",
    "album": "Mohra",
    "duration": "06:05"
  },
  {
    "id": "hindi-10",
    "title": "Sandese Aate Hain",
    "artist": "Sonu Nigam & Roop Kumar Rathod",
    "year": 1997,
    "language": "HINDI",
    "category": "SAD",
    "youtubeId": "9sthJUHkzgI",
    "album": "Border",
    "duration": "10:19"
  },
  {
    "id": "hindi-11",
    "title": "Kuch Kuch Hota Hai",
    "artist": "Udit Narayan & Alka Yagnik",
    "year": 1998,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "UnZPDYuD29U",
    "album": "Kuch Kuch Hota Hai",
    "duration": "04:56"
  },
  {
    "id": "hindi-12",
    "title": "Tadap Tadap Ke",
    "artist": "KK & Dominique Cerejo",
    "year": 1999,
    "language": "HINDI",
    "category": "SAD",
    "youtubeId": "qsiHgJbwJUE",
    "album": "Hum Dil De Chuke Sanam",
    "duration": "06:45"
  },
  {
    "id": "hindi-13",
    "title": "Ek Ladki Ko Dekha To Aisa Laga",
    "artist": "Kumar Sanu",
    "year": 1994,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "htMvfOfixuM",
    "album": "1942: A Love Story",
    "duration": "04:35"
  },
  {
    "id": "hindi-14",
    "title": "Roja Janeman",
    "artist": "Hariharan & Sujatha",
    "year": 1992,
    "language": "HINDI",
    "category": "ROMANTIC",
    "youtubeId": "4iHxevc9vtU",
    "album": "Roja",
    "duration": "05:07"
  },
  {
    "id": "hindi-15",
    "title": "Tu Hi Re",
    "artist": "Hariharan & Kavita Krishnamurthy",
    "year": 1995,
    "language": "HINDI",
    "category": "SAD",
    "youtubeId": "V9mN0qBgEzQ",
    "album": "Bombay",
    "duration": "07:14"
  }
];
