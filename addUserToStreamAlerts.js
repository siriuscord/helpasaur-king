db.getCollection("config").updateOne(
  { default: true },
  { $push: { "streamAlerts.channels": "foxlisk" } }
);

/////////////////////////////////////////////////

db.getCollection("config").updateOne(
  { default: true },
  {
    $set: {
      "streamAlerts.channels": [
        "apathyduck07",
        "appletalk",
        "asazas",
        "authorblues",
        "azder",
        "blank_42",
        "bluntbunny",
        "brashvolksdragon",
        "buane",
        "capncrunch92",
        "caznode",
        "chexhuman",
        "chrillepan",
        "christosowen",
        "daotmb",
        "dbzfankidboo",
        "domturchi",
        "doomtap",
        "dudebrosick",
        "duxlive_",
        "eggtalk",
        "emetatron",
        "emosaru",
        "erirorps",
        "foxlisk",
        "fricker22rta",
        "fsg112",
        "g3rd0",
        "gesellschaft",
        "glan",
        "greenham",
        "greenlinenshirt",
        "greffery",
        "hotarubi_ta",
        "jake57689",
        "joedamillio",
        "johnrossums",
        "joshrta",
        "justgamineuw",
        "kaindeschain",
        "kevin_force",
        "kingwafl",
        "kolthor_thebarbarian",
        "komatsu_nico",
        "lanxion",
        "liam_atlas",
        "linkorange",
        "lui_",
        "maltzi",
        "mchan338",
        "miketheviewer",
        "mishrak109",
        "mkosler",
        "mooglemod",
        "muttski",
        "ninnyz",
        "oase28",
        "parisianplayer",
        "poor_little_pinkus",
        "rambly",
        "rampantrevenant",
        "realjayhawk",
        "runnerwatcher",
        "salatmann92",
        "screevo",
        "shadyforcegames",
        "skarsnikus",
        "sneschalmers_",
        "some_random_npc",
        "supernintaylor",
        "superskuj",
        "tbham",
        "thalanee",
        "thegamingdruid",
        "thesabin",
        "ticklemejcub",
        "timmon_",
        "tm9001",
        "tojso",
        "trueblue83",
        "v0oid",
        "waffle42",
        "walrus_prime",
        "xatherusx",
        "xelna",
        "z3r0j",
        "zoasty"
      ]
    }
  }
);

db.getCollection("config").updateOne(
  { default: true },
  { $set: { "streamAlerts.blacklistedUsers": ["realalphagamer"] } }
);
