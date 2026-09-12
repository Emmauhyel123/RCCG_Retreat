/* ============================================================
   Province → Zone → Area → Parish
   ------------------------------------------------------------
   This is placeholder data shaped like RCCG's structure so the
   cascading dropdowns on the registration form work out of the
   box. Replace the province/zone/area/parish names below with
   your actual structure — the one real detail from the flyer
   (Strong Tower Zone) is filled in as an example of the shape
   to follow; everything else here is a stand-in.

   Structure: each province has zones; each zone has areas;
   each area has parishes. Keep the nesting — the registration
   form reads it directly to fill each dropdown from the one
   chosen before it.
   ============================================================ */

const LOCATION_DATA = {
  "Taraba Province 2": {
    "Strong Tower Zone": {
      "Wukari Area": [
        "RCCG Strong Tower Zone HQ Parish",
        "RCCG Grace Parish, Wukari",
        "RCCG Victory Parish, Wukari"
      ],
      "Ibi Area": [
        "RCCG Christ Chapel, Ibi",
        "RCCG Mercyland Parish, Ibi"
      ]
    },
    "Jalingo Zone": {
      "Jalingo Central Area": [
        "RCCG City of David, Jalingo",
        "RCCG Peace Parish, Jalingo"
      ],
      "Zing Area": [
        "RCCG New Life Parish, Zing"
      ]
    },
    "Bali Zone": {
      "Bali Area": [
        "RCCG Emmanuel Parish, Bali",
        "RCCG Living Faith Parish, Bali"
      ]
    }
  }
};
