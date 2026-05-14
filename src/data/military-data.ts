import type { CountryMilitaryData, MilitaryBranch } from "@/src/types/military";

// ─── United States ──────────────────────────────────────────────────────────

const usBranches: MilitaryBranch[] = [
  {
    id: "army",
    name: "Army",
    overview:
      "The U.S. Army is the largest branch of the U.S. military, responsible for land-based operations. With approximately 480,000 active-duty soldiers, it offers a wide range of career specializations from combat roles to engineering, medicine, intelligence, and logistics.",
    eligibilitySummary:
      "Generally: U.S. citizen or permanent resident, 17–42 years old, high school diploma or GED, ASVAB score requirements vary by MOS (Military Occupational Specialty). Medical standards apply. Always verify current requirements with an official recruiter.",
    trainingSummary:
      "Basic Combat Training (BCT) lasts approximately 10 weeks at Fort Jackson, Fort Leonard Wood, or other installations. After BCT, soldiers attend Advanced Individual Training (AIT) for their specific MOS.",
    careerPaths: ["Infantry", "Intelligence", "Engineering", "Medical", "Logistics", "Signal/Cyber", "Aviation", "Finance & Administration", "Military Police", "Special Forces"],
    considerations: [
      "Minimum enlistment is typically 2–4 years active duty",
      "ASVAB score determines which MOS options are available to you",
      "Physical fitness standards must be met and maintained",
      "Background investigation required for security clearances",
      "Deployments are possible during service",
      "GI Bill education benefits available after service",
    ],
    bases: [
      { id: "fort-liberty", name: "Fort Liberty", country: "US", city: "Fayetteville", region: "North Carolina", latitude: 35.1408, longitude: -79.0060, branchRelevance: "Home of the 82nd Airborne Division and U.S. Army Special Operations Command" },
      { id: "fort-campbell", name: "Fort Campbell", country: "US", city: "Clarksville", region: "Tennessee/Kentucky", latitude: 36.6725, longitude: -87.4747, branchRelevance: "Home of the 101st Airborne Division (Air Assault)" },
      { id: "fort-jackson", name: "Fort Jackson", country: "US", city: "Columbia", region: "South Carolina", latitude: 33.9800, longitude: -80.9500, branchRelevance: "Primary U.S. Army Basic Combat Training location" },
      { id: "fort-hood", name: "Fort Cavazos", country: "US", city: "Killeen", region: "Texas", latitude: 31.1348, longitude: -97.7799, branchRelevance: "Home of III Corps and one of the largest U.S. military posts" },
      { id: "west-point", name: "West Point (USMA)", country: "US", city: "West Point", region: "New York", latitude: 41.3912, longitude: -73.9558, branchRelevance: "U.S. Military Academy — officer commissioning" },
    ],
  },
  {
    id: "navy",
    name: "Navy",
    overview:
      "The U.S. Navy operates at sea, in the air, and ashore to project power globally. With approximately 347,000 active-duty sailors, it offers careers ranging from nuclear engineering to aviation, special operations, cyber, and medicine.",
    eligibilitySummary:
      "Generally: U.S. citizen or permanent resident, 17–41 years old, high school diploma or GED, ASVAB score requirements vary by rating. Swimming proficiency required. Medical and physical standards apply.",
    trainingSummary:
      "Basic Training (Boot Camp) is approximately 7–9 weeks at Recruit Training Command Great Lakes (RTC Great Lakes) in Illinois. After boot camp, sailors attend 'A School' for their specific rating.",
    careerPaths: ["Aviation", "Submarine Service", "Surface Warfare", "SEALs / Special Operations", "Nuclear Engineering", "Medical/Dental", "Cyber/Information Warfare", "Intelligence", "Logistics & Supply"],
    considerations: [
      "Sea duty means time away from home, often on deployments of 6–9 months",
      "Nuclear field offers significant bonuses and specialized training",
      "Physical fitness and swimming requirements are strictly enforced",
      "ASVAB scores determine rating (job) options",
      "Some ratings require security clearances",
    ],
    bases: [
      { id: "norfolk-naval", name: "Naval Station Norfolk", country: "US", city: "Norfolk", region: "Virginia", latitude: 36.9453, longitude: -76.3209, branchRelevance: "World's largest naval station; home port for the U.S. Atlantic Fleet" },
      { id: "ns-san-diego", name: "Naval Base San Diego", country: "US", city: "San Diego", region: "California", latitude: 32.6890, longitude: -117.1344, branchRelevance: "Major Pacific Fleet installation and home to numerous ships" },
      { id: "rtc-great-lakes", name: "RTC Great Lakes", country: "US", city: "North Chicago", region: "Illinois", latitude: 42.2990, longitude: -87.8436, branchRelevance: "The only U.S. Navy Boot Camp" },
      { id: "ns-annapolis", name: "U.S. Naval Academy", country: "US", city: "Annapolis", region: "Maryland", latitude: 38.9832, longitude: -76.4844, branchRelevance: "Officer commissioning source for the Navy and Marine Corps" },
    ],
  },
  {
    id: "marine-corps",
    name: "Marine Corps",
    overview:
      "The U.S. Marine Corps is an expeditionary fighting force specializing in rapid deployment and amphibious operations. With approximately 177,000 active-duty Marines, it is known for its demanding physical and mental standards and tight-knit culture.",
    eligibilitySummary:
      "Generally: U.S. citizen or permanent resident, 17–29 years old, high school diploma required (GEDs accepted in limited cases), ASVAB score requirements apply. Physical fitness standards are among the most demanding of all branches.",
    trainingSummary:
      "Marine Corps Recruit Training (Boot Camp) is 13 weeks — one of the longest in the U.S. military — at MCRD Parris Island (East Coast recruits) or MCRD San Diego (West Coast recruits). Officers attend The Basic School in Quantico, VA.",
    careerPaths: ["Infantry", "Aviation", "Intelligence", "Logistics", "Communications", "Special Operations (Raiders)", "Artillery", "Combat Engineering", "Legal/Administrative"],
    considerations: [
      "Widely considered the most physically demanding branch to join",
      "Age limit is lower than other branches (typically 29 for enlisted)",
      "Strong emphasis on culture, tradition, and esprit de corps",
      "Combat roles are closely tied to unit deployment cycles",
      "Close partnership with the Navy for amphibious operations",
    ],
    bases: [
      { id: "mcrd-parris-island", name: "MCRD Parris Island", country: "US", city: "Port Royal", region: "South Carolina", latitude: 32.3543, longitude: -80.6832, branchRelevance: "East Coast Marine Corps Recruit Training (Boot Camp)" },
      { id: "mcrd-san-diego", name: "MCRD San Diego", country: "US", city: "San Diego", region: "California", latitude: 32.7358, longitude: -117.1968, branchRelevance: "West Coast Marine Corps Recruit Training (Boot Camp)" },
      { id: "camp-lejeune", name: "Camp Lejeune", country: "US", city: "Jacksonville", region: "North Carolina", latitude: 34.6681, longitude: -77.3374, branchRelevance: "Major Marine Corps base; home of II Marine Expeditionary Force" },
      { id: "quantico", name: "MCB Quantico", country: "US", city: "Quantico", region: "Virginia", latitude: 38.5215, longitude: -77.3097, branchRelevance: "Officer training, FBI Academy, and Marine Corps University" },
    ],
  },
  {
    id: "air-force",
    name: "Air Force",
    overview:
      "The U.S. Air Force is responsible for aerial warfare, global strike, airlift, and space operations. With approximately 329,000 active-duty airmen, it offers highly technical career fields and is known for a relatively comfortable quality of life compared to other branches.",
    eligibilitySummary:
      "Generally: U.S. citizen or permanent resident, 17–39 years old, high school diploma required (no GED for most career fields), ASVAB score requirements vary by Air Force Specialty Code (AFSC). Medical standards apply.",
    trainingSummary:
      "Basic Military Training (BMT) is approximately 7.5 weeks at Lackland AFB in San Antonio, Texas. After BMT, airmen attend Technical Training School for their specific AFSC.",
    careerPaths: ["Pilot / Aircrew", "Cyber Operations", "Intelligence", "Space Operations", "Logistics & Supply Chain", "Medical/Health Care", "Security Forces", "Maintenance & Engineering", "Special Tactics", "Communications"],
    considerations: [
      "Highly competitive career field selection based on ASVAB scores",
      "Many roles are based on large, modern installations",
      "Technical training length varies significantly by career field (weeks to over a year)",
      "Fitness standards are enforced throughout service but are generally considered achievable",
      "Education and training opportunities are significant benefits",
    ],
    bases: [
      { id: "lackland-afb", name: "Lackland AFB (JBSA)", country: "US", city: "San Antonio", region: "Texas", latitude: 29.3843, longitude: -98.6178, branchRelevance: "Basic Military Training (BMT) location for all Air Force enlistees" },
      { id: "peterson-sfs", name: "Peterson SFS", country: "US", city: "Colorado Springs", region: "Colorado", latitude: 38.8199, longitude: -104.7008, branchRelevance: "NORAD and U.S. Northern Command HQ" },
      { id: "edwards-afb", name: "Edwards AFB", country: "US", city: "Kern County", region: "California", latitude: 34.9050, longitude: -117.8836, branchRelevance: "Air Force Test Center and test pilot school" },
      { id: "langley-afb", name: "Langley AFB (JBLE)", country: "US", city: "Hampton", region: "Virginia", latitude: 37.0825, longitude: -76.3576, branchRelevance: "Air Combat Command HQ and F-22 Raptor operations" },
      { id: "eglin-afb", name: "Eglin AFB", country: "US", city: "Valparaiso", region: "Florida", latitude: 30.4832, longitude: -86.5254, branchRelevance: "Air Force Materiel Command; largest Air Force base by area" },
    ],
  },
  {
    id: "space-force",
    name: "Space Force",
    overview:
      "The U.S. Space Force (USSF), established in 2019, is the newest and smallest branch of the U.S. military. It focuses on organizing, training, and equipping space forces for operations in space and to support joint military operations.",
    eligibilitySummary:
      "Generally: U.S. citizen, 17–39 years old, high school diploma required. Many Space Force roles require technical aptitude. ASVAB and additional testing requirements apply. Security clearances are often required.",
    trainingSummary:
      "Enlisted Guardians complete Basic Military Training (BMT) at Lackland AFB (same as Air Force). Technical training varies by specialty. Many Space Force roles involve significant on-the-job training at operational units.",
    careerPaths: ["Space Operations", "Intelligence", "Cyber Operations", "Satellite Communications", "Engineering", "Space Systems Acquisition", "Electronic Warfare"],
    considerations: [
      "The smallest U.S. military branch — highly selective",
      "Strong emphasis on technical and STEM backgrounds",
      "Many positions require Top Secret / SCI security clearances",
      "Close collaboration with Air Force and other DoD organizations",
      "Career field options are more limited than larger branches but growing",
    ],
    bases: [
      { id: "schriever-sfs", name: "Schriever SFS", country: "US", city: "Colorado Springs", region: "Colorado", latitude: 38.7997, longitude: -104.5336, branchRelevance: "Primary Space Force operational center for satellite command and control" },
      { id: "vandenberg-sfs", name: "Vandenberg SFS", country: "US", city: "Lompoc", region: "California", latitude: 34.7378, longitude: -120.5622, branchRelevance: "Primary launch facility for military satellites and rockets" },
      { id: "patrick-sfs", name: "Patrick SFS", country: "US", city: "Brevard County", region: "Florida", latitude: 28.2350, longitude: -80.6020, branchRelevance: "Space launch operations on the East Coast; Cape Canaveral area" },
    ],
  },
  {
    id: "coast-guard",
    name: "Coast Guard",
    overview:
      "The U.S. Coast Guard is a unique branch that operates under the Department of Homeland Security during peacetime and can transfer to the Department of the Navy during wartime. It focuses on maritime law enforcement, search and rescue, port security, and environmental protection.",
    eligibilitySummary:
      "Generally: U.S. citizen or permanent resident, 17–31 years old, high school diploma or GED, ASVAB score requirements apply. Swim qualifications required. Medical standards apply.",
    trainingSummary:
      "Coast Guard Basic Training is approximately 8 weeks at Training Center Cape May in New Jersey. After basic training, Guardians attend 'A School' for their specific rating.",
    careerPaths: ["Maritime Enforcement", "Search and Rescue", "Aviation", "Cyber", "Intelligence", "Engineering", "Port Security", "Environmental Protection"],
    considerations: [
      "Smallest of the five armed services",
      "Unique combination of law enforcement and military missions",
      "Opportunities range from small boat operations to helicopter aviation",
      "Often stationed on the coast or waterways",
      "Can be federalized and work alongside the Navy in wartime",
    ],
    bases: [
      { id: "tccp-may", name: "Training Center Cape May", country: "US", city: "Cape May", region: "New Jersey", latitude: 38.9601, longitude: -74.9065, branchRelevance: "Only U.S. Coast Guard boot camp" },
      { id: "uscg-hq", name: "USCG Headquarters", country: "US", city: "Washington", region: "D.C.", latitude: 38.8653, longitude: -77.0169, branchRelevance: "Coast Guard command and administration" },
    ],
  },
];

// ─── United Kingdom ──────────────────────────────────────────────────────────

const ukBranches: MilitaryBranch[] = [
  {
    id: "british-army",
    name: "British Army",
    overview:
      "The British Army is the principal land warfare force of the United Kingdom. With approximately 80,000 regular soldiers, it serves across the globe in roles from peacekeeping to high-intensity conflict.",
    eligibilitySummary:
      "Generally: British citizen, Commonwealth citizen, or Irish citizen; 16–33 years old (varies by role); required to pass the British Army Recruit Battery (BARB) test and medical. Always verify current requirements with an official source.",
    trainingSummary:
      "Phase 1 basic training is 14 weeks at ATR Pirbright, ATR Winchester, or ATR Lichfield. Phase 2 is trade/role-specific training. Officers attend Sandhurst (44 weeks).",
    careerPaths: ["Infantry", "Royal Armoured Corps", "Royal Engineers", "Signals", "Intelligence Corps", "Army Air Corps", "Royal Army Medical Corps", "Special Forces (SAS support)"],
    considerations: [
      "Commonwealth citizens may be eligible — verify current immigration rules",
      "Physical fitness requirements are challenging and strictly measured",
      "Commitment length varies by role",
      "Regular and Army Reserve options available",
    ],
    bases: [
      { id: "catterick-garrison", name: "Catterick Garrison", country: "GB", city: "Catterick", region: "North Yorkshire", latitude: 54.3751, longitude: -1.7085, branchRelevance: "Largest British Army base; home of the 4th Infantry Brigade" },
      { id: "aldershot", name: "Aldershot Garrison", country: "GB", city: "Aldershot", region: "Hampshire", latitude: 51.2490, longitude: -0.7619, branchRelevance: "Historic home of the British Army; major training centre" },
      { id: "sandhurst", name: "Royal Military Academy Sandhurst", country: "GB", city: "Sandhurst", region: "Berkshire", latitude: 51.3537, longitude: -0.7601, branchRelevance: "British Army officer training commissioning course" },
    ],
  },
  {
    id: "royal-navy",
    name: "Royal Navy",
    overview:
      "The Royal Navy is the senior service of the United Kingdom's armed forces, with a history spanning over 500 years. It operates surface ships, submarines, and naval aviation worldwide.",
    eligibilitySummary:
      "Generally: British citizen, Commonwealth citizen, or Irish citizen; 16–36 years old (varies by role); must pass the Royal Navy Recruiting Test (RT). Medical and fitness standards apply.",
    trainingSummary:
      "Phase 1 initial naval training is 10 weeks at HMS Raleigh in Cornwall. Phase 2 is branch/trade specific. Officers attend Britannia Royal Naval College (BRNC) in Dartmouth.",
    careerPaths: ["Warfare Officer", "Engineering", "Submarine Service", "Fleet Air Arm (Aviation)", "Royal Marines (Commando)", "Medical", "Logistics", "Intelligence"],
    considerations: [
      "Sea service involves extended periods away from home",
      "Submarine service offers additional pay and career opportunities",
      "Some roles require security clearances",
      "Royal Marines are a core component of the Royal Navy",
    ],
    bases: [
      { id: "portsmouth-naval", name: "HMNB Portsmouth", country: "GB", city: "Portsmouth", region: "Hampshire", latitude: 50.7994, longitude: -1.1113, branchRelevance: "Primary Royal Navy base; home of the aircraft carrier HMS Queen Elizabeth" },
      { id: "devonport", name: "HMNB Devonport", country: "GB", city: "Plymouth", region: "Devon", latitude: 50.3714, longitude: -4.1743, branchRelevance: "Western Fleet base; submarine and surface ship home port" },
      { id: "hms-raleigh", name: "HMS Raleigh", country: "GB", city: "Torpoint", region: "Cornwall", latitude: 50.3782, longitude: -4.2009, branchRelevance: "Royal Navy initial training establishment (Phase 1)" },
    ],
  },
  {
    id: "raf",
    name: "Royal Air Force",
    overview:
      "The Royal Air Force (RAF) is the air warfare service of the UK Armed Forces, founded in 1918. It operates combat aircraft, transport, surveillance, and support roles globally.",
    eligibilitySummary:
      "Generally: British citizen, Commonwealth citizen, or Irish citizen; 16–37 years old (varies by role); must pass the RAF Airman Selection Test (AST). Medical and fitness standards apply.",
    trainingSummary:
      "Phase 1 basic training is 9 weeks at RAF Halton. Phase 2 is trade/role-specific. Officers attend the RAF College Cranwell for a 30-week Initial Officer Training course.",
    careerPaths: ["Pilot", "Weapons Systems Operator", "Engineering", "Intelligence", "Cyber", "Logistics", "RAF Regiment (Force Protection)", "Medical", "Communications"],
    considerations: [
      "Pilot selection is highly competitive",
      "Many roles require significant technical aptitude",
      "Overseas deployments are common",
      "RAF provides good quality-of-life infrastructure on stations",
    ],
    bases: [
      { id: "raf-brize-norton", name: "RAF Brize Norton", country: "GB", city: "Carterton", region: "Oxfordshire", latitude: 51.7500, longitude: -1.5800, branchRelevance: "Largest RAF station; hub for strategic air transport and air-to-air refuelling" },
      { id: "raf-lossiemouth", name: "RAF Lossiemouth", country: "GB", city: "Lossiemouth", region: "Moray", latitude: 57.7050, longitude: -3.3392, branchRelevance: "QRA (Quick Reaction Alert) station for northern UK; home of Typhoon squadrons" },
      { id: "raf-cranwell", name: "RAF Cranwell", country: "GB", city: "Cranwell", region: "Lincolnshire", latitude: 53.0306, longitude: -0.4905, branchRelevance: "RAF College — officer training commissioning" },
    ],
  },
];

// ─── Canada ──────────────────────────────────────────────────────────────────

const canadaBranches: MilitaryBranch[] = [
  {
    id: "canadian-army",
    name: "Canadian Army",
    overview:
      "The Canadian Army is the land component of the Canadian Armed Forces. It fields Regular Force and Reserve Force soldiers for domestic and international operations, including NATO commitments and UN peacekeeping missions.",
    eligibilitySummary:
      "Generally: Canadian citizen or permanent resident, 17 years or older, Canadian Forces Aptitude Test (CFAT) required. Medical and physical fitness standards apply. Verify current requirements at canada.ca/military.",
    trainingSummary:
      "Basic Military Qualification (BMQ) is 10 weeks. Followed by Basic Military Qualification – Land (BMQ-L) for land operations. Officers attend the Canadian Forces Officer Candidate School (CFOCS).",
    careerPaths: ["Infantry", "Armour", "Artillery", "Combat Engineering", "Signals", "Intelligence", "Logistics", "Medical", "Military Police"],
    considerations: [
      "Both Regular Force (full-time) and Primary Reserve (part-time) options available",
      "Bilingual (English and French) service expected in many roles",
      "Permanent residents may be eligible — verify current policies",
      "Physical fitness testing includes a walk/run test and plank hold",
    ],
    bases: [
      { id: "cfb-petawawa", name: "CFB Petawawa", country: "CA", city: "Petawawa", region: "Ontario", latitude: 45.9534, longitude: -77.2990, branchRelevance: "Home of the 2nd Canadian Division and key Army training and operations hub" },
      { id: "cfb-edmonton", name: "CFB Edmonton", country: "CA", city: "Edmonton", region: "Alberta", latitude: 53.5644, longitude: -113.4610, branchRelevance: "Home of 1 Canadian Mechanized Brigade Group" },
      { id: "cfb-gagetown", name: "CFB Gagetown", country: "CA", city: "Oromocto", region: "New Brunswick", latitude: 45.8503, longitude: -66.4307, branchRelevance: "Major Army training area and Land Force Atlantic Area HQ" },
    ],
  },
  {
    id: "royal-canadian-navy",
    name: "Royal Canadian Navy",
    overview:
      "The Royal Canadian Navy (RCN) is the naval component of the Canadian Armed Forces, responsible for maritime security in Canadian waters and contributing to NATO and allied operations globally.",
    eligibilitySummary:
      "Generally: Canadian citizen or permanent resident, 17 years or older, CFAT required. Physical fitness and medical standards apply. Some roles require swimming ability.",
    trainingSummary:
      "Basic Military Qualification (BMQ) is followed by Naval Environmental Training Program (NETP) at HMCS Venture in Esquimalt, BC. Officers attend CFOCS, then Maritime Warfare Officer training.",
    careerPaths: ["Naval Combat Information Officer", "Marine Engineer", "Naval Weapons Officer", "Acoustic Data Analyst", "Naval Communicator", "Boatswain", "Medical Technician"],
    considerations: [
      "Sea duty involves periods away from home on deployments",
      "Bilingual requirements may apply to certain roles",
      "Opportunities on both Pacific (Esquimalt) and Atlantic (Halifax) coasts",
    ],
    bases: [
      { id: "hmcs-esquimalt", name: "CFB Esquimalt / HMCS Naden", country: "CA", city: "Esquimalt", region: "British Columbia", latitude: 48.4316, longitude: -123.4384, branchRelevance: "Pacific Fleet headquarters; primary west coast naval base" },
      { id: "cfb-halifax", name: "CFB Halifax / HMCS Stadacona", country: "CA", city: "Halifax", region: "Nova Scotia", latitude: 44.6491, longitude: -63.5885, branchRelevance: "Atlantic Fleet headquarters; largest RCN base" },
    ],
  },
  {
    id: "royal-canadian-air-force",
    name: "Royal Canadian Air Force",
    overview:
      "The Royal Canadian Air Force (RCAF) is the air component of the Canadian Armed Forces. It defends Canadian airspace, contributes to NORAD, and participates in international operations worldwide.",
    eligibilitySummary:
      "Generally: Canadian citizen or permanent resident, 17 years or older, CFAT required. Pilot selection requires additional aptitude and medical testing. Physical fitness standards apply.",
    trainingSummary:
      "Basic Military Qualification (BMQ) followed by trade-specific training. Pilot training occurs at 15 Wing Moose Jaw and 4 Wing Cold Lake through the NATO Flying Training in Canada (NFTC) program.",
    careerPaths: ["Pilot", "Aerospace Control Officer", "Aircraft Structures Technician", "Avionics Systems Technician", "Air Combat Systems Officer", "Meteorological Technician", "Intelligence"],
    considerations: [
      "Pilot selection is very competitive and requires strong aptitude scores",
      "NORAD commitments mean some roles involve shift work and alert duty",
      "International postings are possible for some roles",
    ],
    bases: [
      { id: "cfb-cold-lake", name: "4 Wing Cold Lake", country: "CA", city: "Cold Lake", region: "Alberta", latitude: 54.4049, longitude: -110.2785, branchRelevance: "Fighter operations base; CF-18 Hornet squadrons" },
      { id: "cfb-trenton", name: "8 Wing Trenton", country: "CA", city: "Trenton", region: "Ontario", latitude: 44.1184, longitude: -77.5282, branchRelevance: "Primary air transport hub for the RCAF; largest wing" },
      { id: "cfb-moose-jaw", name: "15 Wing Moose Jaw", country: "CA", city: "Moose Jaw", region: "Saskatchewan", latitude: 50.3301, longitude: -105.5577, branchRelevance: "Primary pilot training facility for the RCAF and NATO allies" },
    ],
  },
];

// ─── Australia ───────────────────────────────────────────────────────────────

const australiaBranches: MilitaryBranch[] = [
  {
    id: "australian-army",
    name: "Australian Army",
    overview:
      "The Australian Army is the land warfare branch of the Australian Defence Force (ADF). It includes approximately 30,000 Regular and Reserve personnel and contributes to regional security and coalition operations.",
    eligibilitySummary:
      "Generally: Australian citizen or permanent resident, 17–55 years old (varies by role), must pass ADF aptitude testing and medical. Physical fitness standards apply. Verify at defencejobs.gov.au.",
    trainingSummary:
      "The Australian Army Soldier Skills course (AASS) is approximately 12 weeks at Kapooka, NSW. Officers attend the Royal Military College (RMC) Duntroon for 72 weeks.",
    careerPaths: ["Infantry", "Armour", "Artillery", "Combat Engineering", "Signals", "Intelligence", "Aviation", "Special Forces (SASR)", "Medical", "Logistics"],
    considerations: [
      "Both full-time (Regular Army) and part-time (Army Reserve) pathways",
      "Permanent residents may be eligible — verify current ADF policy",
      "Deployments to the Indo-Pacific region are possible",
    ],
    bases: [
      { id: "enoggera", name: "Gallipoli Barracks (Enoggera)", country: "AU", city: "Enoggera", region: "Queensland", latitude: -27.4027, longitude: 152.9386, branchRelevance: "HQ 7th Brigade; one of the largest Army bases" },
      { id: "kapooka", name: "Kapooka (Blamey Barracks)", country: "AU", city: "Wagga Wagga", region: "New South Wales", latitude: -35.1588, longitude: 147.4045, branchRelevance: "Australian Army Recruit Training Centre" },
      { id: "duntroon", name: "Royal Military College Duntroon", country: "AU", city: "Canberra", region: "ACT", latitude: -35.2986, longitude: 149.1572, branchRelevance: "Australian Army officer commissioning institution" },
    ],
  },
  {
    id: "royal-australian-navy",
    name: "Royal Australian Navy",
    overview:
      "The Royal Australian Navy (RAN) is the maritime force of the ADF. With approximately 14,000 personnel, it operates surface combatants, submarines, helicopters, and patrol vessels throughout the Indo-Pacific and beyond.",
    eligibilitySummary:
      "Generally: Australian citizen or permanent resident, 17–55 years old (varies), ADF aptitude testing and medical required. Some roles require swimming proficiency.",
    trainingSummary:
      "HMAS Cerberus in Victoria is the primary training establishment. Initial Recruit Course (IRC) is approximately 11 weeks. Officer training includes Initial Officer Training (IOT) at HMAS Creswell.",
    careerPaths: ["Surface Warfare Officer", "Submarine Service", "Aviation", "Clearance Diving", "Marine Technician", "Intelligence", "Logistics", "Medical"],
    considerations: [
      "Submarine service provides additional allowances and career development",
      "Frequent deployments to the Indo-Pacific region",
      "AUKUS partnership may create new career opportunities in nuclear submarine operations",
    ],
    bases: [
      { id: "hmas-cerberus", name: "HMAS Cerberus", country: "AU", city: "Cerberus", region: "Victoria", latitude: -38.3662, longitude: 145.2093, branchRelevance: "Royal Australian Navy training establishment; recruit and specialist courses" },
      { id: "fleet-base-west", name: "HMAS Stirling (Fleet Base West)", country: "AU", city: "Rockingham", region: "Western Australia", latitude: -32.1789, longitude: 115.6944, branchRelevance: "Western Australia fleet base; submarine operations" },
      { id: "fleet-base-east", name: "HMAS Kuttabul (Fleet Base East)", country: "AU", city: "Sydney", region: "New South Wales", latitude: -33.8609, longitude: 151.2125, branchRelevance: "East coast fleet base; surface combatant home port" },
    ],
  },
  {
    id: "raaf",
    name: "Royal Australian Air Force",
    overview:
      "The Royal Australian Air Force (RAAF) is the air power component of the ADF, responsible for air defence, strike, maritime patrol, airlift, and airspace surveillance across the Indo-Pacific.",
    eligibilitySummary:
      "Generally: Australian citizen or permanent resident, 17–55 years old (varies by role), ADF aptitude testing required. Pilot roles require specialist aviation aptitude testing.",
    trainingSummary:
      "Ground training is conducted at RAAF Base Wagga (Kapooka area). Pilot training occurs at RAAF Base Pearce (WA) and East Sale (VIC). Initial Officer Training is at RAAF College, Point Cook.",
    careerPaths: ["Pilot", "Air Traffic Controller", "Intelligence", "Aircraft Maintenance", "Cyber/Electronics Warfare", "Logistics", "Combat Controller", "Meteorology"],
    considerations: [
      "Pilot selection is competitive with strict medical and aptitude requirements",
      "RAAF will operate F-35A Lightning II jets — significant technical training involved",
      "Numerous overseas exchange postings with allied air forces",
    ],
    bases: [
      { id: "raaf-amberley", name: "RAAF Base Amberley", country: "AU", city: "Ipswich", region: "Queensland", latitude: -27.6375, longitude: 152.7122, branchRelevance: "F/A-18 Hornet and F-35A operations; Air Force's largest base" },
      { id: "raaf-pearce", name: "RAAF Base Pearce", country: "AU", city: "Bullsbrook", region: "Western Australia", latitude: -31.6674, longitude: 116.0164, branchRelevance: "Primary pilot training and flight operations centre" },
      { id: "raaf-darwin", name: "RAAF Base Darwin", country: "AU", city: "Darwin", region: "Northern Territory", latitude: -12.4238, longitude: 130.8717, branchRelevance: "Northern defence hub; supports US alliance force rotations" },
    ],
  },
];

// ─── Germany ─────────────────────────────────────────────────────────────────

const germanyBranches: MilitaryBranch[] = [
  {
    id: "heer",
    name: "Heer (Army)",
    nameLocal: "Heer",
    displayName: "German Army / Heer",
    overview: "The Heer is the land component of the Bundeswehr, Germany's armed forces. It is a major contributor to NATO's collective defence and participates in international stabilisation missions.",
    eligibilitySummary: "Generally: German citizen, 17–25 years old for volunteer service (up to 62 for officers in certain fields), must pass Bundeswehr selection tests. Physical and medical standards apply.",
    trainingSummary: "Basic military training (Grundausbildung) is approximately 3 months. Followed by role-specific training at specialist schools.",
    careerPaths: ["Infantry", "Armoured Troops", "Reconnaissance", "Artillery", "Pioneer Corps", "Logistics", "Military Police", "NBC Defence"],
    considerations: ["Both short-term volunteer and career soldier options", "German citizenship is the standard requirement", "Strong NATO commitment means potential deployment to allied countries"],
    bases: [
      { id: "wiesbaden", name: "Clay Kaserne Wiesbaden", country: "DE", city: "Wiesbaden", region: "Hesse", latitude: 50.0779, longitude: 8.2397, branchRelevance: "HQ of U.S. Army Europe and Germany's Western military region" },
    ],
  },
  {
    id: "marine-de",
    name: "Marine (Navy)",
    nameLocal: "Deutsche Marine",
    displayName: "German Navy / Deutsche Marine",
    overview: "The Deutsche Marine is the naval arm of the Bundeswehr, responsible for protecting German sea lanes, contributing to NATO naval missions, and maintaining freedom of navigation in European waters.",
    eligibilitySummary: "Generally: German citizen, 17–25 years old, selection tests required. Sea-service fitness standards apply.",
    trainingSummary: "Basic training at the Naval Training Centre in Parow. Followed by ship-specific and role-specific training.",
    careerPaths: ["Surface Warfare", "Submarine Service", "Naval Aviation (MPA)", "Mine Countermeasures", "Naval Logistics", "Hydrography"],
    considerations: ["Sea duty involves deployments away from home", "NATO Baltic Sea responsibilities", "Submarine service requires advanced qualifications"],
    bases: [
      { id: "kiel-naval", name: "Marinestützpunkt Kiel", country: "DE", city: "Kiel", region: "Schleswig-Holstein", latitude: 54.3233, longitude: 10.1350, branchRelevance: "Primary German naval base on the Baltic Sea" },
    ],
  },
  {
    id: "luftwaffe",
    name: "Luftwaffe (Air Force)",
    overview: "The Luftwaffe is the aerial warfare branch of the Bundeswehr, responsible for German air defence, combat air operations, and support to NATO's Integrated Air and Missile Defence.",
    eligibilitySummary: "Generally: German citizen, 17–25 years old, selection tests required. Pilot candidates require additional aptitude testing. Medical standards apply.",
    trainingSummary: "Basic training followed by aviation-specific training at Officer School Fürstenfeldbruck for officers. Enlisted air traffic and technical training at various schools.",
    careerPaths: ["Fighter Pilot", "Transport Aviation", "Air Defence", "Radar / Air Traffic Control", "Electronic Warfare", "Maintenance", "Cyber / Information Operations"],
    considerations: ["Germany is transitioning to the F-35A under the Eurofighter and Tornado replacement programme", "NATO commitments include Baltic Air Policing missions", "Officer career path requires longer study commitment"],
    bases: [
      { id: "norvenich", name: "Flugplatz Nörvenich", country: "DE", city: "Nörvenich", region: "North Rhine-Westphalia", latitude: 50.8311, longitude: 6.6570, branchRelevance: "Nuclear-capable Tornado base; future Eurofighter base" },
    ],
  },
];

// ─── France ──────────────────────────────────────────────────────────────────

const franceBranches: MilitaryBranch[] = [
  {
    id: "armee-de-terre",
    name: "Armée de Terre (Army)",
    overview: "The French Army (Armée de Terre) is the land force of the French Armed Forces, with approximately 117,000 active personnel. France maintains one of Europe's most capable and combat-experienced armies.",
    eligibilitySummary: "Generally: French citizen, 17.5–29 years old for enlisted (varies), must pass SIGYCOP medical profile and aptitude assessments.",
    trainingSummary: "Basic military training varies by regiment, typically 8–12 weeks. Officers attend Saint-Cyr (École Spéciale Militaire).",
    careerPaths: ["Infantry", "Armoured Cavalry", "Artillery", "Engineers", "Signals", "Foreign Legion (open to non-French)", "Special Forces", "Logistics"],
    considerations: ["France maintains a truly professional all-volunteer force since 2001", "The Foreign Legion accepts applicants from most nationalities", "Overseas operations are frequent given France's global commitments"],
    bases: [
      { id: "saint-cyr", name: "École Spéciale Militaire de Saint-Cyr", country: "FR", city: "Coëtquidan", region: "Brittany", latitude: 47.9820, longitude: -2.2760, branchRelevance: "Premier French Army officer school" },
      { id: "aubagne-legion", name: "1er RE Aubagne", country: "FR", city: "Aubagne", region: "Provence", latitude: 43.2919, longitude: 5.5659, branchRelevance: "Foreign Legion HQ and recruitment depot" },
    ],
  },
  {
    id: "marine-nationale",
    name: "Marine Nationale (Navy)",
    overview: "The French Navy (Marine Nationale) is responsible for defending French maritime territory and projecting power globally from France's two carrier battle groups and nuclear submarines.",
    eligibilitySummary: "Generally: French citizen, 17–29 years old (varies by role), aptitude testing required.",
    trainingSummary: "Initial naval training at Brest Naval School. Officer training at the Naval Academy (École navale) in Lanvéoc-Poulmic.",
    careerPaths: ["Naval Aviator", "Surface Warfare", "Nuclear Submarine (SSBN/SSN)", "Marine Commandos", "Cyber / Intelligence", "Logistics"],
    considerations: ["France is one of only a few countries operating nuclear-powered aircraft carriers", "Overseas bases in the Pacific and Indian Oceans create global deployment opportunities"],
    bases: [
      { id: "brest-naval", name: "Brest Naval Base", country: "FR", city: "Brest", region: "Brittany", latitude: 48.3870, longitude: -4.4875, branchRelevance: "Primary French naval base; home of the nuclear submarine fleet" },
    ],
  },
  {
    id: "armee-de-lair",
    name: "Armée de l'Air et de l'Espace (Air & Space Force)",
    overview: "The French Air and Space Force (Armée de l'Air et de l'Espace) operates combat aircraft, space surveillance systems, nuclear deterrent aircraft, and strategic airlift.",
    eligibilitySummary: "Generally: French citizen, 17–29 years old, aptitude testing required. Pilot candidates require specialist aptitude and medical testing.",
    trainingSummary: "Officer training at the Air and Space Academy (École de l'air) in Salon-de-Provence. Pilot training at Cognac/Salon-de-Provence.",
    careerPaths: ["Fighter Pilot", "Transport Aviation", "Space Operations", "Air Defence", "Special Operations (CPA)", "Maintenance", "Cyber"],
    considerations: ["France is expanding its space force component significantly", "Nuclear deterrence is a key mission", "Exchange tours with allied air forces are common"],
    bases: [
      { id: "istres", name: "BA 125 Istres", country: "FR", city: "Istres", region: "Provence", latitude: 43.5228, longitude: 4.9233, branchRelevance: "France's largest air base; home to the nuclear-capable Rafale and refuelling aircraft" },
    ],
  },
];

// ─── Japan ───────────────────────────────────────────────────────────────────

const japanBranches: MilitaryBranch[] = [
  {
    id: "jgsdf",
    name: "JGSDF (Ground Self-Defense Force)",
    overview: "The Japan Ground Self-Defense Force (JGSDF) is the land component of Japan's Self-Defense Forces. Under Japan's pacifist constitution, it is officially a self-defense force rather than an offensive military.",
    eligibilitySummary: "Generally: Japanese citizen, 18–32 years old. Must pass physical and written tests. Medical standards apply.",
    trainingSummary: "Basic training is approximately 3 months. Followed by specialist training at the relevant school.",
    careerPaths: ["Infantry", "Armour", "Artillery", "Engineering", "Signals", "Intelligence", "Medical", "Logistics"],
    considerations: ["Japan's constitution limits overseas combat roles, though this is evolving", "Strong discipline and physical fitness culture"],
    bases: [{ id: "camp-asaka", name: "Camp Asaka", country: "JP", city: "Wako", region: "Saitama", latitude: 35.7816, longitude: 139.6080, branchRelevance: "JGSDF Eastern Army HQ; Tokyo region" }],
  },
  {
    id: "jmsdf",
    name: "JMSDF (Maritime Self-Defense Force)",
    overview: "The Japan Maritime Self-Defense Force (JMSDF) is among the world's most capable naval forces, operating advanced destroyers, submarines, and patrol aircraft.",
    eligibilitySummary: "Generally: Japanese citizen, 18–32 years old. Written and physical tests required. Medical and swimming standards apply.",
    trainingSummary: "Basic training at the Maritime Self-Defense Force Basic Training Command in Yokosuka or Kure.",
    careerPaths: ["Surface Warfare", "Submarine Service", "Maritime Patrol Aviation", "Mine Warfare", "Logistics"],
    considerations: ["Japan's MSDF operates closely with the U.S. Navy", "Submarine service requires highly technical training"],
    bases: [{ id: "yokosuka", name: "MSDF Yokosuka Base", country: "JP", city: "Yokosuka", region: "Kanagawa", latitude: 35.2944, longitude: 139.6606, branchRelevance: "Primary JMSDF fleet base; hosts U.S. 7th Fleet" }],
  },
  {
    id: "jasdf",
    name: "JASDF (Air Self-Defense Force)",
    overview: "The Japan Air Self-Defense Force (JASDF) operates advanced fighter aircraft and air defence systems to protect Japanese airspace.",
    eligibilitySummary: "Generally: Japanese citizen, 18–32 years old. Pilot candidates need advanced aptitude testing.",
    trainingSummary: "Basic training followed by aviation-specific training. Pilot training at Hamamatsu and Ashiya Air Bases.",
    careerPaths: ["Fighter Pilot", "Air Defence", "Transport Aviation", "Maintenance", "Radar / ATC", "Intelligence"],
    considerations: ["JASDF operates F-35A/B jets and advanced radar systems", "Close integration with U.S. Air Force in Japan"],
    bases: [{ id: "misawa-ab", name: "Misawa Air Base", country: "JP", city: "Misawa", region: "Aomori", latitude: 40.7033, longitude: 141.3678, branchRelevance: "Northern Japan air defence hub; shared with U.S. Air Force" }],
  },
];

// ─── Austria ─────────────────────────────────────────────────────────────────

const austriaBranches: MilitaryBranch[] = [
  {
    id: "bundesheer",
    name: "Austrian Armed Forces",
    nameLocal: "Bundesheer",
    displayName: "Austrian Armed Forces / Bundesheer",
    overview: "The Bundesheer is Austria's federal armed forces, operating under Austria's permanent neutrality. It is responsible for national defence, disaster relief, and international peacekeeping missions. Austria has mandatory military service (Grundwehrdienst) of 6 months for male citizens.",
    eligibilitySummary: "Austrian male citizens: mandatory service (Grundwehrdienst) at age 17+. Voluntary career service (Berufssoldat) is open to both men and women. Medical and fitness standards apply. Foreign nationals are generally not eligible.",
    trainingSummary: "Basic military training (Grundausbildung) lasts 6 months for conscripts. Career soldiers receive extended training at the Theresan Military Academy (Theresianische Militärakademie) in Wiener Neustadt.",
    careerPaths: ["Infantry", "Armour", "Artillery", "Engineering / Pioniertruppe", "Logistics", "Medical Service", "Military Police", "NBC Defence", "International Peacekeeping (UN/EU)"],
    considerations: [
      "Austria is permanently neutral — combat deployments only under UN/EU mandate",
      "Mandatory service (6 months) applies to male Austrian citizens",
      "Women have been permitted to serve voluntarily since 1998",
      "Career officer pathway via Theresan Military Academy in Wiener Neustadt",
      "Active contributor to UN peacekeeping (UNDOF, KFOR and others)",
    ],
    bases: [
      { id: "kaserne-wiener-neustadt", name: "Theresianische Militärakademie", country: "AT", city: "Wiener Neustadt", region: "Lower Austria", latitude: 47.8048, longitude: 16.2427, branchRelevance: "Austria's premier officer commissioning and training academy" },
      { id: "kaserne-salzburg", name: "Schwarzenberg Kaserne", country: "AT", city: "Salzburg", region: "Salzburg", latitude: 47.7975, longitude: 13.0756, branchRelevance: "6th Brigade headquarters; mountain warfare training" },
    ],
  },
  {
    id: "landstreitkraefte",
    name: "Land Forces",
    nameLocal: "Landstreitkräfte",
    displayName: "Land Forces / Landstreitkräfte",
    overview: "The Landstreitkräfte are the ground combat component of the Bundesheer. They maintain three mechanised brigades and are responsible for land defence of Austrian territory, mountain operations, and international peacekeeping ground forces.",
    eligibilitySummary: "Requirements follow Bundesheer standards. Mandatory service for male citizens; voluntary career service open to men and women. Mountain and alpine roles require additional physical standards.",
    trainingSummary: "Basic infantry training followed by specialisation. Mountain and alpine units train at dedicated facilities in the Alpine region. Armoured and mechanised units train at armour schools.",
    careerPaths: ["Infantry / Jäger", "Armoured / Panzertruppe", "Artillery / Artillerie", "Combat Engineering / Pioniere", "Mountain Troops / Gebirgsjäger", "Military Police", "NBC Defence"],
    considerations: [
      "Austria's terrain means mountain warfare is a key specialisation",
      "Three mechanised brigades form the backbone of land defence",
      "Peacekeeping deployments on the Golan Heights (UNDOF) and in Kosovo (KFOR)",
    ],
    bases: [
      { id: "landwehr-salzburg", name: "Villach Kaserne", country: "AT", city: "Villach", region: "Carinthia", latitude: 46.6144, longitude: 13.8461, branchRelevance: "7th Mechanised Brigade; southern Austria defence" },
    ],
  },
  {
    id: "luftstreitkraefte",
    name: "Air Forces",
    nameLocal: "Luftstreitkräfte",
    displayName: "Air Forces / Luftstreitkräfte",
    overview: "The Luftstreitkräfte are the air component of the Bundesheer, responsible for Austrian airspace surveillance, air policing, and transport. Austria does not operate combat aircraft. The air force focuses on helicopters (Eucopter), transport aircraft, and radar/air defence systems.",
    eligibilitySummary: "Requirements follow Bundesheer standards. Pilot and aviation roles require specialist aptitude and medical testing. Technical roles require relevant qualifications.",
    trainingSummary: "Pilot training is conducted in Austria and through partner nations. Helicopter pilots train on the Agusta-Bell 212 and Sikorsky S-70 Black Hawk. Ground crews train at Fliegerhorst Zeltweg.",
    careerPaths: ["Helicopter Pilot", "Fixed-Wing Transport Pilot", "Air Traffic Control", "Radar Operator", "Aircraft Maintenance Technician", "Air Defence Operations"],
    considerations: [
      "Austria does not maintain combat jets — focus is on helicopters and transport",
      "Airspace surveillance is conducted via Goldhaube radar system",
      "Eurofighter EF-2000 (Typhoon) operates for air policing",
      "Pilot training is competitive with strict medical standards",
    ],
    bases: [
      { id: "fliegerhorst-zeltweg", name: "Fliegerhorst Hinterstoisser (Zeltweg)", country: "AT", city: "Zeltweg", region: "Styria", latitude: 47.2028, longitude: 14.7400, branchRelevance: "Primary air base; Eurofighter and helicopter operations" },
      { id: "fliegerhorst-langenlebarn", name: "Fliegerhorst Brumowski (Langenlebarn)", country: "AT", city: "Tulln", region: "Lower Austria", latitude: 48.3194, longitude: 16.1098, branchRelevance: "Helicopter wing; transport operations near Vienna" },
    ],
  },
  {
    id: "jagdkommando",
    name: "Special Operations Forces",
    nameLocal: "Jagdkommando",
    displayName: "Special Operations / Jagdkommando",
    overview: "The Jagdkommando is Austria's elite special operations unit — considered one of Europe's most capable special forces formations. It conducts counter-terrorism, hostage rescue, special reconnaissance, and direct action missions. Selection and training is among the most demanding in Austria.",
    eligibilitySummary: "Applicants must first complete regular Bundesheer service. Selection requires exceptional physical and psychological fitness. Age generally 18–32, Austrian citizen, security clearance required. Selection process is multi-stage and highly competitive.",
    trainingSummary: "Jagdkommando selection (Eignungstest) spans weeks of physically and mentally demanding assessment. Full qualification takes 1–2 years including airborne, combat diving, SERE, and direct action training. Comparable to international Tier 2 special forces standards.",
    careerPaths: ["Counter-Terrorism / CT", "Special Reconnaissance", "Direct Action", "Combat Diving / Kampftaucher", "Airborne / Fallschirmjäger", "Mountain Operations", "CBRN Defence"],
    considerations: [
      "Selection failure rate exceeds 80% — preparation is essential",
      "International training exchanges with NATO special forces",
      "Austria's neutrality means deployments are typically UN/EU mandated",
      "Elite status within the Bundesheer with additional allowances",
    ],
    bases: [
      { id: "jagdkommando-hq", name: "Jagdkommando Kaserne", country: "AT", city: "Wiener Neustadt", region: "Lower Austria", latitude: 47.8100, longitude: 16.2480, branchRelevance: "Jagdkommando headquarters, selection and training facility" },
    ],
  },
];

// ─── Generic branch builder (used for countries with no detailed data) ────────

function genericBranches(countryName: string, countryCode: string, landlocked = false): MilitaryBranch[] {
  const branches: MilitaryBranch[] = [
    {
      id: "army",
      name: "Army",
      overview: `The ${countryName} Army is the land-based component of the national armed forces, responsible for territorial defence and participating in peace operations.`,
      eligibilitySummary: `Eligibility requirements for the ${countryName} Army vary. Contact official national recruiting channels to obtain current citizenship, age, education, and health requirements.`,
      trainingSummary: `Initial training requirements vary. Recruits typically complete a period of basic military training before being assigned to a unit or specialty. Consult official sources for current details.`,
      careerPaths: ["Infantry", "Engineering", "Logistics", "Medical Support", "Signals / Communications", "Intelligence"],
      considerations: [
        "Requirements, training length, and career paths vary significantly by country",
        "Always verify current requirements with official national recruiting sources",
        "Citizenship and residency rules may be strict",
      ],
      bases: [
        {
          id: `${countryCode.toLowerCase()}-army-hq`,
          name: `${countryName} Army Headquarters`,
          country: countryCode,
          latitude: 0,
          longitude: 0,
          branchRelevance: "National Army command and administration",
        },
      ],
    },
  ];

  if (!landlocked) {
    branches.push({
      id: "navy",
      name: "Navy",
      overview: `The ${countryName} Navy is the maritime component of the national armed forces, responsible for coastal defence and maritime security operations.`,
      eligibilitySummary: `Eligibility requirements for the ${countryName} Navy vary. Contact official national recruiting channels for current citizenship, age, education, and health requirements.`,
      trainingSummary: `Initial naval training requirements vary. Consult official national sources for current details.`,
      careerPaths: ["Surface Operations", "Naval Engineering", "Logistics", "Medical Support", "Communications"],
      considerations: [
        "Sea duty involves extended periods away from home",
        "Always verify current requirements with official national recruiting sources",
      ],
      bases: [
        {
          id: `${countryCode.toLowerCase()}-navy-hq`,
          name: `${countryName} Naval Base`,
          country: countryCode,
          latitude: 0,
          longitude: 0,
          branchRelevance: "National Navy command and operations",
        },
      ],
    });
  }

  branches.push({
    id: "air-force",
    name: "Air Force",
    overview: `The ${countryName} Air Force is the air component of the national armed forces, responsible for air defence and aviation operations.`,
    eligibilitySummary: `Eligibility requirements for the ${countryName} Air Force vary. Contact official national recruiting channels for current citizenship, age, education, and health requirements.`,
    trainingSummary: `Initial aviation training requirements vary. Consult official national sources for current details.`,
    careerPaths: ["Aviation Operations", "Air Traffic Control", "Maintenance", "Logistics", "Intelligence"],
    considerations: [
      "Always verify current requirements with official national recruiting sources",
    ],
    bases: [
      {
        id: `${countryCode.toLowerCase()}-af-hq`,
        name: `${countryName} Air Force Base`,
        country: countryCode,
        latitude: 0,
        longitude: 0,
        branchRelevance: "National Air Force command and operations",
      },
    ],
  });

  return branches;
}

// ─── Full country military data registry ────────────────────────────────────

const countryMilitaryRegistry: CountryMilitaryData[] = [
  { countryCode: "US", countryName: "United States", branches: usBranches },
  { countryCode: "GB", countryName: "United Kingdom", branches: ukBranches },
  { countryCode: "CA", countryName: "Canada", branches: canadaBranches },
  { countryCode: "AU", countryName: "Australia", branches: australiaBranches },
  { countryCode: "DE", countryName: "Germany", branches: germanyBranches },
  { countryCode: "FR", countryName: "France", branches: franceBranches },
  { countryCode: "JP", countryName: "Japan", branches: japanBranches },
  // Generic entries for countries without detailed data
  { countryCode: "AF", countryName: "Afghanistan", branches: genericBranches("Afghan", "AF", true) },
  { countryCode: "AL", countryName: "Albania", branches: genericBranches("Albanian", "AL") },
  { countryCode: "DZ", countryName: "Algeria", branches: genericBranches("Algerian", "DZ") },
  { countryCode: "AR", countryName: "Argentina", branches: genericBranches("Argentine", "AR") },
  { countryCode: "AM", countryName: "Armenia", branches: genericBranches("Armenian", "AM", true) },
  { countryCode: "AT", countryName: "Austria", branches: austriaBranches },
  { countryCode: "AZ", countryName: "Azerbaijan", branches: genericBranches("Azerbaijani", "AZ") },
  { countryCode: "BH", countryName: "Bahrain", branches: genericBranches("Bahraini", "BH") },
  { countryCode: "BD", countryName: "Bangladesh", branches: genericBranches("Bangladeshi", "BD") },
  { countryCode: "BY", countryName: "Belarus", branches: genericBranches("Belarusian", "BY", true) },
  { countryCode: "BE", countryName: "Belgium", branches: genericBranches("Belgian", "BE") },
  { countryCode: "BJ", countryName: "Benin", branches: genericBranches("Beninese", "BJ") },
  { countryCode: "BT", countryName: "Bhutan", branches: genericBranches("Bhutanese", "BT", true) },
  { countryCode: "BO", countryName: "Bolivia", branches: genericBranches("Bolivian", "BO", true) },
  { countryCode: "BA", countryName: "Bosnia and Herzegovina", branches: genericBranches("Bosnian", "BA", true) },
  { countryCode: "BW", countryName: "Botswana", branches: genericBranches("Botswanan", "BW", true) },
  { countryCode: "BR", countryName: "Brazil", branches: genericBranches("Brazilian", "BR") },
  { countryCode: "BN", countryName: "Brunei", branches: genericBranches("Bruneian", "BN") },
  { countryCode: "BG", countryName: "Bulgaria", branches: genericBranches("Bulgarian", "BG") },
  { countryCode: "KH", countryName: "Cambodia", branches: genericBranches("Cambodian", "KH") },
  { countryCode: "CM", countryName: "Cameroon", branches: genericBranches("Cameroonian", "CM") },
  { countryCode: "CL", countryName: "Chile", branches: genericBranches("Chilean", "CL") },
  { countryCode: "CN", countryName: "China", branches: genericBranches("Chinese", "CN") },
  { countryCode: "CO", countryName: "Colombia", branches: genericBranches("Colombian", "CO") },
  { countryCode: "HR", countryName: "Croatia", branches: genericBranches("Croatian", "HR") },
  { countryCode: "CU", countryName: "Cuba", branches: genericBranches("Cuban", "CU") },
  { countryCode: "CY", countryName: "Cyprus", branches: genericBranches("Cypriot", "CY") },
  { countryCode: "CZ", countryName: "Czech Republic", branches: genericBranches("Czech", "CZ", true) },
  { countryCode: "DK", countryName: "Denmark", branches: genericBranches("Danish", "DK") },
  { countryCode: "EG", countryName: "Egypt", branches: genericBranches("Egyptian", "EG") },
  { countryCode: "EE", countryName: "Estonia", branches: genericBranches("Estonian", "EE") },
  { countryCode: "ET", countryName: "Ethiopia", branches: genericBranches("Ethiopian", "ET", true) },
  { countryCode: "FI", countryName: "Finland", branches: genericBranches("Finnish", "FI") },
  { countryCode: "GH", countryName: "Ghana", branches: genericBranches("Ghanaian", "GH") },
  { countryCode: "GR", countryName: "Greece", branches: genericBranches("Greek", "GR") },
  { countryCode: "HU", countryName: "Hungary", branches: genericBranches("Hungarian", "HU", true) },
  { countryCode: "IN", countryName: "India", branches: genericBranches("Indian", "IN") },
  { countryCode: "ID", countryName: "Indonesia", branches: genericBranches("Indonesian", "ID") },
  { countryCode: "IR", countryName: "Iran", branches: genericBranches("Iranian", "IR") },
  { countryCode: "IQ", countryName: "Iraq", branches: genericBranches("Iraqi", "IQ") },
  { countryCode: "IE", countryName: "Ireland", branches: genericBranches("Irish", "IE") },
  { countryCode: "IL", countryName: "Israel", branches: genericBranches("Israeli", "IL") },
  { countryCode: "IT", countryName: "Italy", branches: genericBranches("Italian", "IT") },
  { countryCode: "JO", countryName: "Jordan", branches: genericBranches("Jordanian", "JO") },
  { countryCode: "KZ", countryName: "Kazakhstan", branches: genericBranches("Kazakhstani", "KZ", true) },
  { countryCode: "KE", countryName: "Kenya", branches: genericBranches("Kenyan", "KE") },
  { countryCode: "KR", countryName: "South Korea", branches: genericBranches("South Korean", "KR") },
  { countryCode: "KW", countryName: "Kuwait", branches: genericBranches("Kuwaiti", "KW") },
  { countryCode: "LV", countryName: "Latvia", branches: genericBranches("Latvian", "LV") },
  { countryCode: "LB", countryName: "Lebanon", branches: genericBranches("Lebanese", "LB") },
  { countryCode: "LY", countryName: "Libya", branches: genericBranches("Libyan", "LY") },
  { countryCode: "LT", countryName: "Lithuania", branches: genericBranches("Lithuanian", "LT") },
  { countryCode: "LU", countryName: "Luxembourg", branches: genericBranches("Luxembourgish", "LU", true) },
  { countryCode: "MY", countryName: "Malaysia", branches: genericBranches("Malaysian", "MY") },
  { countryCode: "MX", countryName: "Mexico", branches: genericBranches("Mexican", "MX") },
  { countryCode: "MA", countryName: "Morocco", branches: genericBranches("Moroccan", "MA") },
  { countryCode: "MM", countryName: "Myanmar", branches: genericBranches("Myanmar", "MM") },
  { countryCode: "NP", countryName: "Nepal", branches: genericBranches("Nepalese", "NP", true) },
  { countryCode: "NL", countryName: "Netherlands", branches: genericBranches("Dutch", "NL") },
  { countryCode: "NZ", countryName: "New Zealand", branches: genericBranches("New Zealand", "NZ") },
  { countryCode: "NG", countryName: "Nigeria", branches: genericBranches("Nigerian", "NG") },
  { countryCode: "NO", countryName: "Norway", branches: genericBranches("Norwegian", "NO") },
  { countryCode: "OM", countryName: "Oman", branches: genericBranches("Omani", "OM") },
  { countryCode: "PK", countryName: "Pakistan", branches: genericBranches("Pakistani", "PK") },
  { countryCode: "PE", countryName: "Peru", branches: genericBranches("Peruvian", "PE") },
  { countryCode: "PH", countryName: "Philippines", branches: genericBranches("Filipino", "PH") },
  { countryCode: "PL", countryName: "Poland", branches: genericBranches("Polish", "PL") },
  { countryCode: "PT", countryName: "Portugal", branches: genericBranches("Portuguese", "PT") },
  { countryCode: "QA", countryName: "Qatar", branches: genericBranches("Qatari", "QA") },
  { countryCode: "RO", countryName: "Romania", branches: genericBranches("Romanian", "RO") },
  { countryCode: "RU", countryName: "Russia", branches: genericBranches("Russian", "RU") },
  { countryCode: "SA", countryName: "Saudi Arabia", branches: genericBranches("Saudi", "SA") },
  { countryCode: "SN", countryName: "Senegal", branches: genericBranches("Senegalese", "SN") },
  { countryCode: "RS", countryName: "Serbia", branches: genericBranches("Serbian", "RS", true) },
  { countryCode: "SG", countryName: "Singapore", branches: genericBranches("Singaporean", "SG") },
  { countryCode: "SK", countryName: "Slovakia", branches: genericBranches("Slovak", "SK", true) },
  { countryCode: "ZA", countryName: "South Africa", branches: genericBranches("South African", "ZA") },
  { countryCode: "ES", countryName: "Spain", branches: genericBranches("Spanish", "ES") },
  { countryCode: "LK", countryName: "Sri Lanka", branches: genericBranches("Sri Lankan", "LK") },
  { countryCode: "SD", countryName: "Sudan", branches: genericBranches("Sudanese", "SD") },
  { countryCode: "SE", countryName: "Sweden", branches: genericBranches("Swedish", "SE") },
  { countryCode: "CH", countryName: "Switzerland", branches: genericBranches("Swiss", "CH", true) },
  { countryCode: "SY", countryName: "Syria", branches: genericBranches("Syrian", "SY") },
  { countryCode: "TW", countryName: "Taiwan", branches: genericBranches("Taiwanese", "TW") },
  { countryCode: "TZ", countryName: "Tanzania", branches: genericBranches("Tanzanian", "TZ") },
  { countryCode: "TH", countryName: "Thailand", branches: genericBranches("Thai", "TH") },
  { countryCode: "TN", countryName: "Tunisia", branches: genericBranches("Tunisian", "TN") },
  { countryCode: "TR", countryName: "Turkey", branches: genericBranches("Turkish", "TR") },
  { countryCode: "UA", countryName: "Ukraine", branches: genericBranches("Ukrainian", "UA") },
  { countryCode: "AE", countryName: "United Arab Emirates", branches: genericBranches("Emirati", "AE") },
  { countryCode: "UZ", countryName: "Uzbekistan", branches: genericBranches("Uzbekistani", "UZ", true) },
  { countryCode: "VN", countryName: "Vietnam", branches: genericBranches("Vietnamese", "VN") },
  { countryCode: "YE", countryName: "Yemen", branches: genericBranches("Yemeni", "YE") },
  { countryCode: "ZM", countryName: "Zambia", branches: genericBranches("Zambian", "ZM", true) },
  { countryCode: "ZW", countryName: "Zimbabwe", branches: genericBranches("Zimbabwean", "ZW", true) },
];

// Build lookup maps for fast access
const militaryDataByCode = new Map<string, CountryMilitaryData>(
  countryMilitaryRegistry.map((c) => [c.countryCode, c])
);

export function getCountryMilitaryData(countryCode: string): CountryMilitaryData | undefined {
  return militaryDataByCode.get(countryCode);
}

export function getBranchData(countryCode: string, branchId: string): MilitaryBranch | undefined {
  return getCountryMilitaryData(countryCode)?.branches.find((b) => b.id === branchId);
}

export function getBranchesForCountry(countryCode: string): MilitaryBranch[] {
  return getCountryMilitaryData(countryCode)?.branches ?? [];
}

export { countryMilitaryRegistry };
