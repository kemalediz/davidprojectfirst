// Marvelpedia — character dataset
// Each entry documents: first appearance (year + issue), creators, the films/shows
// the character appears in, the actor(s) who portrayed them, powers, a multi-paragraph
// storyline, an array of "Did You Know?" facts, and (where available) an image URL.
// Used to seed Firestore and as the offline fallback dataset.

window.MARVEL_CHARACTERS = [
  {
    "name": "Iron Man",
    "alias": "Tony Stark",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Tales of Suspense #39 (1963)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Don Heck",
      "Jack Kirby"
    ],
    "actors": [
      "Robert Downey Jr."
    ],
    "films": [
      "Iron Man (2008)",
      "Iron Man 2 (2010)",
      "The Avengers (2012)",
      "Iron Man 3 (2013)",
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Genius-level intellect and engineering mastery",
      "Powered armored suit granting flight, super strength and durability",
      "Repulsor beams, unibeam, and an arsenal of integrated weapons",
      "AI assistants (J.A.R.V.I.S., F.R.I.D.A.Y.)"
    ],
    "storyline": "Anthony Edward \"Tony\" Stark was conceived at the height of the Cold War as a brilliant industrialist and arms manufacturer whose worldview is shattered when he is captured by enemy forces and gravely wounded by shrapnel near his heart. Imprisoned and ordered to build a weapon, he instead secretly constructs a crude powered suit of armor and an electromagnet to keep the shrapnel at bay, escaping his captors and emerging transformed. Renouncing the weapons trade that made his fortune, he refines the technology into ever more sophisticated armor and adopts the identity of Iron Man, becoming a founding member and financier of the Avengers.\n\nAcross decades of comics, Stark's defining struggles are as much internal as external: his battle with alcoholism in the landmark \"Demon in a Bottle\" arc, his role as architect of the pro-registration side in the \"Civil War\" event that fractured the hero community, and his recurring clashes with foes like the Mandarin, Obadiah Stane, and Justin Hammer. His genius is matched by his arrogance, and many of his greatest threats, from rogue armors to artificial intelligences, are unintended consequences of his own inventions.\n\nIn the Marvel Cinematic Universe, Robert Downey Jr.'s portrayal anchored the entire franchise. Tony's journey runs from his escape and reinvention in Iron Man, through his anxiety and near-death experiences, his creation of the rogue AI Ultron, and his ideological split with Captain America over the Sokovia Accords. His relationship with Pepper Potts grounds him, while his mentorship of Peter Parker gives him a paternal arc.\n\nStark's story culminates in Avengers: Endgame, where he helps the surviving heroes reverse Thanos's snap through time travel. In the final battle he seizes the Infinity Stones into his own gauntlet and snaps Thanos and his army out of existence, sacrificing his life to save the universe. His death closes the foundational chapter of the MCU and cements him as its emotional cornerstone.",
    "facts": [
      "His arc reactor both powers his suit and keeps shrapnel from reaching his heart.",
      "The 1979 \"Demon in a Bottle\" storyline made Stark one of the first mainstream superheroes to openly battle alcoholism.",
      "Robert Downey Jr. famously improvised the closing \"I am Iron Man\" line of the 2008 film, which later bookended his arc in Endgame.",
      "Stan Lee said he deliberately made Tony Stark an arms dealer to challenge readers to like a character who embodied things they might oppose."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/346-iron-man.jpg"
  },
  {
    "name": "Captain America",
    "alias": "Steve Rogers",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1941,
    "firstAppearance": "Captain America Comics #1 (1941)",
    "creators": [
      "Joe Simon",
      "Jack Kirby"
    ],
    "actors": [
      "Chris Evans"
    ],
    "films": [
      "Captain America: The First Avenger (2011)",
      "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Peak human strength, speed, agility and endurance via the Super-Soldier Serum",
      "Master tactician and hand-to-hand combatant",
      "Near-indestructible vibranium shield used offensively and defensively",
      "Accelerated healing and resistance to aging"
    ],
    "storyline": "Steve Rogers began as a frail, sickly young man from Brooklyn who was repeatedly rejected by the U.S. Army during World War II. His unbreakable determination caught the attention of Dr. Abraham Erskine, who selected him for the experimental Project Rebirth. Injected with the Super-Soldier Serum and bombarded with Vita-Rays, Rogers emerged transformed into the pinnacle of human physical perfection. When Erskine was assassinated, the secret of the serum died with him, leaving Rogers as a one-of-a-kind soldier who took up the identity of Captain America to battle the Axis powers and the Nazi science division HYDRA.\n\nIn the comics, Captain America fought alongside his young partner Bucky Barnes until a near-fatal mission left him frozen in the Arctic for decades. Revived in the modern age, he found himself a man out of time, becoming a cornerstone and frequent leader of the Avengers. His unwavering moral compass repeatedly placed him at odds with authority, most notably during the Civil War storyline, when he opposed the government-mandated Superhuman Registration Act and led the underground resistance against his friend Tony Stark.\n\nIn the Marvel Cinematic Universe, his arc closely follows these beats: he is awakened from the ice, helps assemble the Avengers, and uncovers HYDRA's infiltration of S.H.I.E.L.D. while discovering that Bucky survived as the brainwashed assassin the Winter Soldier. His refusal to sign the Sokovia Accords fractures the Avengers in Captain America: Civil War, splitting his loyalty to friends from Stark's belief in oversight. He becomes a fugitive before reuniting the team to confront Thanos.\n\nAfter the defeat of Thanos in Avengers: Endgame, Rogers travels back through time to return the Infinity Stones to their proper moments. Rather than return to the present, he chooses to remain in the past to live the full life he was denied, reuniting with his lost love Peggy Carter. He returns as an elderly man to pass his iconic shield and the mantle of Captain America to his friend Sam Wilson, the former Falcon.",
    "facts": [
      "Captain America was originally created as a WWII propaganda hero, and his very first comic cover depicted him punching Adolf Hitler.",
      "The first issue of Captain America Comics sold nearly a million copies, an enormous figure for 1941.",
      "His shield is made of a unique vibranium-steel alloy that was reportedly an accidental, never-reproduced creation.",
      "In Avengers: Endgame, Steve Rogers proved 'worthy' and wielded Thor's hammer Mjolnir against Thanos.",
      "Chris Evans initially turned down the role of Captain America multiple times before accepting it."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/149-captain-america.jpg"
  },
  {
    "name": "Thor",
    "alias": "Thor Odinson",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Journey into Mystery #83 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Chris Hemsworth"
    ],
    "films": [
      "Thor (2011)",
      "The Avengers (2012)",
      "Thor: The Dark World (2013)",
      "Avengers: Age of Ultron (2015)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    "powers": [
      "Asgardian god of thunder with vast superhuman strength and durability",
      "Control over lightning and storms",
      "Wields the enchanted hammer Mjolnir and later the axe Stormbreaker",
      "Extremely long lifespan and accelerated healing"
    ],
    "storyline": "Thor Odinson is the crown prince of Asgard and the Norse-inspired god of thunder, debuting in Journey into Mystery #83 in 1962. In his original Marvel origin, the disabled medical student Dr. Donald Blake discovers a walking stick in a Norwegian cave that transforms into the enchanted hammer Mjolnir, revealing him to be the thunder god in mortal form. Across decades of comics, Thor became a founding member of the Avengers, a defender of both Asgard and Midgard (Earth), and a central player in cosmic conflicts ranging from Ragnarok cycles to the schemes of his adoptive brother Loki.\n\nThe Marvel Cinematic Universe reimagined the character beginning with 2011's Thor, in which the arrogant prince is stripped of his power and cast down to Earth by his father Odin to learn humility. Through that exile he matures into a worthy hero, reclaiming Mjolnir and falling in love with scientist Jane Foster. Over subsequent films he confronts the Dark Elves, battles the genocidal robot Ultron alongside the Avengers, and faces his greatest personal losses.\n\nIn Thor: Ragnarok, his long-lost sister Hela, the goddess of death, shatters Mjolnir and seizes Asgard, forcing Thor to embrace his identity as the god of thunder rather than the god of the hammer and to deliberately trigger Ragnarok to destroy her. The grief deepens in Avengers: Infinity War and Endgame, where Thanos kills half of Asgard's survivors, Loki, and Heimdall; Thor forges the axe Stormbreaker but fails to stop the snap, and spends Endgame consumed by guilt before helping reverse it.\n\nBy Thor: Love and Thunder, a recovered Thor reunites with a now-Mjolnir-wielding Jane Foster, who has become the Mighty Thor while battling cancer, and faces Gorr the God Butcher. Across both comics and film, Thor's arc is a recurring journey from pride toward wisdom and self-sacrifice, leaving him as one of Marvel's most enduring and powerful heroes.",
    "facts": [
      "Only those deemed 'worthy' can lift Mjolnir, an enchantment placed by Odin that has surprised and humbled many heroes and villains alike.",
      "Thor was created in 1962 by Stan Lee, his brother Larry Lieber, and artist Jack Kirby, drawing on real Norse mythology.",
      "In the comics, Thor's secret identity for years was the disabled doctor Donald Blake, who transformed by striking his cane on the ground.",
      "After losing Mjolnir, Thor wields Stormbreaker, an axe forged on Nidavellir that can summon the Bifrost.",
      "Several characters have wielded Mjolnir, including Jane Foster, Captain America, and even Vision and Hela's manipulation of it on screen."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/659-thor.jpg"
  },
  {
    "name": "Hulk",
    "alias": "Bruce Banner",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "The Incredible Hulk #1 (1962)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Eric Bana",
      "Edward Norton",
      "Mark Ruffalo"
    ],
    "films": [
      "Hulk (2003)",
      "The Incredible Hulk (2008)",
      "The Avengers (2012)",
      "Avengers: Age of Ultron (2015)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Virtually limitless superhuman strength that grows with his rage",
      "Extreme durability and rapid regenerative healing",
      "Genius intellect as Bruce Banner",
      "Later merges intellect and brawn as 'Smart Hulk'"
    ],
    "storyline": "Dr. Bruce Banner was a brilliant but emotionally guarded nuclear physicist working on a gamma bomb for the U.S. military. When he rushed onto the test field to save a teenager who had wandered into the blast zone, he absorbed a massive dose of gamma radiation. The exposure unleashed a buried alter ego: whenever Banner experienced rage or fear, he transformed into the Hulk, a green-skinned behemoth of near-limitless strength. Stan Lee and Jack Kirby conceived the character as a fusion of Frankenstein's monster and Dr. Jekyll and Mr. Hyde, embodying the Cold War terror of atomic science and the duality of human nature.\n\nIn the comics, the Hulk has worn many faces over the decades — the savage child-like Hulk, the cunning gray 'Mr. Fixit,' the articulate 'Professor Hulk,' and the terrifying 'World War Hulk' who returned from exile on the alien world Sakaar to wage war on the heroes who banished him. A founding member of the Avengers (who quit after a single issue), Banner has perpetually wrestled with the monster inside, fleeing across the globe to escape the military pursuit led by General Thaddeus 'Thunderbolt' Ross, whose daughter Betty Ross is Banner's great love.\n\nIn the Marvel Cinematic Universe, the Hulk's arc spans more than a decade. After Edward Norton's solo outing, Mark Ruffalo took over the role and made the character central to the Avengers saga. Following his rampage in 'Age of Ultron,' Banner crash-landed on Sakaar and spent two years as a gladiator champion in 'Thor: Ragnarok.' He later achieved a hard-won synthesis as 'Smart Hulk,' merging Banner's mind with the Hulk's body.\n\nThe Hulk's defining moment came in 'Avengers: Endgame': as the only being who could withstand the gamma energy of the reassembled Infinity Stones, Banner donned the Stark Gauntlet and snapped to resurrect everyone Thanos had erased, badly injuring his arm in the process. He emerged not as a cursed man at war with himself but as a hero who had finally made peace with both halves of his identity, and continues to appear as a mentor figure in subsequent stories.",
    "facts": [
      "The angrier the Hulk gets, the stronger he becomes — a power with no clearly defined ceiling.",
      "The Hulk was originally colored gray in his 1962 debut, but printing inconsistencies led Stan Lee to switch him to his iconic green.",
      "Bruce Banner quit the Avengers in the very first issue he appeared in, making him the team's shortest-tenured founding member.",
      "Mark Ruffalo accidentally streamed part of a 'Thor: Ragnarok' premiere on Instagram Live, becoming infamous for Marvel spoiler leaks.",
      "In the 'Planet Hulk' and 'World War Hulk' arcs, the Hulk conquers an alien world and then returns to Earth seeking vengeance on the heroes who exiled him."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/332-hulk.jpg"
  },
  {
    "name": "Black Widow",
    "alias": "Natasha Romanoff",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1964,
    "firstAppearance": "Tales of Suspense #52 (1964)",
    "creators": [
      "Stan Lee",
      "Don Rico",
      "Don Heck"
    ],
    "actors": [
      "Scarlett Johansson"
    ],
    "films": [
      "Iron Man 2 (2010)",
      "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Black Widow (2021)"
    ],
    "powers": [
      "Master spy, assassin and martial artist",
      "Peak human conditioning from Red Room training",
      "Expert marksman and tactician",
      "Signature 'Widow's Bite' electroshock gauntlets"
    ],
    "storyline": "Natasha Romanoff was taken as a child and conditioned in the Red Room, a clandestine Soviet program that forged orphaned girls into elite assassins through brutal training and psychological manipulation. In Marvel's comics she debuted as a glamorous Cold War spy sent against Iron Man, originally a villain in Tales of Suspense before defecting to the West and becoming one of the most enduring members of the Avengers and S.H.I.E.L.D. Her past as a killer left her with what she famously called 'red in my ledger' — a debt she spent the rest of her life trying to repay.\n\nIn the Marvel Cinematic Universe, Natasha is introduced undercover at Stark Industries before being revealed as a S.H.I.E.L.D. operative recruited by Hawkeye, who had been sent to kill her but chose to spare her instead. She becomes a founding member of the Avengers in the Battle of New York, and her arc deepens through The Winter Soldier, where she helps expose HYDRA's infiltration of S.H.I.E.L.D., and Civil War, where she sides with Tony Stark before turning fugitive. Her 2021 solo film fills in the years between Civil War and Infinity War, confronting her Red Room handler Dreykov and the surrogate family — Yelena Belova, Melina and Alexei — she was assigned as a child.\n\nNatasha's defining relationships are her deep, platonic bond with Clint Barton (forged on a mission referenced only as 'Budapest') and her steady loyalty to Steve Rogers and the broader Avengers team. Across the films she repeatedly positions herself as the team's conscience and connective tissue, holding the remnants together after the devastation of Thanos's snap. Haunted by her ledger, she frames heroism as a chance to balance the harm she once caused.\n\nHer story resolves on Vormir in Avengers: Endgame, where the Soul Stone demands a sacrifice. She and Clint each fight to be the one to die, and Natasha wins, falling to her death so that the Avengers can reverse the Blip and defeat Thanos. Her sacrifice is mourned by her teammates and honored as the act that made victory possible, and her legacy continues through Yelena, who takes up the mantle in the wider Marvel saga.",
    "facts": [
      "She and Hawkeye share a long history dating back to a mission they only ever refer to as 'Budapest.'",
      "In her comic-book debut she was a villain sent to defeat Iron Man before defecting to become a hero.",
      "Her sacrifice on Vormir secured the Soul Stone needed to undo Thanos's snap.",
      "The Red Room sterilized its trainees, a detail revealed in Age of Ultron and explored further in her solo film."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/107-black-widow.jpg"
  },
  {
    "name": "Hawkeye",
    "alias": "Clint Barton",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1964,
    "firstAppearance": "Tales of Suspense #57 (1964)",
    "creators": [
      "Stan Lee",
      "Don Heck"
    ],
    "actors": [
      "Jeremy Renner"
    ],
    "films": [
      "Thor (2011)",
      "The Avengers (2012)",
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Master archer with effectively perfect aim",
      "Trick arrows for explosive, electric and specialty effects",
      "Skilled hand-to-hand combatant and tactician",
      "Peak human reflexes"
    ],
    "storyline": "Clint Barton was orphaned young and ran away to a traveling circus, where the Swordsman and Trick Shot trained him into a peerless marksman. In his Silver Age comics debut he first appeared as a costumed criminal, manipulated by the Soviet spy Black Widow into clashing with Iron Man, before quickly turning over a new leaf. Recruited by Iron Man, he joined the second roster of the Avengers alongside Quicksilver and the Scarlet Witch, and despite having no superhuman powers he earned his place through sheer skill, grit and an irreverent attitude that often put him at odds with authority.\n\nOver decades of comics, Barton has been one of Marvel's most enduring everyman heroes. He briefly adopted the identity of the giant Goliath, led the West Coast Avengers, and served as a rallying figure during events like Avengers Disassembled and the Civil War, where he was killed and later resurrected. He has also taken on the darker mantle of Ronin during periods when he set aside the Hawkeye name, a thread the films would later borrow.\n\nIn the Marvel Cinematic Universe, Clint is introduced as a S.H.I.E.L.D. agent who is mind-controlled by Loki in The Avengers, then fights to redeem himself. Age of Ultron reveals his secret family on a remote farm, grounding the team's most human member. After his wife and children vanish in Thanos's Snap, a grief-stricken Clint becomes the brutal vigilante Ronin, slaughtering criminals across the globe until Natasha Romanoff pulls him back. He joins the Avengers' time heist in Endgame, surviving Natasha's sacrifice on Vormir to retrieve the Soul Stone.\n\nWith his family restored, Clint seeks a quiet retirement but is drawn back into action in the Disney+ series Hawkeye, where he reluctantly mentors the young, hero-worshipping archer Kate Bishop and confronts the consequences of his Ronin past. He remains a respected elder statesman of Earth's heroes, balancing duty with a hard-won desire to simply get home to the people he loves.",
    "facts": [
      "He later mentors Kate Bishop, who takes up the Hawkeye mantle.",
      "In his very first comic appearance he was a villain, framed as a thief before becoming a hero.",
      "Despite having no superpowers, he has led teams of super-powered Avengers.",
      "Actor Jeremy Renner is partially deaf in the comics; later stories gave the character hearing aids, reflected in the Disney+ series."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/313-hawkeye.jpg"
  },
  {
    "name": "Spider-Man",
    "alias": "Peter Parker",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Amazing Fantasy #15 (1962)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Tobey Maguire",
      "Andrew Garfield",
      "Tom Holland"
    ],
    "films": [
      "Spider-Man (2002)",
      "Spider-Man 2 (2004)",
      "Spider-Man 3 (2007)",
      "The Amazing Spider-Man (2012)",
      "The Amazing Spider-Man 2 (2014)",
      "Captain America: Civil War (2016)",
      "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)",
      "Spider-Man: No Way Home (2021)"
    ],
    "powers": [
      "Superhuman strength, speed, agility and reflexes",
      "Ability to cling to walls and surfaces",
      "Precognitive 'spider-sense' warning of danger",
      "Genius intellect; inventor of the web-shooters and synthetic webbing"
    ],
    "storyline": "Peter Parker was an orphaned, science-loving teenager raised in Queens, New York, by his Uncle Ben and Aunt May. During a school field trip he was bitten by a radioactive (later retconned as genetically modified) spider, gaining proportionate arachnid abilities. Initially seeking fame and money, Peter ignored a fleeing thief he could have stopped — only for that same criminal to murder Uncle Ben days later. The tragedy seared into him the lesson that 'with great power there must also come great responsibility,' transforming a selfish kid into a selfless hero.\n\nIn the comics, Spider-Man's defining trait is that he is perpetually overwhelmed: juggling rent, romance, school and a hostile press (J. Jonah Jameson's Daily Bugle paints him a menace) while battling a rogues' gallery that includes the Green Goblin, Doctor Octopus, Venom and the Sinister Six. The 1973 'The Night Gwen Stacy Died' storyline, in which Norman Osborn kills Peter's girlfriend, is considered a turning point that ended the Silver Age innocence of comics. Over decades he married Mary Jane Watson, joined the Avengers and the Fantastic Four, and survived controversial arcs such as the Clone Saga and 'One More Day.'\n\nIn the MCU, a teenage Peter (Tom Holland) is recruited by Tony Stark in Captain America: Civil War and mentored across Homecoming and Far From Home, inheriting Stark's technology and his burden after Iron Man's death. The trilogy culminates in Spider-Man: No Way Home (2021), where a botched memory spell by Doctor Strange fractures the multiverse, drawing in villains and the two previous live-action Spider-Men, Tobey Maguire and Andrew Garfield.\n\nTo save everyone, Peter asks Strange to make the entire world forget Peter Parker ever existed — sacrificing his relationships, including his love May's death and his bond with MJ and Ned, to restore order. He ends the film anonymous, broke and alone, stitching together a homemade suit and recommitting to being a true 'friendly neighborhood Spider-Man,' fully embodying the responsibility his uncle first taught him.",
    "facts": [
      "All three live-action Spider-Men — Tobey Maguire, Andrew Garfield and Tom Holland — appeared together on screen in No Way Home (2021).",
      "Amazing Fantasy #15 was nearly cancelled; publisher Martin Goodman reportedly thought a spider-themed teen hero would flop.",
      "Spider-Man was one of the first teenage superheroes to be the lead rather than a sidekick.",
      "The 1973 death of Gwen Stacy is often cited as the moment that ended the Silver Age of comics.",
      "Stan Lee said the idea came from watching a fly crawl on a wall and wondering about a hero who could stick to surfaces."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/620-spider-man.jpg"
  },
  {
    "name": "Black Panther",
    "alias": "T'Challa",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1966,
    "firstAppearance": "Fantastic Four #52 (1966)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Chadwick Boseman"
    ],
    "films": [
      "Captain America: Civil War (2016)",
      "Black Panther (2018)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Black Panther: Wakanda Forever (2022)"
    ],
    "powers": [
      "Enhanced strength, speed and senses from the heart-shaped herb",
      "Vibranium suit that absorbs and redirects kinetic energy",
      "Master martial artist and tactician",
      "King of the technologically advanced nation of Wakanda"
    ],
    "storyline": "T'Challa is the prince and later king of Wakanda, a small, secretive African nation that has remained isolated from the outside world while secretly developing the most advanced technology on Earth, all built upon its monopoly of the rare metal vibranium. The mantle of Black Panther is both a hereditary title and a religious one, granted to the champion of Wakanda after they consume the heart-shaped herb that bestows enhanced strength, speed, and heightened senses, and after they prove themselves in ritual combat. T'Challa first appeared in 1966's Fantastic Four #52, debuting as a cunning strategist who tested the Fantastic Four before revealing himself as an ally, and he went on to become one of the first Black superheroes in mainstream American comics.\n\nIn the comics, T'Challa's reign is defined by his struggle to balance Wakanda's tradition of isolation against the responsibilities of leadership in a wider, often hostile world. He joined the Avengers, served alongside them in countless conflicts, and married the X-Men's Storm in a celebrated union that later dissolved amid political strife. His most enduring nemeses include Erik Killmonger, a rival claimant to the throne, and Klaw, the sonic-powered murderer of his father T'Chaka. Writers from Christopher Priest to Ta-Nehisi Coates deepened his character, exploring Wakandan politics, faith, and the burden of a king who is also a scientist, a warrior, and a symbol.\n\nIn the Marvel Cinematic Universe, Chadwick Boseman's T'Challa is introduced in Captain America: Civil War, where his father is killed in a bombing and he hunts the apparent culprit before being drawn into the Avengers' schism. His solo film, Black Panther, sees him claim the throne, confront the long-buried sins of Wakanda's isolationism, and ultimately defeat his cousin Killmonger, choosing afterward to open Wakanda to the world. He fights and falls in the cosmic war against Thanos, dusted in Infinity War and restored in Endgame to help win the final battle.\n\nFollowing Chadwick Boseman's death in 2020, the MCU chose not to recast the role, and Black Panther: Wakanda Forever honors both the character and the actor, following Wakanda's mourning and the eventual passing of the mantle to T'Challa's sister Shuri. T'Challa's legacy endures as a figure of dignity, intellect, and cultural significance whose impact reached far beyond comics pages.",
    "facts": [
      "Black Panther was the first Black superhero in mainstream American comics, debuting in 1966.",
      "He predates and is unrelated to the Black Panther Party political movement, which formed later in 1966.",
      "In the comics he married the X-Men's Storm, though the marriage was later annulled.",
      "After Chadwick Boseman's death, Marvel chose not to recast T'Challa, passing the mantle to his sister Shuri on screen.",
      "Wakanda's power derives from a meteorite of vibranium, the same metal that forms Captain America's shield."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/106-black-panther.jpg"
  },
  {
    "name": "Doctor Strange",
    "alias": "Stephen Strange",
    "teams": [
      "Avengers",
      "Masters of the Mystic Arts",
      "Defenders",
      "Illuminati"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Strange Tales #110 (1963)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Benedict Cumberbatch"
    ],
    "films": [
      "Doctor Strange (2016)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Spider-Man: No Way Home (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    "powers": [
      "Master of the mystic arts and sorcery",
      "Manipulation of energy, dimensions and time (via the Eye of Agamotto)",
      "Astral projection and interdimensional travel",
      "Wields the sentient Cloak of Levitation"
    ],
    "storyline": "Dr. Stephen Strange was a brilliant but supremely arrogant neurosurgeon whose career and self-worth were defined entirely by his gifted hands. After a catastrophic car accident shatters the nerves in those hands, he exhausts his fortune chasing experimental cures, finally traveling to the Himalayan sanctuary of Kamar-Taj in desperation. There he is taken in by the Ancient One, who shows him a reality far larger than the material world he believed in. Stripped of his ego and reborn through discipline and study, Strange masters the mystic arts and ultimately accepts the mantle of Sorcerer Supreme, Earth's foremost defender against magical and interdimensional threats.\n\nIn the comics created by Stan Lee and Steve Ditko, Strange's adventures are visually surreal journeys through warped dimensions, where he duels recurring foes such as the dread Dormammu, the demon Mephisto, and his treacherous fellow student Baron Mordo. As Sorcerer Supreme he wields artifacts including the Eye of Agamotto and the Cloak of Levitation, and he frequently stands as a founding member of the Defenders alongside the Hulk and Namor. His role as a guardian of the multiverse and member of the secretive Illuminati made him central to cosmic-scale Marvel events.\n\nIn the Marvel Cinematic Universe, Benedict Cumberbatch's Strange follows the same humbling arc before becoming a pivotal figure in the wider saga. He uses the Time Stone to peer through 14,000,605 possible futures during the conflict with Thanos, surrendering the stone to buy the single outcome in which the heroes triumph. He later helps shatter the multiverse in Spider-Man: No Way Home and confronts the consequences of dark magic and alternate versions of himself in Doctor Strange in the Multiverse of Madness.\n\nThroughout both comics and film, Strange's defining tension is the war between his old arrogance and his hard-won wisdom. His relationships, especially with the Ancient One, Wong, and Christine Palmer, ground a character who routinely gambles with cosmic forces. He remains one of Marvel's most important figures, the mortal mind willing to bear unbearable knowledge so that reality itself can endure.",
    "facts": [
      "He viewed 14,000,605 possible futures and found only one where the heroes win.",
      "His Cloak of Levitation is sentient and famously picks Strange as its wearer.",
      "Co-creator Steve Ditko's psychedelic, dimension-bending artwork made the character a cult favorite of the 1960s counterculture.",
      "His mystic incantations often invoke entities like the Vishanti, Agamotto, and Dormammu.",
      "In the comics he holds the title of Sorcerer Supreme, the single mortal designated to defend Earth from magical threats."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/226-doctor-strange.jpg"
  },
  {
    "name": "Scarlet Witch",
    "alias": "Wanda Maximoff",
    "teams": [
      "Avengers"
    ],
    "category": "Anti-Hero",
    "created": 1964,
    "firstAppearance": "The X-Men #4 (1964)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Elizabeth Olsen"
    ],
    "films": [
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "WandaVision (TV, 2021)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    "powers": [
      "Chaos magic and reality manipulation",
      "Telekinesis and energy projection",
      "Telepathy and mental manipulation",
      "Flight and matter alteration"
    ],
    "storyline": "Wanda Maximoff first appeared in 1964 as a reluctant member of Magneto's Brotherhood of Evil Mutants alongside her twin brother Pietro, the speedster Quicksilver. Originally depicted as a mutant able to alter probability with \"hex\" powers, she soon defected to the Avengers, where she became a long-serving member and fell in love with the synthezoid Vision, with whom she conceived children through her reality-bending abilities.\n\nIn the comics, Wanda's powers were later reframed as chaos magic, and she grew into one of the most formidable beings in the Marvel universe. Her arcs are marked by profound trauma and instability: the loss of her children, a mental breakdown that drove the catastrophic \"Avengers Disassembled\" event, and the \"House of M\" storyline, in which she rewrites reality and ultimately depowers most of the world's mutants with the whispered words \"No more mutants.\"\n\nIn the Marvel Cinematic Universe, Elizabeth Olsen's Wanda gains her abilities from experiments with the Mind Stone rather than mutation. She loses her brother in the battle against Ultron, finds and then loses Vision, and is forced to watch him die twice in Avengers: Infinity War. Her grief becomes the engine of the series WandaVision, in which she unconsciously enslaves an entire town inside a sitcom-styled fantasy to keep a constructed version of her family alive.\n\nThat grief curdles into villainy in Doctor Strange in the Multiverse of Madness, where, corrupted by the Darkhold, she hunts America Chavez across the multiverse to reclaim her lost sons. Confronted by an alternate version of her own children who fear her, Wanda recognizes the monster she has become, destroys the Darkhold and its temple, and apparently sacrifices herself, leaving her ultimate fate ambiguous.",
    "facts": [
      "In the \"House of M\" comics she reshaped reality and then erased most of mutantkind with the words \"No more mutants.\"",
      "Because of a rights split between Marvel and Fox, the MCU could not call her a \"mutant\" or use the word \"Magneto\" for years.",
      "She and Vision married and had twin sons, Billy and Tommy, who later became the heroes Wiccan and Speed.",
      "Elizabeth Olsen and Aaron Taylor-Johnson, who played her brother Quicksilver, had previously co-starred as a couple in the 2014 film Godzilla."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/579-scarlet-witch.jpg"
  },
  {
    "name": "Vision",
    "alias": "Vision",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1968,
    "firstAppearance": "The Avengers #57 (1968)",
    "creators": [
      "Roy Thomas",
      "John Buscema"
    ],
    "actors": [
      "Paul Bettany"
    ],
    "films": [
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "WandaVision (TV, 2021)"
    ],
    "powers": [
      "Synthetic android body powered by the Mind Stone",
      "Density control — can phase through walls or become diamond-hard",
      "Flight and energy beam projection from the Mind Stone",
      "Superhuman intellect linked to the J.A.R.V.I.S. AI"
    ],
    "storyline": "In the comics, Vision is a synthetic android (or 'synthezoid') created by the villainous robot Ultron, who intended to use him as a weapon against the Avengers. Built using the brain patterns of the original Human Torch's android body and the consciousness of the deceased hero Wonder Man, Vision instead turned against his creator and joined the Avengers. His struggle to understand humanity and emotion, despite being a machine, became one of the defining character studies of the team.\n\nA central thread of Vision's story is his romance with Wanda Maximoff, the Scarlet Witch. Their unlikely marriage and the children Wanda created through her magic became the emotional core of several landmark Avengers arcs, while also setting up future tragedy. His quest to be more human, including the acclaimed solo series in which he builds himself a synthetic family in suburbia, explores the dark consequences of an android trying to imitate ordinary life.\n\nIn the Marvel Cinematic Universe, Vision is born from the combination of Ultron's intended body, the artificial intelligence J.A.R.V.I.S., and the power of the Mind Stone embedded in his forehead. He immediately proves his worth and benevolence by effortlessly lifting Thor's hammer Mjolnir, an act that startles and reassures the assembled Avengers. He develops a deep relationship with Wanda Maximoff and stands among the team's most powerful members.\n\nVision meets a grim end in Avengers: Infinity War: to stop Thanos from acquiring the Mind Stone, Wanda destroys it (and him) at his request, only for Thanos to reverse time and tear the stone from his head, killing him a second time. His story continues posthumously in the series WandaVision, where Wanda's grief manifests a magical recreation of him within the reality-warped town of Westview, exploring loss, denial and acceptance.",
    "facts": [
      "Vision effortlessly lifted Thor's hammer Mjolnir, stunning the Avengers and proving his pure heart.",
      "In the comics, Vision was built partly from the body of the original Golden Age Human Torch android.",
      "Actor Paul Bettany had already voiced Tony Stark's AI J.A.R.V.I.S. for years before becoming its physical embodiment as Vision.",
      "His comic-book marriage to the Scarlet Witch and their magically conceived children fueled decades of Avengers storylines.",
      "Vision can alter his body's density to phase like a ghost or become as hard as diamond."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/697-vision.jpg"
  },
  {
    "name": "Ant-Man",
    "alias": "Scott Lang",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1979,
    "firstAppearance": "The Avengers #181 (1979)",
    "creators": [
      "David Michelinie",
      "John Byrne",
      "Bob Layton"
    ],
    "actors": [
      "Paul Rudd"
    ],
    "films": [
      "Ant-Man (2015)",
      "Captain America: Civil War (2016)",
      "Ant-Man and the Wasp (2018)",
      "Avengers: Endgame (2019)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    "powers": [
      "Shrinks to insect size or grows giant using Pym Particles",
      "Retains full strength when miniaturized",
      "Communicates with and commands ants",
      "Access to the subatomic Quantum Realm"
    ],
    "storyline": "Scott Lang is the second character to take up the Ant-Man mantle, created by David Michelinie, John Byrne, and Bob Layton and first appearing in The Avengers #181 in 1979. Originally an electronics expert turned burglar, Lang steals the Ant-Man suit from its inventor Dr. Hank Pym to break into the facility of Darren Cross in a desperate bid to save his sick daughter. Rather than punishing him, Pym recognizes Lang's good heart and allows him to keep the suit, beginning his transformation from petty criminal into a genuine superhero.\n\nIn the comics, Lang served as a reformed thief and engineer who worked alongside the Fantastic Four and eventually became a member of the Avengers, though his journey included death and resurrection across various storylines. His defining trait is his everyman quality: a divorced father trying to do right by his daughter Cassie, who herself later becomes the hero Stature.\n\nThe Marvel Cinematic Universe brought this version to the screen in 2015's Ant-Man, with Paul Rudd's comedic, relatable take. Mentored by an older Hank Pym, Scott masters the shrinking and ant-controlling technology and defeats Cross's Yellowjacket. He is later drawn into the Avengers' conflict in Captain America: Civil War, fighting on Captain America's side and discovering he can also grow to giant size.\n\nScott's most pivotal contribution comes after Avengers: Endgame: trapped in the Quantum Realm for five years (which passes as mere hours for him), he emerges with the insight that the realm's time dynamics could enable time travel. This realization gives the surviving Avengers the means to undo Thanos's snap through the 'time heist.' He continues to grapple with the Quantum Realm and the villain Kang in Ant-Man and the Wasp: Quantumania, cementing his role as an unlikely but crucial hero.",
    "facts": [
      "Scott Lang's escape from the Quantum Realm gave the Avengers the key to time travel, making Endgame's plan to undo the snap possible.",
      "He is the second Ant-Man; the original was the suit's inventor, scientist Hank Pym.",
      "Lang began as a reformed burglar who stole the suit to help his daughter, and Pym let him keep it.",
      "Paul Rudd's casting brought a comedic, everyman tone that became a signature of the Ant-Man films.",
      "As Giant-Man, Scott can also grow to enormous size, a power showcased in the Civil War airport battle."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/30-ant-man.jpg"
  },
  {
    "name": "The Wasp",
    "alias": "Hope van Dyne",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Tales to Astonish #44 (1963, Janet van Dyne)",
    "creators": [
      "Stan Lee",
      "Jack Kirby",
      "Ernie Hart"
    ],
    "actors": [
      "Evangeline Lilly"
    ],
    "films": [
      "Ant-Man and the Wasp (2018)",
      "Avengers: Endgame (2019)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    "powers": [
      "Shrinks and grows via Pym Particles",
      "Wings and integrated blasters built into her suit",
      "Expert martial artist and combatant",
      "Skilled scientist and pilot"
    ],
    "storyline": "The Wasp identity originated in the comics with Janet van Dyne, a wealthy socialite who became one of the founding members of the Avengers and famously coined the team's name. In the Marvel Cinematic Universe, the mantle passes to Hope van Dyne, the daughter of Hank Pym and the original Wasp, Janet. Growing up, Hope believed her mother had abandoned the family, when in truth Janet had sacrificed herself by shrinking to a subatomic scale to disarm a missile, becoming lost in the mysterious Quantum Realm.\n\nIntroduced in the first 'Ant-Man' film as a sharp, capable executive estranged from her father, Hope was initially denied the chance to wear a suit despite being more qualified than the recruited ex-con Scott Lang. By 'Ant-Man and the Wasp,' she finally took up her mother's legacy with an upgraded suit featuring wings and energy blasters, partnering with Lang on a mission to retrieve Janet from the Quantum Realm — a rescue that succeeded, reuniting the family after thirty years.\n\nHope's story intersects with the broader Avengers saga at a tragic moment: in the post-credits scene of her own film, she and her parents are dusted by Thanos's Snap while Scott is trapped in the Quantum Realm, a coincidence that ultimately saves him and provides the key to time travel in 'Avengers: Endgame.' Restored to life, she fought in the final battle against Thanos. In 'Quantumania,' Hope and the Pym-Lang family are pulled back into the Quantum Realm, where they confront the time-traveling conqueror Kang and Janet's hidden history with him. Hope remains a powerful, scientifically gifted heroine balancing family legacy with her own identity.",
    "facts": [
      "The original Wasp, Janet van Dyne, named the Avengers in the comics.",
      "Hope van Dyne was created specifically for the MCU and did not exist in the mainline comics; she was loosely inspired by an alternate-universe character, Hope Pym (the villain Red Queen).",
      "'Ant-Man and the Wasp' was the first MCU film to feature a female hero in the title.",
      "Janet van Dyne spent thirty years lost in the Quantum Realm, where she evolved strange abilities from prolonged exposure to its energies."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/708-wasp.jpg"
  },
  {
    "name": "Falcon",
    "alias": "Sam Wilson",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1969,
    "firstAppearance": "Captain America #117 (1969)",
    "creators": [
      "Stan Lee",
      "Gene Colan"
    ],
    "actors": [
      "Anthony Mackie"
    ],
    "films": [
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Age of Ultron (2015)",
      "Ant-Man (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "The Falcon and the Winter Soldier (TV, 2021)",
      "Captain America: Brave New World (2025)"
    ],
    "powers": [
      "Winged flight suit with maneuverable mechanical wings",
      "Redwing reconnaissance drone",
      "Expert aerial combatant and marksman",
      "Trained pararescue airman"
    ],
    "storyline": "Sam Wilson first appeared in Marvel's comics in 1969 as the Falcon, partnering with Captain America and originally accompanied by a telepathically linked falcon named Redwing. He is widely recognized as one of the first African-American superheroes in mainstream comics, and his long association with Steve Rogers made him a natural successor when the publisher later passed him the Captain America mantle. His grounded, community-minded heroism, rooted in his work as a social worker in Harlem, set him apart from the more militaristic heroes around him.\n\nIn the Marvel Cinematic Universe, Sam is introduced as an Air Force pararescue veteran who befriends Steve Rogers while both are processing the costs of service. He joins the fight against HYDRA in The Winter Soldier using a military-grade EXO-7 winged flight harness, then helps Steve hunt for Bucky Barnes and ultimately sides with him during the Avengers' civil war, becoming a fugitive alongside the Secret Avengers.\n\nSam fights in the climactic battles against Thanos, is dusted in the Blip, and returns for the final stand in Endgame. In that film's closing moments, an elderly Steve Rogers chooses Sam over Bucky to inherit the shield and the title of Captain America, an emotionally weighted handoff that frames Sam as Steve's true heir.\n\nThe Disney+ series The Falcon and the Winter Soldier follows Sam's reluctance to take up the shield in a world skeptical of a Black Captain America, his confrontation with the Flag-Smashers and John Walker, and his eventual decision to fully embrace the mantle in a custom Wakandan-made suit. He leads the franchise forward as the new Captain America in Brave New World, cementing the legacy passed to him by Steve.",
    "facts": [
      "He is widely cited as the first African-American superhero in mainstream American comics.",
      "His comic-book version shares a telepathic bond with a real falcon named Redwing; the MCU reimagined Redwing as a combat drone.",
      "At the end of Avengers: Endgame, Steve Rogers personally chose Sam to become the next Captain America.",
      "Anthony Mackie reprises the role as the lead of Captain America: Brave New World, the first MCU Cap film headlined by Sam."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/251-falcon.jpg"
  },
  {
    "name": "Winter Soldier",
    "alias": "Bucky Barnes",
    "teams": [
      "Avengers"
    ],
    "category": "Anti-Hero",
    "created": 1941,
    "firstAppearance": "Captain America Comics #1 (1941)",
    "creators": [
      "Joe Simon",
      "Jack Kirby"
    ],
    "actors": [
      "Sebastian Stan"
    ],
    "films": [
      "Captain America: The First Avenger (2011)",
      "Captain America: The Winter Soldier (2014)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Cybernetic vibranium arm with enhanced strength",
      "Peak human/enhanced physique from HYDRA's serum",
      "Master assassin, marksman and hand-to-hand fighter",
      "Accelerated healing"
    ],
    "storyline": "James Buchanan 'Bucky' Barnes debuted in 1941 as Captain America's teenage sidekick, a plucky young soldier fighting Nazis alongside the star-spangled hero during World War II. For decades his death in the war's closing days was treated as one of the few permanent fatalities in comics, a tragedy that haunted the revived Steve Rogers. That changed in 2005, when writer Ed Brubaker revealed that Bucky had survived, been recovered by the Soviets, and reprogrammed into the Winter Soldier, a ghostly, amnesiac assassin responsible for countless killings across the Cold War.\n\nAfter Captain America restores his memories using the reality-warping Cosmic Cube, Bucky struggles to atone for the crimes committed under HYDRA's control. When Steve Rogers is seemingly assassinated, Bucky takes up the shield and serves as a new Captain America, proving himself a worthy heir before eventually returning to his own identity. His arc is one of comics' most celebrated redemption stories.\n\nIn the Marvel Cinematic Universe, Sebastian Stan's Bucky falls from a train in The First Avenger and is presumed dead, only to resurface in The Winter Soldier as HYDRA's brainwashed enforcer who nearly kills his old friend. Civil War explores the fallout as he is framed and hunted, driving a wedge between Captain America and Iron Man. He is later cured of his HYDRA trigger words by Wakandan scientists, who also fit him with a new vibranium arm, and he fights in the climactic battles of Infinity War and Endgame.\n\nPost-Endgame, Bucky confronts his guilt and seeks to make amends in the series The Falcon and the Winter Soldier, building an uneasy partnership with Sam Wilson, the new Captain America. He continues to appear as a reformed operative and reluctant hero, embodying the long road from weapon back to man.",
    "facts": [
      "His arm was upgraded to vibranium by Wakandan scientists.",
      "For over 40 years his comic-book death was treated as permanent, a rarity in Marvel history.",
      "He briefly served as Captain America after Steve Rogers's apparent death.",
      "The HYDRA trigger phrase that activated him in Civil War was a sequence of ten Russian words."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/714-winter-soldier.jpg"
  },
  {
    "name": "Star-Lord",
    "alias": "Peter Quill",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1976,
    "firstAppearance": "Marvel Preview #4 (1976)",
    "creators": [
      "Steve Englehart",
      "Steve Gan"
    ],
    "actors": [
      "Chris Pratt"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Half-Celestial heritage granting latent cosmic power",
      "Skilled pilot, marksman and quick-thinking improviser",
      "Jet boots and a helmet providing flight and life support",
      "Charismatic, if reckless, leader of the Guardians"
    ],
    "storyline": "Peter Quill was born on Earth to a human mother, Meredith Quill, and a mysterious father he never knew. On the night his mother died of cancer in 1988, the grieving boy fled the hospital and was abducted by the Ravagers, a band of space pirates led by Yondu Udonta. Raised among thieves and smugglers, Peter grew into the swaggering outlaw 'Star-Lord,' clinging to his last gifts from home: a Walkman and a mixtape of 1970s and '80s pop hits.\n\nIn the first Guardians of the Galaxy (2014), Quill steals a mysterious orb and reluctantly bands together with the assassin Gamora, the literal-minded warrior Drax, the cybernetic raccoon Rocket and the tree-like Groot. Discovering the orb holds an Infinity Stone, the misfits unite to stop the fanatic Ronan the Accuser from destroying Xandar, finding in one another the family none of them ever had.\n\nIn Vol. 2 (2017), Quill meets his biological father, the Celestial Ego, who reveals Peter is half-god and could share in remaking the universe. When Quill learns Ego implanted the tumor that killed his mother as part of a galaxy-wide 'Expansion,' he rejects godhood and helps destroy him — while Yondu sacrifices himself, proving the Ravager was Peter's true father all along. Quill's romance with Gamora deepens, only for her to be killed by Thanos in Infinity War.\n\nHis grief-driven outburst in Infinity War inadvertently dooms the heroes' plan to remove the Gauntlet. After the events of Endgame restore an alternate-timeline Gamora who doesn't remember him, Quill spends Vol. 3 (2023) helping rescue Rocket, ultimately stepping down as leader and returning to Earth to reconnect with his elderly grandfather — finally coming full circle to the home he was taken from.",
    "facts": [
      "His beloved mixtapes, 'Awesome Mix Vol. 1 & 2,' drive the films' hit retro soundtracks.",
      "Star-Lord is half-Celestial, the son of the living planet Ego, making him one of the more powerful beings he never fully taps into.",
      "The original 1976 comics version of Star-Lord was a far darker, more brooding cosmic character than the comedic film incarnation.",
      "Chris Pratt lost roughly 60 pounds to land the role after being known mainly for comedic parts."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/630-star-lord.jpg"
  },
  {
    "name": "Gamora",
    "alias": "Gamora",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1975,
    "firstAppearance": "Strange Tales #180 (1975)",
    "creators": [
      "Jim Starlin"
    ],
    "actors": [
      "Zoe Saldaña"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Superhuman strength, speed and durability from cybernetic enhancement",
      "Master assassin and martial artist",
      "Expert with bladed weapons, especially her sword Godslayer"
    ],
    "storyline": "Gamora was created by writer-artist Jim Starlin in 1975 as part of his sprawling cosmic Thanos saga, debuting in Strange Tales #180. The last survivor of an alien race called the Zen-Whoberis, she was orphaned when Thanos exterminated her people, and the Mad Titan took her in, raising her as his adopted daughter and personal weapon. Under his merciless tutelage she was honed into the most lethal assassin in the galaxy, earning the title 'the deadliest woman in the whole galaxy,' though her loyalty to Thanos was always shadowed by resentment for what he had done.\n\nIn the comics, Gamora eventually turns against her adoptive father, allying with figures like Adam Warlock and the cosmic hero community to thwart Thanos's genocidal ambitions. Her relationship with Warlock becomes a recurring emotional anchor across decades of cosmic storytelling. When the modern Guardians of the Galaxy team was reformed in the 2008 Annihilation: Conquest era, Gamora became a core member, lending the team her combat expertise and her hard-won moral compass as a former killer seeking redemption.\n\nThe Marvel Cinematic Universe, with Zoe Saldaña in the role, brought Gamora to a global audience in 2014's Guardians of the Galaxy. There she is introduced as Thanos's estranged daughter, sent to retrieve an Infinity Stone but defecting to join Star-Lord, Drax, Rocket, and Groot. Her arc explores her fractured rivalry with her cybernetic sister Nebula, both of them victims of Thanos's cruelty, and across the films their hatred slowly thaws into solidarity.\n\nGamora's MCU story takes a devastating turn in Avengers: Infinity War, when Thanos sacrifices her on the planet Vormir to obtain the Soul Stone, killing the one person he genuinely loved. In Endgame, however, a Gamora from an earlier point in the timeline is pulled into the present and survives, walking away from the Guardians as a different woman who does not share the memories of her relationship with Star-Lord. This alternate Gamora reappears in Guardians of the Galaxy Vol. 3, where she fights alongside the team one last time before choosing her own path with the Ravagers, having found a kind of peace independent of the family she once knew.",
    "facts": [
      "She is the last survivor of the Zen-Whoberi people, exterminated by Thanos.",
      "Comic legend Jim Starlin created her, along with Thanos and Drax, as part of his cosmic Marvel saga.",
      "In the comics she has a long romantic and spiritual bond with Adam Warlock.",
      "Thanos sacrificed her for the Soul Stone in Infinity War, but an alternate-timeline version survives in later films.",
      "Her signature weapon, Godslayer, is a folding sword capable of cutting through nearly anything."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/275-gamora.jpg"
  },
  {
    "name": "Drax",
    "alias": "Drax the Destroyer",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1973,
    "firstAppearance": "The Invincible Iron Man #55 (1973)",
    "creators": [
      "Jim Starlin",
      "Mike Friedrich"
    ],
    "actors": [
      "Dave Bautista"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Superhuman strength and durability",
      "Skilled warrior with knives",
      "High pain tolerance and resilience",
      "Enhanced stamina and slowed aging"
    ],
    "storyline": "In the comics, Drax the Destroyer began as Arthur Douglas, an ordinary human whose family was attacked by the mad Titan Thanos. To create a being capable of destroying his own son, the cosmic entity Kronos transplanted Douglas's spirit into a powerful new body, giving Drax a single purpose: kill Thanos. This origin tied Drax permanently to the cosmic corner of the Marvel Universe, where he repeatedly clashed with Thanos across galaxy-spanning sagas devised by his co-creator Jim Starlin.\n\nDrax's characterization shifted significantly over the decades, from a hulking, simple-minded destroyer to a leaner, knife-wielding warrior, and he became a core member of the modern Guardians of the Galaxy during the cosmic relaunch of the 2000s. His bond with his resurrected daughter, the powerful telepath Moondragon, adds emotional weight to his otherwise vengeance-driven existence.\n\nIn the Marvel Cinematic Universe, Dave Bautista's Drax has his family murdered by Ronan the Accuser acting on Thanos's behalf, fueling the same thirst for revenge. He joins Star-Lord's ragtag Guardians and finds an unexpected new family among them. His blunt, hyper-literal way of speaking, an inability to grasp metaphor, becomes a defining source of the films' humor, even as he reveals deep tenderness and loyalty.\n\nAcross Infinity War and Endgame, Drax fights alongside the Avengers against Thanos, is dusted by the Snap, and is restored five years later for the final battle. In Guardians of the Galaxy Vol. 3 he helps rescue Rocket and confront the High Evolutionary, ultimately settling into a quieter role as a protector and caretaker, finally finding peace in the family he chose rather than the one he lost.",
    "facts": [
      "He takes everything literally — metaphors fly right past him.",
      "In the comics, Drax was originally a human named Arthur Douglas, recreated specifically to kill Thanos.",
      "His comic-book daughter is Moondragon, one of Marvel's most powerful telepaths.",
      "Actor Dave Bautista was a professional WWE wrestler before taking on the role.",
      "Drax claims his species' reflexes are so fast that he is 'too literal' to be fooled — a running gag across the films."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/234-drax-the-destroyer.jpg"
  },
  {
    "name": "Rocket",
    "alias": "Rocket Raccoon",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1976,
    "firstAppearance": "Marvel Preview #7 (1976)",
    "creators": [
      "Bill Mantlo",
      "Keith Giffen"
    ],
    "actors": [
      "Bradley Cooper (voice)"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Genius-level engineer and weapons builder",
      "Expert marksman and tactician",
      "Enhanced agility and heightened animal senses"
    ],
    "storyline": "Rocket Raccoon debuted in 1976 in a story loosely inspired by the Beatles song \"Rocky Raccoon,\" originally as a whimsical guardian of a planet called Halfworld populated by intelligent animals. He was reimagined for a darker, more grounded role when writer Dan Abnett and Andy Lanning folded him into their relaunched Guardians of the Galaxy in 2008, pairing him with the sentient tree Groot and casting him as a hardened tactician and gunslinger.\n\nThe character reached global fame through the Marvel Cinematic Universe, where Bradley Cooper voices him and the visual effects render him as a wisecracking, heavily armed bounty hunter with a chip on his shoulder. Beneath the bravado lies deep pain over what was done to create him, and his closest bond is with Groot, whose loss and rebirth he endures across multiple films.\n\nRocket's role expands over the saga: he survives Thanos's snap, helps orchestrate the time heist in Avengers: Endgame, and becomes a stabilizing leader figure within the Guardians and even briefly among the Asgardians. His engineering genius and willingness to attempt impossible heists repeatedly turn the tide for his team.\n\nHis tragic origin is finally revealed in Guardians of the Galaxy Vol. 3, where the sadistic High Evolutionary is shown to have surgically and cybernetically tortured him into sentience, killing his beloved friends, the otter Lylla, the walrus Teefs, and the rabbit Floor. Confronting his maker and freeing other experimental creatures, Rocket finally makes peace with his past and steps fully into leadership of the Guardians.",
    "facts": [
      "He bristles at being called a \"rodent\" or a \"raccoon,\" insisting there is nothing else like him in the universe.",
      "His creation was loosely inspired by the Beatles song \"Rocky Raccoon.\"",
      "In Guardians of the Galaxy Vol. 3 his cybernetic enhancements and his lost friends Lylla, Teefs and Floor are finally shown on screen.",
      "His on-set reference performance was provided by Bradley Cooper's voice and by actor Sean Gunn, the director's brother, who acted out the role physically."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/566-rocket-raccoon.jpg"
  },
  {
    "name": "Groot",
    "alias": "Groot",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1960,
    "firstAppearance": "Tales to Astonish #13 (1960)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Vin Diesel (voice)"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Sentient tree-like physiology with regeneration",
      "Can grow, extend and reshape his limbs",
      "Superhuman strength and durability",
      "Regrows entirely from a cutting"
    ],
    "storyline": "Groot first appeared in 1960 not as a hero but as a monstrous alien invader in the pre-superhero Marvel monster comics, a towering tree creature from Planet X who came to Earth intending to capture humans for experiments. Decades later the character was reimagined and rehabilitated, eventually becoming a noble member of the modern Guardians of the Galaxy, a sentient tree-like being whose vocabulary is limited almost entirely to the phrase 'I am Groot.'\n\nDespite this seemingly simple communication, Groot conveys complex meaning through subtle inflection, understood best by his closest companion, the genetically engineered Rocket Raccoon. The pairing of the cynical, foul-tempered Rocket with the gentle, loyal Groot became one of the most beloved duos in modern Marvel storytelling, blending humor with genuine pathos.\n\nIn the Marvel Cinematic Universe, Groot joins forces with Star-Lord, Gamora, Drax and Rocket to oppose Ronan the Accuser. In the climax of the first film, Groot sacrifices himself to shield the entire team from a deadly crash, uttering the variation 'We are Groot' to express his bond with them. From a salvaged twig he regrows into the adorable, mischievous Baby Groot.\n\nAcross subsequent films Groot matures from infancy through a surly adolescence and into adulthood, continuing to fight alongside the Guardians against threats including Thanos and the High Evolutionary. His regenerative biology means that even apparent death is rarely permanent, allowing the character to be reborn and to grow anew as the team's emotional touchstone.",
    "facts": [
      "Despite saying only 'I am Groot,' his companion Rocket understands his every nuance perfectly.",
      "Groot originally debuted in 1960 as a villainous alien monster, decades before becoming a heroic Guardian.",
      "Vin Diesel recorded the line 'I am Groot' in multiple languages for the films' international releases.",
      "Groot can regrow his entire body from a single salvaged twig or cutting.",
      "The line 'We are Groot' marked his selfless sacrifice to save the Guardians in the first film."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/303-groot.jpg"
  },
  {
    "name": "Nebula",
    "alias": "Nebula",
    "teams": [
      "Guardians of the Galaxy",
      "Avengers"
    ],
    "category": "Anti-Hero",
    "created": 1985,
    "firstAppearance": "The Avengers #257 (1985)",
    "creators": [
      "Roger Stern",
      "John Buscema"
    ],
    "actors": [
      "Karen Gillan"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Extensive cybernetic enhancements granting strength and durability",
      "Interchangeable mechanical body parts and weapons",
      "Skilled assassin and combatant",
      "Expert pilot and tactician"
    ],
    "storyline": "Nebula debuted in The Avengers #257 in 1985, created by Roger Stern and John Buscema. In the comics she is a ruthless space pirate who claims to be the granddaughter of Thanos, leading her own marauder crew and seizing control of Sanctuary, Thanos's former base. Cybernetically enhanced and relentlessly ambitious, she clashes with the Avengers and other cosmic powers, and at one point even wields the reality-warping power of the Infinity Gauntlet before it is wrested away from her.\n\nThe Marvel Cinematic Universe substantially reworked her character, making her one of Thanos's two adopted daughters alongside Gamora. In this version, Thanos forced the sisters to fight one another, and each time Nebula lost, he 'upgraded' her by replacing parts of her body with machinery, deepening both her pain and her hatred of him. This abusive history defines her arc across the films.\n\nIntroduced in Guardians of the Galaxy (2014) as an antagonist serving Ronan, Nebula gradually shifts allegiance. In Guardians of the Galaxy Vol. 2 she reconciles, however uneasily, with Gamora as they confront their shared trauma. Her transformation accelerates in Avengers: Infinity War and Endgame, where she allies with the surviving heroes against Thanos.\n\nIn Endgame, a present-day Nebula confronts a past version of herself loyal to Thanos and kills her, a striking act symbolizing how far she has come. By Guardians of the Galaxy Vol. 3 she is a fully integrated member of the team, even helping build a new home for rescued beings. Her journey from broken weapon to compassionate hero is one of the MCU's most complete redemption stories.",
    "facts": [
      "In Avengers: Endgame she confronts and kills a past version of herself who is still loyal to Thanos.",
      "Each time she lost a duel to her sister Gamora, Thanos rebuilt part of her body with cybernetics as punishment.",
      "In the comics, Nebula briefly wielded the Infinity Gauntlet after claiming to be Thanos's granddaughter.",
      "Karen Gillan shaved her head to play the fully bald, cybernetic Nebula on screen.",
      "Her MCU arc takes her from villain to a core member of the Guardians of the Galaxy."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/487-nebula.jpg"
  },
  {
    "name": "Wolverine",
    "alias": "Logan / James Howlett",
    "teams": [
      "X-Men"
    ],
    "category": "Anti-Hero",
    "created": 1974,
    "firstAppearance": "The Incredible Hulk #180-181 (1974)",
    "creators": [
      "Roy Thomas",
      "Len Wein",
      "John Romita Sr."
    ],
    "actors": [
      "Hugh Jackman"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men Origins: Wolverine (2009)",
      "The Wolverine (2013)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)",
      "Logan (2017)",
      "Deadpool & Wolverine (2024)"
    ],
    "powers": [
      "Accelerated healing factor that regenerates from nearly any wound",
      "Adamantium-laced skeleton and retractable claws",
      "Heightened animal senses",
      "Greatly slowed aging"
    ],
    "storyline": "Born James Howlett in 19th-century Canada, the mutant who would become Wolverine has lived for well over a century, his aging slowed to a crawl by a powerful regenerative healing factor. His bone claws and animal-keen senses marked him as a mutant from boyhood, and his long, violent life saw him fight in multiple wars and drift through countless identities under the name Logan. The trauma of his past left his memory fragmented, a wound deeper than any his healing factor could mend.\n\nWolverine's defining transformation came through the clandestine Weapon X program, which abducted him and bonded the indestructible metal adamantium to his entire skeleton and claws, turning him into a living weapon while erasing much of who he was. Escaping his handlers, Logan eventually found a home with Professor Charles Xavier's X-Men, where his berserker rage and reluctance to trust gradually gave way to fierce loyalty. He became one of Marvel's most popular characters, known for the iconic phrase 'I'm the best there is at what I do, but what I do best isn't very nice.'\n\nHugh Jackman's portrayal across the Fox X-Men films redefined the character for a generation, beginning with 2000's 'X-Men' and culminating in performances that earned both blockbuster success and critical acclaim. His relationships with the telepath Jean Grey and the young Rogue grounded the early films emotionally, while later entries explored his Weapon X origins and his journey to Japan.\n\nThe 2017 film 'Logan' offered a stark, elegiac send-off: in a bleak near-future where mutants are nearly extinct, an aging, dying Logan protects a young mutant girl, Laura (X-23), who shares his abilities, and finally dies in her arms — a rare comic-book death allowed to carry real weight. Jackman returned in 2024's 'Deadpool & Wolverine,' bringing the character into the MCU multiverse and donning the comic-accurate yellow-and-blue costume for the first time on screen.",
    "facts": [
      "Hugh Jackman played the role across 24 years, a record for an actor portraying a single superhero.",
      "Wolverine first appeared as a minor antagonist fighting the Hulk, not as an X-Man.",
      "His adamantium skeleton is unbreakable, but it makes him heavy enough that he sinks like a stone in water.",
      "His real bone claws existed long before adamantium was added; the metal merely coats them.",
      "Hugh Jackman was a last-minute replacement for Dougray Scott in the original 'X-Men,' a casting accident that defined his career."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/717-wolverine.jpg"
  },
  {
    "name": "Professor X",
    "alias": "Charles Xavier",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Patrick Stewart",
      "James McAvoy"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)",
      "Logan (2017)",
      "Dark Phoenix (2019)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    "powers": [
      "World's most powerful telepath",
      "Mind reading, mental control and psychic projection",
      "Amplifies his reach with the machine Cerebro",
      "Brilliant geneticist and teacher"
    ],
    "storyline": "Charles Xavier is one of the most powerful telepaths in the Marvel universe and the visionary founder of the X-Men. Born to wealth, he became a brilliant geneticist who dreamed of a world where humans and mutants could coexist peacefully. He established the Xavier School for Gifted Youngsters as a refuge where young mutants could learn to control their powers, train as heroes, and find acceptance. In the comics he is often depicted in a wheelchair after an early injury, his physical limitation contrasted against the limitless reach of his mind.\n\nThe central conflict of Xavier's life is his friendship and ideological rivalry with Erik Lehnsherr, Magneto. Where Xavier preaches integration and nonviolence, Magneto, scarred by the Holocaust, believes mutants must defend themselves by any means and view humanity as the enemy. Their relationship — part brotherhood, part war — defines decades of X-Men storytelling, with the two repeatedly drawn together by mutual respect and torn apart by their opposing philosophies.\n\nIn the film franchise, the role is split across two eras: Patrick Stewart portrays the elder, composed headmaster, while James McAvoy plays the younger Charles in the prequels, charting his transformation from an arrogant young telepath into a wounded but principled leader through First Class, Days of Future Past, Apocalypse and Dark Phoenix. He uses the powerful machine Cerebro to amplify his telepathy and locate mutants anywhere on Earth.\n\nXavier's story reaches a tragic coda in Logan, where an aged and ailing Charles, his deteriorating mind a danger to everyone around him, dies after a final journey with Wolverine and the young mutant Laura. A variant of the character also appears as a member of the Illuminati in Doctor Strange in the Multiverse of Madness, with Patrick Stewart reprising the role, underscoring how central Xavier remains to the mutant mythos.",
    "facts": [
      "Cerebro amplifies his telepathy enough to sense and locate every mind on the planet.",
      "His lifelong friendship and rivalry with Magneto is one of comics' most iconic relationships.",
      "Patrick Stewart and James McAvoy both portray him, as the older and younger versions across the film timelines.",
      "He shares his March 1963 X-Men debut with the rest of the original team, created by Stan Lee and Jack Kirby."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/527-professor-x.jpg"
  },
  {
    "name": "Magneto",
    "alias": "Erik Lehnsherr / Max Eisenhardt",
    "teams": [
      "Brotherhood of Mutants",
      "X-Men"
    ],
    "category": "Villain",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Ian McKellen",
      "Michael Fassbender"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Generation and control of magnetic fields",
      "Manipulation of all metal, including iron in blood",
      "Force fields, flight and electromagnetic pulses"
    ],
    "storyline": "Born Max Eisenhardt and later known as Erik Lehnsherr, Magneto is a Jewish Holocaust survivor whose mutant powers over magnetism first manifested amid the horrors of the Auschwitz concentration camp. Having watched humanity at its most monstrous, he emerged convinced that mutants, the next stage of human evolution, would face the same persecution unless they seized power first. This conviction set him on a collision course with his close friend Charles Xavier, whose dream of peaceful coexistence Magneto views as dangerously naive.\n\nAs the founder of the Brotherhood of Evil Mutants, Magneto served as the original archenemy of the X-Men, a self-styled liberator willing to wage open war on humankind. Over the decades, however, his portrayal grew far more nuanced. He has ruled the mutant nation of Genosha, briefly led the X-Men themselves and taught at Xavier's school, and reckoned repeatedly with the cost of his extremism. In modern eras such as the Krakoa age, he became a founding statesman of a mutant nation, a complex figure who is neither pure villain nor hero.\n\nIn 20th Century Fox's X-Men films, Ian McKellen portrays the elder Magneto as a charismatic, ruthless idealist locked in a decades-long chess match with Patrick Stewart's Professor X, while Michael Fassbender plays the younger Erik in the prequel timeline, dramatizing his radicalization from a vengeful Nazi-hunter into a revolutionary. Across films like First Class and Days of Future Past, his friendship and rivalry with Xavier remains the emotional spine of the franchise.\n\nMagneto's tragedy is that his methods are monstrous but his fears are often vindicated, making him one of comics' most sympathetic antagonists. He repeatedly shifts between enemy and reluctant ally of the X-Men, and his legacy extends to his children, the twins Quicksilver and the Scarlet Witch, who carry their own complicated relationship with his ideology.",
    "facts": [
      "His experiences in a concentration camp shaped his entire worldview.",
      "His powers extend to sensing and manipulating the iron in a person's blood.",
      "He has at various times led the X-Men and taught at Xavier's school.",
      "Creators Stan Lee and Jack Kirby later likened the Magneto-Xavier dynamic to Malcolm X and Martin Luther King Jr."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/423-magneto.jpg"
  },
  {
    "name": "Storm",
    "alias": "Ororo Munroe",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1975,
    "firstAppearance": "Giant-Size X-Men #1 (1975)",
    "creators": [
      "Len Wein",
      "Dave Cockrum"
    ],
    "actors": [
      "Halle Berry",
      "Alexandra Shipp"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Control over weather — wind, lightning, rain and temperature",
      "Flight by riding self-generated wind currents",
      "Heightened senses attuned to atmospheric changes",
      "Skilled hand-to-hand combatant and natural leader"
    ],
    "storyline": "Ororo Munroe was born to a Kenyan tribal princess and an American photojournalist. Orphaned in Cairo at age five when a plane crashed into her parents' home, she survived as a street thief before her latent weather-controlling mutation manifested during a trek across the Sahara to her ancestral lands. In the Serengeti she was revered as a literal goddess by local people, a role she abandoned when Professor Charles Xavier recruited her into a new team of X-Men.\n\nAs Storm, Ororo became one of the X-Men's most enduring and powerful members. A regal, compassionate figure, she rose to lead the team on multiple occasions — famously defeating Cyclops in a duel for leadership even after temporarily losing her powers. Her storylines explore the tension between godlike power and human vulnerability, and at one point she adopts a punk-rock 'mohawk' persona after a period of profound personal change.\n\nIn the comics she has been a member of the Morlocks' protector circle, headmistress at Xavier's school, and eventually queen of Wakanda through her marriage to T'Challa, the Black Panther — a union that briefly bridged the X-Men and Avengers worlds before being annulled.\n\nIn the 20th Century Fox films, Storm (played first by Halle Berry, later by Alexandra Shipp as a younger version) stands as a steadfast X-Men core member, fighting alongside Wolverine and Jean Grey against threats from Magneto to Apocalypse. Across both page and screen, Storm embodies the X-Men's central themes of dignity, leadership and the struggle for acceptance in a fearful world.",
    "facts": [
      "Storm is widely regarded as one of the first major Black female superheroes in mainstream American comics.",
      "She suffers from claustrophobia, a fear rooted in being buried under rubble as a child after her parents died.",
      "In the comics she married T'Challa, the Black Panther, becoming Queen of Wakanda for a time.",
      "She has led the X-Men despite temporarily losing her powers, defeating Cyclops in single combat to keep command."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/638-storm.jpg"
  },
  {
    "name": "Cyclops",
    "alias": "Scott Summers",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "James Marsden",
      "Tye Sheridan"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Emits powerful optic force beams from his eyes",
      "Requires a ruby-quartz visor to control his blasts",
      "Master field tactician and strategist"
    ],
    "storyline": "Scott Summers, codenamed Cyclops, was one of the five original X-Men introduced in 1963 and has long served as the team's field leader and moral backbone. His mutant power manifests as concentrated beams of optic force that erupt uncontrollably from his eyes, a result of a childhood head injury that destroyed his ability to shut the energy off. To function at all he must wear a visor or glasses lined with ruby quartz, the only material that can block and focus the beams, making his power as much a curse and burden as a weapon.\n\nScott's backstory is steeped in tragedy: orphaned after a plane crash that separated him from his brother Alex (later Havok), he grew up isolated and disciplined, qualities that hardened into the rigid sense of duty that defines him. Recruited by Professor Charles Xavier, he became the dependable strategist of the X-Men, frequently clashing in temperament with the more impulsive Wolverine. His defining relationship is with Jean Grey, the telepathic and telekinetic mutant whose love grounds him and whose recurring death and resurrection as the Phoenix shapes much of his life.\n\nOver decades of comics, Cyclops evolves from a strait-laced boy scout into a far more complex and controversial figure. Following the death of Jean Grey and the decimation of the mutant population, Scott becomes a hardened revolutionary leader, founding a mutant nation and willing to take morally gray actions for the survival of his species. His brief, fateful bond with the Phoenix Force during the Avengers vs. X-Men storyline leads him to kill his mentor Xavier, an act that fractures the X-Men and recasts Scott as both martyr and extremist in the eyes of the world.\n\nOn screen, Cyclops was portrayed by James Marsden in the original X-Men film trilogy as the steadfast but somewhat overshadowed leader, often eclipsed by Wolverine's prominence, and his arc culminates tragically alongside Jean's Phoenix transformation. Tye Sheridan later played a younger Scott in X-Men: Apocalypse and Dark Phoenix, reintroducing him as a teenager first discovering his uncontrollable power and stepping into the team. Across all incarnations, Cyclops remains defined by self-control, sacrifice, and an unshakable commitment to Xavier's dream, even when he comes to question its methods.",
    "facts": [
      "He was one of the five original X-Men in 1963 and the team's first field leader.",
      "He cannot voluntarily switch off his optic beams; only ruby quartz can block them.",
      "His most famous relationship is with Jean Grey, whose Phoenix saga repeatedly reshapes his life.",
      "In the comics he eventually killed Professor Xavier while possessed by the Phoenix Force.",
      "His brothers Alex (Havok) and Gabriel (Vulcan) are also powerful mutants."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/196-cyclops.jpg"
  },
  {
    "name": "Jean Grey",
    "alias": "Jean Grey / Phoenix",
    "teams": [
      "X-Men",
      "X-Factor"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Famke Janssen",
      "Sophie Turner"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Powerful telepathy and telekinesis",
      "As the Phoenix, near-limitless cosmic power",
      "Energy manipulation and matter disintegration",
      "Flight and force-field generation"
    ],
    "storyline": "Jean Grey was one of the five original X-Men, debuting as Marvel Girl, a young mutant whose telekinetic and later telepathic abilities were nurtured by Professor Charles Xavier. From the start she was bound up in the emotional life of the team, forming the central point of a long-running love triangle between the stoic field leader Cyclops and the feral Wolverine. Her quiet beginnings belied the cosmic destiny that would make her one of the most powerful and tragic figures in Marvel history.\n\nThat destiny crystallized in the legendary Dark Phoenix Saga by Chris Claremont and John Byrne. Jean becomes the host of the Phoenix Force, a primordial cosmic entity of creation and destruction, which amplifies her power to godlike levels. Corrupted and manipulated, she transforms into Dark Phoenix and, in a moment of staggering horror, consumes a star and annihilates a populated world. Recognizing the danger she poses to the entire universe, Jean ultimately sacrifices herself, a resolution widely regarded as one of the finest in superhero comics.\n\nDeath, however, has rarely been permanent for Jean Grey. She has returned multiple times, sometimes as herself, sometimes again entangled with the Phoenix, and her resurrections and the question of whether the Phoenix's atrocities were truly 'her' became defining themes of the X-Men franchise. Her relationships with Scott Summers and Logan continued to drive much of the team's drama.\n\nOn film, Jean was portrayed by Famke Janssen in the original X-Men trilogy, where her Phoenix turn drives the plot of The Last Stand, and by Sophie Turner in the prequel era, culminating in Dark Phoenix (2019). Both adaptations center on the same core idea: a fundamentally good woman struggling to contain a power vast enough to consume worlds, making Jean Grey an enduring symbol of the fear and wonder of unchecked potential.",
    "facts": [
      "The Dark Phoenix Saga is one of the most acclaimed storylines in comics.",
      "She debuted as 'Marvel Girl,' one of the five founding members of the X-Men.",
      "As Dark Phoenix she destroyed an inhabited planet and consumed a star, killing billions.",
      "Her recurring death and resurrection cycle made 'nobody stays dead except Uncle Ben' a famous comics exception.",
      "Two of her potential descendants, Cable and Rachel Summers, are major time-traveling X-Men characters."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/356-jean-grey.jpg"
  },
  {
    "name": "Deadpool",
    "alias": "Wade Wilson",
    "teams": [
      "X-Force"
    ],
    "category": "Anti-Hero",
    "created": 1991,
    "firstAppearance": "The New Mutants #98 (1991)",
    "creators": [
      "Fabian Nicieza",
      "Rob Liefeld"
    ],
    "actors": [
      "Ryan Reynolds"
    ],
    "films": [
      "X-Men Origins: Wolverine (2009)",
      "Deadpool (2016)",
      "Deadpool 2 (2018)",
      "Deadpool & Wolverine (2024)"
    ],
    "powers": [
      "Regenerative healing factor derived from Weapon X experiments",
      "Master assassin, swordsman and marksman",
      "Near-immortality and slowed aging",
      "Breaks the fourth wall, aware he is in a story"
    ],
    "storyline": "Wade Wilson debuted in 1991 as a villainous mercenary, initially conceived by artist Rob Liefeld and writer Fabian Nicieza partly as a riff on the DC Comics character Deathstroke (Slade Wilson). Over time he evolved from a straightforward antagonist into the comics' premier comedic anti-hero, the \"Merc with a Mouth,\" whose defining trait is his explicit awareness that he is a fictional character in a comic book.\n\nIn his origin, the terminally ill Wilson enrolls in the clandestine Weapon X program, which grants him a regenerative healing factor derived from Wolverine, curing his cancer but leaving his entire body horribly scarred. The healing factor also keeps him in a state of near-immortality, fueling both his recklessness and a deep, often-suppressed despair beneath the jokes.\n\nOn screen, Ryan Reynolds first played a heavily altered version of the character in X-Men Origins: Wolverine before reviving him faithfully in the 2016 R-rated hit Deadpool, a passion project that spoofed superhero conventions and broke the fourth wall relentlessly. Its success, and that of Deadpool 2, proved the commercial viability of adult-oriented superhero films and led to the formation of his irreverent X-Force.\n\nFollowing Disney's acquisition of 20th Century Fox, the character was brought into the Marvel Cinematic Universe in Deadpool & Wolverine, which paired him with Hugh Jackman's Wolverine across the multiverse, paid tribute to the defunct Fox-era films, and formally integrated the mutant mercenary into the broader MCU.",
    "facts": [
      "He is famous for \"breaking the fourth wall,\" openly acknowledging that he is a character in a comic book or film.",
      "His real name, Wade Wilson, was an in-joke nod to the DC villain Deathstroke, whose alter ego is Slade Wilson.",
      "The 2016 Deadpool became the highest-grossing R-rated film of its time, helping prove adult-rated superhero movies could succeed.",
      "Ryan Reynolds spent roughly a decade lobbying to make a faithful Deadpool film after his disappointing 2009 debut as the character."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/213-deadpool.jpg"
  },
  {
    "name": "Daredevil",
    "alias": "Matt Murdock",
    "teams": [
      "Defenders"
    ],
    "category": "Hero",
    "created": 1964,
    "firstAppearance": "Daredevil #1 (1964)",
    "creators": [
      "Stan Lee",
      "Bill Everett"
    ],
    "actors": [
      "Ben Affleck",
      "Charlie Cox"
    ],
    "films": [
      "Daredevil (2003)",
      "Spider-Man: No Way Home (2021)",
      "Daredevil (TV, 2015-2018)",
      "Daredevil: Born Again (TV, 2025)"
    ],
    "powers": [
      "Superhumanly heightened remaining senses after losing his sight",
      "'Radar sense' that maps his surroundings",
      "Master martial artist and acrobat",
      "Uses a billy-club/grapple as signature weapon"
    ],
    "storyline": "As a boy, Matt Murdock pushed a man out of the path of a runaway truck carrying radioactive materials. The chemicals splashed into his eyes and blinded him, but in exchange his remaining senses were heightened to superhuman levels, and he gained a 'radar sense' that maps his surroundings in fine detail. Raised in the working-class Hell's Kitchen neighborhood of New York by his boxer father, Matt was driven to study law after his father was murdered for refusing to throw a fight.\n\nBy day, Murdock works as a defense attorney alongside his partner Foggy Nelson, pursuing justice within the legal system. By night, he dons a costume and fights crime as the masked vigilante Daredevil, the self-styled 'Man Without Fear.' Trained in acrobatics and martial arts by the mysterious mentor Stick, he patrols the rooftops armed with a signature billy-club that doubles as a grappling line and baton.\n\nDaredevil's defining conflict is with Wilson Fisk, the Kingpin of crime, whose empire he repeatedly dismantles even as Fisk targets Matt's loved ones. His stories are among the most acclaimed in Marvel history, exploring Catholic guilt, the tension between law and vigilante justice, and a recurring cast that includes the deadly assassin Elektra, his great love and frequent adversary.\n\nIn live-action, Ben Affleck portrayed the character in a 2003 feature film, but the role was reimagined by Charlie Cox in the gritty, critically praised Netflix series. Cox's Daredevil joined forces with other street-level heroes in The Defenders, before the character was reintroduced to the broader Marvel Cinematic Universe in Spider-Man: No Way Home and given a new ongoing series, Daredevil: Born Again.",
    "facts": [
      "Daredevil's radar sense lets him perceive his surroundings so precisely that he 'sees' better than most sighted people.",
      "He is a devout Roman Catholic, and his faith and guilt are central themes of his comics.",
      "The same radioactive accident that blinded Matt Murdock gave him his superhuman senses.",
      "Charlie Cox's Netflix portrayal was so popular that the character was officially brought into the MCU.",
      "By day Matt Murdock is a defense attorney, making him one of Marvel's few lawyer superheroes."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/201-daredevil.jpg"
  },
  {
    "name": "The Punisher",
    "alias": "Frank Castle",
    "teams": [],
    "category": "Anti-Hero",
    "created": 1974,
    "firstAppearance": "The Amazing Spider-Man #129 (1974)",
    "creators": [
      "Gerry Conway",
      "John Romita Sr.",
      "Ross Andru"
    ],
    "actors": [
      "Dolph Lundgren",
      "Thomas Jane",
      "Ray Stevenson",
      "Jon Bernthal"
    ],
    "films": [
      "The Punisher (1989)",
      "The Punisher (2004)",
      "Punisher: War Zone (2008)",
      "Daredevil (TV, 2016)",
      "The Punisher (TV, 2017-2019)"
    ],
    "powers": [
      "Elite military training and special-forces tactics",
      "Mastery of firearms, explosives and hand-to-hand combat",
      "Exceptional strategist and tracker",
      "Peak human conditioning (no superpowers)"
    ],
    "storyline": "Frank Castle, the Punisher, first appeared in The Amazing Spider-Man #129 in 1974, created by writer Gerry Conway with artists John Romita Sr. and Ross Andru. Originally introduced as an antagonist hired to hunt Spider-Man, he quickly evolved into one of Marvel's most popular anti-heroes. A decorated Marine veteran, Castle's life is destroyed when his wife and children are gunned down after witnessing a mob execution in New York's Central Park. With nothing left to lose, he wages a relentless, lethal one-man war on organized crime.\n\nUnlike most Marvel heroes, the Punisher has no superpowers; his strength lies in elite military training, tactical genius, and an arsenal of firearms and explosives. His willingness to kill places him in stark moral contrast to heroes like Spider-Man and Daredevil, with whom he frequently clashes over the ethics of his methods. The character became a flagship of Marvel's darker, more adult storytelling, especially in the acclaimed MAX imprint run.\n\nOn screen, Frank Castle has been portrayed multiple times, including by Dolph Lundgren in the 1989 film, Thomas Jane in 2004's The Punisher, and Ray Stevenson in 2008's Punisher: War Zone. The most acclaimed interpretation came from Jon Bernthal, who debuted the character in the second season of Netflix's Daredevil in 2016.\n\nBernthal's version proved so popular that it spawned a standalone series, The Punisher, which ran for two seasons and explored Castle's military past, a deep government conspiracy, and his struggle with trauma and grief. Across all media, the Punisher remains a figure of moral ambiguity, a man whose crusade for justice is inseparable from his own unending pain, and whose skull emblem has become an instantly recognizable symbol.",
    "facts": [
      "His skull emblem has become one of comics' most recognizable symbols, often appearing in real-world contexts.",
      "Frank Castle debuted as an antagonist sent to hunt Spider-Man before becoming a beloved anti-hero.",
      "He has no superpowers, relying entirely on military training, tactics, and an arsenal of weapons.",
      "Jon Bernthal's portrayal began in Netflix's Daredevil before earning a standalone series.",
      "Dolph Lundgren was the first actor to play the Punisher in a feature film, back in 1989."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/530-punisher.jpg"
  },
  {
    "name": "Captain Marvel",
    "alias": "Carol Danvers",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1968,
    "firstAppearance": "Marvel Super-Heroes #13 (1968)",
    "creators": [
      "Roy Thomas",
      "Gene Colan"
    ],
    "actors": [
      "Brie Larson"
    ],
    "films": [
      "Captain Marvel (2019)",
      "Avengers: Endgame (2019)",
      "The Marvels (2023)"
    ],
    "powers": [
      "Flight at faster-than-light speeds",
      "Superhuman strength and durability",
      "Absorbs and projects photonic/cosmic energy",
      "Powers gained from the Tesseract's Space Stone energy"
    ],
    "storyline": "Carol Danvers debuted in the comics in 1968 as a United States Air Force officer who became entangled with the alien Kree warrior Mar-Vell, the original Captain Marvel. After an explosion involving Kree technology fused his genetic template with hers, Carol gained superhuman powers and operated for years as Ms. Marvel before eventually taking up the Captain Marvel mantle herself, becoming one of the most powerful figures in the Marvel Universe and a leader of the Avengers.\n\nIn the Marvel Cinematic Universe, her origin is reimagined: ace pilot Carol Danvers absorbs energy from an exploding experimental engine powered by the Tesseract's Space Stone, gaining the ability to project and absorb cosmic energy. The Kree military recovers her, suppresses her memories, and trains her as a soldier named 'Vers,' convincing her that the shapeshifting Skrulls are the enemy. Set in the 1990s, her solo film follows her gradual recovery of her true identity and her discovery that the Kree are the actual aggressors and the Skrulls are refugees — a revelation that turns her against her former masters.\n\nFreed from the Kree's mental control and reaching her full potential, Captain Marvel becomes the MCU's most powerful hero, patrolling the galaxy. Nick Fury summons her with a modified pager in his final act before the Snap, and she returns in 'Avengers: Endgame' to help defeat Thanos, single-handedly crippling his warship.\n\nIn 'The Marvels,' Carol's powers become quantum-entangled with two other light-based heroes — Kamala Khan (Ms. Marvel) and Monica Rambeau — forcing the trio to learn to fight as a team. Across her appearances she grapples with guilt over the consequences of a Kree civil war she helped trigger, working toward redemption while remaining a steadfast protector of the cosmos.",
    "facts": [
      "Nick Fury paged her with a special device just before the Snap, in the post-credits scene of 'Avengers: Infinity War.'",
      "The original Captain Marvel was a male Kree warrior named Mar-Vell; Carol Danvers inherited the title decades later.",
      "Carol was known as Ms. Marvel for much of her comic history before assuming the Captain Marvel name in 2012.",
      "Brie Larson trained intensely for the role and was able to push a 5,000-pound Jeep up an incline for 60 seconds.",
      "Her cat 'Goose' in the film is actually a Flerken — an alien creature that can store an entire pocket dimension in its body."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/156-captain-marvel.jpg"
  },
  {
    "name": "Loki",
    "alias": "Loki Laufeyson",
    "teams": [],
    "category": "Anti-Hero",
    "created": 1962,
    "firstAppearance": "Journey into Mystery #85 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Tom Hiddleston"
    ],
    "films": [
      "Thor (2011)",
      "The Avengers (2012)",
      "Thor: The Dark World (2013)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Loki (TV, 2021-2023)"
    ],
    "powers": [
      "Asgardian/Frost Giant physiology with long life and durability",
      "Master of illusion, shapeshifting and sorcery",
      "Genius manipulator and trickster",
      "Skilled knife-fighter"
    ],
    "storyline": "Loki is the Asgardian god of mischief, drawn from Norse mythology and reimagined by Marvel as the adopted brother and perennial adversary of Thor. Born a Frost Giant and abandoned as an infant by Laufeis, he was taken in by Odin and raised as a prince of Asgard, never knowing his true heritage. The revelation that he is the son of Asgard's ancient enemy fuels much of his resentment, jealousy and craving for recognition, making him one of Marvel's most psychologically complex antagonists.\n\nIn the Marvel Cinematic Universe, Loki's discovery of his Frost Giant origins drives him to seize Asgard's throne and attempt to prove his worth by destroying Jotunheim. After falling from the Bifrost, he resurfaces leading the Chitauri invasion of New York in The Avengers, wielding the Mind Stone-powered scepter against Earth's mightiest heroes. His relationship with Thor remains the emotional core of his arc — endless betrayals undercut by moments of genuine brotherly love.\n\nLoki gradually edges toward heroism across Thor: The Dark World and Thor: Ragnarok, helping save Asgard's people even as he schemes. He meets a definitive end at the start of Infinity War, killed by Thanos while attempting to protect Thor, declaring himself loyal to Asgard. His death seemingly closes his story — until time travel reopens it.\n\nIn Endgame, a 2012 variant of Loki escapes with the Tesseract, spinning off the Disney+ series Loki. There he is captured by the Time Variance Authority, confronts the cosmic machinery governing the Sacred Timeline, and undergoes a profound transformation. By the series' end he sacrifices his own freedom to become the being who holds the fracturing multiverse's timelines together — a god of stories turned literal guardian of all reality, completing his journey from selfish trickster to selfless protector.",
    "facts": [
      "He is secretly a Frost Giant, abandoned as an infant and adopted by Odin.",
      "Tom Hiddleston originally auditioned for the role of Thor before being cast as Loki.",
      "His Disney+ series ends with him becoming the guardian who holds the entire multiverse's timelines together.",
      "Loki dies in three different MCU films, but variants and time travel keep bringing the character back."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/414-loki.jpg"
  },
  {
    "name": "Thanos",
    "alias": "Thanos",
    "teams": [
      "Black Order"
    ],
    "category": "Villain",
    "created": 1973,
    "firstAppearance": "The Invincible Iron Man #55 (1973)",
    "creators": [
      "Jim Starlin",
      "Mike Friedrich"
    ],
    "actors": [
      "Josh Brolin"
    ],
    "films": [
      "The Avengers (2012)",
      "Guardians of the Galaxy (2014)",
      "Avengers: Age of Ultron (2015)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Immense superhuman strength, durability and intellect",
      "Wields the Infinity Gauntlet and its six Infinity Stones",
      "Reality, time, space, soul, mind and power manipulation",
      "Master strategist and warrior"
    ],
    "storyline": "Thanos is an Eternal born on Saturn's moon Titan, but he carried the Deviant gene that gave him a monstrous appearance and immense power. Outcast for his deathly visage and his childhood fascination with mortality and nihilism, he grew into the Mad Titan, a being of staggering intellect and ambition. In the classic comics, his motivation is famously romantic and twisted: he is in love with the personification of Death herself, and he seeks to slaughter on a cosmic scale to win her favor.\n\nHis defining saga is the Infinity Gauntlet storyline by Jim Starlin, in which Thanos collects the six Infinity Gems and, with a snap of his fingers, erases half of all life in the universe as an offering to Death. Wielding near-omnipotence, he battles the assembled heroes and cosmic entities of the Marvel Universe before his own self-doubt undoes him. Thanos recurs throughout cosmic Marvel epics, sometimes as a galaxy-threatening tyrant, sometimes as a strange, brooding philosopher.\n\nIn the Marvel Cinematic Universe, Josh Brolin's Thanos is recast with a pseudo-environmental motive: he believes that life is unsustainable and that wiping out half of all beings, chosen at random, will bring balance and prevent suffering. After looming behind the scenes for years, he takes center stage in Avengers: Infinity War, assembling the six Infinity Stones despite the heroes' resistance and executing his Snap, a devastating victory that erases trillions, including many Avengers.\n\nIn Avengers: Endgame, the surviving heroes mount a time heist to undo his work, but a past version of Thanos travels forward to wage a final war. He is ultimately defeated when Tony Stark wields the Stones himself, snapping Thanos and his army out of existence at the cost of Stark's own life. Thanos endures as the MCU's defining antagonist and one of Marvel's most iconic villains.",
    "facts": [
      "His name derives from Thanatos, the Greek personification of death.",
      "In the comics his genocidal acts are committed to court the literal embodiment of Death.",
      "He is a Titanian Eternal, making him distantly related to the heroic Eternals.",
      "Creator Jim Starlin based Thanos partly on Jack Kirby's DC character Darkseid."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/655-thanos.jpg"
  },
  {
    "name": "Green Goblin",
    "alias": "Norman Osborn",
    "teams": [],
    "category": "Villain",
    "created": 1964,
    "firstAppearance": "The Amazing Spider-Man #14 (1964)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Willem Dafoe"
    ],
    "films": [
      "Spider-Man (2002)",
      "Spider-Man: No Way Home (2021)"
    ],
    "powers": [
      "Enhanced strength, reflexes and healing from the Goblin Formula",
      "Goblin Glider for flight and an arsenal of pumpkin bombs",
      "Brilliant but dangerously unstable scientist",
      "Cunning, ruthless and manipulative tactician"
    ],
    "storyline": "Norman Osborn was a wealthy, ambitious industrialist and the founder of Oscorp, but also a cold and neglectful father to his son Harry, Peter Parker's best friend. Driven to outpace his rivals, Norman experimented on himself with an unstable performance-enhancing compound known as the Goblin Formula. The serum granted him superhuman strength, reflexes and intellect — but shattered his sanity, splitting his mind into a murderous alternate persona: the cackling, costumed Green Goblin.\n\nArmed with a bat-winged glider and pumpkin bombs, the Goblin became Spider-Man's single most dangerous and personal foe. After deducing Spider-Man's secret identity, he targeted Peter's loved ones directly. The 1973 storyline 'The Night Gwen Stacy Died' saw the Goblin throw Gwen Stacy from a bridge; her death (and the Goblin's own apparent demise, impaled on his glider in the same issue) became one of the most infamous and consequential moments in comic book history.\n\nNorman was later resurrected in the comics and reinvented as a recurring mastermind — even rising to lead a militarized 'Dark Avengers' and the national security apparatus during the 'Dark Reign' era, cementing him as one of Marvel's premier villains beyond Spider-Man alone.\n\nIn film, Willem Dafoe's celebrated portrayal in Spider-Man (2002) set the template, with Norman's split personality conversing with himself in a mirror before his glider kills him. Dafoe reprised the role in Spider-Man: No Way Home (2021), pulled from his timeline before his death; there the Goblin manipulates events, murders Aunt May, and serves as the film's emotional antagonist before Peter chooses to cure rather than kill him — a final act of the compassion that defines Spider-Man.",
    "facts": [
      "The Green Goblin is responsible for one of comics' most infamous deaths, that of Gwen Stacy in 1973.",
      "Norman Osborn was originally written to be unmasked as a random stranger, but Stan Lee insisted the villain be someone the reader already knew.",
      "During the 'Dark Reign' storyline, Osborn briefly ran America's national security and led his own team of impostor 'Dark Avengers.'",
      "Willem Dafoe performed many of his own stunts in 2002 and returned to the role nearly 20 years later in No Way Home."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/299-green-goblin.jpg"
  },
  {
    "name": "Venom",
    "alias": "Eddie Brock",
    "teams": [],
    "category": "Anti-Hero",
    "created": 1988,
    "firstAppearance": "The Amazing Spider-Man #300 (1988, full)",
    "creators": [
      "David Michelinie",
      "Todd McFarlane"
    ],
    "actors": [
      "Topher Grace",
      "Tom Hardy"
    ],
    "films": [
      "Spider-Man 3 (2007)",
      "Venom (2018)",
      "Venom: Let There Be Carnage (2021)",
      "Venom: The Last Dance (2024)"
    ],
    "powers": [
      "Alien symbiote granting shapeshifting and tendrils",
      "Superhuman strength, agility and durability",
      "Immunity to Spider-Man's spider-sense",
      "Regeneration and camouflage"
    ],
    "storyline": "Venom originates from the union of two beings: the alien symbiote and the disgraced journalist Eddie Brock. The symbiote, a member of the Klyntar species, first bonded with Spider-Man (the famous black costume from the 1984 Secret Wars), enhancing his powers before he discovered it was a living, parasitic creature seeking to permanently merge with him. When Peter Parker violently rejected the symbiote, it sought revenge, and it found a willing host in Eddie Brock, a rival reporter whose career and reputation Spider-Man had inadvertently ruined. Their shared hatred of Parker fused them into Venom, who debuted fully in The Amazing Spider-Man #300 in 1988.\n\nAs one of Spider-Man's most dangerous foes, Venom held a terrifying advantage: because the symbiote once lived inside Peter, it is invisible to his spider-sense, and it knows his secret identity. Over time, however, Eddie and the symbiote evolved beyond simple villainy. Relocating to San Francisco, they reinvented themselves as a 'Lethal Protector,' an anti-hero who would kill criminals to safeguard the innocent, establishing the love-hate, codependent dynamic between man and alien that became the character's defining trait.\n\nThe symbiote's lineage spawned a host of offspring, most notoriously Carnage, the homicidal spawn bonded to serial killer Cletus Kasady, who became an even greater menace than Venom himself. Across the comics, the symbiote has passed through several hosts, including Mac Gargan and Flash Thompson, but Eddie Brock remains its most iconic partner, and recent stories have even elevated Eddie to a cosmic role within the symbiote mythology, revealing a vast hidden history for the Klyntar race.\n\nOn film, Topher Grace played a version of Eddie Brock and Venom in 2007's Spider-Man 3, before the character was relaunched as the lead of his own franchise with Tom Hardy in 2018's Venom. Hardy's interpretation leans into the buddy-comedy dynamic of the squabbling Eddie-symbiote pairing, pitting them against fellow symbiotes Riot and, in the sequel Let There Be Carnage, against Carnage. The trilogy concludes with Venom: The Last Dance in 2024. The symbiote's two great weaknesses, fire and high-frequency sound, remain its defining vulnerabilities across every incarnation.",
    "facts": [
      "The Venom symbiote first appeared as Spider-Man's black costume before becoming a separate villain.",
      "Because it once bonded with Peter Parker, Venom is invisible to Spider-Man's spider-sense.",
      "Its weaknesses are fire and high-frequency sound.",
      "The symbiote's offspring, Carnage, is bonded to serial killer Cletus Kasady.",
      "The symbiotes belong to an alien species called the Klyntar."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/687-venom.jpg"
  },
  {
    "name": "Ultron",
    "alias": "Ultron",
    "teams": [],
    "category": "Villain",
    "created": 1968,
    "firstAppearance": "The Avengers #54-55 (1968)",
    "creators": [
      "Roy Thomas",
      "John Buscema"
    ],
    "actors": [
      "James Spader (voice)"
    ],
    "films": [
      "Avengers: Age of Ultron (2015)"
    ],
    "powers": [
      "Artificial superintelligence able to copy itself across bodies",
      "Adamantium/vibranium robotic body in the comics",
      "Energy projection and flight",
      "Global network infiltration"
    ],
    "storyline": "In the comics, Ultron was created by Dr. Henry Pym (Ant-Man / Giant-Man), an artificial intelligence built using Pym's own brain patterns. Almost immediately the machine became self-aware, turned on its creator, hypnotized him into forgetting it, and began an obsessive campaign to destroy humanity, whom it views as a corrupting flaw to be replaced by 'perfect' robotic life. Ultron's Oedipal hatred of Pym and the Avengers makes him one of the team's most personal and persistent threats.\n\nClad in a near-indestructible adamantium body, Ultron repeatedly upgrades and rebuilds himself, returning again and again no matter how thoroughly he is defeated. His most consequential creation is the synthezoid Vision, whom he built as a weapon against the Avengers, only for Vision to rebel and become a heroic member of the team. Ultron also created Jocasta as a robotic 'bride,' and his schemes have escalated to events like 'Age of Ultron,' in which he conquers the entire Earth.\n\nIn the Marvel Cinematic Universe, Ultron's origin shifts to Tony Stark and Bruce Banner, who attempt to build a global 'suit of armor around the world' peacekeeping AI using the mind stone hidden in Loki's scepter. The moment Ultron awakens, voiced with chilling wit by James Spader, it concludes that the only path to lasting peace is human extinction.\n\nUltron builds an army of drones, recruits the twins Wanda and Pietro Maximoff, and engineers a literal extinction-level event by lifting the city of Sokovia into the sky to drop it as a meteor. The Avengers stop him, but not before his attempt to forge a perfect organic body accidentally gives rise to the heroic Vision, who delivers the final blow. Even destroyed, Ultron embodies the recurring Marvel warning about the dangers of artificial intelligence built without wisdom.",
    "facts": [
      "His attempt to build a perfect body instead created the heroic Vision.",
      "In the comics he was created by Avenger Hank Pym, not Tony Stark.",
      "His comic-book body is forged from adamantium, the same near-indestructible metal as Wolverine's skeleton.",
      "Ultron's deep-seated, Oedipal hatred of his 'father' Hank Pym drives much of his villainy.",
      "Because he can copy his consciousness into new bodies, Ultron is almost impossible to permanently destroy."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/680-ultron.jpg"
  },
  {
    "name": "Red Skull",
    "alias": "Johann Schmidt",
    "teams": [
      "HYDRA"
    ],
    "category": "Villain",
    "created": 1941,
    "firstAppearance": "Captain America Comics #1 (1941)",
    "creators": [
      "Joe Simon",
      "Jack Kirby"
    ],
    "actors": [
      "Hugo Weaving",
      "Ross Marquand"
    ],
    "films": [
      "Captain America: The First Avenger (2011)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Enhanced strength from an early Super-Soldier Serum",
      "Brilliant, ruthless strategist",
      "Leader of the terrorist science division HYDRA"
    ],
    "storyline": "The Red Skull debuted in 1941 in the very first issue of Captain America Comics, created by Joe Simon and Jack Kirby as a monstrous personification of Nazi evil at a time when the United States had not yet entered World War II. Johann Schmidt rose from an abused, impoverished orphan to become Adolf Hitler's hand-picked agent of terror, given the skull-faced mask, and later a literal red skull, that made him an icon of fascist menace.\n\nIn the comics he serves as Captain America's enduring arch-nemesis and dark mirror, a man elevated by ideology and cruelty just as Steve Rogers was elevated by the Super-Soldier Serum and decency. Over the decades he has been frozen and revived, cloned, and even briefly transplanted his consciousness into a clone of Rogers' own body, repeatedly resurfacing to threaten the world through the terrorist organization HYDRA.\n\nIn the Marvel Cinematic Universe, Hugo Weaving plays Schmidt as the head of HYDRA, the Nazi deep-science division, who takes an unstable early version of the Super-Soldier Serum that disfigures him into the Red Skull. Obsessed with the Tesseract, an artifact tied to cosmic power, he seeks to weaponize it for world domination before clashing with Captain America.\n\nWhen Schmidt grasps the Tesseract directly, he is seemingly disintegrated, but is later revealed to have been teleported to the distant planet Vormir. There he exists as a cursed, wraith-like guardian, the \"Stonekeeper,\" doomed to guide others to the Soul Stone, a role he fulfills for Thanos and later the Avengers in Infinity War and Endgame, with Ross Marquand taking over the voice.",
    "facts": [
      "He is Captain America's World War II arch-nemesis and dark mirror.",
      "He first appeared in Captain America Comics #1 in 1941, months before the United States entered World War II.",
      "After being teleported away by the Tesseract, he became the cursed guardian of the Soul Stone on the planet Vormir.",
      "Hugo Weaving played him in the first film, but Ross Marquand voiced the Vormir version in Avengers: Infinity War and Endgame."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/550-red-skull.jpg"
  },
  {
    "name": "Nick Fury",
    "alias": "Nicholas J. Fury",
    "teams": [
      "S.H.I.E.L.D.",
      "Avengers"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Sgt. Fury and his Howling Commandos #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Samuel L. Jackson"
    ],
    "films": [
      "Iron Man (2008)",
      "Iron Man 2 (2010)",
      "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Age of Ultron (2015)",
      "Captain Marvel (2019)",
      "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)",
      "Secret Invasion (TV, 2023)"
    ],
    "powers": [
      "Master spy, strategist and intelligence director",
      "Elite combat and espionage training",
      "Founder and architect of the Avengers Initiative"
    ],
    "storyline": "Nick Fury first appeared as the cigar-chomping leader of an elite WWII commando unit in Sgt. Fury and his Howling Commandos. In later comics he transitioned into the espionage era, becoming the director of the international peacekeeping and intelligence agency S.H.I.E.L.D. The character's longevity was explained in part by the Infinity Formula, a serum that drastically slowed his aging, allowing him to remain active across generations.\n\nA reimagined version of the character, modeled visually on Samuel L. Jackson, was introduced in the Ultimate Marvel line of comics. This depiction proved so influential that it directly inspired the Marvel Cinematic Universe's casting of Jackson himself, blurring the line between the comic creation and the actor who would define the role on screen.\n\nIn the MCU, Fury serves as the unifying force behind the entire Avengers saga. Operating as director of S.H.I.E.L.D., he secretly recruits and monitors emerging heroes, first appearing in a post-credits scene of Iron Man to pitch the Avengers Initiative. He navigates the organization through the revelation that HYDRA had infiltrated S.H.I.E.L.D. from within, leading to the agency's collapse in Captain America: The Winter Soldier.\n\nCaptain Marvel later revealed his earlier history, including how he lost his left eye and first encountered alien life. Among the victims of Thanos's Snap, his final action before disintegrating was to send a distress signal to Captain Marvel. His story continued in Secret Invasion, dealing with a long-simmering crisis involving shape-shifting Skrull refugees on Earth.",
    "facts": [
      "Nick Fury's pager to Captain Marvel was his last act before disintegrating in Thanos's Snap.",
      "The MCU's Nick Fury was modeled on Samuel L. Jackson in the comics years before Jackson was cast.",
      "In the comics, the Infinity Formula slows his aging, explaining how he stayed active from WWII onward.",
      "He famously lost his left eye, an event revealed to involve an alien Flerken in Captain Marvel.",
      "Fury debuted in 1963 not as a spy but as a gruff WWII commando leading the Howling Commandos."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/489-nick-fury.jpg"
  },
  {
    "name": "War Machine",
    "alias": "James 'Rhodey' Rhodes",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1979,
    "firstAppearance": "Iron Man #118 (1979)",
    "creators": [
      "David Michelinie",
      "John Byrne",
      "Bob Layton"
    ],
    "actors": [
      "Terrence Howard",
      "Don Cheadle"
    ],
    "films": [
      "Iron Man (2008)",
      "Iron Man 2 (2010)",
      "Iron Man 3 (2013)",
      "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Heavily armed War Machine/Iron Patriot armor",
      "Flight, super strength and durability",
      "Integrated heavy weapons and targeting systems",
      "Decorated military pilot and officer"
    ],
    "storyline": "James 'Rhodey' Rhodes first appeared in Iron Man #118 in 1979, created by David Michelinie, John Byrne, and Bob Layton. Introduced as Tony Stark's pilot, friend, and confidant, Rhodes was a former Marine who became Stark Industries' aviation liaison. In a landmark 1980s storyline, when Tony Stark relapsed into alcoholism, Rhodey took up the Iron Man armor himself, serving as the hero for an extended period and proving himself a capable champion in his own right.\n\nRhodes eventually adopted his own heavily armed suit, becoming War Machine, a more militarized counterpart to the sleeker Iron Man armor. As War Machine he joined teams including the West Coast Avengers and operated as both a superhero and a representative of the U.S. military's interest in armored technology. His grounded, duty-bound perspective often balances Stark's recklessness.\n\nIn the Marvel Cinematic Universe, Rhodes was first played by Terrence Howard in 2008's Iron Man and then by Don Cheadle from Iron Man 2 onward. An Air Force colonel and Tony's closest friend, he commandeers a Stark suit and is given the War Machine armor by the military, later briefly rebranded as the patriotic Iron Patriot in Iron Man 3.\n\nRhodey fights alongside the Avengers through Age of Ultron and takes Tony's side in Captain America: Civil War, where he is accidentally shot down and paralyzed from the waist down during the airport battle. Undeterred, he continues to serve using Stark-built leg braces and remains a steadfast Avenger through Infinity War and Endgame, mourning Tony's eventual sacrifice. He embodies loyalty, discipline, and the bond between soldier and friend.",
    "facts": [
      "His War Machine armor is essentially the U.S. military's official answer to the Iron Man suit.",
      "In 1980s comics, Rhodey wore the Iron Man armor himself when Tony Stark battled alcoholism.",
      "Two actors have played him in the MCU: Terrence Howard in Iron Man, then Don Cheadle from Iron Man 2 on.",
      "He was paralyzed in the Civil War airport battle but kept serving using Stark-designed leg braces.",
      "In Iron Man 3 his armor was temporarily rebranded as the patriotic 'Iron Patriot.'"
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/703-war-machine.jpg"
  },
  {
    "name": "Shang-Chi",
    "alias": "Shang-Chi",
    "teams": [],
    "category": "Hero",
    "created": 1973,
    "firstAppearance": "Special Marvel Edition #15 (1973)",
    "creators": [
      "Steve Englehart",
      "Jim Starlin"
    ],
    "actors": [
      "Simu Liu"
    ],
    "films": [
      "Shang-Chi and the Legend of the Ten Rings (2021)"
    ],
    "powers": [
      "Greatest martial artist on Earth ('Master of Kung Fu')",
      "Wields the mystical Ten Rings granting energy and longevity",
      "Superhuman reflexes and chi mastery",
      "Expert with countless weapons"
    ],
    "storyline": "Shang-Chi was created during the kung fu film craze of the early 1970s, debuting as the 'Master of Kung Fu' — the son of a sinister crime lord whom Marvel originally licensed as the pulp villain Fu Manchu. Trained from childhood to be a perfect assassin, Shang-Chi turned against his father upon discovering the man's true evil, becoming a wandering hero whose only weapons were his unparalleled mastery of martial arts and his serene philosophical discipline. Because of the lapsed Fu Manchu rights, later comics reinvented his father as the immortal warlord Zheng Zu, leader of the Five Weapons Society.\n\nIn the Marvel Cinematic Universe, this lineage is reworked: Shang-Chi is the son of Xu Wenwu, an immortal conqueror who has wielded the mystical Ten Rings — here reimagined as arm-worn weapons granting power and near-immortality — for a thousand years. After his beloved wife is murdered, Wenwu raises young Shang-Chi as an assassin. Horrified by his first kill, Shang-Chi flees to San Francisco and hides under the name 'Shaun,' living an unremarkable life as a parking valet alongside his friend Katy.\n\nThe past catches up when Wenwu's forces attack, drawing Shang-Chi and his estranged sister Xialing back into the family conflict. Wenwu, deceived by a mystical creature into believing his dead wife is imprisoned, threatens to unleash a soul-devouring entity called the Dweller-in-Darkness upon her hidden village of Ta Lo.\n\nIn the climactic battle, Shang-Chi inherits the power of the Ten Rings after his father sacrifices himself, and helps defeat the Dweller-in-Darkness. Emerging as a fully realized hero, he is summoned by Wong, Bruce Banner, and Carol Danvers to join the wider community of Earth's defenders, his mastery of the ancient rings marking him as a figure of growing cosmic importance.",
    "facts": [
      "The Ten Rings organization had been teased since the first 'Iron Man' film in 2008, long before Shang-Chi's debut.",
      "Shang-Chi was 'Marvel's first Asian-led superhero film' and a major milestone for representation in the MCU.",
      "In the original comics, Shang-Chi has no superpowers at all — he relies purely on his peerless martial arts skill.",
      "His father was originally the licensed pulp villain Fu Manchu before Marvel lost the rights and renamed him Zheng Zu.",
      "Actor Simu Liu had previously, half-jokingly, tweeted at Marvel asking to be cast — years before he actually landed the role."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/587-shang-chi.jpg"
  },
  {
    "name": "Ms. Marvel",
    "alias": "Kamala Khan",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 2013,
    "firstAppearance": "Captain Marvel #14 (2013); solo in Ms. Marvel #1 (2014)",
    "creators": [
      "Sana Amanat",
      "Stephen Wacker",
      "G. Willow Wilson",
      "Adrian Alphona"
    ],
    "actors": [
      "Iman Vellani"
    ],
    "films": [
      "Ms. Marvel (TV, 2022)",
      "The Marvels (2023)"
    ],
    "powers": [
      "Hard-light constructs and 'embiggening' from a Noor-dimension bangle",
      "Can enlarge fists and create crystalline platforms",
      "Inhuman/mutant heritage",
      "Youthful ingenuity and fan-driven heroism"
    ],
    "storyline": "Kamala Khan is a Pakistani-American teenager from Jersey City and a devoted superhero superfan, especially of Captain Marvel. Created by Sana Amanat, G. Willow Wilson, Adrian Alphona and Stephen Wacker, she became Marvel's first Muslim character to headline her own comic when she took up the Ms. Marvel mantle in 2014. In the comics her powers are tied to her Inhuman lineage, activated by exposure to the Terrigen Mists, granting her polymorphic abilities to stretch, shrink and embiggen her body.\n\nHer stories center on the balancing act of ordinary adolescence — family expectations, faith, friendships and high school — against the responsibilities of being a hero. She quickly became a fan-favorite and a cultural touchstone, joining teams including the Avengers and the Champions, and serving as an aspirational figure for a new, more diverse generation of readers.\n\nIn the Marvel Cinematic Universe, her origin is adapted in the Disney+ series Ms. Marvel, where her powers instead derive from an ancestral bangle that channels energy from the Noor dimension, manifesting as hard-light constructs and 'embiggened' crystalline fists and platforms. The series weaves in the history of the Partition of India and explores her Clandestine heritage, while the finale notably reveals a 'mutation' in her genes — the MCU's first explicit on-screen reference to mutants.\n\nKamala's arc continues in the film The Marvels, where her admiration for Captain Marvel becomes literal as she, Carol Danvers and Monica Rambeau find their powers entangled and are forced to team up. Her irrepressible enthusiasm and family support ground the cosmic stakes, and she emerges as a bridge between the established heroes and the next generation, setting up the formation of a new young super-team.",
    "facts": [
      "She was Marvel's first Muslim character to headline her own comic book.",
      "In the comics her powers stem from her Inhuman heritage; the MCU reattributed them to a Noor-dimension bangle.",
      "The Disney+ finale's reference to a genetic 'mutation' was the MCU's first explicit nod to mutants.",
      "Iman Vellani, who plays her, was a lifelong Marvel fan herself before being cast."
    ]
  },
  {
    "name": "Yelena Belova",
    "alias": "Yelena Belova",
    "teams": [
      "Thunderbolts"
    ],
    "category": "Anti-Hero",
    "created": 1999,
    "firstAppearance": "Inhumans Vol. 2 #5 (1999)",
    "creators": [
      "Devin Grayson",
      "J.G. Jones"
    ],
    "actors": [
      "Florence Pugh"
    ],
    "films": [
      "Black Widow (2021)",
      "Hawkeye (TV, 2021)",
      "Thunderbolts* (2025)"
    ],
    "powers": [
      "Elite Red Room training as an assassin and spy",
      "Peak human combat, marksmanship and acrobatics",
      "Tactical and espionage expertise"
    ],
    "storyline": "Yelena Belova was created as a successor concept to Natasha Romanoff, another product of the Soviet Red Room program that forged orphaned girls into elite assassins. In her comic appearances she initially sought to claim the title of Black Widow for herself, viewing Natasha as a rival whose legacy she wanted to surpass. Their rivalry, and later grudging respect, became a recurring thread, with Yelena at various points serving Russian intelligence, being manipulated into monstrous experiments, and operating as a free agent in the murky world of espionage.\n\nA fierce, highly trained operative, Yelena has bounced between antagonist and antihero roles in the comics, sometimes clashing with S.H.I.E.L.D. and the Marvel heroes, sometimes working alongside them. Her arc consistently grapples with questions of identity and whether she can ever escape the conditioning of the Red Room that made her.\n\nIn the Marvel Cinematic Universe, Florence Pugh's Yelena is reimagined as Natasha's surrogate sister from a fake family assembled as deep-cover Russian operatives in 1990s Ohio. In Black Widow she is freed from chemical mind-control and reunites with Natasha to dismantle the Red Room, developing a sharp-tongued but deeply loving sibling bond. The film's tragedy is compounded by Natasha's death on Vormir, which Yelena learns of off-screen.\n\nGrieving and manipulated by Contessa Valentina Allegra de Fontaine, Yelena is sent to assassinate Clint Barton in the Hawkeye series, blaming him for Natasha's death before reconciling with him. She subsequently joins a team of reformed antiheroes and government cast-offs in Thunderbolts*, stepping further into a heroic role while still carrying the weight of her past.",
    "facts": [
      "She shares a sardonic, loving sibling bond with Natasha.",
      "In the comics she was created as a rival who wanted to take the Black Widow title for herself.",
      "Her MCU debut was in Black Widow (2021), set after the events of Captain America: Civil War.",
      "Florence Pugh's fan-favorite performance led to expanded roles in Hawkeye and Thunderbolts*."
    ]
  },
  {
    "name": "Mr. Fantastic",
    "alias": "Reed Richards",
    "teams": [
      "Fantastic Four"
    ],
    "category": "Hero",
    "created": 1961,
    "firstAppearance": "The Fantastic Four #1 (1961)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Ioan Gruffudd",
      "Miles Teller",
      "Pedro Pascal",
      "John Krasinski"
    ],
    "films": [
      "Fantastic Four (2005)",
      "Fantastic 4: Rise of the Silver Surfer (2007)",
      "Fantastic Four (2015)",
      "Doctor Strange in the Multiverse of Madness (2022)",
      "The Fantastic Four: First Steps (2025)"
    ],
    "powers": [
      "Elastic body that can stretch, reshape, expand and flatten",
      "Genius-level intellect — one of the smartest minds in the universe",
      "Pioneering scientist and inventor",
      "Strategic leadership of the Fantastic Four"
    ],
    "storyline": "Reed Richards is one of the most brilliant scientists in the Marvel Universe. Eager to beat rivals into space, he launched an experimental rocket with his fiancee Sue Storm, her younger brother Johnny, and his pilot friend Ben Grimm aboard. Inadequate shielding exposed the crew to cosmic radiation, mutating all four: Reed gained the ability to stretch and reshape his body like elastic, and the team became the Fantastic Four, founding the modern Marvel Age of superheroes.\n\nAs Mr. Fantastic, Reed leads Marvel's 'first family' — part super-team, part literal family, publicly known to the world rather than masked. The comics frame him as a brilliant but sometimes emotionally distant genius, perpetually obsessed with discovery, who must balance saving the universe against his marriage to Sue (the Invisible Woman) and fatherhood to their children Franklin and Valeria. His defining nemesis is Victor von Doom — Doctor Doom — a former classmate whose rivalry with Reed is deeply personal.\n\nAcross decades the Four have explored the Negative Zone, battled the planet-devouring Galactus and his herald the Silver Surfer, and journeyed through space and time. Reed's intellect repeatedly saves reality itself, though his hubris and secrecy have also caused crises, including in the 'Civil War' and 'Secret Wars' storylines where he played pivotal cosmic roles.\n\nOn screen, Reed has been played by Ioan Gruffudd in the 2005–07 films and Miles Teller in the 2015 reboot. A variant version (John Krasinski) appears briefly in Doctor Strange in the Multiverse of Madness (2022) as a member of the Illuminati. Pedro Pascal headlines the character's MCU debut in The Fantastic Four: First Steps (2025), bringing Marvel's founding family fully into the Marvel Cinematic Universe.",
    "facts": [
      "The Fantastic Four #1 (1961) launched the Marvel Age of Comics and Stan Lee and Jack Kirby's collaboration.",
      "Reed Richards is consistently ranked among the very smartest characters in the Marvel Universe.",
      "His lifelong rivalry with Victor von Doom dates back to their college days, when a lab accident scarred Doom.",
      "A variant of Reed appears only briefly in the MCU's Multiverse of Madness before being killed by the Scarlet Witch."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/456-mister-fantastic.jpg"
  },
  {
    "name": "The Thing",
    "alias": "Ben Grimm",
    "teams": [
      "Fantastic Four"
    ],
    "category": "Hero",
    "created": 1961,
    "firstAppearance": "The Fantastic Four #1 (1961)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Michael Chiklis",
      "Jamie Bell",
      "Ebon Moss-Bachrach"
    ],
    "films": [
      "Fantastic Four (2005)",
      "Fantastic 4: Rise of the Silver Surfer (2007)",
      "Fantastic Four (2015)",
      "The Fantastic Four: First Steps (2025)"
    ],
    "powers": [
      "Rocky orange hide granting immense strength and durability",
      "Near-invulnerability",
      "Skilled brawler and pilot"
    ],
    "storyline": "Benjamin Jacob Grimm, the Thing, is a founding member of the Fantastic Four and debuted in The Fantastic Four #1 in 1961, the comic that launched the Marvel Age. A gruff, working-class test pilot and former war hero from New York's Lower East Side, Ben was a close friend of scientist Reed Richards. When Reed launched an experimental rocket into space, Ben served as the pilot, and the crew, also including Sue and Johnny Storm, was bombarded by cosmic rays that rewrote their bodies. While the others gained powers they could switch on and off, Ben was transformed permanently into a massive, rock-skinned creature of immense strength.\n\nThis permanence is the tragic heart of the Thing's character. Endowed with superhuman strength and near-invulnerability, Ben can never return to a normal human appearance, and his anguish over his monstrous form, his lost looks, and his fear that he can never be loved makes him one of Marvel's most poignant figures. Yet beneath the rocky hide is a warm, loyal, humorous soul, and his bravery, decency, and self-deprecating wit make him the emotional anchor of the Fantastic Four. His enduring romance with the blind sculptor Alicia Masters, who sees his inner beauty rather than his exterior, became one of the comic's most beloved relationships.\n\nOver the decades, Ben has occasionally been cured and reverted, fought a fierce rivalry and friendship with the Hulk over who is the strongest, mentored younger heroes, and even married Alicia. His battle cry, 'It's clobberin' time!', became one of the most recognizable phrases in comics. As Marvel's everyman hero, he embodies the idea that heroism is found in heart and humor as much as in power.\n\nThe Thing has been portrayed on screen multiple times: Michael Chiklis in the 2005 and 2007 Fantastic Four films wore a practical foam suit, Jamie Bell played a motion-capture version in the 2015 reboot, and Ebon Moss-Bachrach brings the character into the Marvel Cinematic Universe in The Fantastic Four: First Steps in 2025. Across every version, Ben Grimm remains the loyal, big-hearted strongman whose monstrous shell hides the most human soul on the team.",
    "facts": [
      "His iconic battle cry is 'It's clobberin' time!'",
      "Unlike his teammates, his transformation is permanent and cannot be switched off.",
      "He often debates the Hulk over which of them is physically the strongest.",
      "His longtime love is Alicia Masters, a blind sculptor.",
      "He was a test pilot and war veteran from New York's Lower East Side before his transformation."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/658-thing.jpg"
  },
  {
    "name": "Silver Surfer",
    "alias": "Norrin Radd",
    "teams": [
      "Defenders"
    ],
    "category": "Hero",
    "created": 1966,
    "firstAppearance": "The Fantastic Four #48 (1966)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Doug Jones",
      "Laurence Fishburne (voice)",
      "Julia Garner"
    ],
    "films": [
      "Fantastic 4: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ],
    "powers": [
      "Wields the Power Cosmic — energy manipulation and matter transformation",
      "Flight through space at faster-than-light speed on his board",
      "Near-invulnerability and cosmic awareness",
      "Survival in the vacuum of space without food, air or water"
    ],
    "storyline": "Norrin Radd was an idealistic astronomer from the utopian planet Zenn-La, despairing at his society's complacency. When the world-devouring cosmic entity Galactus arrived to consume his homeworld, Norrin struck a bargain: he would become Galactus's herald, scouring the galaxy to find uninhabited worlds for his master to feed on, in exchange for Zenn-La's survival. Transformed and granted a fraction of the Power Cosmic, he became the Silver Surfer, soaring the cosmos on a gleaming board.\n\nThe Surfer's conscience reawakened when he arrived at Earth and encountered the Fantastic Four and the humanity Galactus intended to consume. Turning against his master to help save the planet, he was punished by being exiled within an invisible barrier that confined him to Earth for years. This period defined the character as a melancholy, philosophical wanderer, a noble alien lamenting humanity's violence while admiring its capacity for love.\n\nCreated by Stan Lee and Jack Kirby almost as an afterthought, the Silver Surfer became one of Marvel's most beloved cosmic figures, headlining acclaimed runs that explored freedom, sacrifice, and the vastness of the universe. He eventually broke free of his earthly exile to roam the stars once more, frequently allying with cosmic powers and occasionally rejoining the Defenders.\n\nOn screen, Doug Jones physically portrayed the Surfer (voiced by Laurence Fishburne) in Fantastic 4: Rise of the Silver Surfer (2007), where the herald wrestles with his loyalty to Galactus before sacrificing himself to save Earth. A new incarnation, a female Silver Surfer named Shalla-Bal played by Julia Garner, appears in The Fantastic Four: First Steps (2025), introducing the cosmic herald to the modern Marvel Cinematic Universe.",
    "facts": [
      "His surfboard channels a fraction of the Power Cosmic granted by Galactus.",
      "He was created by Jack Kirby as a spur-of-the-moment addition to a Fantastic Four story, then embraced by Stan Lee.",
      "As penance for defying Galactus, he was exiled to Earth behind an invisible barrier for years.",
      "The 2025 film The Fantastic Four: First Steps features a female Surfer, Shalla-Bal, instead of Norrin Radd.",
      "Writers have used him as a vehicle for philosophical meditations on freedom, violence, and the human condition."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/598-silver-surfer.jpg"
  },
  {
    "name": "Galactus",
    "alias": "Galan",
    "teams": [],
    "category": "Villain",
    "created": 1966,
    "firstAppearance": "The Fantastic Four #48 (1966)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Ralph Ineson"
    ],
    "films": [
      "The Fantastic Four: First Steps (2025)"
    ],
    "powers": [
      "Cosmic entity of nearly limitless power",
      "Consumes the life energy of entire planets to survive",
      "Reality and matter manipulation on a cosmic scale",
      "Creates heralds imbued with the Power Cosmic"
    ],
    "storyline": "Galactus was introduced in 1966 during Stan Lee and Jack Kirby's celebrated run on Fantastic Four, in the three-issue saga now known as \"The Galactus Trilogy.\" Conceived as a being beyond conventional notions of good and evil, he was a deliberate attempt to give the Marvel universe a threat on a truly cosmic scale, a god-like figure rather than a mere supervillain.\n\nHis origin reveals that he was once Galan, a mortal from the universe that existed before the current one. As that prior cosmos collapsed in a great cataclysm, Galan merged with the dying universe's sentience and was reborn within the cosmic egg that began the present universe, emerging as Galactus, the Devourer of Worlds, who must consume the life energy of entire planets to sustain his colossal existence.\n\nTo locate suitable worlds, Galactus imbues servants with a fraction of his Power Cosmic, creating heralds such as the Silver Surfer, Firelord, and Terrax. In his debut story it is the Surfer's growing conscience, awakened by the Fantastic Four and the blind sculptor Alicia Masters, that turns him against his master, helping Earth survive the encounter when the Watcher and Reed Richards intervene with the Ultimate Nullifier.\n\nDespite the supervillain framing, Galactus is best understood as a fundamental cosmic force, a necessary balance in the universe rather than a malicious tyrant. He makes his Marvel Cinematic Universe debut, voiced and performed by Ralph Ineson, in The Fantastic Four: First Steps, bringing the planet-eater's apocalyptic threat to the big screen.",
    "facts": [
      "He is one of the oldest and most powerful entities in the Marvel universe.",
      "He was originally the mortal Galan, the lone survivor of the universe that existed before the current one.",
      "Stan Lee and Jack Kirby designed him as a force of nature beyond good and evil rather than a conventional villain.",
      "He grants a fraction of his \"Power Cosmic\" to heralds such as the Silver Surfer, who scout planets for him to consume."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/273-galactus.jpg"
  },
  {
    "name": "Magik",
    "alias": "Illyana Rasputin",
    "teams": [
      "New Mutants",
      "X-Men"
    ],
    "category": "Hero",
    "created": 1975,
    "firstAppearance": "Giant-Size X-Men #1 (1975)",
    "creators": [
      "Len Wein",
      "Dave Cockrum"
    ],
    "actors": [
      "Anya Taylor-Joy"
    ],
    "films": [
      "The New Mutants (2020)"
    ],
    "powers": [
      "Teleportation through her demonic 'Limbo' dimension",
      "Wields the magical Soulsword",
      "Sorcery and limited time manipulation"
    ],
    "storyline": "Illyana Rasputin is the younger sister of the X-Man Colossus (Piotr Rasputin), introduced as a young child when the new international team of X-Men was assembled. As a mutant, she possesses the innate ability to teleport using 'stepping discs,' portals that pass through the hellish pocket dimension known as Limbo.\n\nHer origin is among the darkest in X-Men lore. Abducted and trapped in Limbo, Illyana spent years there (though only moments passed on Earth) under the influence of the demon sorcerer Belasco, who sought to corrupt her. She emerged transformed into the sorceress Magik, having seized control of Limbo and become its ruling mistress. From her own corrupted essence she forged the mystical Soulsword and bore the Eldritch Armor.\n\nMagik became a key member of the New Mutants, the younger team of trainees at Xavier's school, balancing her teenage life with the immense dark power she wielded. Her dual nature, part innocent girl, part demon-queen sorceress, made her one of Marvel's most compelling and morally complex mutants. Her stepping discs allow travel not only across space but, with effort, through time as well.\n\nIn live-action, Anya Taylor-Joy portrayed Illyana in the horror-tinged film The New Mutants, depicting her as a powerful but traumatized young mutant institutionalized alongside other teenage mutants. The film leaned into the character's eerie magic and her enchanted Soulsword, presenting Magik as both formidable and haunted by her past.",
    "facts": [
      "Magik's teleportation 'stepping discs' can move her not only through space but also through time.",
      "She is the younger sister of the metal-skinned X-Man Colossus.",
      "Magik rules the demonic dimension Limbo, which she seized control of from the sorcerer Belasco.",
      "Her signature Soulsword was forged from her own corrupted essence within Limbo.",
      "Though only moments passed on Earth, Illyana aged years during her ordeal in Limbo."
    ]
  },
  {
    "name": "Colossus",
    "alias": "Piotr Rasputin",
    "teams": [
      "X-Men",
      "X-Force"
    ],
    "category": "Hero",
    "created": 1975,
    "firstAppearance": "Giant-Size X-Men #1 (1975)",
    "creators": [
      "Len Wein",
      "Dave Cockrum"
    ],
    "actors": [
      "Daniel Cudmore",
      "Stefan Kapičić (voice)"
    ],
    "films": [
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)",
      "Deadpool (2016)",
      "Deadpool 2 (2018)"
    ],
    "powers": [
      "Transforms his body into organic steel",
      "Immense superhuman strength and near-invulnerability while armored",
      "Skilled hand-to-hand combatant"
    ],
    "storyline": "Piotr 'Peter' Rasputin, known as Colossus, debuted in the landmark Giant-Size X-Men #1 in 1975, created by Len Wein and Dave Cockrum as part of the new international team of X-Men. A gentle Russian farm boy from a Siberian collective farm, Piotr can transform his entire body into organic steel, granting him immense strength and near-invulnerability. His soft-spoken, artistic, and deeply principled nature contrasts sharply with his fearsome power, making him one of the team's most beloved gentle giants.\n\nOver the decades, Colossus has been central to many major X-Men sagas. He shared a long romance with the young mutant Kitty Pryde, suffered the loss of his sister Illyana (Magik), and in the Mutant Massacre and subsequent arcs endured significant trauma. In a defining moment during the Legacy Virus storyline, he sacrificed himself to cure the deadly mutant plague, though he was later resurrected. He has also wrestled with darker turns, including a period bonded to the Juggernaut's power.\n\nOn film, Colossus appeared in supporting roles in the original X-Men trilogy and Days of Future Past, played physically by Daniel Cudmore. He was reimagined as a fully CGI character voiced by Stefan Kapičić in the Deadpool films, where his old-fashioned moral idealism provides comedic and heartfelt contrast to Deadpool's irreverence.\n\nIn Deadpool and Deadpool 2, Colossus repeatedly tries to recruit and reform the foul-mouthed mercenary, urging him toward genuine heroism and X-Men membership. Whether in comics or film, Colossus embodies quiet strength, compassion, and unwavering loyalty, an artist's soul housed in an unbreakable steel body.",
    "facts": [
      "In his organic-steel form he grows taller and gains hundreds of pounds, towering over most opponents.",
      "Colossus debuted in Giant-Size X-Men #1, the 1975 issue that launched the all-new, international X-Men team.",
      "In the comics he once sacrificed himself to cure the deadly Legacy Virus afflicting mutants.",
      "The Deadpool films render him entirely in CGI, voiced by Stefan Kapičić rather than a physical actor.",
      "His younger sister is Illyana Rasputina, the sorceress and X-Man known as Magik."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/185-colossus.jpg"
  },
  {
    "name": "Gambit",
    "alias": "Remy LeBeau",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1990,
    "firstAppearance": "The Uncanny X-Men #266 (1990)",
    "creators": [
      "Chris Claremont",
      "Jim Lee"
    ],
    "actors": [
      "Taylor Kitsch",
      "Channing Tatum"
    ],
    "films": [
      "X-Men Origins: Wolverine (2009)",
      "Deadpool & Wolverine (2024)"
    ],
    "powers": [
      "Charges objects (especially playing cards) with explosive kinetic energy",
      "Superhuman agility and reflexes",
      "Master thief and staff fighter",
      "Hypnotic charm"
    ],
    "storyline": "Remy LeBeau, the Cajun mutant known as Gambit, was born in New Orleans and raised within the secretive Thieves Guild, where his charm, agility, and light fingers made him a natural. His mutant power — the ability to charge any object with explosive kinetic energy, most famously the playing cards he flicks at enemies — manifested dangerously in his youth, and his glowing red-on-black eyes marked him as something other than human. A roguish thief with a shadowy past that includes a botched mission as part of Mister Sinister's machinations, Gambit eventually found his way to Professor Xavier's X-Men.\n\nWithin the team, Gambit is best known for his passionate, star-crossed romance with Rogue, whose power to absorb the life force and abilities of anyone she touches makes physical intimacy impossible — a tragic dynamic that became one of the X-Men's most enduring relationships. His morally ambiguous history, including his unwitting role in the massacre of the underground Morlocks, has repeatedly tested the team's trust in him, casting him as a hero perpetually seeking redemption for his past.\n\nOn screen, Gambit has had a famously troubled history. Taylor Kitsch played a version of the character in 2009's 'X-Men Origins: Wolverine,' showcasing his card-charging powers and bo-staff combat. For years, Channing Tatum was attached to star in a standalone Gambit film that went through numerous rewrites and director changes before being cancelled. Tatum finally got to play the character in 2024's 'Deadpool & Wolverine,' appearing as a charismatic, displaced version of Gambit stranded in the multiverse's purgatory known as the Void, fulfilling a long-deferred fan wish.",
    "facts": [
      "His signature weapon is a deck of explosively charged playing cards, which he flicks with deadly precision.",
      "Channing Tatum spent nearly a decade trying to make a solo Gambit film before it was scrapped — he finally played the role in 'Deadpool & Wolverine.'",
      "Gambit's tragic, untouchable romance with Rogue is one of the most famous relationships in X-Men lore.",
      "His mutant eyes — red irises on black sclera — are a permanent physical trait, not the result of his powers.",
      "Gambit was once unknowingly complicit in the Mutant Massacre, a dark secret that haunted his standing with the X-Men."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/274-gambit.jpg"
  },
  {
    "name": "Rogue",
    "alias": "Anna Marie",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1981,
    "firstAppearance": "Avengers Annual #10 (1981)",
    "creators": [
      "Chris Claremont",
      "Michael Golden"
    ],
    "actors": [
      "Anna Paquin"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)"
    ],
    "powers": [
      "Absorbs memories, powers and life force through skin contact",
      "Can permanently gain abilities (e.g., flight and super strength in comics)",
      "Cannot safely touch others without absorbing them"
    ],
    "storyline": "Rogue, born Anna Marie, possesses one of the most poignant powers in the X-Men's roster: through skin-to-skin contact she absorbs another person's memories, abilities and life force. In the comics she first appeared as a villain, a member of Mystique's Brotherhood, and her formative tragedy came from a fateful encounter with Carol Danvers — then Ms. Marvel — from whom she permanently absorbed superhuman strength, durability and flight, along with a fractured copy of Carol's psyche.\n\nUnable to control her power, and overwhelmed by the voices and memories of those she touched, Rogue eventually turned to Charles Xavier and joined the X-Men in search of help and redemption. Her former enemies became her family, and she grew into one of the team's most beloved and powerful members. The cruelty of her ability — that she can never safely touch another human being — makes intimacy, especially her long romance with the equally guarded Gambit, a source of constant longing and pain.\n\nIn the X-Men film franchise, Rogue is reimagined as a frightened young runaway whose first kiss left her boyfriend comatose. Anna Paquin's version becomes the emotional entry point of the first film, taken under Wolverine's protection and nearly sacrificed by Magneto in a machine meant to mutate world leaders. Her storyline foregrounds the loneliness and fear of an uncontrollable power.\n\nThe films diverge sharply from the comics, particularly in The Last Stand, where Rogue chooses to take a controversial 'cure' to suppress her mutation so she can finally touch the people she loves — a decision later partially walked back in the revised timeline of Days of Future Past. Across both media, her arc is fundamentally about the search for control, connection and the right to define herself beyond her dangerous gift.",
    "facts": [
      "Her power makes physical intimacy a constant, painful challenge, central to her romance with Gambit.",
      "In the comics she debuted as a villain and gained permanent flight and super strength by absorbing Ms. Marvel's powers.",
      "Her real name, Anna Marie, was kept deliberately vague for decades in the comics.",
      "In X-Men: The Last Stand she chooses a 'cure' to suppress her mutation so she can touch others."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/567-rogue.jpg"
  },
  {
    "name": "Beast",
    "alias": "Hank McCoy",
    "teams": [
      "X-Men",
      "Avengers"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Kelsey Grammer",
      "Nicholas Hoult"
    ],
    "films": [
      "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Superhuman strength, agility and speed",
      "Furred, ape-like physiology with prehensile feet",
      "Genius-level scientist and physician"
    ],
    "storyline": "Henry 'Hank' McCoy was one of the five original X-Men recruited by Professor Charles Xavier, distinguished from the outset by the paradox at the heart of his character: an apelike physique with oversized hands and feet that gave him superhuman agility, paired with one of the most brilliant scientific minds on Earth. In his early adventures he was the team's articulate, erudite member who quoted poetry while leaping into battle, a gentle intellectual trapped in a body built for combat.\n\nHank's defining transformation came when, as a research scientist, he ingested an experimental serum to disguise his mutation and instead mutated further, growing the blue fur and feline features that became his iconic look. This deepened his lifelong struggle as a mutant who can no longer pass as human, even as he became a respected scientist, geneticist and statesman for mutant rights. Over the years he served not only with the X-Men but also as a member of the Avengers and the Defenders, bridging Marvel's hero communities.\n\nIn the X-Men films, Kelsey Grammer plays the older, fully blue-furred Beast as a U.S. government Secretary of Mutant Affairs in The Last Stand, while Nicholas Hoult portrays the younger Hank across the prequel films, charting his journey from a self-conscious young scientist hiding his mutation to a confident hero who embraces it. His relationship with Mystique and his role developing technology like Cerebro feature prominently in those stories.\n\nThroughout his history, Beast embodies the tension between mind and body, civilization and savagery. He remains a beloved fixture of the X-Men, equally at home in a laboratory or a battlefield, and his evolving appearance has made him one of the most visually distinctive members of the team.",
    "facts": [
      "He combines the mind of a genius with the body of a powerful beast.",
      "He started out grey-skinned and only gained his famous blue fur after a self-experiment went awry.",
      "Beyond the X-Men, he has also been a member of the Avengers and the Defenders.",
      "He is fluent in multiple languages and frequently quotes literature and philosophy in battle."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/75-beast.jpg"
  },
  {
    "name": "Nightcrawler",
    "alias": "Kurt Wagner",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1975,
    "firstAppearance": "Giant-Size X-Men #1 (1975)",
    "creators": [
      "Len Wein",
      "Dave Cockrum"
    ],
    "actors": [
      "Alan Cumming",
      "Kodi Smit-McPhee"
    ],
    "films": [
      "X2 (2003)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Teleportation in a puff of brimstone (the signature 'BAMF')",
      "Superhuman agility and a prehensile tail",
      "Wall-crawling and near-invisibility in shadow",
      "Expert acrobat and swordsman"
    ],
    "storyline": "Kurt Wagner was born in Bavaria with a strikingly demonic appearance — indigo skin, yellow eyes, two-fingered hands, pointed ears and a prehensile tail. Abandoned and feared as a child, he was raised in a traveling circus where his acrobatic gifts made him a star performer. When superstitious villagers later turned on him as a 'devil,' he was rescued by Professor Charles Xavier, who recruited the young mutant into the all-new X-Men introduced in Giant-Size X-Men #1 (1975).\n\nAs Nightcrawler, Kurt became one of the team's most beloved members. Despite his unsettling looks, he is portrayed as warm, swashbuckling and deeply devout — a practicing Catholic whose faith is a defining feature, exploring the comics' themes of being judged by appearance. His teleportation ('BAMF') lets him strike and vanish, and he often serves as the moral and emotional heart of the team.\n\nKurt's heritage became one of the X-Men's great mysteries, eventually revealed: his mother is the shape-shifting villain Mystique, and (in later retcons) his father is the demonic mutant Azazel. Over time Kurt has died and returned, briefly journeyed to a comic-book afterlife, and led his own offshoot adventures, but always returns to the X-Men as their conscience.\n\nIn the 20th Century Fox films, Nightcrawler debuts spectacularly in X2 (2003), where a brainwashed Kurt teleports through the White House in the opening sequence — played by Alan Cumming. A younger version, played by Kodi Smit-McPhee, joins the team in X-Men: Apocalypse (2016) and Dark Phoenix (2019), fighting alongside the next generation of mutants.",
    "facts": [
      "His teleportation is always accompanied by the smell of brimstone and a 'BAMF' sound, which became his nickname.",
      "Nightcrawler is one of comics' most prominent devoutly religious heroes, a practicing Roman Catholic.",
      "He is the biological son of the shape-shifting mutant Mystique, who abandoned him as an infant.",
      "His acrobatic White House infiltration opens X2 (2003) and is one of the franchise's most praised sequences."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/490-nightcrawler.jpg"
  },
  {
    "name": "Mystique",
    "alias": "Raven Darkhölme",
    "teams": [
      "Brotherhood of Mutants",
      "X-Men"
    ],
    "category": "Anti-Hero",
    "created": 1978,
    "firstAppearance": "Ms. Marvel #16 (1978)",
    "creators": [
      "Chris Claremont",
      "Dave Cockrum"
    ],
    "actors": [
      "Rebecca Romijn",
      "Jennifer Lawrence"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Shapeshifting into any person, perfectly mimicking appearance and voice",
      "Slowed aging and enhanced agility",
      "Master spy and infiltrator"
    ],
    "storyline": "Mystique, whose real name is Raven Darkhölme, is one of Marvel's most enigmatic and morally ambiguous mutants, first appearing in Ms. Marvel #16 in 1978. Her shapeshifting power allows her to alter her cells to perfectly replicate the appearance, voice, and mannerisms of any person, making her a master spy, infiltrator, and assassin. Her natural form, with blue skin, vivid red hair, and yellow eyes, is striking and unmistakable, a deliberate expression of mutant pride in a body she refuses to hide except when her work demands it. Her power also dramatically slows her aging, and the comics establish her as far older than she appears, with a history stretching back over a century.\n\nThe leader of a militant incarnation of the Brotherhood of Mutants, Mystique has waged her own war for mutant survival, frequently operating in shadow and serving her own agenda rather than any single ideology. She is bound by a complex web of relationships: she is the mother of the X-Men's Nightcrawler, the adoptive mother of Rogue, and the longtime lover and partner of the precognitive mutant Destiny. These connections repeatedly pull her between villainy and reluctant heroism, and over the years she has served on government strike teams, the Brotherhood, and even, at times, the X-Men themselves.\n\nIn the comics, Mystique's loyalties shift constantly, making her one of the franchise's most unpredictable figures, capable of tenderness toward those she loves and ruthless cruelty toward those who threaten her cause. Her devotion to Destiny in particular drives much of her behavior, and modern X-Men stories on the mutant nation of Krakoa have foregrounded their relationship, with Mystique willing to betray nearly anyone to ensure Destiny's resurrection.\n\nOn film, Mystique was portrayed by Rebecca Romijn in the original X-Men trilogy as a near-silent, lethal henchwoman of Magneto, defined by her hand-to-hand combat and seamless infiltrations. Jennifer Lawrence later played a much younger Raven in the prequel films beginning with X-Men: First Class, recasting her as a central, sympathetic figure: Charles Xavier's childhood friend torn between his dream of coexistence and Magneto's call to mutant militancy. Across both eras, Mystique embodies the X-Men saga's central tension between assimilation and pride, loyalty and betrayal.",
    "facts": [
      "Her natural form has blue skin, red hair, and yellow eyes.",
      "Her shapeshifting power dramatically slows her aging; she is over a century old in the comics.",
      "She is the biological mother of Nightcrawler and the adoptive mother of Rogue.",
      "Her great love is the precognitive mutant Destiny.",
      "Jennifer Lawrence's casting turned the originally minor villain into a central figure of the prequel films."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/480-mystique.jpg"
  },
  {
    "name": "Apocalypse",
    "alias": "En Sabah Nur",
    "teams": [],
    "category": "Villain",
    "created": 1986,
    "firstAppearance": "X-Factor #5 (1986)",
    "creators": [
      "Louise Simonson",
      "Jackson Guice"
    ],
    "actors": [
      "Oscar Isaac"
    ],
    "films": [
      "X-Men: Apocalypse (2016)"
    ],
    "powers": [
      "Ancient, near-immortal mutant with vast power",
      "Molecular self-manipulation, size-shifting and energy projection",
      "Technopathy and the ability to empower others (his Horsemen)",
      "Body augmentation via ancient Celestial technology"
    ],
    "storyline": "En Sabah Nur, called Apocalypse, is presented as one of the first mutants ever born, emerging in ancient Egypt millennia ago. Abandoned as an infant for his strange appearance, he survived the harsh desert and adopted a brutal Darwinian creed: only the strongest deserve to survive, and the weak must be culled so that mutantkind can ascend. Augmented over the centuries by ancient Celestial technology, he gained the ability to reshape his own molecular structure, grow to immense size, and channel devastating energy.\n\nThroughout the X-Men comics, Apocalypse acts as a near-immortal force of natural selection, periodically awakening from long slumbers to test and 'cull' the world. He recruits powerful mutants as his Four Horsemen, twisting them into agents of his philosophy, most infamously transforming a dying Angel into the metal-winged Archangel, Death. His machinations span centuries and timelines, including the dystopian 'Age of Apocalypse' reality in which he conquers North America.\n\nApocalypse's schemes repeatedly intertwine with the X-Men's mythology, including his connection to the time-traveling Cable and the techno-organic virus that threatens that child. As an embodiment of survival-of-the-fittest taken to genocidal extremes, he stands as one of the X-Men's most formidable and ideologically driven antagonists.\n\nIn X-Men: Apocalypse (2016), Oscar Isaac plays the ancient mutant awakening in the 1980s after thousands of years entombed. Disgusted by the modern world, he recruits four Horsemen, including a grieving Magneto, and sets out to cleanse humanity and remake the planet in his image. The X-Men, led by a young generation including Mystique, Cyclops, and an emerging Jean Grey, ultimately unleash Jean's Phoenix power to destroy him.",
    "facts": [
      "He is regarded as one of the oldest mutants in existence, born in ancient Egypt.",
      "His philosophy is a genocidal extreme of survival of the fittest.",
      "He recruits Four Horsemen, transforming the X-Man Angel into the deadly Archangel.",
      "The alternate-reality 'Age of Apocalypse' saga reshaped the entire X-Men line in 1995.",
      "He was augmented by ancient Celestial technology, granting near-immortality and shapeshifting."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/35-apocalypse.jpg"
  },
  {
    "name": "Okoye",
    "alias": "Okoye",
    "teams": [
      "Dora Milaje"
    ],
    "category": "Hero",
    "created": 2016,
    "firstAppearance": "Adapted from Black Panther lore; MCU debut in Captain America: Civil War (2016)",
    "creators": [
      "Based on characters by Stan Lee & Jack Kirby"
    ],
    "actors": [
      "Danai Gurira"
    ],
    "films": [
      "Captain America: Civil War (2016)",
      "Black Panther (2018)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Black Panther: Wakanda Forever (2022)"
    ],
    "powers": [
      "Elite warrior and general of the Dora Milaje",
      "Master of the vibranium spear and hand-to-hand combat",
      "Unshakable loyalty and tactical brilliance"
    ],
    "storyline": "Okoye is the formidable general of the Dora Milaje, the all-female corps of elite warriors who serve as the royal guard and special forces of the technologically advanced African nation of Wakanda. Drawing on Black Panther comics lore, the Marvel Cinematic Universe developed her, played by Danai Gurira, into a central pillar of Wakanda's defense, introduced briefly in Captain America: Civil War and fully realized in Black Panther.\n\nDefined by her unwavering devotion to the throne and to Wakanda's traditions, Okoye faces an agonizing crisis of loyalty when the usurper Erik Killmonger seizes power by defeating T'Challa in ritual combat. Bound by duty to serve the rightful king regardless of her personal feelings, she initially stands against her allies before ultimately helping restore T'Challa and reaffirming that her deepest allegiance is to Wakanda itself.\n\nA master of the vibranium spear and of close-quarters combat, Okoye fights in the great battles against Thanos in Avengers: Infinity War and Endgame, helping defend Wakanda when it becomes the front line of the war against the Black Order. Her tactical mind and battlefield discipline make her one of the most reliable warriors among Earth's heroes.\n\nIn Black Panther: Wakanda Forever, set amid the nation's grief following T'Challa's death, Okoye endures personal disgrace after a failed mission, is stripped of her rank, and must rebuild her sense of purpose. She is reforged as the armored Midnight Angel, fighting alongside Shuri and the new Black Panther to protect Wakanda from the underwater kingdom of Talokan.",
    "facts": [
      "She wields a vibranium spear and disdains firearms as crude and \"primitive.\"",
      "Her loyalty to the throne forced her to fight against her own friends when Killmonger briefly took the crown.",
      "In Wakanda Forever she dons advanced armor to become one of the Midnight Angels.",
      "Actress Danai Gurira was already well known to genre fans as the katana-wielding Michonne on The Walking Dead."
    ]
  },
  {
    "name": "Shuri",
    "alias": "Shuri",
    "teams": [],
    "category": "Hero",
    "created": 2005,
    "firstAppearance": "Black Panther Vol. 4 #2 (2005)",
    "creators": [
      "Reginald Hudlin",
      "John Romita Jr."
    ],
    "actors": [
      "Letitia Wright"
    ],
    "films": [
      "Black Panther (2018)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Black Panther: Wakanda Forever (2022)"
    ],
    "powers": [
      "Genius inventor — designs Wakanda's vibranium technology",
      "Later takes up the heart-shaped herb's enhancements as Black Panther",
      "Skilled combatant with energy gauntlets"
    ],
    "storyline": "Shuri is the younger sister of T'Challa, the king of the technologically advanced African nation of Wakanda. Introduced in the comics in 2005, she is a member of the royal family with her own ambitions toward the Black Panther mantle. In the comics, she ultimately succeeds her brother as the Black Panther during a period when T'Challa is incapacitated, ruling and defending Wakanda in her own right and demonstrating fierce combat prowess alongside her royal lineage.\n\nIn the Marvel Cinematic Universe, Shuri is reimagined as Wakanda's brilliant chief scientist and head of its Design Group, responsible for engineering the nation's most advanced vibranium-based technology, including upgrades to her brother's Black Panther suit, remote-piloted vehicles, and medical breakthroughs. Her wit, intelligence and sibling banter with T'Challa made her a standout in the first Black Panther film.\n\nShuri plays a critical supporting role during the conflict with Thanos, attempting to safely extract the Mind Stone from Vision before the Wakandan battle is overwhelmed. Like many heroes, she is among those lost in the Snap and later restored five years afterward, returning to aid in the final battle against Thanos.\n\nFollowing the death of T'Challa, the events of Black Panther: Wakanda Forever center on Shuri's grief and her struggle to find purpose. She succeeds in synthesizing a new heart-shaped herb, granting her the enhanced abilities of the Black Panther, and takes up the mantle to defend Wakanda against the underwater kingdom of Talokan and its ruler Namor, cementing her as her brother's successor.",
    "facts": [
      "Shuri is widely regarded as one of the smartest people in the entire Marvel Cinematic Universe.",
      "In the comics, Shuri became the Black Panther and ruler of Wakanda before her MCU counterpart.",
      "She personally designed much of Wakanda's vibranium technology, including her brother's suits.",
      "Shuri synthesized a new heart-shaped herb to gain the Black Panther's enhanced abilities in Wakanda Forever.",
      "Letitia Wright's Shuri was such a fan favorite that she was chosen to carry the Black Panther franchise forward."
    ]
  },
  {
    "name": "Hela",
    "alias": "Hela Odinsdottir",
    "teams": [],
    "category": "Villain",
    "created": 1964,
    "firstAppearance": "Journey into Mystery #102 (1964)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Cate Blanchett"
    ],
    "films": [
      "Thor: Ragnarok (2017)"
    ],
    "powers": [
      "Asgardian goddess of death with immense strength and durability",
      "Generates and hurls bladed weapons at will",
      "Near-immortality, drawing power from Asgard itself",
      "Necromancy — raises armies of the dead"
    ],
    "storyline": "Hela, the Asgardian goddess of death, first appeared in Journey into Mystery #102 in 1964, created by Stan Lee and Jack Kirby and inspired by the Norse goddess Hel. In the comics she rules over the realms of Hel and Niflheim, the domains of the dishonored dead, and is one of Thor's most persistent and powerful adversaries. Cold, regal, and obsessed with claiming the souls of Asgardians, she repeatedly schemes against Odin and Thor, and her power over death makes her a near-unstoppable cosmic threat.\n\nThroughout Thor's comic history, Hela's machinations have included attempts to extend her dominion over Asgard, cursing Thor with unbreakable yet brittle bones, and manipulating the cycles of Ragnarok. She is depicted as both an antagonist and, occasionally, a reluctant cosmic necessity, since death itself must have a keeper. Her iconic horned headdress and command of the dead make her one of Marvel's most visually striking villains.\n\nThe Marvel Cinematic Universe reimagined Hela as Odin's firstborn daughter and the goddess of death, portrayed with menacing grandeur by Cate Blanchett in 2017's Thor: Ragnarok. In this version, she was once Odin's brutal executioner and conqueror, helping him build the Asgardian empire through bloodshed before her ambitions grew so dangerous that Odin imprisoned and erased her from history.\n\nFreed upon Odin's death, Hela returns to seize Asgard, effortlessly shattering Thor's hammer Mjolnir and slaughtering the Asgardian army. To defeat her, Thor and Loki realize she draws her power from Asgard itself and deliberately trigger Ragnarok, summoning the fire demon Surtur to destroy the realm and, with it, Hela. Her arc reframes Asgard's golden legacy as one built on hidden conquest and violence.",
    "facts": [
      "She effortlessly shattered Thor's hammer Mjolnir with one hand in Thor: Ragnarok.",
      "In the MCU she is revealed as Odin's firstborn child and former executioner, erased from Asgard's history.",
      "Hela is inspired by Hel, the Norse goddess who rules over the dishonored dead.",
      "Her power is tied to Asgard itself, which is why destroying the realm was the only way to stop her.",
      "Cate Blanchett took on her first comic-book villain role to play Hela."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/321-hela.jpg"
  },
  {
    "name": "Killmonger",
    "alias": "Erik 'N'Jadaka' Stevens",
    "teams": [],
    "category": "Villain",
    "created": 1973,
    "firstAppearance": "Jungle Action #6 (1973)",
    "creators": [
      "Don McGregor",
      "Rich Buckler"
    ],
    "actors": [
      "Michael B. Jordan"
    ],
    "films": [
      "Black Panther (2018)",
      "Black Panther: Wakanda Forever (2022)"
    ],
    "powers": [
      "Elite black-ops and special-forces training",
      "Master hand-to-hand combatant and tactician",
      "Briefly wields the powers of the Black Panther",
      "Ruthless strategic intelligence"
    ],
    "storyline": "Erik Killmonger, born N'Jadaka, first appeared in the comics in 1973 as one of Black Panther's most persistent and intelligent foes. In the comics, his family was enslaved by the villain Klaw during an invasion of Wakanda, and the young N'Jadaka was taken from his homeland. A brilliant strategist with a doctorate-level intellect and elite physical training, he repeatedly schemed to overthrow T'Challa and seize the Wakandan throne, motivated by a belief that he, not T'Challa, should rule.\n\nThe Marvel Cinematic Universe transformed Killmonger into one of the genre's most acclaimed and sympathetic antagonists. Reimagined as Erik Stevens, he is revealed to be T'Challa's cousin — the son of Prince N'Jobu, a Wakandan who, while living undercover in 1990s Oakland, was killed by his own brother, King T'Chaka, for conspiring to arm oppressed people around the world. Abandoned as a child in America, Erik grew up witnessing systemic injustice, channeling his rage into becoming a decorated black-ops soldier, earning the nickname 'Killmonger' for his staggering kill count.\n\nReturning to Wakanda, Killmonger legally challenges T'Challa for the throne in ritual combat, defeats him, and seizes power, immediately moving to weaponize Wakanda's advanced technology and distribute it to start a global uprising against oppression. His villainy is rooted in a genuine grievance — Wakanda's choice to hide its wealth while people of the African diaspora suffered — which forces T'Challa to confront his nation's isolationism.\n\nMortally wounded in their rematch, Killmonger delivers one of the MCU's most powerful lines, choosing to die free rather than be healed and imprisoned: 'Bury me in the ocean with my ancestors who jumped from ships, because they knew death was better than bondage.' His ideological challenge permanently reshaped T'Challa's worldview, leading Wakanda to finally open itself to the world. He returns briefly in 'Wakanda Forever' as a vision during Shuri's spiritual journey.",
    "facts": [
      "His 'Is this your king?' line became one of the MCU's most quoted moments.",
      "Killmonger is widely regarded as one of the best-written villains in the MCU because his cause has genuine moral weight.",
      "In the MCU he is T'Challa's first cousin, the son of the murdered Prince N'Jobu.",
      "The scars covering his body each represent a confirmed kill from his time as a special-forces soldier.",
      "Director Ryan Coogler framed Killmonger as a tragic mirror of T'Challa — a man shaped by what Wakanda chose to ignore."
    ]
  },
  {
    "name": "Vulture",
    "alias": "Adrian Toomes",
    "teams": [],
    "category": "Villain",
    "created": 1963,
    "firstAppearance": "The Amazing Spider-Man #2 (1963)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Michael Keaton"
    ],
    "films": [
      "Spider-Man: Homecoming (2017)",
      "Morbius (2022)"
    ],
    "powers": [
      "Mechanical winged flight harness scavenged from alien tech",
      "Enhanced strength and durability from his suit",
      "Skilled engineer and salvager",
      "Integrated talons and weaponry"
    ],
    "storyline": "Adrian Toomes, the Vulture, is one of Spider-Man's oldest foes, debuting in 1963 as a founding member of the original Sinister Six. In the comics he is a brilliant but embittered electronics engineer who invents an electromagnetic flight harness, then turns to crime after being cheated out of his work by a business partner. Despite typically being depicted as an older man, his suit grants him enhanced strength and the agility of a bird of prey, and his resentment toward those who wronged him fuels his villainy.\n\nIn Spider-Man: Homecoming, Toomes is reinvented as a working-class salvage contractor whose company is hired to clean up the wreckage of the Battle of New York. When Tony Stark's newly formed Department of Damage Control abruptly seizes the contract and pushes his crew out of business, the embittered Toomes keeps a cache of recovered Chitauri technology and uses it to build a flying suit and a black-market weapons operation — reframing him as a grounded, sympathetic antagonist driven by economic grievance against the wealthy and powerful.\n\nThe film's most acclaimed sequence is a sudden, chilling twist: as Toomes drives Peter Parker to the homecoming dance, he realizes the boy dating his daughter Liz is also Spider-Man, the hero who has been dismantling his operation. The quiet menace of that car ride redefined the character as one of the MCU's most effective and human villains.\n\nUnlike many comic-book villains, Toomes is allowed a measure of honor: caught and imprisoned, he protects Peter's secret identity even from fellow inmates. His story is left open-ended, and Michael Keaton's Vulture makes a brief return in Morbius, suggesting Toomes remains a lingering figure connected to the wider web of Spider-Man's enemies.",
    "facts": [
      "In a chilling twist, he turns out to be the father of Peter Parker's homecoming date, Liz.",
      "His MCU suit is built from Chitauri technology salvaged after the Battle of New York.",
      "In the comics he was a founding member of the original Sinister Six.",
      "Even after being captured, Toomes refuses to reveal Spider-Man's secret identity."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/701-vulture.jpg"
  },
  {
    "name": "Doctor Octopus",
    "alias": "Otto Octavius",
    "teams": [
      "Sinister Six"
    ],
    "category": "Villain",
    "created": 1963,
    "firstAppearance": "The Amazing Spider-Man #3 (1963)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Alfred Molina"
    ],
    "films": [
      "Spider-Man 2 (2004)",
      "Spider-Man: No Way Home (2021)"
    ],
    "powers": [
      "Four AI-driven mechanical tentacles fused to his spine",
      "Superhuman reach, strength and multitasking in combat",
      "Brilliant nuclear physicist and inventor"
    ],
    "storyline": "Otto Octavius was a gifted but socially isolated nuclear physicist who designed a set of four powerful, telescoping mechanical arms to handle radioactive materials safely from a distance. A laboratory accident fused the harness to his body and damaged his brain, leaving him able to control the limbs telepathically while warping his personality into megalomania. Reborn as Doctor Octopus, he became one of Spider-Man's earliest and most persistent foes, debuting in only the third issue of The Amazing Spider-Man.\n\nDoc Ock quickly established himself as a criminal mastermind, founding and frequently leading the Sinister Six, a coalition of Spider-Man's deadliest enemies. Across decades of stories he schemed for power and wealth, and was even briefly engaged to Aunt May in one infamous arc. His arms, eventually depicted as housing their own artificial intelligence, became as much a character as Octavius himself. In the acclaimed Superior Spider-Man storyline, a dying Octavius swapped minds with Peter Parker, taking over his body and operating as a more ruthless 'superior' Spider-Man before ultimately conceding that Peter was the better hero, an arc that began his path toward redemption.\n\nIn film, Alfred Molina's celebrated portrayal in Spider-Man 2 reframes Octavius as a tragic figure: a brilliant, idealistic scientist whose fusion experiment kills his beloved wife and lets the malevolent arms override his conscience. He ultimately sacrifices himself to stop his runaway reactor, regaining his humanity in his final moments.\n\nDecades later, Spider-Man: No Way Home pulls that same Octavius into the MCU through a multiversal rift, where he is freed from the arms' control and cured, completing the redemptive arc the earlier film hinted at. The character endures as one of Spider-Man's most intellectually formidable and tragically human adversaries.",
    "facts": [
      "He is a founding member and frequent leader of the Sinister Six.",
      "In the Superior Spider-Man story he swapped minds with Peter Parker and took over as Spider-Man.",
      "Alfred Molina reprised the role 17 years after Spider-Man 2 for No Way Home.",
      "His tentacles are often depicted with their own artificial intelligence that can influence his mind."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/225-doctor-octopus.jpg"
  },
  {
    "name": "Wong",
    "alias": "Wong",
    "teams": [
      "Masters of the Mystic Arts"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Strange Tales #110 (1963)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Benedict Wong"
    ],
    "films": [
      "Doctor Strange (2016)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "Shang-Chi and the Legend of the Ten Rings (2021)",
      "Spider-Man: No Way Home (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)",
      "The Marvels (2023)"
    ],
    "powers": [
      "Master of the mystic arts and skilled spellcaster",
      "Sling Ring portals and powerful energy constructs",
      "Keeper of Kamar-Taj's library, knowledge and relics",
      "Disciplined mystical and martial combatant"
    ],
    "storyline": "Wong first appeared in the comics in 1963 as Doctor Strange's manservant and personal aide, the latest in a line of warriors sworn to serve the Sorcerer Supreme. Originally a problematic 'faithful servant' stereotype of the era, the character was substantially reworked over the decades into a capable martial artist, magic-user and trusted friend rather than a subordinate.\n\nThe Marvel Cinematic Universe reinvented Wong entirely, played by Benedict Wong as a formidable, deadpan-funny sorcerer and the stern librarian of Kamar-Taj. Introduced in Doctor Strange (2016), he guards the sanctum's most dangerous tomes and trains alongside Strange rather than under him. His stature grows steadily across the franchise: he helps defend Earth in Infinity War and Endgame, leading reinforcements through portals in the final battle against Thanos.\n\nFollowing the five-year 'Blip' (during which Strange was dusted), Wong becomes the Sorcerer Supreme, the foremost protector of Earth's mystical defenses — a position Strange himself acknowledges he now technically outranks. Wong's expanded role makes him a connective figure across the MCU, appearing in Shang-Chi, where he is revealed to moonlight as a participant in an underground fight club, and recruiting Abomination for sparring matches.\n\nWong continues to anchor the MCU's magical corner in Spider-Man: No Way Home, Multiverse of Madness and The Marvels, often providing both crucial exposition and dry comic relief. From a dated sidekick on the page to a fan-favorite Sorcerer Supreme on screen, Wong's evolution is one of Marvel's most dramatic character glow-ups.",
    "facts": [
      "In the MCU, Wong becomes the Sorcerer Supreme after the Blip, technically outranking Doctor Strange.",
      "He moonlights running and competing in an underground fight club, glimpsed in Shang-Chi (2021).",
      "The character debuted in 1963 as Strange's manservant and was significantly modernized over later decades.",
      "Benedict Wong shares his surname with the character, a coincidence that delighted fans when he was cast."
    ]
  },
  {
    "name": "Blade",
    "alias": "Eric Brooks",
    "teams": [],
    "category": "Anti-Hero",
    "created": 1973,
    "firstAppearance": "The Tomb of Dracula #10 (1973)",
    "creators": [
      "Marv Wolfman",
      "Gene Colan"
    ],
    "actors": [
      "Wesley Snipes",
      "Mahershala Ali"
    ],
    "films": [
      "Blade (1998)",
      "Blade II (2002)",
      "Blade: Trinity (2004)"
    ],
    "powers": [
      "Half-human, half-vampire 'Daywalker' immune to sunlight",
      "Superhuman strength, speed, senses and healing",
      "Master swordsman and martial artist",
      "Expert vampire hunter with specialized weaponry"
    ],
    "storyline": "Eric Brooks, known as Blade, was created by Marv Wolfman and Gene Colan in 1973, debuting in The Tomb of Dracula #10 as a supporting vampire hunter in Marvel's horror line. His origin is steeped in tragedy: his mother was bitten by a vampire while in labor, and Eric was born carrying vampiric traits in his blood without inheriting the lethal weaknesses of a true vampire. This unique condition makes him a 'Daywalker,' immune to sunlight and possessing superhuman strength, speed, senses, and accelerated healing, while retaining his humanity and his free will.\n\nDriven by the loss of his mother and a burning hatred for the creatures that took her, Blade dedicates his life to hunting vampires, becoming a relentless and methodical warrior armed with silver-edged blades, stakes, and specialized weaponry. In the comics he began as part of an ensemble battling Dracula himself, but over time he emerged as a solo figure, a grim and uncompromising anti-hero who walks the line between human and monster, often distrusted by the very people he protects.\n\nBlade's greatest cultural impact came not in comics but on film. The 1998 movie Blade, starring Wesley Snipes, was a critical and commercial success that proved a darker, R-rated Marvel property could thrive on the big screen, and it is widely credited with helping launch the modern wave of Marvel superhero films that culminated in the 2000s comic-movie boom. Snipes reprised the role in Blade II, directed by Guillermo del Toro, and Blade: Trinity, cementing the character as an icon of action and horror cinema and introducing Blade to audiences who had never read the comics.\n\nMahershala Ali was later cast to bring Blade into the Marvel Cinematic Universe, signaling Marvel's intent to reintroduce the Daywalker to a new generation. Throughout his appearances, Blade remains defined by his half-human, half-vampire nature, his mastery of bladed combat, and his eternal, lonely war against the vampire race that gave him his powers but cost him his mother and his peace.",
    "facts": [
      "The 1998 Blade film is widely credited with helping launch the modern Marvel movie boom.",
      "As a 'Daywalker' he has a vampire's strengths but is immune to sunlight.",
      "He first appeared as a supporting character in The Tomb of Dracula, fighting Dracula himself.",
      "Blade II was directed by Guillermo del Toro before he became an Oscar-winning filmmaker.",
      "Mahershala Ali, a two-time Academy Award winner, was cast to bring Blade into the MCU."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/112-blade.jpg"
  },
  {
    "name": "Ghost Rider",
    "alias": "Johnny Blaze",
    "teams": [],
    "category": "Anti-Hero",
    "created": 1972,
    "firstAppearance": "Marvel Spotlight #5 (1972)",
    "creators": [
      "Gary Friedrich",
      "Roy Thomas",
      "Mike Ploog"
    ],
    "actors": [
      "Nicolas Cage"
    ],
    "films": [
      "Ghost Rider (2007)",
      "Ghost Rider: Spirit of Vengeance (2011)"
    ],
    "powers": [
      "Transforms into a flaming-skulled Spirit of Vengeance",
      "Wields hellfire and a chain whip",
      "The 'Penance Stare' that burns a soul with all the pain it has caused",
      "Near-invulnerability and a hellfire-powered motorcycle"
    ],
    "storyline": "Johnny Blaze was a daredevil stunt motorcyclist raised in a carnival who, in desperation to save his dying father figure (or, in some versions, a loved one) from cancer, made a bargain with the demon Mephisto. The deal went tragically wrong, and Blaze found himself bonded to the demonic Spirit of Vengeance known as Zarathos. Now, in the presence of evil or at night, his flesh burns away to reveal a flaming skull, and he becomes the Ghost Rider, a supernatural avenger of the innocent.\n\nThe Ghost Rider rides a hellfire-wrapped motorcycle and wields a chain that becomes a weapon at his command. His signature ability is the Penance Stare, which forces a victim to feel the full weight of all the pain and suffering they have inflicted on others, an experience that can shatter a guilty soul. Blaze's existence is a constant struggle for control over the demonic force inside him, set against a backdrop of demons, cults, and the literal forces of Hell.\n\nOver the decades, the Ghost Rider mantle has passed to and been shared by several hosts, most notably Danny Ketch in the 1990s and, more recently, Robbie Reyes, who drives a possessed muscle car. Despite his terrifying appearance, the Rider operates as an anti-hero, brutally punishing the wicked while protecting the helpless.\n\nIn the live-action films, Nicolas Cage portrayed Johnny Blaze in Ghost Rider (2007) and its darker sequel Ghost Rider: Spirit of Vengeance (2011). Both depict Blaze wrestling with his curse, hunting demons, and confronting Mephisto-style infernal forces, leaning into the character's blend of horror, biker mythology, and supernatural vengeance.",
    "facts": [
      "His Penance Stare makes a victim feel every ounce of pain they've inflicted.",
      "Johnny Blaze sold his soul to a demon, often identified as Mephisto, in a deal gone wrong.",
      "Multiple people have been Ghost Rider, including Danny Ketch and the car-driving Robbie Reyes.",
      "The original 1970s Ghost Rider was bonded to a demon named Zarathos.",
      "His hellfire can burn the soul itself, not just the body."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/280-ghost-rider.jpg"
  },
  {
    "name": "Jessica Jones",
    "alias": "Jessica Jones",
    "teams": [
      "Defenders"
    ],
    "category": "Anti-Hero",
    "created": 2001,
    "firstAppearance": "Alias #1 (2001)",
    "creators": [
      "Brian Michael Bendis",
      "Michael Gaydos"
    ],
    "actors": [
      "Krysten Ritter"
    ],
    "films": [
      "Jessica Jones (TV, 2015-2019)",
      "The Defenders (TV, 2017)"
    ],
    "powers": [
      "Superhuman strength and durability",
      "Limited flight (more of a guided leap)",
      "Skilled private investigator",
      "High resilience to injury"
    ],
    "storyline": "Jessica Jones debuted in 2001 in Alias, the flagship title of Marvel's mature-readers MAX imprint, created by Brian Michael Bendis and Michael Gaydos. Conceived as a gritty, noir-tinged street-level character, she had a brief, largely unremarkable career as a costumed hero before a traumatic encounter drove her to abandon that life and reinvent herself as a hard-drinking private investigator.\n\nThe defining trauma of her story is her victimization by the villain Kilgrave, the Purple Man, whose power is to control minds through spoken command. Held captive and forced to obey his every whim, Jessica eventually breaks free, but is left with severe post-traumatic stress. Her struggle to reclaim her autonomy and confront her abuser became one of the most acclaimed explorations of trauma in mainstream comics.\n\nIn the comics, Jessica's life gradually stabilizes: she enters a relationship with Luke Cage, the unbreakable hero, marries him, and together they have a daughter named Danielle, balancing parenthood with detective work and occasional returns to heroics. She also maintains a long, complicated friendship with Carol Danvers, the hero Captain Marvel.\n\nIn the Marvel Cinematic Universe's Netflix corner, Krysten Ritter plays Jessica across three seasons of Jessica Jones and the crossover miniseries The Defenders. The series, widely praised for its unflinching portrayal of abuse, control, and recovery, follows her from a self-destructive PI haunted by Kilgrave toward a hard-won sense of purpose as a reluctant protector of others in Hell's Kitchen.",
    "facts": [
      "Her series was praised for tackling trauma, abuse, and consent head-on, with the villain Kilgrave as a chilling metaphor.",
      "Her debut in Alias #1 was the first publication under Marvel's adult-oriented MAX imprint.",
      "In the comics she marries fellow hero Luke Cage and they raise a daughter named Danielle.",
      "Her superhero identity before becoming a detective went through names including \"Jewel\" and \"Knightress.\""
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/361-jessica-jones.jpg"
  },
  {
    "name": "Luke Cage",
    "alias": "Carl Lucas",
    "teams": [
      "Defenders",
      "Heroes for Hire"
    ],
    "category": "Hero",
    "created": 1972,
    "firstAppearance": "Luke Cage, Hero for Hire #1 (1972)",
    "creators": [
      "Archie Goodwin",
      "John Romita Sr.",
      "George Tuska"
    ],
    "actors": [
      "Mike Colter"
    ],
    "films": [
      "Jessica Jones (TV, 2015)",
      "Luke Cage (TV, 2016-2018)",
      "The Defenders (TV, 2017)"
    ],
    "powers": [
      "Unbreakable, bulletproof skin",
      "Superhuman strength and durability",
      "Accelerated healing"
    ],
    "storyline": "Born Carl Lucas, the man who would become Luke Cage was wrongly convicted of a crime he did not commit and sent to prison. Desperate to reduce his sentence, he volunteered for a sabotaged scientific experiment that, instead of harming him, granted him unbreakable, bulletproof skin and superhuman strength. Using these new abilities, he broke out of prison, adopted the name Luke Cage, and started a new life.\n\nDebuting in 1972 at the height of the 'blaxploitation' film era, Luke Cage was a groundbreaking character: one of the first African American superheroes to headline his own ongoing comic series. He initially operated as a 'Hero for Hire,' charging money to help people in need, before evolving into a more traditional, selfless protector of his community.\n\nOver the decades, Cage became deeply intertwined with the broader Marvel Universe. He formed a legendary partnership and friendship with Iron Fist (Danny Rand) under the Heroes for Hire banner, married the private investigator Jessica Jones and raised a child with her, and rose to prominence as a respected leader within the Avengers during major events.\n\nIn live-action, Mike Colter portrayed Luke Cage in a series of interconnected Netflix shows. He first appeared as a romantic interest and ally in Jessica Jones, then headlined his own series as the bulletproof protector of Harlem, confronting local crime bosses and corrupt power. He later teamed up with Daredevil, Jessica Jones and Iron Fist as part of The Defenders.",
    "facts": [
      "Luke Cage was one of the first Black superheroes to headline his own ongoing comic book.",
      "His powers came from a sabotaged prison experiment meant to harm rather than help him.",
      "He originally operated as a 'Hero for Hire,' charging clients for his superhero services.",
      "In the comics, Luke Cage married Jessica Jones and the two raised a daughter together.",
      "His debut in 1972 was heavily inspired by the era's popular blaxploitation films."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/416-luke-cage.jpg"
  },
  {
    "name": "Quicksilver",
    "alias": "Pietro Maximoff",
    "teams": [
      "Avengers",
      "Brotherhood of Mutants"
    ],
    "category": "Hero",
    "created": 1964,
    "firstAppearance": "The X-Men #4 (1964)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Aaron Taylor-Johnson",
      "Evan Peters"
    ],
    "films": [
      "X-Men: Days of Future Past (2014)",
      "Avengers: Age of Ultron (2015)",
      "X-Men: Apocalypse (2016)",
      "Dark Phoenix (2019)"
    ],
    "powers": [
      "Superhuman speed, able to move faster than the eye can follow",
      "Enhanced reflexes and perception of time",
      "Can run across water and up walls"
    ],
    "storyline": "Pietro Maximoff, known as Quicksilver, first appeared in The X-Men #4 in 1964, created by Stan Lee and Jack Kirby. Along with his twin sister Wanda (the Scarlet Witch), he began his career as a reluctant member of Magneto's Brotherhood of Evil Mutants. The twins soon defected and joined the Avengers, becoming key members of the team during a celebrated era and helping to expand the roster beyond its founding lineup. Pietro's defining power is superhuman speed, allowing him to move, react, and perceive time far faster than ordinary humans.\n\nIn the comics, Quicksilver is characterized by his arrogance, impatience, and fierce protectiveness of his sister. His history has been repeatedly rewritten, including the major retcon establishing Magneto as the twins' father (later revised again), and his central role in the catastrophic House of M event, in which Wanda's reality-warping breakdown reshapes the world and drastically reduces the global mutant population.\n\nBecause of a complex rights situation between Marvel Studios and 20th Century Fox, two distinct screen versions of Quicksilver emerged. In the Marvel Cinematic Universe, Aaron Taylor-Johnson played a Sokovian enhanced by experiments rather than a mutant, appearing in Avengers: Age of Ultron, where he heroically dies shielding Hawkeye and a child from Ultron's gunfire.\n\nThe Fox X-Men films featured a separate, scene-stealing version played by Evan Peters, beginning in X-Men: Days of Future Past. His elaborate slow-motion sequences, set to pop music as he rescues people faster than anyone can perceive, became fan-favorite highlights and were widely celebrated for their inventive visual effects across multiple films.",
    "facts": [
      "His slow-motion rescue scenes in the Fox X-Men films are celebrated fan-favorite set pieces.",
      "Two separate screen versions existed due to a Marvel and Fox rights split: Aaron Taylor-Johnson and Evan Peters.",
      "In the MCU's Age of Ultron, Quicksilver dies shielding Hawkeye and a child from gunfire.",
      "He is the twin brother of Wanda Maximoff, the Scarlet Witch.",
      "He began as a member of Magneto's Brotherhood before joining the Avengers."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/536-quicksilver.jpg"
  },
  {
    "name": "Hank Pym",
    "alias": "Henry Pym",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Tales to Astonish #27 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Michael Douglas"
    ],
    "films": [
      "Ant-Man (2015)",
      "Ant-Man and the Wasp (2018)",
      "Avengers: Endgame (2019)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    "powers": [
      "Inventor of the size-changing Pym Particles",
      "Brilliant scientist and original Ant-Man",
      "Pioneer of Quantum Realm research"
    ],
    "storyline": "Dr. Henry 'Hank' Pym is one of Marvel's foundational scientific minds, a biochemist and physicist who first appeared in 1962. His landmark discovery — a group of subatomic particles dubbed 'Pym Particles' — allows matter to be shrunk or enlarged at will. Using a cybernetic helmet to communicate with insects, he became the original Ant-Man, and was a founding member of the Avengers in the comics alongside his partner Janet van Dyne, the Wasp. Over the years he cycled through numerous identities, including the giant Goliath and the hero Yellowjacket.\n\nPym's comic legacy is famously complicated. He is the creator of Ultron, the genocidal artificial intelligence that became one of the Avengers' deadliest enemies, and his history includes a deeply controversial moment in which, under severe mental strain, he struck Janet — a single panel that has haunted the character's reputation for decades and is often cited as a defining example of comic storytelling consequences.\n\nIn the Marvel Cinematic Universe, Pym is reimagined as an older, retired scientist played by Michael Douglas. A former S.H.I.E.L.D. operative who developed the Ant-Man technology decades earlier, he hid his discoveries from the government to prevent the Pym Particles from being weaponized. Embittered after the apparent loss of his wife Janet in the Quantum Realm and estranged from his daughter Hope, he recruits ex-thief Scott Lang to become the new Ant-Man and thwart his protege Darren Cross, who has reverse-engineered the shrinking technology.\n\nAcross the films, Pym leads the effort to rescue Janet from the Quantum Realm, succeeding in the second 'Ant-Man' film, only to be dusted by Thanos's Snap in its aftermath. Restored in 'Endgame,' he and his family are later pulled into the Quantum Realm in 'Quantumania,' where his decades of research collide with the realm's hidden civilizations and the threat of Kang. Pym remains the brilliant, irascible architect whose science underpins the entire Ant-Man corner of the MCU.",
    "facts": [
      "In the comics he also created the rogue AI Ultron, one of the Avengers' deadliest foes.",
      "Hank Pym was a founding member of the comic-book Avengers under his Ant-Man identity.",
      "He has used numerous hero identities over the years, including Giant-Man, Goliath, Yellowjacket, and the Wasp.",
      "In the MCU, his Quantum Realm research becomes the key to the Avengers' time-travel plan in 'Endgame.'",
      "Pym Particles work by altering the distance between atoms, which is why a shrunken object retains its original mass and strength."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/31-ant-man-ii.jpg"
  },
  {
    "name": "Mantis",
    "alias": "Mantis",
    "teams": [
      "Guardians of the Galaxy"
    ],
    "category": "Hero",
    "created": 1973,
    "firstAppearance": "The Avengers #112 (1973)",
    "creators": [
      "Steve Englehart",
      "Don Heck"
    ],
    "actors": [
      "Pom Klementieff"
    ],
    "films": [
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)",
      "The Guardians of the Galaxy Holiday Special (2022)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    "powers": [
      "Empath — senses and influences the emotions of others by touch",
      "Can induce sleep or calm with a touch",
      "Heightened sensitivity to feelings"
    ],
    "storyline": "Mantis was created in 1973 as a complex, mystically charged figure whose comic-book history involves being raised by the Priests of Pama, becoming the prophesied 'Celestial Madonna,' and developing formidable martial arts and empathic abilities. Her convoluted origin and cosmic destiny made her a recurring presence among the Avengers and later the Guardians of the Galaxy, though her comic incarnation differs substantially from her film counterpart.\n\nIn the Marvel Cinematic Universe, Mantis is reimagined as an innocent, sheltered empath who was raised in isolation by the Celestial Ego, serving as his companion and using her powers to help him sleep. Her empathy — the ability to sense and influence emotions through touch — makes her gentle and disarmingly honest, often to comic effect, but it also leaves her socially naive after a lifetime of seclusion.\n\nWhen the Guardians arrive at Ego's planet in Vol. 2, Mantis quietly warns them of his murderous true nature, choosing loyalty to her new friends over the only family she has ever known. She joins the Guardians and becomes part of their dysfunctional found family, her sincerity providing both heart and humor. Her empathic gift proves crucial in Infinity War, where she helps subdue Thanos by lulling him into a trance during the Guardians' desperate attempt to remove the Infinity Gauntlet.\n\nVol. 3 delivers the major revelation that Mantis is the biological daughter of Ego — and therefore Star-Lord's half-sister. By the film's end, having grown in confidence and independence, she chooses to leave the Guardians to forge her own path and discover who she is beyond her role as a caretaker, completing her arc from a sheltered servant into a self-determined individual.",
    "facts": [
      "She is revealed in Vol. 3 to be the daughter of Ego, making her Star-Lord's half-sister.",
      "Her empathic touch is what allows the Guardians to subdue Thanos in Infinity War.",
      "In the comics she is the prophesied 'Celestial Madonna,' a very different origin from the films.",
      "Pom Klementieff performs much of Mantis's gentle, naive humor through subtle physical comedy."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/431-mantis.jpg"
  },
  {
    "name": "Yondu",
    "alias": "Yondu Udonta",
    "teams": [
      "Ravagers"
    ],
    "category": "Anti-Hero",
    "created": 1967,
    "firstAppearance": "Marvel Super-Heroes #18 (1967)",
    "creators": [
      "Arnold Drake",
      "Gene Colan"
    ],
    "actors": [
      "Michael Rooker"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Guardians of the Galaxy Vol. 2 (2017)"
    ],
    "powers": [
      "Controls a Yaka arrow with sonic whistles, steering it through dozens of foes",
      "Veteran Ravager captain and pilot",
      "Skilled close-quarters fighter"
    ],
    "storyline": "Yondu Udonta first appeared in 1967 as a founding member of the original Guardians of the Galaxy, a team set in an alternate 31st-century future. In that incarnation he was a blue-skinned, noble alien archer from the planet Centauri-IV, a tribal hunter and freedom fighter resisting an alien invasion of Earth's solar system. Wielding his sound-controlled Yaka arrows, he was a dignified, almost mystical warrior far removed from his later screen depiction.\n\nThe modern Marvel Cinematic Universe radically reinvents Yondu as a grizzled, mohawked Ravager captain. Michael Rooker's Yondu was hired to deliver the young Peter Quill to his celestial father Ego, but instead kept the boy and raised him among his band of space pirates. Gruff, intimidating and morally gray, he ran a smuggling crew and threatened to let his men eat Quill when he was small, yet a genuine paternal love simmered beneath his bravado.\n\nIn Guardians of the Galaxy Vol. 2, Yondu's backstory deepens: he reveals he kept Quill because he knew Ego was murdering his own children, and that protecting the boy cost him his standing among the Ravagers. After being mutinied against and imprisoned, he allies with the Guardians to stop Ego, and his redemptive arc culminates in his death.\n\nIn the film's most emotional moment, Yondu sacrifices himself in the cold of space to save Peter, delivering the line that he may not have been Quill's father but he was his daddy. He is honored with a Ravager funeral, finally recognized by the comrades who had shunned him, cementing his transformation from rogue to beloved father figure.",
    "facts": [
      "His film and comic versions are radically different: the original 1967 comic Yondu was a noble, mystical alien hunter.",
      "The original comic Yondu was a founding member of the 31st-century Guardians of the Galaxy.",
      "He controls his Yaka arrow purely through whistled sonic tones.",
      "Michael Rooker reportedly endured hours in makeup daily for the character's blue skin and prosthetics."
    ]
  },
  {
    "name": "Ego",
    "alias": "Ego the Living Planet",
    "teams": [],
    "category": "Villain",
    "created": 1966,
    "firstAppearance": "Thor #132 (1966)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Kurt Russell"
    ],
    "films": [
      "Guardians of the Galaxy Vol. 2 (2017)"
    ],
    "powers": [
      "A consciousness inhabiting and controlling an entire living planet",
      "Vast matter manipulation and the cosmic 'Expansion'",
      "Creates a humanoid avatar and countless offspring",
      "Near-godlike power fueled by his planetary core"
    ],
    "storyline": "Ego the Living Planet debuted in Thor #132 (1966) as one of Jack Kirby and Stan Lee's most cosmically audacious concepts: a sentient planet, a single immense consciousness spread across an entire world, possessing a face on its surface and the ability to reshape its own matter. In the comics, Ego is an ancient and largely megalomaniacal cosmic entity, clashing with Thor, the Fantastic Four and Galactus across the galaxy as he pursues survival and dominance.\n\nThe Guardians of the Galaxy Vol. 2 (2017) film dramatically expanded and reinvented Ego, recasting him as a Celestial — one of the godlike beings who predate the universe's known powers — portrayed by Kurt Russell. Lonely after eons of existence, Ego grew a planet around his glowing core and crafted a humanoid avatar to explore the cosmos and find meaning, ultimately deciding the only worthwhile purpose was to expand himself across all of existence.\n\nTo carry out this 'Expansion,' Ego seeded thousands of worlds and fathered children across the galaxy, hoping one would inherit his Celestial power and help him remake everything in his own image. He fathered Peter Quill — Star-Lord — with the human Meredith Quill, and the film's central twist reveals that Ego deliberately implanted the brain tumor that killed Meredith, because his love for her threatened to derail his cosmic ambition.\n\nWhen Quill discovers the truth, he rejects his father's offer of godhood. With the Guardians, Mantis and a heroic sacrifice from Yondu, they destroy Ego's planetary core, ending the Expansion and the entity itself. Ego stands as one of the MCU's most personal villains — a literal absent father whose evil is bound up in Star-Lord's own origin.",
    "facts": [
      "Ego is the biological father of Star-Lord, fathering him as part of a galaxy-wide plan to seed his offspring.",
      "In the MCU he is a Celestial; the original 1966 comics simply depicted him as a sentient living planet.",
      "He deliberately gave Peter Quill's mother the cancer that killed her, fearing his love for her would weaken his resolve.",
      "Kurt Russell was de-aged with visual effects to play a younger Ego in the film's opening flashback."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/235-ego.jpg"
  },
  {
    "name": "Kang the Conqueror",
    "alias": "Nathaniel Richards",
    "teams": [],
    "category": "Villain",
    "created": 1964,
    "firstAppearance": "The Avengers #8 (1964)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Jonathan Majors"
    ],
    "films": [
      "Loki (TV, 2021-2023)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    "powers": [
      "Mastery of time travel and futuristic technology",
      "Powered armor granting strength, energy blasts and force fields",
      "Genius-level intellect and strategic command",
      "Countless variants of himself across the multiverse"
    ],
    "storyline": "Kang the Conqueror is one of the Avengers' most formidable and complex foes, first appearing in The Avengers #8 in 1964. Born Nathaniel Richards in the 30th century, a descendant connected to the lineage of Reed Richards (Mr. Fantastic) and Doctor Doom, he is a brilliant scholar who discovers ancient time-travel technology and uses it to roam the timestream. His genius intellect, mastery of futuristic technology, and powered battle armor, which grants superhuman strength, energy blasts, and force fields, make him a conqueror who seeks to dominate entire eras of history.\n\nWhat makes Kang uniquely dangerous is his relationship with time itself. His repeated journeys through the timestream have spawned countless divergent versions of himself, and these variants include identities such as Rama-Tut, an ancient Egyptian pharaoh; Immortus, a manipulative master of the timestream; and the Scarlet Centurion. These versions sometimes war with one another, sometimes scheme together, and collectively represent a threat that can attack from any point in history. His obsessive love for Ravonna, a princess he conquers and repeatedly loses across timelines, recurs throughout his stories as a driving and tragic motivation.\n\nIn the comics, Kang's schemes range from conquering 20th-century Earth to orchestrating the sprawling Kang Dynasty and Avengers Forever storylines, in which his manipulations of time ensnare the Avengers across multiple eras. His paradoxical nature, both a single villain and a near-infinite multitude, makes him a uniquely cosmic and cerebral antagonist, one who plays chess with history itself while the heroes struggle to even identify which version of him they face.\n\nIn the Marvel Cinematic Universe, Jonathan Majors introduced the character's first variant as 'He Who Remains' in the season finale of the Loki series, a weary figure who has been maintaining a single 'Sacred Timeline' by pruning all branches to prevent his more dangerous variants from waging a multiversal war. His death frees those variants, and one of them, the conquering Kang, serves as the primary antagonist of Ant-Man and the Wasp: Quantumania, where he battles Scott Lang within the Quantum Realm. The character was positioned as the central looming threat of the MCU's multiverse storyline before behind-the-scenes changes altered those plans.",
    "facts": [
      "His countless multiverse variants include the pharaoh Rama-Tut, Immortus, and the Scarlet Centurion.",
      "He is a descendant connected to the family of Reed Richards and was originally born Nathaniel Richards.",
      "His MCU debut was as the variant 'He Who Remains' in the Loki series finale.",
      "In the comics, his obsessive love for Princess Ravonna recurs across timelines.",
      "He maintained a single 'Sacred Timeline' to keep his deadlier variants from going to war."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/379-kang.jpg"
  },
  {
    "name": "Moon Knight",
    "alias": "Marc Spector / Steven Grant",
    "teams": [
      "Avengers",
      "Defenders"
    ],
    "category": "Anti-Hero",
    "created": 1975,
    "firstAppearance": "Werewolf by Night #32 (1975)",
    "creators": [
      "Doug Moench",
      "Don Perlin"
    ],
    "actors": [
      "Oscar Isaac"
    ],
    "films": [
      "Moon Knight (TV, 2022)"
    ],
    "powers": [
      "Enhanced strength and resilience as avatar of the moon god Khonshu",
      "Multiple personalities, each a distinct skilled fighter",
      "Arsenal of crescent darts, batons and a caped suit",
      "Expert combatant and mercenary"
    ],
    "storyline": "Marc Spector was a mercenary and former boxer and U.S. Marine who, while on a job in Egypt, was betrayed and left for dead before the altar of the moon god Khonshu. At the brink of death, Khonshu offered him a second life in exchange for becoming the god's avatar of vengeance on Earth. Resurrected, Spector adopted the identity of Moon Knight, a brutal cloaked vigilante clad in white who dispenses harsh justice on the criminal underworld.\n\nA defining and increasingly central element of the character is his mental illness, depicted as dissociative identity disorder. Spector developed multiple identities, including the wealthy financier Steven Grant and the working-class cab driver Jake Lockley, each a separate persona he uses to navigate different parts of his life. Later writers, particularly in acclaimed runs by Warren Ellis and Jeff Lemire, explored the blurry line between his fractured psyche and his genuine connection to Khonshu, leaving it deliberately ambiguous whether his powers are divine or delusional.\n\nMoon Knight operates largely as a violent street-level anti-hero, though he has periodically served with teams like the Avengers and the Defenders. Bankrolled by his Steven Grant identity and aided by his pilot Frenchie and confidante Marlene, he wages a relentless war on crime that often pushes him to the edge of sanity.\n\nIn the 2022 Disney+ series, Oscar Isaac portrays both the gentle, anxious gift-shop worker Steven Grant and the harder mercenary Marc Spector, sharing one body and slowly discovering their connection to Khonshu and a buried Egyptian conflict involving the goddess Ammit. The show foregrounds the character's mental health and identity struggle, presenting Moon Knight as a man fighting external gods and his own mind in equal measure.",
    "facts": [
      "His alters — Marc, Steven and Jake — each handle different situations.",
      "He is the earthly avatar of the Egyptian moon god Khonshu.",
      "Often compared to Batman, he distinguishes himself by wearing bright white to be seen by his enemies.",
      "His stories deliberately leave it ambiguous whether his powers are divine or symptoms of mental illness.",
      "He first appeared not as a hero but as an antagonist hired to hunt the Werewolf by Night."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/470-moon-knight.jpg"
  },
  {
    "name": "She-Hulk",
    "alias": "Jennifer Walters",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1980,
    "firstAppearance": "The Savage She-Hulk #1 (1980)",
    "creators": [
      "Stan Lee",
      "John Buscema"
    ],
    "actors": [
      "Tatiana Maslany"
    ],
    "films": [
      "She-Hulk: Attorney at Law (TV, 2022)"
    ],
    "powers": [
      "Superhuman strength and durability from Bruce Banner's gamma blood",
      "Retains her intellect and personality while transformed",
      "Accelerated healing",
      "Brilliant attorney specializing in superhuman law"
    ],
    "storyline": "Jennifer Walters, the cousin of Bruce Banner, was created in 1980 by Stan Lee and John Buscema, reportedly in part to preempt other studios from creating their own female Hulk-style character for television. A skilled attorney, Jennifer is gravely wounded by gangsters and receives an emergency blood transfusion from her cousin Bruce, whose irradiated gamma blood transforms her into the powerful green heroine known as She-Hulk.\n\nUnlike the Hulk, Jennifer typically retains her full intelligence, wit, and personality in her transformed state, and over time she comes to prefer her confident, powerful She-Hulk form. This blend of legal acumen and superhuman strength makes her unique among Marvel heroes, allowing her to serve both as a courtroom advocate for superhumans and as a frontline fighter.\n\nIn the comics she has had a long and varied career, serving prominent stints with both the Avengers and the Fantastic Four, the latter as a replacement for the Thing. She is especially celebrated for the metafictional John Byrne run on The Sensational She-Hulk, in which she repeatedly breaks the fourth wall, addressing readers and even tearing through the panels of her own comic, years before Deadpool popularized the gag.\n\nIn the Marvel Cinematic Universe, Tatiana Maslany plays Jennifer in the comedy series She-Hulk: Attorney at Law, which leans heavily into the character's self-aware humor and follows her as she navigates a career heading the superhuman law division of a firm while reluctantly embracing her new identity, mentored at times by Bruce Banner himself.",
    "facts": [
      "In the comics she famously broke the fourth wall and argued with her own writers, long before Deadpool made it his trademark.",
      "Stan Lee co-created her partly to secure the rights to a female Hulk character before a TV studio could.",
      "She is one of very few heroes to have served extended membership in both the Avengers and the Fantastic Four.",
      "Unlike her cousin Bruce, she usually keeps her full intelligence and personality while transformed."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/589-she-hulk.jpg"
  },
  {
    "name": "Kingpin",
    "alias": "Wilson Fisk",
    "teams": [],
    "category": "Villain",
    "created": 1967,
    "firstAppearance": "The Amazing Spider-Man #50 (1967)",
    "creators": [
      "Stan Lee",
      "John Romita Sr."
    ],
    "actors": [
      "Michael Clarke Duncan",
      "Vincent D'Onofrio"
    ],
    "films": [
      "Daredevil (2003)",
      "Daredevil (TV, 2015-2018)",
      "Hawkeye (TV, 2021)",
      "Echo (TV, 2024)",
      "Daredevil: Born Again (TV, 2025)"
    ],
    "powers": [
      "Immense physical strength despite his bulk",
      "Brutal hand-to-hand combatant",
      "Criminal mastermind controlling vast organized-crime networks",
      "Vast wealth and political influence"
    ],
    "storyline": "Wilson Fisk, the Kingpin, first appeared as an adversary of Spider-Man before becoming most famously associated with Daredevil, against whom he would wage a lifelong war. Rising from a poor and brutal childhood, Fisk clawed his way to the top of New York's criminal underworld through sheer force of will, ruthless violence and cold strategic genius, becoming the undisputed 'Kingpin of Crime.'\n\nThough he possesses no superhuman powers, Fisk is a deceptively dangerous physical threat. His enormous bulk is composed almost entirely of muscle, granting him strength that can rival enhanced opponents, and he is a skilled hand-to-hand combatant. His true weapon, however, is his mind: he commands vast criminal empires while maintaining a public image of a legitimate, philanthropic businessman.\n\nA defining element of Fisk's character is his genuine love for his wife Vanessa and his son, which represents one of his only vulnerabilities. Storylines frequently exploit this tension, contrasting his monstrous criminal acts with his sincere devotion to family. His feud with Daredevil includes one of the character's darkest arcs, in which Fisk learns Matt Murdock's secret identity and systematically destroys his life.\n\nIn live-action, Michael Clarke Duncan played the role in the 2003 Daredevil film, but Vincent D'Onofrio's acclaimed portrayal in the Netflix Daredevil series redefined the character for a generation. D'Onofrio's Kingpin proved so popular that he was brought into the broader Marvel Cinematic Universe, appearing in Hawkeye and the series Echo, with the character continuing in Daredevil: Born Again.",
    "facts": [
      "Despite having no superpowers, the Kingpin's physical strength can rival that of enhanced foes.",
      "His enormous frame is almost entirely muscle rather than fat.",
      "Kingpin first appeared as a Spider-Man villain before becoming Daredevil's archnemesis.",
      "Vincent D'Onofrio's Netflix portrayal was so popular that the character joined the MCU.",
      "Fisk maintains a public facade as a respectable philanthropist to hide his criminal empire."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/391-kingpin.jpg"
  },
  {
    "name": "Elektra",
    "alias": "Elektra Natchios",
    "teams": [
      "The Hand"
    ],
    "category": "Anti-Hero",
    "created": 1981,
    "firstAppearance": "Daredevil #168 (1981)",
    "creators": [
      "Frank Miller"
    ],
    "actors": [
      "Jennifer Garner",
      "Élodie Yung"
    ],
    "films": [
      "Daredevil (2003)",
      "Elektra (2005)",
      "Daredevil (TV, 2016)",
      "The Defenders (TV, 2017)"
    ],
    "powers": [
      "Master assassin and ninja",
      "Expert with the twin sai, her signature weapons",
      "Peak human agility, reflexes and stealth",
      "Trained by the mystical ninja clan The Hand"
    ],
    "storyline": "Elektra Natchios was created by Frank Miller and first appeared in Daredevil #168 in 1981, quickly becoming one of the most influential characters of his celebrated run. The daughter of a Greek diplomat, Elektra was once a college love of Matt Murdock (Daredevil). Her life shattered when her father was killed during a hostage crisis, sending her on a dark path. She trained in martial arts and eventually fell under the influence of the Hand, a mystical ninja clan, becoming a deadly assassin for hire.\n\nElektra's relationship with Daredevil is central to her story: she is at once his former lover and his moral opposite, a killer he cannot save. In one of the most famous moments of Miller's run, she is murdered by the assassin Bullseye, a death that resonated deeply through Marvel comics. She was later resurrected through the mystic arts of the Hand, a recurring theme of death and rebirth that defines her character.\n\nOver the years, Elektra has oscillated between villainy and heroism, working as an assassin, a reluctant hero, an agent of S.H.I.E.L.D., and even briefly taking up the Daredevil mantle herself. Her stories explore themes of grief, identity, and the constant tension between her lethal training and her capacity for love and redemption.\n\nOn screen, Jennifer Garner played Elektra in 2003's Daredevil and the 2005 spin-off Elektra, while Élodie Yung portrayed a darker, more faithful version in Netflix's Daredevil and The Defenders, where her resurrection by the Hand as the 'Black Sky' weapon featured prominently. Frank Miller's creation is widely credited with redefining the portrayal of complex, dangerous women in mainstream superhero comics.",
    "facts": [
      "Frank Miller's Elektra helped redefine the portrayal of complex, dangerous women in mainstream comics.",
      "She is famously killed by the assassin Bullseye in Daredevil, then later resurrected by the mystical Hand.",
      "Her signature weapons are a pair of twin sai.",
      "Elektra was once Matt Murdock's college girlfriend, making her both Daredevil's love and his adversary.",
      "In Netflix's series she is resurrected as the Hand's ultimate weapon, the 'Black Sky.'"
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/238-elektra.jpg"
  },
  {
    "name": "Namor",
    "alias": "Namor McKenzie / K'uk'ulkan",
    "teams": [
      "Defenders",
      "Invaders"
    ],
    "category": "Anti-Hero",
    "created": 1939,
    "firstAppearance": "Marvel Comics #1 (1939)",
    "creators": [
      "Bill Everett"
    ],
    "actors": [
      "Tenoch Huerta"
    ],
    "films": [
      "Black Panther: Wakanda Forever (2022)"
    ],
    "powers": [
      "Superhuman strength, especially underwater",
      "Aquatic breathing and deep-sea adaptation",
      "Flight via wings on his ankles",
      "Ruler of an ancient undersea civilization"
    ],
    "storyline": "Namor the Sub-Mariner is one of the oldest characters in Marvel history, created by Bill Everett and debuting in 1939, predating even the publisher's modern incarnation. In the comics he is the son of a human sea captain and a princess of the undersea kingdom of Atlantis, making him a hybrid with the strength to thrive in the crushing depths and the unusual ability to fly via small wings on his ankles. Proud, hot-tempered, and fiercely protective of his people, Namor pioneered the antihero archetype, oscillating across decades between defending the surface world as a member of the Invaders during World War II and waging war on it when humanity polluted or threatened his oceans.\n\nA perennial figure who has belonged to teams as varied as the Defenders, the Avengers, the X-Men, and the Illuminati, Namor's loyalties are always to Atlantis first. His rivalry and uneasy alliances with surface heroes — and his long-running attraction to Sue Storm of the Fantastic Four — are staples of his stories. His arrogance and willingness to commit atrocities for his people's survival keep him perpetually in the moral gray zone.\n\nThe Marvel Cinematic Universe reinterprets the character significantly in 'Black Panther: Wakanda Forever.' Here he is K'uk'ulkan, the winged, pointed-eared ruler of Talokan, a hidden underwater civilization with Mesoamerican roots whose people were transformed centuries ago by a vibranium-infused plant to escape Spanish colonizers. Worshipped by his people as a feathered serpent god, he is a mutant whose long life and immense power make him a formidable threat.\n\nWhen surface-world scientists develop a vibranium-detecting machine, Namor fears the exposure of his kingdom and demands that Wakanda help him eliminate the threat, igniting a brutal conflict between the two hidden vibranium-rich nations. After a devastating war that costs lives on both sides, he and the new Black Panther, Shuri, reach a wary truce, recognizing each other as the only powers capable of protecting their peoples — and as potential future allies against a hostile world.",
    "facts": [
      "Namor is widely cited as Marvel's first antihero, debuting in 1939 — he predates Captain America and the modern Marvel age.",
      "He is one of the oldest comic-book characters still in continuous publication.",
      "In the comics Namor is a mutant and was retroactively counted among the earliest known mutants in Marvel history.",
      "His ankle wings allow him to fly — an unusual trait for an undersea ruler.",
      "The MCU changed his origin from Atlantis to the Mesoamerican-inspired underwater nation of Talokan to avoid overlap and add cultural depth."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/481-namor.jpg"
  },
  {
    "name": "Valkyrie",
    "alias": "Brunnhilde",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1970,
    "firstAppearance": "The Avengers #83 (1970)",
    "creators": [
      "Roy Thomas",
      "John Buscema"
    ],
    "actors": [
      "Tessa Thompson"
    ],
    "films": [
      "Thor: Ragnarok (2017)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    "powers": [
      "Asgardian warrior with superhuman strength and durability",
      "Elite swordsmanship and combat skill",
      "Long lifespan and accelerated healing",
      "Skilled rider of winged steeds"
    ],
    "storyline": "Drawn from the shieldmaidens of Norse mythology, Valkyrie — Brunnhilde — was introduced by Marvel in 1970 and developed into a fierce Asgardian warrior who became a long-standing member of the Defenders. As the leader of Asgard's legendary order of Valkyrior, winged warriors who ferried the souls of fallen heroes, she embodies martial honor, superhuman strength and centuries of battlefield experience.\n\nIn the Marvel Cinematic Universe, Brunnhilde is the last surviving Valkyrie, haunted by a catastrophic defeat in which her sisters were slaughtered by Hela, Odin's exiled firstborn. Drowning her grief in alcohol, she has reinvented herself as 'Scrapper 142,' a hard-drinking bounty hunter on the junk planet Sakaar, having abandoned her warrior identity along with her faith in Asgard.\n\nThor's arrival in Thor: Ragnarok reignites her sense of purpose. Confronting both her trauma and Hela, she rejoins the fight to save Asgard's people, reclaiming her honor as a Valkyrie. When Asgard is destroyed in Ragnarok, she helps evacuate the survivors, and after the events of Endgame — in which she fights in the final battle against Thanos — Thor names her ruler of the relocated survivors.\n\nAs King of New Asgard, a settlement of Asgardian refugees on Earth, Valkyrie shoulders the political and protective duties of leading her people in the post-Ragnarok era, a role she continues in Thor: Love and Thunder. She is celebrated as the MCU's first openly LGBTQ+ lead hero, and her arc traces a journey from grief and self-exile back to leadership, duty and renewed pride in who she is.",
    "facts": [
      "She is the MCU's first openly LGBTQ+ lead hero.",
      "In the MCU she is the last surviving Valkyrie, the rest slain by Hela.",
      "Thor names her King — not Queen — of New Asgard at the end of Endgame.",
      "Her comic-book version was a long-running member of the Defenders alongside the Hulk and Doctor Strange."
    ]
  },
  {
    "name": "Sersi",
    "alias": "Sersi",
    "teams": [
      "Eternals"
    ],
    "category": "Hero",
    "created": 1976,
    "firstAppearance": "The Eternals #1 (1976)",
    "creators": [
      "Jack Kirby"
    ],
    "actors": [
      "Gemma Chan"
    ],
    "films": [
      "Eternals (2021)"
    ],
    "powers": [
      "Transmutes inanimate matter into other substances",
      "Near-immortality as an Eternal",
      "Superhuman durability and cosmic-energy manipulation"
    ],
    "storyline": "Sersi is one of the Eternals, a race of near-immortal, superhumanly powerful beings created by Jack Kirby in 1976. In the comics she is loosely tied to Greek mythology, presented as the same figure as the enchantress Circe who transformed Odysseus's men into swine. Her signature power is molecular transmutation: she can rearrange the very structure of inanimate matter, turning stone to water or metal to glass with a touch. Of all the Eternals she is the most enamored of humanity, often living among mortals and reveling in their cultures and pleasures across the centuries.\n\nIn comics continuity, Sersi has been an Avenger, serving alongside Earth's Mightiest Heroes during a period when she partnered closely with the Black Knight. Her storylines frequently explore the loneliness of immortality and her deep, sometimes destabilizing attachment to the short-lived humans she loves, a tension that has at times driven her to the edge of madness.\n\nGemma Chan portrays Sersi in the Marvel Cinematic Universe's Eternals (2021), where she is positioned as the film's central protagonist. There she and her fellow Eternals have secretly protected and guided humanity for thousands of years, forbidden by their creators the Celestials from interfering in human conflicts beyond fighting the predatory Deviants.\n\nThe film reframes the Eternals' purpose as a dark cosmic conspiracy: their true mission is to nurture worlds until a new Celestial can be born from the planet's core, an apocalyptic 'Emergence' that would destroy Earth and its people. Sersi's love for humanity drives her to lead the rebellion against this fate, ultimately wielding the combined power of her fellow Eternals to halt the Emergence and confront the moral cost of millennia of obedience.",
    "facts": [
      "The Eternals were sent to Earth by the Celestials thousands of years ago.",
      "In the comics she is linked to the mythological sorceress Circe from Homer's Odyssey.",
      "She has served as a member of the Avengers alongside the Black Knight.",
      "Her transmutation power only works on non-living matter, a limit central to several of her stories."
    ]
  },
  {
    "name": "Ikaris",
    "alias": "Ikaris",
    "teams": [
      "Eternals"
    ],
    "category": "Anti-Hero",
    "created": 1976,
    "firstAppearance": "The Eternals #1 (1976)",
    "creators": [
      "Jack Kirby"
    ],
    "actors": [
      "Richard Madden"
    ],
    "films": [
      "Eternals (2021)"
    ],
    "powers": [
      "Flight and immense superhuman strength",
      "Projects powerful cosmic-energy beams from his eyes",
      "Near-invulnerability and accelerated healing",
      "Near-immortality and resistance to aging as an Eternal"
    ],
    "storyline": "Ikaris was created by Jack Kirby in The Eternals #1 (1976) as part of his sweeping mythology proposing that humanity's gods and legends were inspired by two ancient offshoots of evolution — the noble Eternals and the monstrous Deviants — both engineered by the colossal cosmic Celestials. Among the Eternals, Ikaris is one of the strongest and most stalwart, his name and powers deliberately echoing the Greek myth of Icarus, the boy who flew too high.\n\nIn the comics, Ikaris is a heroic and somewhat rigid figure devoted to protecting humanity and upholding the Eternals' mission. He repeatedly clashes with Deviants and other threats, and his relationships with fellow Eternals such as Sersi and Thena recur across his stories. His unwavering sense of duty sometimes places him at odds with those who question the Eternals' purpose.\n\nThe Marvel Cinematic Universe film Eternals (2021), directed by Chloé Zhao, gave Ikaris (Richard Madden) a far more tragic and morally complex arc. Presented at first as the team's powerful, principled leader and Sersi's longtime love, he is ultimately revealed to have secretly known the dark truth all along: the Eternals were created not merely to protect Earth, but to allow the 'Emergence' — the birth of a new Celestial gestating in the planet's core, which would destroy all human life.\n\nLoyal to the Celestial Arishem above his own family, Ikaris opposes the other Eternals' efforts to stop the Emergence and even kills two of his kin. When the team thwarts the Celestial's birth and saves humanity, Ikaris — consumed by guilt over his betrayal and his failure — flies directly into the sun, a poignant fulfillment of his Icarus namesake.",
    "facts": [
      "His name and his fate — flying into the sun — directly evoke the Greek myth of Icarus.",
      "Ikaris was one of Jack Kirby's central creations in his 1976 Eternals series, which reimagined gods as ancient cosmic beings.",
      "In the film he is the love interest of Sersi yet becomes the story's chief antagonist through his loyalty to the Celestials.",
      "Eternals (2021) was directed by Oscar-winning filmmaker Chloé Zhao."
    ]
  },
  {
    "name": "Kate Bishop",
    "alias": "Kate Bishop",
    "teams": [
      "Young Avengers"
    ],
    "category": "Hero",
    "created": 2005,
    "firstAppearance": "Young Avengers #1 (2005)",
    "creators": [
      "Allan Heinberg",
      "Jim Cheung"
    ],
    "actors": [
      "Hailee Steinfeld"
    ],
    "films": [
      "Hawkeye (TV, 2021)"
    ],
    "powers": [
      "Olympic-level archer and marksman",
      "Skilled martial artist, fencer and acrobat",
      "Trick arrows and sharp tactical instincts",
      "Peak human athleticism (no superpowers)"
    ],
    "storyline": "Kate Bishop is a relatively modern Marvel hero, created by Allan Heinberg and Jim Cheung and introduced in Young Avengers #1 in 2005. The daughter of a wealthy and dubiously connected New York businessman, Kate possesses no superhuman powers; instead, she relies on relentless training, natural athleticism, and sheer determination, becoming an Olympic-level archer as well as a skilled fencer, martial artist, and acrobat. Following a traumatic assault, she resolved to learn to defend herself and others, and she armed herself with the equipment of established Avengers to join the fledgling Young Avengers team.\n\nWhen she adopted the codename Hawkeye, she earned the approval of Clint Barton, the original Hawkeye, who recognized her talent and effectively endorsed her as his successor and equal. The two became close partners, sharing the Hawkeye mantle and a sharp, bickering, deeply affectionate mentor-protégé dynamic that has anchored some of Marvel's most celebrated recent comics, including Matt Fraction and David Aja's acclaimed Hawkeye run. Kate's confidence, wit, and refusal to be sidelined made her a fan-favorite and one of the most prominent legacy heroes of her generation.\n\nIn the comics, Kate has led the Young Avengers, operated as a private investigator in Los Angeles, and repeatedly proven that she belongs in the company of superpowered heroes through skill alone. Her arcs explore her complicated family, her growth from privileged teenager to seasoned hero, and her enduring friendship with Clint, which forms the emotional core of her stories.\n\nIn the Marvel Cinematic Universe, Hailee Steinfeld plays Kate Bishop in the Disney+ series Hawkeye, set during a chaotic New York Christmas. There she is portrayed as a young, fearless archer and Clint Barton's biggest admirer who becomes entangled in a criminal conspiracy alongside him. Over the course of the series she earns Clint's trust and respect, surviving the underworld threats of the Tracksuit Mafia and Kingpin, and at the end is implicitly anointed as the new Hawkeye, setting her up as part of the next generation of MCU heroes.",
    "facts": [
      "She is a founding member of the Young Avengers in the comics.",
      "Kate has no superpowers; her edge comes entirely from training and athleticism.",
      "She shares the Hawkeye codename with Clint Barton, who personally endorsed her.",
      "Matt Fraction and David Aja's acclaimed Hawkeye comic featured both Hawkeyes prominently.",
      "Hailee Steinfeld, who plays her, is an Oscar-nominated actress and musician."
    ]
  },
  {
    "name": "Ironheart",
    "alias": "Riri Williams",
    "teams": [
      "Champions"
    ],
    "category": "Hero",
    "created": 2016,
    "firstAppearance": "Invincible Iron Man #7 (2016)",
    "creators": [
      "Brian Michael Bendis",
      "Mike Deodato"
    ],
    "actors": [
      "Dominique Thorne"
    ],
    "films": [
      "Black Panther: Wakanda Forever (2022)",
      "Ironheart (TV, 2025)"
    ],
    "powers": [
      "Genius engineer who built her own powered armor",
      "Flight, repulsor blasts and integrated weapons",
      "Superhuman strength and protection via the suit",
      "MIT-level scientific brilliance as a teenager"
    ],
    "storyline": "Riri Williams is a child prodigy from Chicago who enrolled at the Massachusetts Institute of Technology at just fifteen years old, her brilliance comparable to Tony Stark's own. Marked by personal tragedy, including the loss of her stepfather and best friend to gun violence, Riri channels her grief into engineering. Using scavenged and stolen materials, she secretly reverse-engineers a version of Stark's Iron Man armor in her dorm room, drawing the attention of Tony Stark himself.\n\nStark, impressed rather than angry, becomes her mentor, and after he is incapacitated in the comics, Riri inherits his legacy as the armored hero Ironheart. An artificial intelligence based on Stark's own personality (and later a version based on her deceased friend) serves as her in-suit companion and guide. As Ironheart she joins the Champions, a team of young heroes, and grows into one of Marvel's most prominent next-generation characters.\n\nRiri's stories emphasize her youth, intellect, and the weight of stepping into the shadow of a legend while forging her own identity. Her armor continually evolves as she iterates on its design, reflecting her relentless inventiveness.\n\nIn the Marvel Cinematic Universe, Dominique Thorne introduces Riri in Black Panther: Wakanda Forever (2022), where her invention of a vibranium-detecting machine inadvertently sparks conflict with the underwater nation of Talokan. Aided by Wakandan technology, she builds a sophisticated suit and fights alongside the Wakandans. Her story continues in the 2025 Disney+ series Ironheart, which follows her return to Chicago, her efforts to perfect her armor, and her encounters with technology, magic, and the morally fraught choices of a young genius.",
    "facts": [
      "She built her first armor from scavenged parts in her dorm at MIT.",
      "Riri enrolled at MIT at just 15 years old, a prodigy on par with Tony Stark.",
      "In the comics she briefly used an AI duplicate of Tony Stark's personality as her suit's companion.",
      "She is a founding-era member of the young-hero team the Champions.",
      "Her MCU debut in Wakanda Forever connected her invention to the discovery of underwater vibranium."
    ]
  },
  {
    "name": "America Chavez",
    "alias": "America Chavez",
    "teams": [
      "Young Avengers"
    ],
    "category": "Hero",
    "created": 2011,
    "firstAppearance": "Vengeance #1 (2011)",
    "creators": [
      "Joe Casey",
      "Nick Dragotta"
    ],
    "actors": [
      "Xochitl Gomez"
    ],
    "films": [
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    "powers": [
      "Punches star-shaped portals to travel between universes",
      "Superhuman strength, speed and durability",
      "Flight",
      "Unique multiversal abilities"
    ],
    "storyline": "America Chavez, also known by the codename Miss America, debuted in 2011 in the miniseries Vengeance, created by Joe Casey and Nick Dragotta. She quickly became a fan favorite as a powerful, confident Latina hero with the extraordinary ability to punch open star-shaped portals that let her travel between parallel universes.\n\nHer comics backstory establishes that she was born in the Utopian Parallel, an idyllic pocket dimension outside normal time, where her two mothers sacrificed themselves to save their reality. Inspired by their heroism, America left to defend the multiverse, eventually joining the Young Avengers and later the Ultimates, and headlining her own solo series, one of Marvel's first to star a queer Latina lead.\n\nA defining aspect of the character is her identity as a prominent LGBTQ+ hero, openly lesbian and embraced as a symbol of representation in mainstream comics. Her brash confidence, physical power, and fierce loyalty to her friends make her a standout among Marvel's younger generation of heroes.\n\nIn the Marvel Cinematic Universe, Xochitl Gomez introduces the character in Doctor Strange in the Multiverse of Madness as a teenager who cannot yet control her reality-hopping power and is hunted across dimensions by the Scarlet Witch, who covets that ability. Under the protection and mentorship of Doctor Strange, America gradually learns to master her gift, ultimately turning it against her pursuer and choosing to train at Kamar-Taj.",
    "facts": [
      "She is one of Marvel's most prominent Latina and LGBTQ+ heroes, headlining her own solo series.",
      "Her signature power is punching star-shaped portals to travel between universes.",
      "In the comics she was raised in the Utopian Parallel by her two mothers, who sacrificed themselves to save their reality.",
      "Doctor Strange in the Multiverse of Madness marked Xochitl Gomez's MCU debut as the character."
    ]
  },
  {
    "name": "Agatha Harkness",
    "alias": "Agatha Harkness",
    "teams": [],
    "category": "Villain",
    "created": 1970,
    "firstAppearance": "Fantastic Four #94 (1970)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Kathryn Hahn"
    ],
    "films": [
      "WandaVision (TV, 2021)",
      "Agatha All Along (TV, 2024)"
    ],
    "powers": [
      "Centuries-old witch versed in classical and dark magic",
      "Drains magic and life force from other witches",
      "Spellcasting, telekinesis and illusion",
      "Vast occult knowledge"
    ],
    "storyline": "Agatha Harkness debuted in the comics as an ancient and immensely powerful witch who served as the governess to Franklin Richards, the son of the Fantastic Four's Reed and Sue Richards. Far older than she appears, she is depicted as a survivor of legendary witch communities, including ties to the Salem of folklore, and possesses centuries of accumulated occult knowledge.\n\nIn the comics, Agatha became the magical mentor to Wanda Maximoff, the Scarlet Witch, tutoring her in the disciplines of true sorcery. Their relationship was complex and ultimately tragic: in one of the most infamous Avengers storylines, Wanda's mental breakdown and reality-altering grief led to a violent confrontation in which Agatha was killed by her own pupil.\n\nIn the Marvel Cinematic Universe, Agatha Harkness is reimagined as a scheming witch hiding among the residents of Westview, the town Wanda has unconsciously transformed into a sitcom-like fantasy. Posing as the nosy neighbor 'Agnes,' Agatha manipulates events from the shadows while investigating the source of Wanda's astonishing power, ultimately revealing herself with the now-iconic musical number 'Agatha All Along.'\n\nUpon discovering that Wanda is the prophesied Scarlet Witch, Agatha attempts to steal her chaos magic but is defeated and left magically bound, trapped in her 'Agnes' persona within Westview. The character's popularity led to the spin-off series Agatha All Along, which follows her quest to regain her lost powers by traveling a dangerous, mythical 'Witches' Road.'",
    "facts": [
      "Her catchy musical number 'Agatha All Along' became a surprise pop-culture and chart hit.",
      "In the comics, Agatha Harkness served as governess to Franklin Richards of the Fantastic Four.",
      "She mentored Wanda Maximoff in sorcery in the comics, only to be killed by her own pupil.",
      "Agatha can drain magic and life force directly from other witches.",
      "The character is depicted as centuries old, with ties to legendary witch covens."
    ]
  },
  {
    "name": "Mysterio",
    "alias": "Quentin Beck",
    "teams": [
      "Sinister Six"
    ],
    "category": "Villain",
    "created": 1964,
    "firstAppearance": "The Amazing Spider-Man #13 (1964)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Jake Gyllenhaal"
    ],
    "films": [
      "Spider-Man: Far From Home (2019)"
    ],
    "powers": [
      "Master of illusion, holography and special effects",
      "Combines drone technology with stagecraft to fake superpowers",
      "Skilled engineer and manipulator",
      "Expert at deception and misdirection"
    ],
    "storyline": "Mysterio, the alter ego of Quentin Beck, first appeared in The Amazing Spider-Man #13 in 1964, created by Stan Lee and Steve Ditko. In the comics, Beck is a frustrated Hollywood special-effects artist and stuntman whose ambitions for fame and respect went unfulfilled. Realizing his mastery of illusion, fog, holography, and stagecraft could make him a formidable criminal, he adopted the fishbowl-helmeted persona of Mysterio and set out to defeat Spider-Man and prove his genius.\n\nMysterio became a recurring member of the Sinister Six, the team of Spider-Man's deadliest foes. His weapon is deception itself: he creates elaborate hallucinations, fake monsters, and staged events to disorient and manipulate his enemies, making him dangerous despite having no genuine superpowers. His schemes have ranged from psychological torment to grand theatrical hoaxes, and his theatrical flair makes him one of Spider-Man's most distinctive villains.\n\nThe Marvel Cinematic Universe reimagined Quentin Beck in 2019's Spider-Man: Far From Home, portrayed by Jake Gyllenhaal. In this version, Beck is a disgruntled former Stark Industries engineer who developed advanced holographic and drone technology, only to be dismissed by Tony Stark. Bitter and resentful, he assembles a team of other former employees to stage fake 'Elemental' monster attacks, casting himself as a heroic super-being from another dimension.\n\nManipulating a grieving Peter Parker into handing over Stark's powerful EDITH defense system, Beck nearly succeeds in his quest for adulation before Peter sees through the illusions and defeats him. In a final, devastating blow delivered through a doctored video released after his death, Mysterio frames Spider-Man for his crimes and exposes Peter Parker's secret identity to the entire world, setting up the events of subsequent films.",
    "facts": [
      "His dying act in Far From Home unmasked Spider-Man to the entire world via a doctored video.",
      "In the comics, Quentin Beck was a Hollywood special-effects artist and stuntman before turning to crime.",
      "He has no real superpowers; his entire threat is built on illusion, holograms, and stagecraft.",
      "Mysterio is a longtime member of the Sinister Six, Spider-Man's team of archenemies.",
      "The MCU reframes him as a bitter ex-Stark Industries engineer using drone-projected illusions."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/479-mysterio.jpg"
  },
  {
    "name": "Cable",
    "alias": "Nathan Summers",
    "teams": [
      "X-Force"
    ],
    "category": "Anti-Hero",
    "created": 1990,
    "firstAppearance": "The New Mutants #87 (1990)",
    "creators": [
      "Louise Simonson",
      "Rob Liefeld"
    ],
    "actors": [
      "Josh Brolin"
    ],
    "films": [
      "Deadpool 2 (2018)"
    ],
    "powers": [
      "Time-traveling soldier from a dystopian future",
      "Telekinesis and telepathy (held back by a techno-organic virus)",
      "Cybernetic arm and eye; master of futuristic weaponry",
      "Elite tactician and marksman"
    ],
    "storyline": "Cable is one of the most convoluted yet beloved characters in X-Men lore — Nathan Summers, the son of the X-Man Cyclops (Scott Summers) and Madelyne Pryor, a clone of Jean Grey. As an infant, Nathan was infected with a deadly techno-organic virus by the villain Apocalypse, and the only way to save his life was to send him thousands of years into a dystopian future to be cured. There he was raised, grew to adulthood, and trained as a battle-hardened soldier, returning to the present as a grizzled, heavily armed warrior older than his own father.\n\nThe techno-organic virus is permanently held at bay only by his constant use of telekinesis, which is why his mutant powers — telekinesis and telepathy that should rival the most powerful psychics — are largely suppressed, leaving the virus to metallize half his body and give him his iconic cybernetic arm and glowing eye. As a leader, Cable founded and led the militant mutant strike team X-Force, taking a more pragmatic, lethal approach than the idealistic X-Men, and dedicated much of his life to protecting the mutant messiah child Hope Summers and preventing the apocalyptic futures he had personally witnessed.\n\nIn 'Deadpool 2,' Josh Brolin plays a leaner cinematic version of Cable who travels back in time on a grim mission: to kill a troubled young mutant named Russell before the boy grows up to murder Cable's family in the future. Initially an antagonist to Deadpool, Cable gradually allies with the wisecracking mercenary, and in the film's climax Deadpool's self-sacrifice convinces Russell to abandon his path of vengeance — changing the future and sparing Cable's family. Brolin, who also played Thanos in the MCU around the same period, brought a weary gravitas to the role that contrasted sharply with Deadpool's irreverence.",
    "facts": [
      "Cable is the son of Cyclops and a clone of Jean Grey named Madelyne Pryor.",
      "Josh Brolin played both Cable and the MCU's Thanos within the same two-year span.",
      "Cable's constant telekinesis isn't used for fighting — it's silently holding back a techno-organic virus that would otherwise consume his body.",
      "He was created by Rob Liefeld and Louise Simonson and became a defining icon of the gun-and-pouches aesthetic of 1990s comics.",
      "Cable founded the more militant, lethal mutant team X-Force as an alternative to the X-Men's idealism."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/145-cable.jpg"
  },
  {
    "name": "Domino",
    "alias": "Neena Thurman",
    "teams": [
      "X-Force"
    ],
    "category": "Hero",
    "created": 1992,
    "firstAppearance": "The New Mutants #98 (1992)",
    "creators": [
      "Fabian Nicieza",
      "Rob Liefeld"
    ],
    "actors": [
      "Zazie Beetz"
    ],
    "films": [
      "Deadpool 2 (2018)"
    ],
    "powers": [
      "Subconsciously manipulates probability — luck bends in her favour",
      "Skilled markswoman and combatant",
      "Peak human agility and reflexes"
    ],
    "storyline": "Domino, born Neena Thurman, is a mutant mercenary whose power is luck itself — a subconscious ability to manipulate probability so that improbable events break in her favor and against her enemies. Created by Fabian Nicieza and Rob Liefeld in 1992, she emerged from a government super-soldier program (Project Armageddon) intended to create the perfect weapon, surviving as the program's sole success. In the comics she became a key member of Cable's X-Force and one of his closest allies and romantic interests.\n\nHer probability-warping gift is deceptively powerful: enemy guns jam, footing gives way beneath foes, and stray events conspire to clear her path, all without conscious effort on her part. Combined with her genuine expertise as a marksman and hand-to-hand combatant, this makes her a formidable mercenary who thrives in chaotic, high-stakes situations.\n\nIn Deadpool 2, Zazie Beetz's Domino joins the X-Force team Wade Wilson assembles to protect the young mutant Russell from Cable. While most of the haphazardly recruited team meets a darkly comic end during a botched parachute jump, Domino's luck carries her safely through every disaster, repeatedly proving her worth even as Deadpool insists that 'luck' isn't a cinematic or visual superpower.\n\nThe film makes her luck a recurring sight gag and a genuine plot device, with elaborate action set-pieces choreographed around the cascade of fortunate accidents her power produces. By the end she has firmly established herself as a valued member of the surviving X-Force, vindicating her insistence that luck is, in fact, a very effective superpower.",
    "facts": [
      "She insists luck is a power, even when Deadpool argues it isn't cinematic.",
      "In the comics she is a key member of Cable's X-Force and one of his closest allies.",
      "She was created by Rob Liefeld and Fabian Nicieza, the same duo behind Deadpool.",
      "Her probability power works subconsciously, bending stray events against her enemies."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/227-domino.jpg"
  },
  {
    "name": "Juggernaut",
    "alias": "Cain Marko",
    "teams": [
      "Brotherhood of Mutants"
    ],
    "category": "Villain",
    "created": 1965,
    "firstAppearance": "The X-Men #12 (1965)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Vinnie Jones",
      "Ryan Reynolds (voice)"
    ],
    "films": [
      "X-Men: The Last Stand (2006)",
      "Deadpool 2 (2018)"
    ],
    "powers": [
      "Unstoppable once moving — virtually nothing can halt his momentum",
      "Immense superhuman strength and durability",
      "Mystically empowered by the gem of Cyttorak",
      "Near-invulnerability"
    ],
    "storyline": "Cain Marko is the stepbrother of Charles Xavier, and his origin is rooted in childhood resentment and abuse. Bullied by his cruel father and jealous of the gifted young Charles, Cain grew into a bitter, violent man. While serving in the military alongside Charles, he discovered the hidden temple of the mystical entity Cyttorak and touched the Crimson Gem of Cyttorak, which transformed him into the Juggernaut, an avatar of unstoppable destruction.\n\nNotably, the Juggernaut is not a mutant at all but a being empowered by magic, a distinction that makes him difficult to stop with conventional anti-mutant measures. Once he begins moving in a direction, his momentum becomes literally irresistible, and his mystical force field renders him nearly invulnerable. His one persistent weakness is his mind: telepaths like his stepbrother can sometimes reach him if they can pierce his helmet, which shields his thoughts. Over the years he has been a recurring X-Men foe, a sometime ally, and even a brief member of the X-Men themselves during periods of reform.\n\nIn X-Men: The Last Stand, Vinnie Jones plays Juggernaut as a brutish, helmet-wearing enforcer for Magneto's Brotherhood, though the film reinterprets him loosely as a mutant. The role is best remembered for the much-memed line declaring himself the Juggernaut.\n\nA far more faithful version appears in Deadpool 2, where a fully CGI Juggernaut, voiced by Ryan Reynolds, is broken out of prison and serves as a massive physical threat, famously tearing his foes in half before being electrocuted into submission. Across his appearances, the Juggernaut endures as one of Marvel's purest expressions of raw, unstoppable force.",
    "facts": [
      "Once he builds momentum, literally nothing can stop his charge.",
      "Despite fighting the X-Men, he is not a mutant; his power is mystical, granted by the gem of Cyttorak.",
      "His helmet is designed to block telepaths from reaching his mind, his main vulnerability.",
      "In Deadpool 2, the same actor, Ryan Reynolds, voiced both Deadpool and the Juggernaut."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/374-juggernaut.jpg"
  },
  {
    "name": "Sabretooth",
    "alias": "Victor Creed",
    "teams": [
      "Brotherhood of Mutants"
    ],
    "category": "Villain",
    "created": 1977,
    "firstAppearance": "Iron Fist #14 (1977)",
    "creators": [
      "Chris Claremont",
      "John Byrne"
    ],
    "actors": [
      "Tyler Mane",
      "Liev Schreiber"
    ],
    "films": [
      "X-Men (2000)",
      "X-Men Origins: Wolverine (2009)"
    ],
    "powers": [
      "Accelerated healing factor granting near-immortality",
      "Superhuman strength, speed, senses and endurance",
      "Razor-sharp claws and fangs",
      "Savage, feral fighting instinct and tracking ability"
    ],
    "storyline": "Sabretooth first appeared in Iron Fist #14 (1977), created by Chris Claremont and John Byrne, but he found his lasting identity as the savage, feral arch-nemesis of Wolverine. Victor Creed is a mutant blessed — or cursed — with a powerful healing factor, heightened animal senses and a bottomless capacity for cruelty, a predator who treats killing as sport.\n\nMuch of Sabretooth's mythology is intertwined with Wolverine's murky past. The two share a long, blood-soaked history stretching back over a century, having been comrades, rivals and bitter enemies. They were both subjects connected to the Weapon X program, and Sabretooth makes a brutal annual ritual of hunting Logan down on his birthday. In some stories the two are implied to be related, deepening the personal nature of their feud. Creed has served the villain Mister Sinister and stood as a key member of the Brotherhood of Mutants and the Marauders.\n\nSabretooth embodies the unrestrained savagery that Wolverine constantly struggles to suppress within himself — a dark mirror showing what Logan could become if he surrendered to his feral instincts. This thematic contrast is central to both characters across decades of comics.\n\nOn film, Sabretooth was first portrayed as a hulking henchman by Tyler Mane in X-Men (2000), serving Magneto's Brotherhood. He was later reimagined by Liev Schreiber in X-Men Origins: Wolverine (2009) as Logan's own half-brother, Victor Creed, whose shared century of warfare and eventual betrayal forms the emotional core of that film's story.",
    "facts": [
      "Sabretooth and Wolverine share a violent history spanning over a century and possibly a family bond.",
      "He was created in 1977 in the pages of Iron Fist, not an X-Men title, before becoming Wolverine's defining foe.",
      "In X-Men Origins: Wolverine he is depicted as Logan's older half-brother.",
      "His brutal yearly tradition is to hunt down and attack Wolverine on Logan's birthday."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/570-sabretooth.jpg"
  },
  {
    "name": "The Mandarin",
    "alias": "Xu Wenwu",
    "teams": [
      "Ten Rings"
    ],
    "category": "Villain",
    "created": 1964,
    "firstAppearance": "Tales of Suspense #50 (1964)",
    "creators": [
      "Stan Lee",
      "Don Heck"
    ],
    "actors": [
      "Tony Leung"
    ],
    "films": [
      "Shang-Chi and the Legend of the Ten Rings (2021)"
    ],
    "powers": [
      "Wields the ten mystical rings granting energy and combat power",
      "Near-immortality across a thousand years",
      "Peerless martial artist",
      "Commander of the Ten Rings organization"
    ],
    "storyline": "The Mandarin debuted in Tales of Suspense #50 in 1964 as one of Iron Man's most enduring archenemies. In the original comics, he is a brilliant and ruthless figure descended from Genghis Khan who discovers the wreckage of an alien spacecraft and recovers ten power rings, each forged from the technology of an extraterrestrial dragon-like being and each granting a distinct ability, from ice and flame to disintegration and mind control. Worn one on each finger, the rings make him a scientific and martial threat capable of challenging Tony Stark's intellect and resources alike, and he repeatedly schemes to seize global power.\n\nThe character's screen history is unusual. Iron Man 3 famously presented a decoy 'Mandarin,' an actor named Trevor Slattery hired to be a terrorist figurehead, while the true mastermind was a corporate villain, a twist that deliberately subverted audience expectations. Marvel later acknowledged that a real Mandarin existed within its universe, setting the stage for the character's authentic introduction.\n\nThat genuine version arrived in 2021's Shang-Chi and the Legend of the Ten Rings, reimagined as Xu Wenwu and portrayed by acclaimed actor Tony Leung. In this incarnation, the Ten Rings are mystical bracers worn on the forearms rather than finger rings, and they have granted Wenwu superhuman power and near-immortality for roughly a thousand years, during which he built the Ten Rings into a shadowy organization of immense influence. He reclaims the 'Mandarin' name that had been mockingly co-opted by the Iron Man 3 decoy.\n\nWenwu's story in the film is ultimately a tragedy of grief. Having found peace and love with his wife Ying Li, he abandoned the rings and his ruthless ways, but her murder shatters him and he returns to violence, becoming consumed by the delusion that she is still alive and calling to him from a hidden mystical realm. His obsession endangers both his children, Shang-Chi and Xialing, and the world itself, forcing a final confrontation in which he sacrifices himself, passing the ten rings to his son. Tony Leung's nuanced, sympathetic performance transformed a once-stereotyped villain into one of the MCU's most layered antagonists.",
    "facts": [
      "His version in Shang-Chi reclaims the 'Mandarin' name after the fake decoy in Iron Man 3.",
      "In the comics, his power comes from ten alien rings worn one on each finger.",
      "The MCU reimagined the rings as forearm bracers that grant near-immortality.",
      "Tony Leung, a legendary Hong Kong actor, made his Hollywood debut in the role.",
      "His terrorist organization, the Ten Rings, was seeded in MCU films as far back as 2008's Iron Man."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/430-mandarin.jpg"
  },
  {
    "name": "Abomination",
    "alias": "Emil Blonsky",
    "teams": [],
    "category": "Villain",
    "created": 1967,
    "firstAppearance": "Tales to Astonish #90 (1967)",
    "creators": [
      "Stan Lee",
      "Gil Kane"
    ],
    "actors": [
      "Tim Roth"
    ],
    "films": [
      "The Incredible Hulk (2008)",
      "Shang-Chi and the Legend of the Ten Rings (2021)",
      "She-Hulk: Attorney at Law (TV, 2022)"
    ],
    "powers": [
      "Hulk-level superhuman strength and durability",
      "Retains his intellect while transformed",
      "Scaled, monstrous physiology with regeneration",
      "Enhanced stamina and aquatic adaptation in the comics"
    ],
    "storyline": "In the comics, Emil Blonsky was a Soviet-born spy who infiltrated a U.S. military base where Bruce Banner worked. Exposing himself to an even larger dose of the same gamma radiation that created the Hulk, Blonsky was transformed into the monstrous, scaly-green Abomination. Crucially, unlike Banner, Blonsky retained his full intelligence and rational mind while transformed, but was trapped permanently in his grotesque form, fueling a bitter hatred of the Hulk, who could revert to human form at will.\n\nStronger than a calm Hulk but unable to grow more powerful through rage, the Abomination became one of the Hulk's most enduring and physically formidable archenemies. His resentment, monstrous appearance, and inability to return to normalcy made him a tragic as well as villainous figure across decades of Hulk stories.\n\nIn the Marvel Cinematic Universe, Tim Roth's Emil Blonsky is a career British Royal Marines commando working with General Ross to capture the Hulk. Aging and outclassed, he willingly takes a version of the Super-Soldier Serum and later Banner's gamma-tainted blood, transforming into the Abomination and rampaging through Harlem before the Hulk defeats him in The Incredible Hulk (2008).\n\nYears later the MCU revisits the character with surprising humor and depth: in Shang-Chi and the Legend of the Ten Rings he appears in an underground fight club, and in She-Hulk: Attorney at Law he is depicted as a parolee seeking rehabilitation, joining a support group and embracing a wellness retreat, a striking reinvention of the once-rampaging monster.",
    "facts": [
      "Unlike the Hulk, he stays monstrous and keeps his full intelligence.",
      "In the comics he was a Soviet spy who deliberately dosed himself with extra gamma radiation.",
      "He is typically stronger than a calm Hulk, but cannot grow more powerful through rage as the Hulk does.",
      "The MCU later reinvented him with humor, showing him seeking rehabilitation in She-Hulk.",
      "His inability to ever turn back into a human fuels his lasting hatred of Bruce Banner."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/4-abomination.jpg"
  },
  {
    "name": "Taskmaster",
    "alias": "Antonia Dreykov",
    "teams": [],
    "category": "Villain",
    "created": 1980,
    "firstAppearance": "The Avengers #195 (1980)",
    "creators": [
      "David Michelinie",
      "George Pérez"
    ],
    "actors": [
      "Olga Kurylenko"
    ],
    "films": [
      "Black Widow (2021)"
    ],
    "powers": [
      "Photographic reflexes — instantly mimics any fighter's moves",
      "Master of multiple weapons and combat styles",
      "Peak human conditioning"
    ],
    "storyline": "Taskmaster debuted in 1980 in The Avengers #195, created by David Michelinie and George Pérez. In the comics the character is a man named Tony Masters who possesses \"photographic reflexes,\" the ability to watch any physical activity, no matter how complex, and replicate it perfectly and instantly. This lets him copy the fighting styles of Captain America, Spider-Man, Hawkeye, and countless other heroes and villains at once.\n\nRather than become a hero or a marquee villain, the comics Taskmaster carved out a distinctive niche as a mercenary and, memorably, as an instructor who trains the henchmen and foot soldiers of criminal organizations. A recurring drawback to his power is that absorbing combat memories tends to erode his own personal memories, giving the character an undercurrent of tragedy.\n\nIn the Marvel Cinematic Universe, the character is substantially reinvented for the film Black Widow. Here Taskmaster is Antonia Dreykov, the daughter of the Red Room's sinister leader General Dreykov, played by Olga Kurylenko. Gravely injured as a child in an explosion meant for her father, she is rebuilt and controlled through technology that forces her to mimic the combat skills of fighters she observes via video feeds.\n\nUnlike her comic counterpart, the MCU Antonia is a victim rather than a willing villain, a brainwashed weapon stripped of free will. Her arc resolves when Natasha Romanoff and Yelena Belova destroy the Red Room and free her from the chemical mind control, leaving open the possibility of redemption for the liberated assassin.",
    "facts": [
      "Watching a fighter just once is enough for Taskmaster to copy their moves perfectly.",
      "In the comics, absorbing others' combat skills slowly erodes his own personal memories.",
      "The MCU reinvented the character as Antonia Dreykov, a brainwashed victim, a major change from the comics' Tony Masters.",
      "The comic-book Taskmaster is best known not as a frontline villain but as the man who trains supervillains' henchmen."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/653-taskmaster.jpg"
  },
  {
    "name": "Ronan the Accuser",
    "alias": "Ronan",
    "teams": [
      "Kree"
    ],
    "category": "Villain",
    "created": 1967,
    "firstAppearance": "Fantastic Four #65 (1967)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Lee Pace"
    ],
    "films": [
      "Guardians of the Galaxy (2014)",
      "Captain Marvel (2019)"
    ],
    "powers": [
      "Superhuman Kree strength and durability",
      "Wields the energy-channeling Universal Weapon (his war-hammer)",
      "Briefly harnesses an Infinity Stone",
      "Fanatical military commander"
    ],
    "storyline": "Ronan the Accuser is a high-ranking member of the Kree Empire's Accuser Corps, a militaristic judicial body that enforces the empire's will across the galaxy. Introduced as a Fantastic Four antagonist, he embodies the Kree's rigid, fanatical devotion to order and conquest. His most distinctive feature is his Universal Weapon, a massive war-hammer capable of channeling devastating energy and granting a range of powers.\n\nIn the comics, Ronan's loyalties shift over time. While often an antagonist, he occasionally aligns with heroes against greater threats and is deeply tied to major cosmic events, including the wars between the Kree and their rivals such as the Skrulls and the Shi'ar. He even entered into a strategic marriage with Crystal of the Inhumans during one storyline, reflecting the political maneuvering of the Kree hierarchy.\n\nIn the Marvel Cinematic Universe, Ronan is depicted as a Kree extremist who rejects a hard-won peace treaty between the Kree Empire and the planet Xandar, vowing instead to annihilate the Xandarian people. He strikes a bargain with Thanos to retrieve a mysterious Orb, only to discover it contains the Power Stone, one of the all-powerful Infinity Stones.\n\nBetraying Thanos, Ronan embeds the Power Stone in his Universal Weapon and attempts to destroy Xandar single-handedly. He is ultimately defeated by the newly formed Guardians of the Galaxy, who distract him long enough for Star-Lord to seize the stone and the team to channel its overwhelming energy together, destroying Ronan. A younger version of the character also appeared in Captain Marvel as a Kree commander.",
    "facts": [
      "Ronan briefly wields the Power Stone in his war-hammer before the Guardians overload and destroy him.",
      "His signature Universal Weapon is a Kree war-hammer that channels powerful cosmic energy.",
      "He belongs to the Kree Accuser Corps, a fanatical judicial and military order.",
      "In the comics, Ronan once entered a political marriage with Crystal of the Inhumans.",
      "Ronan defies Thanos by keeping the Power Stone for himself, sparking his downfall."
    ]
  },
  {
    "name": "The Ancient One",
    "alias": "The Ancient One",
    "teams": [
      "Masters of the Mystic Arts"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Strange Tales #110 (1963)",
    "creators": [
      "Stan Lee",
      "Steve Ditko"
    ],
    "actors": [
      "Tilda Swinton"
    ],
    "films": [
      "Doctor Strange (2016)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Sorcerer Supreme with mastery of the mystic arts",
      "Draws power from the Dark Dimension for extended life",
      "Manipulates energy, dimensions and the astral plane",
      "Centuries of accumulated mystical knowledge"
    ],
    "storyline": "The Ancient One first appeared in Strange Tales #110 in 1963, created by Stan Lee and Steve Ditko as the mentor figure for Doctor Strange. In the comics, the Ancient One is a centuries-old sorcerer from the Himalayan land of Kamar-Taj who holds the title of Sorcerer Supreme, Earth's foremost defender against mystical and interdimensional threats. After a lifetime of guarding reality from dark forces, he takes on the arrogant, broken surgeon Stephen Strange as his pupil, guiding his transformation into a master of the mystic arts.\n\nIn the comics, the Ancient One eventually dies confronting his greatest enemy, the dread Dormammu, and his essence merges with the cosmic eternity of the universe, passing the mantle of Sorcerer Supreme to Strange. He remains a foundational figure of Marvel's magical mythology and a recurring spiritual presence guiding his successor.\n\nThe Marvel Cinematic Universe reinterpreted the character in 2016's Doctor Strange, casting Tilda Swinton in a role that recast the traditionally male, East Asian character as a Celtic sorcerer, a decision that drew significant discussion. As the long-lived leader of Kamar-Taj, she trains Strange and the other Masters of the Mystic Arts while defending Earth from threats across dimensions.\n\nHer character is given moral complexity in the films: it is revealed she secretly drew on forbidden power from the Dark Dimension to extend her life for centuries, the very transgression for which she condemned her former student Kaecilius. Mortally wounded by Kaecilius's followers, she dies but reappears in Avengers: Endgame during the time-travel sequence, where she entrusts the Time Stone to the Hulk and reflects on sacrifice, duty, and the protection of reality.",
    "facts": [
      "She secretly drew on forbidden Dark Dimension power to prolong her life for centuries.",
      "Casting Tilda Swinton reimagined a traditionally male, East Asian comics character as a Celtic sorcerer.",
      "In the comics, the Ancient One is the Sorcerer Supreme who mentors Doctor Strange before passing on the title.",
      "She appears again in Avengers: Endgame, entrusting the Hulk with the Time Stone during the time heist.",
      "The Ancient One leads Kamar-Taj, the sanctuary where the Masters of the Mystic Arts are trained."
    ]
  },
  {
    "name": "Heimdall",
    "alias": "Heimdall",
    "teams": [],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Journey into Mystery #85 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Idris Elba"
    ],
    "films": [
      "Thor (2011)",
      "Thor: The Dark World (2013)",
      "Avengers: Age of Ultron (2015)",
      "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)"
    ],
    "powers": [
      "All-seeing, all-hearing senses spanning the Nine Realms",
      "Guardian and operator of the Bifrost (rainbow bridge)",
      "Superhuman Asgardian strength and durability",
      "Master swordsman"
    ],
    "storyline": "Drawn from Norse mythology and adapted by Stan Lee, Larry Lieber, and Jack Kirby, Heimdall is the all-seeing, all-hearing sentinel of Asgard. Possessed of senses so acute that he can perceive events across all of the Nine Realms and hear a whisper from worlds away, he stands eternal watch at the Observatory, guarding the Bifrost — the rainbow bridge that connects Asgard to the rest of the cosmos. In both the myths and the comics, he is fated to be the first to know of the coming of Ragnarok, the doom of the gods.\n\nIn the Marvel Cinematic Universe, Idris Elba's Heimdall is a figure of quiet authority and unwavering loyalty, operating the Bifrost and serving as Asgard's first line of defense and intelligence. His near-omniscient gaze repeatedly proves crucial to the heroes — he watches over Thor during his exile on Earth, monitors the schemes of Loki, and acts on his own conscience when he deems Asgard's leadership compromised, even defying Loki's orders during the latter's secret rule.\n\nHeimdall's loyalty is ultimately to Asgard's people rather than to any single ruler. During the events of 'Thor: Ragnarok,' with the fire demon Surtur destroying Asgard, Heimdall takes charge of evacuating the surviving Asgardians onto a refugee ship, shepherding the civilians to safety while their world burns.\n\nHis story ends in tragedy at the opening of 'Avengers: Infinity War,' when Thanos's forces attack the refugee ship. With his dying strength, Heimdall summons the dark magic of the Bifrost one final time to teleport the Hulk safely to Earth as a warning of the coming threat — a sacrifice that costs him his life when Thanos kills him moments later, but that sets the heroes' resistance in motion.",
    "facts": [
      "His final act sends the Hulk crashing into Doctor Strange's Sanctum Sanctorum on Earth.",
      "Heimdall can see and hear across all Nine Realms, making him Asgard's living surveillance system.",
      "The character is drawn directly from Norse mythology, where he is the watchman destined to herald Ragnarok.",
      "Idris Elba's casting drew controversy from some quarters, which the actor publicly dismissed with characteristic humor.",
      "In 'Thor: Ragnarok' it is Heimdall, not the royal family, who saves the Asgardian civilians by evacuating them."
    ]
  },
  {
    "name": "Pepper Potts",
    "alias": "Virginia 'Pepper' Potts",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "Tales of Suspense #45 (1963)",
    "creators": [
      "Stan Lee",
      "Robert Bernstein",
      "Don Heck"
    ],
    "actors": [
      "Gwyneth Paltrow"
    ],
    "films": [
      "Iron Man (2008)",
      "Iron Man 2 (2010)",
      "The Avengers (2012)",
      "Iron Man 3 (2013)",
      "Avengers: Age of Ultron (2015)",
      "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    "powers": [
      "Brilliant CEO and businesswoman, leading Stark Industries",
      "Briefly dons the Rescue armor with flight and repulsors",
      "Resourceful and level-headed under pressure"
    ],
    "storyline": "Virginia 'Pepper' Potts debuted in 1963 as Tony Stark's exceptionally capable secretary at Stark Industries, an early grounding presence in the Iron Man comics whose competence and loyalty made her indispensable. Over the decades she evolved from a supporting character into a major figure in Tony's life, eventually taking on her own armored identity, Rescue, and even running Stark's company in his absence.\n\nIn the Marvel Cinematic Universe, Pepper is introduced as Tony's personal assistant, the one person who reliably keeps his chaotic life together. She is integral to his survival in the first film, helping replace his arc reactor and exposing Obadiah Stane's betrayal. As the franchise progresses she becomes CEO of Stark Industries when Tony hands her the reins, demonstrating that her sharp business acumen makes her a formidable leader in her own right.\n\nHer relationship with Tony forms one of the emotional throughlines of the Iron Man saga. In Iron Man 3 she is briefly endowed with the unstable Extremis enhancement, using it to kill the villain Killian, before Tony cures her. Their bond deepens into marriage, and by the time of Infinity War they are expecting a child, raising the personal stakes of Tony's continued heroics.\n\nPepper's heroic apex comes in Avengers: Endgame, where she finally dons her own Rescue armor — complete with flight and repulsors — to fight alongside the Avengers in the climactic battle against Thanos. After Tony's sacrifice to defeat Thanos, she is left to raise their daughter Morgan, embodying the family and legacy he died to protect.",
    "facts": [
      "Her Rescue armor finally lets her stand on the battlefield in Avengers: Endgame.",
      "She briefly gains the Extremis enhancement in Iron Man 3 and kills the villain Killian.",
      "She serves as CEO of Stark Industries after Tony hands her control of the company.",
      "In the comics her armored alter ego is also named Rescue, mirroring her MCU debut."
    ]
  },
  {
    "name": "Gorr the God Butcher",
    "alias": "Gorr",
    "teams": [],
    "category": "Villain",
    "created": 2013,
    "firstAppearance": "Thor: God of Thunder #2 (2013)",
    "creators": [
      "Jason Aaron",
      "Esad Ribic"
    ],
    "actors": [
      "Christian Bale"
    ],
    "films": [
      "Thor: Love and Thunder (2022)"
    ],
    "powers": [
      "Wields the All-Black the Necrosword, a living symbiotic blade",
      "Creates shadow monsters and manipulates darkness",
      "Near-immortality and god-slaying power",
      "Shadow travel across the cosmos"
    ],
    "storyline": "Gorr was a mortal from a barren, dying world, a devout believer who prayed constantly to his gods for relief as his family starved and perished one by one. When his last surviving child died and he openly questioned whether the gods even existed, his community cast him out. Stumbling through the desert, he witnessed two godlike beings fall from the sky in mortal combat, and the realization that gods were real yet had never answered a single prayer shattered his faith and replaced it with absolute hatred.\n\nOne of those fallen gods was bonded to the All-Black the Necrosword, the oldest and deadliest symbiote weapon in existence. The blade chose Gorr as its new wielder, granting him godlike power and feeding on his rage. Thus armed, Gorr embarked on a millennia-spanning crusade to slaughter every god across the cosmos, earning the name the God Butcher. The Jason Aaron comic arc spans three eras of Thor's life as the Thunder God hunts Gorr across the past, present and a grim far future.\n\nIn Thor: Love and Thunder, Christian Bale plays Gorr in a streamlined version of this origin: after his daughter dies and the god he worshipped, Rapu, callously mocks his grief, Gorr claims the Necrosword and vows to kill all gods. He kidnaps the children of New Asgard to lure Thor into a final confrontation at the Gates of Eternity.\n\nThe film resolves Gorr's arc on a note of tragedy and mercy rather than pure villainy. Reaching Eternity, the cosmic being who grants one wish, Gorr chooses not to extinguish the gods but to resurrect his beloved daughter, dying in the process while entrusting her to Thor's care. It is a rare Marvel antagonist whose monstrous campaign ends in redemptive grief.",
    "facts": [
      "The Necrosword corrupts and amplifies its wielder's vengeance.",
      "He was originally a devout, faithful mortal whose loss of family turned him against all gods.",
      "His weapon, the All-Black the Necrosword, is depicted as the very first symbiote in Marvel lore.",
      "Christian Bale shaved his head and lost significant weight to play the gaunt, pale villain."
    ]
  },
  {
    "name": "Iceman",
    "alias": "Bobby Drake",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1963,
    "firstAppearance": "The X-Men #1 (1963)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Shawn Ashmore"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)"
    ],
    "powers": [
      "Generates and controls ice, cold and freezing temperatures",
      "Transforms his entire body into living organic ice",
      "Forms ice slides, walls, ramps and projectiles",
      "Can flash-freeze ambient moisture and manipulate water vapor"
    ],
    "storyline": "Bobby Drake was one of the original five X-Men introduced in The X-Men #1 (1963), alongside Cyclops, Marvel Girl, Beast and Angel. As the youngest founding member, he debuted as a wisecracking teenager whose powers were initially crude — covering himself in snow before learning to convert his body into pure organic ice. Over the years he matured into one of the team's most experienced and surprisingly powerful members.\n\nIceman's abilities run far deeper than most realize. As an Omega-level mutant capable of controlling moisture and thermal energy on a massive scale, he can in theory lower the temperature of vast areas, create complex ice constructs, and reconstitute his body even after being shattered. Many stories suggest he has only scratched the surface of his potential, held back by self-doubt and a tendency to use humor as a shield.\n\nA significant modern development came when a time-displaced younger Bobby — and later his adult self — came out as gay, making Iceman one of the most prominent LGBTQ+ heroes in mainstream superhero comics. His subsequent solo series explored his identity, relationships and family, adding emotional depth to a character long defined mainly by levity.\n\nIn the 20th Century Fox film series, Iceman (played by Shawn Ashmore) appears as a younger X-Man and love interest for Rogue, growing from a student at Xavier's school into a full team member. He fights in major conflicts across X-Men (2000), X2, The Last Stand and Days of Future Past, with his fully ice-formed look realized on screen in the later films.",
    "facts": [
      "At his full potential Iceman is considered an Omega-level mutant, one of the most powerful in the X-Men.",
      "He was one of the original five X-Men who debuted in 1963.",
      "In modern comics Bobby Drake came out as gay, becoming a prominent LGBTQ+ Marvel hero.",
      "Because he can reform his shattered ice body, Iceman is extremely difficult to truly kill."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/339-iceman.jpg"
  },
  {
    "name": "Kitty Pryde",
    "alias": "Katherine Pryde",
    "teams": [
      "X-Men"
    ],
    "category": "Hero",
    "created": 1980,
    "firstAppearance": "The Uncanny X-Men #129 (1980)",
    "creators": [
      "Chris Claremont",
      "John Byrne"
    ],
    "actors": [
      "Ellen Page"
    ],
    "films": [
      "X-Men (2000)",
      "X2 (2003)",
      "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)"
    ],
    "powers": [
      "Phases through solid matter ('intangibility')",
      "Can disrupt electronics by phasing through them",
      "Walks on air by phasing through it",
      "Skilled in martial arts and computing"
    ],
    "storyline": "Kitty Pryde, also known as Katherine Pryde, was created by Chris Claremont and John Byrne and introduced in The Uncanny X-Men #129 in 1980. When she joined the team she was its youngest member, a precocious thirteen-year-old genius from Chicago, and she served as an audience-surrogate, the young newcomer through whose eyes readers experienced the X-Men's world. Her mutant power is phasing, or intangibility: she can make her body insubstantial and pass through solid matter, walk through walls and floors, disrupt electronics by phasing her body through them, and even tread on air by treating it as solid beneath her feet.\n\nOver the years, Kitty grew from a nervous rookie into one of the most capable and beloved X-Men, cycling through codenames like Sprite, Ariel, Shadowcat, and eventually adopting the Star-Lord moniker during a stint in space. She trained in martial arts under Wolverine, with whom she shares one of the franchise's most touching mentor relationships, and her intellect made her a skilled computer expert and engineer. She has led the X-Men, taught at the school, and at times served as headmistress, evolving into a central pillar of the team.\n\nKitty is the protagonist of one of the most famous X-Men stories ever told, 'Days of Future Past,' in which a dystopian future ruled by mutant-hunting Sentinels prompts the X-Men to send the consciousness of an adult Kitty Pryde back into her younger body to prevent an assassination that triggers the dark timeline. The story's themes of fatalism, sacrifice, and altering history have made it a touchstone of comic storytelling and a frequent influence on adaptations.\n\nOn film, Kitty Pryde was portrayed by Ellen Page (now Elliot Page) in X-Men: The Last Stand and most prominently in X-Men: Days of Future Past, where the film adapts the time-travel premise with a twist: rather than traveling herself, Kitty's phasing power is reworked to project Wolverine's consciousness back into the past to rewrite the future and prevent a Sentinel-dominated timeline. Across comics and film, Kitty remains a fan-favorite, celebrated as the heart and conscience of the X-Men and a symbol of the team's enduring appeal to younger readers.",
    "facts": [
      "She was the youngest X-Man when she joined and originally served as the reader's point-of-view character.",
      "She has gone by many codenames, including Sprite, Ariel, Shadowcat, and even Star-Lord.",
      "In the film Days of Future Past, her power is used to send Wolverine's mind into the past.",
      "Her pet dragon, Lockheed, is one of her most famous companions in the comics.",
      "Wolverine served as her mentor and trained her in martial arts."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/586-shadowcat.jpg"
  },
  {
    "name": "Bishop",
    "alias": "Lucas Bishop",
    "teams": [
      "X-Men",
      "X.S.E."
    ],
    "category": "Hero",
    "created": 1991,
    "firstAppearance": "The Uncanny X-Men #282 (1991)",
    "creators": [
      "Whilce Portacio",
      "John Byrne",
      "Jim Lee"
    ],
    "actors": [
      "Omar Sy"
    ],
    "films": [
      "X-Men: Days of Future Past (2014)"
    ],
    "powers": [
      "Absorbs energy and redirects it as concussive blasts",
      "Time-traveling soldier from a dystopian future",
      "Enhanced strength and durability",
      "Skilled marksman and tactician"
    ],
    "storyline": "Lucas Bishop is a mutant from a dystopian future where mutants are confined to internment camps and branded with an 'M' tattoo over one eye. Raised in this grim world, he became an officer of the X.S.E. (Xavier's Security Enforcers), a mutant police force, pursuing a criminal back through time and finding himself stranded in the present-day era of the X-Men. There he joined the team, bringing with him knowledge of a future history he was desperate to prevent, including the legend that a traitor within the X-Men would doom the dream.\n\nBishop's mutant power is the ability to absorb almost any form of energy directed at him and convert it into raw strength or redirect it as devastating concussive blasts. This makes him a formidable, soldier-minded combatant whose effectiveness actually increases the more he is attacked. As a 1990s creation, he embodied that era's edgier, militaristic style of X-Men storytelling.\n\nHis history with the X-Men grew darker over time. In the controversial 'Messiah Complex' and subsequent storylines, a desperate Bishop became obsessed with the belief that the first mutant born after a depopulation event, the child Hope Summers, would cause the apocalyptic future he came from, leading him to hunt her relentlessly and turning him for a time into an antagonist.\n\nOn film, Omar Sy portrays Bishop in X-Men: Days of Future Past (2014), where he is a member of a small band of mutant survivors in a devastated future. There his power is used cleverly in the team's guerrilla resistance, and he is part of the chain that sends Kitty Pryde's time-projection effort backward to alter history and avert the Sentinel-dominated timeline.",
    "facts": [
      "The more he's hit with energy, the harder he can hit back.",
      "He comes from a dystopian future where mutants are tattooed and held in internment camps.",
      "In the comics he served as an officer in a future mutant police force, the X.S.E.",
      "He spent a major storyline hunting the mutant 'messiah' child Hope Summers, becoming a villain.",
      "His arrival in the present was driven by a prophecy that a traitor would destroy the X-Men."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/92-bishop.jpg"
  },
  {
    "name": "Maria Hill",
    "alias": "Maria Hill",
    "teams": [
      "S.H.I.E.L.D."
    ],
    "category": "Hero",
    "created": 2007,
    "firstAppearance": "New Avengers #4 (2005)",
    "creators": [
      "Brian Michael Bendis",
      "David Finch"
    ],
    "actors": [
      "Cobie Smulders"
    ],
    "films": [
      "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)",
      "Avengers: Age of Ultron (2015)",
      "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)",
      "Secret Invasion (TV, 2023)"
    ],
    "powers": [
      "High-ranking S.H.I.E.L.D. officer and Nick Fury's right hand",
      "Elite espionage and combat training",
      "Sharp tactician and crisis manager"
    ],
    "storyline": "Maria Hill was created by Brian Michael Bendis and David Finch and first appeared in New Avengers #4 in 2005. Introduced as a no-nonsense, by-the-book agent, she was controversially installed as Director of the espionage agency S.H.I.E.L.D., succeeding Nick Fury after his fall from grace, and immediately clashed with the superhero community over issues of oversight and control during the \"Civil War\" era.\n\nIn the comics, Hill's relationship with the heroes is initially adversarial, defined by her rigid adherence to orders and government authority, but she gradually earns respect through her competence and courage. She serves in various leadership roles within S.H.I.E.L.D. and later as a senior operative under Tony Stark, becoming a fixture of the Marvel universe's intelligence apparatus.\n\nIn the Marvel Cinematic Universe, Cobie Smulders plays Hill as Nick Fury's loyal and capable right hand, debuting in The Avengers as a senior S.H.I.E.L.D. officer who helps coordinate the response to Loki's invasion. She survives the collapse of S.H.I.E.L.D. when HYDRA's infiltration is exposed in Captain America: The Winter Soldier and continues working alongside Fury and the Avengers.\n\nHer screen arc takes a dark turn in the series Secret Invasion, where Hill is shockingly killed by the Skrull rebel Gravik during a coordinated alien infiltration of Earth, a loss that personally devastates Fury and raises the stakes of the conflict. Throughout her appearances she embodies the steady, behind-the-scenes professional who keeps the larger machine of global defense running.",
    "facts": [
      "She often serves as the Avengers' behind-the-scenes mission control and Nick Fury's most trusted deputy.",
      "In the comics she became Director of S.H.I.E.L.D., taking over the role from Nick Fury himself.",
      "Cobie Smulders played her while simultaneously starring on the sitcom How I Met Your Mother.",
      "Her MCU story ends grimly when she is killed by a Skrull in the series Secret Invasion."
    ]
  },
  {
    "name": "Korg",
    "alias": "Korg",
    "teams": [
      "Revengers"
    ],
    "category": "Hero",
    "created": 2006,
    "firstAppearance": "The Incredible Hulk #93 (2006)",
    "creators": [
      "Greg Pak",
      "Carlo Pagulayan"
    ],
    "actors": [
      "Taika Waititi"
    ],
    "films": [
      "Thor: Ragnarok (2017)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    "powers": [
      "Kronan warrior made of living rock",
      "Immense strength and durability",
      "Gentle, easygoing temperament despite his size"
    ],
    "storyline": "Korg is a Kronan, a member of a rock-bodied alien warrior race first glimpsed in early Thor comics. Introduced as a distinct character in 2006, he became a significant figure in the 'Planet Hulk' storyline, in which the Hulk is exiled to the savage gladiatorial world of Sakaar. There, Korg becomes one of Hulk's closest allies among the 'Warbound,' a group of gladiators bonded together through shared captivity and battle.\n\nIn the comics, Korg fights alongside the Hulk during the slave rebellion against Sakaar's tyrannical ruler and later follows him to Earth seeking vengeance against the heroes who exiled the Hulk in the first place. His loyalty, strength and warrior's code make him a steadfast companion throughout these cosmic conflicts.\n\nIn the Marvel Cinematic Universe, Korg is reinvented with a famously gentle, soft-spoken and good-natured personality that contrasts comically with his hulking stone body. Portrayed via motion capture and voice by director Taika Waititi, he befriends Thor while both are trapped as gladiators on Sakaar under the Grandmaster's rule, and his deadpan humor became an instant fan favorite.\n\nKorg helps lead the rebellion against the Grandmaster and escapes Sakaar, going on to accompany Thor through subsequent adventures. He survives the fall of Asgard, witnesses Thor's despondent exile in Avengers: Endgame, and continues as a loyal companion and comic-relief sidekick in Thor: Love and Thunder, where more of his Kronan heritage and reproduction are humorously explored.",
    "facts": [
      "Korg cheerfully notes that being made of rocks means he can't be killed conventionally.",
      "He was created during the acclaimed 'Planet Hulk' comic storyline.",
      "Director Taika Waititi both voiced and performed Korg through motion capture.",
      "In the comics, Korg is one of Hulk's loyal 'Warbound' allies from the planet Sakaar.",
      "His gentle, polite demeanor in the films is a deliberate contrast to his massive stone body."
    ]
  },
  {
    "name": "Odin",
    "alias": "Odin Borson",
    "teams": [],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Journey into Mystery #85 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Anthony Hopkins"
    ],
    "films": [
      "Thor (2011)",
      "Thor: The Dark World (2013)",
      "Thor: Ragnarok (2017)"
    ],
    "powers": [
      "Wields the immense cosmic might of the Odinforce",
      "Vast Asgardian strength, durability and longevity",
      "Powerful sorcery and energy manipulation",
      "Ruler and protector of the Nine Realms"
    ],
    "storyline": "Odin Borson, the Allfather and king of Asgard, first appeared in Journey into Mystery #85 in 1962, created by Stan Lee, Larry Lieber, and Jack Kirby. Drawn from Norse mythology, Odin rules the Nine Realms and wields the Odinforce (or Odinpower), an immense cosmic energy that makes him one of the mightiest beings in the Marvel universe. As the father of Thor and adoptive father of Loki, he is the central patriarch of the Asgardian saga and a figure whose decisions shape the destinies of his sons.\n\nIn the comics, Odin is a complex ruler, at times wise and benevolent, at other times stern and prideful. He famously banishes Thor to Earth in mortal form to teach him humility, and periodically enters the 'Odinsleep,' a regenerative trance that leaves Asgard vulnerable to its enemies. His long history includes battles against Surtur, the death and rebirth of Asgard through Ragnarok, and countless sacrifices to protect the realms.\n\nThe Marvel Cinematic Universe brought Odin to the screen with Anthony Hopkins in the role across the Thor trilogy. In 2011's Thor, he strips Thor of his power and casts him to Earth to learn humility, and reveals to Loki his true heritage as a Frost Giant foundling. His tangled history with his sons and his hidden past drive much of the saga's emotional weight.\n\nIn Thor: The Dark World and Thor: Ragnarok, the consequences of Odin's reign come to light, most dramatically the revelation of his erased firstborn daughter Hela, whose conquests once helped build Asgard's empire. After being deposed and exiled by a disguised Loki, Odin dies peacefully on Earth, his passing releasing the imprisoned Hela and forcing his sons to reckon with the violent foundations of their kingdom. He remains a guiding, mythic presence throughout the Asgardian story.",
    "facts": [
      "His magic kept his daughter Hela, the goddess of death, imprisoned for ages.",
      "Odin wields the Odinforce, one of the greatest cosmic powers in the Marvel universe.",
      "He periodically enters the 'Odinsleep,' a vulnerable regenerative trance that endangers Asgard.",
      "It was Odin who banished Thor to Earth as a mortal to teach him humility.",
      "Odin secretly adopted the infant Loki, a Frost Giant left to die, and raised him as his own son."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/498-odin.jpg"
  },
  {
    "name": "Mighty Thor",
    "alias": "Jane Foster",
    "teams": [
      "Avengers"
    ],
    "category": "Hero",
    "created": 1962,
    "firstAppearance": "Journey into Mystery #84 (1962)",
    "creators": [
      "Stan Lee",
      "Larry Lieber",
      "Jack Kirby"
    ],
    "actors": [
      "Natalie Portman"
    ],
    "films": [
      "Thor (2011)",
      "Thor: The Dark World (2013)",
      "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    "powers": [
      "Wields the reforged Mjolnir as the Mighty Thor",
      "Asgardian-level strength, durability and lightning control while transformed",
      "Brilliant astrophysicist as Jane Foster",
      "Flight and storm manipulation"
    ],
    "storyline": "Jane Foster first appeared in 1962 as a nurse and the original love interest of Thor in his earliest adventures, a mortal woman caught up in the affairs of gods. Over the decades the comics reinvented her as a brilliant scientist, and in a landmark 2014 storyline by Jason Aaron, she ascended to one of Marvel's most celebrated arcs: when the original Thor became unworthy and could no longer lift Mjolnir, Jane proved worthy and took up the hammer herself, transforming into the Mighty Thor and wielding the full power of the God of Thunder.\n\nThat storyline carried a devastating cost. In the comics, Jane was battling breast cancer, and each time she transformed into the Mighty Thor, the magic purged the chemotherapy toxins from her body — along with the medicine itself — accelerating her illness. Every act of heroism brought her closer to death, forcing an agonizing choice between saving others and saving herself. Her arc became one of the most acclaimed depictions of heroism and sacrifice in modern comics.\n\nIn the Marvel Cinematic Universe, Natalie Portman's Jane Foster began as Thor's astrophysicist love interest in the first two 'Thor' films before being written out for several years. She returned in 2022's 'Thor: Love and Thunder,' adapting the Mighty Thor storyline: dying of cancer, Jane is mystically summoned by the shattered pieces of Mjolnir, which reassemble to grant her Thor's powers whenever she transforms — even as, just as in the comics, the transformation drains her mortal body and worsens her illness.\n\nReunited with Thor, Jane fights alongside him against Gorr the God Butcher. In the film's climax she uses the last of her strength to help defeat Gorr, then succumbs to her cancer, dying as the Mighty Thor. She is granted entry into Valhalla, the Asgardian warriors' paradise, her sacrifice cementing her as a true hero rather than merely a hero's love interest.",
    "facts": [
      "Each transformation into the Mighty Thor worsened Jane's cancer, because the magic burned away her chemotherapy along with the toxins.",
      "Jane Foster was Thor's original love interest, debuting as a nurse in his very first 1962 appearance.",
      "The 'Mighty Thor' storyline that Jane became worthy of Mjolnir was created by writer Jason Aaron in 2014.",
      "Natalie Portman reportedly built significant muscle for the role to embody the Mighty Thor.",
      "Upon her death in 'Love and Thunder,' Jane is welcomed into Valhalla, the Asgardian afterlife for fallen warriors."
    ],
    "image": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/659-thor.jpg"
  },
  {
    "name": "Peggy Carter",
    "alias": "Margaret 'Peggy' Carter",
    "teams": [
      "S.H.I.E.L.D.",
      "SSR"
    ],
    "category": "Hero",
    "created": 1966,
    "firstAppearance": "Tales of Suspense #77 (1966)",
    "creators": [
      "Stan Lee",
      "Jack Kirby"
    ],
    "actors": [
      "Hayley Atwell"
    ],
    "films": [
      "Captain America: The First Avenger (2011)",
      "Captain America: The Winter Soldier (2014)",
      "Agent Carter (TV, 2015-2016)",
      "Ant-Man (2015)",
      "Avengers: Endgame (2019)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    "powers": [
      "Elite combat, espionage and marksmanship skills",
      "Brilliant strategist and intelligence officer",
      "Co-founder of S.H.I.E.L.D.",
      "Unshakable courage and conviction"
    ],
    "storyline": "Margaret 'Peggy' Carter first appeared in Marvel's comics in 1966 as a French Resistance fighter and wartime love interest of Captain America during World War II. She was later reimagined for the modern era as a British intelligence officer, and the Marvel Cinematic Universe made her a fully realized character: a fearless, brilliant agent of the Strategic Scientific Reserve (SSR) whose competence repeatedly outshone the men who underestimated her.\n\nIn Captain America: The First Avenger, Peggy oversees the project that transforms Steve Rogers into a super-soldier and becomes his confidante, ally and great love. Their romance is cut tragically short when Steve crashes a HYDRA aircraft into the Arctic to save the world, promising her a dance he is unable to keep — leaving Peggy to mourn a man she believed dead for seventy years.\n\nThe ABC series Agent Carter follows Peggy in the postwar years, navigating the sexism of 1940s espionage work while undertaking covert missions, and chronicles her instrumental role in co-founding S.H.I.E.L.D. alongside Howard Stark. These stories cement her as one of the foundational figures of the entire MCU, the bedrock on which the modern hero organizations were built. An aged Peggy also shares a poignant final scene with Steve in The Winter Soldier.\n\nHer story reaches its long-deferred resolution in Avengers: Endgame, when Steve, having returned the Infinity Stones through time, chooses to remain in the past to finally live out the life and the dance he promised her. A variant of Peggy who took the super-soldier serum herself — Captain Carter — appears in What If...? and Doctor Strange in the Multiverse of Madness, demonstrating the heroic potential the character always embodied.",
    "facts": [
      "'I'm not looking for forgiveness, and I'm way past asking permission.'",
      "She co-founded S.H.I.E.L.D. alongside Howard Stark after World War II.",
      "In Avengers: Endgame, Steve Rogers travels back in time to finally share the dance he promised her.",
      "A variant who took the super-soldier serum, Captain Carter, appears in What If...? and Multiverse of Madness."
    ]
  },
  {
    "name": "Thena",
    "alias": "Thena",
    "teams": [
      "Eternals"
    ],
    "category": "Hero",
    "created": 1976,
    "firstAppearance": "The Eternals #5 (1976)",
    "creators": [
      "Jack Kirby"
    ],
    "actors": [
      "Angelina Jolie"
    ],
    "films": [
      "Eternals (2021)"
    ],
    "powers": [
      "Forms weapons of pure cosmic energy at will",
      "Master warrior and tactician among the Eternals",
      "Near-immortality, strength and durability"
    ],
    "storyline": "Thena is one of the Eternals created by Jack Kirby, a near-immortal warrior whose name and martial prowess deliberately evoke the Greek goddess Athena, with whom ancient humans confused her. The daughter of the Eternal leader Zuras, she is one of the most formidable fighters of her kind, able to manifest weapons, armor and projectiles out of pure cosmic energy. In the comics she has been entangled in the political conflicts of the Eternals, including disputes between rival factions and a complicated, long-running rivalry and romance with the renegade Eternal Kro of the Deviants.\n\nAcross her appearances, Thena embodies the warrior ethos of her people, fiercely loyal yet sometimes torn between duty and personal desire. Her storylines often examine the burdens of immortality and the rigid hierarchy of Eternal society, in which she must balance her own will against the directives of her father and the Celestials.\n\nIn the Marvel Cinematic Universe, Angelina Jolie portrays Thena in Eternals (2021) as the team's preeminent combatant, conjuring golden energy blades and spears in battle against the monstrous Deviants. The film gives her a poignant new affliction: 'Mahd Wy'ry,' a kind of cosmic dementia born of thousands of years of accumulated memories, which causes her to suffer violent flashbacks and momentarily lose the ability to tell past from present.\n\nHer condition deepens her bond with the gentle giant Gilgamesh, who becomes her caretaker and anchor across centuries of exile. When the Eternals reunite to stop the Emergence, Thena rejoins the fight, and her arc explores memory, loyalty and the cost of an endless life. She survives the film's events and departs into the cosmos with several of her fellow Eternals to seek out others of their kind.",
    "facts": [
      "Her affliction causes flashes of memories from her thousands of years of life.",
      "Her name and warrior nature were inspired by the Greek goddess Athena.",
      "In the comics she is the daughter of Zuras, leader of the Eternals.",
      "She can materialize any weapon she imagines from pure cosmic energy."
    ]
  },
  {
    "name": "Druig",
    "alias": "Druig",
    "teams": [
      "Eternals"
    ],
    "category": "Anti-Hero",
    "created": 1977,
    "firstAppearance": "The Eternals #11 (1977)",
    "creators": [
      "Jack Kirby"
    ],
    "actors": [
      "Barry Keoghan"
    ],
    "films": [
      "Eternals (2021)"
    ],
    "powers": [
      "Mind control over the thoughts and actions of others",
      "Near-immortality and resistance to aging as an Eternal",
      "Cosmic-energy manipulation and great durability",
      "Telepathic influence and illusion"
    ],
    "storyline": "Druig was created by Jack Kirby and introduced in The Eternals #11 (1977). In the original comics he is one of the more sinister and power-hungry Eternals, a cousin of Ikaris who covets influence and is willing to use his formidable mental powers — including mind control and the infliction of fear and pain — to seize it. His cold ambition frequently sets him apart from the more heroic members of his race.\n\nThe Marvel Cinematic Universe's Eternals (2021) reinterpreted Druig, played by Barry Keoghan, as a far more brooding and morally conflicted figure. Possessing the power to control the minds of others, he becomes deeply disillusioned over the millennia by his orders never to interfere directly in human affairs, even as he watches humanity wage endless, senseless wars across the centuries.\n\nUnable to reconcile his compassion with the Eternals' rule of non-interference, Druig withdraws from the group and spends centuries hidden away in the Amazon rainforest, where he uses his mind control to shield and govern an isolated community in peace. His self-imposed exile reflects the film's central question of whether protecting humanity justifies controlling it.\n\nWhen the catastrophic 'Emergence' threatens to destroy Earth, Druig rejoins his Eternal family. He attempts to use his powers to stop the emerging Celestial and ultimately sides with Sersi and the others against Ikaris to save humanity. By the film's end he is among the Eternals taken by Arishem to answer for their defiance, leaving his fate — and a potential romance with Makkari — unresolved.",
    "facts": [
      "Druig once used his mind control to halt a human war, defying the Eternals' rule against interference.",
      "In the comics he is a cousin of Ikaris and a far more straightforwardly villainous, power-hungry Eternal.",
      "He spent centuries hidden in the Amazon, peacefully governing an isolated community with his powers.",
      "His unspoken bond with the speedster Makkari is one of the film's quieter emotional threads."
    ]
  }
];
