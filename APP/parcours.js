/* Parcours d'apprentissage — structure éditoriale.
   Ordre des chapitres : difficulté croissante (difficulte.js), prérequis respectés
   (ex. -é/-er avant le participe avec être, avant le participe avec avoir, avant les pronominaux),
   et alternance d'un chapitre « lourd » (grammaire) et d'un chapitre « léger » (lexique)
   pour garder l'élan. Une leçon regroupe 1 à 3 règles qui se comparent bien ;
   les règles les plus coûteuses à apprendre ont une leçon à elles seules. */
window.PARCOURS = [
  {
    id: "n700", titre: "Niveau 700", sous: "Les fondamentaux du Certificat", icone: "🎯",
    chapitres: [
      { id: "a1", titre: "Les bases sûres", icone: "🌱", desc: "Terminaisons et mots invariables : on démarre en confiance.",
        lecons: [
          { t: "je, tu, nous", r: ["R43", "R44", "R45"] },
          { t: "ils chantent, il se détend", r: ["R46", "R66"] },
          { t: "mieux, hormis, bien sûr", r: ["R181", "R182", "R137"] },
          { t: "en faisant, quatre, magasin", r: ["R90", "R138", "R179"] }
        ] },
      { id: "a2", titre: "Les homophones du quotidien", icone: "🔤", desc: "Le réflexe de substitution : avait, était, avaient…",
        lecons: [
          { t: "a ou à ? et ou est ?", r: ["R1", "R16"] },
          { t: "on ou ont ? son ou sont ?", r: ["R22", "R34"] },
          { t: "ou ou où ? ça ou sa ?", r: ["R23", "R5"] },
          { t: "peu, peut, peux · ni, n'y", r: ["R25", "R20"] },
          { t: "quand, quant · plus tôt, plutôt", r: ["R30", "R27"] }
        ] },
      { id: "a3", titre: "Verbe ou nom ?", icone: "🧩", desc: "Un envoi, il envoie ; un conseil, il conseille.",
        lecons: [
          { t: "un employé, un envoi", r: ["R49", "R51"] },
          { t: "j'envoie, tu tries", r: ["R54", "R53"] },
          { t: "il travaille, un entretien", r: ["R52", "R50"] },
          { t: "un diagnostic, vous dites", r: ["R48", "R61"] }
        ] },
      { id: "a4", titre: "Les homophones grammaticaux", icone: "🪞", desc: "Démonstratif, possessif ou pronom ? On apprend à trancher.",
        lecons: [
          { t: "ce ou se ? ces ou ses ?", r: ["R6", "R8"] },
          { t: "c'est ou s'est ?", r: ["R9", "R10"] },
          { t: "la, l'a, là · si, s'y", r: ["R18", "R11"] },
          { t: "dans, d'en · sans, s'en", r: ["R12", "R7"] },
          { t: "leur, notre, votre", r: ["R19", "R21", "R36"] }
        ] },
      { id: "a5", titre: "Participe ou infinitif ?", icone: "⚖️", desc: "Le test « vendre / vendu », puis l'accord avec être.",
        lecons: [
          { t: "-é ou -er ?", r: ["R38"] },
          { t: "-er ou -ez · l'infinitif invariable", r: ["R39", "R37"] },
          { t: "le participe employé seul", r: ["R92", "R91-1", "R91-2"] },
          { t: "le participe avec être", r: ["R93", "R40"] }
        ] },
      { id: "a6", titre: "Accents, cédille et lettres doubles", icone: "✒️", desc: "Les signes qui changent tout, et les doublements à retenir.",
        lecons: [
          { t: "les accents, le tréma", r: ["R190", "R192"] },
          { t: "la cédille, -té ou -tié", r: ["R193", "R175"] },
          { t: "-cueil, -onnel, acc-", r: ["R170", "R178", "R172"] },
          { t: "appeler, intéresser", r: ["R180", "R71"] }
        ] },
      { id: "a7", titre: "Accorder sans se tromper", icone: "🤝", desc: "Adjectifs, couleurs, nombres : qui s'accorde avec quoi.",
        lecons: [
          { t: "l'adjectif s'accorde", r: ["R126"] },
          { t: "les couleurs", r: ["R145", "R146", "R147"] },
          { t: "cent, vingt, mille", r: ["R141", "R142", "R143"] },
          { t: "tout, tous · les jours et les mois", r: ["R150", "R119"] },
          { t: "demi, une espèce de, chiffre d'affaires", r: ["R157", "R125", "R123"] }
        ] },
      { id: "a8", titre: "Les homophones lexicaux", icone: "🎭", desc: "Même son, sens différent : censé, sensé ; voie, voix…",
        lecons: [
          { t: "hors, or · voir, voire", r: ["R17", "R35"] },
          { t: "censé, sensé · différend, différent", r: ["R302", "R306"] },
          { t: "voie, voix · pause, pose · tache, tâche", r: ["R322", "R314", "R321"] },
          { t: "près, prêt · peut-être · davantage", r: ["R29", "R26", "R13"] },
          { t: "du, dû · à venir, avenir · eh bien", r: ["R14", "R3", "R15"] }
        ] },
      { id: "a9", titre: "Les temps qui piègent", icone: "⏳", desc: "Impératif, subjonctif, futur ou conditionnel.",
        lecons: [
          { t: "l'impératif", r: ["R80", "R78", "R79"] },
          { t: "qu'il ait, je conclurai", r: ["R41", "R57"] },
          { t: "futur ou conditionnel ?", r: ["R81"] },
          { t: "nous criions, vous payiez", r: ["R59"] },
          { t: "après que + indicatif", r: ["R84"] }
        ] },
      { id: "a10", titre: "Mots pièges", icone: "🪤", desc: "Les orthographes qu'on photographie une fois pour toutes.",
        lecons: [
          { t: "dilemme, rémunérer, en l'occurrence", r: ["R187", "R188", "R183"] },
          { t: "fabricant, exigeant, navigable", r: ["R87", "R88", "R171"] },
          { t: "soi-disant, savoir gré", r: ["R167", "R189"] }
        ] },
      { id: "a11", titre: "Le participe passé avec avoir", icone: "🏔️", desc: "La règle reine : le COD placé avant, et ses variantes.",
        lecons: [
          { t: "avec avoir : le COD placé avant", r: ["R94"] },
          { t: "avoir + infinitif", r: ["R95"] },
          { t: "fait + infinitif, ci-joint", r: ["R95-2", "R101"] },
          { t: "la plupart, c'est moi qui, 1,5 million", r: ["R107", "R109", "R139"] }
        ] },
      { id: "a12", titre: "Syntaxe et signes", icone: "🏗️", desc: "Questions, négation, élisions et majuscules.",
        lecons: [
          { t: "on n'a, on n'en, on n'y", r: ["R221"] },
          { t: "est-ce que, interrogation indirecte", r: ["R219", "R220"] },
          { t: "viendra-t-il ? lorsqu'il, s'il", r: ["R210", "R195"] },
          { t: "Dieu, M., -amment", r: ["R212", "R218", "R136"] }
        ] },
      { id: "a13", titre: "Les mots caméléons", icone: "🦎", desc: "Tout, même, quelque : variables ou invariables selon leur rôle.",
        lecons: [
          { t: "tout adverbe", r: ["R151"] },
          { t: "même, eux-mêmes, quel que", r: ["R163", "R205", "R31"] },
          { t: "quoique, sitôt, parce que", r: ["R32", "R33", "R24"] },
          { t: "pour ce faire, ce faisant", r: ["R28"] }
        ] },
      { id: "a14", titre: "Expressions et emplois délicats", icone: "🎩", desc: "Les tournures qui font la différence à l'écrit.",
        lecons: [
          { t: "au temps pour moi, avoir affaire", r: ["R2", "R4"] },
          { t: "fond, fonds · parti, partie", r: ["R310", "R315"] },
          { t: "pallier, s'avérer, à l'instar de", r: ["R223", "R239", "R248"] },
          { t: "bimensuel, à l'attention de", r: ["R257", "R283"] }
        ] }
    ]
  },
  {
    id: "n900", titre: "Niveau Excellence", sous: "Vers 900 et 1 000 points", icone: "👑",
    chapitres: [
      { id: "b1", titre: "Orthographe d'usage", icone: "📜", desc: "Des formes rares qui s'apprennent vite.",
        lecons: [
          { t: "la rue, etc., jusqu'à", r: ["R176", "R217", "R194"] },
          { t: "-ote ou -otte, -ussion, ress-", r: ["R174", "R177", "R173"] },
          { t: "dys-, hypo-, -iatre, pèlerin", r: ["R172-2", "R191-3", "R191-2"] },
          { t: "fruste, le coucher, les ayants droit", r: ["R186", "R37-2", "R89"] }
        ] },
      { id: "b2", titre: "Homophones savants", icone: "🔔", desc: "Foi, foie, fois ; repaire, repère…",
        lecons: [
          { t: "foi, foie, fois · balade, ballade", r: ["R309", "R298"] },
          { t: "raisonner, résonner · repaire, repère", r: ["R317", "R318"] },
          { t: "sceptique, septique · accro, accroc", r: ["R320", "R294"] },
          { t: "exprès, express · cession, session · vu, vue", r: ["R308", "R303", "R323"] }
        ] },
      { id: "b3", titre: "Tours critiqués et pléonasmes", icone: "🚫", desc: "Ce qui se dit, mais ne s'écrit pas.",
        lecons: [
          { t: "loin s'en faut, solutionner", r: ["R235", "R236"] },
          { t: "au jour d'aujourd'hui, voire même", r: ["R324", "R325"] },
          { t: "collaborer ensemble, tous unanimes", r: ["R326", "R327", "R328"] }
        ] },
      { id: "b4", titre: "Pluriels et féminins rares", icone: "🧮", desc: "Bijoux, banals, bénigne et nouveau-nés.",
        lecons: [
          { t: "des bijoux, les Durand", r: ["R118", "R120"] },
          { t: "banals, bénigne, feux arrière", r: ["R129", "R132", "R131"] },
          { t: "nu-pieds, feu la reine, nouveau-nés", r: ["R165", "R159", "R164"] }
        ] },
      { id: "b5", titre: "Expressions figées", icone: "🔒", desc: "Bonne chère, le bât qui blesse, en toutes lettres.",
        lecons: [
          { t: "bonne chère, le bât, être légion", r: ["R184", "R185", "R124"] },
          { t: "quelque chose, d'aucuns, tout à vous", r: ["R122", "R155", "R153"] },
          { t: "à tout hasard, -ment, -ûment", r: ["R154", "R134", "R135"] }
        ] },
      { id: "b6", titre: "Conjugaisons rares", icone: "🗝️", desc: "Craindre, résoudre, satisfaire, asseoir…",
        lecons: [
          { t: "que nous ayons, vous faites, il craint", r: ["R58", "R62", "R67"] },
          { t: "il résout, il accourra, il vêt", r: ["R68", "R69", "R77"] },
          { t: "vous contredisez, vous satisfaites, je m'assois", r: ["R73", "R74", "R55"] },
          { t: "surseoir, se départir, agonir", r: ["R56", "R75", "R70"] }
        ] },
      { id: "b7", titre: "Le trait d'union", icone: "➖", desc: "Quand relier, quand séparer.",
        lecons: [
          { t: "ces jours-là, rue Victor-Hugo, trois quarts", r: ["R204", "R203", "R202"] },
          { t: "à demi, quasi, chef", r: ["R199", "R200", "R198"] },
          { t: "donne-le-moi, contre-attaque", r: ["R201", "R206"] }
        ] },
      { id: "b8", titre: "Homophones rares", icone: "🎐", desc: "Cote ou côte, cahot ou chaos, satire ou satyre.",
        lecons: [
          { t: "cote, côte · but, butte", r: ["R191-1", "R299"] },
          { t: "cahot, chaos · martyr, martyre", r: ["R300", "R313"] },
          { t: "satire, satyre · prémices, prémisse", r: ["R319", "R316"] },
          { t: "acquis, acquit · appas, appâts", r: ["R295", "R296"] }
        ] },
      { id: "b9", titre: "Participes : cas particuliers", icone: "🔬", desc: "Subit ou subi, crû ou cru, convaincant ou convainquant.",
        lecons: [
          { t: "subi, subit · cru, crû", r: ["R91-6", "R91-3"] },
          { t: "béni, bénit · décrépi, décrépit", r: ["R91-4", "R91-5"] },
          { t: "excepté, vu, y compris", r: ["R100"] },
          { t: "convaincant ou convainquant ?", r: ["R86"] },
          { t: "nous sommes convaincu", r: ["R93-2"] }
        ] },
      { id: "b10", titre: "Mots soudés et majuscules", icone: "🔗", desc: "Ledit, s'ensuivre ; le Sud, les Français.",
        lecons: [
          { t: "ledit, s'ensuivre, l'entraide", r: ["R207", "R208", "R209"] },
          { t: "les Français, le Sud, l'État", r: ["R214", "R215", "R213"] }
        ] },
      { id: "b11", titre: "Paronymes, épisode 1", icone: "🪶", desc: "Deux mots voisins, deux sens bien distincts.",
        lecons: [
          { t: "amener, apporter · décade, décennie", r: ["R255", "R262"] },
          { t: "collision, collusion · conjecture, conjoncture", r: ["R260", "R261"] },
          { t: "empreint, emprunt · inclinaison, inclination", r: ["R266", "R270"] },
          { t: "hiberner, hiverner · intense, intensif", r: ["R269", "R271"] },
          { t: "jadis, naguère · deuxième, second", r: ["R272", "R265"] }
        ] },
      { id: "b12", titre: "Modes et temps savants", icone: "🎼", desc: "Subjonctif, passé simple et formes littéraires.",
        lecons: [
          { t: "que tu voies, bien que, malgré que", r: ["R85", "R82", "R83"] },
          { t: "il convainc, ressortir à, convenir de", r: ["R72", "R76", "R42"] },
          { t: "il eut ou il eût ? fût-ce", r: ["R63", "R64"] },
          { t: "il eut fini ou il eût fini ?", r: ["R65"] }
        ] },
      { id: "b13", titre: "Homophones rares, épisode 2", icone: "🎐", desc: "Bâiller, krach, détonner, le gril…",
        lecons: [
          { t: "bâiller, bayer · céans, séant", r: ["R297", "R301"] },
          { t: "krach, crack · détoner, détonner", r: ["R304", "R305"] },
          { t: "s'égailler, la gent", r: ["R307", "R311"] },
          { t: "le gril, volatil", r: ["R312", "R133"] }
        ] },
      { id: "b14", titre: "Prépositions et constructions", icone: "🧭", desc: "À ou en, dont ou d'où, le ne explétif.",
        lecons: [
          { t: "à vélo, deux ou trois, aussi ou autant", r: ["R224", "R225", "R226"] },
          { t: "dans le journal, c'est ma faute, plutôt que de", r: ["R227", "R228", "R234"] },
          { t: "de façon que, de par, et autres", r: ["R229", "R230", "R249"] },
          { t: "ès, lès, dont ou d'où", r: ["R231", "R233", "R232"] },
          { t: "ne explétif, le livre dont je parle", r: ["R221-2", "R222"] }
        ] },
      { id: "b15", titre: "Mots au sens détourné", icone: "🌀", desc: "Alternative, conséquent, réaliser : le vrai sens.",
        lecons: [
          { t: "alternative, conséquent, réaliser", r: ["R237", "R242", "R247"] },
          { t: "initier, finaliser, causer", r: ["R246", "R244", "R240"] },
          { t: "éponyme, avatar, ingambe", r: ["R243", "R238", "R245"] },
          { t: "commémorer, faire long feu", r: ["R241", "R250"] }
        ] },
      { id: "b16", titre: "Accords experts", icone: "💎", desc: "Avoir l'air, possible, tel que, des plus…",
        lecons: [
          { t: "sentent bon, vingt et une, force détails", r: ["R130", "R144", "R160"] },
          { t: "avoir l'air, possible, sans + nom", r: ["R156", "R166", "R121"] },
          { t: "XVe et XVIe siècles, Sa Majesté, nous", r: ["R140", "R168", "R127"] },
          { t: "tel que, des plus", r: ["R169", "R158"] },
          { t: "des bleus, bleu-blanc-rouge", r: ["R149", "R148"] }
        ] },
      { id: "b17", titre: "Paronymes, épisode 2", icone: "🪶", desc: "Acception, achalandé, clore, gradation…",
        lecons: [
          { t: "acceptation, acception · achalandé", r: ["R251", "R252"] },
          { t: "agoniser, agonir · alcoolique, alcoolisé", r: ["R253", "R254"] },
          { t: "arcane, ceci, clore", r: ["R256", "R258", "R259"] },
          { t: "dentition, denture · détente, gâchette", r: ["R263", "R264"] },
          { t: "excessivement · gradation, graduation", r: ["R267", "R268"] }
        ] },
      { id: "b18", titre: "Accord du verbe : sujets complexes", icone: "🧲", desc: "La plupart, plus d'un, ni… ni, ainsi que.",
        lecons: [
          { t: "trop de, nombre de, la foule", r: ["R117", "R106", "R105"] },
          { t: "plus d'un, aucun, chaque", r: ["R108", "R112", "R113"] },
          { t: "un seul être, une gradation, tout reprend", r: ["R110", "R111", "R116"] },
          { t: "ainsi que, ni… ni, ou", r: ["R114", "R115"] }
        ] },
      { id: "b19", titre: "Locutions et expressions", icone: "💬", desc: "Tout de suite, au regard de, de concert…",
        lecons: [
          { t: "tout de suite, il vaut mieux, mettre au jour", r: ["R288", "R290", "R291"] },
          { t: "au regard de, avoir des chances de", r: ["R284", "R285"] },
          { t: "coupe claire, de concert, faute d'inattention", r: ["R286", "R287", "R289"] },
          { t: "rien de moins que, sous l'empire de", r: ["R292", "R293"] }
        ] },
      { id: "b20", titre: "Le participe passé : accords experts", icone: "🏆", desc: "En, impersonnels, coûté, pu, voulu…",
        lecons: [
          { t: "il a fallu, j'en ai mangé", r: ["R97", "R96"] },
          { t: "l' neutre, le peu de", r: ["R98", "R99"] },
          { t: "les euros que ça m'a coûté", r: ["R102"] },
          { t: "tous les efforts qu'il a pu", r: ["R103"] },
          { t: "les leçons qu'on m'a donné à apprendre", r: ["R95-3"] }
        ] },
      { id: "b21", titre: "Paronymes, épisode 3", icone: "🪶", desc: "Mystifier, opprimer, recouvrer, somptuaire…",
        lecons: [
          { t: "mystifier, mythifier · occasion, opportunité", r: ["R273", "R274"] },
          { t: "oppresser, opprimer · poindre, pointer", r: ["R275", "R276"] },
          { t: "prolongation, prolongement · publiciste", r: ["R277", "R278"] },
          { t: "ranimer, réanimer · recouvrer", r: ["R279", "R280"] },
          { t: "somptuaire, somptueux · suggestion, sujétion", r: ["R281", "R282"] }
        ] },
      { id: "b22", titre: "Les verbes pronominaux", icone: "🔁", desc: "Le sommet du participe passé.",
        lecons: [
          { t: "elle s'est évanouie, ils se sont vendus", r: ["R104-2", "R104-3"] },
          { t: "ils se sont parlé ou parlés ?", r: ["R104-1"] },
          { t: "elle s'est fait opérer, rendu compte", r: ["R104-6", "R104-7"] },
          { t: "elle s'est laissé convaincre", r: ["R104-5"] }
        ] },
      { id: "b23", titre: "Tout, gens, quelque : le final", icone: "🌟", desc: "Les accords les plus fins de la langue.",
        lecons: [
          { t: "tout heureuse, toute honteuse", r: ["R151-2"] },
          { t: "une tout autre histoire, la plus, le plus", r: ["R152", "R162"] },
          { t: "de vieilles gens, ces gens sont heureux", r: ["R161"] },
          { t: "quelque deux cents personnes", r: ["R31-2"] }
        ] }
    ]
  }
];
