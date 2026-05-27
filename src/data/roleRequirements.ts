export type RequirementTableType = "subject-grades" | "overview";

export type RoleRequirement = {
  role: string;
  branch: string;
  category: string;
  maths?: string;
  english?: string;
  science?: string;
  education?: string;
  aptitude?: string;
  fitness?: string;
  medical?: string;
  notes: string;
};

export type CountryRoleRequirements = {
  slug: string;
  country: string;
  title: string;
  subtitle: string;
  tableType: RequirementTableType;
  disclaimer: string;
  sourceNote: string;
  columns: string[];
  rows: RoleRequirement[];
};

export const roleRequirementsByCountry: Record<string, CountryRoleRequirements> = {
  uk: {
    slug: "uk",
    country: "United Kingdom",
    title: "UK Army — Role Subject Requirements",
    subtitle: "Subject grade guide for common British Army roles",
    tableType: "subject-grades",
    disclaimer:
      "This sheet is an educational planning reference. Requirements may vary by intake, role availability, and recruiting office. Always verify with your Army Careers Centre or official British Army website.",
    sourceNote: "Based on publicly available British Army recruitment guidance. Not an official Army document.",
    columns: ["Job Role", "Maths", "English", "Science", "Notes"],
    rows: [
      { role: "AAC", branch: "Army Air Corps", category: "Aviation", maths: "N/A", english: "N/A", science: "N/A", notes: "Army Air Corps ground crew; aptitude tests apply for specific trades" },
      { role: "Guards", branch: "Household Division", category: "Infantry", maths: "N/A", english: "N/A", science: "N/A", notes: "Ceremonial and operational infantry; fitness standards are high" },
      { role: "Infantry", branch: "Infantry", category: "Infantry", maths: "N/A", english: "N/A", science: "N/A", notes: "Core combat role; BARB test required, physical fitness essential" },
      { role: "Para", branch: "Parachute Regiment", category: "Infantry", maths: "N/A", english: "N/A", science: "N/A", notes: "P Company selection; among the most demanding infantry entry routes" },
      { role: "QARANC – Registered Nurse", branch: "QARANC", category: "Medical", maths: "N/A", english: "N/A", science: "N/A", notes: "NMC registration required; degree-level nursing qualification needed" },
      { role: "QARANC – Registered Nurse (MH)", branch: "QARANC", category: "Medical", maths: "N/A", english: "N/A", science: "N/A", notes: "Mental health nursing specialism; NMC registration required" },
      { role: "R.Sigs – Supply Chain Op", branch: "Royal Signals", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Supports signals supply chain; BARB and role-specific aptitude apply" },
      { role: "RA", branch: "Royal Artillery", category: "Combat Support", maths: "N/A", english: "N/A", science: "N/A", notes: "Fire support role; numeracy important in practice though no formal GCSE min listed" },
      { role: "RAC", branch: "Royal Armoured Corps", category: "Armoured", maths: "N/A", english: "N/A", science: "N/A", notes: "Tanks and reconnaissance; BARB score required" },
      { role: "RAVC – Dog Handler/Trainer", branch: "RAVC", category: "Specialist", maths: "N/A", english: "N/A", science: "N/A", notes: "Animal care background desirable; physically active role" },
      { role: "RCAM – Musician", branch: "Royal Corps of Army Music", category: "Specialist", maths: "N/A", english: "N/A", science: "N/A", notes: "Audition required; Grade 8 standard or equivalent typically expected" },
      { role: "RE – Combat Spec", branch: "Royal Engineers", category: "Engineering", maths: "N/A", english: "N/A", science: "N/A", notes: "Combat engineering; BARB score applies, some trades require higher aptitude" },
      { role: "RLC – Air Despatcher", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Airborne resupply; includes parachute element, medical fitness important" },
      { role: "RLC – Chef", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Food preparation for military units; catering qualifications beneficial" },
      { role: "RLC – Driver", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Military driving; licence categories gained during training" },
      { role: "RLC – Driver Comms Spec", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Driving with communications duties; aptitude testing applies" },
      { role: "RLC – Petroleum Op", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Fuel handling and distribution; safety-critical role" },
      { role: "RLC – Port Op", branch: "Royal Logistic Corps", category: "Logistics", maths: "N/A", english: "N/A", science: "N/A", notes: "Maritime logistics; dock and port operations support" },
      { role: "RLC – Logistic Supply Spec", branch: "Royal Logistic Corps", category: "Logistics", maths: "E", english: "E", science: "N/A", notes: "Supply chain management; GCSE grade E or equivalent in Maths and English" },
      { role: "AGC – HR Spec", branch: "Adjutant General's Corps", category: "Administration", maths: "D", english: "D", science: "N/A", notes: "HR and administration; GCSE grade D or equivalent in Maths and English" },
      { role: "REME – Tech Support Spec", branch: "REME", category: "Engineering", maths: "D", english: "D", science: "N/A", notes: "Equipment support and maintenance; D grade minimum, higher trades require more" },
      { role: "RLC – Postal & Courier", branch: "Royal Logistic Corps", category: "Logistics", maths: "D", english: "D", science: "N/A", notes: "Mail and courier operations; GCSE grade D or equivalent required" },
      { role: "R.Sigs – Comms Engineer", branch: "Royal Signals", category: "Communications", maths: "C", english: "D", science: "N/A", notes: "Communications systems engineering; solid maths capability required" },
      { role: "R.Sigs – Power Engineer", branch: "Royal Signals", category: "Communications", maths: "C", english: "D", science: "N/A", notes: "Electrical power systems; GCSE Maths C or equivalent expected" },
      { role: "QARANC – Healthcare Asst", branch: "QARANC", category: "Medical", maths: "G", english: "C", science: "N/A", notes: "Nursing support role; English grade C reflects communication importance" },
      { role: "RAMC – Combat Med Tech", branch: "Royal Army Medical Corps", category: "Medical", maths: "C", english: "C", science: "N/A", notes: "Battlefield medical care; equivalent to paramedic level, strong academics needed" },
      { role: "RLC – Mariner", branch: "Royal Logistic Corps", category: "Maritime", maths: "C", english: "C", science: "N/A", notes: "Inland/coastal waterway operations; maritime aptitude and physical fitness" },
      { role: "RLC – Movement Controller", branch: "Royal Logistic Corps", category: "Logistics", maths: "C", english: "C", science: "N/A", notes: "Transport planning and coordination; requires good numeracy and communication" },
    ],
  },

  us: {
    slug: "us",
    country: "United States",
    title: "US Military — Role Requirements Overview",
    subtitle: "Planning guide for common roles across US armed services",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview, not an official MEPS or recruiting document. Education, ASVAB, fitness, and medical requirements vary by branch, role, and current recruiting standards. Verify all details with an official military recruiter.",
    sourceNote: "Based on publicly available US military recruiting information. Requirements vary by branch and change over time.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Infantry", branch: "Army / Marine Corps", category: "Combat", education: "HS diploma / GED", aptitude: "ASVAB CO score applies", fitness: "High — combat fitness test", medical: "Medical suitability required", notes: "Core ground combat role; physical standards are demanding" },
      { role: "Cavalry Scout / Recon", branch: "Army / Marine Corps", category: "Combat", education: "HS diploma / GED", aptitude: "ASVAB ST or CO score", fitness: "High", medical: "Medical suitability required", notes: "Reconnaissance and forward operations; vehicle and foot patrol" },
      { role: "Military Police / Security Forces", branch: "Army / Marine Corps / Air Force / Navy", category: "Security", education: "HS diploma", aptitude: "ASVAB ST score applies", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Law enforcement, base security; background investigation required" },
      { role: "Combat Medic / Hospital Corpsman", branch: "Army / Navy", category: "Medical", education: "HS diploma; science courses helpful", aptitude: "ASVAB ST score — higher threshold", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Battlefield and clinical medical care; equivalent to EMT-Basic or higher" },
      { role: "Cyber Operations / IT Specialist", branch: "Army / Navy / Air Force / Space Force / Marine Corps", category: "Cyber / IT", education: "HS diploma; IT coursework beneficial", aptitude: "ASVAB EL or ST score — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Security clearance typically required; IT certifications valued" },
      { role: "Intelligence Analyst", branch: "All branches", category: "Intelligence", education: "HS diploma; strong academics preferred", aptitude: "ASVAB GT score — high threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Security clearance required; analytical and language aptitude valued" },
      { role: "Logistics / Supply Specialist", branch: "All branches", category: "Logistics", education: "HS diploma / GED", aptitude: "ASVAB CL or GT score", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, inventory, and distribution; role-dependent training provided" },
      { role: "Mechanic / Vehicle Maintenance", branch: "All branches", category: "Maintenance", education: "HS diploma; mechanical aptitude helpful", aptitude: "ASVAB MM or EL score", fitness: "Standard", medical: "Medical suitability required", notes: "Wheeled and tracked vehicle maintenance; trade qualifications may be earned" },
      { role: "Aviation Maintenance", branch: "Army / Navy / Air Force / Marine Corps / Coast Guard", category: "Aviation", education: "HS diploma; maths and science important", aptitude: "ASVAB EL or MM score — higher threshold", fitness: "Standard", medical: "Medical suitability required", notes: "Aircraft maintenance and safety-critical work; FAA certification pathways possible" },
      { role: "Special Operations Candidate", branch: "Army / Navy / Air Force / Marine Corps", category: "Special Operations", education: "HS diploma", aptitude: "ASVAB GT score — high; PAST or similar test", fitness: "Very High — selection-specific standards", medical: "Enhanced medical screening", notes: "Selection process separate from basic enlistment; extremely demanding" },
    ],
  },

  austria: {
    slug: "austria",
    country: "Austria",
    title: "Austrian Armed Forces — Role Requirements Overview",
    subtitle: "Planning guide for common roles in the Bundesheer",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview. The Austrian Bundesheer has specific entry requirements that change over time. Requirements vary by role, contract type, and recruiting cycle. Verify all details with the official Bundesheer recruiting service (Heerespersonalamt).",
    sourceNote: "Based on publicly available Austrian Bundesheer information. Not an official Bundesheer document.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Jäger / Infantry", branch: "Heer (Army)", category: "Infantry", education: "Pflichtschulabschluss (compulsory school)", aptitude: "Aptitude testing may apply", fitness: "High — physical fitness test required", medical: "Medical suitability required", notes: "Core ground combat role; conscript or professional soldier pathway" },
      { role: "Panzergrenadier / Mechanised Infantry", branch: "Heer (Army)", category: "Armoured", education: "Pflichtschulabschluss or equivalent", aptitude: "Aptitude testing may apply", fitness: "High", medical: "Medical suitability required", notes: "Mechanised infantry operating from armoured vehicles" },
      { role: "Pionier / Engineer", branch: "Heer (Army)", category: "Engineering", education: "Pflichtschulabschluss; technical background helpful", aptitude: "Technical aptitude may be assessed", fitness: "High", medical: "Medical suitability required", notes: "Combat engineering, route clearance, bridging operations" },
      { role: "Militärpolizei", branch: "Heer (Army)", category: "Security", education: "Pflichtschulabschluss or equivalent", aptitude: "Assessment may include psychological testing", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Military law enforcement and base security; background check required" },
      { role: "Logistik / Supply", branch: "Heer (Army)", category: "Logistics", education: "Pflichtschulabschluss", aptitude: "Role-dependent assessment", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, transport, and distribution support" },
      { role: "Sanitätsdienst / Medical Support", branch: "All branches", category: "Medical", education: "Relevant medical or nursing qualification for specialist roles", aptitude: "Academic aptitude required for clinical roles", fitness: "Standard–High", medical: "Medical suitability required", notes: "From basic first aid support to qualified medical personnel; qualifications vary by role" },
      { role: "IKT / Cyber / IT", branch: "All branches", category: "Cyber / IT", education: "Technical secondary school (HTL) or equivalent preferred", aptitude: "Technical and analytical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "IT infrastructure and cyber roles; technical qualifications and security clearance beneficial" },
      { role: "Luftstreitkräfte Support", branch: "Air Force", category: "Aviation", education: "Technical qualification preferred; maths and physics beneficial", aptitude: "Technical aptitude assessed", fitness: "Standard–High depending on role", medical: "Enhanced medical screening for some roles", notes: "Ground support for Austrian Air Force aircraft; role-specific trades available" },
    ],
  },

  germany: {
    slug: "germany",
    country: "Germany",
    title: "Bundeswehr — Role Requirements Overview",
    subtitle: "Planning guide for common roles in the German armed forces",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview. Bundeswehr entry requirements vary by role, service branch (Teilstreitkraft), and contract type. Requirements change with recruiting cycles. Verify all details with the official Bundeswehr recruiting centre (Karrierecenter der Bundeswehr).",
    sourceNote: "Based on publicly available Bundeswehr recruiting information. Not an official Bundeswehr document.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Jäger / Infantry", branch: "Heer (Army)", category: "Infantry", education: "Hauptschulabschluss or equivalent", aptitude: "Eignungstest (aptitude test) required", fitness: "High — Sporttest required", medical: "Medical suitability required", notes: "Core ground combat; Hauptschulabschluss is the minimum for enlisted roles" },
      { role: "Fallschirmjäger", branch: "Heer (Army)", category: "Airborne", education: "Hauptschulabschluss minimum", aptitude: "Higher aptitude score expected", fitness: "Very High — selection demands exceed standard infantry", medical: "Enhanced medical screening", notes: "Airborne infantry; physically and mentally demanding selection process" },
      { role: "Panzergrenadier", branch: "Heer (Army)", category: "Armoured", education: "Hauptschulabschluss or equivalent", aptitude: "Aptitude test applies", fitness: "High", medical: "Medical suitability required", notes: "Mechanised infantry on armoured vehicles; teamwork-focused role" },
      { role: "Pionier", branch: "Heer (Army)", category: "Engineering", education: "Hauptschulabschluss; technical background valued", aptitude: "Technical aptitude assessed", fitness: "High", medical: "Medical suitability required", notes: "Combat engineering, demolitions, bridging; technical qualifications beneficial" },
      { role: "IT / Cyber", branch: "CIR (Cyber and Information Domain)", category: "Cyber / IT", education: "Mittlere Reife or Abitur preferred; IT qualifications valued", aptitude: "Strong analytical aptitude expected", fitness: "Standard", medical: "Medical suitability required", notes: "Growing branch; security clearance required; IT degree or vocational training valued" },
      { role: "Sanitätsdienst", branch: "Joint Medical Service", category: "Medical", education: "Role-dependent: ranges from Hauptschulabschluss to university degree (Medizinstudium)", aptitude: "Academic aptitude for clinical roles", fitness: "Standard–High", medical: "Medical suitability required", notes: "From support roles to qualified doctors and nurses; qualifications determine entry route" },
      { role: "Feldjäger", branch: "Heer (Army)", category: "Security", education: "Hauptschulabschluss minimum; Realschulabschluss often preferred", aptitude: "Psychological and aptitude assessment", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Military police; law enforcement background not required but beneficial" },
      { role: "Logistik", branch: "All branches", category: "Logistics", education: "Hauptschulabschluss", aptitude: "Role-dependent aptitude testing", fitness: "Standard", medical: "Medical suitability required", notes: "Supply, transport, and materiel management; wide range of sub-roles available" },
    ],
  },

  france: {
    slug: "france",
    country: "France",
    title: "Armée Française — Role Requirements Overview",
    subtitle: "Planning guide for common roles in the French armed forces",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview. French military entry requirements vary by branch (Armée de Terre, Marine Nationale, Armée de l'Air), role, and contract type. Requirements change with recruiting cycles. Verify all details with the Centre de Recrutement de l'Armée de Terre (CIRFA) or equivalent service recruiting centre.",
    sourceNote: "Based on publicly available French military recruiting information. Not an official French Ministry of Defence document.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Infantry Soldier", branch: "Armée de Terre", category: "Infantry", education: "No minimum diploma required for enlisted; CAP or BEP valued", aptitude: "SIGYCOP aptitude profile assessed", fitness: "High — physical tests required", medical: "Medical suitability required", notes: "Core land combat role; French language proficiency required for most roles" },
      { role: "Paratrooper", branch: "Armée de Terre (Troupes aéroportées)", category: "Airborne", education: "No minimum diploma for enlisted entry", aptitude: "Aptitude profile assessed; higher standards apply", fitness: "Very High — airborne selection standards", medical: "Enhanced medical screening", notes: "Légion étrangère (Foreign Legion) also has parachute regiment; demanding selection" },
      { role: "Combat Engineer", branch: "Armée de Terre (Génie)", category: "Engineering", education: "CAP/BEP or Baccalauréat for technical specialisations", aptitude: "Technical aptitude assessed", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, route clearance; technical qualifications beneficial for advancement" },
      { role: "Logistics Specialist", branch: "Armée de Terre / Marine / Air", category: "Logistics", education: "No minimum diploma for enlisted", aptitude: "Role-dependent aptitude testing", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, transport, and distribution support across all service branches" },
      { role: "Signals / Communications", branch: "Armée de Terre / Marine / Air", category: "Communications", education: "Baccalauréat or technical qualification preferred", aptitude: "Technical and analytical aptitude assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Communications infrastructure and electronic systems; IT skills valued" },
      { role: "Medic / Medical Support", branch: "Service de Santé des Armées", category: "Medical", education: "Role-dependent: from BEP to medical degree", aptitude: "Academic aptitude for clinical roles", fitness: "Standard–High", medical: "Medical suitability required", notes: "Ranges from nursing assistant to qualified doctor; qualifications determine entry level" },
      { role: "Gendarmerie", branch: "Gendarmerie Nationale", category: "Security", education: "Baccalauréat typically required for officer track", aptitude: "Written and psychological testing", fitness: "High", medical: "Medical suitability required", notes: "Paramilitary police force; separate from Army; competitive entry process" },
      { role: "Navy Sailor", branch: "Marine Nationale", category: "Maritime", education: "BEP or Baccalauréat depending on role", aptitude: "SIGYCOP profile and role-specific tests", fitness: "Standard–High", medical: "Enhanced medical screening for seagoing roles", notes: "Wide range of roles from deck ratings to technical specialists; sea deployment expected" },
    ],
  },

  canada: {
    slug: "canada",
    country: "Canada",
    title: "Canadian Armed Forces — Role Requirements Overview",
    subtitle: "Planning guide for common roles in the CAF",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview. Canadian Armed Forces entry requirements vary by occupation, component (Regular Force or Reserve), and current recruiting priorities. Requirements change over time. Verify all details with a Canadian Forces Recruiting Centre (CFRC) or the official CAF website.",
    sourceNote: "Based on publicly available Canadian Armed Forces recruiting information. Not an official DND or CAF document.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Infantry Soldier", branch: "Army (Regular / Reserve)", category: "Infantry", education: "Secondary school completion (Grade 10 minimum; Grade 12 preferred)", aptitude: "CFAT (Canadian Forces Aptitude Test) — minimum score required", fitness: "High — FORCE Evaluation standard", medical: "Medical suitability required", notes: "Core ground combat role; bilingual (French/English) an asset" },
      { role: "Armoured Soldier", branch: "Army", category: "Armoured", education: "Secondary school completion", aptitude: "CFAT score applies", fitness: "High", medical: "Medical suitability required", notes: "Tank crew and reconnaissance vehicle operator; technical aptitude valued" },
      { role: "Combat Engineer", branch: "Army", category: "Engineering", education: "Secondary school completion; mathematics and science beneficial", aptitude: "CFAT — moderate to high score", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, construction; trades background useful for advancement" },
      { role: "Signal Operator", branch: "Army / Joint", category: "Communications", education: "Secondary school; mathematics helpful", aptitude: "CFAT — technical aptitude expected", fitness: "Standard", medical: "Medical suitability required", notes: "Communications systems; security clearance required for some specialisations" },
      { role: "Medical Technician", branch: "All branches", category: "Medical", education: "Secondary school with science courses; some roles require college diploma", aptitude: "CFAT — higher score expected", fitness: "Standard–High", medical: "Medical suitability required", notes: "Provides medical care in garrison and operational settings; EMT-equivalent training provided" },
      { role: "Logistics Officer / Supply Technician", branch: "All branches", category: "Logistics", education: "Secondary school (technician); university degree (officer)", aptitude: "CFAT score required; officer track requires higher score", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain and materiel management; officer route requires degree and leadership assessment" },
      { role: "Military Police", branch: "All branches", category: "Security", education: "Secondary school completion; some college preferred", aptitude: "CFAT — higher score; psychological assessment", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Law enforcement and security role; background investigation required" },
      { role: "Naval Communicator", branch: "Royal Canadian Navy", category: "Maritime", education: "Secondary school; mathematics and English important", aptitude: "CFAT — technical aptitude assessed", fitness: "Standard", medical: "Enhanced medical screening for seagoing service", notes: "Communications aboard naval vessels; security clearance required" },
    ],
  },

  australia: {
    slug: "australia",
    country: "Australia",
    title: "Australian Defence Force — Role Requirements Overview",
    subtitle: "Planning guide for common roles across the ADF",
    tableType: "overview",
    disclaimer:
      "This is an educational planning overview. ADF entry requirements vary by role, service branch (Army, Navy, Air Force), and recruiting cycle. Requirements change over time. Verify all details with the official ADF Recruiting website or a Defence Force Recruiting (DFR) centre.",
    sourceNote: "Based on publicly available ADF Recruiting information. Not an official ADF or Defence document.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Infantry Soldier", branch: "Army", category: "Infantry", education: "Year 10 minimum; Year 12 preferred", aptitude: "ADFAT (aptitude test) required", fitness: "High — pre-enlistment fitness test", medical: "Medical suitability required", notes: "Core ground combat; physically and mentally demanding" },
      { role: "Commando / Special Forces Candidate", branch: "Army (SOCOMD)", category: "Special Operations", education: "Year 12 or equivalent", aptitude: "Above average ADFAT score; selection process applies", fitness: "Very High — SOCOMD selection", medical: "Enhanced medical screening", notes: "Separate selection process after initial enlistment; extremely demanding" },
      { role: "Combat Engineer", branch: "Army", category: "Engineering", education: "Year 10 minimum; mathematics beneficial", aptitude: "ADFAT — technical aptitude assessed", fitness: "High", medical: "Medical suitability required", notes: "Demolitions, bridging, field construction; trade qualifications gained in service" },
      { role: "Signals / Telecommunications Technician", branch: "Army / Air Force", category: "Communications", education: "Year 12 with maths and/or IT; TAFE qualifications valued", aptitude: "ADFAT — higher technical score expected", fitness: "Standard", medical: "Medical suitability required", notes: "Communications and electronic warfare systems; security clearance required for some roles" },
      { role: "Medic", branch: "Army / Navy / Air Force", category: "Medical", education: "Year 12 with science; health qualifications valued", aptitude: "ADFAT — higher score expected", fitness: "Standard–High", medical: "Medical suitability required", notes: "Clinical care in garrison and operational settings; civilian qualifications may credit into training" },
      { role: "Logistics / Supply", branch: "All branches", category: "Logistics", education: "Year 10 minimum", aptitude: "ADFAT score required", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, warehousing, and distribution; wide range of sub-roles" },
      { role: "Military Police", branch: "Army / Navy / Air Force", category: "Security", education: "Year 12 preferred", aptitude: "ADFAT — higher score; psychological assessment", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Law enforcement and base security; background investigation required" },
      { role: "Navy Maritime Role", branch: "Royal Australian Navy", category: "Maritime", education: "Year 10 to Year 12 depending on role", aptitude: "ADFAT — role-dependent score", fitness: "Standard–High", medical: "Enhanced medical screening for seagoing service", notes: "Ranges from deck seaman to technical specialist; sea deployment is expected" },
    ],
  },

  general: {
    slug: "general",
    country: "General",
    title: "Military Roles — General Requirements Overview",
    subtitle: "A broad planning guide for common military role categories",
    tableType: "overview",
    disclaimer:
      "This is a general educational planning reference only. Every country and military branch has its own specific entry requirements, aptitude standards, and fitness benchmarks. Use this as a starting point — always verify requirements with official recruiting sources in your country.",
    sourceNote: "General reference guide. Not specific to any one country or armed force.",
    columns: ["Role", "Branch", "Education", "Aptitude", "Fitness", "Medical", "Notes"],
    rows: [
      { role: "Infantry / Combat Soldier", branch: "Army (most countries)", category: "Infantry", education: "Basic secondary education (requirements vary by country)", aptitude: "Aptitude testing may apply; role-dependent", fitness: "High — physical standards are demanding", medical: "Medical suitability required", notes: "Core ground combat role found in virtually every military; physical fitness is critical" },
      { role: "Logistics / Supply", branch: "All branches", category: "Logistics", education: "Basic secondary education", aptitude: "Role-dependent aptitude testing may apply", fitness: "Standard", medical: "Medical suitability required", notes: "Supply chain, transport, and distribution; wide range of sub-roles across all services" },
      { role: "Communications / Signals", branch: "All branches", category: "Communications", education: "Secondary education; mathematics and IT beneficial", aptitude: "Technical aptitude often assessed", fitness: "Standard", medical: "Medical suitability required", notes: "Communications systems and electronic warfare; technical qualifications valued" },
      { role: "Medical Support", branch: "All branches", category: "Medical", education: "Role-dependent: from secondary school to degree level", aptitude: "Academic aptitude important for clinical roles", fitness: "Standard–High", medical: "Medical suitability required", notes: "Ranges from basic first aid to qualified doctor; entry level depends on existing qualifications" },
      { role: "Engineering / Maintenance", branch: "All branches", category: "Engineering", education: "Secondary education; technical or trade qualifications beneficial", aptitude: "Technical aptitude assessed", fitness: "Standard–High depending on role", medical: "Medical suitability required", notes: "Combat engineering, vehicle maintenance, aircraft maintenance — role varies widely" },
      { role: "Military Police / Security", branch: "All branches", category: "Security", education: "Secondary education; some countries require higher", aptitude: "Psychological and aptitude testing common", fitness: "Moderate–High", medical: "Medical suitability required", notes: "Law enforcement and base security; background investigation typically required" },
    ],
  },
};

export function getCountrySlug(countryCode: string): string {
  const code = countryCode.toUpperCase();
  const map: Record<string, string> = {
    GB: "uk",
    UK: "uk",
    US: "us",
    USA: "us",
    AT: "austria",
    DE: "germany",
    FR: "france",
    CA: "canada",
    AU: "australia",
  };
  return map[code] ?? "general";
}
