export interface Track {
  id: number;
  title: string;
  artist: string;
  film?: string;
  year: number;
  duration: string;
  videoId: string;
  mood: "Wanderlust" | "Rockstar" | "Metro & Late Night" | "Sufi & Soul" | "Romance" | "Indie Chill" | "Desi Dance" | "Pop & Vibes";
  fallbackVideoIds?: string[];
}

export interface Playlist {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  tracks: Track[];
}

// ----------------------------------------------------
// 1. WANDERLUST & ROADTRIP
// ----------------------------------------------------
export const WANDERLUST_TRACKS: Track[] = [
  { id: 101, title: "Safarnama", artist: "Lucky Ali", film: "Tamasha", year: 2015, duration: "4:11", videoId: "7mTDBsdfw88", mood: "Wanderlust" },
  { id: 102, title: "Chota Sa Fasana", artist: "Arijit Singh", film: "Karwaan", year: 2018, duration: "3:58", videoId: "4h5aIACGjQo", mood: "Wanderlust" },
  { id: 103, title: "Illahi", artist: "Arijit Singh", film: "Yeh Jawaani Hai Deewani", year: 2013, duration: "3:49", videoId: "fdubeMFwuGs", mood: "Wanderlust" },
  { id: 104, title: "The Journey Song", artist: "Anupam Roy, Shreya Ghoshal", film: "Piku", year: 2015, duration: "4:12", videoId: "2__nNm0NK4A", fallbackVideoIds: ["j2S0znVB148", "Gc-2CaudyUM"], mood: "Wanderlust" },
  { id: 105, title: "Kadam", artist: "Prateek Kuhad", film: "Karwaan", year: 2018, duration: "3:44", videoId: "BaS4VfaR-E0", mood: "Wanderlust" },
  { id: 106, title: "Sham", artist: "Amit Trivedi, Nikhil D'Souza", film: "Aisha", year: 2010, duration: "4:43", videoId: "nC0JI3szZJk", mood: "Wanderlust" },
  { id: 107, title: "Kyon", artist: "Papon, Sunidhi Chauhan", film: "Barfi!", year: 2012, duration: "4:26", videoId: "UDHklYvDkv8", mood: "Wanderlust" },
  { id: 108, title: "Manja", artist: "Amit Trivedi", film: "Kai Po Che", year: 2013, duration: "3:44", videoId: "dTNnrfymKuw", mood: "Wanderlust" },
  { id: 109, title: "Heartquake", artist: "Papon", film: "Karwaan", year: 2018, duration: "4:40", videoId: "a4NGZFMhEUY", mood: "Wanderlust" },
  { id: 110, title: "Saansein", artist: "Prateek Kuhad", film: "Karwaan", year: 2018, duration: "2:39", videoId: "R3Ed4zvQ0Hs", mood: "Wanderlust" },
  { id: 111, title: "Bhar De Hamaara Glass", artist: "Ishaan Nigam", film: "Karwaan", year: 2018, duration: "3:10", videoId: "Apa3_bg4qgE", fallbackVideoIds: ["JN9B7Vhwrvo"], mood: "Wanderlust" },
  { id: 112, title: "Bezubaan", artist: "Anupam Roy", film: "Piku", year: 2015, duration: "5:37", videoId: "aluhKndbT2Y", mood: "Wanderlust" },
  { id: 113, title: "The Nights", artist: "Avicii", year: 2014, duration: "2:56", videoId: "UtF6Jej8yb4", mood: "Wanderlust" },
  { id: 114, title: "Tu Hi Hai", artist: "Arijit Singh, Amit Trivedi", film: "Dear Zindagi", year: 2016, duration: "3:19", videoId: "wHD6z0vuWiM", fallbackVideoIds: ["wNCJvvjo_3I", "UzO9VcDz6h4"], mood: "Wanderlust" },
  { id: 115, title: "Zindagi Kuch Toh Bata", artist: "Jubin Nautiyal, Pritam", film: "Bajrangi Bhaijaan", year: 2015, duration: "4:23", videoId: "jwrCYAIdkeM", fallbackVideoIds: ["JkNGajVY5ek", "ITyHqStTDeg"], mood: "Wanderlust" },
  { id: 116, title: "Aa Chal Ke Tujhe", artist: "Kishore Kumar", film: "Door Gagan Ki Chhaon Mein", year: 1964, duration: "4:38", videoId: "Y_8VmzWOsgs", fallbackVideoIds: ["Tf5rQ8t5ngU", "pPPgRID3198"], mood: "Wanderlust" },
  { id: 117, title: "Khol De Baahein", artist: "Monali Thakur", film: "Meri Pyaari Bindu", year: 2017, duration: "3:10", videoId: "aGKWjgWaIX4", fallbackVideoIds: ["icNldQfojaw", "Zr_enRRcyuw"], mood: "Wanderlust" },
  { id: 118, title: "500 Miles", artist: "Peter, Paul and Mary", year: 1962, duration: "2:49", videoId: "UJmbn1sQw2A", fallbackVideoIds: ["1ya-SEOWe94", "k9VgdDNLlu8", "5S3hw0GZBbQ", "HAZJAzCshN4"], mood: "Wanderlust" }
];

// ----------------------------------------------------
// 2. ROCKSTAR & DEEP SOULS
// ----------------------------------------------------
export const ROCKSTAR_TRACKS: Track[] = [
  { id: 201, title: "Kun Faya Kun", artist: "A.R. Rahman, Mohit Chauhan, Javed Ali", film: "Rockstar", year: 2011, duration: "7:53", videoId: "T94PHkuydcw", mood: "Rockstar" },
  { id: 202, title: "Nadaan Parinde", artist: "A.R. Rahman, Mohit Chauhan", film: "Rockstar", year: 2011, duration: "6:26", videoId: "6MgsHSAcI9k", mood: "Rockstar" },
  { id: 203, title: "Phir Se Udd Chala", artist: "Mohit Chauhan", film: "Rockstar", year: 2011, duration: "4:31", videoId: "-3gQ6HIkRys", mood: "Rockstar" },
  { id: 204, title: "Tum Ho", artist: "Mohit Chauhan, Suzanne D'Mello", film: "Rockstar", year: 2011, duration: "5:18", videoId: "xnfggj-uo94", mood: "Rockstar" },
  { id: 205, title: "Jo Bhi Main", artist: "Mohit Chauhan", film: "Rockstar", year: 2011, duration: "4:35", videoId: "sK7riqg2mr4", mood: "Rockstar" },
  { id: 206, title: "Sadda Haq", artist: "Mohit Chauhan, Orianthi", film: "Rockstar", year: 2011, duration: "6:05", videoId: "p9DQINKZxWE", mood: "Rockstar" },
  { id: 207, title: "Hawaa Hawaa", artist: "Mohit Chauhan", film: "Rockstar", year: 2011, duration: "5:42", videoId: "0W1hGx5CChI", mood: "Rockstar" },
  { id: 208, title: "Aur Ho", artist: "Mohit Chauhan, Alma Ferovic", film: "Rockstar", year: 2011, duration: "5:35", videoId: "Tw8iApinXoU", mood: "Rockstar" },
  { id: 209, title: "Katiya Karun", artist: "Harshdeep Kaur, Sapna Awasthi", film: "Rockstar", year: 2011, duration: "3:59", videoId: "-YpTzDU7ZF4", mood: "Rockstar" },
  { id: 210, title: "Sheher Mein", artist: "Mohit Chauhan, Javed Ali", film: "Rockstar", year: 2011, duration: "4:03", videoId: "Igo8_eK7z9g", mood: "Rockstar" },
  { id: 211, title: "Bulleya", artist: "Amit Mishra, Shilpa Rao", film: "Ae Dil Hai Mushkil", year: 2016, duration: "5:49", videoId: "zRtPUIumXcY", mood: "Rockstar" },
  { id: 212, title: "Maahi Ve", artist: "A.R. Rahman", film: "Highway", year: 2014, duration: "4:00", videoId: "S1aQhVUy_9g", mood: "Rockstar" },
  { id: 213, title: "Zinda", artist: "Amit Trivedi", film: "Lootera", year: 2013, duration: "4:01", videoId: "OWtDLQY_p4Y", mood: "Rockstar" },
  { id: 214, title: "Udta Punjab", artist: "Amit Trivedi, Vishal Dadlani", film: "Udta Punjab", year: 2016, duration: "4:35", videoId: "AV6HMdxnMJc", fallbackVideoIds: ["xnOUGkqOJwE"], mood: "Rockstar" },
  { id: 215, title: "Bulleya (Sultan)", artist: "Papon", film: "Sultan", year: 2016, duration: "5:57", videoId: "a9Hxkc9YxGE", fallbackVideoIds: ["_51KXfwcPMs", "ZAxQXdEX_Hk"], mood: "Rockstar" }
];

// ----------------------------------------------------
// 3. METRO & LATE NIGHT NOSTALGIA
// ----------------------------------------------------
export const METRO_NOSTALGIA_TRACKS: Track[] = [
  { id: 301, title: "In Dino", artist: "Soham Chakraborty", film: "Life in a... Metro", year: 2007, duration: "6:39", videoId: "P7JyrhGnjhg", mood: "Metro & Late Night" },
  { id: 302, title: "Alvida", artist: "KK", film: "Life in a... Metro", year: 2007, duration: "5:40", videoId: "hM9QDpLHhdw", mood: "Metro & Late Night" },
  { id: 303, title: "Alvida (Reprise)", artist: "James", film: "Life in a... Metro", year: 2007, duration: "5:51", videoId: "MLTr1K7aSqk", fallbackVideoIds: ["npSm9KG-d5A"], mood: "Metro & Late Night" },
  { id: 304, title: "O Meri Jaan", artist: "KK", film: "Life in a... Metro", year: 2007, duration: "4:59", videoId: "jZi8TI050ec", mood: "Metro & Late Night" },
  { id: 305, title: "O Meri Jaan (Reprise)", artist: "Suhail Kaul", film: "Life in a... Metro", year: 2007, duration: "5:13", videoId: "kuhdyHPEgN0", fallbackVideoIds: ["j_Ne4n-vuD4"], mood: "Metro & Late Night" },
  { id: 306, title: "Rishte", artist: "James", film: "Life in a... Metro", year: 2007, duration: "5:30", videoId: "I4IWXQwQaM0", fallbackVideoIds: ["g0UuCejfOHM"], mood: "Metro & Late Night" },
  { id: 307, title: "Baatein Kuch Ankahee Si", artist: "KK", film: "Life in a... Metro", year: 2007, duration: "4:12", videoId: "yFPOTgmpQr8", mood: "Metro & Late Night" },
  { id: 308, title: "Kar Salaam", artist: "Soham, Pritam, Suhail Kaul", film: "Life in a... Metro", year: 2007, duration: "4:24", videoId: "f9CVLBlcOjM", mood: "Metro & Late Night" },
  { id: 309, title: "Choo Lo", artist: "The Local Train", year: 2015, duration: "3:53", videoId: "sFMRqxCexDk", mood: "Metro & Late Night" },
  { id: 310, title: "Aaoge Tum Kabhi", artist: "The Local Train", year: 2015, duration: "5:14", videoId: "i96UO8-GFvw", fallbackVideoIds: ["hvKaPTmQBA8"], mood: "Metro & Late Night" },
  { id: 311, title: "The Night We Met", artist: "Lord Huron", year: 2015, duration: "3:28", videoId: "KtlgYxa6BMU", mood: "Metro & Late Night" },
  { id: 312, title: "Tune Jo Na Kaha", artist: "Mohit Chauhan", film: "New York", year: 2009, duration: "5:10", videoId: "HRSxyUM5L9s", mood: "Metro & Late Night" },
  { id: 313, title: "Dooriyan", artist: "Mohit Chauhan", film: "Love Aaj Kal", year: 2009, duration: "5:36", videoId: "7z3YeFqd7xQ", mood: "Metro & Late Night" },
  { id: 314, title: "Labon Ko", artist: "KK", film: "Bhool Bhulaiyaa", year: 2007, duration: "5:42", videoId: "0OGguI0uDfE", mood: "Metro & Late Night" },
  { id: 315, title: "Beete Lamhein", artist: "KK", film: "The Train", year: 2007, duration: "5:26", videoId: "dkTok8ikw_4", mood: "Metro & Late Night" },
  { id: 316, title: "Bin Tere", artist: "Shafqat Amanat Ali, Sunidhi Chauhan", film: "I Hate Luv Storys", year: 2010, duration: "5:29", videoId: "pGuc4hPhiKw", mood: "Metro & Late Night" },
  { id: 317, title: "Past Lives", artist: "sapientdream", year: 2020, duration: "2:30", videoId: "FPoeEA0yu08", fallbackVideoIds: ["YOE9nBu9Ib8"], mood: "Metro & Late Night" },
  { id: 318, title: "A Man Without Love", artist: "Engelbert Humperdinck", year: 1968, duration: "3:19", videoId: "gickf2FkNh8", mood: "Metro & Late Night" },
  { id: 319, title: "Abhi Abhi", artist: "KK, Shreya Ghoshal", film: "Jism 2", year: 2012, duration: "5:43", videoId: "egrV2SC6WfE", mood: "Metro & Late Night" },
  { id: 320, title: "Abhi Kuch Dino Se", artist: "Mohit Chauhan", film: "Dil Toh Bachcha Hai Ji", year: 2011, duration: "4:47", videoId: "SriqJuz2PWU", mood: "Metro & Late Night" },
  { id: 321, title: "Pal (Hum Rahe Ya Na Rahe Kal)", artist: "KK", film: "Pal", year: 1999, duration: "5:59", videoId: "NUqlCJTYu6I", fallbackVideoIds: ["mCCXZmGwArI", "zs67ft7_rcs"], mood: "Metro & Late Night" },
  // Metro... In Dino (2025)
  { id: 322, title: "Dil Ka Kya", artist: "Raghav Chaitanya, Pritam", film: "Metro... In Dino", year: 2025, duration: "5:58", videoId: "uMS2YXQgKTg", fallbackVideoIds: ["uNvy4KZviDU"], mood: "Metro & Late Night" },
  { id: 323, title: "Zamaana Lage", artist: "Arijit Singh, Shashwat Singh, Pritam", film: "Metro... In Dino", year: 2025, duration: "3:16", videoId: "m8kaNWu-BC4", fallbackVideoIds: ["zHl_ZKq0NNs"], mood: "Metro & Late Night" },
  { id: 324, title: "Aur Mohabbat Kitni Karoon", artist: "Arijit Singh, Pritam", film: "Metro... In Dino", year: 2025, duration: "4:17", videoId: "XQ9qYw3PTdg", fallbackVideoIds: ["Uuce4UaHGQg"], mood: "Metro & Late Night" },
  { id: 325, title: "Mausam", artist: "Arijit Singh, Pritam", film: "Metro... In Dino", year: 2025, duration: "4:10", videoId: "GRxqJgityTU", fallbackVideoIds: ["muEaK_Sg8Ns"], mood: "Metro & Late Night" },
  { id: 326, title: "Mann Ye Mera", artist: "Vishal Mishra, Pritam", film: "Metro... In Dino", year: 2025, duration: "4:11", videoId: "XjRFk1Qq2Nw", fallbackVideoIds: ["-dg19xX4PIo"], mood: "Metro & Late Night" },
  { id: 327, title: "Qayde Se", artist: "Arijit Singh, Pritam", film: "Metro... In Dino", year: 2025, duration: "3:56", videoId: "QRwLbf3PwO8", fallbackVideoIds: ["t4mBEeAA1hU"], mood: "Metro & Late Night" },
  { id: 328, title: "Qayde Se (Rewind)", artist: "Shreya Ghoshal, Pritam", film: "Metro... In Dino", year: 2025, duration: "3:34", videoId: "OU1QOWvXd1M", fallbackVideoIds: ["-lhezL393KY"], mood: "Metro & Late Night" },
  { id: 329, title: "Yaad", artist: "Papon, Pritam", film: "Metro... In Dino", year: 2025, duration: "4:40", videoId: "f1EBSLyiGnk", fallbackVideoIds: ["hj_ex4jSlZI"], mood: "Metro & Late Night" },
  // Evergreen Classics added
  { id: 330, title: "Ruk Jana Nahin / O Janewali", artist: "Kishore Kumar", film: "Imtihan", year: 1974, duration: "6:03", videoId: "kuaY_qKBUAM", fallbackVideoIds: ["9XhkhCMHU7I", "TYOhxVUCe-A"], mood: "Metro & Late Night" },
  { id: 331, title: "Main Pal Do Pal Ka Shair Hoon", artist: "Mukesh", film: "Kabhi Kabhie", year: 1976, duration: "3:28", videoId: "QkGqpVYjLUw", fallbackVideoIds: ["kxT-5glSScc", "RIIy7SsonwM"], mood: "Metro & Late Night" },
  { id: 332, title: "Tum Ko Dekha Toh Yeh Khayal", artist: "Jagjit Singh, Chitra Singh", film: "Saath Saath", year: 1982, duration: "4:50", videoId: "WtPbNKk9XpU", fallbackVideoIds: ["PnH56Koh_TY", "Jc9PBgHwdII"], mood: "Metro & Late Night" },
  { id: 333, title: "Chhookar Mere Man Ko", artist: "Kishore Kumar", film: "Yaarana", year: 1981, duration: "4:14", videoId: "BOLYNw3x1lE", fallbackVideoIds: ["4w9FBmbCfws", "smBX9WxLJho"], mood: "Metro & Late Night" },
  { id: 334, title: "Piano Man", artist: "Billy Joel", year: 1973, duration: "5:38", videoId: "gxEPV4kolz0", fallbackVideoIds: ["QwVjTlTdIDQ", "vUq205F41jY"], mood: "Metro & Late Night" }
];

// ----------------------------------------------------
// 4. SUFI & SOULFUL DEVOTION
// ----------------------------------------------------
export const SUFI_SOUL_TRACKS: Track[] = [
  { id: 401, title: "Tu Jhoom", artist: "Abida Parveen & Naseebo Lal", film: "Coke Studio Season 14", year: 2022, duration: "6:58", videoId: "7D4vNcK6D38", mood: "Sufi & Soul" },
  { id: 402, title: "Afreen Afreen", artist: "Rahat Fateh Ali Khan, Momina Mustehsan", film: "Coke Studio Season 9", year: 2016, duration: "6:45", videoId: "kw4tT7SCmaY", mood: "Sufi & Soul" },
  { id: 403, title: "Namo Namo", artist: "Amit Trivedi", film: "Kedarnath", year: 2018, duration: "5:22", videoId: "Z_-lSJg52NU", mood: "Sufi & Soul" },
  { id: 404, title: "Bhar Do Jholi Meri", artist: "Adnan Sami", film: "Bajrangi Bhaijaan", year: 2015, duration: "8:19", videoId: "zk0-f92gg9A", mood: "Sufi & Soul" },
  { id: 405, title: "Matkar Maya Ko Ahankar", artist: "Kabir Cafe", film: "Scam 1992", year: 2020, duration: "4:07", videoId: "NhSfvteJ234", mood: "Sufi & Soul" },
  { id: 406, title: "Chaap Tilak", artist: "Abida Parveen & Rahat Fateh Ali Khan", film: "Coke Studio Season 7", year: 2014, duration: "7:44", videoId: "7SDrjwtfKMk", mood: "Sufi & Soul" },
  { id: 407, title: "Paar Chanaa De", artist: "Shilpa Rao, Noori", film: "Coke Studio Season 9", year: 2016, duration: "8:00", videoId: "TrPvQvbp3Cg", mood: "Sufi & Soul" },
  { id: 408, title: "Pasoori", artist: "Ali Sethi, Shae Gill", film: "Coke Studio Season 14", year: 2022, duration: "3:44", videoId: "5Eqb_-j3FDA", mood: "Sufi & Soul" },
  { id: 409, title: "Khalasi", artist: "Aditya Gadhvi, Achint", film: "Coke Studio Bharat", year: 2023, duration: "4:18", videoId: "t7wSjy9Lv-o", mood: "Sufi & Soul" },
  { id: 410, title: "O Rangrez", artist: "Javed Bashir, Shreya Ghoshal", film: "Bhaag Milkha Bhaag", year: 2013, duration: "6:25", videoId: "jmpUP1MaQ9Q", mood: "Sufi & Soul" },
  { id: 411, title: "Mera Yaar", artist: "Javed Bashir", film: "Bhaag Milkha Bhaag", year: 2013, duration: "5:51", videoId: "ycS5PagXvhQ", mood: "Sufi & Soul" },
  { id: 412, title: "Laathey Di Chaadar", artist: "Quratulain Balouch & Farhan Saeed", film: "Coke Studio Season 10", year: 2017, duration: "5:45", videoId: "SCOKysMnH50", mood: "Sufi & Soul" },
  { id: 413, title: "Laavan", artist: "Jasmine Sandlas ft. Mofusion", year: 2024, duration: "3:18", videoId: "OxXKDGO-MYQ", fallbackVideoIds: ["WuvLbnFG8yg", "LBa_mcAJbsI"], mood: "Sufi & Soul" },
  { id: 414, title: "Ikk Kudi", artist: "Shahid Mallya / Diljit Dosanjh", film: "Udta Punjab", year: 2016, duration: "4:02", videoId: "pAMksXUJjGs", mood: "Sufi & Soul" },
  { id: 415, title: "Piya Ghar Aavenge", artist: "Kailash Kher", year: 2012, duration: "6:03", videoId: "JSLHveDmdjY", mood: "Sufi & Soul" },
  { id: 416, title: "Tum Tak", artist: "Javed Ali, Pooja Vaidyanath", film: "Raanjhanaa", year: 2013, duration: "5:04", videoId: "_vFaCY9XaIQ", mood: "Sufi & Soul" },
  { id: 417, title: "Raanjhanaa", artist: "Jaswinder Singh, Shiraz Uppal", film: "Raanjhanaa", year: 2013, duration: "5:30", videoId: "vgm1u2gPxzw", mood: "Sufi & Soul" },
  { id: 418, title: "Ye Tune Kya Kiya", artist: "Javed Bashir", film: "OUATIMD", year: 2013, duration: "5:14", videoId: "4yZ-mn0u8NE", mood: "Sufi & Soul" },
  { id: 419, title: "Do Din Ki Zindagi", artist: "Talat Mahmood / Kabir Bhajan", year: 1954, duration: "3:24", videoId: "kIz-mbakcDI", mood: "Sufi & Soul" },
  { id: 420, title: "Valhav Re Nakhawa (Mi Dolkar)", artist: "Lata Mangeshkar, Hemant Kumar", film: "Marathi Classic", year: 1958, duration: "3:30", videoId: "fNnnHDBLU6U", fallbackVideoIds: ["lfX9GBrGdak", "vo2YYIfn_wQ"], mood: "Sufi & Soul" }
];

// ----------------------------------------------------
// 5. HEARTFELT ROMANCE & CLASSIC HINDI VIBES
// ----------------------------------------------------
export const ROMANCE_TRACKS: Track[] = [
  // Kedarnath & Romance Specials
  { id: 500, title: "Aaj Din Chadheya", artist: "Rahat Fateh Ali Khan", film: "Love Aaj Kal", year: 2009, duration: "5:17", videoId: "IImcBEHuDRI", mood: "Romance" },
  { id: 501, title: "Qaafirana", artist: "Arijit Singh, Nikhita Gandhi", film: "Kedarnath", year: 2018, duration: "5:42", videoId: "0wDvr7vipbI", mood: "Romance" },
  { id: 502, title: "Jaan 'Nisaar", artist: "Arijit Singh", film: "Kedarnath", year: 2018, duration: "3:58", videoId: "vdbP_3o73qI", mood: "Romance" },
  { id: 503, title: "Saathiya", artist: "Sonu Nigam", film: "Saathiya", year: 2002, duration: "5:57", videoId: "taSv__vPt6Y", mood: "Romance" },
  { id: 504, title: "Theher Ja", artist: "Armaan Malik", film: "October", year: 2018, duration: "2:40", videoId: "_FnTuCPVWPE", mood: "Romance" },
  { id: 505, title: "Jogi", artist: "Yasser Desai, Aakanksha Sharma", film: "Shaadi Mein Zaroor Aana", year: 2017, duration: "4:33", videoId: "q5gGKGyQM9Y", mood: "Romance" },
  { id: 506, title: "Woh Ladki", artist: "Arijit Singh", film: "Andhadhun", year: 2018, duration: "4:12", videoId: "vhwmR4LcHpM", mood: "Romance" },
  { id: 507, title: "Do Pal", artist: "Lata Mangeshkar, Sonu Nigam", film: "Veer-Zaara", year: 2004, duration: "4:27", videoId: "HPsxxBhv9kc", mood: "Romance" },
  { id: 508, title: "Pal Pal Dil Ke Paas", artist: "Arijit Singh, Parampara Thakur", film: "Pal Pal Dil Ke Paas", year: 2019, duration: "4:14", videoId: "lgTHGZF3BQw", mood: "Romance" },
  // Ramaiya Vastavaiya Romance Tracks
  { id: 509, title: "Jeene Laga Hoon", artist: "Atif Aslam, Shreya Ghoshal", film: "Ramaiya Vastavaiya", year: 2013, duration: "3:57", videoId: "pkzOBl1p7y4", fallbackVideoIds: ["aoJxD8xn3CY", "VhRwuWp4MQ8"], mood: "Romance" },
  { id: 510, title: "Rang Jo Lagyo", artist: "Atif Aslam, Shreya Ghoshal", film: "Ramaiya Vastavaiya", year: 2013, duration: "4:58", videoId: "LlI1IkgP6BQ", fallbackVideoIds: ["2vmMcIRNGLI", "u9urCRum8_I"], mood: "Romance" },
  // Aashiqui 2 Complete Catalog
  { id: 511, title: "Tum Hi Ho", artist: "Arijit Singh", film: "Aashiqui 2", year: 2013, duration: "4:22", videoId: "Umqb9KENgmk", mood: "Romance" },
  { id: 512, title: "Sunn Raha Hai", artist: "Ankit Tiwari", film: "Aashiqui 2", year: 2013, duration: "6:30", videoId: "z3UHfi9vpbc", mood: "Romance" },
  { id: 513, title: "Chahun Main Ya Naa", artist: "Arijit Singh, Palak Muchhal", film: "Aashiqui 2", year: 2013, duration: "5:04", videoId: "VdyBtGaspss", mood: "Romance" },
  { id: 514, title: "Hum Mar Jayenge", artist: "Arijit Singh, Tulsi Kumar", film: "Aashiqui 2", year: 2013, duration: "5:06", videoId: "krJsyb_yf7A", mood: "Romance" },
  { id: 515, title: "Meri Aashiqui", artist: "Arijit Singh, Palak Muchhal", film: "Aashiqui 2", year: 2013, duration: "4:26", videoId: "3gRQ5a2nyAw", mood: "Romance" },
  { id: 516, title: "Piya Aaye Na", artist: "KK, Tulsi Kumar", film: "Aashiqui 2", year: 2013, duration: "4:46", videoId: "2bMEe0UYa8E", mood: "Romance" },
  { id: 517, title: "Bhula Dena", artist: "Mustafa Zahid", film: "Aashiqui 2", year: 2013, duration: "4:00", videoId: "II4CvWvgIsI", mood: "Romance" },
  { id: 518, title: "Milne Hai Mujhse Aayi", artist: "Arijit Singh", film: "Aashiqui 2", year: 2013, duration: "4:55", videoId: "GtPvCa3vvxA", mood: "Romance" },
  { id: 519, title: "Aasan Nahin Yahan", artist: "Arijit Singh", film: "Aashiqui 2", year: 2013, duration: "3:34", videoId: "0-UNAItGfTE", mood: "Romance" },
  // 2 States Complete Catalog
  { id: 520, title: "Mast Magan", artist: "Arijit Singh, Chinmayi Sripada", film: "2 States", year: 2014, duration: "4:40", videoId: "fXRvluHnjxE", mood: "Romance" },
  { id: 521, title: "Chaandaniya", artist: "K Mohan, Yashita Sharma", film: "2 States", year: 2014, duration: "4:07", videoId: "h-zueoz5yF0", mood: "Romance" },
  { id: 522, title: "Offo", artist: "Benny Dayal, Aditi Singh Sharma", film: "2 States", year: 2014, duration: "3:34", videoId: "YPlIhgAX9AQ", mood: "Romance" },
  { id: 523, title: "Locha-E-Ulfat", artist: "Benny Dayal", film: "2 States", year: 2014, duration: "4:48", videoId: "G6RR2_NQ530", mood: "Romance" },
  { id: 524, title: "Iski Uski", artist: "Shahid Mallya, Akriti Kakar", film: "2 States", year: 2014, duration: "4:14", videoId: "xQMMBANbcdQ", mood: "Romance" },
  { id: 525, title: "Ullam Paadum", artist: "K.S. Chithra", film: "2 States", year: 2014, duration: "1:47", videoId: "e8dLwwJ1dsE", mood: "Romance" },
  // Romantic & Soul Classics
  { id: 526, title: "Saibo", artist: "Shreya Ghoshal, Tochi Raina", film: "Shor in the City", year: 2011, duration: "3:16", videoId: "9Bmh6vaQt0s", mood: "Romance" },
  { id: 527, title: "Monta Re", artist: "Swanand Kirkire, Amitabh Bhattacharya", film: "Lootera", year: 2013, duration: "3:58", videoId: "K6cjoEGIqqs", mood: "Romance" },
  { id: 528, title: "Sawaar Loon", artist: "Monali Thakur", film: "Lootera", year: 2013, duration: "4:15", videoId: "Cw6icm3-mvA", mood: "Romance" },
  { id: 529, title: "Nazm Nazm", artist: "Arko / Ayushmann Khurrana", film: "Bareilly Ki Barfi", year: 2017, duration: "3:47", videoId: "x5EAZang5f0", mood: "Romance" },
  { id: 530, title: "Bairagi", artist: "Samira Koppikar, Ayushmann Khurrana", film: "Bareilly Ki Barfi", year: 2017, duration: "4:12", videoId: "OSpxSpeVecM", mood: "Romance" },
  { id: 531, title: "Zehnaseeb", artist: "Chinmayi Sripaada, Shekhar Ravjiani", film: "Hasee Toh Phasee", year: 2014, duration: "3:37", videoId: "WnU0lH6C0EA", mood: "Romance" },
  { id: 532, title: "Manchala", artist: "Shafqat Amanat Ali, Nupur Pant", film: "Hasee Toh Phasee", year: 2014, duration: "3:48", videoId: "Xl7iWxPvpA4", mood: "Romance" },
  { id: 533, title: "Darkhaast", artist: "Arijit Singh, Sunidhi Chauhan", film: "Shivaay", year: 2016, duration: "6:14", videoId: "dIVpJEKYNq4", mood: "Romance" },
  { id: 534, title: "Raabta", artist: "Arijit Singh, Hamsika Iyer", film: "Agent Vinod", year: 2012, duration: "4:04", videoId: "tbXNVm8CXxg", mood: "Romance" },
  { id: 535, title: "Saware", artist: "Arijit Singh", film: "Phantom", year: 2015, duration: "5:21", videoId: "CsOsmgUmT9U", mood: "Romance" },
  { id: 536, title: "Aayat", artist: "Arijit Singh", film: "Bajirao Mastani", year: 2015, duration: "4:22", videoId: "vKDsAB1ccn0", mood: "Romance" },
  { id: 537, title: "Ek Dil Ek Jaan", artist: "Shivam Pathak", film: "Padmaavat", year: 2018, duration: "3:40", videoId: "of-JEQ6yIEY", mood: "Romance" },
  { id: 538, title: "Tose Naina", artist: "Arijit Singh", film: "Mickey Virus", year: 2013, duration: "4:25", videoId: "29YRI-6low0", mood: "Romance" },
  { id: 539, title: "Maan Mera", artist: "Gajendra Verma", film: "Table No. 21", year: 2013, duration: "3:22", videoId: "SlHnlxDt2TQ", mood: "Romance" },
  { id: 540, title: "Saudebazi", artist: "Anupam Amod, Javed Ali", film: "Aakrosh", year: 2010, duration: "5:32", videoId: "icReENFVXYY", mood: "Romance" },
  { id: 541, title: "Dil Ye Bekarar Kyun Hai", artist: "Mohit Chauhan, Shreya Ghoshal", film: "Players", year: 2012, duration: "4:59", videoId: "zjnDDyyxQVc", mood: "Romance" },
  { id: 542, title: "Tera Rastaa Chhodoon Na", artist: "Vishal Dadlani, Anusha Mani", film: "Chennai Express", year: 2013, duration: "4:15", videoId: "2PMWLyB4WYo", mood: "Romance" },
  { id: 543, title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", film: "Yeh Jawaani Hai Deewani", year: 2013, duration: "3:43", videoId: "jHNNMj5bNQw", mood: "Romance" },
  { id: 544, title: "Alizeh", artist: "Arijit Singh, Ash King", film: "Ae Dil Hai Mushkil", year: 2016, duration: "4:42", videoId: "Bu2JHWqO6Qc", mood: "Romance" },
  { id: 545, title: "Iktara", artist: "Amit Trivedi, Kavita Seth, Tochi Raina", film: "Wake Up Sid", year: 2009, duration: "4:13", videoId: "fSS_R91Nimw", mood: "Romance" },
  { id: 546, title: "Daryaa", artist: "Ammy Virk, Shahid Mallya", film: "Manmarziyaan", year: 2018, duration: "4:56", videoId: "74pvvZAE5_c", mood: "Romance" },
  { id: 547, title: "Aashiq Tera", artist: "Altamash Faridi", film: "Happy Bhag Jayegi", year: 2016, duration: "4:56", videoId: "emh8zR4ZqZ0", mood: "Romance" },
  { id: 548, title: "Tere Naina (CC2C)", artist: "Shankar Mahadevan, Shreya Ghoshal", film: "Chandni Chowk to China", year: 2009, duration: "5:26", videoId: "GYgnPrmbxH4", mood: "Romance" },
  { id: 549, title: "Aabaad Barbaad", artist: "Arijit Singh", film: "Ludo", year: 2020, duration: "5:09", videoId: "jh66Pjtqr4k", mood: "Romance" },
  { id: 550, title: "Hardum Humdum", artist: "Arijit Singh", film: "Ludo", year: 2020, duration: "3:08", videoId: "rl7RO7QpVrw", mood: "Romance" },
  { id: 551, title: "Maana Ke Hum Yaar Nahin", artist: "Parineeti Chopra", film: "Meri Pyaari Bindu", year: 2017, duration: "4:25", videoId: "k4R39ofX-CQ", mood: "Romance" },
  // Newly Added Bollywood & Evergreen Romance Hits
  { id: 552, title: "Bairiyaa", artist: "Atif Aslam, Shreya Ghoshal", film: "Ramaiya Vastavaiya", year: 2013, duration: "4:08", videoId: "CW3QJkF_w-U", fallbackVideoIds: ["vfndCiKYO40", "47h-b9v-3go"], mood: "Romance" },
  { id: 553, title: "Tere Naina", artist: "Shafqat Amanat Ali", film: "My Name Is Khan", year: 2010, duration: "4:38", videoId: "Km5AQkh58DU", fallbackVideoIds: ["qYjPxdLIuk0", "uc43tD6-E4U"], mood: "Romance" },
  { id: 554, title: "Jalte Diye", artist: "Harshdeep Kaur, Vineet Singh, Anweshaa", film: "Prem Ratan Dhan Payo", year: 2015, duration: "5:36", videoId: "8wFdbwtr61I", fallbackVideoIds: ["drHkvn1kvSk", "B78jVe9mTCg"], mood: "Romance" },
  { id: 555, title: "Tu Chale", artist: "Arijit Singh, Shreya Ghoshal", film: "I (Hindi)", year: 2015, duration: "5:08", videoId: "iMuZRXsE7KI", fallbackVideoIds: ["jfLlmsUg0c0", "t20CFi5NKMU"], mood: "Romance" },
  { id: 556, title: "Hosanna", artist: "Leon D'Souza, Suzanne D'Mello, A.R. Rahman", film: "Ekk Deewana Tha", year: 2012, duration: "5:31", videoId: "hoHo8h2JOgY", fallbackVideoIds: ["4uH7mC7Gjn0", "b8vDgqGNwKw"], mood: "Romance" },
  { id: 557, title: "Aate Jaate Hanste Gaate", artist: "S.P. Balasubrahmanyam, Lata Mangeshkar", film: "Maine Pyar Kiya", year: 1989, duration: "3:24", videoId: "_LbmnNQVRr8", fallbackVideoIds: ["WGtqzK0VIRc", "PhkADyPektU"], mood: "Romance" },
  { id: 558, title: "Haareya", artist: "Arijit Singh", film: "Meri Pyaari Bindu", year: 2017, duration: "3:34", videoId: "TyMUY2CDrjc", fallbackVideoIds: ["LB5DhtD59fA", "JpSFL_bHtBA"], mood: "Romance" },
  { id: 559, title: "Maana Ke Hum Yaar Nahin (Duet)", artist: "Sonu Nigam, Parineeti Chopra", film: "Meri Pyaari Bindu", year: 2017, duration: "5:27", videoId: "D9N7qAyLofE", fallbackVideoIds: ["k4R39ofX-CQ", "1AtpC4MGdrs"], mood: "Romance" },
  { id: 560, title: "Ishq Bulaava", artist: "Sanam Puri, Shipra Goyal", film: "Hasee Toh Phasee", year: 2014, duration: "5:03", videoId: "c2gSzYLJ8sY", fallbackVideoIds: ["Oo5tqEWm-jM", "ZCRL8V0ZkEA"], mood: "Romance" },
  { id: 561, title: "Main Koi Aisa Geet Gaoon", artist: "Abhijeet, Alka Yagnik", film: "Yes Boss", year: 1997, duration: "5:42", videoId: "vzlXfZlH5dk", fallbackVideoIds: ["76KtfFpogbw", "GAgdtaZjkNI"], mood: "Romance" },
  { id: 562, title: "Ek Din Aap", artist: "Kumar Sanu, Alka Yagnik", film: "Yes Boss", year: 1997, duration: "4:25", videoId: "90Q5bMN6u2w", fallbackVideoIds: ["-yvwawJ9u_M", "HHgVlMrkloQ"], mood: "Romance" },
  { id: 563, title: "Suniye To", artist: "Abhijeet", film: "Yes Boss", year: 1997, duration: "5:10", videoId: "dIk2hz7vm3A", fallbackVideoIds: ["RLFfZJV_gZU", "vZw7c_kblVA"], mood: "Romance" },
  { id: 564, title: "Choodi Baji Hai", artist: "Udit Narayan, Alka Yagnik", film: "Yes Boss", year: 1997, duration: "5:05", videoId: "qL3lApIbHV0", fallbackVideoIds: ["tqXLGtj_Iwo", "toBOKtBMwiY"], mood: "Romance" },
  { id: 565, title: "Ved Lagle Premache", artist: "Swapnil Bandodkar", film: "Duniyadari", year: 2013, duration: "4:10", videoId: "nXJlF-8ds1E", fallbackVideoIds: ["PdR2og6V3DM", "VKpsJJ9rC3I"], mood: "Romance" },
  { id: 566, title: "Kitida Navyane", artist: "Aarya Ambekar, Mandar Apte", film: "Ti Saddhya Kay Karte", year: 2017, duration: "3:45", videoId: "67-z9COlhVc", fallbackVideoIds: ["xdN2gYjcWuM", "g2hGVqkgJyA"], mood: "Romance" }
];

// ----------------------------------------------------
// 6. INDIE CHILL & ACOUSTIC SERENITY
// ----------------------------------------------------
export const INDIE_ACOUSTIC_TRACKS: Track[] = [
  { id: 601, title: "Kasoor", artist: "Prateek Kuhad", year: 2020, duration: "3:17", videoId: "BmUe3-sfr7E", mood: "Indie Chill" },
  { id: 602, title: "CO2", artist: "Prateek Kuhad", year: 2022, duration: "2:42", videoId: "U2SVCCENLjE", mood: "Indie Chill" },
  { id: 603, title: "Line Without a Hook", artist: "Ricky Montgomery", year: 2016, duration: "4:09", videoId: "8JW6qzPCkE8", mood: "Indie Chill" },
  { id: 604, title: "End of Beginning", artist: "Djo", year: 2022, duration: "2:39", videoId: "YoL1kqFdBoY", mood: "Indie Chill" },
  { id: 605, title: "Haseen", artist: "Talwiinder", year: 2022, duration: "3:30", videoId: "IltsOcCj1Ak", mood: "Indie Chill" },
  { id: 606, title: "Kho Gaye Hum Kahan", artist: "Jasleen Royal, Prateek Kuhad", film: "Baar Baar Dekho", year: 2016, duration: "4:12", videoId: "ymhHUEPEKwQ", mood: "Indie Chill" },
  { id: 607, title: "Sang Rahiyo", artist: "Jasleen Royal, Ujjwal Kashyap", year: 2020, duration: "3:39", videoId: "8PTOkwze0Vw", mood: "Indie Chill" },
  { id: 608, title: "Piya", artist: "Khwaab, Divyam Sodhi, Likhari", year: 2024, duration: "3:30", videoId: "Y1WpScqiCbg", fallbackVideoIds: ["C1EUNTUBWjc"], mood: "Indie Chill" },
  { id: 609, title: "Faasle", artist: "Kaavish / Aditya Rikhari", year: 2021, duration: "4:32", videoId: "JqLFnz7C_Io", mood: "Indie Chill" },
  { id: 610, title: "Tuta Pull Wahan", artist: "Deepak Rathore Project", year: 2017, duration: "4:16", videoId: "HSpXdBbLenk", mood: "Indie Chill" },
  { id: 611, title: "Vaaroon", artist: "Anand Bhaskar, Romy", film: "Mirzapur S1", year: 2020, duration: "3:12", videoId: "s_WCm5PMzmk", mood: "Indie Chill" },
  { id: 612, title: "Vaaroon Forever", artist: "Shreya Ghoshal, Romy, Anand Bhaskar", film: "Mirzapur The Movie", year: 2026, duration: "3:28", videoId: "SQ4jZ-EAL88", mood: "Indie Chill" },
  { id: 613, title: "Ishq Hai", artist: "Anurag Saikia", film: "Mismatched", year: 2020, duration: "3:40", videoId: "i48Vh2jgAFs", mood: "Indie Chill" },
  { id: 614, title: "Madhubala", artist: "Amit Trivedi", year: 2020, duration: "4:24", videoId: "vEmBUhnBtFI", mood: "Indie Chill" },
  { id: 615, title: "Until I Found You", artist: "Stephen Sanchez", year: 2021, duration: "2:57", videoId: "GxldQ9eX2wo", mood: "Indie Chill" },
  { id: 616, title: "Blue", artist: "Yung Kai", year: 2024, duration: "3:12", videoId: "IpFX2vq8HKw", mood: "Indie Chill" },
  { id: 617, title: "Sailor Song", artist: "Gigi Perez", year: 2024, duration: "3:43", videoId: "m0NZ-aH0G1g", mood: "Indie Chill" },
  { id: 618, title: "Let Her Go", artist: "Passenger", year: 2012, duration: "4:14", videoId: "RBumgq5yVrA", mood: "Indie Chill" },
  { id: 619, title: "I Thought I Saw Your Face Today", artist: "She & Him", year: 2008, duration: "2:50", videoId: "pyGU-UudvrM", mood: "Indie Chill" },
  { id: 620, title: "I'll Miss You", artist: "Kushal Chokshi", film: "Secret Superstar", year: 2017, duration: "5:08", videoId: "JXaE6cPaJYo", mood: "Indie Chill" },
  { id: 621, title: "Stay With Me", artist: "Sam Smith", year: 2014, duration: "2:52", videoId: "pB-5XG-DbAA", mood: "Indie Chill" },
  { id: 622, title: "Bairan", artist: "Banjaare ft. Simiran Kaur Dhadli", year: 2023, duration: "3:30", videoId: "n0kh1gSdPFc", mood: "Indie Chill" },
  { id: 623, title: "Let Down", artist: "Radiohead", year: 1997, duration: "4:59", videoId: "-Nrb5ffQckM", fallbackVideoIds: ["ZVgHPSyEIqk"], mood: "Indie Chill" },
  { id: 624, title: "Let Down (Slowed + Reverb)", artist: "Radiohead", year: 1997, duration: "5:45", videoId: "-RFdnFV6MAI", fallbackVideoIds: ["q14ggvfIzec", "-Nrb5ffQckM"], mood: "Indie Chill" },
  // Indie & Marathi Acoustic Gems
  { id: 625, title: "Tune Kaha", artist: "Prateek Kuhad", film: "cold/mess", year: 2018, duration: "3:14", videoId: "miXdVbIm5BY", fallbackVideoIds: ["GqagMyq2hGQ", "mHECzzk9Rto"], mood: "Indie Chill" },
  { id: 626, title: "Kase Sartil Saaye", artist: "Saleel Kulkarni, Sandeep Khare", film: "Ayushyawar Bolu Kahi", year: 2003, duration: "5:15", videoId: "NeFiE-OI-kg", fallbackVideoIds: ["tTcYybPzwWc", "BheQDNoe4gw"], mood: "Indie Chill" },
  { id: 627, title: "Man Talyat Malyat", artist: "Saleel Kulkarni, Sandeep Khare", film: "Sang Sang Bhole Nath", year: 2003, duration: "4:45", videoId: "bshSJf1BHlY", fallbackVideoIds: ["yJ4X6nz2vMQ", "Q8knkYb5lZA"], mood: "Indie Chill" },
  { id: 628, title: "Iss Tarah", artist: "Clinton Cerejo, Dominique Cerejo", film: "Meri Pyaari Bindu", year: 2017, duration: "3:40", videoId: "x3o4lt-56hI", fallbackVideoIds: ["aGKWjgWaIX4", "s4fYA_wkta8"], mood: "Indie Chill" }
];

// ----------------------------------------------------
// 7. DESI DANCE & BANGER BEATS
// ----------------------------------------------------
export const DESI_DANCE_TRACKS: Track[] = [
  { id: 701, title: "Aaj Ki Raat", artist: "Madhubanti Bagchi, Divya Kumar, Sachin-Jigar", film: "Stree 2", year: 2024, duration: "3:48", videoId: "hxMNYkLN7tI", mood: "Desi Dance" },
  { id: 702, title: "Chikni Chameli", artist: "Shreya Ghoshal, Ajay-Atul", film: "Agneepath", year: 2012, duration: "5:03", videoId: "tD7owComuNM", mood: "Desi Dance" },
  // Rowdy Rathore Complete Songs
  { id: 703, title: "Chinta Ta Ta Chita Chita", artist: "Mika Singh, Wajid", film: "Rowdy Rathore", year: 2012, duration: "4:22", videoId: "JhJHom7_6UQ", mood: "Desi Dance" },
  { id: 704, title: "Dhadang Dhang", artist: "Wajid, Shreya Ghoshal", film: "Rowdy Rathore", year: 2012, duration: "4:41", videoId: "1RI9hbzIdPg", mood: "Desi Dance" },
  { id: 705, title: "Aa Re Pritam Pyaare", artist: "Mamta Sharma, Sarosh Sami", film: "Rowdy Rathore", year: 2012, duration: "4:16", videoId: "EY8oryof0bU", mood: "Desi Dance" },
  { id: 706, title: "Chamku", artist: "Sonu Nigam, Shreya Ghoshal", film: "Rowdy Rathore", year: 2012, duration: "4:44", videoId: "lGtDjW3VJYQ", mood: "Desi Dance" },
  { id: 707, title: "Tera Ishq Bada Teekha", artist: "Javed Ali, Shreya Ghoshal", film: "Rowdy Rathore", year: 2012, duration: "4:19", videoId: "QFt7u15H3aA", mood: "Desi Dance" },
  { id: 708, title: "Chandaniya (Lori Lori)", artist: "Shreya Ghoshal", film: "Rowdy Rathore", year: 2012, duration: "3:52", videoId: "ikAsAz3PXTw", mood: "Desi Dance" },
  // Desi Bangers & Item Songs
  { id: 709, title: "Beedi Jalaile", artist: "Sunidhi Chauhan, Sukhwinder Singh", film: "Omkara", year: 2006, duration: "5:05", videoId: "4a6P7iqR31Q", mood: "Desi Dance" },
  { id: 710, title: "Namak Ishq Ka", artist: "Rekha Bhardwaj, Sukhwinder Singh", film: "Omkara", year: 2006, duration: "4:54", videoId: "NJ-N3OjTWA4", fallbackVideoIds: ["5WB8ujhAK7c"], mood: "Desi Dance" },
  { id: 711, title: "Malhari", artist: "Vishal Dadlani", film: "Bajirao Mastani", year: 2015, duration: "4:05", videoId: "l_MyUGq7pgs", mood: "Desi Dance" },
  { id: 712, title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali", film: "Bunty Aur Babli", year: 2005, duration: "8:02", videoId: "4dsFQFCvVGU", mood: "Desi Dance" },
  { id: 713, title: "Kamariya", artist: "Aastha Gill, Divya Kumar", film: "Stree", year: 2018, duration: "3:08", videoId: "9LtJYw1eY30", mood: "Desi Dance" },
  { id: 714, title: "Chuttamalle", artist: "Shilpa Rao, Anirudh Ravichander", film: "Devara", year: 2024, duration: "3:42", videoId: "9jY8PItvMxo", mood: "Desi Dance" },
  { id: 715, title: "Paththavaikkum", artist: "Deepthi Suresh, Anirudh Ravichander", film: "Devara", year: 2024, duration: "3:42", videoId: "okCsCQPJPuc", mood: "Desi Dance" },
  { id: 716, title: "Jugnu", artist: "Badshah, Nikhita Gandhi", year: 2021, duration: "3:51", videoId: "ksY3wb4vtlA", mood: "Desi Dance" },
  // Newly Added Dance & Party Bangers
  { id: 717, title: "Hip Hop Pammi", artist: "Mika Singh, Monali Thakur", film: "Ramaiya Vastavaiya", year: 2013, duration: "3:43", videoId: "QDRrxIcmL9M", fallbackVideoIds: ["btt5XcHQxHo", "Zv4rb8sNICA"], mood: "Desi Dance" },
  { id: 718, title: "Jadu Ki Jhappi", artist: "Neha Kakkar, Mika Singh", film: "Ramaiya Vastavaiya", year: 2013, duration: "3:38", videoId: "sE1sCU0E2Cc", fallbackVideoIds: ["-0oaLjpZFp8", "bm_RkWt2uHk"], mood: "Desi Dance" },
  { id: 719, title: "Bumbro (Bumroo)", artist: "Shankar Mahadevan, Sunidhi Chauhan, Jaspinder Narula", film: "Mission Kashmir", year: 2000, duration: "5:09", videoId: "3JIDlmIrbw8", fallbackVideoIds: ["vz2vQBtFbb8", "MapB_fO-zXM"], mood: "Desi Dance" },
  { id: 720, title: "Drama Queen", artist: "Shreya Ghoshal, Vishal Dadlani", film: "Hasee Toh Phasee", year: 2014, duration: "3:20", videoId: "0Qs-Suk42dY", fallbackVideoIds: ["bMIC6PA9iUE", "6kO3-K3PDU4"], mood: "Desi Dance" },
  { id: 721, title: "Punjabi Wedding Song", artist: "Sunidhi Chauhan, Benny Dayal", film: "Hasee Toh Phasee", year: 2014, duration: "3:53", videoId: "NuTx6Q4151s", fallbackVideoIds: ["1cTarhdZFW4", "YhSqbQh31po"], mood: "Desi Dance" },
  { id: 722, title: "Shake It Like Shammi", artist: "Benny Dayal", film: "Hasee Toh Phasee", year: 2014, duration: "3:25", videoId: "mkPZfrePAxo", fallbackVideoIds: ["h6a5QVNMi24", "JOQTyJBP0T4"], mood: "Desi Dance" },
  { id: 723, title: "Ye Jawaani Teri", artist: "Nakash Aziz, Jonita Gandhi", film: "Meri Pyaari Bindu", year: 2017, duration: "3:12", videoId: "n3gPKbHeaQg", fallbackVideoIds: ["bAmOOfcdsxE", "4Pw7j5dOPk4"], mood: "Desi Dance" }
];

// ----------------------------------------------------
// 8. POP GROOVES, PUNJABI HITS & VIBES
// ----------------------------------------------------
export const POP_GROOVES_TRACKS: Track[] = [
  { id: 801, title: "Die With A Smile", artist: "Lady Gaga, Bruno Mars", year: 2024, duration: "4:11", videoId: "kPa7bsKwL-c", mood: "Pop & Vibes" },
  { id: 802, title: "Softly", artist: "Karan Aujla, Ikky", year: 2023, duration: "2:35", videoId: "-Chif1XK2e8", mood: "Pop & Vibes" },
  { id: 803, title: "Shararat", artist: "Madhubanti Bagchi, Jasmine Sandlas", film: "Dhurandhar", year: 2024, duration: "3:48", videoId: "emCF66u7BHk", mood: "Pop & Vibes" },
  { id: 804, title: "Thodi Si Daaru", artist: "AP Dhillon & Shreya Ghoshal", year: 2025, duration: "3:10", videoId: "_sKlDUFzMJ0", mood: "Pop & Vibes" },
  { id: 805, title: "Forever Young", artist: "Alphaville / Jay-Z", year: 1984, duration: "3:45", videoId: "t1TcDHrkQYg", mood: "Pop & Vibes" },
  { id: 806, title: "Levitating", artist: "Dua Lipa", year: 2020, duration: "3:23", videoId: "TUVcZfQe-Kw", mood: "Pop & Vibes" },
  { id: 807, title: "One Kiss", artist: "Calvin Harris, Dua Lipa", year: 2018, duration: "3:34", videoId: "DkeiKbqa02g", mood: "Pop & Vibes" },
  { id: 808, title: "No Lie", artist: "Sean Paul ft. Dua Lipa", year: 2016, duration: "3:41", videoId: "W3Cky5s5E94", mood: "Pop & Vibes" },
  { id: 809, title: "Cupid (Twin Ver.)", artist: "FIFTY FIFTY", year: 2023, duration: "2:54", videoId: "Qc7_zRjH808", mood: "Pop & Vibes" },
  { id: 810, title: "Somebody That I Used To Know", artist: "Gotye ft. Kimbra", year: 2011, duration: "4:03", videoId: "8UVNT4wvIGY", mood: "Pop & Vibes" },
  { id: 811, title: "The Winner Takes It All", artist: "ABBA", year: 1980, duration: "4:56", videoId: "92cwKCU8Z5c", mood: "Pop & Vibes" },
  { id: 812, title: "Be My Baby", artist: "The Ronettes", year: 1963, duration: "2:40", videoId: "jSPpbOGnFgk", mood: "Pop & Vibes" },
  { id: 813, title: "Senorita", artist: "Shawn Mendes, Camila Cabello", year: 2019, duration: "3:11", videoId: "Pkh8UtuejGw", mood: "Pop & Vibes" },
  { id: 814, title: "Boyfriend", artist: "Justin Bieber", year: 2012, duration: "2:51", videoId: "xYoxBQ03wUQ", mood: "Pop & Vibes" },
  { id: 815, title: "Admirin' You", artist: "Karan Aujla ft. Preston Pablo", year: 2023, duration: "3:37", videoId: "k85UB5b6pJU", mood: "Pop & Vibes" },
  { id: 816, title: "Jind Mahi", artist: "Malkit Singh", year: 2005, duration: "4:15", videoId: "l9zkutOzkBI", mood: "Pop & Vibes" },
  { id: 817, title: "Liggi", artist: "Ritviz", year: 2019, duration: "3:01", videoId: "6BYIKEH0RCQ", mood: "Pop & Vibes" },
  { id: 818, title: "Ghodey Pe Sawaar", artist: "Sireesha Bhagavatula, Amit Trivedi", film: "Qala", year: 2022, duration: "3:13", videoId: "oImihXIacbI", mood: "Pop & Vibes" },
  { id: 819, title: "Naina Da Kya Kasoor", artist: "Amit Trivedi", film: "Andhadhun", year: 2018, duration: "3:30", videoId: "WfDFWLZgQwE", mood: "Pop & Vibes" },
  { id: 820, title: "Ambarsariya", artist: "Sona Mohapatra", film: "Fukrey", year: 2013, duration: "4:08", videoId: "9UDkYz64ehA", mood: "Pop & Vibes" },
  { id: 821, title: "Kabhi Kabhi Aditi", artist: "Rashid Ali", film: "Jaane Tu... Ya Jaane Na", year: 2008, duration: "3:41", videoId: "AX7t8ZwroHQ", mood: "Pop & Vibes" },
  { id: 822, title: "Mileya Mileya", artist: "Rekha Bhardwaj, Jigar Saraiya", film: "Happy Ending", year: 2014, duration: "4:28", videoId: "zDtvoZAHVTY", mood: "Pop & Vibes" },
  { id: 823, title: "Shubhaarambh", artist: "Amit Trivedi, Shruti Pathak", film: "Kai Po Che", year: 2013, duration: "3:56", videoId: "j7oHbNWpau8", mood: "Pop & Vibes" },
  { id: 824, title: "Tu Hi Tu", artist: "Salman Khan / Mohd Irfan", film: "Kick", year: 2014, duration: "5:30", videoId: "tmFbdMuoL2c", mood: "Pop & Vibes" },
  { id: 825, title: "Uff Teri Adaa", artist: "Shankar Mahadevan, Alyssa", film: "Karthik Calling Karthik", year: 2010, duration: "5:04", videoId: "qTsAdjULqwg", mood: "Pop & Vibes" },
  { id: 826, title: "Jiya Lage Na", artist: "Sona Mohapatra", film: "Talaash", year: 2012, duration: "4:36", videoId: "3quthi1mGvI", mood: "Pop & Vibes" },
  { id: 827, title: "Boyfriend", artist: "Karan Aujla, Ikky, Sunanda Sharma", year: 2025, duration: "2:42", videoId: "5GCfYLguTIs", fallbackVideoIds: ["RYXUA32Dx4k", "zEIYKXitZPg"], mood: "Pop & Vibes" },
  { id: 828, title: "Stay With Me (Club Mix)", artist: "Miki Matsubara", year: 1979, duration: "5:12", videoId: "QNYT9wVwQ8A", fallbackVideoIds: ["nuU2YHtxMik"], mood: "Pop & Vibes" },
  // Newly Added Pop & Upbeat Hits
  { id: 829, title: "Peecha Chhute", artist: "Mohit Chauhan", film: "Ramaiya Vastavaiya", year: 2013, duration: "3:36", videoId: "m8-IaThi6JA", fallbackVideoIds: ["Phl0srBN37E", "3-VLKuWhQgY"], mood: "Pop & Vibes" },
  { id: 830, title: "Saadi Gali Aaja", artist: "Ayushmann Khurrana, Neeti Mohan", film: "Nautanki Saala!", year: 2013, duration: "4:15", videoId: "cU3IO6Am65o", fallbackVideoIds: ["kut3TKQFO0w", "EWTMszisKyU"], mood: "Pop & Vibes" },
  { id: 831, title: "Chaand Taare", artist: "Abhijeet", film: "Yes Boss", year: 1997, duration: "4:48", videoId: "p2pHdf9_zc8", fallbackVideoIds: ["wO1L7DnPft8", "N3QzaUwml5w"], mood: "Pop & Vibes" },
  { id: 832, title: "Jaata Hai Tu Kahan", artist: "Abhijeet", film: "Yes Boss", year: 1997, duration: "4:38", videoId: "5eBdiIBvcF8", fallbackVideoIds: ["QBXZDYihmx4", "FP1WJ1_BnDc"], mood: "Pop & Vibes" },
  { id: 833, title: "Wellerman (Sea Shanty)", artist: "Nathan Evans", year: 2021, duration: "2:35", videoId: "qP-7GNoDJ5c", fallbackVideoIds: ["M26V1IWAP-E", "nk8nS8s6a9g", "SLiTW0EC0yo"], mood: "Pop & Vibes" }
];

// ----------------------------------------------------
// COMPLETE MASTER VAULT (All distinct songs)
// ----------------------------------------------------
export const ALL_VAULT_TRACKS: Track[] = [
  ...WANDERLUST_TRACKS,
  ...ROCKSTAR_TRACKS,
  ...METRO_NOSTALGIA_TRACKS,
  ...SUFI_SOUL_TRACKS,
  ...ROMANCE_TRACKS,
  ...INDIE_ACOUSTIC_TRACKS,
  ...DESI_DANCE_TRACKS,
  ...POP_GROOVES_TRACKS
];

// Mood Playlist Configurations
export const PLAYLISTS: Playlist[] = [
  {
    id: "all",
    name: "All Vault Songs",
    tagline: `All ${ALL_VAULT_TRACKS.length} Songs`,
    icon: "🌟",
    description: "Every single song from your custom playlist with real-time search & shuffle.",
    tracks: ALL_VAULT_TRACKS
  },
  {
    id: "romance",
    name: "Romance & Melodies",
    tagline: "Love Anthems & Heartfelt Classics",
    icon: "❤️",
    description: "Jeene Laga Hoon, Rang Jo Lagyo, Tere Naina, Saathiya, Qaafirana, Jaan Nisaar, Aashiqui 2, 2 States, Main Koi Aisa Geet Gaoon & more.",
    tracks: ROMANCE_TRACKS
  },
  {
    id: "dance",
    name: "Desi Dance & Bangers",
    tagline: "High Energy & Party Beats",
    icon: "🔥",
    description: "Aaj Ki Raat, Chikni Chameli, Rowdy Rathore OST, Hip Hop Pammi, Jadu Ki Jhappi, Bumbro, Drama Queen, Punjabi Wedding Song & Malhari.",
    tracks: DESI_DANCE_TRACKS
  },
  {
    id: "wanderlust",
    name: "Roadtrip & Wanderlust",
    tagline: "Travel Gems & Free Spirit",
    icon: "🌿",
    description: "Karwaan full OST, Safarnama, Illahi, Journey Song, Tu Hi Hai, Zindagi Kuch Toh Bata, Aa Chal Ke Tujhe & Sham.",
    tracks: WANDERLUST_TRACKS
  },
  {
    id: "rockstar",
    name: "Rockstar & Soul Fire",
    tagline: "The Full Rockstar Album & Anthems",
    icon: "🎸",
    description: "All tracks from Rockstar (Kun Faya Kun, Nadaan Parinde, Phir Se Udd Chala) + Bulleya (ADHM & Sultan) & Maahi Ve.",
    tracks: ROCKSTAR_TRACKS
  },
  {
    id: "metro",
    name: "Metro & Late Night",
    tagline: "Metro In Dino, Life in a Metro & Kishore / KK Classics",
    icon: "🌙",
    description: "Dil Ka Kya, In Dino, Alvida, Ruk Jana Nahin, Main Pal Do Pal Ka Shair Hoon, Tum Ko Dekha Toh Yeh Khayal, Chhookar Mere Man Ko & Pal by KK.",
    tracks: METRO_NOSTALGIA_TRACKS
  },
  {
    id: "sufi",
    name: "Sufi, Folk & Spiritual",
    tagline: "Namo Namo, Valhav Re Nakhawa & Coke Studio",
    icon: "🕉️",
    description: "Namo Namo, Chaap Tilak, Tu Jhoom, Afreen Afreen, Valhav Re Nakhawa, Bhar Do Jholi, Pasoori, Khalasi & soulful spirituals.",
    tracks: SUFI_SOUL_TRACKS
  },
  {
    id: "indie",
    name: "Indie Chill & Serenity",
    tagline: "Kasoor, Tune Kaha & Acoustic Gems",
    icon: "☕",
    description: "Kasoor, Tune Kaha, CO2, Kase Sartil Saaye, Man Talyat Malyat, Let Down, End of Beginning, Sang Rahiyo & indie chill gems.",
    tracks: INDIE_ACOUSTIC_TRACKS
  },
  {
    id: "pop",
    name: "Pop Grooves & Punjabi Hits",
    tagline: "Softly, Saadi Gali Aaja, Chaand Taare & Vibes",
    icon: "⚡",
    description: "Softly, Saadi Gali Aaja, Wellerman, Peecha Chhute, Chaand Taare, Cupid, Die With A Smile, Levitating & pop energy.",
    tracks: POP_GROOVES_TRACKS
  }
];
