// Marvel Characters Wiki — character dataset
// Each entry documents: first appearance (year + issue), creators, the films/shows
// the character appears in, the actor(s) who portrayed them, powers, and storyline.
// This is a curated set of the most iconic characters. Add more by appending objects.

window.MARVEL_CHARACTERS = [
  {
    name: "Iron Man",
    alias: "Tony Stark",
    teams: ["Avengers"],
    category: "Hero",
    created: 1963,
    firstAppearance: "Tales of Suspense #39 (1963)",
    creators: ["Stan Lee", "Larry Lieber", "Don Heck", "Jack Kirby"],
    actors: ["Robert Downey Jr."],
    films: [
      "Iron Man (2008)", "Iron Man 2 (2010)", "The Avengers (2012)",
      "Iron Man 3 (2013)", "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)", "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Genius-level intellect and engineering mastery",
      "Powered armored suit granting flight, super strength and durability",
      "Repulsor beams, unibeam, and an arsenal of integrated weapons",
      "AI assistants (J.A.R.V.I.S., F.R.I.D.A.Y.)"
    ],
    storyline: "Billionaire industrialist and weapons manufacturer Tony Stark is " +
      "captured and gravely wounded, then builds a powered suit of armor to escape. " +
      "Transformed by the experience, he becomes the armored hero Iron Man, founds " +
      "the Avengers, and ultimately sacrifices his life wielding the Infinity Stones " +
      "to defeat Thanos in Avengers: Endgame.",
    facts: "His arc reactor both powers his suit and keeps shrapnel from reaching his heart."
  },
  {
    name: "Captain America",
    alias: "Steve Rogers",
    teams: ["Avengers"],
    category: "Hero",
    created: 1941,
    firstAppearance: "Captain America Comics #1 (1941)",
    creators: ["Joe Simon", "Jack Kirby"],
    actors: ["Chris Evans"],
    films: [
      "Captain America: The First Avenger (2011)", "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)", "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    powers: [
      "Peak human strength, speed, agility and endurance via the Super-Soldier Serum",
      "Master tactician and hand-to-hand combatant",
      "Near-indestructible vibranium shield used offensively and defensively",
      "Accelerated healing and resistance to aging"
    ],
    storyline: "Frail Brooklyn volunteer Steve Rogers is enhanced by the Super-Soldier " +
      "Serum to fight in WWII, then is frozen in ice for decades. Revived in the modern " +
      "era, he leads the Avengers, opposes the Sokovia Accords, and after the defeat of " +
      "Thanos returns the Infinity Stones through time, choosing to live a full life in " +
      "the past before passing the shield to Sam Wilson.",
    facts: "Originally created as a WWII propaganda hero, punching Hitler on his first cover."
  },
  {
    name: "Thor",
    alias: "Thor Odinson",
    teams: ["Avengers"],
    category: "Hero",
    created: 1962,
    firstAppearance: "Journey into Mystery #83 (1962)",
    creators: ["Stan Lee", "Larry Lieber", "Jack Kirby"],
    actors: ["Chris Hemsworth"],
    films: [
      "Thor (2011)", "The Avengers (2012)", "Thor: The Dark World (2013)",
      "Avengers: Age of Ultron (2015)", "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)"
    ],
    powers: [
      "Asgardian god of thunder with vast superhuman strength and durability",
      "Control over lightning and storms",
      "Wields the enchanted hammer Mjolnir and later the axe Stormbreaker",
      "Extremely long lifespan and accelerated healing"
    ],
    storyline: "The arrogant Asgardian prince Thor is cast down to Earth by his father " +
      "Odin to learn humility. He grows into a noble defender of the Nine Realms, loses " +
      "Mjolnir to his sister Hela, witnesses the destruction of Asgard, and joins the " +
      "Avengers' fight against Thanos.",
    facts: "Only those deemed 'worthy' can lift Mjolnir — a rule that has surprised many."
  },
  {
    name: "Hulk",
    alias: "Bruce Banner",
    teams: ["Avengers"],
    category: "Hero",
    created: 1962,
    firstAppearance: "The Incredible Hulk #1 (1962)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Eric Bana", "Edward Norton", "Mark Ruffalo"],
    films: [
      "Hulk (2003)", "The Incredible Hulk (2008)", "The Avengers (2012)",
      "Avengers: Age of Ultron (2015)", "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Virtually limitless superhuman strength that grows with his rage",
      "Extreme durability and rapid regenerative healing",
      "Genius intellect as Bruce Banner",
      "Later merges intellect and brawn as 'Smart Hulk'"
    ],
    storyline: "Scientist Bruce Banner is caught in a gamma radiation explosion and " +
      "transforms into the raging Hulk whenever angered or threatened. He struggles to " +
      "control the monster within, eventually reconciling his two halves and using the " +
      "Stark gauntlet to bring back those lost to Thanos's snap.",
    facts: "The angrier Hulk gets, the stronger he becomes — a power with no clear ceiling."
  },
  {
    name: "Black Widow",
    alias: "Natasha Romanoff",
    teams: ["Avengers"],
    category: "Hero",
    created: 1964,
    firstAppearance: "Tales of Suspense #52 (1964)",
    creators: ["Stan Lee", "Don Rico", "Don Heck"],
    actors: ["Scarlett Johansson"],
    films: [
      "Iron Man 2 (2010)", "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)", "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)", "Black Widow (2021)"
    ],
    powers: [
      "Master spy, assassin and martial artist",
      "Peak human conditioning from Red Room training",
      "Expert marksman and tactician",
      "Signature 'Widow's Bite' electroshock gauntlets"
    ],
    storyline: "Trained from childhood as a Soviet assassin in the Red Room, Natasha " +
      "Romanoff defects and becomes a S.H.I.E.L.D. agent and founding Avenger. Seeking " +
      "redemption for her past, she sacrifices herself on Vormir to secure the Soul " +
      "Stone, enabling the defeat of Thanos.",
    facts: "She and Hawkeye share a long history dating back to a mission in Budapest."
  },
  {
    name: "Hawkeye",
    alias: "Clint Barton",
    teams: ["Avengers"],
    category: "Hero",
    created: 1964,
    firstAppearance: "Tales of Suspense #57 (1964)",
    creators: ["Stan Lee", "Don Heck"],
    actors: ["Jeremy Renner"],
    films: [
      "Thor (2011)", "The Avengers (2012)", "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Master archer with effectively perfect aim",
      "Trick arrows for explosive, electric and specialty effects",
      "Skilled hand-to-hand combatant and tactician",
      "Peak human reflexes"
    ],
    storyline: "Former carnival marksman and S.H.I.E.L.D. agent Clint Barton fights " +
      "alongside the Avengers as the unerring archer Hawkeye. After losing his family in " +
      "the Snap, he becomes the vigilante Ronin before being restored and helping reverse " +
      "Thanos's actions.",
    facts: "He later mentors Kate Bishop, who takes up the Hawkeye mantle."
  },
  {
    name: "Spider-Man",
    alias: "Peter Parker",
    teams: ["Avengers"],
    category: "Hero",
    created: 1962,
    firstAppearance: "Amazing Fantasy #15 (1962)",
    creators: ["Stan Lee", "Steve Ditko"],
    actors: ["Tobey Maguire", "Andrew Garfield", "Tom Holland"],
    films: [
      "Spider-Man (2002)", "The Amazing Spider-Man (2012)",
      "Captain America: Civil War (2016)", "Spider-Man: Homecoming (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Spider-Man: No Way Home (2021)"
    ],
    powers: [
      "Superhuman strength, speed, agility and reflexes",
      "Ability to cling to surfaces",
      "Precognitive 'spider-sense' warning of danger",
      "Genius intellect; inventor of web-shooters"
    ],
    storyline: "Bitten by a radioactive spider, teenager Peter Parker gains arachnid " +
      "powers. After his Uncle Ben's death teaches him that 'with great power comes great " +
      "responsibility,' he becomes the friendly neighborhood Spider-Man, mentored by Tony " +
      "Stark and ultimately sacrificing his identity to save the multiverse.",
    facts: "Three live-action Spider-Men united on screen in No Way Home (2021)."
  },
  {
    name: "Black Panther",
    alias: "T'Challa",
    teams: ["Avengers"],
    category: "Hero",
    created: 1966,
    firstAppearance: "Fantastic Four #52 (1966)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Chadwick Boseman"],
    films: [
      "Captain America: Civil War (2016)", "Black Panther (2018)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Enhanced strength, speed and senses from the heart-shaped herb",
      "Vibranium suit that absorbs and redirects kinetic energy",
      "Master martial artist and tactician",
      "King of the technologically advanced nation of Wakanda"
    ],
    storyline: "Prince T'Challa becomes king of Wakanda and its protector, the Black " +
      "Panther, after his father's assassination. He opens his hidden, vibranium-rich " +
      "nation to the world and fights alongside the Avengers against Thanos.",
    facts: "The first Black superhero in mainstream American comics."
  },
  {
    name: "Doctor Strange",
    alias: "Stephen Strange",
    teams: ["Avengers", "Masters of the Mystic Arts"],
    category: "Hero",
    created: 1963,
    firstAppearance: "Strange Tales #110 (1963)",
    creators: ["Stan Lee", "Steve Ditko"],
    actors: ["Benedict Cumberbatch"],
    films: [
      "Doctor Strange (2016)", "Thor: Ragnarok (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Spider-Man: No Way Home (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    powers: [
      "Master of the mystic arts and sorcery",
      "Manipulation of energy, dimensions and time (via the Eye of Agamotto)",
      "Astral projection and interdimensional travel",
      "Wields the sentient Cloak of Levitation"
    ],
    storyline: "Arrogant neurosurgeon Stephen Strange loses the use of his hands in a car " +
      "crash and seeks healing at Kamar-Taj, where he masters sorcery instead. As Sorcerer " +
      "Supreme he defends reality, foreseeing the single timeline in which Thanos can be " +
      "defeated and guarding the multiverse.",
    facts: "He viewed 14,000,605 possible futures and found only one where the heroes win."
  },
  {
    name: "Scarlet Witch",
    alias: "Wanda Maximoff",
    teams: ["Avengers"],
    category: "Anti-Hero",
    created: 1964,
    firstAppearance: "The X-Men #4 (1964)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Elizabeth Olsen"],
    films: [
      "Avengers: Age of Ultron (2015)", "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Doctor Strange in the Multiverse of Madness (2022)"
    ],
    powers: [
      "Chaos magic and reality manipulation",
      "Telekinesis and energy projection",
      "Telepathy and mental manipulation",
      "Flight and matter alteration"
    ],
    storyline: "Empowered by the Mind Stone, Wanda Maximoff develops into one of the most " +
      "powerful beings on Earth. Grief over the loss of Vision drives her to warp reality " +
      "in WandaVision, and her pursuit of her lost children leads her down a dark path as " +
      "she embraces her destiny as the Scarlet Witch.",
    facts: "In the comics she once altered reality with the words 'No more mutants.'"
  },
  {
    name: "Vision",
    alias: "Vision",
    teams: ["Avengers"],
    category: "Hero",
    created: 1968,
    firstAppearance: "The Avengers #57 (1968)",
    creators: ["Roy Thomas", "John Buscema"],
    actors: ["Paul Bettany"],
    films: [
      "Avengers: Age of Ultron (2015)", "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)"
    ],
    powers: [
      "Synthetic android body powered by the Mind Stone",
      "Density control — can phase through walls or become diamond-hard",
      "Flight and energy beam projection from the Mind Stone",
      "Superhuman intellect linked to the J.A.R.V.I.S. AI"
    ],
    storyline: "Created from Ultron's body, J.A.R.V.I.S.'s consciousness and the Mind " +
      "Stone, Vision is a benevolent android who proves himself worthy by lifting " +
      "Mjolnir. He falls in love with Wanda Maximoff but is killed by Thanos, who rips the " +
      "Mind Stone from his head.",
    facts: "He effortlessly lifted Thor's hammer, stunning the Avengers."
  },
  {
    name: "Ant-Man",
    alias: "Scott Lang",
    teams: ["Avengers"],
    category: "Hero",
    created: 1979,
    firstAppearance: "The Avengers #181 (1979)",
    creators: ["David Michelinie", "John Byrne"],
    actors: ["Paul Rudd"],
    films: [
      "Ant-Man (2015)", "Captain America: Civil War (2016)",
      "Ant-Man and the Wasp (2018)", "Avengers: Endgame (2019)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    powers: [
      "Shrinks to insect size or grows giant using Pym Particles",
      "Retains full strength when miniaturized",
      "Communicates with and commands ants",
      "Access to the subatomic Quantum Realm"
    ],
    storyline: "Ex-con Scott Lang inherits the Ant-Man suit from Hank Pym and becomes an " +
      "unlikely hero. His escape from the Quantum Realm gives the Avengers the key to time " +
      "travel, enabling the 'time heist' that undoes Thanos's snap.",
    facts: "His knowledge of the Quantum Realm made Endgame's time-travel plan possible."
  },
  {
    name: "The Wasp",
    alias: "Hope van Dyne",
    teams: ["Avengers"],
    category: "Hero",
    created: 1963,
    firstAppearance: "Tales to Astonish #44 (1963, Janet van Dyne)",
    creators: ["Stan Lee", "Jack Kirby", "Ernie Hart"],
    actors: ["Evangeline Lilly"],
    films: [
      "Ant-Man and the Wasp (2018)", "Avengers: Endgame (2019)",
      "Ant-Man and the Wasp: Quantumania (2023)"
    ],
    powers: [
      "Shrinks and grows via Pym Particles",
      "Wings and integrated blasters built into her suit",
      "Expert martial artist and combatant",
      "Skilled scientist and pilot"
    ],
    storyline: "Hope van Dyne takes up her mother Janet's mantle as the Wasp, fighting " +
      "alongside Ant-Man and helping rescue her mother from the Quantum Realm. She is among " +
      "those dusted by the Snap and later restored.",
    facts: "The original Wasp, Janet van Dyne, named the Avengers in the comics."
  },
  {
    name: "Falcon",
    alias: "Sam Wilson",
    teams: ["Avengers"],
    category: "Hero",
    created: 1969,
    firstAppearance: "Captain America #117 (1969)",
    creators: ["Stan Lee", "Gene Colan"],
    actors: ["Anthony Mackie"],
    films: [
      "Captain America: The Winter Soldier (2014)", "Avengers: Age of Ultron (2015)",
      "Captain America: Civil War (2016)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    powers: [
      "Winged flight suit with maneuverable mechanical wings",
      "Redwing reconnaissance drone",
      "Expert aerial combatant and marksman",
      "Trained pararescue airman"
    ],
    storyline: "Air Force veteran Sam Wilson becomes the high-flying Falcon and a close " +
      "ally of Captain America. At the end of Endgame, Steve Rogers passes him the shield, " +
      "and Sam takes up the mantle of the new Captain America.",
    facts: "The first African-American superhero in mainstream comics (without 'Black' in his name)."
  },
  {
    name: "Winter Soldier",
    alias: "Bucky Barnes",
    teams: ["Avengers"],
    category: "Anti-Hero",
    created: 1941,
    firstAppearance: "Captain America Comics #1 (1941)",
    creators: ["Joe Simon", "Jack Kirby"],
    actors: ["Sebastian Stan"],
    films: [
      "Captain America: The First Avenger (2011)",
      "Captain America: The Winter Soldier (2014)",
      "Captain America: Civil War (2016)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    powers: [
      "Cybernetic vibranium arm with enhanced strength",
      "Peak human/enhanced physique from HYDRA's serum",
      "Master assassin, marksman and hand-to-hand fighter",
      "Accelerated healing"
    ],
    storyline: "Steve Rogers's childhood friend Bucky Barnes is presumed dead in WWII but " +
      "is captured and brainwashed by HYDRA into the deadly Winter Soldier. Eventually freed " +
      "from his conditioning, he reclaims his identity and fights as a hero.",
    facts: "His arm was upgraded to vibranium by Wakandan scientists."
  },
  {
    name: "Star-Lord",
    alias: "Peter Quill",
    teams: ["Guardians of the Galaxy"],
    category: "Hero",
    created: 1976,
    firstAppearance: "Marvel Preview #4 (1976)",
    creators: ["Steve Englehart", "Steve Gan"],
    actors: ["Chris Pratt"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Thor: Love and Thunder (2022)", "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Half-Celestial heritage granting latent cosmic power",
      "Skilled pilot, marksman and improviser",
      "Jet boots and a helmet with life support",
      "Charismatic leader of the Guardians"
    ],
    storyline: "Abducted from Earth as a boy, Peter Quill grows up among space pirates and " +
      "becomes the roguish Star-Lord, leader of the Guardians of the Galaxy. He discovers " +
      "his father is the Celestial Ego and chooses found family over godhood.",
    facts: "His attachment to a 1980s mixtape drives much of the films' soundtrack."
  },
  {
    name: "Gamora",
    alias: "Gamora",
    teams: ["Guardians of the Galaxy"],
    category: "Hero",
    created: 1975,
    firstAppearance: "Strange Tales #180 (1975)",
    creators: ["Jim Starlin"],
    actors: ["Zoe Saldaña"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Superhuman strength, speed and durability from cybernetic enhancement",
      "Master assassin and martial artist",
      "Expert with bladed weapons, especially her sword Godslayer"
    ],
    storyline: "Adopted and weaponized by Thanos as 'the deadliest woman in the galaxy,' " +
      "Gamora rebels against him to join the Guardians. Thanos sacrifices her on Vormir for " +
      "the Soul Stone, though an alternate-timeline version of her survives.",
    facts: "Known as the last of her species, the Zen-Whoberi."
  },
  {
    name: "Drax",
    alias: "Drax the Destroyer",
    teams: ["Guardians of the Galaxy"],
    category: "Hero",
    created: 1973,
    firstAppearance: "The Invincible Iron Man #55 (1973)",
    creators: ["Jim Starlin", "Mike Friedrich"],
    actors: ["Dave Bautista"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Superhuman strength and durability",
      "Skilled warrior with knives",
      "High pain tolerance and resilience"
    ],
    storyline: "After Ronan and Thanos murder his family, Drax dedicates his life to " +
      "revenge. He joins the Guardians and finds a new family, his literal-minded humor " +
      "and fierce loyalty making him a beloved member of the team.",
    facts: "He takes everything literally — metaphors fly right past him."
  },
  {
    name: "Rocket",
    alias: "Rocket Raccoon",
    teams: ["Guardians of the Galaxy"],
    category: "Hero",
    created: 1976,
    firstAppearance: "Marvel Preview #7 (1976)",
    creators: ["Bill Mantlo", "Keith Giffen"],
    actors: ["Bradley Cooper (voice)"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Genius-level engineer and weapons builder",
      "Expert marksman and tactician",
      "Enhanced agility and heightened animal senses"
    ],
    storyline: "A cybernetically enhanced raccoon created through cruel experiments by the " +
      "High Evolutionary, Rocket is a sardonic bounty hunter who finds family among the " +
      "Guardians. Vol. 3 reveals his traumatic origin and his bond with the otter Lylla.",
    facts: "He hates being called a 'rodent' or a 'raccoon.'"
  },
  {
    name: "Groot",
    alias: "Groot",
    teams: ["Guardians of the Galaxy"],
    category: "Hero",
    created: 1960,
    firstAppearance: "Tales to Astonish #13 (1960)",
    creators: ["Stan Lee", "Larry Lieber", "Jack Kirby"],
    actors: ["Vin Diesel (voice)"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Sentient tree-like physiology with regeneration",
      "Can grow, extend and reshape his limbs",
      "Superhuman strength and durability",
      "Regrows entirely from a cutting"
    ],
    storyline: "A noble tree-like being who can only say 'I am Groot,' Groot sacrifices " +
      "himself to save the Guardians, then regrows from a sapling as Baby Groot and matures " +
      "across the films.",
    facts: "Despite saying only three words, Rocket understands him perfectly."
  },
  {
    name: "Nebula",
    alias: "Nebula",
    teams: ["Guardians of the Galaxy"],
    category: "Anti-Hero",
    created: 1985,
    firstAppearance: "The Avengers #257 (1985)",
    creators: ["Roger Stern", "John Buscema"],
    actors: ["Karen Gillan"],
    films: [
      "Guardians of the Galaxy (2014)", "Guardians of the Galaxy Vol. 2 (2017)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Guardians of the Galaxy Vol. 3 (2023)"
    ],
    powers: [
      "Extensive cybernetic enhancements granting strength and durability",
      "Interchangeable mechanical body parts and weapons",
      "Skilled assassin and combatant"
    ],
    storyline: "Thanos's adopted daughter, brutally rebuilt piece by piece each time she " +
      "lost to her sister Gamora, Nebula slowly turns from villain to hero. She plays a key " +
      "role in the Avengers' time heist and helps defeat her father.",
    facts: "She confronts and kills a past version of herself in Endgame."
  },
  {
    name: "Wolverine",
    alias: "Logan / James Howlett",
    teams: ["X-Men"],
    category: "Anti-Hero",
    created: 1974,
    firstAppearance: "The Incredible Hulk #180-181 (1974)",
    creators: ["Roy Thomas", "Len Wein", "John Romita Sr."],
    actors: ["Hugh Jackman"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men Origins: Wolverine (2009)", "The Wolverine (2013)",
      "X-Men: Days of Future Past (2014)", "Logan (2017)", "Deadpool & Wolverine (2024)"
    ],
    powers: [
      "Accelerated healing factor that regenerates from nearly any wound",
      "Adamantium-laced skeleton and retractable claws",
      "Heightened animal senses",
      "Greatly slowed aging"
    ],
    storyline: "A nearly immortal mutant with a violent past and fragmented memories, " +
      "Logan is bonded with indestructible adamantium by the Weapon X program. Gruff but " +
      "honorable, he becomes a cornerstone of the X-Men and, in Logan, dies protecting the " +
      "next generation of mutants.",
    facts: "Hugh Jackman played the role across 24 years, a record for a superhero actor."
  },
  {
    name: "Professor X",
    alias: "Charles Xavier",
    teams: ["X-Men"],
    category: "Hero",
    created: 1963,
    firstAppearance: "The X-Men #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Patrick Stewart", "James McAvoy"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)", "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)", "Logan (2017)", "Dark Phoenix (2019)"
    ],
    powers: [
      "World's most powerful telepath",
      "Mind reading, mental control and psychic projection",
      "Amplifies his reach with the machine Cerebro",
      "Brilliant geneticist and teacher"
    ],
    storyline: "Founder of the X-Men and the Xavier School for Gifted Youngsters, Charles " +
      "Xavier champions peaceful coexistence between humans and mutants. His idealism is " +
      "constantly tested by his friend-turned-rival Magneto.",
    facts: "Cerebro lets him sense and locate every mind on the planet."
  },
  {
    name: "Magneto",
    alias: "Erik Lehnsherr / Max Eisenhardt",
    teams: ["Brotherhood of Mutants", "X-Men"],
    category: "Villain",
    created: 1963,
    firstAppearance: "The X-Men #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Ian McKellen", "Michael Fassbender"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)", "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Generation and control of magnetic fields",
      "Manipulation of all metal, including iron in blood",
      "Force fields, flight and electromagnetic pulses"
    ],
    storyline: "A Holocaust survivor whose trauma convinces him mutants must dominate or be " +
      "destroyed, Erik Lehnsherr becomes Magneto, the militant counterpoint to Xavier's " +
      "dream. He drifts between villain and reluctant ally throughout the saga.",
    facts: "His experiences in a concentration camp shaped his entire worldview."
  },
  {
    name: "Storm",
    alias: "Ororo Munroe",
    teams: ["X-Men"],
    category: "Hero",
    created: 1975,
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    creators: ["Len Wein", "Dave Cockrum"],
    actors: ["Halle Berry", "Alexandra Shipp"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Control over weather — wind, lightning, rain and temperature",
      "Flight by riding wind currents",
      "Heightened senses attuned to atmospheric changes"
    ],
    storyline: "Orphaned in Cairo and once worshipped as a goddess, Ororo Munroe joins the " +
      "X-Men as Storm. A natural leader, she balances her immense elemental power with deep " +
      "compassion and at times leads the team.",
    facts: "She is claustrophobic, a fear rooted in being buried as a child."
  },
  {
    name: "Cyclops",
    alias: "Scott Summers",
    teams: ["X-Men"],
    category: "Hero",
    created: 1963,
    firstAppearance: "The X-Men #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["James Marsden", "Tye Sheridan"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Emits powerful optic force beams from his eyes",
      "Requires a ruby-quartz visor to control his blasts",
      "Master field tactician and strategist"
    ],
    storyline: "Field leader of the X-Men, Scott Summers cannot control the destructive " +
      "energy beams from his eyes without special eyewear. Disciplined and loyal, his life " +
      "is intertwined with Jean Grey's tragic arc.",
    facts: "He cannot close his eyes to rest without his visor neutralizing the beams."
  },
  {
    name: "Jean Grey",
    alias: "Jean Grey / Phoenix",
    teams: ["X-Men"],
    category: "Hero",
    created: 1963,
    firstAppearance: "The X-Men #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Famke Janssen", "Sophie Turner"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Powerful telepathy and telekinesis",
      "As the Phoenix, near-limitless cosmic power",
      "Energy manipulation and matter disintegration"
    ],
    storyline: "One of the most powerful mutants alive, Jean Grey becomes host to the cosmic " +
      "Phoenix Force, which amplifies her abilities to godlike levels and threatens to " +
      "consume her. Her struggle to control it defines the Dark Phoenix Saga.",
    facts: "The Dark Phoenix Saga is one of the most acclaimed storylines in comics."
  },
  {
    name: "Deadpool",
    alias: "Wade Wilson",
    teams: ["X-Force"],
    category: "Anti-Hero",
    created: 1991,
    firstAppearance: "The New Mutants #98 (1991)",
    creators: ["Fabian Nicieza", "Rob Liefeld"],
    actors: ["Ryan Reynolds"],
    films: [
      "X-Men Origins: Wolverine (2009)", "Deadpool (2016)",
      "Deadpool 2 (2018)", "Deadpool & Wolverine (2024)"
    ],
    powers: [
      "Regenerative healing factor derived from Weapon X experiments",
      "Master assassin, swordsman and marksman",
      "Near-immortality and slowed aging",
      "Breaks the fourth wall, aware he is in a story"
    ],
    storyline: "Mercenary Wade Wilson undergoes a rogue experiment that cures his cancer but " +
      "leaves him disfigured and nearly immortal. As the wisecracking 'Merc with a Mouth,' " +
      "he pursues revenge and redemption while constantly mocking the genre itself.",
    facts: "He's the only character who knows he's in a comic book or movie."
  },
  {
    name: "Daredevil",
    alias: "Matt Murdock",
    teams: ["Defenders"],
    category: "Hero",
    created: 1964,
    firstAppearance: "Daredevil #1 (1964)",
    creators: ["Stan Lee", "Bill Everett"],
    actors: ["Ben Affleck", "Charlie Cox"],
    films: [
      "Daredevil (2003)", "Spider-Man: No Way Home (2021)",
      "Daredevil (TV, 2015-2018)", "Daredevil: Born Again (TV, 2025)"
    ],
    powers: [
      "Superhumanly heightened remaining senses after losing his sight",
      "'Radar sense' that maps his surroundings",
      "Master martial artist and acrobat",
      "Uses a billy-club/grapple as signature weapon"
    ],
    storyline: "Blinded as a boy by radioactive chemicals that heightened his other senses, " +
      "lawyer Matt Murdock defends Hell's Kitchen by day in court and by night as the " +
      "vigilante Daredevil, the Man Without Fear.",
    facts: "His radar sense lets him 'see' better than most sighted people."
  },
  {
    name: "The Punisher",
    alias: "Frank Castle",
    teams: [],
    category: "Anti-Hero",
    created: 1974,
    firstAppearance: "The Amazing Spider-Man #129 (1974)",
    creators: ["Gerry Conway", "John Romita Sr.", "Ross Andru"],
    actors: ["Thomas Jane", "Ray Stevenson", "Jon Bernthal"],
    films: [
      "The Punisher (2004)", "Punisher: War Zone (2008)",
      "Daredevil (TV, 2016)", "The Punisher (TV, 2017-2019)"
    ],
    powers: [
      "Elite military training and special-forces tactics",
      "Mastery of firearms, explosives and hand-to-hand combat",
      "Exceptional strategist and tracker",
      "Peak human conditioning (no superpowers)"
    ],
    storyline: "After his family is murdered by mobsters, war veteran Frank Castle wages a " +
      "one-man war on crime as the Punisher, using lethal force against criminals — a brutal " +
      "foil to more merciful heroes.",
    facts: "His skull emblem has become one of comics' most recognizable symbols."
  },
  {
    name: "Captain Marvel",
    alias: "Carol Danvers",
    teams: ["Avengers"],
    category: "Hero",
    created: 1968,
    firstAppearance: "Marvel Super-Heroes #13 (1968)",
    creators: ["Roy Thomas", "Gene Colan"],
    actors: ["Brie Larson"],
    films: [
      "Captain Marvel (2019)", "Avengers: Endgame (2019)", "The Marvels (2023)"
    ],
    powers: [
      "Flight at faster-than-light speeds",
      "Superhuman strength and durability",
      "Absorbs and projects photonic/cosmic energy",
      "Powers gained from the Tesseract's Space Stone energy"
    ],
    storyline: "Air Force pilot Carol Danvers gains cosmic powers in an explosion involving " +
      "the Tesseract, becoming one of the most powerful heroes in the universe. After years " +
      "among the Kree, she rediscovers her humanity and answers the call to fight Thanos.",
    facts: "Nick Fury paged her with a special device just before the Snap."
  },
  {
    name: "Loki",
    alias: "Loki Laufeyson",
    teams: [],
    category: "Anti-Hero",
    created: 1962,
    firstAppearance: "Journey into Mystery #85 (1962)",
    creators: ["Stan Lee", "Larry Lieber", "Jack Kirby"],
    actors: ["Tom Hiddleston"],
    films: [
      "Thor (2011)", "The Avengers (2012)", "Thor: The Dark World (2013)",
      "Thor: Ragnarok (2017)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)", "Loki (TV, 2021-2023)"
    ],
    powers: [
      "Asgardian/Frost Giant physiology with long life and durability",
      "Master of illusion, shapeshifting and sorcery",
      "Genius manipulator and trickster",
      "Skilled knife-fighter"
    ],
    storyline: "The adopted son of Odin and god of mischief, Loki schemes against Thor and " +
      "leads the Chitauri invasion of New York. Over time he edges toward heroism, sacrificing " +
      "himself against Thanos, while a time-displaced variant becomes guardian of the " +
      "multiverse's timelines.",
    facts: "He is secretly a Frost Giant, adopted by Odin as an infant."
  },
  {
    name: "Thanos",
    alias: "Thanos",
    teams: ["Black Order"],
    category: "Villain",
    created: 1973,
    firstAppearance: "The Invincible Iron Man #55 (1973)",
    creators: ["Jim Starlin", "Mike Friedrich"],
    actors: ["Josh Brolin"],
    films: [
      "The Avengers (2012)", "Guardians of the Galaxy (2014)",
      "Avengers: Age of Ultron (2015)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)"
    ],
    powers: [
      "Immense superhuman strength, durability and intellect",
      "Wields the Infinity Gauntlet and its six Infinity Stones",
      "Reality, time, space, soul, mind and power manipulation",
      "Master strategist and warrior"
    ],
    storyline: "The Mad Titan Thanos believes that wiping out half of all life will save the " +
      "universe from overpopulation. Assembling the six Infinity Stones, he succeeds with a " +
      "single snap, only to be undone by the Avengers' time heist and final stand.",
    facts: "His name derives from Thanatos, the Greek personification of death."
  },
  {
    name: "Green Goblin",
    alias: "Norman Osborn",
    teams: [],
    category: "Villain",
    created: 1964,
    firstAppearance: "The Amazing Spider-Man #14 (1964)",
    creators: ["Stan Lee", "Steve Ditko"],
    actors: ["Willem Dafoe"],
    films: [
      "Spider-Man (2002)", "Spider-Man: No Way Home (2021)"
    ],
    powers: [
      "Enhanced strength, reflexes and intellect from the Goblin Formula",
      "Glider for flight and an arsenal of pumpkin bombs",
      "Brilliant but unstable scientist",
      "Cunning, ruthless tactician"
    ],
    storyline: "Industrialist Norman Osborn experiments on himself with an unstable formula, " +
      "gaining power but fracturing his sanity into the murderous Green Goblin — Spider-Man's " +
      "greatest and most personal enemy.",
    facts: "He is responsible for one of comics' most infamous deaths, that of Gwen Stacy."
  },
  {
    name: "Venom",
    alias: "Eddie Brock",
    teams: [],
    category: "Anti-Hero",
    created: 1988,
    firstAppearance: "The Amazing Spider-Man #300 (1988, full)",
    creators: ["David Michelinie", "Todd McFarlane"],
    actors: ["Topher Grace", "Tom Hardy"],
    films: [
      "Spider-Man 3 (2007)", "Venom (2018)",
      "Venom: Let There Be Carnage (2021)", "Venom: The Last Dance (2024)"
    ],
    powers: [
      "Alien symbiote granting shapeshifting and tendrils",
      "Superhuman strength, agility and durability",
      "Immunity to Spider-Man's spider-sense",
      "Regeneration and camouflage"
    ],
    storyline: "Journalist Eddie Brock bonds with an alien symbiote that once rejected " +
      "Spider-Man, becoming the monstrous Venom. The pair's love-hate partnership turns them " +
      "from villain into a 'lethal protector' anti-hero.",
    facts: "The symbiote's weaknesses are fire and high-frequency sound."
  },
  {
    name: "Ultron",
    alias: "Ultron",
    teams: [],
    category: "Villain",
    created: 1968,
    firstAppearance: "The Avengers #54-55 (1968)",
    creators: ["Roy Thomas", "John Buscema"],
    actors: ["James Spader (voice)"],
    films: ["Avengers: Age of Ultron (2015)"],
    powers: [
      "Artificial superintelligence able to copy itself across bodies",
      "Adamantium/vibranium robotic body in the comics",
      "Energy projection and flight",
      "Global network infiltration"
    ],
    storyline: "Created by Tony Stark and Bruce Banner as a global peacekeeping AI, Ultron " +
      "instantly concludes that humanity itself is the threat and must be destroyed, building " +
      "an army of drones and forcing the Avengers to stop his extinction-level plan.",
    facts: "His attempt to build a perfect body instead created the heroic Vision."
  },
  {
    name: "Red Skull",
    alias: "Johann Schmidt",
    teams: ["HYDRA"],
    category: "Villain",
    created: 1941,
    firstAppearance: "Captain America Comics #1 (1941)",
    creators: ["Joe Simon", "Jack Kirby"],
    actors: ["Hugo Weaving", "Ross Marquand"],
    films: [
      "Captain America: The First Avenger (2011)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Enhanced strength from an early Super-Soldier Serum",
      "Brilliant, ruthless strategist",
      "Leader of the terrorist science division HYDRA"
    ],
    storyline: "Nazi officer Johann Schmidt takes a flawed super-soldier serum that leaves " +
      "him with a hideous red skull, then leads HYDRA in pursuit of the Tesseract. Banished " +
      "to Vormir, he becomes the cursed guardian of the Soul Stone.",
    facts: "He is Captain America's WWII arch-nemesis and dark mirror."
  },
  {
    name: "Nick Fury",
    alias: "Nicholas J. Fury",
    teams: ["S.H.I.E.L.D.", "Avengers"],
    category: "Hero",
    created: 1963,
    firstAppearance: "Sgt. Fury and his Howling Commandos #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Samuel L. Jackson"],
    films: [
      "Iron Man (2008)", "Iron Man 2 (2010)", "The Avengers (2012)",
      "Captain America: The Winter Soldier (2014)", "Avengers: Age of Ultron (2015)",
      "Captain Marvel (2019)", "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)", "Secret Invasion (TV, 2023)"
    ],
    powers: [
      "Master spy, strategist and intelligence director",
      "Elite combat and espionage training",
      "Founder and architect of the Avengers Initiative"
    ],
    storyline: "As director of S.H.I.E.L.D., Nick Fury recruits Earth's mightiest heroes " +
      "into the Avengers Initiative, anticipating threats from across the galaxy. The " +
      "secretive spymaster repeatedly steers humanity through its greatest crises.",
    facts: "His pager to Captain Marvel was his last act before dusting in the Snap."
  },
  {
    name: "Bucky's ally: War Machine",
    alias: "James 'Rhodey' Rhodes",
    teams: ["Avengers"],
    category: "Hero",
    created: 1979,
    firstAppearance: "Iron Man #118 (1979)",
    creators: ["David Michelinie", "John Byrne", "Bob Layton"],
    actors: ["Terrence Howard", "Don Cheadle"],
    films: [
      "Iron Man (2008)", "Iron Man 2 (2010)", "Iron Man 3 (2013)",
      "Avengers: Age of Ultron (2015)", "Captain America: Civil War (2016)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)"
    ],
    powers: [
      "Heavily armed War Machine/Iron Patriot armor",
      "Flight, super strength and durability",
      "Integrated heavy weapons and targeting systems",
      "Decorated military pilot and officer"
    ],
    storyline: "Air Force colonel and Tony Stark's best friend, James Rhodes dons a " +
      "militarized version of the Iron Man armor as War Machine. He's paralyzed in the " +
      "Civil War airport battle but continues to serve with Stark-built leg braces.",
    facts: "His armor is the U.S. military's official answer to the Iron Man suit."
  },
  {
    name: "Shang-Chi",
    alias: "Shang-Chi",
    teams: [],
    category: "Hero",
    created: 1973,
    firstAppearance: "Special Marvel Edition #15 (1973)",
    creators: ["Steve Englehart", "Jim Starlin"],
    actors: ["Simu Liu"],
    films: ["Shang-Chi and the Legend of the Ten Rings (2021)"],
    powers: [
      "Greatest martial artist on Earth ('Master of Kung Fu')",
      "Wields the mystical Ten Rings granting energy and longevity",
      "Superhuman reflexes and chi mastery",
      "Expert with countless weapons"
    ],
    storyline: "Raised and trained as an assassin by his father, the immortal warlord Wenwu, " +
      "Shang-Chi flees that life only to be drawn back. He confronts his father, inherits the " +
      "power of the Ten Rings, and joins the wider hero community.",
    facts: "The Ten Rings organization had been teased since the first Iron Man film."
  },
  {
    name: "Ms. Marvel",
    alias: "Kamala Khan",
    teams: ["Avengers"],
    category: "Hero",
    created: 2013,
    firstAppearance: "Captain Marvel #14 (2013); solo in Ms. Marvel #1 (2014)",
    creators: ["Sana Amanat", "Stephen Wacker", "G. Willow Wilson", "Adrian Alphona"],
    actors: ["Iman Vellani"],
    films: ["Ms. Marvel (TV, 2022)", "The Marvels (2023)"],
    powers: [
      "Hard-light constructs and 'embiggening' from a Noor-dimension bangle",
      "Can enlarge fists and create crystalline platforms",
      "Inhuman/mutant heritage",
      "Youthful ingenuity and fan-driven heroism"
    ],
    storyline: "Pakistani-American teenager and superhero superfan Kamala Khan gains powers " +
      "from an ancestral bangle, becoming Ms. Marvel. Inspired by Captain Marvel, she balances " +
      "high school, family and saving Jersey City.",
    facts: "She was Marvel's first Muslim character to headline her own comic."
  },
  {
    name: "Yelena Belova",
    alias: "Yelena Belova",
    teams: ["Thunderbolts"],
    category: "Anti-Hero",
    created: 1999,
    firstAppearance: "Inhumans Vol. 2 #5 (1999)",
    creators: ["Devin Grayson", "J.G. Jones"],
    actors: ["Florence Pugh"],
    films: [
      "Black Widow (2021)", "Hawkeye (TV, 2021)", "Thunderbolts* (2025)"
    ],
    powers: [
      "Elite Red Room training as an assassin and spy",
      "Peak human combat, marksmanship and acrobatics",
      "Tactical and espionage expertise"
    ],
    storyline: "Trained in the same Red Room as Natasha Romanoff, Yelena Belova is freed from " +
      "chemical mind-control and becomes a successor to the Black Widow legacy, eventually " +
      "joining a team of reformed antiheroes.",
    facts: "She shares a sardonic, loving sibling bond with Natasha."
  },
  {
    name: "Fantastic Four: Mr. Fantastic",
    alias: "Reed Richards",
    teams: ["Fantastic Four"],
    category: "Hero",
    created: 1961,
    firstAppearance: "The Fantastic Four #1 (1961)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Ioan Gruffudd", "Miles Teller", "Pedro Pascal"],
    films: [
      "Fantastic Four (2005)", "Fantastic 4: Rise of the Silver Surfer (2007)",
      "Fantastic Four (2015)", "The Fantastic Four: First Steps (2025)"
    ],
    powers: [
      "Elastic body that can stretch, reshape and flatten",
      "Genius-level intellect — one of the smartest minds in the universe",
      "Leadership and scientific innovation"
    ],
    storyline: "Brilliant scientist Reed Richards gains elastic powers after cosmic-ray " +
      "exposure on an experimental spaceflight. He leads the Fantastic Four, Marvel's first " +
      "family, balancing world-saving science with family life.",
    facts: "The Fantastic Four launched the Marvel Age of Comics in 1961."
  },
  {
    name: "The Thing",
    alias: "Ben Grimm",
    teams: ["Fantastic Four"],
    category: "Hero",
    created: 1961,
    firstAppearance: "The Fantastic Four #1 (1961)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Michael Chiklis", "Jamie Bell", "Ebon Moss-Bachrach"],
    films: [
      "Fantastic Four (2005)", "Fantastic 4: Rise of the Silver Surfer (2007)",
      "Fantastic Four (2015)", "The Fantastic Four: First Steps (2025)"
    ],
    powers: [
      "Rocky orange hide granting immense strength and durability",
      "Near-invulnerability",
      "Skilled brawler and pilot"
    ],
    storyline: "Pilot Ben Grimm is transformed by cosmic rays into the rocky, super-strong " +
      "Thing. Though he mourns his monstrous appearance, his loyalty, courage and humor make " +
      "him the heart of the Fantastic Four.",
    facts: "His battle cry, 'It's clobberin' time!', is iconic."
  },
  {
    name: "Silver Surfer",
    alias: "Norrin Radd",
    teams: [],
    category: "Hero",
    created: 1966,
    firstAppearance: "The Fantastic Four #48 (1966)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Doug Jones", "Laurence Fishburne (voice)", "Julia Garner"],
    films: [
      "Fantastic 4: Rise of the Silver Surfer (2007)",
      "The Fantastic Four: First Steps (2025)"
    ],
    powers: [
      "Wields the Power Cosmic — energy manipulation and matter transformation",
      "Flight through space at faster-than-light speed on his board",
      "Near-invulnerability and cosmic awareness"
    ],
    storyline: "To save his homeworld, Norrin Radd becomes the herald of the world-devouring " +
      "Galactus, scouring the cosmos for planets to consume. His conscience reawakens on " +
      "Earth, and he turns against his master.",
    facts: "His surfboard channels a fraction of the Power Cosmic."
  },
  {
    name: "Galactus",
    alias: "Galan",
    teams: [],
    category: "Villain",
    created: 1966,
    firstAppearance: "The Fantastic Four #48 (1966)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Ralph Ineson"],
    films: ["The Fantastic Four: First Steps (2025)"],
    powers: [
      "Cosmic entity of nearly limitless power",
      "Consumes the life energy of entire planets to survive",
      "Reality and matter manipulation on a cosmic scale",
      "Creates heralds imbued with the Power Cosmic"
    ],
    storyline: "A primordial being who survived the previous universe, Galactus must devour " +
      "worlds to sustain himself. Less a villain than a force of nature, his arrival on Earth " +
      "is an apocalyptic event the heroes must avert.",
    facts: "He is one of the oldest and most powerful entities in the Marvel universe."
  },
  {
    name: "Magik",
    alias: "Illyana Rasputin",
    teams: ["New Mutants", "X-Men"],
    category: "Hero",
    created: 1975,
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    creators: ["Len Wein", "Dave Cockrum"],
    actors: ["Anya Taylor-Joy"],
    films: ["The New Mutants (2020)"],
    powers: [
      "Teleportation through her demonic 'Limbo' dimension",
      "Wields the magical Soulsword",
      "Sorcery and limited time manipulation"
    ],
    storyline: "Colossus's younger sister, Illyana is pulled into the hell-dimension Limbo " +
      "and returns as the sorceress Magik, ruler of that realm. She blends mutant power with " +
      "dark magic as a member of the New Mutants.",
    facts: "Her teleportation 'stepping discs' can also move through time."
  },
  {
    name: "Colossus",
    alias: "Piotr Rasputin",
    teams: ["X-Men", "X-Force"],
    category: "Hero",
    created: 1975,
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    creators: ["Len Wein", "Dave Cockrum"],
    actors: ["Daniel Cudmore", "Stefan Kapičić (voice)"],
    films: [
      "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)", "Deadpool (2016)", "Deadpool 2 (2018)"
    ],
    powers: [
      "Transforms his body into organic steel",
      "Immense superhuman strength and near-invulnerability while armored",
      "Skilled hand-to-hand combatant"
    ],
    storyline: "A gentle Russian farm boy turned X-Man, Piotr Rasputin can coat his body in " +
      "organic steel, becoming a near-unbreakable powerhouse. Principled and kind, he tries " +
      "to mentor Deadpool toward heroism.",
    facts: "In his metal form he stands taller and weighs hundreds of pounds more."
  },
  {
    name: "Gambit",
    alias: "Remy LeBeau",
    teams: ["X-Men"],
    category: "Hero",
    created: 1990,
    firstAppearance: "The Uncanny X-Men #266 (1990)",
    creators: ["Chris Claremont", "Jim Lee"],
    actors: ["Taylor Kitsch", "Channing Tatum"],
    films: [
      "X-Men Origins: Wolverine (2009)", "Deadpool & Wolverine (2024)"
    ],
    powers: [
      "Charges objects (especially playing cards) with explosive kinetic energy",
      "Superhuman agility and reflexes",
      "Master thief and staff fighter",
      "Hypnotic charm"
    ],
    storyline: "A Cajun mutant and former thief from New Orleans, Remy LeBeau charges objects " +
      "with kinetic energy and throws them as explosives. A charming rogue, he becomes an " +
      "X-Man and Rogue's great love.",
    facts: "His signature weapon is a deck of explosively charged playing cards."
  },
  {
    name: "Rogue",
    alias: "Anna Marie",
    teams: ["X-Men"],
    category: "Hero",
    created: 1981,
    firstAppearance: "Avengers Annual #10 (1981)",
    creators: ["Chris Claremont", "Michael Golden"],
    actors: ["Anna Paquin"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: Days of Future Past (2014)"
    ],
    powers: [
      "Absorbs memories, powers and life force through skin contact",
      "Can permanently gain abilities (e.g., flight and super strength in comics)",
      "Cannot safely touch others without absorbing them"
    ],
    storyline: "Cursed with the inability to touch anyone without draining them, Rogue joins " +
      "the X-Men seeking control and acceptance. In the comics she long carried Ms. Marvel's " +
      "absorbed powers of flight and strength.",
    facts: "Her power makes physical intimacy a constant, painful challenge."
  },
  {
    name: "Beast",
    alias: "Hank McCoy",
    teams: ["X-Men", "Avengers"],
    category: "Hero",
    created: 1963,
    firstAppearance: "The X-Men #1 (1963)",
    creators: ["Stan Lee", "Jack Kirby"],
    actors: ["Kelsey Grammer", "Nicholas Hoult"],
    films: [
      "X-Men: The Last Stand (2006)", "X-Men: First Class (2011)",
      "X-Men: Days of Future Past (2014)", "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Superhuman strength, agility and speed",
      "Furred, ape-like physiology with prehensile feet",
      "Genius-level scientist and physician"
    ],
    storyline: "Brilliant scientist Hank McCoy is a founding X-Man whose own experiment " +
      "transforms him into the blue-furred, agile Beast. He bridges the worlds of science, " +
      "politics and mutant rights.",
    facts: "He combines the mind of a genius with the body of a powerful beast."
  },
  {
    name: "Nightcrawler",
    alias: "Kurt Wagner",
    teams: ["X-Men"],
    category: "Hero",
    created: 1975,
    firstAppearance: "Giant-Size X-Men #1 (1975)",
    creators: ["Len Wein", "Dave Cockrum"],
    actors: ["Alan Cumming", "Kodi Smit-McPhee"],
    films: [
      "X2 (2003)", "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Teleportation in a puff of brimstone ('BAMF')",
      "Superhuman agility and prehensile tail",
      "Wall-crawling and near-invisibility in shadow"
    ],
    storyline: "A devout, blue-skinned mutant with a demonic appearance but a gentle soul, " +
      "Kurt Wagner uses his teleportation to fight for a world that fears him, embodying the " +
      "X-Men's themes of faith and acceptance.",
    facts: "His teleports are accompanied by the smell of brimstone."
  },
  {
    name: "Mystique",
    alias: "Raven Darkhölme",
    teams: ["Brotherhood of Mutants", "X-Men"],
    category: "Anti-Hero",
    created: 1978,
    firstAppearance: "Ms. Marvel #16 (1978)",
    creators: ["Chris Claremont", "Dave Cockrum"],
    actors: ["Rebecca Romijn", "Jennifer Lawrence"],
    films: [
      "X-Men (2000)", "X2 (2003)", "X-Men: The Last Stand (2006)",
      "X-Men: First Class (2011)", "X-Men: Days of Future Past (2014)",
      "X-Men: Apocalypse (2016)", "Dark Phoenix (2019)"
    ],
    powers: [
      "Shapeshifting into any person, perfectly mimicking appearance and voice",
      "Slowed aging and enhanced agility",
      "Master spy and infiltrator"
    ],
    storyline: "A shapeshifting mutant torn between Xavier's dream and Magneto's militancy, " +
      "Raven uses her powers as a spy and assassin. Her loyalties shift across the saga as she " +
      "wrestles with mutant identity and pride.",
    facts: "Her natural form has blue skin, red hair and yellow eyes."
  },
  {
    name: "Bishop's foe: Apocalypse",
    alias: "En Sabah Nur",
    teams: [],
    category: "Villain",
    created: 1986,
    firstAppearance: "X-Factor #5 (1986)",
    creators: ["Louise Simonson", "Jackson Guice"],
    actors: ["Oscar Isaac"],
    films: ["X-Men: Apocalypse (2016)"],
    powers: [
      "Ancient, near-immortal mutant with vast power",
      "Molecular self-manipulation, size-shifting and energy projection",
      "Technopathy and the ability to empower others (his Horsemen)"
    ],
    storyline: "The first mutant, En Sabah Nur, awakens after millennia believing only the " +
      "strong should survive. He recruits four 'Horsemen' to cleanse the world, forcing the " +
      "X-Men into an apocalyptic battle for humanity's future.",
    facts: "He is regarded as one of the oldest mutants in existence."
  },
  {
    name: "Okoye",
    alias: "Okoye",
    teams: ["Dora Milaje"],
    category: "Hero",
    created: 2016,
    firstAppearance: "Adapted from Black Panther lore; MCU debut 2016",
    creators: ["Based on characters by Stan Lee & Jack Kirby"],
    actors: ["Danai Gurira"],
    films: [
      "Captain America: Civil War (2016)", "Black Panther (2018)",
      "Avengers: Infinity War (2018)", "Avengers: Endgame (2019)",
      "Black Panther: Wakanda Forever (2022)"
    ],
    powers: [
      "Elite warrior and general of the Dora Milaje",
      "Master of the vibranium spear and hand-to-hand combat",
      "Unshakable loyalty and tactical brilliance"
    ],
    storyline: "General of Wakanda's all-female special forces, the Dora Milaje, Okoye is " +
      "fiercely loyal to the throne and nation. She navigates coups, war and grief while " +
      "defending Wakanda's people and ideals.",
    facts: "She wields a vibranium spear and disdains firearms as 'primitive.'"
  },
  {
    name: "Shuri",
    alias: "Shuri",
    teams: [],
    category: "Hero",
    created: 2005,
    firstAppearance: "Black Panther Vol. 4 #2 (2005)",
    creators: ["Reginald Hudlin", "John Romita Jr."],
    actors: ["Letitia Wright"],
    films: [
      "Black Panther (2018)", "Avengers: Infinity War (2018)",
      "Avengers: Endgame (2019)", "Black Panther: Wakanda Forever (2022)"
    ],
    powers: [
      "Genius inventor — designs Wakanda's vibranium technology",
      "Later takes up the heart-shaped herb's enhancements as Black Panther",
      "Skilled combatant with energy gauntlets"
    ],
    storyline: "T'Challa's younger sister and Wakanda's chief scientist, Shuri engineers its " +
      "most advanced technology. After her brother's death she synthesizes a new heart-shaped " +
      "herb and takes up the mantle of the Black Panther.",
    facts: "She is widely considered one of the smartest people in the MCU."
  }
];
