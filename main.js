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
    // Dashboard app shell (Home / Pass / More)
    dashboard_welcome_back: "Welcome back",
    dashboard_open_pass: "Open pass",
    dashboard_essentials_kicker: "At a glance",
    dashboard_essentials_title: "Your essentials",
    dashboard_badge_chorister: "Chorister",
    dashboard_my_registration: "My registration",
    dashboard_registered_on: "Registered",
    dashboard_card_attending: "Attending",
    dashboard_card_focus: "Focus areas",
    dashboard_card_church: "Where you worship",
    dashboard_tab_home: "Home",
    dashboard_tab_pass: "Pass",
    dashboard_tab_more: "More",
    dashboard_event_name: "RCCG Taraba Province 2",
    dashboard_event_sub: "Choir Retreat & Concert 2026",
    dashboard_scan: "Scan at check-in",
    dashboard_delegate: "Delegate",
    dashboard_pass_id: "Pass ID",
    dashboard_save_pass: "Save pass",
    dashboard_more_schedule: "Full schedule",
    dashboard_more_schedule_sub: "Sessions across both days",
    dashboard_more_ministers: "Ministers",
    dashboard_more_ministers_sub: "Who's leading the retreat",
    dashboard_more_connect: "Connect",
    dashboard_more_connect_sub: "Social links & the flyer",
    dashboard_more_admin: "Admin portal",
    dashboard_more_admin_sub: "Committee access",
    dashboard_more_edit_note: "Spotted a typo in your details? Reach the committee via Connect.",
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
    admin_export_excel: "Export as Excel",
    admin_chart_day: "Attendance by day",
    admin_chart_trend: "Registrations over time",
    admin_chart_location: "Top parishes / areas",
    admin_chart_focus: "Focus areas",
    admin_loading: "Loading registrations…",
    admin_empty: "No one has registered yet.",
    admin_no_access: "This account doesn't have committee access to view registrations.",
    admin_bootcamp_title: "Boot camp / post-retreat registrations",
    admin_bootcamp_lede: "Everyone who submitted the post-retreat training & boot camp form.",
    admin_bootcamp_empty: "No one has submitted the post-retreat / boot camp form yet.",
    admin_bootcamp_total_label: "Submitted this form",
    admin_bootcamp_continuing_label: "Continuing with boot camp",
    admin_bootcamp_training_label: "Want instrumental training",
    admin_bootcamp_col_training: "Instrumental training",
    admin_bootcamp_col_instrument: "Instrument",
    admin_bootcamp_col_bootcamp: "Boot camp",
    admin_bootcamp_col_cert: "Certificate fee ack.",
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
    // Registration wizard
    wizard_step1_label: "Biodata",
    wizard_step2_label: "Retreat focus",
    wizard_step3_label: "Church location",
    wizard_step1_title: "Your details",
    wizard_step1_lede: "Basic biodata so we know who's coming.",
    wizard_step2_title: "What you're joining",
    wizard_step2_lede: "Pick the day(s) you'll attend and the areas you want to grow in.",
    wizard_step3_title: "Where you worship",
    wizard_step3_lede: "Choose your province, then zone, area, and parish will narrow down to match.",
    wizard_focus_label: "What would you like to focus on?",
    wizard_next: "Next",
    wizard_back: "Back",
    loc_province: "Province",
    loc_zone: "Zone",
    loc_area: "Area",
    loc_parish: "Parish",
    loc_select_province: "Select province",
    loc_select_zone: "Select zone",
    loc_select_area: "Select area",
    loc_select_parish: "Select parish",
    loc_other: "Other (please specify)",
    loc_other_placeholder_province: "e.g. your church's name and province/region",
    loc_other_placeholder_zone: "e.g. your zone or district",
    loc_other_placeholder_area: "e.g. your local area",
    loc_other_placeholder_parish: "Your parish / church name",
    dashboard_location_label: "Church",
    admin_col_location: "Church (Parish / Area / Zone / Province)",
    admin_search_placeholder: "Search by name, phone, parish…",
    // Password reset
    reset_eyebrow: "Account recovery",
    reset_title: "Reset your password",
    reset_lede: "Enter the email you registered with and we'll send a link to set a new password.",
    reset_request_title: "Send reset link",
    reset_send_button: "Send reset link",
    reset_confirm_title: "Choose a new password",
    reset_new_password: "New password",
    reset_confirm_button: "Set new password",
    reset_sending: "Sending…",
    reset_sent: "Check your email for the reset link.",
    reset_error: "Something went wrong — check the details and try again.",
    reset_done: "Password updated — redirecting to login…",

    // Post-retreat / continued training
    dashboard_training_title: "Continue Your Training",
    dashboard_training_sub: "Continue with the 3-month instrumental training and boot camp after the retreat.",
    dashboard_training_cta: "Continue Your Training",
    post_retreat_eyebrow: "Post-retreat registration",
    post_retreat_title: "Continue Your Training",
    post_retreat_lede: "The retreat may be over, but your growth can continue. Register for the next stage of training and let us prepare the right instructors and resources for you.",
    post_retreat_quote: "Grow in grace. Grow in skill.",
    post_retreat_side_title: "What's next?",
    post_retreat_side_text: "Three months of instrumental learning, continued boot camp participation, and a certificate option.",
    post_retreat_form_title: "Continue your training",
    post_retreat_form_lede: "Tell the committee which opportunities you want to continue with after the retreat.",
    post_retreat_training_label: "3-month instrumental training",
    post_retreat_training_yes: "Yes, I want to learn an instrument for 3 months.",
    post_retreat_training_no: "No, I do not want instrumental training at this time.",
    post_retreat_instrument_label: "Instrument to learn",
    post_retreat_bootcamp_label: "Continue with the boot camp",
    post_retreat_bootcamp_yes: "Yes, I want to continue with the boot camp.",
    post_retreat_bootcamp_no: "No, I am not continuing with the boot camp.",
    post_retreat_certificate_label: "Certificate",
    post_retreat_certificate_fee_label: "Certificate fee",
    post_retreat_certificate_fee_text: "Please take note of the certificate fee.",
    post_retreat_certificate_ack: "I acknowledge the certificate fee of ₦3,000.",
    post_retreat_submit: "Submit registration",
    post_retreat_success_title: "You're registered for the next stage.",
    post_retreat_success_text: "The committee can now plan your training and boot camp participation.",
    post_retreat_footer: "You can return to your dashboard at any time.",
    post_retreat_dashboard: "Dashboard",
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
    wizard_step1_label: "Bayanan kai",
    wizard_step2_label: "Abin da za a koya",
    wizard_step3_label: "Wurin ibada",
    wizard_step1_title: "Bayananku",
    wizard_step1_lede: "Ainihin bayanan kai domin mu san wanda zai zo.",
    wizard_step2_title: "Abin da za ku shiga",
    wizard_step2_lede: "Zaɓi rana/ranakun da za ku halarta da fannonin da kuke son ci gaba a ciki.",
    wizard_step3_title: "Inda kuke yin sujada",
    wizard_step3_lede: "Zaɓi lardinku, sannan yanki, unguwa, da coci za su takaita bisa zaɓinku.",
    wizard_focus_label: "Me kuke son mayar da hankali a kai?",
    wizard_next: "Gaba",
    wizard_back: "Baya",
    loc_province: "Lardi",
    loc_zone: "Yanki",
    loc_area: "Unguwa",
    loc_parish: "Coci",
    loc_select_province: "Zaɓi lardi",
    loc_select_zone: "Zaɓi yanki",
    loc_select_area: "Zaɓi unguwa",
    loc_select_parish: "Zaɓi coci",
    loc_other: "Sauran (da fatan a bayyana)",
    loc_other_placeholder_province: "misali: sunan cocinku da lardi/yanki",
    loc_other_placeholder_zone: "misali: yankinku",
    loc_other_placeholder_area: "misali: unguwar ku",
    loc_other_placeholder_parish: "Sunan coci/ikilisiyar ku",
    dashboard_location_label: "Coci",
    admin_col_location: "Coci (Coci / Unguwa / Yanki / Lardi)",
    admin_search_placeholder: "Bincika da suna, waya, coci…",
    reset_eyebrow: "Dawo da asusu",
    reset_title: "Sake saita kalmar sirri",
    reset_lede: "Shigar da imel ɗin da kuka yi rijista da shi, za mu tura muku hanyar saita sabuwar kalmar sirri.",
    reset_request_title: "Tura hanyar saitawa",
    reset_send_button: "Tura hanyar saitawa",
    reset_confirm_title: "Zaɓi sabuwar kalmar sirri",
    reset_new_password: "Sabuwar kalmar sirri",
    reset_confirm_button: "Saita sabuwar kalmar sirri",
    reset_sending: "Ana tura…",
    reset_sent: "Duba imel ɗinku don hanyar saitawa.",
    reset_error: "Wani abu ya ɓaci — duba bayananku ku sake gwadawa.",
    reset_done: "An sabunta kalmar sirri — ana kai ku ga shiga…",
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
    wizard_step1_label: "Bíòdátà",
    wizard_step2_label: "Ohun tí wọ́n máa kọ́",
    wizard_step3_label: "Ibi ìjọ́sìn",
    wizard_step1_title: "Kúlẹ̀kúlẹ̀ rẹ",
    wizard_step1_lede: "Bíòdátà kékeré kí á lè mọ ẹni tí ń bọ̀.",
    wizard_step2_title: "Ohun tí ìwọ yóò dara pọ̀ mọ́",
    wizard_step2_lede: "Yan ọjọ́ tí ìwọ yóò lọ àti àwọn apá tí o fẹ́ dàgbà sí i.",
    wizard_step3_title: "Ibi tí o ti ń jọ́sìn",
    wizard_step3_lede: "Yan ìpínlẹ̀ rẹ, lẹ́yìn náà zone, agbègbè, àti ìjọ yóò dín kù láti bá a mu.",
    wizard_focus_label: "Kí ni ìwọ fẹ́ kọ́ẹ̀kọ́ sí?",
    wizard_next: "Tẹ̀síwájú",
    wizard_back: "Padà",
    loc_province: "Ìpínlẹ̀",
    loc_zone: "Zone",
    loc_area: "Agbègbè",
    loc_parish: "Ìjọ",
    loc_select_province: "Yan ìpínlẹ̀",
    loc_select_zone: "Yan zone",
    loc_select_area: "Yan agbègbè",
    loc_select_parish: "Yan ìjọ",
    loc_other: "Òmíràn (jọ̀wọ́ ṣàlàyé)",
    loc_other_placeholder_province: "f.a.: orúkọ ìjọ rẹ àti ìpínlẹ̀/agbègbè",
    loc_other_placeholder_zone: "f.a.: agbègbè tàbí zone rẹ",
    loc_other_placeholder_area: "f.a.: agbègbè kékeré rẹ",
    loc_other_placeholder_parish: "Orúkọ ìjọ rẹ",
    dashboard_location_label: "Ìjọ",
    admin_col_location: "Ìjọ (Ìjọ / Agbègbè / Zone / Ìpínlẹ̀)",
    admin_search_placeholder: "Wá orúkọ, fóònù, ìjọ…",
    reset_eyebrow: "Ìmúpadàbọ̀sípò àkọọ́lẹ̀",
    reset_title: "Ṣàtúntò ọ̀rọ̀ìgbaniwọlé rẹ",
    reset_lede: "Fi ímeèlì tí o fi forúkọsílẹ̀ sí i, a ó rán ọ ní ọ̀nà láti ṣàtúntò ọ̀rọ̀ìgbaniwọlé tuntun.",
    reset_request_title: "Rán ọ̀nà ìṣàtúntò",
    reset_send_button: "Rán ọ̀nà ìṣàtúntò",
    reset_confirm_title: "Yan ọ̀rọ̀ìgbaniwọlé tuntun",
    reset_new_password: "Ọ̀rọ̀ìgbaniwọlé tuntun",
    reset_confirm_button: "Ṣàtò ọ̀rọ̀ìgbaniwọlé tuntun",
    reset_sending: "Ń rán…",
    reset_sent: "Ṣàyẹ̀wò ímeèlì rẹ fún ọ̀nà ìṣàtúntò.",
    reset_error: "Nǹkan bàjẹ́ — ṣàyẹ̀wò kúlẹ̀kúlẹ̀ rẹ kí o sì tún gbìyànjú.",
    reset_done: "A ti sọ ọ̀rọ̀ìgbaniwọlé di tuntun — à ń mú ọ lọ sí ibi wíwọlé…",
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
    wizard_step1_label: "Data onwe",
    wizard_step2_label: "Ihe a ga-amụ",
    wizard_step3_label: "Ebe ofufe",
    wizard_step1_title: "Nkọwa gị",
    wizard_step1_lede: "Data onwe dị mkpa ka anyị mara onye na-abịa.",
    wizard_step2_title: "Ihe ị na-abanye",
    wizard_step2_lede: "Họrọ ụbọchị ị ga-abịa na akụkụ ị chọrọ itolite na ya.",
    wizard_step3_title: "Ebe ị na-efe ofufe",
    wizard_step3_lede: "Họrọ mpaghara gị, mgbe ahụ zon, mpaghara nta, na ụka ga-abụ ndị dabara na ya.",
    wizard_focus_label: "Kedu ihe ị chọrọ ilekwasị anya na ya?",
    wizard_next: "Gaa n'ihu",
    wizard_back: "Laghachi",
    loc_province: "Mpaghara",
    loc_zone: "Zon",
    loc_area: "Mpaghara nta",
    loc_parish: "Ụka",
    loc_select_province: "Họrọ mpaghara",
    loc_select_zone: "Họrọ zon",
    loc_select_area: "Họrọ mpaghara nta",
    loc_select_parish: "Họrọ ụka",
    loc_other: "Ọzọ (biko kọwapụta)",
    loc_other_placeholder_province: "dmk: aha ụka gị na mpaghara/zon",
    loc_other_placeholder_zone: "dmk: zon gị",
    loc_other_placeholder_area: "dmk: mpaghara nta gị",
    loc_other_placeholder_parish: "Aha ụka gị",
    dashboard_location_label: "Ụka",
    admin_col_location: "Ụka (Ụka / Mpaghara nta / Zon / Mpaghara)",
    admin_search_placeholder: "Chọọ site n'aha, ekwentị, ụka…",
    reset_eyebrow: "Mweghachite akaụntụ",
    reset_title: "Tọgharịa okwuntughe gị",
    reset_lede: "Tinye email i ji debanye aha, anyị ga-eziga njikọ iji hazie okwuntughe ọhụrụ.",
    reset_request_title: "Ziga njikọ ntọgharị",
    reset_send_button: "Ziga njikọ ntọgharị",
    reset_confirm_title: "Họrọ okwuntughe ọhụrụ",
    reset_new_password: "Okwuntughe ọhụrụ",
    reset_confirm_button: "Hazie okwuntughe ọhụrụ",
    reset_sending: "Na-eziga…",
    reset_sent: "Lelee email gị maka njikọ ntọgharị.",
    reset_error: "Ihe adịghị mma — lelee nkọwa gị ma nwaa ọzọ.",
    reset_done: "Emelitela okwuntughe — na-eduga gị na ndebanye…",
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

  initWizardNav(form);
  initCascadeSelects(form);

  form.addEventListener("submit", async function(e){
    e.preventDefault();
    const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;

    const full_name = form.querySelector("#reg-name").value.trim();
    const phone = form.querySelector("#reg-phone").value.trim();
    const email = form.querySelector("#reg-email").value.trim();
    const password = form.querySelector("#reg-password").value.trim();
    const arrival_day = form.querySelector("#reg-day").value;
    const focus_areas = Array.from(form.querySelectorAll('input[name="focus_areas"]:checked')).map(function(cb){ return cb.value; });
    const province = resolveCascadeValue(form.querySelector("#reg-province"), form.querySelector("#reg-province-other"));
    const zone = resolveCascadeValue(form.querySelector("#reg-zone"), form.querySelector("#reg-zone-other"));
    const area = resolveCascadeValue(form.querySelector("#reg-area"), form.querySelector("#reg-area-other"));
    const parish = resolveCascadeValue(form.querySelector("#reg-parish"), form.querySelector("#reg-parish-other"));

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
      options: { data: { full_name, phone, arrival_day, focus_areas, province, zone, area, parish } },
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

/* ---------- Wizard step navigation (register.html) ---------- */
function initWizardNav(form){
  const steps = Array.from(form.querySelectorAll(".wizard-step"));
  if (steps.length === 0) return;
  const dots = Array.from(document.querySelectorAll(".wizard-step-dot"));
  let current = 1;

  function showStep(n){
    steps.forEach(function(s){ s.style.display = (Number(s.dataset.step) === n) ? "block" : "none"; });
    dots.forEach(function(d){
      const dn = Number(d.dataset.dot);
      d.classList.toggle("active", dn === n);
      d.classList.toggle("done", dn < n);
    });
    current = n;
  }

  function validateStep(n){
    const step = steps.find(function(s){ return Number(s.dataset.step) === n; });
    const required = step.querySelectorAll("[required]");
    for (const field of required){
      if (!field.value || !field.value.trim()){
        field.focus();
        return false;
      }
    }
    return true;
  }

  form.querySelectorAll(".wizard-next").forEach(function(btn){
    btn.addEventListener("click", function(){
      if (!validateStep(current)) return;
      showStep(current + 1);
    });
  });
  form.querySelectorAll(".wizard-back").forEach(function(btn){
    btn.addEventListener("click", function(){ showStep(current - 1); });
  });

  showStep(1);
}

/* ---------- Cascading Province → Zone → Area → Parish ---------- */
/* Every level (province/zone/area/parish) gets an "Other (please
   specify)" option appended after its normal choices. Picking it
   reveals a free-text input for that level — this is what lets
   someone from outside the RCCG Taraba Province 2 structure (or an
   RCCG member whose specific zone/area/parish isn't in the list
   yet) still register. Choosing "Other" at any level also drops
   every level below it straight into free-text mode, since there's
   no further cascade data to offer once you've stepped off the
   known tree. */
const CASCADE_OTHER_VALUE = "__other__";

function resolveCascadeValue(select, otherInput){
  if (otherInput && otherInput.style.display !== "none"){
    return otherInput.value.trim();
  }
  return select ? select.value : "";
}

function initCascadeSelects(form){
  const provinceSel = form.querySelector("#reg-province");
  if (!provinceSel || typeof LOCATION_DATA === "undefined") return;
  const zoneSel = form.querySelector("#reg-zone");
  const areaSel = form.querySelector("#reg-area");
  const parishSel = form.querySelector("#reg-parish");

  const provinceOther = form.querySelector("#reg-province-other");
  const zoneOther = form.querySelector("#reg-zone-other");
  const areaOther = form.querySelector("#reg-area-other");
  const parishOther = form.querySelector("#reg-parish-other");

  const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
  const otherLabel = dict.loc_other || "Other (please specify)";

  function fillSelect(select, options, placeholder){
    select.innerHTML = "";
    const ph = document.createElement("option");
    ph.value = ""; ph.textContent = placeholder; ph.disabled = true; ph.selected = true;
    select.appendChild(ph);
    options.forEach(function(opt){
      const o = document.createElement("option");
      o.value = opt; o.textContent = opt;
      select.appendChild(o);
    });
    const otherOpt = document.createElement("option");
    otherOpt.value = CASCADE_OTHER_VALUE;
    otherOpt.textContent = otherLabel;
    select.appendChild(otherOpt);
  }

  function showOther(input){ if (input) input.style.display = "block"; }
  function hideOther(input){ if (input){ input.style.display = "none"; input.value = ""; } }

  // Normal reset: empties a select, disables it, and makes sure it
  // (and its "other" input) are visible again for when a parent
  // selection changes back from "Other" to a real value.
  function resetLevel(select, otherInput){
    select.innerHTML = "";
    select.disabled = true;
    select.style.display = "";
    hideOther(otherInput);
  }

  // Used when a parent level is "Other": there's no cascade data to
  // build this select from, so skip straight to free-text entry.
  function forceOtherMode(select, otherInput){
    select.innerHTML = "";
    select.disabled = true;
    select.style.display = "none";
    showOther(otherInput);
  }

  fillSelect(provinceSel, Object.keys(LOCATION_DATA), dict.loc_select_province || "Select province");
  hideOther(provinceOther);
  resetLevel(zoneSel, zoneOther);
  resetLevel(areaSel, areaOther);
  resetLevel(parishSel, parishOther);

  provinceSel.addEventListener("change", function(){
    if (provinceSel.value === CASCADE_OTHER_VALUE){
      showOther(provinceOther);
      forceOtherMode(zoneSel, zoneOther);
      forceOtherMode(areaSel, areaOther);
      forceOtherMode(parishSel, parishOther);
      return;
    }
    hideOther(provinceOther);
    const zones = LOCATION_DATA[provinceSel.value] || {};
    zoneSel.style.display = "";
    fillSelect(zoneSel, Object.keys(zones), dict.loc_select_zone || "Select zone");
    zoneSel.disabled = false;
    resetLevel(areaSel, areaOther);
    resetLevel(parishSel, parishOther);
  });

  zoneSel.addEventListener("change", function(){
    if (zoneSel.value === CASCADE_OTHER_VALUE){
      showOther(zoneOther);
      forceOtherMode(areaSel, areaOther);
      forceOtherMode(parishSel, parishOther);
      return;
    }
    hideOther(zoneOther);
    const zones = LOCATION_DATA[provinceSel.value] || {};
    const areas = zones[zoneSel.value] || {};
    areaSel.style.display = "";
    fillSelect(areaSel, Object.keys(areas), dict.loc_select_area || "Select area");
    areaSel.disabled = false;
    resetLevel(parishSel, parishOther);
  });

  areaSel.addEventListener("change", function(){
    if (areaSel.value === CASCADE_OTHER_VALUE){
      showOther(areaOther);
      forceOtherMode(parishSel, parishOther);
      return;
    }
    hideOther(areaOther);
    const zones = LOCATION_DATA[provinceSel.value] || {};
    const areas = zones[zoneSel.value] || {};
    const parishes = areas[areaSel.value] || [];
    parishSel.style.display = "";
    fillSelect(parishSel, parishes, dict.loc_select_parish || "Select parish");
    parishSel.disabled = false;
    hideOther(parishOther);
  });

  parishSel.addEventListener("change", function(){
    if (parishSel.value === CASCADE_OTHER_VALUE){
      showOther(parishOther);
    } else {
      hideOther(parishOther);
    }
  });
}

/* Writes the registrations row from the session user's metadata,
   if it hasn't been written yet. Safe to call on every login and
   on dashboard load — it's a no-op once the row exists. */
async function completeRegistrationIfNeeded(session){
  if (!session) return;
  const meta = session.user.user_metadata || {};
  if (!meta.full_name) return; // nothing pending to write

  // Upsert on user_id (unique) instead of check-then-insert — this
  // page can run concurrently (confirmation redirect, dashboard load,
  // multiple tabs), and check-then-insert has a race window that used
  // to create duplicate rows for the same user. ignoreDuplicates means
  // a row that already exists is left untouched, not overwritten.
  const { error } = await supabaseClient.from("registrations").upsert({
    user_id: session.user.id,
    full_name: meta.full_name || "",
    email: session.user.email || meta.email || "",
    phone: meta.phone || "",
    arrival_day: meta.arrival_day || null,
    focus_areas: meta.focus_areas || [],
    province: meta.province || null,
    zone: meta.zone || null,
    area: meta.area || null,
    parish: meta.parish || null,
  }, { onConflict: "user_id" });

  if (error) {
    console.error("[registration sync]", error);
  }
}

/* ---------- Password reset (request + confirm, same page) ---------- */
function initPasswordResetPage(){
  const requestForm = document.getElementById("reset-request-form");
  if (!requestForm) return; // not on this page

  const requestStep = document.getElementById("reset-request-step");
  const confirmStep = document.getElementById("reset-confirm-step");
  const confirmForm = document.getElementById("reset-confirm-form");

  // Supabase redirects back here with a recovery session already
  // active when the emailed link is clicked — detect that and show
  // the "set a new password" form instead of the "send me a link" one.
  supabaseClient.auth.onAuthStateChange(function(event){
    if (event === "PASSWORD_RECOVERY"){
      requestStep.style.display = "none";
      confirmStep.style.display = "block";
    }
  });

  requestForm.addEventListener("submit", async function(e){
    e.preventDefault();
    const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
    const msg = document.getElementById("reset-request-msg");
    const email = document.getElementById("reset-email").value.trim();

    if (!email){
      msg.textContent = dict.login_msg_empty;
      msg.classList.remove("ok");
      return;
    }

    msg.textContent = dict.reset_sending;
    msg.classList.remove("ok");

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname,
    });

    if (error){
      msg.textContent = error.message || dict.reset_error;
      return;
    }
    msg.textContent = dict.reset_sent;
    msg.classList.add("ok");
  });

  if (confirmForm){
    confirmForm.addEventListener("submit", async function(e){
      e.preventDefault();
      const dict = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
      const msg = document.getElementById("reset-confirm-msg");
      const password = document.getElementById("reset-new-password").value.trim();

      if (!password || password.length < 6){
        msg.textContent = dict.reset_error;
        return;
      }

      msg.textContent = dict.reset_sending;
      const { error } = await supabaseClient.auth.updateUser({ password });

      if (error){
        msg.textContent = error.message || dict.reset_error;
        return;
      }
      msg.textContent = dict.reset_done;
      msg.classList.add("ok");
      setTimeout(function(){ window.location.href = "login.html"; }, 1500);
    });
  }
}

/* ---------- Dashboard tab switching (Home / Pass / More) ---------- */
function initDashboardTabs(){
  const buttons = Array.from(document.querySelectorAll(".dash-tabbar-btn"));
  const tabs = Array.from(document.querySelectorAll(".dash-tab"));
  if (!buttons.length || !tabs.length) return;

  function showTab(name){
    tabs.forEach(function(t){ t.hidden = t.dataset.tab !== name; });
    buttons.forEach(function(b){ b.classList.toggle("active", b.dataset.target === name); });
    window.scrollTo(0, 0);
  }

  buttons.forEach(function(b){
    b.addEventListener("click", function(){ showTab(b.dataset.target); });
  });

  const openPassBtn = document.getElementById("dash-open-pass");
  if (openPassBtn){
    openPassBtn.addEventListener("click", function(){ showTab("pass"); });
  }

  showTab("home");
}

/* Short, stable, human-typeable IDs derived from a UUID — not stored,
   just formatted client-side from the real database id. */
function shortId(uuid, prefix){
  return prefix + uuid.replace(/-/g, "").slice(0, 8).toUpperCase();
}

/* Builds a full "pass card" PNG (QR + delegate details) client-side
   and triggers a download — no server round-trip needed. */
async function downloadPassCard(qrText, delegateName, passId, tagLabels){
  if (document.fonts && document.fonts.ready){
    try { await document.fonts.ready; } catch (e) { /* fall back to default fonts */ }
  }

  const qrDataUrl = await new Promise(function(resolve, reject){
    QRCode.toDataURL(qrText, { width: 480, margin: 1, color: { dark: "#241014", light: "#00000000" } }, function(err, url){
      if (err) reject(err); else resolve(url);
    });
  });
  const qrImg = await new Promise(function(resolve, reject){
    const img = new Image();
    img.onload = function(){ resolve(img); };
    img.onerror = reject;
    img.src = qrDataUrl;
  });

  const W = 680, H = 980;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d");

  // Background + gold border
  ctx.fillStyle = "#2b0f16";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "#c9a24b";
  ctx.lineWidth = 3;
  ctx.strokeRect(14, 14, W - 28, H - 28);

  // Header
  ctx.fillStyle = "#e6cf9c";
  ctx.font = "600 15px 'Work Sans', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("RCCG TARABA PROVINCE 2", W / 2, 70);
  ctx.fillStyle = "#f4ead9";
  ctx.font = "600 30px 'Fraunces', Georgia, serif";
  ctx.fillText("Choir Retreat & Concert 2026", W / 2, 108);

  // QR on white card
  const qrSize = 360, qrX = (W - qrSize) / 2, qrY = 150;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(qrX, qrY, qrSize, qrSize);
  ctx.drawImage(qrImg, qrX + 20, qrY + 20, qrSize - 40, qrSize - 40);

  // "Scan at check-in" pill
  ctx.fillStyle = "rgba(163,33,47,0.18)";
  const pillY = qrY + qrSize + 26;
  roundRect(ctx, W / 2 - 110, pillY, 220, 34, 17);
  ctx.fill();
  ctx.fillStyle = "#e26a75";
  ctx.font = "600 13px 'Work Sans', sans-serif";
  ctx.fillText("SCAN AT CHECK-IN", W / 2, pillY + 22);

  // Dashed divider
  ctx.strokeStyle = "#4a1b24";
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(50, pillY + 64);
  ctx.lineTo(W - 50, pillY + 64);
  ctx.stroke();
  ctx.setLineDash([]);

  // Delegate block
  let y = pillY + 108;
  ctx.textAlign = "left";
  ctx.fillStyle = "#c9a24b";
  ctx.font = "600 13px 'Work Sans', sans-serif";
  ctx.fillText("DELEGATE", 50, y);
  y += 38;
  ctx.fillStyle = "#f4ead9";
  ctx.font = "600 32px 'Fraunces', Georgia, serif";
  wrapText(ctx, delegateName.toUpperCase(), 50, y, W - 100, 36);
  y += Math.ceil(delegateName.length / 18) * 36 + 30;

  ctx.fillStyle = "#c9a24b";
  ctx.font = "600 13px 'Work Sans', sans-serif";
  ctx.fillText("PASS ID", 50, y);
  y += 30;
  ctx.fillStyle = "#f4ead9";
  ctx.font = "500 20px 'Fraunces', Georgia, serif";
  ctx.fillText(passId, 50, y);

  // Tags
  y += 34;
  let tagX = 50;
  tagLabels.forEach(function(label){
    ctx.font = "600 12.5px 'Work Sans', sans-serif";
    const w = ctx.measureText(label).width + 26;
    ctx.fillStyle = "#241014";
    roundRect(ctx, tagX, y, w, 30, 15);
    ctx.fill();
    ctx.fillStyle = "#f4ead9";
    ctx.textAlign = "left";
    ctx.fillText(label, tagX + 13, y + 20);
    tagX += w + 10;
  });

  // Footer
  ctx.textAlign = "center";
  ctx.fillStyle = "#e6cf9c";
  ctx.font = "400 12px 'Work Sans', sans-serif";
  ctx.fillText("rccg-retreat.vercel.app", W / 2, H - 36);

  const link = document.createElement("a");
  link.download = passId + "-pass.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function roundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(" ");
  let line = "";
  words.forEach(function(word){
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line){
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line, x, y);
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

  await completeRegistrationIfNeeded(session);

  const { data: registration, error: registrationError } = await supabaseClient
    .from("registrations")
    .select("*")
    .eq("user_id", session.user.id)
    .maybeSingle();

  if (registrationError) {
    console.error("[dashboard registration]", registrationError);
  }

  const firstName = registration && registration.full_name ? registration.full_name.split(" ")[0] : "";
  greeting.textContent = dict.dashboard_greeting + (firstName ? ", " + firstName : "");

  const userId = shortId(session.user.id, "RET-");
  const heroName = document.getElementById("dash-hero-name");
  const heroId = document.getElementById("dash-hero-id");
  if (heroName) heroName.textContent = (registration && registration.full_name) || session.user.email || "—";
  if (heroId) heroId.textContent = userId;

  if (registration){
    const attendLabel = dict["register_day_" + registration.arrival_day] || registration.arrival_day || dict.dashboard_not_set;
    const cardSub = document.getElementById("dash-card-sub");
    if (cardSub){
      const registeredOn = registration.created_at ? new Date(registration.created_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
      cardSub.textContent = dict.dashboard_registered_on + (registeredOn ? " " + registeredOn : "");
    }

    const attendCard = document.getElementById("dash-attend-value");
    if (attendCard) attendCard.textContent = attendLabel;

    const focusWrap = document.getElementById("dash-focus-chips");
    if (focusWrap){
      focusWrap.innerHTML = "";
      (registration.focus_areas || []).forEach(function(f){
        const span = document.createElement("span");
        span.className = "dash-chip";
        span.textContent = f;
        focusWrap.appendChild(span);
      });
      if (!registration.focus_areas || !registration.focus_areas.length){
        focusWrap.textContent = dict.dashboard_not_set;
      }
    }

    const churchValue = document.getElementById("dash-church-value");
    if (churchValue){
      const parts = [registration.parish, registration.area, registration.zone, registration.province].filter(Boolean);
      churchValue.textContent = parts.length ? parts.join(" • ") : dict.dashboard_not_set;
    }

    const homeEssentials = document.getElementById("dash-essentials");
    if (homeEssentials) homeEssentials.style.display = "block";

    // Pass tab
    const passId = shortId(registration.id, "RET26-");
    const qrText = "RCCG-RETREAT-2026|" + registration.id + "|" + registration.full_name;
    const passName = document.getElementById("dash-pass-name");
    const passIdEl = document.getElementById("dash-pass-id");
    const passTags = document.getElementById("dash-pass-tags");
    if (passName) passName.textContent = registration.full_name;
    if (passIdEl) passIdEl.textContent = passId;
    if (passTags){
      passTags.innerHTML = "";
      const tagValues = [dict.dashboard_status_confirmed, attendLabel];
      tagValues.forEach(function(t, i){
        const span = document.createElement("span");
        if (i === 1) span.classList.add("alt");
        span.textContent = t;
        passTags.appendChild(span);
      });
    }

    const qrHolder = document.getElementById("dash-qr-canvas");
    if (qrHolder && window.QRCode){
      qrHolder.innerHTML = "";
      QRCode.toCanvas(qrText, { width: 220, margin: 1, color: { dark: "#241014", light: "#00000000" } }, function(err, canvas){
        if (!err) qrHolder.appendChild(canvas);
      });
    }

    const passTicket = document.getElementById("dash-pass-ticket");
    if (passTicket) passTicket.style.display = "block";

    const savePassBtn = document.getElementById("dash-save-pass");
    if (savePassBtn){
      savePassBtn.addEventListener("click", function(){
        downloadPassCard(qrText, registration.full_name, passId, [dict.dashboard_status_confirmed, attendLabel]);
      });
    }
  } else {
    const emptyEl = document.getElementById("dashboard-empty");
    const emptyCta = document.getElementById("dashboard-empty-cta");
    if (emptyEl) emptyEl.style.display = "block";
    if (emptyCta) emptyCta.style.display = "inline-block";
    const passEmpty = document.getElementById("dash-pass-empty");
    if (passEmpty) passEmpty.style.display = "block";
  }

  // Admin link only shows for committee accounts
  const adminLink = document.getElementById("dash-admin-link");
  if (adminLink){
    try {
      const { data: isAdmin } = await supabaseClient.rpc("is_admin");
      if (isAdmin) adminLink.style.display = "flex";
    } catch (e) { /* not an admin, or rpc unavailable — link stays hidden */ }
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

  const { data: isAdmin, error: adminError } = await supabaseClient.rpc("is_admin");

  const loading = document.getElementById("admin-loading");
  if (loading) loading.style.display = "none";

  if (adminError || !isAdmin){
    if (adminError) console.error("[admin authorization]", adminError);
    document.getElementById("admin-no-access").style.display = "block";
    return;
  }

  // Boot camp / post-retreat registrations load independently of the
  // main registrations table below, so it still shows up even if that
  // table errors out or is empty.
  loadBootcampAdmin();

  const { data: rows, error: rowsError } = await supabaseClient
    .from("registrations")
    .select("*")
    .order("created_at", { ascending: false });

  if (rowsError) {
    console.error("[admin registrations]", rowsError);
    const emptyMsg = document.getElementById("admin-empty-msg");
    if (emptyMsg) {
      emptyMsg.textContent = "Unable to load registrations. Check the Supabase setup and RLS policies.";
      emptyMsg.style.display = "block";
    }
    return;
  }

  if (!rows || rows.length === 0){
    document.getElementById("admin-empty-msg").style.display = "block";
    return;
  }

  ADMIN_ROWS = rows;
  document.getElementById("admin-total-count").textContent = rows.length;
  document.getElementById("admin-count-friday").textContent = rows.filter(function(r){ return r.arrival_day === "friday"; }).length;
  document.getElementById("admin-count-saturday").textContent = rows.filter(function(r){ return r.arrival_day === "saturday"; }).length;
  document.getElementById("admin-count-both").textContent = rows.filter(function(r){ return r.arrival_day === "both"; }).length;
  document.getElementById("admin-table-wrap").style.display = "block";

  renderAdminRows(rows);
  renderAdminCharts(rows);

  const searchInput = document.getElementById("admin-search");
  if (searchInput){
    searchInput.addEventListener("input", function(){
      const q = searchInput.value.trim().toLowerCase();
      const filtered = !q ? ADMIN_ROWS : ADMIN_ROWS.filter(function(r){
        return [r.full_name, r.email, r.phone, r.parish, r.area, r.zone, r.province]
          .some(function(v){ return v && String(v).toLowerCase().includes(q); });
      });
      renderAdminRows(filtered);
    });
  }

  const exportBtn = document.getElementById("admin-export-btn");
  if (exportBtn){
    exportBtn.addEventListener("click", function(){ exportAdminCsv(ADMIN_ROWS); });
  }

  const exportExcelBtn = document.getElementById("admin-export-excel-btn");
  if (exportExcelBtn){
    exportExcelBtn.addEventListener("click", function(){ exportAdminExcel(ADMIN_ROWS); });
  }

  const signoutBtn = document.getElementById("signout-btn");
  if (signoutBtn){
    signoutBtn.addEventListener("click", async function(){
      await supabaseClient.auth.signOut();
      window.location.href = "index.html";
    });
  }
}

/* ---------- Admin: boot camp / post-retreat registrations ---------- */
let ADMIN_BOOTCAMP_ROWS = [];

async function loadBootcampAdmin(){
  const section = document.getElementById("admin-bootcamp-section");
  if (!section) return;
  section.style.display = "block";

  const [{ data: prRows, error: prError }, { data: regRows, error: regError }] = await Promise.all([
    supabaseClient
      .from("post_retreat_registrations")
      .select("*")
      .order("created_at", { ascending: false }),
    supabaseClient
      .from("registrations")
      .select("user_id, full_name, email, phone, parish, area, zone, province")
  ]);

  if (prError) {
    console.error("[admin post_retreat_registrations]", prError);
    const emptyMsg = document.getElementById("admin-bootcamp-empty-msg");
    if (emptyMsg) {
      emptyMsg.textContent = "Unable to load boot camp registrations. Make sure post-retreat-sql.sql has been run in Supabase.";
      emptyMsg.style.display = "block";
    }
    return;
  }

  if (regError) console.error("[admin registrations lookup]", regError);

  if (!prRows || prRows.length === 0){
    document.getElementById("admin-bootcamp-empty-msg").style.display = "block";
    return;
  }

  const regByUserId = {};
  (regRows || []).forEach(function(r){ regByUserId[r.user_id] = r; });

  const joined = prRows.map(function(pr){
    const reg = regByUserId[pr.user_id] || {};
    return Object.assign({}, pr, {
      full_name: reg.full_name || "",
      email: reg.email || "",
      phone: reg.phone || "",
      parish: reg.parish || "",
      area: reg.area || "",
      zone: reg.zone || "",
      province: reg.province || ""
    });
  });

  ADMIN_BOOTCAMP_ROWS = joined;
  document.getElementById("admin-bootcamp-total-count").textContent = joined.length;
  document.getElementById("admin-bootcamp-continuing-count").textContent = joined.filter(function(r){ return r.continue_bootcamp; }).length;
  document.getElementById("admin-bootcamp-training-count").textContent = joined.filter(function(r){ return r.instrument_training; }).length;
  document.getElementById("admin-bootcamp-wrap").style.display = "block";

  renderBootcampRows(joined);

  const searchInput = document.getElementById("admin-bootcamp-search");
  if (searchInput){
    searchInput.addEventListener("input", function(){
      const q = searchInput.value.trim().toLowerCase();
      const filtered = !q ? ADMIN_BOOTCAMP_ROWS : ADMIN_BOOTCAMP_ROWS.filter(function(r){
        return [r.full_name, r.email, r.phone, r.parish, r.area, r.zone, r.province, r.instrument]
          .some(function(v){ return v && String(v).toLowerCase().includes(q); });
      });
      renderBootcampRows(filtered);
    });
  }

  const exportBtn = document.getElementById("admin-bootcamp-export-btn");
  if (exportBtn){
    exportBtn.addEventListener("click", function(){ exportBootcampCsv(ADMIN_BOOTCAMP_ROWS); });
  }

  const exportExcelBtn = document.getElementById("admin-bootcamp-export-excel-btn");
  if (exportExcelBtn){
    exportExcelBtn.addEventListener("click", function(){ exportBootcampExcel(ADMIN_BOOTCAMP_ROWS); });
  }
}

function renderBootcampRows(rows){
  const tbody = document.getElementById("admin-bootcamp-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";
  rows.forEach(function(r){
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td class=\"name-cell\">" + escapeHtml(r.full_name || "—") + "</td>" +
      "<td>" + escapeHtml(r.email || "") + "</td>" +
      "<td>" + escapeHtml(r.phone || "") + "</td>" +
      "<td>" + (r.instrument_training ? "Yes" : "No") + "</td>" +
      "<td>" + escapeHtml(r.instrument || "") + "</td>" +
      "<td>" + (r.continue_bootcamp ? "Yes" : "No") + "</td>" +
      "<td>" + (r.certificate_fee_acknowledged ? "Yes" : "No") + "</td>" +
      "<td>" + (r.created_at ? new Date(r.created_at).toLocaleDateString() : "") + "</td>";
    tbody.appendChild(tr);
  });
}

function exportBootcampCsv(rows){
  const header = ["Full name","Email","Phone","Instrumental training","Instrument","Continuing boot camp","Certificate fee acknowledged","Registered at"];
  const lines = [header.join(",")];
  rows.forEach(function(r){
    const line = [
      r.full_name, r.email, r.phone,
      r.instrument_training ? "Yes" : "No",
      r.instrument,
      r.continue_bootcamp ? "Yes" : "No",
      r.certificate_fee_acknowledged ? "Yes" : "No",
      r.created_at
    ]
      .map(function(v){ return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; })
      .join(",");
    lines.push(line);
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "choir-retreat-bootcamp-registrations.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function exportBootcampExcel(rows){
  if (typeof XLSX === "undefined"){
    alert("Excel export library failed to load. Check your connection and try again.");
    return;
  }
  const header = ["Full name","Email","Phone","Instrumental training","Instrument","Continuing boot camp","Certificate fee acknowledged","Registered at"];
  const data = rows.map(function(r){
    return [
      r.full_name || "",
      r.email || "",
      r.phone || "",
      r.instrument_training ? "Yes" : "No",
      r.instrument || "",
      r.continue_bootcamp ? "Yes" : "No",
      r.certificate_fee_acknowledged ? "Yes" : "No",
      r.created_at ? new Date(r.created_at).toLocaleString() : ""
    ];
  });
  const sheetData = [header].concat(data);
  const ws = XLSX.utils.aoa_to_sheet(sheetData);
  ws["!cols"] = header.map(function(){ return { wch: 20 }; });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Boot camp");
  XLSX.writeFile(wb, "choir-retreat-bootcamp-registrations.xlsx");
}

/* ---------- Admin charts (Chart.js) ---------- */
let ADMIN_CHARTS = {};

function destroyAdminCharts(){
  Object.keys(ADMIN_CHARTS).forEach(function(key){
    if (ADMIN_CHARTS[key]) ADMIN_CHARTS[key].destroy();
  });
  ADMIN_CHARTS = {};
}

function renderAdminCharts(rows){
  if (typeof Chart === "undefined") return; // Chart.js failed to load (e.g. offline) — skip charts gracefully
  destroyAdminCharts();

  const chartColors = ["#a3212f", "#c9a24b", "#7a1622", "#e6cf9c", "#241014", "#4a1b24"];

  /* Attendance by day (Friday / Saturday / Both) */
  const dayCounts = { friday: 0, saturday: 0, both: 0 };
  rows.forEach(function(r){ if (dayCounts.hasOwnProperty(r.arrival_day)) dayCounts[r.arrival_day]++; });
  const dayCtx = document.getElementById("chart-day");
  if (dayCtx){
    ADMIN_CHARTS.day = new Chart(dayCtx, {
      type: "doughnut",
      data: {
        labels: ["Friday only", "Saturday only", "Both days"],
        datasets: [{ data: [dayCounts.friday, dayCounts.saturday, dayCounts.both], backgroundColor: chartColors }]
      },
      options: { responsive: true, plugins: { legend: { position: "bottom", labels: { color: "#241014" } } } }
    });
  }

  /* Registrations over time (cumulative by day) */
  const byDate = {};
  rows.forEach(function(r){
    if (!r.created_at) return;
    const d = new Date(r.created_at).toISOString().slice(0, 10);
    byDate[d] = (byDate[d] || 0) + 1;
  });
  const sortedDates = Object.keys(byDate).sort();
  let running = 0;
  const cumulative = sortedDates.map(function(d){ running += byDate[d]; return running; });
  const trendCtx = document.getElementById("chart-trend");
  if (trendCtx){
    ADMIN_CHARTS.trend = new Chart(trendCtx, {
      type: "line",
      data: {
        labels: sortedDates,
        datasets: [{
          label: "Total registrations",
          data: cumulative,
          borderColor: "#a3212f",
          backgroundColor: "rgba(163,33,47,0.12)",
          fill: true,
          tension: 0.25
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#241014" } },
          y: { ticks: { color: "#241014" }, beginAtZero: true }
        }
      }
    });
  }

  /* Top parishes / areas */
  const locCounts = {};
  rows.forEach(function(r){
    const loc = r.parish || r.area || r.zone || r.province || "Unspecified";
    locCounts[loc] = (locCounts[loc] || 0) + 1;
  });
  const topLocs = Object.entries(locCounts).sort(function(a, b){ return b[1] - a[1]; }).slice(0, 8);
  const locCtx = document.getElementById("chart-location");
  if (locCtx){
    ADMIN_CHARTS.location = new Chart(locCtx, {
      type: "bar",
      data: {
        labels: topLocs.map(function(e){ return e[0]; }),
        datasets: [{ label: "Registrations", data: topLocs.map(function(e){ return e[1]; }), backgroundColor: "#a3212f" }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#241014" }, beginAtZero: true },
          y: { ticks: { color: "#241014" } }
        }
      }
    });
  }

  /* Focus areas */
  const focusCounts = {};
  rows.forEach(function(r){
    (r.focus_areas || []).forEach(function(f){ focusCounts[f] = (focusCounts[f] || 0) + 1; });
  });
  const focusEntries = Object.entries(focusCounts).sort(function(a, b){ return b[1] - a[1]; });
  const focusCtx = document.getElementById("chart-focus");
  if (focusCtx){
    ADMIN_CHARTS.focus = new Chart(focusCtx, {
      type: "pie",
      data: {
        labels: focusEntries.map(function(e){ return e[0]; }),
        datasets: [{ data: focusEntries.map(function(e){ return e[1]; }), backgroundColor: chartColors }]
      },
      options: { responsive: true, plugins: { legend: { position: "bottom", labels: { color: "#241014" } } } }
    });
  }
}

function renderAdminRows(rows){
  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";
  rows.forEach(function(r){
    const tr = document.createElement("tr");
    const location = [r.parish, r.area, r.zone, r.province].filter(Boolean).join(" / ");
    const focus = (r.focus_areas && r.focus_areas.length) ? r.focus_areas.join(", ") : "";
    tr.innerHTML =
      "<td class=\"name-cell\">" + escapeHtml(r.full_name) + "</td>" +
      "<td>" + escapeHtml(r.email || "") + "</td>" +
      "<td>" + escapeHtml(r.phone || "") + "</td>" +
      "<td>" + escapeHtml(r.arrival_day || "") + "</td>" +
      "<td>" + escapeHtml(location) + "</td>" +
      "<td>" + escapeHtml(focus) + "</td>" +
      "<td>" + new Date(r.created_at).toLocaleDateString() + "</td>";
    tbody.appendChild(tr);
  });
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function exportAdminCsv(rows){
  const header = ["Full name","Email","Phone","Attending","Focus areas","Province","Zone","Area","Parish","Registered at"];
  const lines = [header.join(",")];
  rows.forEach(function(r){
    const line = [
      r.full_name, r.email, r.phone, r.arrival_day,
      (r.focus_areas || []).join("; "),
      r.province, r.zone, r.area, r.parish, r.created_at
    ]
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

function exportAdminExcel(rows){
  if (typeof XLSX === "undefined"){
    alert("Excel export library failed to load. Check your connection and try again.");
    return;
  }
  const header = ["Full name","Email","Phone","Attending","Focus areas","Province","Zone","Area","Parish","Registered at"];
  const data = rows.map(function(r){
    return [
      r.full_name || "",
      r.email || "",
      r.phone || "",
      r.arrival_day || "",
      (r.focus_areas || []).join("; "),
      r.province || "",
      r.zone || "",
      r.area || "",
      r.parish || "",
      r.created_at ? new Date(r.created_at).toLocaleString() : ""
    ];
  });
  const sheetData = [header].concat(data);
  const ws = XLSX.utils.aoa_to_sheet(sheetData);
  ws["!cols"] = header.map(function(){ return { wch: 20 }; });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Registrations");
  XLSX.writeFile(wb, "choir-retreat-registrations.xlsx");
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

/* Each init is wrapped so a failure in one page's script (say, a
   Supabase call throwing because config.js still has placeholder
   keys) can never block something unrelated — like the mobile
   menu — from working on every other page. */
function safeInit(fn){
  try { fn(); } catch (err) { console.error("[" + fn.name + "] failed:", err); }
}

document.addEventListener("DOMContentLoaded", function(){
  safeInit(initLangSwitch);
  safeInit(initMobileNav);
  safeInit(initLoginForm);
  safeInit(initRegisterForm);
  safeInit(initPasswordResetPage);
  safeInit(initDashboard);
  safeInit(initDashboardTabs);
  safeInit(initAdminPage);
  safeInit(initCopyButtons);
});
window.location.replace("index.html");
