/* ============================================================
   Province → Zone → Area → Parish
   ------------------------------------------------------------
   Transcribed from the RCCG Taraba Province 2 portal screenshots
   (portal.rccg.org/di), zones 1–19 (Strong Tower through Rhema).
   If the province has zones beyond Rhema that weren't captured
   in the screenshots, add them the same way: a new key under
   "Taraba Province 2", each zone holding one or more areas, each
   area holding an array of parish/church names.

   Double-check spellings against the portal where it matters —
   this was transcribed from screenshots and a stray letter here
   or there is possible.
   ============================================================ */

const LOCATION_DATA = {
  "Taraba Province 2": {
    "Strong Tower Zone": {
      "Strong Tower Area": ["Strong Tower (Province HQ)"]
    },
    "New Wave of Glory (Stand Alone) Zone": {
      "New Wave of Glory (Stand Alone) Area": ["New Wave of Glory (Stand Alone)"]
    },
    "Zion Zone": {
      "Zion Area": ["Zion", "Ambassador", "El-Adonai", "Oasis", "Power Arena Parish", "Solid Rock", "Tabernacle"]
    },
    "Agape Zone": {
      "Agape Area": ["Agape"]
    },
    "Freedom Court Zone": {
      "Freedom Court Area": ["Freedom Court", "Lord of Glory", "Royal Assembly"],
      "Adonai-Wukari Area": ["Adonai-Wukari", "Open Doors", "Trinity"]
    },
    "Shalom Zone": {
      "Shalom Area": ["Shalom", "Hosanna", "King of Kings"],
      "Mountain of Miracles Area": ["Mountain of Miracles", "House Hold of Faith", "Liberation Centre"]
    },
    "Throne of Grace Zone": {
      "Throne of Grace Area": ["Throne of Grace", "City of God", "Resurrection and the Life"],
      "Heavens Gate Area": ["Heavens Gate", "Redeemer", "Rivers of Life"]
    },
    "Covenant Zone": {
      "Covenant Area": ["Covenant", "City of Joy", "Glory of God", "Shelter of Glory"],
      "Royal Destiny Area": ["Royal Destiny", "Amazing Grace", "Arise and Shine"]
    },
    "Dominion Zone": {
      "Signs and Wonders Area": ["Signs and Wonders", "Halleluyah", "Jesus House"],
      "Dominion Area": ["Dominion", "Cornerstone", "Divine Mandate", "Kingdom of God Parish", "Palace of Prayer"]
    },
    "Maranatha Zone": {
      "Maranatha Area": ["Maranatha", "Higher Grace", "Hope of Glory"],
      "Peace Arena Area": ["Peace Arena", "Praise Assembly", "Throne of David"]
    },
    "Balm of Gilead Zone": {
      "Balm of Gilead Area": ["Balm of Gilead", "Divine Eagle Assembly", "Faith", "Flourishing Assembly"],
      "Solution Area": ["Solution", "Garden of Praise", "Salvation Centre"]
    },
    "Redemption Zone": {
      "Redemption Area": ["Redemption", "Divine Presence", "Living Power", "The Great God", "Wonderful"],
      "Divine Assurance Area": ["Divine Assurance", "Divine Favour", "Favour Arena", "Jesus Life"]
    },
    "Pentecost Zone": {
      "Pentecost Area": ["Pentecost", "Destiny", "Gethsemane", "Living Seed"],
      "Rock of Ages Area": ["Rock of Ages", "City of David", "New Life"]
    },
    "Goshen Zone": {
      "Goshen Area": ["Goshen", "Fountain of Life", "The Ark of God", "Unlimited Joy"],
      "Praise Arena Area": ["Praise Arena", "City of Glory", "Miracle Sanctuary"]
    },
    "Living Waters Zone": {
      "Living Waters Area": ["Living Waters", "Chapel of Blessing", "Holiness"],
      "Jehovah Rapha Area": ["Jehovah Rapha", "Dominion People", "Glory"]
    },
    "Higher Ground Zone": {
      "Divine Mercy Area": ["Divine Mercy", "His Greatness", "Temple of God"],
      "Higher Ground Area": ["Higher Ground", "Everlasting Father", "Jesus Palace", "King of Glory", "Light Chapel"]
    },
    "Mercy Land Zone": {
      "Mercy Land Area": ["Mercy Land", "Bethel", "Hausa Speaking Parish", "Milk and Honey"],
      "The King Is Coming Area": ["The King Is Coming", "Palace of Praise", "Wonders of Praise"]
    },
    "Prince of Peace Zone": {
      "Prince of Peace Area": ["Prince of Peace", "Holy Ghost", "New Hope"],
      "Perfect Gift Area": ["Perfect Gift", "Favour of God", "Rehoboth"]
    },
    "Rhema Zone": {
      "Rhema Area": ["Rhema", "Success", "The Paradise of God"],
      "Divine Champion Area": ["Divine Champion", "Grace Sanctuary", "Jesus House"]
    }
  }
};
