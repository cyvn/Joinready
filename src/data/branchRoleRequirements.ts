export type BranchRoleRow = {
  role: string;
  category: string;
  education: string;
  aptitude: string;
  fitness: string;
  medical: string;
  notes: string;
};

export type BranchRoleRequirements = {
  countrySlug: string;
  branchId: string;
  country: string;
  branch: string;
  title: string;
  subtitle: string;
  disclaimer: string;
  officialSourceName: string;
  officialSourceUrl: string;
  rows: BranchRoleRow[];
};

const DISCLAIMER = "This is an educational planning tool, not an official recruiting document. Requirements vary by role, age, education, medical status, aptitude testing, citizenship, and current recruiting policy. Always verify final standards with official recruitment sources.";
const SUBTITLE = "Free planning overview for comparing roles and preparation areas.";

export const branchRoleRequirements: Record<string, BranchRoleRequirements> = {

  // ==========================================================================
  // UNITED KINGDOM
  // ==========================================================================

  "uk-british-army": {
    countrySlug: "uk", branchId: "british-army",
    country: "United Kingdom", branch: "British Army",
    title: "United Kingdom — British Army Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "British Army — Official Recruitment",
    officialSourceUrl: "https://apply.army.mod.uk",
    rows: [
      { role: "Infantry Soldier", category: "Combat", education: "No formal minimum; GCSE-level literacy/numeracy beneficial", aptitude: "BARB test required; score determines role eligibility", fitness: "High — PRAC fitness standard; loaded march required", medical: "Medical suitability required", notes: "Core ground combat role; BARB score sets which roles are available; physically demanding from day one" },
      { role: "Household Division (Guards)", category: "Combat", education: "No formal minimum", aptitude: "BARB score applies", fitness: "High — ceremonial and operational fitness standards", medical: "Medical suitability required", notes: "Ceremonial and operational infantry; high turnout and discipline standards; public duties alongside operational role" },
      { role: "Parachute Regiment", category: "Airborne / Combat", education: "No formal minimum", aptitude: "BARB score; Pegasus Company (P Company) selection", fitness: "Very High — P Company standard including TAB, steeplechase, milling", medical: "Enhanced medical screening", notes: "P Company pre-selection is a requirement; among the most demanding infantry pathways; volunteers must already be enlisted" },
      { role: "Royal Artillery Gunner", category: "Combat Support", education: "No formal minimum; numeracy helpful", aptitude: "BARB score; numeracy important for fire control roles", fitness: "High", medical: "Medical suitability required", notes: "Fire support; various sub-roles including MLRS, AS90, and surveillance; numeracy and teamwork are key" },
      { role: "Royal Armoured Corps Crewman", category: "Armoured", education: "No formal minimum", aptitude: "BARB score required", fitness: "High", medical: "Medical suitability required", notes: "Tank crew (Challenger 3) and cavalry reconnaissance; mechanical aptitude valued; close teamwork in confined spaces" },
      { role: "Royal Engineers Combat Engineer", category: "Engineering", education: "No formal minimum; maths beneficial for technical trades", aptitude: "BARB score; trade aptitude tests may apply for specialist roles", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, construction; wide range of trade specialisms; one of the most versatile corps" },
      { role: "Royal Signals Communications Engineer", category: "Communications", education: "GCSEs in maths/IT helpful; no fixed minimum for basic entry", aptitude: "BARB score; technical aptitude for specialist trades", fitness: "High", medical: "Medical suitability required", notes: "Communications systems from radio to cyber-enabled networks; technical sub-roles may require higher BARB scores" },
      { role: "REME Technical Support Specialist", category: "Technical / Engineering", education: "GCSEs in maths and science commonly expected for technical trades", aptitude: "BARB score; technical aptitude testing", fitness: "Standard", medical: "Medical suitability required", notes: "Equipment maintenance and repair; apprenticeship-level qualifications provided in service; engineering career pathway" },
      { role: "RLC Driver", category: "Logistics", education: "No formal minimum", aptitude: "BARB score", fitness: "Standard", medical: "Medical suitability required", notes: "Military vehicle driving; HGV and specialist licences gained during training; operates in all environments" },
      { role: "RLC Logistic Supply Specialist", category: "Logistics", education: "GCSE-level Maths and English (grade E or equivalent)", aptitude: "BARB score", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain management and stock control; GCSE-level in Maths and English reflects administrative element of role" },
      { role: "Combat Medical Technician (RAMC)", category: "Medical", education: "GCSEs in Maths and English; science helpful", aptitude: "BARB score; medical aptitude assessed", fitness: "Standard to High", medical: "Medical suitability required", notes: "Battlefield and garrison medical care; trains to EMT / paramedic-equivalent level; high BARB requirement for this role" },
      { role: "AGC HR Specialist", category: "Administration", education: "GCSE-level Maths and English (grade D or equivalent)", aptitude: "BARB score; administrative aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Personnel administration, pay, HR; GCSE minimums reflect the administrative nature of the role" },
    ],
  },

  "uk-royal-navy": {
    countrySlug: "uk", branchId: "royal-navy",
    country: "United Kingdom", branch: "Royal Navy",
    title: "United Kingdom — Royal Navy Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Royal Navy — Official Recruitment",
    officialSourceUrl: "https://www.royalnavy.mod.uk/careers",
    rows: [
      { role: "Warfare Specialist (Seaman)", category: "Naval Warfare", education: "No formal minimum; literacy and numeracy important", aptitude: "RT (Recruiting Test) score required", fitness: "Standard to High — seagoing fitness", medical: "Enhanced medical including eyesight and hearing", notes: "Operates weapons, navigation, and communications systems aboard ships; seagoing service central to the role" },
      { role: "Marine Engineer", category: "Technical", education: "GCSEs in maths and a science subject commonly expected", aptitude: "RT score; technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Ship propulsion, auxiliary machinery, and marine systems; engineering qualifications earned in service; strong technical pathway" },
      { role: "Weapon Engineer", category: "Technical", education: "GCSEs in maths and science", aptitude: "RT score; technical aptitude — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Weapons and sensor systems; higher academic roles within weapon engineering require stronger technical background" },
      { role: "Logistics Specialist", category: "Logistics", education: "No formal minimum; literacy helpful", aptitude: "RT score", fitness: "Standard", medical: "Medical suitability required", notes: "Catering, stores, retail, and supply management; wide range of sub-roles afloat and ashore" },
      { role: "Medical Assistant", category: "Medical", education: "GCSEs including English and a science subject", aptitude: "RT score; healthcare suitability assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Healthcare support at sea and ashore; trains to a clinical level comparable to a civilian medical assistant; seagoing assignments" },
      { role: "Aircraft Handler", category: "Aviation Support", education: "No formal minimum", aptitude: "RT score", fitness: "Standard to High — flight deck is physically demanding", medical: "Medical suitability required", notes: "Flight deck operations aboard aircraft carriers; safety-critical role requiring attention and physical coordination" },
      { role: "Submarine Warfare Specialist", category: "Naval Warfare / Submarine", education: "No formal minimum", aptitude: "RT score; submarine selection applies", fitness: "Standard — submarine fitness assessment", medical: "Enhanced medical for submarine service including pressure tolerance", notes: "Volunteer submarine; additional medical and psychological screening; confined environment; enhanced pay supplements" },
      { role: "Communications & Information Systems Specialist", category: "Communications / Cyber", education: "GCSEs helpful; IT background valued", aptitude: "RT score; technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "IT and communications systems at sea and ashore; security clearance required; growing cyber element" },
    ],
  },

  "uk-raf": {
    countrySlug: "uk", branchId: "raf",
    country: "United Kingdom", branch: "Royal Air Force",
    title: "United Kingdom — Royal Air Force Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Royal Air Force — Official Recruitment",
    officialSourceUrl: "https://www.raf.mod.uk/recruitment",
    rows: [
      { role: "RAF Regiment Gunner", category: "Combat", education: "No formal minimum", aptitude: "RAF Airmen Selection Test (AST); RAF Regiment aptitude", fitness: "High — commando-style fitness selection standard", medical: "Medical suitability required", notes: "Ground combat force of the RAF; defends air bases; demanding physical selection comparable to Army infantry standards" },
      { role: "Aircraft Technician", category: "Technical", education: "GCSEs in maths and a science commonly expected", aptitude: "AST; technical aptitude testing — important for this role", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance; airframe, engines, or avionics depending on specialism; apprenticeship-level training; strong career pathway" },
      { role: "Cyberspace Communication Specialist", category: "Cyber / Communications", education: "GCSEs including maths and IT helpful", aptitude: "AST; technical and analytical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "IT and cyber communications infrastructure; security clearance required; growing and well-funded specialism in the RAF" },
      { role: "Logistics Supplier", category: "Logistics", education: "No formal minimum; literacy helpful", aptitude: "AST", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, stores management, and inventory; wide deployment locations from UK bases to deployed operations" },
      { role: "Aerospace Medical Services", category: "Medical", education: "GCSEs including science; civilian healthcare qualifications valued", aptitude: "AST; healthcare suitability", fitness: "Standard", medical: "Medical suitability required", notes: "Medical support for aircrew and all RAF personnel; healthcare training pathway in service; aeromedical evacuation element possible" },
      { role: "Intelligence Analyst", category: "Intelligence", education: "GCSEs/A-levels; analytical and language subjects valued", aptitude: "AST; analytical reasoning assessment — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Intelligence collection, processing, and analysis; security clearance required; language skills a significant asset" },
      { role: "Air Operations Support", category: "Aviation Support", education: "GCSEs helpful", aptitude: "AST; spatial reasoning and communication skills", fitness: "Standard", medical: "Enhanced medical: vision standards apply for some roles", notes: "Air traffic management and operations coordination; safety-critical; English language clarity important" },
      { role: "RAF Police", category: "Security", education: "No formal minimum; GCSEs helpful", aptitude: "AST; psychological and aptitude assessment", fitness: "Standard to High", medical: "Medical suitability required", notes: "Military policing, base security, and crime investigation; background check required; civilian police experience valued" },
    ],
  },

  // ==========================================================================
  // UNITED STATES
  // ==========================================================================

  "us-army": {
    countrySlug: "us", branchId: "army",
    country: "United States", branch: "Army",
    title: "United States — Army Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Army Recruiting — goarmy.com",
    officialSourceUrl: "https://www.goarmy.com",
    rows: [
      { role: "Infantry (11B)", category: "Combat", education: "High school diploma or GED", aptitude: "ASVAB Combat (CO) score minimum applies", fitness: "High — Army Combat Fitness Test (ACFT)", medical: "Medical suitability required", notes: "Core ground combat role; physically demanding; ASVAB CO score opens 11A/11B/11C tracks; critical warfighter MOS" },
      { role: "Cavalry Scout (19D)", category: "Reconnaissance", education: "High school diploma or GED", aptitude: "ASVAB Combat (CO) score applies", fitness: "High — ACFT; rucking important", medical: "Medical suitability required", notes: "Reconnaissance and screening; mounted and dismounted operations; vehicle crew duties; fast-paced and physically demanding" },
      { role: "Combat Medic Specialist (68W)", category: "Medical", education: "High school diploma; science and biology helpful", aptitude: "ASVAB Skilled Technical (ST) score — higher threshold than average", fitness: "Standard to High", medical: "Medical suitability required", notes: "Emergency and primary medical care; trains to EMT-B equivalent and beyond; one of the highest-demand MOS; strong aptitude requirement" },
      { role: "Military Police (31B)", category: "Security", education: "High school diploma", aptitude: "ASVAB Skilled Technical (ST) score", fitness: "Standard to High", medical: "Medical suitability required", notes: "Law enforcement, criminal investigation, and base security; background investigation required; civilian law enforcement skills transferable" },
      { role: "Cyber Operations Specialist (17C)", category: "Cyber", education: "High school diploma; IT and maths subjects valued", aptitude: "ASVAB Skilled Technical (ST) — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Offensive and defensive cyber operations; security clearance required; one of the most academically demanding enlisted MOS" },
      { role: "Intelligence Analyst (35F)", category: "Intelligence", education: "High school diploma; strong academics", aptitude: "ASVAB Skilled Technical (ST) or General Technical (GT) — high score", fitness: "Standard", medical: "Medical suitability required", notes: "All-source intelligence analysis; Top Secret/SCI clearance typically required; analytical and writing skills essential" },
      { role: "Wheeled Vehicle Mechanic (91B)", category: "Maintenance", education: "High school diploma; mechanical aptitude helpful", aptitude: "ASVAB Mechanical Maintenance (MM) or Electronics (EL) score", fitness: "Standard", medical: "Medical suitability required", notes: "Maintenance of wheeled vehicles including HMMWV and LMTV; MOS school at Fort Jackson or equivalent; trades pathway" },
      { role: "Human Resources Specialist (42A)", category: "Administration", education: "High school diploma; admin and IT skills", aptitude: "ASVAB Clerical (CL) or General Technical (GT) score", fitness: "Standard", medical: "Medical suitability required", notes: "Soldier records, personnel management, casualty operations; important support role at all echelons" },
      { role: "Unit Supply Specialist (92Y)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB Clerical (CL) score applies", fitness: "Standard", medical: "Medical suitability required", notes: "Property accountability and supply chain; inventory management and issue/turn-in of equipment; essential support role" },
      { role: "Combat Engineer (12B)", category: "Engineering", education: "High school diploma; maths helpful", aptitude: "ASVAB General Technical (GT) or Combat (CO) score", fitness: "High", medical: "Medical suitability required", notes: "Route clearance, demolitions, bridging, and obstacle emplacement; physically demanding; forward-deployed with maneuver units" },
      { role: "Signal Support Systems Specialist (25U)", category: "Communications", education: "High school diploma; IT and technical background", aptitude: "ASVAB Electronics (EL) or Surveillance & Communications (SC) score", fitness: "Standard", medical: "Medical suitability required", notes: "Radio and communications systems at unit level; technical aptitude is critical; supports every type of Army unit" },
    ],
  },

  "us-marine-corps": {
    countrySlug: "us", branchId: "marine-corps",
    country: "United States", branch: "Marine Corps",
    title: "United States — Marine Corps Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Marine Corps Recruiting — marines.com",
    officialSourceUrl: "https://www.marines.com",
    rows: [
      { role: "Rifleman (0311)", category: "Combat", education: "High school diploma or GED", aptitude: "ASVAB GT 80+ typically; CO score applies", fitness: "Very High — IST and PFT required; demanding boot camp", medical: "Medical suitability required", notes: "Core infantry MOS; the backbone of the Marine Corps; extremely physically demanding from recruit training onward" },
      { role: "Reconnaissance Marine (0321 pathway)", category: "Special Operations / Recon", education: "High school diploma", aptitude: "ASVAB GT 105+ typically; Basic Recon Course (BRC) screening", fitness: "Very High — recon-specific selection including water confidence", medical: "Enhanced medical screening", notes: "Separate screening after infantry training; demanding selection; SCUBA and airborne qualifications follow; highly competitive" },
      { role: "Combat Engineer (1371)", category: "Engineering", education: "High school diploma", aptitude: "ASVAB GT score applies; mechanical aptitude", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, obstacle breaching, route clearance; operates with infantry units; technical and physically demanding" },
      { role: "Logistics / Supply (04xx)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB CL score applies", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, distribution, and inventory management; wide range of sub-MOS within the 04xx field" },
      { role: "Motor Transport Operator (3531)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB MM score applies", fitness: "Standard", medical: "Medical suitability required", notes: "Military vehicle driving; convoy operations; HAZMAT and heavy equipment; CDL equivalent training provided" },
      { role: "Radio Operator (0621)", category: "Communications", education: "High school diploma; IT background helpful", aptitude: "ASVAB EL score applies", fitness: "Standard", medical: "Medical suitability required", notes: "Tactical communications systems; works with infantry and all arms; security clearance may apply for some variants" },
      { role: "Cyber / Network Specialist (0651 area)", category: "Cyber", education: "High school diploma; IT background valued", aptitude: "ASVAB EL or GT — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Network and IT infrastructure; security clearance required; growing MOS family in the Marine Corps" },
      { role: "Intelligence Specialist (0231)", category: "Intelligence", education: "High school diploma; strong academics", aptitude: "ASVAB GT 100+ typically", fitness: "Standard", medical: "Medical suitability required", notes: "Intelligence collection, analysis, and reporting; TS/SCI clearance typically required; analytical skills essential" },
      { role: "Aviation Maintenance (various MOS)", category: "Aviation", education: "High school diploma; technical subjects helpful", aptitude: "ASVAB MM or EL score", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance; specific MOS depends on airframe (F-35, MV-22, CH-53 etc.); strong technical training pipeline" },
      { role: "Military Police (5811)", category: "Security", education: "High school diploma", aptitude: "ASVAB GT 90+ typically", fitness: "Standard to High", medical: "Medical suitability required", notes: "Law enforcement, corrections, and base security; background check required; civilian policing skills transferable" },
    ],
  },

  "us-navy": {
    countrySlug: "us", branchId: "navy",
    country: "United States", branch: "Navy",
    title: "United States — Navy Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Navy Recruiting — navy.com",
    officialSourceUrl: "https://www.navy.com",
    rows: [
      { role: "Hospital Corpsman (HM)", category: "Medical", education: "High school diploma; science courses helpful", aptitude: "ASVAB VE+MK or Skilled Technical (ST) — higher score", fitness: "Standard to High", medical: "Medical suitability required", notes: "Primary medical care; serves with Fleet Marine Force (FMF) as well as afloat; trains to EMT/Paramedic-comparable level; high demand" },
      { role: "Aviation Boatswain's Mate (AB)", category: "Aviation Support", education: "High school diploma", aptitude: "ASVAB VE+AR or MK score", fitness: "Standard to High — flight deck is physically demanding", medical: "Medical suitability required", notes: "Aircraft launch and recovery on carriers; safety-critical; high-noise, high-risk environment; seagoing service required" },
      { role: "Information Systems Technician (IT)", category: "Cyber / IT", education: "High school diploma; IT and maths helpful", aptitude: "ASVAB Electronics (EL) score — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Shipboard IT networks and communications; security clearance required; growing cyber element; strong career pathway ashore and afloat" },
      { role: "Intelligence Specialist (IS)", category: "Intelligence", education: "High school diploma; strong academics", aptitude: "ASVAB VE+MK or General Intelligence score — high", fitness: "Standard", medical: "Medical suitability required", notes: "Intelligence analysis and imagery; TS/SCI clearance typically required; afloat and ashore billets; analytical skills critical" },
      { role: "Master-at-Arms (MA)", category: "Security", education: "High school diploma", aptitude: "ASVAB AR+VE score", fitness: "Standard to High", medical: "Medical suitability required", notes: "Navy law enforcement and base security; background investigation required; civilian law enforcement skills valued" },
      { role: "Logistics Specialist (LS)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB AR+MK or CL score", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, stores, and inventory management afloat and ashore; key support role in every command" },
      { role: "Machinist's Mate (MM)", category: "Technical", education: "High school diploma; maths and science helpful", aptitude: "ASVAB EL or AR+MK — mechanical aptitude important", fitness: "Standard", medical: "Medical suitability required", notes: "Ship propulsion and auxiliary machinery maintenance; engineering training pipeline; afloat and shore assignments" },
      { role: "Navy Diver (ND pathway)", category: "Diving / Special", education: "High school diploma", aptitude: "ASVAB VE+AR+MK+MC — high composite; Naval Diving screening", fitness: "Very High — demanding swim standards and physical selection", medical: "Enhanced medical: dive physical required including pressure tolerance", notes: "Underwater salvage, EOD support, and ship husbandry; separate selection process; one of the most demanding Navy ratings to qualify for" },
      { role: "Operations Specialist (OS)", category: "Naval Warfare", education: "High school diploma", aptitude: "ASVAB VE+AR score", fitness: "Standard", medical: "Medical suitability required", notes: "Combat information centre; radar, sonar, and tactical picture management; afloat billets on surface ships and submarines" },
      { role: "Seabee Construction Roles (CM/SW/EO/UT)", category: "Engineering", education: "High school diploma; trade background helpful", aptitude: "ASVAB VE+AR or MC/MM — trade-specific", fitness: "Standard to High — field construction work", medical: "Medical suitability required", notes: "Naval construction battalions; deploys as a combatant-builder; civilian trade qualifications recognised; wide MOS range" },
    ],
  },

  "us-air-force": {
    countrySlug: "us", branchId: "air-force",
    country: "United States", branch: "Air Force",
    title: "United States — Air Force Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Air Force Recruiting — airforce.com",
    officialSourceUrl: "https://www.airforce.com",
    rows: [
      { role: "Security Forces (3P0X1)", category: "Security", education: "High school diploma", aptitude: "ASVAB General (G) score applies", fitness: "Standard to High", medical: "Medical suitability required", notes: "Base security, law enforcement, and force protection; background investigation required; deployed security operations possible" },
      { role: "Aircraft Maintenance (various AFSC)", category: "Technical", education: "High school diploma; maths and science helpful", aptitude: "ASVAB Mechanical (M) or Electronics (E) score — AFSC-specific", fitness: "Standard", medical: "Medical suitability required", notes: "Airframe, engine, and avionics maintenance across multiple platforms; specific AFSC depends on aircraft type; strong technical training" },
      { role: "Cyber Systems Operations (3D0X2)", category: "Cyber", education: "High school diploma; IT background helpful", aptitude: "ASVAB Electronics (E) score — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "IT infrastructure and cybersecurity operations; security clearance required; one of the largest and fastest-growing AFSC families" },
      { role: "Intelligence Analyst (1N0X1)", category: "Intelligence", education: "High school diploma; strong academics", aptitude: "ASVAB General (G) score — high", fitness: "Standard", medical: "Medical suitability required", notes: "Imagery, SIGINT, and all-source analysis; TS/SCI clearance typically required; analytical and language skills valued" },
      { role: "Pararescue Candidate (1T2X1)", category: "Special Operations", education: "High school diploma", aptitude: "ASVAB G 50+ minimum; demanding Physical Ability and Stamina Test (PAST)", fitness: "Very High — PAST test: swimming, pullups, situps, pushups, running", medical: "Enhanced medical screening", notes: "Combat search and rescue; one of the most demanding selection pipelines in the US military; medical and combat-focused role" },
      { role: "Tactical Air Control Party (1C4X1)", category: "Special Operations", education: "High school diploma", aptitude: "ASVAB area scores apply; demanding PAST-style selection", fitness: "Very High — selection standard comparable to special operations", medical: "Enhanced medical screening", notes: "Close air support coordination for ground forces; embedded with Army and Special Operations units; intellectually and physically demanding" },
      { role: "Aerospace Medical Service (4N0X1)", category: "Medical", education: "High school diploma; science subjects helpful", aptitude: "ASVAB General (G) score", fitness: "Standard", medical: "Medical suitability required", notes: "Medical support for aircrew and all AF personnel; healthcare training pipeline in service; aeromedical evacuation possible" },
      { role: "Logistics Plans (2G0X1)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB General (G) or Administrative (A) score", fitness: "Standard", medical: "Medical suitability required", notes: "Logistics planning and analysis; operational and administrative focus; wide deployment base" },
      { role: "Air Transportation (2T2X1)", category: "Logistics", education: "High school diploma", aptitude: "ASVAB General (G) or Mechanical (M) score", fitness: "Standard", medical: "Medical suitability required", notes: "Cargo handling, passenger movement, and aerial port operations; handles equipment for deployed forces worldwide" },
    ],
  },

  "us-space-force": {
    countrySlug: "us", branchId: "space-force",
    country: "United States", branch: "Space Force",
    title: "United States — Space Force Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Space Force Recruiting — spaceforce.com",
    officialSourceUrl: "https://www.spaceforce.com",
    rows: [
      { role: "Space Systems Operations (1C6X1)", category: "Space Operations", education: "High school diploma; STEM subjects highly beneficial", aptitude: "ASVAB General (G) or Electronics (E) — typically high", fitness: "Standard", medical: "Medical suitability required", notes: "Satellite and space system command and control; security clearance required; STEM background is a significant advantage" },
      { role: "Cyber Operations Specialist (17S / 1B4X1)", category: "Cyber", education: "High school diploma; IT/STEM background valued", aptitude: "ASVAB Electronics (E) score — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Cyber defence and offensive operations in the space domain; security clearance required; tight interface with Air Force cyber career fields" },
      { role: "Intelligence Analyst (1N0X1 / 1N2X1)", category: "Intelligence", education: "High school diploma; strong academics", aptitude: "ASVAB General (G) score — high", fitness: "Standard", medical: "Medical suitability required", notes: "Space and multi-domain intelligence analysis; TS/SCI clearance typically required; analytical skills essential" },
      { role: "Satellite Communications Specialist (3D1X2)", category: "Communications", education: "High school diploma; technical background", aptitude: "ASVAB Electronics (E) or Surveillance & Communications (SC) score", fitness: "Standard", medical: "Medical suitability required", notes: "SATCOM infrastructure and link management; security clearance required; technical aptitude important; growing career field" },
      { role: "Space Systems / Acquisition Support (contracting path)", category: "Technical / Acquisition", education: "STEM degree pathway or advanced technical qualification for most positions", aptitude: "High academic and technical aptitude expected", fitness: "Standard", medical: "Medical suitability required", notes: "Primarily officer or civilian-heavy but some enlisted technical roles exist; verify current enlisted AFSC availability with recruiter" },
    ],
  },

  "us-coast-guard": {
    countrySlug: "us", branchId: "coast-guard",
    country: "United States", branch: "Coast Guard",
    title: "United States — Coast Guard Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "US Coast Guard Recruiting — gocoastguard.com",
    officialSourceUrl: "https://www.gocoastguard.com",
    rows: [
      { role: "Boatswain's Mate (BM)", category: "Maritime Operations", education: "High school diploma", aptitude: "ASVAB VE+MK score; no fixed minimum but applies to all rates", fitness: "Standard to High — swimming required", medical: "Medical suitability required", notes: "Deck seamanship, boat operations, search and rescue; physically active; wide range of platforms from boats to large cutters" },
      { role: "Maritime Enforcement Specialist (ME)", category: "Security / Law Enforcement", education: "High school diploma", aptitude: "ASVAB AR+VE score", fitness: "Standard to High", medical: "Medical suitability required", notes: "Maritime law enforcement, counter-narcotics, port security; background investigation required; law enforcement authority at sea" },
      { role: "Machinery Technician (MK)", category: "Technical", education: "High school diploma; mechanical aptitude helpful", aptitude: "ASVAB AR+MK mechanical score", fitness: "Standard", medical: "Medical suitability required", notes: "Engine and machinery maintenance afloat and ashore; civilian mechanical qualifications recognised; strong trade pathway" },
      { role: "Operations Specialist (OS)", category: "Maritime Operations", education: "High school diploma", aptitude: "ASVAB VE+AR score", fitness: "Standard", medical: "Medical suitability required", notes: "Search and rescue coordination, command centre operations, radar, and communications; afloat and ashore billets" },
      { role: "Health Services Technician (HS)", category: "Medical", education: "High school diploma; science courses helpful", aptitude: "ASVAB VE+MK or science composite", fitness: "Standard", medical: "Medical suitability required", notes: "Medical and dental support; comparable to Navy Hospital Corpsman; afloat and shore billets; civilian healthcare skills valued" },
      { role: "Information Systems Technician (IT)", category: "Cyber / IT", education: "High school diploma; IT background helpful", aptitude: "ASVAB Electronics (E) score", fitness: "Standard", medical: "Medical suitability required", notes: "IT networks and communications systems; security clearance required; supports command, control, and communications" },
      { role: "Aviation Maintenance Technician (AMT)", category: "Aviation", education: "High school diploma; technical subjects helpful", aptitude: "ASVAB MM or EL score", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance for CG aviation fleet (HC-144, HC-130, MH-65, MH-60); FAA A&P licence pathway possible" },
      { role: "Rescue Swimmer (AST pathway)", category: "Special / Rescue", education: "High school diploma", aptitude: "ASVAB VE+MK applies; demanding physical screening", fitness: "Very High — AST swim and physical standards", medical: "Enhanced medical including swim fitness assessment", notes: "Aviation Survival Technician; helicopter rescue swimmer in open water; one of the most demanding CG rate selections" },
    ],
  },

  // ==========================================================================
  // GERMANY
  // ==========================================================================

  "germany-heer": {
    countrySlug: "germany", branchId: "heer",
    country: "Germany", branch: "Heer (Army)",
    title: "Germany — Heer (Army) Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundeswehr Karriere — bundeswehrkarriere.de",
    officialSourceUrl: "https://www.bundeswehrkarriere.de",
    rows: [
      { role: "Jäger (Infantry Soldier)", category: "Infantry", education: "Hauptschulabschluss or equivalent", aptitude: "Bundeswehr Eignungstest (aptitude test) required", fitness: "High — Sporttest and physical assessment required", medical: "Medical suitability required", notes: "Core ground combat soldier; serves in Jäger battalions; conscript-era experience replaced by professional volunteer service" },
      { role: "Fallschirmjäger (Airborne Infantry)", category: "Airborne / Infantry", education: "Hauptschulabschluss minimum", aptitude: "Eignungstest; higher aptitude score expected", fitness: "Very High — selection standard significantly above standard infantry", medical: "Enhanced medical screening", notes: "Airborne infantry; demanding selection process beyond standard Heer entry; physically and mentally demanding" },
      { role: "Panzergrenadier (Mechanised Infantry)", category: "Armoured Infantry", education: "Hauptschulabschluss", aptitude: "Eignungstest applies", fitness: "High", medical: "Medical suitability required", notes: "Mechanised infantry on Schützenpanzer Puma or Marder; combined arms teamwork; close cooperation with Panzertruppe" },
      { role: "Panzertruppe (Tank Crew)", category: "Armoured", education: "Hauptschulabschluss", aptitude: "Eignungstest; mechanical aptitude valued", fitness: "High", medical: "Medical suitability required", notes: "Leopard 2 main battle tank; tactical and technical role; confined spaces; strong teamwork required" },
      { role: "Pionier (Combat Engineer)", category: "Engineering", education: "Hauptschulabschluss; technical background helpful", aptitude: "Technical aptitude assessed in Eignungstest", fitness: "High", medical: "Medical suitability required", notes: "Combat engineering, demolitions, bridging, and obstacle clearance; technical qualifications possible in service" },
      { role: "Feldjäger (Military Police)", category: "Security", education: "Hauptschulabschluss; Realschulabschluss often preferred", aptitude: "Eignungstest; psychological assessment included", fitness: "Standard to High", medical: "Medical suitability required", notes: "Military police, law enforcement, and force protection; background investigation required; civilian police experience valued" },
      { role: "Instandsetzungsmechaniker (Maintenance)", category: "Technical", education: "Hauptschulabschluss; technical/vocational training valued", aptitude: "Technical aptitude in Eignungstest", fitness: "Standard", medical: "Medical suitability required", notes: "Vehicle and equipment maintenance; apprenticeship-level qualifications pathway; civilian trade qualifications may be recognised" },
      { role: "Sanitätsdienst Support (Heer Medic)", category: "Medical", education: "Hauptschulabschluss to degree depending on role", aptitude: "Academic aptitude for clinical roles", fitness: "Standard to High", medical: "Medical suitability required", notes: "Range from basic first aid support soldier to qualified Sanitätsoffizier; entry level depends on existing qualifications" },
      { role: "Logistiksoldat (Logistics)", category: "Logistics", education: "Hauptschulabschluss", aptitude: "Eignungstest", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, transport, and distribution; operates across all Heer units; driving licences gained in service" },
    ],
  },

  "germany-marine-de": {
    countrySlug: "germany", branchId: "marine-de",
    country: "Germany", branch: "Marine (Navy)",
    title: "Germany — Marine (Navy) Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundeswehr Karriere — Marine",
    officialSourceUrl: "https://www.bundeswehrkarriere.de/streitkraefte/marine",
    rows: [
      { role: "Bootsmann / Seemannschaft (Seamanship)", category: "Maritime Operations", education: "Hauptschulabschluss", aptitude: "Eignungstest; maritime aptitude assessed", fitness: "Standard to High — swimming required", medical: "Enhanced medical for seagoing service", notes: "Deck seamanship and boat handling aboard Bundeswehr surface vessels; seagoing assignments expected; physical sea conditions" },
      { role: "Marinejäger (Naval Infantry)", category: "Naval Infantry", education: "Hauptschulabschluss", aptitude: "Eignungstest; higher aptitude expected", fitness: "High", medical: "Medical suitability required", notes: "Coastal and maritime security; similar to infantry but navy-assigned and focused on maritime force protection" },
      { role: "Maschinensoldat (Marine Engineering)", category: "Technical", education: "Hauptschulabschluss; technical or vocational qualification helpful", aptitude: "Technical aptitude in Eignungstest", fitness: "Standard", medical: "Medical suitability required", notes: "Ship propulsion, auxiliary systems, and mechanical maintenance; engineering qualifications earned in service" },
      { role: "Nautiksoldat (Navigation)", category: "Maritime Operations", education: "Hauptschulabschluss; maths helpful", aptitude: "Eignungstest", fitness: "Standard to High", medical: "Enhanced medical for seagoing service", notes: "Navigation and watch-keeping duties aboard surface vessels; seagoing assignments required" },
      { role: "Minentaucher (Mine Clearance Diver)", category: "Diving / Engineering", education: "Hauptschulabschluss; fitness critical", aptitude: "Diving selection and aptitude — demanding", fitness: "Very High — diving and swim selection standards", medical: "Enhanced medical: diving medical required including pressure tolerance", notes: "Mine clearance and underwater operations; demanding physical and medical selection beyond standard navy entry" },
      { role: "IT / Fernmeldesoldat (Communications)", category: "Communications", education: "Realschulabschluss or HTL preferred; IT skills valued", aptitude: "Technical aptitude in Eignungstest — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Ship communications and IT systems; security clearance may apply; seagoing and shore assignments" },
    ],
  },

  "germany-luftwaffe": {
    countrySlug: "germany", branchId: "luftwaffe",
    country: "Germany", branch: "Luftwaffe (Air Force)",
    title: "Germany — Luftwaffe (Air Force) Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundeswehr Karriere — Luftwaffe",
    officialSourceUrl: "https://www.bundeswehrkarriere.de/streitkraefte/luftwaffe",
    rows: [
      { role: "Luftwaffeninfanterie (Airbase Security)", category: "Security", education: "Hauptschulabschluss", aptitude: "Eignungstest", fitness: "Standard to High", medical: "Medical suitability required", notes: "Ground defence of Luftwaffe air bases; physically active; similar role to RAF Regiment" },
      { role: "Fluggerätemechaniker (Aircraft Technician)", category: "Technical", education: "Hauptschulabschluss; technical or vocational training valued", aptitude: "Technical aptitude in Eignungstest — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance; specific to airframe type; apprenticeship-level training pathway; technically demanding role" },
      { role: "Flugsicherungssoldat (ATC Support)", category: "Aviation Support", education: "Realschulabschluss or equivalent; English helpful", aptitude: "Communication and spatial aptitude assessed", fitness: "Standard", medical: "Enhanced medical: vision and hearing standards", notes: "Air traffic support and flight safety; English language communication important; safety-critical environment" },
      { role: "Fernmeldesoldat (Signals / Communications)", category: "Communications", education: "Hauptschulabschluss; IT skills helpful", aptitude: "Technical aptitude in Eignungstest", fitness: "Standard", medical: "Medical suitability required", notes: "Communications infrastructure for air operations; IT and radio systems; security clearance may apply" },
      { role: "Raketensystemsoldat (Air Defence)", category: "Air Defence", education: "Hauptschulabschluss; technical aptitude important", aptitude: "Technical aptitude in Eignungstest — higher threshold", fitness: "Standard to High", medical: "Medical suitability required", notes: "Surface-to-air missile systems (PATRIOT, MANTIS); technically demanding; safety-critical operational role" },
      { role: "Sanitätsdienst (Medical Support, Luftwaffe)", category: "Medical", education: "Role-dependent: Hauptschulabschluss to degree", aptitude: "Academic aptitude for clinical roles", fitness: "Standard", medical: "Medical suitability required", notes: "Medical support at air bases; entry level depends on qualifications; wide range from support soldier to qualified clinician" },
    ],
  },

  // ==========================================================================
  // FRANCE
  // ==========================================================================

  "france-armee-de-terre": {
    countrySlug: "france", branchId: "armee-de-terre",
    country: "France", branch: "Armée de Terre (Army)",
    title: "France — Armée de Terre Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Armée de Terre Recrutement — sengager.fr",
    officialSourceUrl: "https://www.sengager.fr",
    rows: [
      { role: "Soldat Fantassin (Infantry Soldier)", category: "Infantry", education: "No minimum diploma required for basic enlisted entry", aptitude: "SIGYCOP aptitude profile assessed at recruiting centre", fitness: "High — physical tests including running, strength, and endurance required", medical: "Medical suitability required", notes: "Core infantry soldier; French language proficiency required; physically demanding from initial training; wide range of sub-units" },
      { role: "Parachutiste (Paratrooper)", category: "Airborne / Infantry", education: "No minimum diploma for basic enlisted entry", aptitude: "SIGYCOP profile; airborne selection screening", fitness: "Very High — airborne selection standard", medical: "Enhanced medical screening", notes: "Airborne infantry; Légion étrangère also has airborne regiment (2 REP); demanding physical selection; French language required for most units" },
      { role: "Génie Combat (Combat Engineer)", category: "Engineering", education: "CAP/BEP or equivalent helpful for technical specialisations", aptitude: "SIGYCOP profile", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, fortification; physically and technically demanding; technical qualifications gained in service" },
      { role: "Artilleur (Artillery)", category: "Combat Support", education: "No minimum diploma; numeracy helpful", aptitude: "SIGYCOP profile", fitness: "High", medical: "Medical suitability required", notes: "Fire support; artillery pieces and rocket systems; numeracy advantageous for fire direction roles; teamwork critical" },
      { role: "Logisticien (Logistics)", category: "Logistics", education: "No minimum diploma", aptitude: "SIGYCOP profile; role-dependent", fitness: "Standard", medical: "Medical suitability required", notes: "Supply, transport, and distribution; wide range of sub-specialities; deployed and garrison roles" },
      { role: "Spécialiste Transmissions (Communications)", category: "Communications", education: "Baccalauréat or technical IT qualification preferred", aptitude: "Technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Communications systems and IT infrastructure; security clearance may apply; increasingly cyber-focused" },
      { role: "Médecin / Infirmier de Troupe (Medic / Medical Support)", category: "Medical", education: "BEP to nursing/medical degree depending on role", aptitude: "Academic aptitude for clinical roles", fitness: "Standard", medical: "Medical suitability required", notes: "Medical support ranging from combat first aid to clinical care; qualification level determines entry route; Service de Santé des Armées overlap" },
    ],
  },

  "france-marine-nationale": {
    countrySlug: "france", branchId: "marine-nationale",
    country: "France", branch: "Marine Nationale (Navy)",
    title: "France — Marine Nationale Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Marine Nationale Recrutement — sengager.fr/marine",
    officialSourceUrl: "https://www.sengager.fr",
    rows: [
      { role: "Fusilier Marin (Naval Infantry / Security)", category: "Naval Infantry", education: "No minimum diploma (SIGYCOP assessed)", aptitude: "SIGYCOP aptitude profile", fitness: "High", medical: "Medical suitability required", notes: "Naval base and port security, ship protection, boarding operations; physical standards required; seagoing possible" },
      { role: "Mécanicien de la Marine (Marine Engineer)", category: "Technical", education: "BEP or Baccalauréat; technical subjects helpful", aptitude: "Technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Ship propulsion and auxiliary systems; seagoing deployments expected; engineering qualifications gained in service" },
      { role: "Électronicien de la Marine (Electronics)", category: "Technical", education: "Baccalauréat technique or equivalent", aptitude: "Technical aptitude — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Ship electronics, sensors, and weapon systems; technically demanding; seagoing and shore assignments" },
      { role: "Transmetteur / Communications Marin", category: "Communications", education: "Baccalauréat or IT qualification helpful", aptitude: "Technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Shipboard communications systems; security clearance may apply; increasingly digital and cyber-relevant" },
      { role: "Plongeur de Bord (Clearance Diver)", category: "Diving", education: "Baccalauréat", aptitude: "Selection testing and aptitude; demanding screening", fitness: "Very High — diving selection standard", medical: "Enhanced medical: diving medical required", notes: "Underwater demolition, hull inspection, and clearance; demanding physical and medical selection beyond standard naval entry" },
      { role: "Officier Marinier Pont (Deck Petty Officer)", category: "Maritime Operations", education: "Baccalauréat typically required for this career track", aptitude: "Aptitude and leadership testing", fitness: "Standard to High", medical: "Medical suitability required", notes: "Navigation, seamanship, and watch-keeping; leadership and NCO development track; seagoing service expected" },
      { role: "Logisticien Marine (Logistics)", category: "Logistics", education: "No minimum diploma", aptitude: "SIGYCOP role profile", fitness: "Standard", medical: "Medical suitability required", notes: "Supply, catering, and stores management afloat and ashore; wide range of sub-roles" },
    ],
  },

  "france-armee-de-lair": {
    countrySlug: "france", branchId: "armee-de-lair",
    country: "France", branch: "Armée de l'Air et de l'Espace (Air & Space Force)",
    title: "France — Armée de l'Air et de l'Espace Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Armée de l'Air Recrutement — sengager.fr",
    officialSourceUrl: "https://www.sengager.fr",
    rows: [
      { role: "Mécanicien Aéronautique (Aircraft Technician)", category: "Technical", education: "Baccalauréat professionnel or technical equivalent", aptitude: "Technical aptitude assessed — higher threshold for this role", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance; specific to airframe or system type; technically demanding; strong career and qualification pathway" },
      { role: "Contrôleur Aérien (Air Traffic Controller)", category: "Aviation Support", education: "Baccalauréat; English language essential", aptitude: "Aptitude testing including language, spatial reasoning, and concentration", fitness: "Standard", medical: "Enhanced medical: vision and hearing standards; stress tolerance assessed", notes: "Air traffic control; safety-critical; English communication standard required; demanding cognitive aptitude selection" },
      { role: "Spécialiste Défense Sol-Air (Air Defence)", category: "Air Defence", education: "Baccalauréat or technical qualification", aptitude: "Technical aptitude assessed", fitness: "Standard to High", medical: "Medical suitability required", notes: "Surface-to-air missile systems; technically demanding; safety-critical operational role" },
      { role: "Transmetteur (Signals / IT)", category: "Communications", education: "Baccalauréat or IT qualification", aptitude: "Technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Communications and IT infrastructure for air operations; security clearance may apply" },
      { role: "Personnel Sécurité-Protection (Security / Base Defence)", category: "Security", education: "No minimum diploma (SIGYCOP assessed)", aptitude: "SIGYCOP aptitude profile", fitness: "Standard to High", medical: "Medical suitability required", notes: "Air base security and force protection; physical standards required; role comparable to RAF Regiment or USAF Security Forces" },
      { role: "Médecin / Infirmier Militaire (Medical)", category: "Medical", education: "Nursing degree or medical degree for clinical roles", aptitude: "Academic qualification required", fitness: "Standard", medical: "Medical suitability required", notes: "Medical support to aircrew and all personnel; qualification level determines entry; SSA (medical service) overlap for senior roles" },
    ],
  },

  // ==========================================================================
  // AUSTRIA
  // ==========================================================================

  "austria-bundesheer": {
    countrySlug: "austria", branchId: "bundesheer",
    country: "Austria", branch: "Bundesheer (Armed Forces — General)",
    title: "Austria — Bundesheer General Service Overview",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundesheer Karriere — bundesheer.at",
    officialSourceUrl: "https://www.bundesheer.at/karriere",
    rows: [
      { role: "Grundwehrdiener (Compulsory Service)", category: "General Military", education: "Pflichtschulabschluss (9 years compulsory schooling)", aptitude: "Basic assessment at Stellungskommission", fitness: "Standard — assessed during Stellung (military registration)", medical: "Medical classification assigned at Stellung", notes: "Mandatory military service for Austrian male citizens; 6 months basic service; specialist training follows initial period" },
      { role: "Berufssoldat (Professional Soldier — Enlisted)", category: "Career Military", education: "Pflichtschulabschluss minimum; additional qualifications improve opportunities", aptitude: "Aptitude and selection testing at recruiting centre", fitness: "Standard to High depending on role", medical: "Medical suitability required", notes: "Career soldier pathway; wide range of specialisms available after basic training; contract-based service" },
      { role: "Unteroffizier (NCO Pathway)", category: "Leadership", education: "Pflichtschulabschluss; Matura helpful for advancement", aptitude: "NCO selection and aptitude testing", fitness: "Standard to High", medical: "Medical suitability required", notes: "Leadership pathway below officer level; specialist and leadership roles; professional development through Heeresunteroffiziersakademie" },
      { role: "Offizier (Officer Pathway)", category: "Officer", education: "Matura (Abitur equivalent) or university degree", aptitude: "Officer selection and academic assessment", fitness: "Standard to High", medical: "Medical suitability required", notes: "Officer entry through Theresianische Militärakademie (ThMilAk); degree-level education included; leadership and command focused" },
    ],
  },

  "austria-landstreitkraefte": {
    countrySlug: "austria", branchId: "landstreitkraefte",
    country: "Austria", branch: "Landstreitkräfte (Land Forces)",
    title: "Austria — Landstreitkräfte (Land Forces) Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundesheer Karriere — bundesheer.at",
    officialSourceUrl: "https://www.bundesheer.at/karriere",
    rows: [
      { role: "Jäger (Infantry Soldier)", category: "Infantry", education: "Pflichtschulabschluss", aptitude: "Aptitude and physical assessment", fitness: "High — physical fitness test required", medical: "Medical suitability required", notes: "Core ground combat role; serves in Jäger battalions; compulsory service or professional pathway; physically demanding" },
      { role: "Panzergrenadier (Mechanised Infantry)", category: "Armoured Infantry", education: "Pflichtschulabschluss", aptitude: "Aptitude assessment", fitness: "High", medical: "Medical suitability required", notes: "Mechanised infantry on Schützenpanzer Ulan; combined arms operations; teamwork in armoured vehicles" },
      { role: "Panzersoldat (Tank Crew)", category: "Armoured", education: "Pflichtschulabschluss; technical interest helpful", aptitude: "Aptitude assessment; mechanical aptitude valued", fitness: "High", medical: "Medical suitability required", notes: "Leopard 2 main battle tank; technical and tactical role; confined spaces; strong mechanical aptitude valued" },
      { role: "Pionier (Combat Engineer)", category: "Engineering", education: "Pflichtschulabschluss; technical background helpful", aptitude: "Technical aptitude may apply", fitness: "High", medical: "Medical suitability required", notes: "Combat engineering, demolitions, bridging, route clearance; technical qualifications possible in service" },
      { role: "Militärpolizei (Military Police)", category: "Security", education: "Pflichtschulabschluss; Matura helpful", aptitude: "Assessment includes psychological testing", fitness: "Standard to High", medical: "Medical suitability required", notes: "Military policing and force protection; background check required; civilian law enforcement experience valued" },
      { role: "ABC-Abwehr (CBRN Specialist)", category: "Specialist", education: "Pflichtschulabschluss; science background helpful", aptitude: "Technical aptitude assessed", fitness: "Standard to High", medical: "Medical suitability required", notes: "CBRN (chemical, biological, radiological, nuclear) protection and decontamination; specialist training provided after basic entry" },
      { role: "Logistiksoldat (Logistics)", category: "Logistics", education: "Pflichtschulabschluss", aptitude: "Role-dependent assessment", fitness: "Standard", medical: "Medical suitability required", notes: "Supply, transport, and distribution support; operates across all Land Forces units" },
    ],
  },

  "austria-luftstreitkraefte": {
    countrySlug: "austria", branchId: "luftstreitkraefte",
    country: "Austria", branch: "Luftstreitkräfte (Air Forces)",
    title: "Austria — Luftstreitkräfte (Air Forces) Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundesheer Karriere — bundesheer.at",
    officialSourceUrl: "https://www.bundesheer.at/karriere",
    rows: [
      { role: "Flugzeugwart (Aircraft Ground Crew)", category: "Technical", education: "Pflichtschulabschluss; technical or vocational qualification preferred", aptitude: "Technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance and ground support for Austrian Air Forces fleet; technical training provided" },
      { role: "Luftraumüberwachung (Air Surveillance)", category: "Air Defence", education: "Pflichtschulabschluss; maths and spatial reasoning helpful", aptitude: "Technical and analytical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Airspace monitoring and control; radar and surveillance systems; security clearance may apply" },
      { role: "Fliegerabwehr (Anti-Aircraft / SHORAD)", category: "Air Defence", education: "Pflichtschulabschluss; technical aptitude", aptitude: "Aptitude assessment", fitness: "Standard to High", medical: "Medical suitability required", notes: "Short-range air defence systems operation; technically demanding; works closely with Heer and Luftstreitkräfte units" },
      { role: "Hubschraubersoldat (Helicopter Support)", category: "Aviation Support", education: "Pflichtschulabschluss; technical background helpful", aptitude: "Aptitude assessment", fitness: "Standard", medical: "Medical suitability required", notes: "Ground crew and support for Austrian helicopter fleet; various ground crew specialisms available" },
      { role: "Fernmeldesoldat (Communications, Air)", category: "Communications", education: "Pflichtschulabschluss; IT background helpful", aptitude: "Technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Communications and data link systems for air operations; security clearance may apply" },
    ],
  },

  "austria-jagdkommando": {
    countrySlug: "austria", branchId: "jagdkommando",
    country: "Austria", branch: "Jagdkommando (Special Operations)",
    title: "Austria — Jagdkommando Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Bundesheer — Jagdkommando",
    officialSourceUrl: "https://www.bundesheer.at/karriere",
    rows: [
      { role: "Jagdkommandosoldat (Special Operations Candidate)", category: "Special Operations", education: "Pflichtschulabschluss minimum; typically applies after completing standard military service", aptitude: "Demanding selection course (Grundlehrgang); psychological and physical aptitude assessed intensively", fitness: "Very High — one of the most demanding physical selections in Austrian service", medical: "Enhanced medical screening including psychological assessment", notes: "Austrian special operations force; volunteers apply from within serving military personnel; extremely demanding selection; parachute, combat diving, and specialist skills follow if selected" },
    ],
  },

  // ==========================================================================
  // CANADA
  // ==========================================================================

  "canada-canadian-army": {
    countrySlug: "canada", branchId: "canadian-army",
    country: "Canada", branch: "Canadian Army",
    title: "Canada — Canadian Army Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "CAF Recruiting — forces.ca",
    officialSourceUrl: "https://www.forces.ca",
    rows: [
      { role: "Infantry Soldier", category: "Combat", education: "Grade 10 minimum; Grade 12 preferred", aptitude: "CFAT (Canadian Forces Aptitude Test) required — minimum score applies", fitness: "High — FORCE Evaluation; loaded march; combat-ready standard", medical: "Medical suitability required", notes: "Core ground combat; one of the most physically demanding CAF occupations; bilingual (French/English) an asset in some units" },
      { role: "Armoured Soldier", category: "Armoured", education: "Grade 10 minimum; Grade 12 preferred", aptitude: "CFAT score applies", fitness: "High", medical: "Medical suitability required", notes: "Leopard 2 tank and LAV 6 reconnaissance crew; mechanical aptitude valued; close teamwork in confined vehicles" },
      { role: "Field Artillery Soldier", category: "Combat Support", education: "Grade 10 minimum; maths helpful", aptitude: "CFAT score applies; numeracy beneficial", fitness: "High", medical: "Medical suitability required", notes: "Artillery fire support; M777 howitzers and MLRS platforms; technical and tactical role; numeracy is a practical advantage" },
      { role: "Combat Engineer", category: "Engineering", education: "Grade 10 minimum; maths and science beneficial", aptitude: "CFAT — moderate to high score", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, construction, and route clearance; civilian trade qualifications may be recognised; technically demanding" },
      { role: "Signal Operator", category: "Communications", education: "Grade 10 minimum; maths helpful", aptitude: "CFAT — technical aptitude expected", fitness: "Standard", medical: "Medical suitability required", notes: "Communications systems at formation and unit level; security clearance required for some specialisations; increasingly digital" },
      { role: "Medical Technician", category: "Medical", education: "Grade 12 with science; some roles require college diploma", aptitude: "CFAT — higher score expected", fitness: "Standard to High", medical: "Medical suitability required", notes: "Emergency and primary medical care in garrison and operations; EMT-equivalent training provided; high demand occupation" },
      { role: "Vehicle Technician", category: "Technical", education: "Grade 10 minimum; mechanical aptitude or trade qualification", aptitude: "CFAT — technical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Wheeled and tracked vehicle maintenance; apprenticeship pathway; civilian trade qualifications may be recognised" },
      { role: "Intelligence Operator", category: "Intelligence", education: "Grade 12 preferred; strong academics valued", aptitude: "CFAT — higher score; analytical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Intelligence collection, analysis, and reporting; Top Secret security clearance required; analytical and writing skills critical" },
    ],
  },

  "canada-royal-canadian-navy": {
    countrySlug: "canada", branchId: "royal-canadian-navy",
    country: "Canada", branch: "Royal Canadian Navy",
    title: "Canada — Royal Canadian Navy Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "CAF Recruiting — forces.ca",
    officialSourceUrl: "https://www.forces.ca",
    rows: [
      { role: "Naval Combat Information Operator (NCIO)", category: "Naval Warfare", education: "Grade 12 with maths and English", aptitude: "CFAT — technical aptitude assessed", fitness: "Standard", medical: "Enhanced medical for seagoing service", notes: "Tactical operations and combat systems afloat; seagoing service required on frigates and other RCN vessels" },
      { role: "Marine Engineer (ME)", category: "Technical", education: "Grade 12 with maths and science", aptitude: "CFAT — technical aptitude — higher score", fitness: "Standard", medical: "Enhanced medical for seagoing service", notes: "Ship propulsion, power plant, and auxiliary systems; engineering qualifications earned in service; seagoing deployments expected" },
      { role: "Naval Weapons Technician (NWT)", category: "Technical", education: "Grade 12 with maths and science", aptitude: "CFAT — high technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Weapons and sensor systems maintenance; technically demanding; afloat and shore billets" },
      { role: "Naval Communicator (NC)", category: "Communications", education: "Grade 12 with maths and English", aptitude: "CFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Shipboard communications systems; security clearance required; increasingly cyber and IT-focused" },
      { role: "Naval Electronic Sensor Operator (NESO)", category: "Technical", education: "Grade 12; maths and IT helpful", aptitude: "CFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Electronic warfare and radar sensor systems; security clearance required for some roles" },
      { role: "Naval Warfare Officer pathway (MARS)", category: "Naval Warfare (Officer)", education: "Degree or university acceptance typically required", aptitude: "CFAT — high score; leadership assessment", fitness: "Standard", medical: "Medical suitability required", notes: "Maritime Surface and Sub-Surface officer; navigation, weapons, and command track; RMC or civilian university education supported" },
    ],
  },

  "canada-royal-canadian-air-force": {
    countrySlug: "canada", branchId: "royal-canadian-air-force",
    country: "Canada", branch: "Royal Canadian Air Force",
    title: "Canada — Royal Canadian Air Force Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "CAF Recruiting — forces.ca",
    officialSourceUrl: "https://www.forces.ca",
    rows: [
      { role: "Aerospace Control Operator (ACS)", category: "Aviation Control", education: "Grade 12 with maths, English, and sciences", aptitude: "CFAT — high score; spatial reasoning and multitasking assessed", fitness: "Standard", medical: "Enhanced medical: vision and hearing standards", notes: "Air traffic and airspace control; safety-critical; one of the more demanding aptitude selections in the CAF" },
      { role: "Airfield Defence Guard (ADG)", category: "Security", education: "Grade 10 minimum; Grade 12 preferred", aptitude: "CFAT — moderate score", fitness: "High", medical: "Medical suitability required", notes: "RCAF base security and force protection; physically active; role similar to RAF Regiment Gunner" },
      { role: "Aircraft Structures Technician", category: "Technical", education: "Grade 12 with maths and science", aptitude: "CFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Airframe maintenance and repair; apprenticeship-level training; civilian trade qualifications may be recognised" },
      { role: "Avionics Systems Technician", category: "Technical", education: "Grade 12 with maths and electronics/physics", aptitude: "CFAT — high technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft avionics and electronic systems; one of the more technically demanding RCAF occupations; strong career pathway" },
      { role: "Aviation Systems Technician", category: "Technical", education: "Grade 12 with maths and science", aptitude: "CFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft engine and power systems maintenance; engineering training provided; wide range of RCAF aircraft types" },
      { role: "Pilot Selection Pathway (Regular Force)", category: "Aviation (Officer)", education: "Degree typically required; STEM subjects valuable", aptitude: "CFAT — very high score; Pilot Aptitude Battery (CAFPA) assessment", fitness: "Very High — aircrew fitness standard", medical: "Enhanced medical: aviation medical standard", notes: "Pilot officer entry; demanding aptitude and medical selection; RMC or civilian university education supported; highly competitive" },
    ],
  },

  // ==========================================================================
  // AUSTRALIA
  // ==========================================================================

  "australia-australian-army": {
    countrySlug: "australia", branchId: "australian-army",
    country: "Australia", branch: "Australian Army",
    title: "Australia — Australian Army Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "ADF Careers — adfcareers.gov.au",
    officialSourceUrl: "https://www.adfcareers.gov.au",
    rows: [
      { role: "Infantry Soldier", category: "Combat", education: "Year 10 minimum; Year 12 preferred", aptitude: "ADFAT (ADF Aptitude Test) required", fitness: "High — pre-enlistment fitness assessment; physically demanding training", medical: "Medical suitability required", notes: "Core ground combat; one of the most physically demanding roles in the ADF; serve in battalions across Australia" },
      { role: "Armoured Corps Crewman", category: "Armoured", education: "Year 10 minimum", aptitude: "ADFAT applies", fitness: "High", medical: "Medical suitability required", notes: "M1A1 Abrams and ASLAV; mechanical aptitude valued; confined vehicle environment; combined arms operations" },
      { role: "Royal Australian Artillery Gunner", category: "Combat Support", education: "Year 10 minimum; maths helpful", aptitude: "ADFAT applies; numeracy beneficial", fitness: "High", medical: "Medical suitability required", notes: "Fire support; M777 and HIMARS platforms; technical and tactical; numeracy is a practical advantage in the field" },
      { role: "Combat Engineer", category: "Engineering", education: "Year 10 minimum; maths helpful", aptitude: "ADFAT — technical aptitude assessed", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, route clearance, construction; civilian trade qualifications may be recognised in service" },
      { role: "Signals / Telecommunications Technician", category: "Communications", education: "Year 12 with maths/IT; TAFE qualifications valued", aptitude: "ADFAT — higher technical score", fitness: "Standard", medical: "Medical suitability required", notes: "Communications and electronic warfare systems; security clearance required for some roles; tech-focused career pathway" },
      { role: "Army Medic (Health Services)", category: "Medical", education: "Year 12 with science; health qualifications valued", aptitude: "ADFAT — higher score", fitness: "Standard to High", medical: "Medical suitability required", notes: "Emergency and primary medical care; civilian qualifications may credit into training; deployed and garrison roles" },
      { role: "Intelligence Analyst", category: "Intelligence", education: "Year 12; strong academics preferred", aptitude: "ADFAT — higher score", fitness: "Standard", medical: "Medical suitability required", notes: "Intelligence collection and analysis; security clearance required; analytical and writing skills essential" },
      { role: "Supply / Logistics Soldier", category: "Logistics", education: "Year 10 minimum", aptitude: "ADFAT applies", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, warehousing, and distribution; essential support role across all Army units" },
      { role: "Vehicle / Mechanical Technician", category: "Technical", education: "Year 10; trade qualification or maths/science helpful", aptitude: "ADFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Wheeled and tracked vehicle maintenance; trade qualifications earned in service; civilian mechanic experience valued" },
      { role: "Military Police", category: "Security", education: "Year 12 preferred", aptitude: "ADFAT — higher score; psychological assessment", fitness: "Standard to High", medical: "Medical suitability required", notes: "Law enforcement and base security; background investigation required; civilian policing background valued" },
    ],
  },

  "australia-royal-australian-navy": {
    countrySlug: "australia", branchId: "royal-australian-navy",
    country: "Australia", branch: "Royal Australian Navy",
    title: "Australia — Royal Australian Navy Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "ADF Careers — adfcareers.gov.au",
    officialSourceUrl: "https://www.adfcareers.gov.au",
    rows: [
      { role: "Able Seaman — Boatswain's Mate / Seamanship", category: "Maritime Operations", education: "Year 10 minimum", aptitude: "ADFAT applies", fitness: "Standard to High — swimming required", medical: "Enhanced medical for seagoing service", notes: "Deck seamanship and boat work; seagoing deployments on frigates, destroyers, and patrol vessels; physically active" },
      { role: "Marine Technician (Propulsion)", category: "Technical", education: "Year 12 with maths and science", aptitude: "ADFAT — technical aptitude", fitness: "Standard", medical: "Enhanced medical for seagoing service", notes: "Ship propulsion and auxiliary systems; engineering qualifications earned in service; afloat and shore postings" },
      { role: "Electronics Technician (Weapon Systems)", category: "Technical", education: "Year 12 with maths, physics, or electronics", aptitude: "ADFAT — higher technical score", fitness: "Standard", medical: "Medical suitability required", notes: "Ship electronics, sensors, and weapon systems; technically demanding; strong career pathway with qualifications" },
      { role: "Combat Systems Operator", category: "Naval Warfare", education: "Year 12 preferred", aptitude: "ADFAT applies", fitness: "Standard", medical: "Medical suitability required", notes: "Radar, sonar, and combat management systems; seagoing assignments on all major surface vessels" },
      { role: "Clearance Diver (CD) Pathway", category: "Diving / Special", education: "Year 12; high fitness essential", aptitude: "ADFAT — high score; CDT selection course", fitness: "Very High — demanding diving selection", medical: "Enhanced medical: diving medical required including pressure tolerance", notes: "Explosive ordnance disposal (EOD) and underwater operations; demanding physical and medical selection beyond standard navy entry" },
      { role: "Naval Communicator / CIS", category: "Communications", education: "Year 12; IT helpful", aptitude: "ADFAT — technical aptitude", fitness: "Standard", medical: "Medical suitability required", notes: "Shipboard IT and communications systems; security clearance required; seagoing and shore billets" },
      { role: "Maritime Logistics Officer (Sailor pathway)", category: "Logistics", education: "Year 10 minimum", aptitude: "ADFAT applies", fitness: "Standard", medical: "Medical suitability required", notes: "Supply, catering, and stores management afloat and ashore; essential support across the fleet" },
    ],
  },

  "australia-raaf": {
    countrySlug: "australia", branchId: "raaf",
    country: "Australia", branch: "Royal Australian Air Force",
    title: "Australia — Royal Australian Air Force Role Requirements",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "ADF Careers — adfcareers.gov.au",
    officialSourceUrl: "https://www.adfcareers.gov.au",
    rows: [
      { role: "Aircraft Technician", category: "Technical", education: "Year 12 with maths and science; technical TAFE qualification helpful", aptitude: "ADFAT — high technical score", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft airframe, engine, or avionics maintenance; apprenticeship-level training; wide range of RAAF aircraft types including F-35A" },
      { role: "Air Defence Guard (ADG)", category: "Security", education: "Year 12 preferred", aptitude: "ADFAT — moderate score", fitness: "High", medical: "Medical suitability required", notes: "RAAF base security and force protection; physically active; role comparable to RAF Regiment Gunner or USAF Security Forces" },
      { role: "Air Traffic Controller (ATCO)", category: "Aviation Control", education: "Year 12 with maths and English; ATAR score may apply", aptitude: "ADFAT — high score; spatial reasoning and concentration", fitness: "Standard", medical: "Enhanced medical: vision and hearing standards", notes: "Air traffic control; safety-critical; English communication standard required; demanding aptitude selection process" },
      { role: "Cyberspace Operator", category: "Cyber", education: "Year 12 with maths/IT; TAFE IT qualification valued", aptitude: "ADFAT — high technical score", fitness: "Standard", medical: "Medical suitability required", notes: "Cyber operations and IT systems; security clearance required; fast-growing RAAF career field" },
      { role: "Intelligence Analyst", category: "Intelligence", education: "Year 12; strong academics", aptitude: "ADFAT — higher score", fitness: "Standard", medical: "Medical suitability required", notes: "Air intelligence and all-source analysis; security clearance required; analytical and writing skills critical" },
      { role: "Imagery Analyst", category: "Intelligence", education: "Year 12; analytical subjects", aptitude: "ADFAT — higher score; spatial reasoning", fitness: "Standard", medical: "Medical suitability required", notes: "Geospatial and imagery intelligence; security clearance required; niche but growing specialism within RAAF intelligence" },
      { role: "Aerospace Medical Officer / RAAF Medic", category: "Medical", education: "Year 12 with science; health qualifications valued", aptitude: "ADFAT applies", fitness: "Standard", medical: "Medical suitability required", notes: "Aeromedical support and primary healthcare for RAAF personnel; qualification level determines entry route" },
      { role: "Logistics / Supply Technician", category: "Logistics", education: "Year 10 minimum", aptitude: "ADFAT applies", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain and inventory management; supports all RAAF bases and deployed operations" },
    ],
  },

  // ==========================================================================
  // GENERAL FALLBACK
  // ==========================================================================

  "general": {
    countrySlug: "general", branchId: "general",
    country: "General", branch: "All Services",
    title: "Military Role Requirements — General Overview",
    subtitle: SUBTITLE, disclaimer: DISCLAIMER,
    officialSourceName: "Contact your national military recruitment service for official requirements",
    officialSourceUrl: "https://www.join-ready.com",
    rows: [
      { role: "Infantry / Combat Soldier", category: "Combat", education: "Basic secondary education; requirements vary by country", aptitude: "Aptitude testing commonly required; role-dependent", fitness: "High — physical standards are typically demanding", medical: "Medical suitability required", notes: "Core ground combat role found in virtually every military; verify exact requirements with your national recruitment service" },
      { role: "Logistics / Supply", category: "Logistics", education: "Basic secondary education", aptitude: "Role-dependent aptitude testing", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, transport, and distribution; wide range of sub-roles across all services; essential support occupation" },
      { role: "Communications / Signals", category: "Communications", education: "Secondary education; maths and IT beneficial", aptitude: "Technical aptitude often assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Communications systems and infrastructure; technical qualifications valued; security clearance may be required" },
      { role: "Medical Support", category: "Medical", education: "Role-dependent: from secondary school to degree level", aptitude: "Academic aptitude important for clinical roles", fitness: "Standard to High", medical: "Medical suitability required", notes: "Ranges from basic first aid support to qualified clinician; entry level depends on existing qualifications" },
      { role: "Engineering / Maintenance", category: "Engineering", education: "Secondary education; technical or trade qualifications beneficial", aptitude: "Technical aptitude assessed", fitness: "Standard to High depending on role", medical: "Medical suitability required", notes: "Combat engineering, vehicle maintenance, aircraft maintenance; role varies widely; civilian qualifications often recognised" },
      { role: "Military Police / Security", category: "Security", education: "Secondary education; some countries require higher", aptitude: "Psychological and aptitude testing common", fitness: "Standard to High", medical: "Medical suitability required", notes: "Law enforcement and base security; background investigation typically required; civilian law enforcement experience valued" },
    ],
  },

};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const COUNTRY_CODE_TO_SLUG: Record<string, string> = {
  GB: "uk", UK: "uk",
  US: "us", USA: "us",
  AT: "austria",
  DE: "germany",
  FR: "france",
  CA: "canada",
  AU: "australia",
};

export function buildPdfKey(countryCode: string, branchId: string): string {
  const countrySlug = COUNTRY_CODE_TO_SLUG[countryCode.toUpperCase()] ?? "general";
  if (!branchId) return "general";
  const key = `${countrySlug}-${branchId}`;
  return branchRoleRequirements[key] ? key : "general";
}
