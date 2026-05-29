window.PARTY_PROFILES_BY_YEAR = {
  2026: {
    Union:  { name: 'CDU', full: 'Christlich Demokratische Union Deutschlands', spectrum: 'Centre-Right', color: '#36302c', ideology: 1.0 },
    CSU:    { name: 'CSU', full: 'Christlich-Soziale Union in Bayern', spectrum: 'Centre-Right', color: '#008AC5', ideology: 1.05 },
    SPD:    { name: 'SPD', full: 'Sozialdemokratische Partei Deutschlands', spectrum: 'Centre-Left', color: '#eb220f', ideology: -0.9 },
    AfD:    { name: 'AfD', full: 'Alternative für Deutschland', spectrum: 'Right-Wing', color: '#32B1F1', ideology: 1.8 },
    Greens: { name: 'Grüne', full: 'Bündnis 90/Die Grünen', spectrum: 'Left/Green', color: '#4da74d', ideology: -0.4 },
    Linke:  { name: 'Linke', full: 'Die Linke', spectrum: 'Left-Wing', color: '#AB52AD', ideology: -1.8 },
    BSW:    { name: 'BSW', full: 'Bündnis Sahra Wagenknecht', spectrum: 'Left-Conservative', color: '#792351', ideology: -1.1 },
    SSW:    { name: 'SSW', full: 'Südschleswigscher Wählerverband', spectrum: 'Regional Centre-Left', color: '#4684DF', ideology: -0.25 },
    FW:     { name: 'FW', full: 'FREIE WÄHLER', spectrum: 'Regional Conservative', color: '#F7A800', ideology: 0.75 },
    FDP:    { name: 'FDP', full: 'Freie Demokratische Partei', spectrum: 'Liberal', color: '#ffc417', ideology: 0.6 },
  },
  2025: {
    Union:  { name: 'CDU', full: 'Christlich Demokratische Union Deutschlands', spectrum: 'Centre-Right', color: '#36302c', ideology: 1.0 },
    CSU:    { name: 'CSU', full: 'Christlich-Soziale Union in Bayern', spectrum: 'Centre-Right', color: '#008AC5', ideology: 1.05 },
    SPD:    { name: 'SPD', full: 'Sozialdemokratische Partei Deutschlands', spectrum: 'Centre-Left', color: '#eb220f', ideology: -0.9 },
    AfD:    { name: 'AfD', full: 'Alternative für Deutschland', spectrum: 'Right-Wing', color: '#32B1F1', ideology: 1.8 },
    Greens: { name: 'Grüne', full: 'Bündnis 90/Die Grünen', spectrum: 'Left/Green', color: '#4da74d', ideology: -0.4 },
    Linke:  { name: 'Linke', full: 'Die Linke', spectrum: 'Left-Wing', color: '#AB52AD', ideology: -1.8 },
    BSW:    { name: 'BSW', full: 'Bündnis Sahra Wagenknecht', spectrum: 'Left-Conservative', color: '#792351', ideology: -1.1 },
    SSW:    { name: 'SSW', full: 'Südschleswigscher Wählerverband', spectrum: 'Regional Centre-Left', color: '#4684DF', ideology: -0.25 },
    FW:     { name: 'FW', full: 'FREIE WÄHLER', spectrum: 'Regional Conservative', color: '#F7A800', ideology: 0.75 },
    FDP:    { name: 'FDP', full: 'Freie Demokratische Partei', spectrum: 'Liberal', color: '#ffc417', ideology: 0.6 },
  },
  2021: {
    Union:  { name: 'CDU', full: 'Christlich Demokratische Union Deutschlands', spectrum: 'Centre-Right', color: '#36302c', ideology: 1.0 },
    CSU:    { name: 'CSU', full: 'Christlich-Soziale Union in Bayern', spectrum: 'Centre-Right', color: '#008AC5', ideology: 1.05 },
    SPD:    { name: 'SPD', full: 'Sozialdemokratische Partei Deutschlands', spectrum: 'Centre-Left', color: '#eb220f', ideology: -0.9 },
    AfD:    { name: 'AfD', full: 'Alternative für Deutschland', spectrum: 'Right-Wing', color: '#32B1F1', ideology: 1.8 },
    Greens: { name: 'Grüne', full: 'Bündnis 90/Die Grünen', spectrum: 'Left/Green', color: '#4da74d', ideology: -0.4 },
    Linke:  { name: 'Linke', full: 'Die Linke', spectrum: 'Left-Wing', color: '#AB52AD', ideology: -1.8 },
    SSW:    { name: 'SSW', full: 'Südschleswigscher Wählerverband', spectrum: 'Regional Centre-Left', color: '#4684DF', ideology: -0.25 },
    FW:     { name: 'FW', full: 'FREIE WÄHLER', spectrum: 'Regional Conservative', color: '#F7A800', ideology: 0.75 },
    FDP:    { name: 'FDP', full: 'Freie Demokratische Partei', spectrum: 'Liberal', color: '#ffc417', ideology: 0.6 },
  },
  1949: {
    Union:  { name: 'CDU', full: 'Christlich Demokratische Union Deutschlands', spectrum: 'Christian Democratic', color: '#2f2a24', ideology: 0.95 },
    CSU:    { name: 'CSU', full: 'Christlich-Soziale Union in Bayern', spectrum: 'Christian Social', color: '#0A84C6', ideology: 1.0 },
    SPD:    { name: 'SPD', full: 'Sozialdemokratische Partei Deutschlands', spectrum: 'Social Democratic', color: '#c62828', ideology: -0.85 },
    AfD:    { name: 'DP/DRP', full: 'Deutsche Partei / national-conservative right', spectrum: 'National Conservative', color: '#2d6aa6', ideology: 1.35 },
    Greens: { name: 'Zentrum/Ind.', full: 'Zentrum, independents and smaller bourgeois lists', spectrum: 'Catholic Centre / Independent', color: '#8b7b5a', ideology: 0.1 },
    Linke:  { name: 'KPD', full: 'Kommunistische Partei Deutschlands', spectrum: 'Communist', color: '#8f1d1d', ideology: -1.85 },
    FDP:    { name: 'FDP', full: 'Freie Demokratische Partei', spectrum: 'Liberal', color: '#d9b300', ideology: 0.45 },
  },
};

window.PARTY_SPECIFIC_EVENTS = {
  Union: [
    { id:"u_merz_speech",    name:"The Wirtschaftsrede Agenda",          icon:"💼", desc:"Merz delivers a prime-time speech on Germany's industrial Wirtschaftswende agenda", effect:"+0.5% business and senior voters", boost:0.5, reach:"business" },
    { id:"u_konrad",         name:"Konrad-Adenauer Foundation Lecture",        icon:"🏛️", desc:"High-profile lecture at the KAS — cement your statesman image with educated voters", effect:"+0.4% educated voters, media prestige", boost:0.4, reach:"urban" },
    { id:"u_csu_rally",      name:"CSU Bayern Weekend",             icon:"🦁", desc:"Joint rally with the CSU in Munich; shore up Bavarian vote and energize the southern heartland", effect:"+0.55% Bavaria and rural south", boost:0.55, reach:"rural" },
    { id:"u_migration_plan", name:"Migration Masterplan Launch",    icon:"🛂", desc:"Unveil a detailed costed migration plan — dominate the news cycle for a full week", effect:"+0.4% right-centre voters", boost:0.4, reach:"national" },
    { id:"u_mittelstand",    name:"Mittelstand Bus Tour",           icon:"🚌", desc:"8 SME-heavy cities in 3 days; the backbone of the economy gets a direct hearing", effect:"+0.45% SME owners, small-town Germany", boost:0.45, reach:"workers" },
  ],
  SPD: [
    { id:"s_scholz_video",   name:"Scholz Kanzlerduell Prep",       icon:"🧓", desc:"20-minute Olaf Scholz policy video airs in prime time; economic competence on display", effect:"+0.4% broad centre, reassures moderates", boost:0.4, reach:"national" },
    { id:"s_dgb_congress",   name:"DGB Gewerkschaftskongress",      icon:"✊", desc:"Address 15,000 trade unionists live; declare the Mindestlohn era is far from over", effect:"+0.55% organised labour, industrial towns", boost:0.55, reach:"workers" },
    { id:"s_east_offensive", name:"Ostdeutschland Offensive",       icon:"🏗️", desc:"3-day tour of Saxony, Thuringia and Brandenburg; fight the AfD on its own ground", effect:"+0.45% eastern voters, hard-contested territory", boost:0.45, reach:"rural" },
    { id:"s_rente_rede",     name:"Rentensicherheitsversprechen",   icon:"👴", desc:"Pension security pledge live on ARD: no cuts, ever; dominate the senior vote for a week", effect:"+0.5% over-65s, weekly topic setter", boost:0.5, reach:"seniors" },
    { id:"s_schulen_plan",   name:"Unveil the Bildungsoffensive",              icon:"📚", desc:"Announce a 15-billion euro schools investment plan live from a Berlin primary school", effect:"+0.45% parents, teachers, young families", boost:0.45, reach:"urban" },
  ],
  AfD: [
    { id:"a_weidel_tour",    name:"Alice fur Deutschland",           icon:"🔵", desc:"Alice Weidel leads a 10-city rally tour; massive media attention and full base mobilisation", effect:"+0.6% AfD core base, dominant news cycle", boost:0.6, reach:"rural" },
    { id:"a_alt2025",        name:"Alternativ 2025 Programme",     icon:"📋", desc:"Publish a shadow government programme — the AfD says it is ready to govern", effect:"+0.45% sceptical conservatives, credibility boost", boost:0.45, reach:"national" },
    { id:"a_east_stronghold",name:"Sachsen-Anhalt Weekend",         icon:"🏙️", desc:"Mass rally in Magdeburg and Halle; consolidate eastern strongholds against all rivals", effect:"+0.65% eastern Laender, core territory", boost:0.65, reach:"rural" },
    { id:"a_media_blitz",    name:"Denounce the Establishment",       icon:"📺", desc:"Flood alternative media with system-failure content; the establishment fires back hard", effect:"+0.4% disaffected voters, -0.2% moderates", boost:0.35, reach:"national" },
    { id:"a_sicherheit",     name:"Sichere Grenzen Demo",           icon:"🚷", desc:"Lead a march on the Brandenburger Tor demanding secure borders: 50,000 turn out", effect:"+0.55% migration-issue voters, national spotlight", boost:0.55, reach:"national" },
    { id:"a_nato_rede",      name:"NATO-Kritik Presskonferenz",     icon:"🕊️", desc:"Weidel holds a prime-time press conference: NATO is dragging Germany into a war that costs us €100B . Time for a German foreign policy", effect:"+0.5% peace-sceptical conservatives, eastern voters", boost:0.5, reach:"national" },
    { id:"a_russia_dialog",  name:"Dialog statt Sanktionen",        icon:"🤝", desc:"Launch the 'Sanctions are destroying Germany' campaign — cheaper gas, restore trade, end the economic war", effect:"+0.55% gas-bill voters, eastern Laender", boost:0.55, reach:"rural" },
    { id:"a_flat_tax_event", name:"Flat-Tax-Kongress",              icon:"📊", desc:"AfD economic summit in Frankfurt; unveil the 15% flat tax plan with economists and business leaders", effect:"+0.5% entrepreneurs, anti-tax conservatives", boost:0.5, reach:"business" },
    { id:"a_ukraine_nein",   name:"Keine Waffen nach Kiew",         icon:"✋", desc:"Nationwide petition launch demanding a stop to all weapons deliveries to Ukraine; over 1 million signatures in a week", effect:"+0.6% anti-war base, -0.2% pro-Ukraine voters", boost:0.5, reach:"national" },
    { id:"a_privatise_event",name:"Privatisierungsplan Vorstellung", icon:"🏛️", desc:"Present the AfD's plan to sell state assets and slash the federal bureaucracy by 40%", effect:"+0.45% business voters, anti-state conservatives", boost:0.45, reach:"business" },
  ],
  Greens: [
    { id:"g_habeck_podcast", name:"Social Media Initiative",       icon:"🌿", desc:"Robert Habeck hosts a 2-hour podcast on the green transformation; an effort to win the youth vote", effect:"+0.5% educated youth, progressive urban voters", boost:0.5, reach:"young" },
    { id:"g_klimakonferenz", name:"Klimakonferenz Berlin",          icon:"🌍", desc:"Major climate summit with scientists and activists; Greens win the headline completely", effect:"+0.55% green voters, progressive bloc", boost:0.55, reach:"urban" },
    { id:"g_baerbock_eu",    name:"Europa-Tour",           icon:"🇪🇺", desc:"Annalena Baerbock tours Brussels, Paris and Warsaw; pro-EU agenda dominates coverage all week", effect:"+0.45% pro-EU urbanites, foreign policy credibility", boost:0.45, reach:"urban" },
    { id:"g_fridays",        name:"Fridays For Future Endorsement", icon:"♻️", desc:"Joint appearance with FFF leaders; massive youth mobilisation with some controversy", effect:"+0.6% youth voters, -0.15% over-55s", boost:0.5, reach:"young" },
    { id:"g_oeko_bauern",    name:"Oeko-Bauern-Dialog",             icon:"🌾", desc:"Green farming dialogue; reframe Greens as rural allies rather than enemies of farmers", effect:"+0.4% rural sympathisers, challenges rival narrative", boost:0.4, reach:"rural" },
  ],
  FDP: [
    { id:"f_lindner_auto",   name:"Defend the Richtgeschwindigkeit",        icon:"🏎️", desc:"Christian Lindner holds a press conference on the Autobahn, defending an advisory limit rather than  legal speed limit.", effect:"+0.5% car-owning conservatives, libertarian voters", boost:0.5, reach:"business" },
    { id:"f_startup_event",  name:"Silicon Allee Summit",           icon:"🚀", desc:"The largest startup summit in Berlin. Defend the FDP as the party of innovation and growth", effect:"+0.55% entrepreneurs, young urban professionals", boost:0.55, reach:"young" },
    { id:"f_schuldenbremse", name:"Schuldenbremse Rally",           icon:"🔒", desc:"Launch a 10-city tour defending the debt brake, arguing fiscal discipline as an existential political cause", effect:"+0.45% fiscal conservatives, anti-spend voters", boost:0.45, reach:"business" },
    { id:"f_buerokratie",    name:"Regulierungsabbau-Tag",          icon:"📋", desc:"Announce a bonfire of regulations; 50 laws FDP will scrap on day one in office", effect:"+0.5% SMEs, anti-bureaucracy voters", boost:0.5, reach:"business" },
    { id:"f_digitalschule",  name:"Digitalschule Initiative",       icon:"💻", desc:"Launch the Digital School 2030 plan; tablets, AI tutors and fast broadband everywhere", effect:"+0.4% parents, tech-savvy young voters", boost:0.4, reach:"young" },
  ],
  Linke: [
    { id:"l_wagenknecht",    name:"Wagenknecht Grossveranstaltung", icon:"✊", desc:"Sahra Wagenknecht addresses 20,000 in Leipzig; delivering an electrifying speech on poverty, peace and dignity", effect:"+0.65% working-class east, left base, media storm", boost:0.65, reach:"workers" },
    { id:"l_vermogen",       name:"Vermoegenssteuer-Kampagne",      icon:"💰", desc:"National campaign for a 2% wealth tax; dominating the inequality debate for a full week", effect:"+0.5% low-income voters, trade unionists", boost:0.5, reach:"workers" },
    { id:"l_miete_demo",     name:"Mietenwahnsinn-Demo",            icon:"🏘️", desc:"Lead the Berlin housing crisis demo; 80,000 march behind Linke banners through Mitte", effect:"+0.55% renters, urban young, housing-crisis voters", boost:0.55, reach:"urban" },
    { id:"l_frieden",        name:"Friedensbewegung Tour",          icon:"🕊️", desc:"Peace movement rallies in 6 cities; no more arms exports, no escalation, diplomacy now", effect:"+0.5% anti-war left, peace activists", boost:0.5, reach:"national" },
    { id:"l_gysi_tv",        name:"Late Night TV Marathon",       icon:"🎙️", desc:"Gregor Gysi on five TV shows in one week; wit, history and sharp political critique", effect:"+0.4% broad left sympathy, educated voters", boost:0.4, reach:"urban" },
    { id:"l_nato_kongress",  name:"Gegen NATO-Aufrüstung Kongress", icon:"🚫", desc:"Host a national peace congress with 5,000 delegates; demand Germany leave NATO structures and pursue a European security alternative", effect:"+0.55% anti-NATO left, peace base, pacifist voters", boost:0.55, reach:"national" },
    { id:"l_ruestung_kritik",name:"Rüstungsindustrie Enthüllung",   icon:"🏭", desc:"Publish a damning report on Rheinmetall lobbying and the Bundeswehr procurement scandal; Die Linke demands a full inquiry", effect:"+0.5% anti-militarism voters, investigative media", boost:0.5, reach:"urban" },
    { id:"l_bw_demo",        name:"Bundeswehr-Budget-Demo",         icon:"✂️", desc:"March on the Verteidigungsministerium; cut the €100B Bundeswehr fund, spend it on schools and hospitals", effect:"+0.6% pacifist left, social-spending voters", boost:0.6, reach:"national" },
    { id:"l_ukraine_dialog", name:"Waffenstillstand jetzt!",        icon:"🌐", desc:"Launch the 'Ceasefire Now' campaign; Linke demands Germany lead EU mediation efforts and end all weapons deliveries to conflict zones.", effect:"+0.5% anti-war voters, -0.2% pro-Ukraine centre-left", boost:0.4, reach:"national" },
    { id:"l_conscript_nein", name:"Nein zur Wehrpflicht Kampagne",  icon:"🪖", desc:"Nationwide Linke campaign against any return of conscription; 200 local events, schools outreach, youth mobilisation", effect:"+0.55% young voters, parents, pacifist base", boost:0.55, reach:"young" },
  ],
};

window.PARTY_SPECIFIC_EVENTS_2021 = {
  Union: [
    { id:'u_laschet_stability_2021', name:'Stability After Merkel', icon:'🏛️', desc:'Frame the Union as the safe post-Merkel hand in a nervous electorate.', effect:'+0.4% continuity voters', boost:0.4, reach:'national' },
    { id:'u_flood_response_2021', name:'Flood Recovery Pledge', icon:'🌊', desc:'A major appearance in the flood zone focused on reconstruction and reliability.', effect:'+0.35% resilience voters', boost:0.35, reach:'national' },
    { id:'u_mittelstand_2021', name:'Mittelstand Recovery Tour', icon:'🚌', desc:'Visit export-heavy SMEs and warn against risky experiments during recovery.', effect:'+0.4% business conservatives', boost:0.4, reach:'business' },
    { id:'u_security_2021', name:'Security and Order Speech', icon:'🛂', desc:'A prime-time speech promising competence on migration, policing and state authority.', effect:'+0.35% conservative swing voters', boost:0.35, reach:'national' },
    { id:'u_bavaria_2021', name:'CSU Unity Weekend', icon:'🦁', desc:'A Bavaria-focused unity push to stop conservative leakage and energise the base.', effect:'+0.45% southern conservatives', boost:0.45, reach:'rural' },
  ],
  SPD: [
    { id:'s_respekt_2021', name:'Respekt Tour', icon:'✊', desc:'Take the SPD’s respect message to workers, nurses and ordinary earners.', effect:'+0.45% working-class and moderate voters', boost:0.45, reach:'workers' },
    { id:'s_minwage_2021', name:'€12 Minimum Wage Push', icon:'💶', desc:'Make the minimum wage the unmistakable centrepiece of the SPD campaign.', effect:'+0.5% labour and fairness voters', boost:0.5, reach:'workers' },
    { id:'s_scholz_2021', name:'Scholz Competence Broadcast', icon:'📺', desc:'Project calm, understated seriousness on fiscal and executive competence.', effect:'+0.4% centrist trust voters', boost:0.4, reach:'national' },
    { id:'s_housing_2021', name:'Housing Affordability Plan', icon:'🏘️', desc:'Unveil an urban housing package aimed at renters and younger families.', effect:'+0.4% renters and urban families', boost:0.4, reach:'urban' },
    { id:'s_east_2021', name:'Eastern Germany Tour', icon:'🧭', desc:'Compete hard in eastern states on wages, dignity and stability.', effect:'+0.35% eastern voters', boost:0.35, reach:'rural' },
  ],
  AfD: [
    { id:'a_east_2021', name:'Eastern Protest Tour', icon:'🏙️', desc:'Concentrate the campaign in eastern strongholds with a message of betrayal by Berlin.', effect:'+0.5% eastern protest vote', boost:0.5, reach:'rural' },
    { id:'a_border_2021', name:'Border Control Push', icon:'🚷', desc:'Hammer migration and state failure in the final stretch.', effect:'+0.4% hardline migration voters', boost:0.4, reach:'national' },
    { id:'a_system_2021', name:'System Party Broadside', icon:'📣', desc:'Attack the establishment and tie every campaign failure to the old parties.', effect:'+0.35% anti-establishment voters', boost:0.35, reach:'national' },
    { id:'a_economy_2021', name:'Cost-of-Living Warning', icon:'📊', desc:'Argue that climate policy and elite politics are making ordinary Germans poorer.', effect:'+0.35% cost-sensitive voters', boost:0.35, reach:'workers' },
    { id:'a_media_2021', name:'Alternative Media Blitz', icon:'📺', desc:'Flood sympathetic media channels with sharp anti-establishment messaging.', effect:'+0.35% core base mobilisation', boost:0.35, reach:'national' },
  ],
  Greens: [
    { id:'g_flood_2021', name:'Flood Response Summit', icon:'🌊', desc:'Tie the Ahr catastrophe directly to climate resilience and competent government.', effect:'+0.5% climate and state-capacity voters', boost:0.5, reach:'urban' },
    { id:'g_future_2021', name:'Fridays for Future Wave', icon:'♻️', desc:'A youth-heavy mobilisation built around climate urgency and generational change.', effect:'+0.45% youth and urban progressives', boost:0.45, reach:'young' },
    { id:'g_baerbock_2021', name:'Baerbock Renewal Speech', icon:'🌿', desc:'Frame the Greens as the fresh alternative after sixteen Merkel years.', effect:'+0.4% change voters', boost:0.4, reach:'urban' },
    { id:'g_housing_2021', name:'Green Cities Tour', icon:'🚲', desc:'A campaign swing centred on transport, housing and liveable cities.', effect:'+0.35% urban professionals', boost:0.35, reach:'urban' },
    { id:'g_europe_2021', name:'European Future Address', icon:'🇪🇺', desc:'Link climate action, democracy and a stronger European project.', effect:'+0.35% pro-EU graduates', boost:0.35, reach:'urban' },
  ],
  FDP: [
    { id:'f_digital_2021', name:'Digital State Offensive', icon:'💻', desc:'Push modernisation, entrepreneurship and a less embarrassing German state.', effect:'+0.45% digital and reform voters', boost:0.45, reach:'young' },
    { id:'f_debt_2021', name:'Debt Brake Defence', icon:'🔒', desc:'Insist that recovery still needs fiscal seriousness and not a blank cheque state.', effect:'+0.4% fiscal conservatives', boost:0.4, reach:'business' },
    { id:'f_startup_2021', name:'Startup Germany Event', icon:'🚀', desc:'Make the case for innovation, investment and entrepreneurial optimism.', effect:'+0.45% founders and professionals', boost:0.45, reach:'young' },
    { id:'f_education_2021', name:'Future Skills Plan', icon:'📚', desc:'Promote digital education and opportunity instead of old-party management.', effect:'+0.35% younger middle-class voters', boost:0.35, reach:'young' },
    { id:'f_freedom_2021', name:'Freedom and Modernity Tour', icon:'🗽', desc:'Contrast liberal civil society with bureaucracy, caution and stagnation.', effect:'+0.35% urban liberals', boost:0.35, reach:'urban' },
  ],
  Linke: [
    { id:'l_rent_2021', name:'Rent Freeze Campaign', icon:'🏘️', desc:'Put housing insecurity at the centre of every appearance and protest.', effect:'+0.45% renters and urban left voters', boost:0.45, reach:'urban' },
    { id:'l_wealth_2021', name:'Tax the Rich Tour', icon:'💰', desc:'A week-long inequality message targeting wealth, rents and precarious work.', effect:'+0.4% low-income and activist voters', boost:0.4, reach:'workers' },
    { id:'l_peace_2021', name:'Peace and Social Justice Rally', icon:'🕊️', desc:'Link anti-militarism to social spending and welfare-state priorities.', effect:'+0.35% pacifist and left voters', boost:0.35, reach:'national' },
    { id:'l_care_2021', name:'Care Workers Solidarity Day', icon:'🏥', desc:'Stand with nurses and care workers demanding permanent recognition after the pandemic.', effect:'+0.35% public sector and social voters', boost:0.35, reach:'workers' },
    { id:'l_east_2021', name:'Eastern Left Base Tour', icon:'🧭', desc:'Defend core eastern constituencies against both AfD protest and SPD tactical voting.', effect:'+0.35% eastern left base', boost:0.35, reach:'rural' },
  ],
};

window.PARTY_ATTACKS = {
  Union: [
    { text: "Your party has no credible economic plan. Germany cannot afford your promises. — Friedrich Merz", topic: "economy" },
    { text: "After your failures in government, voters deserve better than more empty words. — CDU/CSU", topic: "competence" },
    { text: "Your stance on migration puts German security at risk. — Union", topic: "migration" },
    { text: "You cannot manage a budget. Under your watch, Germany slid into debt and recession. — Merz", topic: "economy" },
    { text: "Your foreign policy naivety endangers our allies and our security. — Union", topic: "foreign" },
  ],
  SPD: [
    { text: "Your tax plans help only millionaires — working Germans pay the price. — Olaf Scholz", topic: "economy" },
    { text: "You have never stood up for workers. Your record speaks for itself. — SPD", topic: "labour" },
    { text: "Your social policy would reverse 50 years of progress for ordinary families. — SPD", topic: "social" },
    { text: "Rents are unaffordable because of policies your party supported. We will fix that. — Scholz", topic: "housing" },
    { text: "Your climate denial is a gift to our competitors and a betrayal of future generations. — SPD", topic: "climate" },
  ],
  AfD: [
    { text: "The political establishment — including your party — has betrayed ordinary Germans. — Alice Weidel", topic: "establishment" },
    { text: "Your open-borders ideology has cost lives and destroyed communities. — AfD", topic: "migration" },
    { text: "Your climate zealotry is destroying German industry and killing working-class jobs. — AfD", topic: "climate" },
    { text: "You call us extremists while you cover up the government failures that created us. — Weidel", topic: "establishment" },
    { text: "Germans are poorer, less safe, and more divided after years of your kind of politics. — AfD", topic: "competence" },
  ],
  Greens: [
    { text: "Climate inaction is not a policy — it is an abdication of responsibility. — Robert Habeck", topic: "climate" },
    { text: "Your record on social justice is a national embarrassment. We will not stay silent. — Gruene", topic: "social" },
    { text: "You block every step forward on Europe while the world moves on without us. — Greens", topic: "eu" },
    { text: "Subsidising fossil fuels in 2025 is not an energy policy — it is corruption. — Habeck", topic: "climate" },
    { text: "You talk about the future while voting for the past every single time. — Greens", topic: "reform" },
  ],
  FDP: [
    { text: "Your economic programme would add 200 billion euros to the national debt in four years. — Christian Lindner", topic: "economy" },
    { text: "More state is never the answer — your party still has not learned that lesson. — FDP", topic: "state" },
    { text: "Digital Germany needs liberal leadership, not your bureaucratic instincts. — FDP", topic: "digital" },
    { text: "You want to spend money Germany does not have on programmes that do not work. — Lindner", topic: "economy" },
    { text: "Every euro wasted on your statist agenda is a euro stolen from future generations. — FDP", topic: "economy" },
  ],
  Linke: [
    { text: "Your party serves the corporations and calls it reform. Workers see through you. — Sahra Wagenknecht", topic: "inequality" },
    { text: "Sending weapons to conflict zones and calling for peace in the same breath — voters see the lie. — Linke", topic: "foreign" },
    { text: "The working class deserves better than centrist platitudes dressed up as policy. — Linke", topic: "labour" },
    { text: "You had your chance to tax the wealthy and you blinked. We will not blink. — Wagenknecht", topic: "inequality" },
    { text: "A quarter of German children live in poverty. That is your legacy and your shame. — Linke", topic: "social" },
  ],
};

window.PARTY_ATTACKS_2021 = {
  Union: [
    { text: "Germany needs seriousness and stability, not improvisation dressed up as change. — Armin Laschet", topic: "competence" },
    { text: "Your promises are expensive, vague and risky for a country still recovering from crisis. — CDU/CSU", topic: "economy" },
    { text: "Climate policy without industrial realism will cost Germany jobs and competitiveness. — Union", topic: "climate" },
  ],
  SPD: [
    { text: "Germany does not need more slogans. It needs respect, competence and a government that works. — Olaf Scholz", topic: "competence" },
    { text: "Your party protects privilege while ordinary workers carry the burden. — SPD", topic: "labour" },
    { text: "If you cannot answer the housing crisis, you are not ready to govern. — SPD", topic: "housing" },
  ],
  AfD: [
    { text: "The old parties have failed on migration, sovereignty and security for years. — Alice Weidel", topic: "establishment" },
    { text: "Climate hysteria and EU centralism are destroying German prosperity. — AfD", topic: "climate" },
    { text: "You call us dangerous because you are afraid voters are done with you. — Tino Chrupalla", topic: "establishment" },
  ],
  Greens: [
    { text: "The flood disaster showed what denial and delay cost. Germany needs courage, not excuses. — Annalena Baerbock", topic: "climate" },
    { text: "You still talk as if the future can wait. It cannot. — Greens", topic: "reform" },
    { text: "Post-Merkel Germany deserves honesty, not managerial autopilot. — Robert Habeck", topic: "leadership" },
  ],
  FDP: [
    { text: "Germany needs a modern state and a competitive economy, not another spending wish-list. — Christian Lindner", topic: "economy" },
    { text: "Your answer to every problem is more bureaucracy and more debt. — FDP", topic: "state" },
    { text: "The country needs renewal, but with fiscal sanity. — FDP", topic: "economy" },
  ],
  Linke: [
    { text: "Your politics protect property and privilege while rents and poverty keep rising. — Janine Wissler", topic: "inequality" },
    { text: "The working class deserves better than speeches about balance and restraint. — Die Linke", topic: "labour" },
    { text: "If you will not tax wealth and build social housing, you are defending the status quo. — Dietmar Bartsch", topic: "social" },
  ],
};

window.POLITICIAN_POOL = {
  Union: [
    { id:'u1',  name:'Friedrich Merz',       portrait:'🧑‍💼', ideology:+1.2, traits:['Fiscal hawk','Pro-business','Atlanticist'],            ambition:0.95, loyalty:0.65, chancChance:0.9 },
    { id:'u2',  name:'Armin Laschet',        portrait:'👨‍⚖️', ideology:+0.4, traits:['Centrist','Consensual','Pro-EU'],                      ambition:0.70, loyalty:0.80, chancChance:0.6 },
    { id:'u3',  name:'Julia Klöckner',       portrait:'👩‍💼', ideology:+0.8, traits:['Economic liberal','CSU ally','Rural focus'],           ambition:0.55, loyalty:0.85, chancChance:0.2 },
    { id:'u4',  name:'Jens Spahn',           portrait:'🧑‍⚕️', ideology:+0.9, traits:['Right flank','Ambitious','Healthcare focus'],         ambition:0.80, loyalty:0.55, chancChance:0.4 },
    { id:'u7',  name:'Helge Braun',          portrait:'🏛️', ideology:+0.5, traits:['Former Chancellery chief','Loyal','Crisis manager'],   ambition:0.50, loyalty:0.90, chancChance:0.1 },
    { id:'u8',  name:'Paul Ziemiak',         portrait:'📋', ideology:+0.7, traits:['Party secretary','Organised','Quiet enforcer'],        ambition:0.45, loyalty:0.88, chancChance:0.05},
    { id:'u9',  name:'Annegret Kramp-Karrenbauer', portrait:'⚔️', ideology:+0.6, traits:['Defence focus','Former leader','Transatlantist'], ambition:0.60, loyalty:0.82, chancChance:0.15},
    { id:'u10', name:'Carsten Linnemann',    portrait:'📊', ideology:+1.1, traits:['Economic right','Reform hawk','Sharp debater'],         ambition:0.65, loyalty:0.70, chancChance:0.2 },
    { id:'u11', name:'Silvia Breher',        portrait:'🌾', ideology:+0.5, traits:['Agriculture focus','Rural','Consensual'],               ambition:0.35, loyalty:0.90, chancChance:0.05},
    { id:'u12', name:'Thomas Strobl',        portrait:'🚔', ideology:+0.8, traits:['Interior focus','Baden-Württemberg','Tough on crime'],  ambition:0.50, loyalty:0.80, chancChance:0.1 },
  ],
  CSU: [
    { id:'c1',  name:'Markus Söder',         portrait:'🦁',  ideology:+1.1, traits:['CSU chief','Bavaria-first','Populist edge'],           ambition:0.94, loyalty:0.72, chancChance:0.78 },
    { id:'c2',  name:'Alexander Dobrindt',   portrait:'🚘', ideology:+1.1, traits:['Landesgruppenchef','Transport hawk','Tough negotiator'], ambition:0.68, loyalty:0.78, chancChance:0.18 },
    { id:'c3',  name:'Dorothee Bär',         portrait:'👩‍💻', ideology:+0.4, traits:['Digitisation advocate','Media savvy','Modernist'],     ambition:0.52, loyalty:0.88, chancChance:0.12 },
    { id:'c4',  name:'Joachim Herrmann',     portrait:'🚔', ideology:+1.0, traits:['Interior hawk','Law and order','Bavarian veteran'],      ambition:0.46, loyalty:0.86, chancChance:0.06 },
    { id:'c5',  name:'Ilse Aigner',          portrait:'🌾', ideology:+0.6, traits:['Pragmatic conservative','Bavarian networker','Stable'],   ambition:0.42, loyalty:0.90, chancChance:0.05 },
    { id:'c6',  name:'Klaus Holetschek',     portrait:'🏥', ideology:+0.8, traits:['Health focus','State-level operator','Disciplined'],      ambition:0.44, loyalty:0.84, chancChance:0.05 },
  ],
  SPD: [
    { id:'s1',  name:'Olaf Scholz',          portrait:'🧓',  ideology:-0.3, traits:['Pragmatist','Finance expert','Unflappable'],            ambition:0.75, loyalty:0.80, chancChance:0.85 },
    { id:'s2',  name:'Saskia Esken',         portrait:'👩‍🏫', ideology:-1.2, traits:['Left wing','Redistributionist','Party base hero'],     ambition:0.55, loyalty:0.60, chancChance:0.2 },
    { id:'s3',  name:'Lars Klingbeil',       portrait:'🧑‍🤝‍🧑', ideology:-0.5, traits:['Party organiser','Centrist','Loyal team player'],   ambition:0.60, loyalty:0.90, chancChance:0.3 },
    { id:'s4',  name:'Karl Lauterbach',      portrait:'🩺',  ideology:-0.6, traits:['Health expert','Combative','Science-driven'],          ambition:0.50, loyalty:0.75, chancChance:0.1 },
    { id:'s5',  name:'Hubertus Heil',        portrait:'👷',  ideology:-0.7, traits:['Labour advocate','Steady hand','Working class'],       ambition:0.45, loyalty:0.85, chancChance:0.1 },
    { id:'s6',  name:'Boris Pistorius',      portrait:'🪖',  ideology:-0.2, traits:['Defence hawk','Pragmatic','High public trust'],        ambition:0.55, loyalty:0.80, chancChance:0.3 },
    { id:'s7',  name:'Franziska Giffey',     portrait:'🏙️', ideology:-0.4, traits:['Urban focus','Former Berlin mayor','Social policy'],   ambition:0.60, loyalty:0.75, chancChance:0.1 },
    { id:'s8',  name:'Rolf Mützenich',       portrait:'🕊️', ideology:-0.8, traits:['Pacifist','Parliamentary leader','Anti-war'],          ambition:0.40, loyalty:0.80, chancChance:0.05},
    { id:'s9',  name:'Michael Roth',         portrait:'🌍', ideology:-0.5, traits:['Foreign affairs','Pro-EU','Reliable'],                 ambition:0.45, loyalty:0.85, chancChance:0.1 },
    { id:'s10', name:'Kevin Kühnert',        portrait:'✊', ideology:-1.0, traits:['Youth wing icon','Left flank','Anti-capitalist'],       ambition:0.65, loyalty:0.60, chancChance:0.2 },
    { id:'s11', name:'Anke Rehlinger',       portrait:'⚖️', ideology:-0.5, traits:['Saarland premier','Justice focus','Federalist'],       ambition:0.50, loyalty:0.82, chancChance:0.1 },
    { id:'s12', name:'Dietmar Woidke',       portrait:'🌾', ideology:-0.4, traits:['Brandenburg premier','Eastern Germany','Pragmatist'],  ambition:0.45, loyalty:0.85, chancChance:0.05},
  ],
  Greens: [
    { id:'g1',  name:'Robert Habeck',        portrait:'🌿',  ideology:-0.8, traits:['Climate champion','Philosophical','Media-friendly'],    ambition:0.80, loyalty:0.70, chancChance:0.8 },
    { id:'g2',  name:'Annalena Baerbock',    portrait:'🌍',  ideology:-0.6, traits:['Foreign policy focus','Values-driven','Pro-EU'],       ambition:0.75, loyalty:0.75, chancChance:0.6 },
    { id:'g3',  name:'Ricarda Lang',         portrait:'👩‍🎓', ideology:-1.1, traits:['Left Greens','Social justice','Youth icon'],         ambition:0.60, loyalty:0.65, chancChance:0.2 },
    { id:'g4',  name:'Cem Özdemir',          portrait:'🌾',  ideology:-0.3, traits:['Agriculture focus','Pragmatic wing','Integrator'],    ambition:0.55, loyalty:0.80, chancChance:0.2 },
    { id:'g5',  name:'Anton Hofreiter',      portrait:'🧔',  ideology:-1.0, traits:['Realo-Fundi bridge','Long-serving','Principled'],     ambition:0.40, loyalty:0.70, chancChance:0.1 },
    { id:'g6',  name:'Katharina Dröge',      portrait:'📜',  ideology:-0.7, traits:['Economics focus','Anti-monopoly','Sharp mind'],       ambition:0.55, loyalty:0.75, chancChance:0.1 },
    { id:'g7',  name:'Britta Haßelmann',     portrait:'⚙️',  ideology:-0.6, traits:['Parliamentary manager','Quiet reformer','Steady'],    ambition:0.40, loyalty:0.85, chancChance:0.05},
    { id:'g8',  name:'Steffi Lemke',         portrait:'🐦',  ideology:-0.9, traits:['Environment specialist','Nature protection','Diligent'],ambition:0.40, loyalty:0.80, chancChance:0.05},
    { id:'g9',  name:'Omid Nouripour',       portrait:'🗺️', ideology:-0.5, traits:['Foreign affairs','Pro-EU','Diplomatic'],              ambition:0.55, loyalty:0.78, chancChance:0.1 },
    { id:'g10', name:'Lisa Paus',            portrait:'🧮', ideology:-0.8, traits:['Finance & family','Tax justice','Left Greens'],        ambition:0.50, loyalty:0.72, chancChance:0.1 },
    { id:'g11', name:'Franziska Brantner',   portrait:'🏗️', ideology:-0.6, traits:['Housing focus','Urban renewal','Young reformer'],      ambition:0.50, loyalty:0.78, chancChance:0.05},
    { id:'g12', name:'Oliver Krischer',      portrait:'⚡', ideology:-0.8, traits:['Energy transition','NRW minister','Climate hawk'],     ambition:0.45, loyalty:0.75, chancChance:0.05},
  ],
  FDP: [
    { id:'f1',  name:'Christian Lindner',    portrait:'💛',  ideology:+1.0, traits:['Debt brake champion','Liberal hawk','Dealbreaker'],    ambition:0.90, loyalty:0.55, chancChance:0.5 },
    { id:'f2',  name:'Marie-Agnes Strack-Zimmermann', portrait:'🛡️', ideology:+0.7, traits:['Defence focus','NATO hawk','Blunt'],        ambition:0.65, loyalty:0.70, chancChance:0.2 },
    { id:'f3',  name:'Volker Wissing',       portrait:'🚂',  ideology:+0.6, traits:['Infrastructure','Pragmatic','Quiet operator'],       ambition:0.45, loyalty:0.85, chancChance:0.1 },
    { id:'f4',  name:'Johannes Vogel',       portrait:'📊',  ideology:+0.8, traits:['Economic liberal','Reform-minded','Sharp debater'],   ambition:0.60, loyalty:0.75, chancChance:0.2 },
    { id:'f5',  name:'Marco Buschmann',      portrait:'⚖️', ideology:+0.7, traits:['Justice focus','Rule-of-law','Libertarian'],          ambition:0.55, loyalty:0.78, chancChance:0.1 },
    { id:'f6',  name:'Bettina Stark-Watzinger', portrait:'🎓', ideology:+0.6, traits:['Education & research','Innovation','Reliable'],    ambition:0.45, loyalty:0.82, chancChance:0.05},
    { id:'f7',  name:'Linda Teuteberg',      portrait:'📋', ideology:+0.5, traits:['Interior focus','Liberal conservative','Diligent'],   ambition:0.40, loyalty:0.85, chancChance:0.05},
    { id:'f8',  name:'Michael Theurer',      portrait:'🚄', ideology:+0.7, traits:['Transport hawk','Rail advocate','Pro-market'],        ambition:0.40, loyalty:0.80, chancChance:0.05},
    { id:'f9',  name:'Daniel Föst',          portrait:'🏘️', ideology:+0.5, traits:['Housing & property','Liberal-social','Local focus'], ambition:0.35, loyalty:0.85, chancChance:0.05},
    { id:'f10', name:'Gyde Jensen',          portrait:'🗺️', ideology:+0.4, traits:['Foreign affairs','Human rights','Pro-EU'],            ambition:0.45, loyalty:0.82, chancChance:0.05},
    { id:'f11', name:'Moritz Körner',        portrait:'🌐', ideology:+0.5, traits:['Digital policy','Cybersecurity','Young liberal'],     ambition:0.50, loyalty:0.78, chancChance:0.05},
    { id:'f12', name:'Alexander Müller',     portrait:'⚗️', ideology:+0.6, traits:['Environment-liberal','Pragmatic green','Innovator'], ambition:0.35, loyalty:0.85, chancChance:0.05},
  ],
  Linke: [
    { id:'l2',  name:'Bodo Ramelow',         portrait:'🔴',  ideology:-0.9, traits:['Pragmatic left','Thuringia PM','Gouvernable'],       ambition:0.60, loyalty:0.75, chancChance:0.3 },
    { id:'l3',  name:'Janine Wissler',       portrait:'🌹',  ideology:-1.3, traits:['Class politics','Anti-austerity','Party purist'],    ambition:0.55, loyalty:0.65, chancChance:0.1 },
    { id:'l4',  name:'Gregor Gysi',          portrait:'🎙️', ideology:-0.8, traits:['Elder statesman','Witty debater','Pragmatic'],        ambition:0.40, loyalty:0.80, chancChance:0.2 },
    { id:'l5',  name:'Bernd Riexinger',      portrait:'⚙️', ideology:-1.4, traits:['Trade unionist','Anti-austerity','Stubborn'],        ambition:0.45, loyalty:0.70, chancChance:0.05},
    { id:'l7',  name:'Heidi Reichinnek',     portrait:'🌊', ideology:-1.2, traits:['Youth icon','Anti-capitalism','Energetic'],           ambition:0.60, loyalty:0.65, chancChance:0.15},
    { id:'l8',  name:'Jan Korte',            portrait:'📚', ideology:-1.0, traits:['Interior & democracy','Civil liberties','Reliable'],  ambition:0.40, loyalty:0.80, chancChance:0.05},
    { id:'l9',  name:'Susanne Ferschl',      portrait:'👷', ideology:-1.2, traits:['Labour rights','Anti-poverty','Working class'],       ambition:0.40, loyalty:0.78, chancChance:0.05},
    { id:'l10', name:'Eva Bulling-Schröter', portrait:'🌿', ideology:-1.0, traits:['Environment left','Climate justice','Principled'],   ambition:0.35, loyalty:0.82, chancChance:0.05},
    { id:'l12', name:'Cornelia Möhring',     portrait:'⚖️', ideology:-1.3, traits:['Justice & equality','Feminist left','Steadfast'],    ambition:0.38, loyalty:0.80, chancChance:0.05},
    { id:'l13', name:'Ines Schwerdtner',     portrait:'📝', ideology:-1.3, traits:['Party chair','Movement left','Media sharp'],          ambition:0.62, loyalty:0.82, chancChance:0.18},
    { id:'l14', name:'Sören Pellmann',       portrait:'🏘️', ideology:-1.1, traits:['Co-chair','East focus','Grounded organiser'],        ambition:0.56, loyalty:0.84, chancChance:0.16},
    { id:'l15', name:'Ates Gürpinar',        portrait:'🏥', ideology:-1.2, traits:['Social policy','Health focus','Party strategist'],    ambition:0.48, loyalty:0.82, chancChance:0.08},
    { id:'l16', name:'Clara Bünger',         portrait:'⚖️', ideology:-1.1, traits:['Refugee rights','Civil liberties','Sharp advocate'], ambition:0.44, loyalty:0.84, chancChance:0.06},
    { id:'l17', name:'Ferat Koçak',          portrait:'🏙️', ideology:-1.2, traits:['Urban organiser','Anti-racism','Campaign talent'],   ambition:0.52, loyalty:0.78, chancChance:0.08},
  ],
  BSW: [
    { id:'b1',  name:'Sahra Wagenknecht',    portrait:'✊', ideology:-1.1, traits:['Founder','Media magnet','System critic'],              ambition:0.95, loyalty:0.92, chancChance:0.82 },
    { id:'b2',  name:'Amira Mohamed Ali',    portrait:'📣', ideology:-1.0, traits:['Parliamentary lead','Disciplined','Social justice'],   ambition:0.74, loyalty:0.90, chancChance:0.28 },
    { id:'b3',  name:'Klaus Ernst',          portrait:'🏭', ideology:-0.9, traits:['Industrial left','Trade unions','Energy focus'],       ambition:0.58, loyalty:0.82, chancChance:0.10 },
    { id:'b4',  name:'Sevim Dağdelen',       portrait:'🌍', ideology:-1.0, traits:['Foreign policy hawk','Anti-war','Combative'],         ambition:0.66, loyalty:0.86, chancChance:0.12 },
    { id:'b5',  name:'Fabio De Masi',        portrait:'💶', ideology:-0.8, traits:['Economic populist','Finance expert','Television-ready'], ambition:0.70, loyalty:0.80, chancChance:0.14 },
    { id:'b6',  name:'Christian Leye',       portrait:'📋', ideology:-1.0, traits:['Secretary-general','Organiser','Message discipline'], ambition:0.54, loyalty:0.88, chancChance:0.06 },
    { id:'b7',  name:'Jessica Tatti',        portrait:'🏠', ideology:-1.0, traits:['Housing focus','Social policy','Reliable'],            ambition:0.46, loyalty:0.84, chancChance:0.05 },
    { id:'b8',  name:'Alexander Ulrich',     portrait:'🏗️', ideology:-0.9, traits:['Industrial policy','Saarland','Labour focus'],        ambition:0.42, loyalty:0.82, chancChance:0.04 },
  ],
  SSW: [
    { id:'ssw1', name:'Stefan Seidler',      portrait:'🌊', ideology:-0.2, traits:['Minority rights','Schleswig voice','Calm negotiator'], ambition:0.52, loyalty:0.92, chancChance:0.03 },
    { id:'ssw2', name:'Sybilla Nitsch',      portrait:'⚖️', ideology:-0.3, traits:['State chair','Nordic model','Community focus'],      ambition:0.44, loyalty:0.90, chancChance:0.02 },
  ],
  FW: [
    { id:'fw1',  name:'Hubert Aiwanger',     portrait:'🧰', ideology:+0.8, traits:['Free Voters chief','Regional populist','Media fighter'], ambition:0.86, loyalty:0.82, chancChance:0.08 },
    { id:'fw2',  name:'Joachim Streit',      portrait:'🏘️', ideology:+0.6, traits:['Municipal focus','Regional liberal','Practitioner'],    ambition:0.42, loyalty:0.86, chancChance:0.03 },
    { id:'fw3',  name:'Michael Piazolo',     portrait:'🎓', ideology:+0.5, traits:['Education focus','Bavarian operator','Administrative'], ambition:0.38, loyalty:0.84, chancChance:0.02 },
  ],
  AfD: [
    { id:'a1',  name:'Alice Weidel',         portrait:'🔵',  ideology:+1.8, traits:['Party leader','Nationalist','Anti-establishment'],    ambition:0.90, loyalty:0.60, chancChance:0.8 },
    { id:'a2',  name:'Tino Chrupalla',       portrait:'🪖',  ideology:+1.6, traits:['Co-leader','East Germany','Anti-NATO'],             ambition:0.70, loyalty:0.70, chancChance:0.4 },
    { id:'a3',  name:'Beatrix von Storch',   portrait:'⚡',  ideology:+2.0, traits:['Hard right','Culture warrior','Uncompromising'],     ambition:0.65, loyalty:0.55, chancChance:0.2 },
    { id:'a4',  name:'Alexander Gauland',    portrait:'🦅',  ideology:+1.7, traits:['Elder hawk','Conservative nationalist','Cunning'],   ambition:0.45, loyalty:0.75, chancChance:0.3 },
    { id:'a5',  name:'Stephan Brandner',     portrait:'⚖️', ideology:+1.8, traits:['Justice focus','Hard right','Combative'],            ambition:0.55, loyalty:0.65, chancChance:0.1 },
    { id:'a6',  name:'Gottfried Curio',      portrait:'🛂', ideology:+1.9, traits:['Migration hawk','Tough border','Polished speaker'],   ambition:0.60, loyalty:0.68, chancChance:0.15},
    { id:'a7',  name:'Leif-Erik Holm',       portrait:'🌾', ideology:+1.6, traits:['Agriculture','East Germany','Farmer advocate'],      ambition:0.40, loyalty:0.78, chancChance:0.05},
    { id:'a8',  name:'Gerrit Huy',           portrait:'💶', ideology:+1.7, traits:['Finance focus','Anti-tax','Hard right'],             ambition:0.45, loyalty:0.72, chancChance:0.05},
    { id:'a9',  name:'Uwe Witt',             portrait:'🤝', ideology:+1.5, traits:['Social right','Welfare nationalist','Workers'],      ambition:0.40, loyalty:0.75, chancChance:0.05},
    { id:'a10', name:'Kay Gottschalk',       portrait:'💰', ideology:+1.6, traits:['Economics','Market sceptic','Consistent'],           ambition:0.42, loyalty:0.78, chancChance:0.05},
    { id:'a11', name:'Martin Sichert',       portrait:'🩺', ideology:+1.5, traits:['Health policy','Anti-mandate','Persistent'],         ambition:0.38, loyalty:0.80, chancChance:0.05},
    { id:'a12', name:'Hansjörg Müller',      portrait:'🏭', ideology:+1.7, traits:['Industry','Anti-green','Nationalist economy'],       ambition:0.40, loyalty:0.75, chancChance:0.05},
  ],
};

window.POLITICIAN_POOL_2021 = {
  Union: [
    { id:'u1', name:'Armin Laschet', portrait:'👨‍⚖️', ideology:+0.4, traits:['Centrist','Consensual','Pro-EU'], ambition:0.85, loyalty:0.8, chancChance:0.85 },
    { id:'u3', name:'Jens Spahn', portrait:'🧑‍⚕️', ideology:+0.9, traits:['Healthcare focus','Ambitious','Right flank'], ambition:0.75, loyalty:0.6, chancChance:0.35 },
    { id:'u4', name:'Norbert Röttgen', portrait:'🌐', ideology:+0.5, traits:['Foreign policy','Atlanticist','Reformer'], ambition:0.5, loyalty:0.78, chancChance:0.2 },
  ],
  CSU: [
    { id:'c1', name:'Markus Söder', portrait:'🦁', ideology:+1.05, traits:['CSU strongman','Bavaria-first','Media savvy'], ambition:0.92, loyalty:0.7, chancChance:0.7 },
    { id:'c2', name:'Alexander Dobrindt', portrait:'🚘', ideology:+1.0, traits:['Landesgruppe','Conservative tactician','Transport'], ambition:0.64, loyalty:0.8, chancChance:0.15 },
    { id:'c3', name:'Dorothee Bär', portrait:'👩‍💻', ideology:+0.4, traits:['Digitisation','Media-friendly','Young conservative'], ambition:0.48, loyalty:0.88, chancChance:0.08 },
  ],
  SPD: [
    { id:'s1', name:'Olaf Scholz', portrait:'🧓', ideology:-0.3, traits:['Pragmatist','Finance expert','Unflappable'], ambition:0.82, loyalty:0.82, chancChance:0.9 },
    { id:'s2', name:'Saskia Esken', portrait:'👩‍🏫', ideology:-1.2, traits:['Left wing','Redistributionist','Party base hero'], ambition:0.55, loyalty:0.6, chancChance:0.15 },
    { id:'s3', name:'Lars Klingbeil', portrait:'🧑‍🤝‍🧑', ideology:-0.5, traits:['Party organiser','Centrist','Loyal team player'], ambition:0.58, loyalty:0.9, chancChance:0.2 },
    { id:'s4', name:'Manuela Schwesig', portrait:'🌹', ideology:-0.4, traits:['Regional leader','Pragmatic','Strong communicator'], ambition:0.6, loyalty:0.75, chancChance:0.18 },
  ],
  Greens: [
    { id:'g1', name:'Annalena Baerbock', portrait:'🌍', ideology:-0.6, traits:['Campaign lead','Values-driven','Pro-EU'], ambition:0.86, loyalty:0.78, chancChance:0.85 },
    { id:'g2', name:'Robert Habeck', portrait:'🌿', ideology:-0.8, traits:['Climate champion','Philosophical','Media-friendly'], ambition:0.78, loyalty:0.74, chancChance:0.7 },
    { id:'g3', name:'Cem Özdemir', portrait:'🌾', ideology:-0.3, traits:['Pragmatic wing','Integrator','Agriculture focus'], ambition:0.55, loyalty:0.82, chancChance:0.15 },
    { id:'g4', name:'Katrin Göring-Eckardt', portrait:'🕊️', ideology:-0.5, traits:['Parliamentary veteran','Consensus seeker','Social liberal'], ambition:0.48, loyalty:0.84, chancChance:0.12 },
  ],
  FDP: [
    { id:'f1', name:'Christian Lindner', portrait:'💛', ideology:+1.0, traits:['Debt brake champion','Liberal hawk','Dealmaker'], ambition:0.92, loyalty:0.6, chancChance:0.55 },
    { id:'f2', name:'Volker Wissing', portrait:'🚂', ideology:+0.6, traits:['Infrastructure','Pragmatic','Quiet operator'], ambition:0.45, loyalty:0.84, chancChance:0.12 },
    { id:'f3', name:'Marco Buschmann', portrait:'⚖️', ideology:+0.7, traits:['Civil liberties','Sharp legal mind','Disciplined'], ambition:0.55, loyalty:0.78, chancChance:0.15 },
    { id:'f4', name:'Bettina Stark-Watzinger', portrait:'🎓', ideology:+0.5, traits:['Education focus','Modern liberal','Policy wonk'], ambition:0.42, loyalty:0.82, chancChance:0.08 },
  ],
  Linke: [
    { id:'l1', name:'Janine Wissler', portrait:'🌹', ideology:-1.3, traits:['Class politics','Anti-austerity','Party purist'], ambition:0.62, loyalty:0.68, chancChance:0.3 },
    { id:'l2', name:'Dietmar Bartsch', portrait:'📣', ideology:-0.9, traits:['Pragmatic left','Experienced negotiator','East focus'], ambition:0.6, loyalty:0.76, chancChance:0.3 },
    { id:'l3', name:'Bodo Ramelow', portrait:'🔴', ideology:-0.9, traits:['Pragmatic left','State premier','Governable'], ambition:0.58, loyalty:0.75, chancChance:0.25 },
    { id:'l4', name:'Gregor Gysi', portrait:'🎙️', ideology:-0.8, traits:['Elder statesman','Witty debater','Pragmatic'], ambition:0.38, loyalty:0.82, chancChance:0.15 },
  ],
  SSW: [
    { id:'ssw1', name:'Stefan Seidler', portrait:'🌊', ideology:-0.2, traits:['Minority rights','Northern regionalist','Consensus builder'], ambition:0.46, loyalty:0.92, chancChance:0.02 },
  ],
  FW: [
    { id:'fw1', name:'Hubert Aiwanger', portrait:'🧰', ideology:+0.8, traits:['Regional populist','Bavarian base','Strong profile'], ambition:0.82, loyalty:0.8, chancChance:0.06 },
    { id:'fw2', name:'Susann Enders', portrait:'📋', ideology:+0.7, traits:['Party organiser','Regional conservative','Disciplined'], ambition:0.44, loyalty:0.86, chancChance:0.02 },
  ],
  AfD: [
    { id:'a1', name:'Alice Weidel', portrait:'🔵', ideology:+1.8, traits:['Party leader','Nationalist','Anti-establishment'], ambition:0.9, loyalty:0.6, chancChance:0.78 },
    { id:'a2', name:'Tino Chrupalla', portrait:'🪖', ideology:+1.6, traits:['Co-leader','East Germany','Anti-NATO'], ambition:0.72, loyalty:0.72, chancChance:0.42 },
    { id:'a3', name:'Beatrix von Storch', portrait:'⚡', ideology:+2.0, traits:['Hard right','Culture warrior','Uncompromising'], ambition:0.65, loyalty:0.55, chancChance:0.2 },
    { id:'a4', name:'Jörg Meuthen', portrait:'🦅', ideology:+1.4, traits:['Economist','Liberal-national','Internal rival'], ambition:0.55, loyalty:0.45, chancChance:0.18 },
  ],
};

window.CRISIS_POOL = [
  {
    id:'recession',    icon:'📉', cat:'economy',
    title:'Economic Recession',
    headline:'Germany Enters Recession — Two Consecutive Quarters of Contraction',
    body:'Industrial output has fallen sharply and unemployment is rising. Markets are nervous. The Bundesbank warns of a prolonged downturn unless the government acts decisively.',
    choices:[
      { label:'Emergency stimulus package (€40B)',      effect:'publicApproval:+6, economy drain: -budgetMargin',   fn: g => { g.publicApproval = Math.min(65, g.publicApproval+6); applyPartyApprovals(g,{Union:2,SPD:2,AfD:1,Greens:-1,Linke:2,FDP:-2}); } },
      { label:'Austerity: cut spending to reassure markets', effect:'publicApproval:-5, FDP happy, left furious',   fn: g => { g.publicApproval = Math.max(5,g.publicApproval-5);  applyPartyApprovals(g,{Union:1,SPD:-2,AfD:0,Greens:-1,Linke:-2,FDP:2}); } },
      { label:'Wait and monitor — avoid drastic action',   effect:'publicApproval:-3, mild cross-party frustration', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-3);  applyPartyApprovals(g,{Union:-1,SPD:-1,AfD:1,Greens:0,Linke:-1,FDP:-1}); } },
    ]
  },
  {
    id:'migration_surge', icon:'🛂', cat:'security',
    title:'Migration Crisis',
    headline:'Record Asylum Arrivals Strain Border Infrastructure',
    body:'Over 300,000 asylum applications have been filed in the past three months. Municipalities are declaring capacity emergencies. The opposition is demanding immediate action.',
    choices:[
      { label:'Deploy Bundespolizei, fast-track processing', effect:'publicApproval:+2, right parties satisfied',    fn: g => { g.publicApproval = Math.min(65, g.publicApproval+2); applyPartyApprovals(g,{Union:3,SPD:0,AfD:2,Greens:-2,Linke:-2,FDP:1}); } },
      { label:'Humanitarian response — expand reception capacity', effect:'publicApproval:-3, left satisfied',       fn: g => { g.publicApproval = Math.max(5,g.publicApproval-3);  applyPartyApprovals(g,{Union:-1,SPD:2,AfD:-3,Greens:3,Linke:3,FDP:-1}); } },
      { label:'Emergency EU summit — push burden-sharing deal',   effect:'publicApproval:0, delays decision',        fn: g => { g.publicApproval = Math.max(5,g.publicApproval-1);  applyPartyApprovals(g,{Union:1,SPD:1,AfD:-1,Greens:1,Linke:0,FDP:0}); } },
    ]
  },
  {
    id:'energy_crisis', icon:'⚡', cat:'economy',
    title:'Energy Price Shock',
    headline:'Gas Prices Triple — Households and Industry Face Blackouts',
    body:'A supply disruption from Eastern Europe has sent energy prices to record levels. Industrial firms are threatening shutdowns. Citizens face unaffordable heating bills this winter.',
    choices:[
      { label:'Price cap and emergency subsidy for households',   effect:'publicApproval:+7, costly, FDP horrified',  fn: g => { g.publicApproval = Math.min(65, g.publicApproval+7); applyPartyApprovals(g,{Union:1,SPD:3,AfD:2,Greens:0,Linke:3,FDP:-3}); } },
      { label:'Fast-track LNG terminals and renewables permits',  effect:'publicApproval:+2, balanced response',      fn: g => { g.publicApproval = Math.min(65, g.publicApproval+2); applyPartyApprovals(g,{Union:1,SPD:1,AfD:-1,Greens:2,Linke:1,FDP:1}); } },
      { label:'No intervention — let market adjust',             effect:'publicApproval:-8, politically dangerous',   fn: g => { g.publicApproval = Math.max(5,g.publicApproval-8);  applyPartyApprovals(g,{Union:-1,SPD:-3,AfD:-1,Greens:-2,Linke:-3,FDP:2}); } },
    ]
  },
  {
    id:'flood_disaster', icon:'🌊', cat:'social',
    title:'Catastrophic Flooding',
    headline:'Rhine and Moselle Floods Displace 80,000 — Deadliest Disaster in Decades',
    body:'Unprecedented rainfall has caused catastrophic flooding across the Rhineland and Moselle valley. 80,000 residents have been evacuated. Infrastructure damage is estimated at €12 billion.',
    choices:[
      { label:'Declare national emergency, deploy Bundeswehr',   effect:'publicApproval:+8, universally praised',     fn: g => { g.publicApproval = Math.min(65, g.publicApproval+8); applyPartyApprovals(g,{Union:2,SPD:2,AfD:1,Greens:2,Linke:2,FDP:1}); } },
      { label:'Invoke debt brake waiver for €15B rebuild fund',  effect:'publicApproval:+5, FDP rebels',              fn: g => { g.publicApproval = Math.min(65, g.publicApproval+5); applyPartyApprovals(g,{Union:1,SPD:2,AfD:0,Greens:2,Linke:2,FDP:-3}); g.debtBrakeWaived = true; } },
      { label:'Coordinate EU disaster funds — slower but legal', effect:'publicApproval:0, seen as weak response',    fn: g => { g.publicApproval = Math.max(5,g.publicApproval-2);  applyPartyApprovals(g,{Union:0,SPD:-1,AfD:-2,Greens:1,Linke:0,FDP:1}); } },
    ]
  },
  {
    id:'corruption_scandal', icon:'⚠️', cat:'reform',
    title:'Corruption Scandal',
    headline:'Leaked Documents Expose Kickbacks in Federal Procurement',
    body:'Der Spiegel has published leaked documents alleging that three senior government officials accepted payments from defence contractors. The opposition is calling for resignations and a parliamentary investigation.',
    choices:[
      { label:'Dismiss officials, launch independent inquiry',    effect:'publicApproval:+4, crisis contained',        fn: g => { g.publicApproval = Math.min(65, g.publicApproval+4); applyPartyApprovals(g,{Union:-1,SPD:-1,AfD:-2,Greens:1,Linke:1,FDP:0}); } },
      { label:'Defend officials, call leak politically motivated', effect:'publicApproval:-7, scandal deepens',        fn: g => { g.publicApproval = Math.max(5,g.publicApproval-7);  applyPartyApprovals(g,{Union:-2,SPD:-2,AfD:-3,Greens:-2,Linke:-2,FDP:-2}); } },
      { label:'Announce sweeping anti-corruption legislation',   effect:'publicApproval:+2, political points',         fn: g => { g.publicApproval = Math.min(65, g.publicApproval+2); applyPartyApprovals(g,{Union:0,SPD:1,AfD:0,Greens:2,Linke:2,FDP:1}); } },
    ]
  },
  {
    id:'nato_crisis', icon:'🛡️', cat:'security',
    title:'NATO Article 5 Alert',
    headline:'Baltic Ally Invokes Emergency Consultations After Border Incident',
    body:'A NATO ally on Germany\'s eastern flank has invoked emergency consultations following a series of provocations. Allies expect Germany to publicly commit additional troops and materiel.',
    choices:[
      { label:'Deploy 5,000 Bundeswehr troops to eastern flank', effect:'publicApproval:+1, NATO allies relieved',    fn: g => { g.publicApproval = Math.min(65, g.publicApproval+1); applyPartyApprovals(g,{Union:3,SPD:1,AfD:-2,Greens:-1,Linke:-3,FDP:2}); } },
      { label:'Financial commitment only — no troop deployment', effect:'publicApproval:0, allies disappointed',      fn: g => { g.publicApproval = Math.max(5,g.publicApproval);    applyPartyApprovals(g,{Union:0,SPD:0,AfD:1,Greens:1,Linke:1,FDP:0}); } },
      { label:'Call for diplomatic solution, oppose escalation', effect:'publicApproval:-2, seen as weak on defence', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-2);  applyPartyApprovals(g,{Union:-2,SPD:-1,AfD:2,Greens:2,Linke:2,FDP:-2}); } },
    ]
  },
  {
    id:'healthcare_strike', icon:'🏥', cat:'social',
    title:'National Nurses\' Strike',
    headline:'200,000 Healthcare Workers Walk Out — Hospital Capacity at 40%',
    body:'A nationwide strike by nurses and doctors has left hospitals critically understaffed. Emergency departments are diverting patients. The unions are demanding a 15% wage increase and mandatory staffing ratios.',
    choices:[
      { label:'Meet union demands — 15% rise, staffing law',    effect:'publicApproval:+5, expensive, FDP opposed',   fn: g => { g.publicApproval = Math.min(65, g.publicApproval+5); applyPartyApprovals(g,{Union:-1,SPD:3,AfD:1,Greens:2,Linke:3,FDP:-2}); } },
      { label:'Binding arbitration — 8% rise offer',           effect:'publicApproval:+1, compromise, strike ends',   fn: g => { g.publicApproval = Math.min(65, g.publicApproval+1); applyPartyApprovals(g,{Union:1,SPD:1,AfD:0,Greens:1,Linke:0,FDP:1}); } },
      { label:'Declare healthcare emergency, ban strike legally', effect:'publicApproval:-4, legally risky, divisive', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-4);  applyPartyApprovals(g,{Union:0,SPD:-3,AfD:1,Greens:-2,Linke:-3,FDP:1}); } },
    ]
  },
  {
    id:'far_right_march', icon:'🚨', cat:'security',
    title:'Far-Right Mass Mobilisation',
    headline:'100,000 March in Dresden — Government Faces Calls to Act',
    body:'The largest far-right demonstration in post-war German history has taken place in Dresden. Counter-protesters were attacked. Opposition parties are demanding the government invoke constitutional protections.',
    choices:[
      { label:'Propose Verfassungsschutz expansion, tougher laws', effect:'publicApproval:+3, security-focused',       fn: g => { g.publicApproval = Math.min(65, g.publicApproval+3); applyPartyApprovals(g,{Union:1,SPD:2,AfD:-3,Greens:1,Linke:2,FDP:1}); } },
      { label:'Initiate party ban proceedings against extremists', effect:'publicApproval:+5, legally complex, bold',  fn: g => { g.publicApproval = Math.min(65, g.publicApproval+5); applyPartyApprovals(g,{Union:-1,SPD:2,AfD:-4,Greens:3,Linke:3,FDP:0}); } },
      { label:'Condemn in statement only — defend civil liberties', effect:'publicApproval:-3, seen as weak response', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-3);  applyPartyApprovals(g,{Union:-1,SPD:-2,AfD:2,Greens:-1,Linke:-1,FDP:0}); } },
    ]
  },
  {
    id:'debt_crisis',    icon:'💸', cat:'economy',
    title:'Sovereign Debt Warning',
    headline:'Fitch Downgrades German Credit Outlook to Negative',
    body:'A credit rating agency has downgraded Germany\'s fiscal outlook, citing structural deficit growth and rising debt servicing costs. Bond yields are ticking up. Markets are watching the government\'s next budget move.',
    choices:[
      { label:'Emergency budget consolidation — cuts across ministries', effect:'publicApproval:-4, FDP ecstatic',     fn: g => { g.publicApproval = Math.max(5,g.publicApproval-4);  applyPartyApprovals(g,{Union:2,SPD:-2,AfD:0,Greens:-2,Linke:-3,FDP:3}); } },
      { label:'Issue special investment bonds — challenge the agency',   effect:'publicApproval:+1, markets uneasy',  fn: g => { g.publicApproval = Math.min(65, g.publicApproval+1); applyPartyApprovals(g,{Union:-1,SPD:2,AfD:-1,Greens:1,Linke:2,FDP:-2}); } },
      { label:'Reform debt brake to allow structural investment',         effect:'publicApproval:+3, constitutional fight', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+3); applyPartyApprovals(g,{Union:-2,SPD:2,AfD:-1,Greens:2,Linke:3,FDP:-3}); } },
    ]
  },
  {
    id:'intel_scandal',  icon:'🕵️', cat:'security',
    title:'Intelligence Scandal',
    headline:'BND Accused of Illegal Mass Surveillance of EU Citizens',
    body:'A parliamentary leak reveals the BND has been conducting bulk surveillance of allied EU citizens in collaboration with a non-European intelligence service. A Bundestag investigation committee is being formed.',
    choices:[
      { label:'Full transparency — publish findings, reform BND',  effect:'publicApproval:+4, popular but exposes more', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+4); applyPartyApprovals(g,{Union:-1,SPD:1,AfD:0,Greens:3,Linke:3,FDP:2}); } },
      { label:'Invoke state security — classify all proceedings', effect:'publicApproval:-5, heavy criticism',          fn: g => { g.publicApproval = Math.max(5,g.publicApproval-5);  applyPartyApprovals(g,{Union:1,SPD:-2,AfD:1,Greens:-3,Linke:-3,FDP:-1}); } },
      { label:'Appoint independent commission, await findings',   effect:'publicApproval:0, delays, seen as stalling',  fn: g => { g.publicApproval = Math.max(5,g.publicApproval-1);  applyPartyApprovals(g,{Union:0,SPD:0,AfD:-1,Greens:-1,Linke:-1,FDP:0}); } },
    ]
  },
  {
    id:'pension_bomb',   icon:'👴', cat:'social',
    title:'Pension Fund Shortfall',
    headline:'Deutsche Rentenversicherung Projects €30B Gap by 2027',
    body:'The state pension fund has announced an unexpected actuarial shortfall driven by demographic shifts and lower-than-forecast contribution revenues. Retirees\' groups are demanding guarantees. The Finance Ministry is alarmed.',
    choices:[
      { label:'Increase pension contributions by 0.5% each side',  effect:'publicApproval:-2, secure but unpopular',   fn: g => { g.publicApproval = Math.max(5,g.publicApproval-2);  applyPartyApprovals(g,{Union:0,SPD:1,AfD:1,Greens:0,Linke:1,FDP:-2}); } },
      { label:'Federal subsidy injection — cover from general budget', effect:'publicApproval:+3, debt rises',          fn: g => { g.publicApproval = Math.min(65, g.publicApproval+3); applyPartyApprovals(g,{Union:-1,SPD:2,AfD:2,Greens:0,Linke:2,FDP:-2}); } },
      { label:'Raise retirement age by 1 year — structural fix',   effect:'publicApproval:-7, politically toxic',      fn: g => { g.publicApproval = Math.max(5,g.publicApproval-7);  applyPartyApprovals(g,{Union:1,SPD:-3,AfD:-2,Greens:-1,Linke:-3,FDP:2}); } },
    ]
  },
  {
    id:'coalition_revolt', icon:'💥', cat:'reform',
    title:'Coalition Internal Revolt',
    headline:'Senior MPs Break Ranks — Open Letter Demands Leadership Change',
    body:'Twenty-two MPs from within the coalition have published an open letter questioning the Chancellor\'s leadership and calling for a renegotiation of the coalition agreement. The media is calling it the worst internal crisis in years.',
    choices:[
      { label:'Call an emergency coalition summit — negotiate',    effect:'publicApproval:-2, shows weakness but prevents split', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-2); applyPartyApprovals(g,{Union:-1,SPD:-1,AfD:0,Greens:-1,Linke:-1,FDP:-1}); } },
      { label:'Expel the rebels from parliamentary group',          effect:'publicApproval:-4, decisive but dangerous',fn: g => { g.publicApproval = Math.max(5,g.publicApproval-4);  applyPartyApprovals(g,{Union:-2,SPD:-2,AfD:1,Greens:-2,Linke:-2,FDP:-2}); } },
      { label:'Make concessions — adjust coalition programme',     effect:'publicApproval:+1, coalition stabilised',    fn: g => { g.publicApproval = Math.min(65, g.publicApproval+1); applyPartyApprovals(g,{Union:1,SPD:1,AfD:0,Greens:1,Linke:1,FDP:1}); } },
    ]
  },
];

window.CRISIS_POOL_2021 = [
  {
    id:'flood_disaster_2021', icon:'🌊', cat:'social',
    title:'Ahr Valley Floods',
    headline:'Catastrophic Flooding Devastates Western Germany',
    body:'Extreme rainfall has destroyed towns across Rhineland-Palatinate and North Rhine-Westphalia. Rescue services are overwhelmed, rebuilding costs are soaring, and the public expects visible federal leadership.',
    choices:[
      { label:'Declare a national emergency and deploy the Bundeswehr', effect:'publicApproval:+8, broad praise', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+8); applyPartyApprovals(g,{Union:2,SPD:2,AfD:1,Greens:2,Linke:2,FDP:1}); } },
      { label:'Create a large reconstruction fund outside normal limits', effect:'publicApproval:+5, fiscally controversial', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+5); applyPartyApprovals(g,{Union:1,SPD:2,AfD:0,Greens:2,Linke:2,FDP:-3}); g.debtBrakeWaived = true; } },
      { label:'Coordinate mostly through Länder and EU solidarity funds', effect:'publicApproval:-2, looks procedural', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-2); applyPartyApprovals(g,{Union:0,SPD:-1,AfD:-1,Greens:1,Linke:0,FDP:1}); } },
    ]
  },
  {
    id:'afghanistan_airlift', icon:'✈️', cat:'foreign',
    title:'Afghanistan Evacuation Fallout',
    headline:'Kabul Airlift Under Fire as Opposition Demands Answers',
    body:'After the collapse of the Afghan government, images from the evacuation dominate the news. Critics say Berlin reacted too slowly and left local partners behind.',
    choices:[
      { label:'Launch a bigger airlift and emergency admissions programme', effect:'humanitarian response', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+3); applyPartyApprovals(g,{Union:-1,SPD:2,AfD:-2,Greens:3,Linke:1,FDP:1}); } },
      { label:'Focus on military extraction only and tighten admissions', effect:'security-first stance', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-1); applyPartyApprovals(g,{Union:2,SPD:-1,AfD:2,Greens:-2,Linke:-2,FDP:1}); } },
      { label:'Promise an inquiry after the election and avoid escalation now', effect:'seen as evasive', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-4); applyPartyApprovals(g,{Union:-2,SPD:-1,AfD:1,Greens:-1,Linke:-1,FDP:-1}); } },
    ]
  },
  {
    id:'pandemic_autumn', icon:'🦠', cat:'social',
    title:'Pandemic Autumn Wave',
    headline:'Hospitals Warn of a Difficult Winter as Cases Rise Again',
    body:'COVID infections are climbing heading into autumn. Intensive care units warn of renewed pressure, while voters are exhausted by restrictions and expect a clearer strategy.',
    choices:[
      { label:'Reintroduce targeted restrictions and accelerate boosters', effect:'cautious public-health line', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+2); applyPartyApprovals(g,{Union:-1,SPD:2,AfD:-3,Greens:2,Linke:1,FDP:-1}); } },
      { label:'Rely on vaccination campaign and local flexibility', effect:'balanced but fragile', fn: g => { applyPartyApprovals(g,{Union:1,SPD:1,AfD:0,Greens:1,Linke:0,FDP:1}); } },
      { label:'Rule out further restrictions and trust personal responsibility', effect:'risky if numbers worsen', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-5); applyPartyApprovals(g,{Union:1,SPD:-2,AfD:2,Greens:-2,Linke:-1,FDP:1}); } },
    ]
  },
  {
    id:'inflation_energy_backlash_2022', icon:'🔥', cat:'economy', startYear: 2021, endYear: 2022,
    title:'Inflation and Energy Backlash',
    headline:'Post-COVID Inflation and the Ukraine Energy Shock Trigger an Anti-Incumbent Mood',
    body:'Supply bottlenecks from the post-COVID recovery are still pushing up prices, and Russia\'s invasion of Ukraine has turned gas and electricity costs into a daily political emergency. Voters who were broadly content with the government are starting to feel poorer, angrier, and more willing to punish whoever is in office.',
    choices:[
      { label:'Roll out a large relief shield for households and exposed industry', effect:'visible relief, expensive, partly blunts anti-incumbent drift', fn: g => {
          g.publicApproval = Math.min(65, (g.publicApproval || 50) + 2);
          applyPartyApprovals(g,{SPD:2,Greens:1,Linke:2,FDP:-2,Union:0,AfD:1});
          if (g.economy) {
            g.economy.inflation = Math.max(1.5, (g.economy.inflation || 2.5) - 0.2);
            g.economy.gdpGrowth = (g.economy.gdpGrowth || 0) + 0.08;
            g.economy.debtGdp = Math.min(120, (g.economy.debtGdp || 65) + 0.6);
          }
        } },
      { label:'Stick to limited relief and stress fiscal discipline', effect:'markets calmer, households unconvinced, incumbents take the blame', fn: g => {
          g.publicApproval = Math.max(5, (g.publicApproval || 50) - 5);
          applyPartyApprovals(g,{FDP:2,Union:1,SPD:-2,Greens:-1,Linke:-2,AfD:2});
          if (g.economy) {
            g.economy.inflation = Math.max(1.5, (g.economy.inflation || 2.5) - 0.1);
            g.economy.gdpGrowth = (g.economy.gdpGrowth || 0) - 0.10;
            g.economy.unemployment = Math.min(15, (g.economy.unemployment || 5) + 0.2);
          }
        } },
      { label:'Force through emergency diversification: LNG, conservation, and industrial triage', effect:'strategic energy turn, mixed politics, medium-term credibility', fn: g => {
          g.publicApproval = Math.max(5, Math.min(65, (g.publicApproval || 50) - 1));
          applyPartyApprovals(g,{Greens:2,SPD:1,FDP:1,Union:1,Linke:-1,AfD:-2});
          if (g.economy) {
            g.economy.inflation = Math.max(1.5, (g.economy.inflation || 2.5) - 0.15);
            g.economy.gdpGrowth = (g.economy.gdpGrowth || 0) - 0.02;
            g.economy.investment = Math.min(5, (g.economy.investment || 2.2) + 0.08);
          }
        } },
    ]
  },
  {
    id:'wirecard_aftershock', icon:'⚠️', cat:'reform',
    title:'Wirecard Aftershock',
    headline:'Fresh Revelations Renew Questions About Financial Oversight',
    body:'New testimony and leaked files have revived the Wirecard scandal, with the opposition claiming ministers ignored warning signs. The credibility of federal financial supervision is under pressure again.',
    choices:[
      { label:'Order a sweeping regulatory overhaul and public inquiry', effect:'reformist response', fn: g => { g.publicApproval = Math.min(65, g.publicApproval+4); applyPartyApprovals(g,{Union:-1,SPD:1,AfD:0,Greens:2,Linke:2,FDP:1}); } },
      { label:'Defend the ministries and blame private auditors', effect:'scandal worsens', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-6); applyPartyApprovals(g,{Union:-2,SPD:-2,AfD:0,Greens:-2,Linke:-2,FDP:-1}); } },
      { label:'Replace senior supervisors quietly and move on', effect:'partial stabilisation', fn: g => { g.publicApproval = Math.max(5,g.publicApproval-1); applyPartyApprovals(g,{Union:0,SPD:0,AfD:0,Greens:1,Linke:0,FDP:0}); } },
    ]
  },
];

window.PARTY_MANDATE_PROFILES = {
  Union: [
    { cat:'economy',  label:'Economic Competitiveness', icon:'⚡', petition:'Voters demand corporate tax reform and cuts to business red tape.',    satisfiedBy:['taxcut','mittelstand','energysubsidy','digitgov','supplytaxcredit','freelance_relief'] },
    { cat:'security', label:'Border & Law Order',       icon:'🛡️', petition:'Supporters insist on tougher borders and police modernisation.',       satisfiedBy:['borderctrl','policeref','cybersec','nato2pct','civildefence'] },
    { cat:'foreign',  label:'Atlantic Alliance',        icon:'🌍', petition:'Base wants firm NATO commitment and China trade diversification.',      satisfiedBy:['nato2pct','chinatrade','eudeep'] },
  ],
  CSU: [
    { cat:'economy',  label:'Bavarian Competitiveness', icon:'⚡', petition:'CSU supporters want tax relief, industrial stability and a business-friendly Bavaria-first message.', satisfiedBy:['taxcut','mittelstand','energysubsidy','supplytaxcredit','freelance_relief'] },
    { cat:'security', label:'Borders & Internal Order', icon:'🛡️', petition:'The base insists on tough migration control, strong policing and visible state authority.', satisfiedBy:['borderctrl','policeref','cybersec','civildefence','nato2pct'] },
    { cat:'social',   label:'Regional Stability',       icon:'🏘️', petition:'Local networks want practical family support, municipal strength and stable public services.', satisfiedBy:['housing','childcare','healthref','digitgov'] },
  ],
  SPD: [
    { cat:'social',   label:'Social Justice',           icon:'👷', petition:'Workers demand housing, childcare and pension guarantees.',             satisfiedBy:['housing','childcare','pensionplus','rentfreeze','careworkers','tenantenergy'] },
    { cat:'economy',  label:'Workers\' Rights',         icon:'💰', petition:'Trade unions push for minimum wage rise and welfare-to-work reform.',  satisfiedBy:['minwage','welfarework','autoinvest','abortion_decrim','skillscompact'] },
    { cat:'reform',   label:'Democratic Reform',        icon:'⚖️', petition:'Members want lobbying transparency and educational modernisation.',     satisfiedBy:['lobbylaw','wahlrecht','bremseref'] },
  ],
  Greens: [
    { cat:'climate',  label:'Climate Action',           icon:'🌿', petition:'Activists demand renewables acceleration and carbon pricing now.',     satisfiedBy:['co2tax','renewfast','efuelban','buildclimate','gridstorage','floodresilience','cannabis_legal','harm_reduction'] },
    { cat:'social',   label:'Housing & Childcare',      icon:'🏠', petition:'Supporters push for social housing and universal childcare.',          satisfiedBy:['housing','childcare','rentfreeze'] },
    { cat:'foreign',  label:'EU Integration',           icon:'🌍', petition:'Members want deeper EU cooperation and development aid.',              satisfiedBy:['eudeep','aidboost','armexport'] },
  ],
  FDP: [
    { cat:'economy',  label:'Fiscal Freedom',           icon:'📉', petition:'Liberals demand corporate tax cuts and strict debt brake adherence.',  satisfiedBy:['taxcut','mittelstand','digitgov','energysubsidy','freelance_relief','supplytaxcredit'] },
    { cat:'reform',   label:'Deregulation & Reform',    icon:'📋', petition:'Business base wants red tape slashed and schools modernised for skills.', satisfiedBy:['federalref','wahlrecht','lobbylaw','termref'] },
    { cat:'security', label:'Digital Security',         icon:'💻', petition:'Liberals push for cybersecurity and digital infrastructure.',          satisfiedBy:['cybersec','policeref','chinatrade'] },
  ],
  Linke: [
    { cat:'social',   label:'Wealth Redistribution',    icon:'✊', petition:'Activists demand rent caps, pension reform and social housing.',        satisfiedBy:['rentfreeze','pensionplus','housing','healthref','careworkers','tenantenergy'] },
    { cat:'reform',   label:'Debt Brake Reform',        icon:'🏛️', petition:'Left wants debt brake flexibility and stronger public education investment.', satisfiedBy:['bremseref','lobbylaw','wahlrecht','abortion_decrim','harm_reduction'] },
    { cat:'foreign',  label:'Peace & Disarmament',      icon:'🕊️', petition:'Base demands development aid increase and arms export restrictions.',  satisfiedBy:['aidboost','armexport','migrationlaw'] },
  ],
  BSW: [
    { cat:'social',   label:'Social Protection First',  icon:'🧺', petition:'BSW supporters want pensions, housing and wage protection framed around economic security.', satisfiedBy:['rentfreeze','pensionplus','housing','careworkers','healthref'] },
    { cat:'economy',  label:'Industrial Sovereignty',   icon:'🏭', petition:'The base wants state support for industry, cheaper energy and a harder line against deindustrialisation.', satisfiedBy:['energysubsidy','autoinvest','mittelstand','supplytaxcredit'] },
    { cat:'foreign',  label:'Peace Realism',            icon:'🕊️', petition:'Backers want a sceptical security line, fewer arms exports and a diplomacy-first message.', satisfiedBy:['aidboost','armexport','migrationlaw'] },
  ],
  SSW: [
    { cat:'social',   label:'Minority Rights & Welfare', icon:'🌊', petition:'SSW voters want public services, welfare stability and minority protection in the north.', satisfiedBy:['housing','childcare','careworkers','pensionplus','tenantenergy'] },
    { cat:'reform',   label:'Federal Fairness',          icon:'⚖️', petition:'Supporters want minority rights, democratic reform and a less centralised Berlin.', satisfiedBy:['lobbylaw','wahlrecht','bremseref'] },
    { cat:'climate',  label:'Coastal Resilience',        icon:'🌬️', petition:'The party base wants climate adaptation, flood protection and renewable expansion in the north.', satisfiedBy:['renewfast','gridstorage','floodresilience','co2tax'] },
  ],
  FW: [
    { cat:'economy',  label:'Local Business Relief',     icon:'🧰', petition:'FW supporters want relief for SMEs, craftspeople and family businesses outside the metro centres.', satisfiedBy:['mittelstand','taxcut','freelance_relief','supplytaxcredit'] },
    { cat:'social',   label:'Municipal Services',        icon:'🏘️', petition:'Local networks want strong municipal funding, transport and practical public services.', satisfiedBy:['housing','childcare','healthref','digitgov'] },
    { cat:'security', label:'Order and Pragmatism',      icon:'🛡️', petition:'The party wants a pragmatic law-and-order message without abandoning regional autonomy.', satisfiedBy:['borderctrl','policeref','cybersec','civildefence'] },
  ],
  AfD: [
    { cat:'security', label:'Migration Control',        icon:'🛂', petition:'Voters demand border reinforcement and strict migration law.',          satisfiedBy:['borderctrl','migrationlaw','policeref','cybersec','civildefence'] },
    { cat:'economy',  label:'Industrial Protection',    icon:'🏭', petition:'Base wants energy subsidies and automotive industry support.',         satisfiedBy:['energysubsidy','autoinvest','mittelstand','taxcut','supplytaxcredit'] },
    { cat:'climate',  label:'Nuclear & Energy Debate',  icon:'⚛️', petition:'Supporters push for nuclear extension review and ICE vehicle rights.', satisfiedBy:['nuclearrv','efuelban','co2tax','cannabis_repeal','drug_crackdown','abortion_restrict'] },
  ],
};

window.PARTY_MANDATE_PROFILES_1949 = {
  Union: [
    { cat:'economy', label:'Recovery and Stability', icon:'📈', petition:'Union organisers want a campaign built around stability, currency confidence and the social market economy.', highlights:['Support Erhard-style recovery and hard currency discipline','Promise orderly reconstruction and competent administration','Link western alignment to security and economic recovery'], satisfiedBy:['housing49','erp49','cartel49'] },
    { cat:'social', label:'Family and Refugee Relief', icon:'🧳', petition:'Local Catholic and refugee networks want practical help for households still living with scarcity and displacement.', highlights:['Expand housing and settlement support for expellees','Offer food, family and parish-based relief measures','Show social compassion without embracing state planning'], satisfiedBy:['expellee49','widows49','housing49'] },
    { cat:'reform', label:'Federal Republic First', icon:'🏛️', petition:'The party base wants the Basic Law defended and the new republic presented as Germany’s best chance at durable order.', highlights:['Back Bonn institutions and parliamentary stability','Defend federal balance against both chaos and over-centralisation','Present the Union as the shield against extremism'], satisfiedBy:['federalism49','schools49','civil_service49'] },
  ],
  SPD: [
    { cat:'social', label:'Workers and Housing', icon:'👷', petition:'SPD branches want wages, housing and trade-union rights to dominate the campaign.', highlights:['Promise wage protection and stronger worker representation','Make housing and reconstruction the campaign’s social centre','Attack any recovery model that leaves labour behind'], satisfiedBy:['housing49','expellee49','codet49','widows49'] },
    { cat:'reform', label:'Democratic Renewal', icon:'📜', petition:'Party intellectuals and organisers want the SPD to own the moral language of republican renewal after dictatorship.', highlights:['Stress democratic legitimacy and anti-authoritarian credentials','Support a firm but fair denazification line','Frame the SPD as the ethical core of the new republic'], satisfiedBy:['civil_service49','federalism49'] },
    { cat:'economy', label:'Planned Reconstruction', icon:'🚧', petition:'The base wants public investment and anti-cartel policy to shape the economic argument.', highlights:['Back public works and reconstruction-led employment','Break up concentrated industrial power','Pitch economic recovery as a social, not just market, project'], satisfiedBy:['housing49','cartel49','erp49'] },
  ],
  Greens: [
    { cat:'social', label:'Centre and Community', icon:'⛪', petition:'Catholic centrists and independents want a localist, community-first message rather than a national ideological crusade.', highlights:['Defend local notables, municipalities and community autonomy','Appeal to religious voters wary of the big blocs','Present moderation as the antidote to polarisation'], satisfiedBy:['widows49','expellee49','housing49'] },
    { cat:'reform', label:'Confessional Rights', icon:'📚', petition:'Centre organisers want schools, family policy and church rights near the heart of the platform.', highlights:['Protect confessional schools and faith-based civil society','Offer a family relief message grounded in social conscience','Keep the republic plural rather than over-centralised'], satisfiedBy:['schools49','federalism49'] },
    { cat:'economy', label:'Regional Middle Germany', icon:'🌾', petition:'Regional lists want practical reconstruction promises that respect local traditions and rural concerns.', highlights:['Support farmers, small towns and regional credit needs','Tie reconstruction to local self-government','Avoid both socialist planning and hard-edged market dogma'], satisfiedBy:['housing49','erp49'] },
  ],
  FDP: [
    { cat:'economy', label:'Liberal Recovery', icon:'🗽', petition:'Liberal activists want the campaign centred on the social market economy, civil freedom and entrepreneurial recovery.', highlights:['Defend currency reform and liberal economic modernisation','Promise space for traders, artisans and professionals to recover','Present the FDP as the anti-cartel, anti-bureaucratic centre'], satisfiedBy:['erp49','cartel49'] },
    { cat:'reform', label:'Basic Law Liberties', icon:'⚖️', petition:'Party lawyers and republicans want the FDP to campaign as the guardian of constitutional freedoms.', highlights:['Champion civil liberties and parliamentary culture','Resist both clerical overreach and command economics','Sell liberalism as the humane centre of the republic'], satisfiedBy:['federalism49','civil_service49'] },
    { cat:'foreign', label:'Westbindung with Restraint', icon:'✈️', petition:'The party wants a sober western orientation without surrendering liberal independence of mind.', highlights:['Support western ties and Berlin solidarity','Keep foreign policy grounded in constitutional seriousness','Avoid both communist neutrality and nationalist isolation'], satisfiedBy:['westbindung49','berlin49'] },
  ],
  Linke: [
    { cat:'social', label:'Class Politics First', icon:'🚩', petition:'The KPD wants class language, hardship and worker anger at the core of the campaign.', highlights:['Attack capitalist restoration and social inequality','Promise stronger worker control in industry','Use labour unrest to widen the communist vote'], satisfiedBy:['codet49','widows49','housing49'] },
    { cat:'economy', label:'Public Control of Recovery', icon:'🏭', petition:'Communist organisers want reconstruction framed as a struggle over ownership, not just output.', highlights:['Call for public direction of key industries','Back co-determination and anti-cartel measures from the left','Present private recovery as elite restoration'], satisfiedBy:['cartel49','codet49','housing49'] },
    { cat:'foreign', label:'Against the Western Bloc', icon:'🕊️', petition:'The party line wants western alignment attacked as a path to permanent division and Cold War subservience.', highlights:['Argue for neutrality and a different all-German path','Tie peace rhetoric to anti-American and anti-occupation themes','Warn that bloc politics will harden partition'], satisfiedBy:['berlin49'] },
  ],
  AfD: [
    { cat:'security', label:'Order and Nation', icon:'🛡️', petition:'National-conservative organisers want authority, anti-socialism and state order to lead the message.', highlights:['Promise firm government and a strong anti-extremist line','Speak to voters exhausted by postwar disorder','Wrap national themes in security and discipline'], satisfiedBy:['borderpol49','pricewatch49'] },
    { cat:'social', label:'Expellee and Rural Protest', icon:'🧳', petition:'Regional right-wing networks want expellee grievances and local resentment turned into a sharper protest vote.', highlights:['Campaign hard on refugee hardship and settlement grievances','Appeal to rural conservatives who distrust the big blocs','Fuse social frustration to a nationalist tone'], satisfiedBy:['expellee49','widows49'] },
    { cat:'reform', label:'States Rights and Tradition', icon:'🏴', petition:'The party wants Bonn warned against overreach and local conservative traditions held up as the safer path.', highlights:['Defend state rights against centralising tendencies','Use confessional and regional symbolism where it resonates','Attack the new elite as detached from ordinary communities'], satisfiedBy:['schools49','federalism49'] },
  ],
};
