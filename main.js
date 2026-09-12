/* ============================================================
   Choir Retreat & Concert 2026 — shared behavior
   - Language switching (English / Hausa / Yoruba / Igbo)
   - Mobile nav toggle
   - Login form (front-end demo — see note below)
   ============================================================ */

const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_ministers: "Ministers",
    nav_schedule: "Schedule",
    nav_social: "Connect",
    nav_login: "Login",
    nav_register: "Reserve your seat",
    hero_eyebrow: "The Redeemed Christian Church of God — Taraba Province 2 Choir presents",
    hero_lede: "Two days set apart for voice, spirit, and skill — a retreat built for every chorister who wants to grow, and a concert built for everyone who wants to worship.",
    hero_cta_schedule: "See the schedule",
    hero_cta_login: "Already registered? Login",
    ticket_theme_label: "This year's theme",
    ticket_date_label: "Date",
    ticket_date_value: "20 – 21 November 2026",
    ticket_time_label: "Times",
    ticket_time_value: "Fri 4pm · Sat 9am & 4pm",
    ticket_venue_label: "Venue",
    ticket_venue_value: "RCCG Strong Tower Zone, Wukari",
    programme_kicker: "Order of the retreat",
    programme_title: "Two days, two movements",
    programme_lede: "Friday opens the retreat in worship. Saturday carries it from training into the concert itself.",
    day1_label: "Day one",
    day1_name: "Friday, 20 November",
    day1_slot1_time: "4:00 PM",
    day1_slot1_name: "Opening session & consecration",
    day2_label: "Day two",
    day2_name: "Saturday, 21 November",
    day2_slot1_time: "9:00 AM",
    day2_slot1_name: "Morning session — training & rehearsal",
    day2_slot2_time: "4:00 PM",
    day2_slot2_name: "Evening session — the concert",
    ministers_kicker: "Facilitating",
    ministers_title: "Ministers & facilitators",
    ministers_lede: "The voices leading each session across the two days.",
    focus_kicker: "Featuring",
    focus_title: "What the retreat covers",
    focus_lede: "Built around one question: what does it take to be a vessel God can use?",
    focus_1: "Spiritual renewal & consecration",
    focus_2: "Music training & capacity building",
    focus_3: "Vocal training",
    focus_4: "Music rudiments, theory & ear training",
    focus_5: "Instrumental training",
    focus_6: "Choir development & teamwork",
    focus_7: "Worship leadership & ministry",
    focus_8: "Unity, fellowship & team bonding",
    focus_9: "Practical musicianship & ministration",
    venue_kicker: "Getting there",
    venue_title: "RCCG Strong Tower Zone",
    venue_lede: "Provincial Headquarters, opposite GT Bank, off Ibi Road, Wukari, Taraba State, Nigeria.",
    venue_cta: "Get directions",
    cta_band_title: "Come as you are. Leave as a vessel He can use.",
    cta_band_lede: "Choristers, instrumentalists, and anyone who loves to worship — this retreat is for you.",
    cta_band_button: "Reserve your seat",
    footer_about_title: "Taraba Province 2 Choir",
    footer_about_text: "A ministry of The Redeemed Christian Church of God, raising choristers for the house of God.",
    footer_links_title: "Explore",
    footer_connect_title: "Stay connected",
    footer_rights: "All rights reserved.",
    // Login page
    login_eyebrow: "Choristers' portal",
    login_title: "Welcome back",
    login_lede: "Sign in to check your registration, view the full schedule, and get retreat updates.",
    login_form_title: "Login",
    login_email: "Email address",
    login_password: "Password",
    login_remember: "Remember me",
    login_forgot: "Forgot password?",
    login_submit: "Login",
    login_no_account: "Not registered yet?",
    login_register_link: "Reserve your seat",
    login_note: "This page is a working demo — it doesn't yet connect to a real member database. Wire it up to your registration system before going live.",
    login_msg_empty: "Enter your email and password to continue.",
    login_msg_loading: "Signing you in…",
    login_msg_error: "Couldn't sign you in — check your details and try again.",
    // Register page
    register_eyebrow: "Reserve your seat",
    register_title: "Join the retreat",
    register_lede: "A few details and you're in — you'll be able to log in any time to check your registration.",
    register_form_title: "Reserve your seat",
    register_name: "Full name",
    register_phone: "Phone number",
    register_parish: "Parish / choir unit",
    register_day: "Which day(s) will you attend?",
    register_day_both: "Both days",
    register_day_friday: "Friday only",
    register_day_saturday: "Saturday only",
    register_password: "Create a password",
    register_submit: "Reserve my seat",
    register_have_account: "Already registered?",
    register_msg_missing: "Please fill in your name, phone, email, and a password.",
    register_msg_loading: "Reserving your seat…",
    register_msg_error: "Something went wrong — check your details and try again.",
    register_msg_ok: "You're in! Redirecting to your registration…",
    // Dashboard page
    dashboard_kicker: "Your registration",
    dashboard_loading: "Loading…",
    dashboard_greeting: "Welcome back",
    dashboard_status_label: "Status",
    dashboard_status_confirmed: "You're registered",
    dashboard_empty: "We couldn't find a registration linked to this account yet.",
    dashboard_signout: "Sign out",
    dashboard_not_set: "Not provided",
    // Admin page
    admin_kicker: "Committee access",
    admin_title: "All registrations",
    admin_lede: "Everyone who has reserved a seat so far.",
    admin_total_label: "Total registered",
    admin_col_name: "Name",
    admin_col_email: "Email",
    admin_col_phone: "Phone",
    admin_col_parish: "Parish / unit",
    admin_col_day: "Attending",
    admin_col_date: "Registered",
    admin_export: "Export as CSV",
    admin_loading: "Loading registrations…",
    admin_empty: "No one has registered yet.",
    admin_no_access: "This account doesn't have committee access to view registrations.",
    // Social page
    social_eyebrow: "Stay in the loop",
    social_title: "Connect with the choir",
    social_lede: "Follow along, share the flyer, and tag us in your retreat moments.",
    social_gallery_kicker: "From the flyer",
    social_gallery_title: "Share this with someone who should be there",
    social_hashtag_kicker: "Tag your posts",
    social_hashtag_lede: "Use this tag so we can find and reshare your photos and testimonies from the retreat.",
    social_copy: "Copy",
    social_copied: "Copied",
  },
  ha: {
    nav_home: "Gida",
    nav_ministers: "Masu Hidima",
    nav_schedule: "Jadawali",
    nav_social: "Haɗa mu",
    nav_login: "Shiga",
    nav_register: "Yi rijista",
    hero_eyebrow: "Ikilisiyar Kirista ta Fansa ta Allah — Ƙungiyar Mawaƙa ta Taraba Province 2",
    hero_lede: "Kwana biyu na keɓewa domin murya, ruhu, da fasaha — zaman horo ga kowane mawaƙi mai son girma, da kide-kide ga kowa mai son yin sujada.",
    hero_cta_schedule: "Duba jadawali",
    hero_cta_login: "Kun riga kun yi rijista? Shiga",
    ticket_theme_label: "Jigon bana",
    ticket_date_label: "Kwanan wata",
    ticket_date_value: "20 – 21 ga Nuwamba, 2026",
    ticket_time_label: "Lokuta",
    ticket_time_value: "Jumma'a 4:00 na yamma · Asabar 9 na safe & 4 na yamma",
    ticket_venue_label: "Wurin taro",
    ticket_venue_value: "RCCG Strong Tower Zone, Wukari",
    programme_kicker: "Tsarin zaman horo",
    programme_title: "Kwana biyu, sassa biyu",
    programme_lede: "Jumma'a za a buɗe zaman horo da sujada. Asabar kuma za a ci gaba daga horo zuwa babban kide-kide.",
    day1_label: "Rana ta farko",
    day1_name: "Jumma'a, 20 ga Nuwamba",
    day1_slot1_time: "4:00 na yamma",
    day1_slot1_name: "Buɗewa da keɓewa",
    day2_label: "Rana ta biyu",
    day2_name: "Asabar, 21 ga Nuwamba",
    day2_slot1_time: "9:00 na safe",
    day2_slot1_name: "Zaman safe — horo da atisaye",
    day2_slot2_time: "4:00 na yamma",
    day2_slot2_name: "Zaman yamma — babban kide-kide",
    ministers_kicker: "Masu jagoranci",
    ministers_title: "Masu hidima da masu horarwa",
    ministers_lede: "Muryoyin da za su jagoranci kowane zama a kwanaki biyun.",
    focus_kicker: "Abin da za a koya",
    focus_title: "Abin da zaman horo ya ƙunsa",
    focus_lede: "An gina shi kewaye da tambaya guda: me ake bukata domin zama kayan aikin da Allah zai iya amfani da shi?",
    focus_1: "Sabuntawar ruhi da keɓewa",
    focus_2: "Horon waƙa da bunƙasa ƙwarewa",
    focus_3: "Horon murya",
    focus_4: "Ka'idojin waƙa, ilimin kiɗa da horon kunne",
    focus_5: "Horon kayan kiɗa",
    focus_6: "Ci gaban ƙungiyar mawaƙa da haɗin kai",
    focus_7: "Jagorancin sujada da hidima",
    focus_8: "Haɗin kai, zumunci da ƙulla alaka",
    focus_9: "Ƙwarewar kiɗa da hidima ta ainihi",
    venue_kicker: "Isa wurin",
    venue_title: "RCCG Strong Tower Zone",
    venue_lede: "Babban ofishin lardi, ƙetaren GT Bank, kan hanyar Ibi, Wukari, Jihar Taraba, Najeriya.",
    venue_cta: "Nemi hanya",
    cta_band_title: "Zo yadda kake. Ka bar a matsayin kayan aikin da Allah zai yi amfani da shi.",
    cta_band_lede: "Mawaƙa, masu kayan kiɗa, da duk wanda ke son yin sujada — wannan zama na ku ne.",
    cta_band_button: "Yi rijista",
    footer_about_title: "Ƙungiyar Mawaƙa ta Taraba Province 2",
    footer_about_text: "Hidima ce ta Ikilisiyar Kirista ta Fansa ta Allah, don horar da mawaƙa domin gidan Allah.",
    footer_links_title: "Bincika",
    footer_connect_title: "Ci gaba da haɗi",
    footer_rights: "Duk haƙƙoƙi na kiyayewa.",
    login_eyebrow: "Shafin mawaƙa",
    login_title: "Barka da dawowa",
    login_lede: "Shiga don duba rijistarku, jadawali cikakke, da sabuntawar zaman horo.",
    login_form_title: "Shiga",
    login_email: "Adireshin imel",
    login_password: "Kalmar sirri",
    login_remember: "Ka tuna da ni",
    login_forgot: "Ka manta da kalmar sirri?",
    login_submit: "Shiga",
    login_no_account: "Ba a yi rijista ba tukuna?",
    login_register_link: "Yi rijista",
    login_note: "Wannan shafi misali ne kawai a yanzu — bai riga ya haɗu da ainihin bayanan mambobi ba. Haɗa shi da tsarin rijistarku kafin fara amfani da shi.",
    login_msg_empty: "Shigar da imel da kalmar sirri domin ci gaba.",
    login_msg_loading: "Ana shigar da ku…",
    login_msg_error: "Ba a iya shigar da ku ba — duba bayananku ku sake gwadawa.",
    register_eyebrow: "Yi rijista",
    register_title: "Shiga zaman horo",
    register_lede: "Ɗan bayani kaɗan za ku shiga — za ku iya shiga kowane lokaci don duba rijistarku.",
    register_form_title: "Yi rijista",
    register_name: "Cikakken suna",
    register_phone: "Lambar waya",
    register_parish: "Ikilisiya / rukunin mawaƙa",
    register_day: "Wace rana/ranaku za ku halarta?",
    register_day_both: "Kwanaki biyu",
    register_day_friday: "Jumma'a kawai",
    register_day_saturday: "Asabar kawai",
    register_password: "Ƙirƙiri kalmar sirri",
    register_submit: "Yi rijistata",
    register_have_account: "Kun riga kun yi rijista?",
    register_msg_missing: "Da fatan a cika suna, lambar waya, imel, da kalmar sirri.",
    register_msg_loading: "Ana yin rijistarku…",
    register_msg_error: "Wani abu ya ɓaci — duba bayananku ku sake gwadawa.",
    register_msg_ok: "An yi! Ana kai ku ga rijistarku…",
    dashboard_kicker: "Rijistarku",
    dashboard_loading: "Ana lodawa…",
    dashboard_greeting: "Barka da dawowa",
    dashboard_status_label: "Matsayi",
    dashboard_status_confirmed: "An yi rijistarku",
    dashboard_empty: "Ba mu sami rijista da aka haɗa da wannan asusun ba tukuna.",
    dashboard_signout: "Fita",
    dashboard_not_set: "Ba a bayar ba",
    admin_kicker: "Shiga na kwamiti",
    admin_title: "Duk wadanda suka yi rijista",
    admin_lede: "Duk wanda ya riga ya yi rijista har yanzu.",
    admin_total_label: "Jimillar da suka yi rijista",
    admin_col_name: "Suna",
    admin_col_email: "Imel",
    admin_col_phone: "Waya",
    admin_col_parish: "Ikilisiya / rukuni",
    admin_col_day: "Ranar halarta",
    admin_col_date: "Ranar rijista",
    admin_export: "Fitar zuwa CSV",
    admin_loading: "Ana lodawa…",
    admin_empty: "Babu wanda ya yi rijista tukuna.",
    admin_no_access: "Wannan asusun ba shi da damar kwamiti don ganin rijistoji.",
    social_eyebrow: "Ci gaba da sani",
    social_title: "Haɗa kai da ƙungiyar mawaƙa",
    social_lede: "Ku bi mu, ku raba shela, kuma ku ambace mu a hotunanku na zaman horo.",
    social_gallery_kicker: "Daga shelar",
    social_gallery_title: "Raba wannan da wanda ya kamata ya kasance",
    social_hashtag_kicker: "Yi wa fostinku alama",
    social_hashtag_lede: "Yi amfani da wannan alama domin mu sami hotuna da shaidunku daga zaman horo.",
    social_copy: "Kwafi",
    social_copied: "An kwafa",
  },
  yo: {
    nav_home: "Ile",
    nav_ministers: "Awọn Òjíṣẹ́",
    nav_schedule: "Ètò Ìṣe",
    nav_social: "Sopọ̀ mọ́ wa",
    nav_login: "Wọlé",
    nav_register: "Forúkọsílẹ̀",
    hero_eyebrow: "Ìjọ Kristi Rédíìmù ti Ọlọ́run — Choir ti Taraba Province 2 ń fi hàn",
    hero_lede: "Ọjọ́ méjì tí a yà sọ́tọ̀ fún ohùn, ẹ̀mí, àti ìmọ̀ — àsìkò ìdánilẹ́kọ̀ọ́ fún gbogbo akọrin tó fẹ́ dàgbà, àti ere ìdárayá orin fún gbogbo ẹni tó fẹ́ jọ́sìn.",
    hero_cta_schedule: "Wo ètò ìṣe",
    hero_cta_login: "Ṣé o ti forúkọsílẹ̀? Wọlé",
    ticket_theme_label: "Àkòrí ọdún yìí",
    ticket_date_label: "Ọjọ́",
    ticket_date_value: "20 – 21 Kọkànlá 2026",
    ticket_time_label: "Àkókò",
    ticket_time_value: "Ẹtì 4pm · Àbámẹ́ta 9am & 4pm",
    ticket_venue_label: "Ibi tí a ó ṣe",
    ticket_venue_value: "RCCG Strong Tower Zone, Wukari",
    programme_kicker: "Ètò ìpàdé náà",
    programme_title: "Ọjọ́ méjì, apá méjì",
    programme_lede: "Ọjọ́ Ẹtì ni yóò ṣí ìpàdé náà pẹ̀lú ìjọ́sìn. Àbámẹ́ta yóò gbé e láti ìdánilẹ́kọ̀ọ́ dé ère ìdárayá orin fúnra rẹ̀.",
    day1_label: "Ọjọ́ kìíní",
    day1_name: "Ẹtì, ọjọ́ kẹrindínlógún",
    day1_slot1_time: "4:00 PM",
    day1_slot1_name: "Ìbẹ̀rẹ̀ ìpàdé àti ìyàsọ́tọ̀",
    day2_label: "Ọjọ́ kejì",
    day2_name: "Àbámẹ́ta, ọjọ́ kọkànlélógún",
    day2_slot1_time: "9:00 AM",
    day2_slot1_name: "Ìpàdé àárọ̀ — ìdánilẹ́kọ̀ọ́ àti àdáṣe",
    day2_slot2_time: "4:00 PM",
    day2_slot2_name: "Ìpàdé alẹ́ — eré ìdárayá orin",
    ministers_kicker: "Àwọn tó ń darí",
    ministers_title: "Àwọn òjíṣẹ́ àti olùkọ́ni",
    ministers_lede: "Àwọn ohùn tí yóò darí ìpàdé kọ̀ọ̀kan ní ọjọ́ méjèèjì.",
    focus_kicker: "Ohun tó wà nínú rẹ̀",
    focus_title: "Ohun tí ìpàdé náà ní inú rẹ̀",
    focus_lede: "A kọ́ ọ yí ìbéèrè kan ká: kí ni ó nílò láti jẹ́ ohun-èlò tí Ọlọ́run le lò?",
    focus_1: "Ìsọdọ̀tun ẹ̀mí àti ìyàsọ́tọ̀",
    focus_2: "Ìdánilẹ́kọ̀ọ́ orin àti ìdàgbàsókè agbára",
    focus_3: "Ìdánilẹ́kọ̀ọ́ ohùn",
    focus_4: "Ìpìlẹ̀ orin, ìmọ̀ orin àti ìdánilẹ́kọ̀ọ́ etí",
    focus_5: "Ìdánilẹ́kọ̀ọ́ ohun èlò orin",
    focus_6: "Ìdàgbàsókè choir àti iṣẹ́ àjọṣepọ̀",
    focus_7: "Ìdarí ìjọ́sìn àti iṣẹ́ ìsìn",
    focus_8: "Ìṣọ̀kan, ìbákẹ́gbẹ́ àti ìsopọ̀ ẹgbẹ́",
    focus_9: "Ìmọ̀ orin ìṣe àti iṣẹ́ ìsìn gidi",
    venue_kicker: "Bí a ṣe lè dé ibẹ̀",
    venue_title: "RCCG Strong Tower Zone",
    venue_lede: "Ọ́fíìsì Ìpínlẹ̀, ní ìdojúkọ GT Bank, ní ìta Ibi Road, Wukari, Ìpínlẹ̀ Taraba, Nàìjíríà.",
    venue_cta: "Wá ọ̀nà",
    cta_band_title: "Wá gẹ́gẹ́ bí o ti wà. Kúrò gẹ́gẹ́ bí ohun-èlò tí Ó lè lò.",
    cta_band_lede: "Àwọn akọrin, àwọn tó ń lu ohun èlò orin, àti ẹnikẹ́ni tó nífẹ̀ẹ́ jọ́sìn — ìpàdé yìí jẹ́ tirẹ.",
    cta_band_button: "Forúkọsílẹ̀",
    footer_about_title: "Choir ti Taraba Province 2",
    footer_about_text: "Iṣẹ́ ìsìn kan ti Ìjọ Kristi Rédíìmù ti Ọlọ́run, tí ń kọ́ àwọn akọrin fún ilé Ọlọ́run.",
    footer_links_title: "Ṣàwárí",
    footer_connect_title: "Máa sopọ̀ mọ́ wa",
    footer_rights: "Gbogbo ẹ̀tọ́ ni a dáàbò bò.",
    login_eyebrow: "Ẹnu ọ̀nà akọrin",
    login_title: "Káàbọ̀ padà",
    login_lede: "Wọlé láti wo ìforúkọsílẹ̀ rẹ, ètò ìṣe kíkún, àti àwọn ìròyìn tuntun nípa ìpàdé náà.",
    login_form_title: "Wọlé",
    login_email: "Àdírẹ́sì ímeèlì",
    login_password: "Ọ̀rọ̀ìgbaniwọlé",
    login_remember: "Rántí mi",
    login_forgot: "Ṣé o gbàgbé ọ̀rọ̀ìgbaniwọlé?",
    login_submit: "Wọlé",
    login_no_account: "O ò tí ì forúkọsílẹ̀?",
    login_register_link: "Forúkọsílẹ̀",
    login_note: "Ojú-ìwé yìí jẹ́ àpẹẹrẹ iṣẹ́ lọ́wọ́lọ́wọ́ — kò tíì sopọ̀ mọ́ ìdíkọ̀ àwọn mẹ́ńbà gidi. Sopọ̀ mọ́ ètò ìforúkọsílẹ̀ rẹ kí ó tó bẹ̀rẹ̀ lílò rẹ̀ ní gidi.",
    login_msg_empty: "Fi ímeèlì àti ọ̀rọ̀ìgbaniwọlé rẹ sí i láti tẹ̀síwájú.",
    login_msg_loading: "À ń wọlé fún ọ…",
    login_msg_error: "A kò lè fi ọ́ wọlé — ṣàyẹ̀wò kúlẹ̀kúlẹ̀ rẹ kí o sì tún gbìyànjú.",
    register_eyebrow: "Forúkọsílẹ̀",
    register_title: "Dara pọ̀ mọ́ ìpàdé náà",
    register_lede: "Kúlẹ̀kúlẹ̀ díẹ̀ ni a nílò — o lè wọlé nígbàkúgbà láti wo ìforúkọsílẹ̀ rẹ.",
    register_form_title: "Forúkọsílẹ̀",
    register_name: "Orúkọ kíkún",
    register_phone: "Nọ́mbà fóònù",
    register_parish: "Ìjọ / ẹgbẹ́ akọrin",
    register_day: "Ọjọ́ wo ni ìwọ yóò lọ?",
    register_day_both: "Ọjọ́ méjèèjì",
    register_day_friday: "Ẹtì nìkan",
    register_day_saturday: "Àbámẹ́ta nìkan",
    register_password: "Dá ọ̀rọ̀ìgbaniwọlé",
    register_submit: "Forúkọsílẹ̀ mi",
    register_have_account: "Ṣé o ti forúkọsílẹ̀ rí?",
    register_msg_missing: "Jọ̀wọ́ fi orúkọ rẹ, nọ́mbà fóònù, ímeèlì, àti ọ̀rọ̀ìgbaniwọlé sí i.",
    register_msg_loading: "À ń fi ọ́ forúkọsílẹ̀…",
    register_msg_error: "Nǹkan bàjẹ́ — ṣàyẹ̀wò kúlẹ̀kúlẹ̀ rẹ kí o sì tún gbìyànjú.",
    register_msg_ok: "O ti wọlé! À ń mú ọ lọ sí ìforúkọsílẹ̀ rẹ…",
    dashboard_kicker: "Ìforúkọsílẹ̀ rẹ",
    dashboard_loading: "Ń ṣíṣí…",
    dashboard_greeting: "Káàbọ̀ padà",
    dashboard_status_label: "Ipò",
    dashboard_status_confirmed: "O ti forúkọsílẹ̀",
    dashboard_empty: "A ò rí ìforúkọsílẹ̀ tí ó so mọ́ àkọọ́lẹ̀ yìí síbẹ̀síbẹ̀.",
    dashboard_signout: "Jáde",
    dashboard_not_set: "A kò fi í sí",
    admin_kicker: "Ààyè fún ìgbìmọ̀",
    admin_title: "Gbogbo àwọn tí ó forúkọsílẹ̀",
    admin_lede: "Gbogbo ẹni tí ó ti forúkọsílẹ̀ títí di ìsinsìnyí.",
    admin_total_label: "Àpapọ̀ àwọn tí ó forúkọsílẹ̀",
    admin_col_name: "Orúkọ",
    admin_col_email: "Ímeèlì",
    admin_col_phone: "Fóònù",
    admin_col_parish: "Ìjọ / ẹgbẹ́",
    admin_col_day: "Ọjọ́ tí yóò lọ",
    admin_col_date: "Ọjọ́ tí ó forúkọsílẹ̀",
    admin_export: "Sọ̀kalẹ̀ gẹ́gẹ́ bí CSV",
    admin_loading: "Ń ṣíṣí àwọn ìforúkọsílẹ̀…",
    admin_empty: "Kò sí ẹnì kan tí ó forúkọsílẹ̀ rí.",
    admin_no_access: "Àkọọ́lẹ̀ yìí kò ní ààyè ìgbìmọ̀ láti wo àwọn ìforúkọsílẹ̀.",
    social_eyebrow: "Máa gbọ́ ìròyìn",
    social_title: "Sopọ̀ mọ́ choir náà",
    social_lede: "Tẹ̀lé wa, pín àwòrán ìpolongo náà, kí o sì fi tag wa sí àwòrán rẹ láti ìpàdé náà.",
    social_gallery_kicker: "Láti inú àwòrán ìpolongo",
    social_gallery_title: "Pín èyí pẹ̀lú ẹnì kan tó yẹ kó wà níbẹ̀",
    social_hashtag_kicker: "Fi àmì sí àwọn ìfìwéránṣẹ́ rẹ",
    social_hashtag_lede: "Lo àmì yìí kí á lè rí kí á sì tún pín àwòrán àti ẹ̀rí rẹ láti ìpàdé náà.",
    social_copy: "Ẹ̀dà",
    social_copied: "Ti dà á kọ",
  },
  ig: {
    nav_home: "Ụlọ",
    nav_ministers: "Ndị Ozi",
    nav_schedule: "Usoro Oge",
    nav_social: "Jikọọ Anyị",
    nav_login: "Baba",
    nav_register: "Debanye Aha",
    hero_eyebrow: "Ụka Kraịst Nzọpụta nke Chineke — Choir Taraba Province 2 na-eweta",
    hero_lede: "Ụbọchị abụọ e doro nzọpụta maka olu, mmụọ na nka — ọgbakọ ọzụzụ maka onye ọbụla na-abụ abụ chọrọ ito eto, na egwu maka onye ọbụla chọrọ ife ofufe.",
    hero_cta_schedule: "Lee usoro oge",
    hero_cta_login: "Ị debanyeela aha? Baba",
    ticket_theme_label: "Isiokwu afọ a",
    ticket_date_label: "Ụbọchị",
    ticket_date_value: "20 – 21 Nọvemba 2026",
    ticket_time_label: "Oge",
    ticket_time_value: "Fraịde 4pm · Satọde 9am & 4pm",
    ticket_venue_label: "Ebe a ga-eme ya",
    ticket_venue_value: "RCCG Strong Tower Zone, Wukari",
    programme_kicker: "Usoro ọgbakọ ahụ",
    programme_title: "Ụbọchị abụọ, akụkụ abụọ",
    programme_lede: "Fraịde ga-emeghe ọgbakọ ahụ site na ofufe. Satọde ga-eburu ya site na ọzụzụ ruo n'egwu ahụ n'onwe ya.",
    day1_label: "Ụbọchị mbụ",
    day1_name: "Fraịde, 20 Nọvemba",
    day1_slot1_time: "4:00 PM",
    day1_slot1_name: "Mmeghe na ido nsọ",
    day2_label: "Ụbọchị nke abụọ",
    day2_name: "Satọde, 21 Nọvemba",
    day2_slot1_time: "9:00 AM",
    day2_slot1_name: "Oge ụtụtụ — ọzụzụ na omume",
    day2_slot2_time: "4:00 PM",
    day2_slot2_name: "Oge anyasị — egwu ahụ",
    ministers_kicker: "Ndị na-eduzi",
    ministers_title: "Ndị ozi na ndị nkuzi",
    ministers_lede: "Olu ndị ga-eduzi nnọkọ ọ bụla n'ime ụbọchị abụọ ahụ.",
    focus_kicker: "Ihe ga-abụ",
    focus_title: "Ihe ọgbakọ ahụ gụnyere",
    focus_lede: "E wuru ya gburugburu otu ajụjụ: gịnị ka ọ chọrọ ka mmadụ bụrụ ngwá Chineke nwere ike iji?",
    focus_1: "Mmụọ nwelite ọzọ na ido nsọ",
    focus_2: "Ọzụzụ egwu na mmụba ikike",
    focus_3: "Ọzụzụ olu",
    focus_4: "Ntọala egwu, tiori na ọzụzụ ntị",
    focus_5: "Ọzụzụ ngwá egwu",
    focus_6: "Mmepe choir na ọrụ n'imekọ ihe",
    focus_7: "Nduzi ofufe na ozi",
    focus_8: "Ịdị n'otu, mmekọrịta na ijikọ ìgwè",
    focus_9: "Nka egwu na ozi n'ezie",
    venue_kicker: "Ịga ebe ahụ",
    venue_title: "RCCG Strong Tower Zone",
    venue_lede: "Isi ọrụ Mpaghara, na ncherita ihu GT Bank, na akụkụ Ibi Road, Wukari, Steeti Taraba, Naịjirịa.",
    venue_cta: "Chọta ụzọ",
    cta_band_title: "Bịa dịka ị dị. Pụọ dịka ngwá Ọ nwere ike iji.",
    cta_band_lede: "Ndị na-abụ abụ, ndị na-akpọ ngwá egwu, na onye ọbụla hụrụ ofufe n'anya — ọgbakọ a bụ nke gị.",
    cta_band_button: "Debanye Aha",
    footer_about_title: "Choir Taraba Province 2",
    footer_about_text: "Ozi nke Ụka Kraịst Nzọpụta nke Chineke, na-azụlite ndị na-abụ abụ maka ụlọ Chineke.",
    footer_links_title: "Nyochaa",
    footer_connect_title: "Jikọọ mgbe niile",
    footer_rights: "Ikike niile echedoro.",
    login_eyebrow: "Ọnụ ụzọ ndị na-abụ abụ",
    login_title: "Nnọọ ọzọ",
    login_lede: "Baba ka ị lelee ndebanye aha gị, hụ usoro oge zuru oke, na nweta mgbaama ọgbakọ.",
    login_form_title: "Baba",
    login_email: "Adreesị email",
    login_password: "Okwuntughe",
    login_remember: "Cheta m",
    login_forgot: "Chefuru okwuntughe?",
    login_submit: "Baba",
    login_no_account: "Ị debeghị aha?",
    login_register_link: "Debanye Aha",
    login_note: "Peeji a bụ ihe nnwale ka ọ dị ugbu a — ọ jikọtabeghị na nnọọ nchekwa data ndị otu n'ezie. Jikọọ ya na sistemu ndebanye aha gị tupu ị mee ka ọ dị ndụ.",
    login_msg_empty: "Tinye email na okwuntughe gị iji gaa n'ihu.",
    login_msg_loading: "Na-abanye gị…",
    login_msg_error: "Enweghị ike ịbanye gị — lelee nkọwa gị ma nwaa ọzọ.",
    register_eyebrow: "Debanye Aha",
    register_title: "Sonyere n'ọgbakọ ahụ",
    register_lede: "Ntakịrị nkọwa ka ị ga-eji baba — ị nwere ike baba mgbe ọ bụla ilele ndebanye aha gị.",
    register_form_title: "Debanye Aha",
    register_name: "Aha zuru ezu",
    register_phone: "Nọmba ekwentị",
    register_parish: "Ụka / otu abụ",
    register_day: "Kedu ụbọchị ị ga-abịa?",
    register_day_both: "Ụbọchị abụọ",
    register_day_friday: "Fraịde naanị",
    register_day_saturday: "Satọde naanị",
    register_password: "Mepụta okwuntughe",
    register_submit: "Debanye aha m",
    register_have_account: "Ị debanyeelarị aha?",
    register_msg_missing: "Biko tinye aha gị, nọmba ekwentị, email, na okwuntughe.",
    register_msg_loading: "Na-edebanye aha gị…",
    register_msg_error: "Ihe adịghị mma — lelee nkọwa gị ma nwaa ọzọ.",
    register_msg_ok: "Emeela! Na-eduga gị na ndebanye aha gị…",
    dashboard_kicker: "Ndebanye aha gị",
    dashboard_loading: "Na-ebu...",
    dashboard_greeting: "Nnọọ ọzọ",
    dashboard_status_label: "Ọnọdụ",
    dashboard_status_confirmed: "Edebanyela aha gị",
    dashboard_empty: "Anyị achọtabeghị ndebanye aha jikọtara na akaụntụ a.",
    dashboard_signout: "Pụọ",
    dashboard_not_set: "Enyeghị",
    admin_kicker: "Ọnụ ụzọ ndị nhazi",
    admin_title: "Ndị niile debanyere aha",
    admin_lede: "Onye ọbụla debanyela aha ruo ugbu a.",
    admin_total_label: "Ngụkọta ndị debanyere aha",
    admin_col_name: "Aha",
    admin_col_email: "Email",
    admin_col_phone: "Ekwentị",
    admin_col_parish: "Ụka / otu",
    admin_col_day: "Ụbọchị ọ ga-abịa",
    admin_col_date: "Ụbọchị ndebanye",
    admin_export: "Bupụta dịka CSV",
    admin_loading: "Na-ebu ndebanye aha…",
    admin_empty: "Ọ dịbeghị onye debanyere aha.",
    admin_no_access: "Akaụntụ a enweghị ohere nhazi ilele ndebanye aha.",
    social_eyebrow: "Nọgide na-amata ihe",
    social_title: "Jikọọ na choir ahụ",
    social_lede: "Soro anyị, kesaa flaịa ahụ, ma dee anyị aha n'ime foto ọgbakọ gị.",
    social_gallery_kicker: "Site na flaịa ahụ",
    social_gallery_title: "Kesaa nke a nye onye kwesịrị ịnọ ebe ahụ",
    social_hashtag_kicker: "Tinye akara na ndeputa gị",
    social_hashtag_lede: "Jiri akara a ka anyị wee chọta ma kesaa foto na akaebe gị site n'ọgbakọ ahụ ọzọ.",
    social_copy: "Detu",
    social_copied: "Edetuola",
  }
};

const LANG_KEY = "choir2026_lang";

function getLang(){
  return localStorage.getItem(LANG_KEY) || "en";
}

function applyLang(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  localStorage.setItem(LANG_KEY, lang);
}

function initLangSwitch(){
  document.querySelectorAll(".lang-switch button").forEach(function(btn){
    btn.addEventListener("click", function(){
      applyLang(btn.getAttribute("data-lang"));
    });
  });
  applyLang(getLang());
}

function initMobileNav(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function(){
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ links.classList.remove("open"); });
  });
}

/* ---------- Login (Supabase Auth) ---------- */
function initLoginForm(){
  const form = document.getElementById("login-form");
  if (!form) return;
  const msg = document.getElementById("login-msg");

  form.addEventListener("submit", async function(e){
    e.preventDefault();
    const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
    const email = form.querySelector("#login-email").value.trim();
    const password = form.querySelector("#login-password").value.trim();

    if (!email || !password){
      msg.textContent = dict.login_msg_empty;
      msg.classList.remove("ok");
      return;
    }

    msg.textContent = dict.login_msg_loading;
    msg.classList.remove("ok");

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error){
      msg.textContent = error.message || dict.login_msg_error;
      msg.classList.remove("ok");
      return;
    }

    await completeRegistrationIfNeeded(data.session);
    window.location.href = "dashboard.html";
  });
}

/* ---------- Registration (Supabase Auth + registrations table) ---------- */
function initRegisterForm(){
  const form = document.getElementById("register-form");
  if (!form) return;
  const msg = document.getElementById("register-msg");

  form.addEventListener("submit", async function(e){
    e.preventDefault();
    const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;

    const full_name = form.querySelector("#reg-name").value.trim();
    const phone = form.querySelector("#reg-phone").value.trim();
    const parish_unit = form.querySelector("#reg-parish").value.trim();
    const arrival_day = form.querySelector("#reg-day").value;
    const email = form.querySelector("#reg-email").value.trim();
    const password = form.querySelector("#reg-password").value.trim();

    if (!full_name || !phone || !email || !password){
      msg.textContent = dict.register_msg_missing;
      msg.classList.remove("ok");
      return;
    }

    msg.textContent = dict.register_msg_loading;
    msg.classList.remove("ok");

    // 1. Create the account. The retreat details go into the user's
    //    metadata as well as the table below, so they survive even
    //    if email confirmation delays the first real session.
    const { data: signUpData, error: signUpError } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { full_name, phone, parish_unit, arrival_day } },
    });

    if (signUpError){
      msg.textContent = signUpError.message || dict.register_msg_error;
      return;
    }

    if (!signUpData.session){
      // Email confirmation is required before a session exists —
      // the registrations row gets written on their first login instead
      // (see completeRegistrationIfNeeded below).
      msg.textContent = dict.register_msg_ok;
      msg.classList.add("ok");
      return;
    }

    // 2. Session exists already (confirmation disabled) — write the row now.
    await completeRegistrationIfNeeded(signUpData.session);
    msg.textContent = dict.register_msg_ok;
    msg.classList.add("ok");
    setTimeout(function(){ window.location.href = "dashboard.html"; }, 1200);
  });
}

/* Writes the registrations row from the session user's metadata,
   if it hasn't been written yet. Safe to call on every login and
   on dashboard load — it's a no-op once the row exists. */
async function completeRegistrationIfNeeded(session){
  if (!session) return;
  const meta = session.user.user_metadata || {};
  if (!meta.full_name) return; // nothing pending to write

  const { data: existing } = await supabaseClient
    .from("registrations")
    .select("id")
    .eq("user_id", session.user.id)
    .maybeSingle();

  if (existing) return;

  await supabaseClient.from("registrations").insert({
    user_id: session.user.id,
    full_name: meta.full_name,
    email: session.user.email,
    phone: meta.phone,
    parish_unit: meta.parish_unit,
    arrival_day: meta.arrival_day,
  });
}

/* ---------- Dashboard (reads the logged-in user's registration) ---------- */
async function initDashboard(){
  const greeting = document.getElementById("dashboard-greeting");
  if (!greeting) return;
  const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session){
    window.location.href = "login.html";
    return;
  }

  greeting.textContent = dict.dashboard_greeting + (session.user.email ? " — " + session.user.email : "");

  await completeRegistrationIfNeeded(session);

  const { data: registration } = await supabaseClient
    .from("registrations")
    .select("*")
    .eq("user_id", session.user.id)
    .maybeSingle();

  if (registration){
    document.getElementById("dash-name").textContent = registration.full_name || dict.dashboard_not_set;
    document.getElementById("dash-phone").textContent = registration.phone || dict.dashboard_not_set;
    document.getElementById("dash-parish").textContent = registration.parish_unit || dict.dashboard_not_set;
    document.getElementById("dash-day").textContent = registration.arrival_day || dict.dashboard_not_set;
    document.getElementById("dashboard-card").style.display = "block";
  } else {
    document.getElementById("dashboard-empty").style.display = "block";
    document.getElementById("dashboard-empty-cta").style.display = "inline-block";
  }

  const signoutBtn = document.getElementById("signout-btn");
  if (signoutBtn){
    signoutBtn.addEventListener("click", async function(){
      await supabaseClient.auth.signOut();
      window.location.href = "index.html";
    });
  }
}

/* ---------- Admin portal (committee-only, all registrations) ---------- */
let ADMIN_ROWS = [];

async function initAdminPage(){
  const root = document.getElementById("admin-root");
  if (!root) return;
  const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;

  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session){
    window.location.href = "login.html";
    return;
  }

  const { data: adminRow } = await supabaseClient
    .from("admins")
    .select("user_id")
    .eq("user_id", session.user.id)
    .maybeSingle();

  const loading = document.getElementById("admin-loading");
  if (loading) loading.style.display = "none";

  if (!adminRow){
    document.getElementById("admin-no-access").style.display = "block";
    return;
  }

  const { data: rows } = await supabaseClient
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (!rows || rows.length === 0){
    document.getElementById("admin-empty-msg").style.display = "block";
    return;
  }

  ADMIN_ROWS = rows;
  document.getElementById("admin-total-count").textContent = rows.length;
  document.getElementById("admin-table-wrap").style.display = "block";

  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";
  rows.forEach(function(r){
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + escapeHtml(r.full_name) + "</td>" +
      "<td>" + escapeHtml(r.email || "") + "</td>" +
      "<td>" + escapeHtml(r.phone || "") + "</td>" +
      "<td>" + escapeHtml(r.parish_unit || "") + "</td>" +
      "<td>" + escapeHtml(r.arrival_day || "") + "</td>" +
      "<td>" + new Date(r.created_at).toLocaleDateString() + "</td>";
    tbody.appendChild(tr);
  });

  const exportBtn = document.getElementById("admin-export-btn");
  if (exportBtn){
    exportBtn.addEventListener("click", function(){ exportAdminCsv(ADMIN_ROWS); });
  }

  const signoutBtn = document.getElementById("signout-btn");
  if (signoutBtn){
    signoutBtn.addEventListener("click", async function(){
      await supabaseClient.auth.signOut();
      window.location.href = "index.html";
    });
  }
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function exportAdminCsv(rows){
  const header = ["Full name","Email","Phone","Parish/Unit","Attending","Registered at"];
  const lines = [header.join(",")];
  rows.forEach(function(r){
    const line = [r.full_name, r.email, r.phone, r.parish_unit, r.arrival_day, r.created_at]
      .map(function(v){ return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; })
      .join(",");
    lines.push(line);
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "choir-retreat-registrations.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function initCopyButtons(){
  document.querySelectorAll("[data-copy]").forEach(function(btn){
    btn.addEventListener("click", function(){
      const text = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(function(){
        const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
        const original = btn.textContent;
        btn.textContent = dict.social_copied;
        setTimeout(function(){ btn.textContent = original; }, 1800);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function(){
  initLangSwitch();
  initMobileNav();
  initLoginForm();
  initRegisterForm();
  initDashboard();
  initAdminPage();
  initCopyButtons();
});
