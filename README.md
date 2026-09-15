RCCG RETREAT — POST-RETREAT REGISTRATION INTEGRATION

This version is designed to match the existing RCCG Taraba Province 2 retreat site instead of introducing a new visual style.

FILES
- post-retreat.html — full second-stage registration page using the existing auth-wrap, typography, navigation, buttons and form styling.
- post-retreat.js — Supabase-authenticated save/update logic and existing-registration loading.
- post-retreat-sql.sql — Supabase table + RLS policies.
- dashboard-integration.html — card to add to dashboard.html immediately after the existing hero.
- main-js-dashboard-addition.js — dashboard logic; the card automatically appears from 22 Nov 2026, after the 20–21 Nov retreat.
- styles-additions.css — small dashboard-card styles that reuse the existing palette.
- translation-additions.js — English translation keys for the new UI.

SETUP
1. Run post-retreat-sql.sql in Supabase SQL Editor.
2. Copy post-retreat.html and post-retreat.js into the repository root.
3. Add dashboard-integration.html immediately after the existing .dash-hero block in dashboard.html.
4. Add styles-additions.css to styles.css.
5. Add the translation keys from translation-additions.js to the English TRANSLATIONS.en object in main.js.
6. Add initPostRetreatCard(session) from main-js-dashboard-addition.js to main.js and call `await initPostRetreatCard(session);` after the existing registration query in initDashboard().
7. If you want to test the button before the retreat, temporarily replace the date check with `const POST_RETREAT_ENABLED = true;`. Change it back before deployment.

IMPORTANT
The second registration is one row per authenticated user (`user_id` is unique). Submitting again updates the same row rather than creating duplicates.

The certificate amount is fixed in the UI/database at ₦3,000 as requested.
