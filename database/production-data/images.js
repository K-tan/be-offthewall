const imagesData = [
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/fox_nc.png?alt=media&token=444f18f9-69ed-41ec-ad53-8cf47d00e026",
    blurb: "Autumnal Fox",
    wall_id: 1,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/fox_quadrapeds.png?alt=media&token=1c3f9c4a-0170-492d-8b2f-9db333f5911c",
    blurb: "Autumnal Fox",
    wall_id: 4,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/birthdaytreasures_trinity_car_park.png?alt=media&token=d2920b1f-1a44-4d6d-9545-333ecdb4d2d6",
    blurb: "Birthday Stretches",
    wall_id: 7,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/fox_shears_yard.png?alt=media&token=03f376be-0ea1-43e0-b77e-bfdfe9f2c4a4",
    blurb: "Autumnal Fox",
    wall_id: 6,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/fox_trinity_car_park.png?alt=media&token=108e85d2-72bc-4a98-81d6-78acd0543984",
    blurb: "Autumnal Fox",
    wall_id: 7,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/music_brewery_wharf_fh.png?alt=media&token=65c7c4a5-9167-4a5a-85a6-fafe7d1679eb",
    blurb: "Music Visible",
    wall_id: 5,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/nomorereplies_bowman.png?alt=media&token=e2327b03-9c78-4188-b358-a71f40dca3fc",
    blurb: "No More Replies",
    wall_id: 2,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/nomorereplies_brewery_wharf_map.png?alt=media&token=b27b8204-c567-4fa1-81c2-6a7e5a3716cb",
    blurb: "No More Replies",
    wall_id: 4,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/nomorereplies_shears_yard.png?alt=media&token=5295d4c5-2328-4a62-8abc-2ac0d279bd5e",
    blurb: "No More Replies",
    wall_id: 6,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/raven_brewery_wharf_map.png?alt=media&token=c3cce66d-3b63-42c3-9ecb-4ed416f914b0",
    blurb: "Why is magic no longer done in England?",
    wall_id: 4,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/raven_nc.png?alt=media&token=b965e5d0-8709-4c13-890f-e6cc718fedcd",
    blurb: "Why is magic no longer done in England?",
    wall_id: 1,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/raven_trinity_car_park.png?alt=media&token=abedd52f-a644-4df2-8782-a44136185fe2",
    blurb: "Why is magic no longer done in England?",
    wall_id: 7,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/sunmoondance_bowman.png?alt=media&token=89c62a95-1d61-42fb-80ab-0506403b98a0",
    blurb: "Sun and Moon Dance",
    wall_id: 2,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/sunmoondance_brewery_wharf_fh.png?alt=media&token=652672d3-9d00-49f2-9836-86c9065f02bd",
    blurb: "Sun and Moon Dance",
    wall_id: 5,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/music_shears_yard.png?alt=media&token=ff2a42ed-b844-4685-9a5d-eb8ef386048b",
    blurb: "Music Visible",
    wall_id: 6,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/alternative_facts_brewery_wharf_map.png?alt=media&token=7e0d4a2a-cab6-45f6-b01d-f862c9ddffdf",
    blurb: "Alternative Facts",
    wall_id: 5,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/sunmoondance_shears_yard.png?alt=media&token=e5001070-bbc2-439c-a66c-01591f0b2974",
    blurb: "Sun and Moon Dance",
    wall_id: 6,
    artist_id: 1
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/raven_yas.png?alt=media&token=6c8d9db5-3b9d-4568-b9f5-5a45e05da76c",
    blurb: "Why is magic no longer done in England?",
    wall_id: 8,
    artist_id: 2
  },
  {
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/slickproject-fbaad.appspot.com/o/music_yas.png?alt=media&token=fcb4cd72-41e1-47f0-88c8-81eb7c762fcc",
    blurb: "Music Visible",
    wall_id: 8,
    artist_id: 2
  }
];

module.exports = imagesData;
