# Projet Molière

Application locale et gratuite d'entraînement à l'orthographe française.

## Ouvrir l'application

`index.html` peut être ouvert directement dans un navigateur. Pour profiter de
l'installation comme application et du mode hors ligne, servez le dossier avec
un petit serveur web local, par exemple :

```sh
python3 -m http.server 8080
```

Puis ouvrez `http://localhost:8080`.

## Fonctionnalités

- **Parcours d'apprentissage** : 2 niveaux (700, puis Excellence), 37 chapitres,
  153 leçons de 3 minutes, un contrôle par chapitre et un examen final par niveau ;
- **leçons** : fiches de découverte (règle, « bon réflexe », exemple fautif corrigé)
  puis pratique entrelacée avec indices, notée en étoiles ;
- **maîtrise exigée** : une règle est réussie après quatre bonnes réponses d'affilée,
  puis acquise quand elle est réussie à nouveau un autre jour ; un chapitre est
  maîtrisé (👑) quand son contrôle est réussi et toutes ses règles acquises ;
- **correction écrite** : après avoir trouvé la faute, on écrit la bonne forme
  (barre d'accents, graphies de 1990 admises) ;
- **difficulté mesurée** des 341 règles (Baromètre Voltaire + barème calibré),
  utilisée pour ordonner et doser le parcours — voir `METHODE-PARCOURS.md` ;
- 341 règles, 10 exercices par règle (8 fautifs, 2 corrects) ;
- livret des règles avec recherche, filtres, tri par difficulté et lien vers la leçon ;
- test de positionnement facultatif ;
- entraînement adaptatif par thème ou par règle, test complet de 100 questions ;
- **modes de jeu** : dictée (synthèse vocale), relecture d'un texte, éclair (60 s),
  défi entre amis par lien (sans compte ni serveur) ;
- répétition espacée, carnet d'erreurs, statistiques ;
- **score estimé sur 1000** (échelle du Certificat Voltaire, indicatif) ;
- objectif quotidien réglable, série avec gels de série, XP et niveaux, 21 succès,
  récompenses et sons en fin de séance, images à partager ;
- rappel quotidien par le calendrier du téléphone (`rappels/*.ics`) ;
- « Le saviez-vous ? » : anecdotes sur la langue (`anecdotes.js`) ;
- sauvegarde automatique sur l'appareil ;
- fonctionnement hors ligne après la première ouverture via HTTP.

Toutes les données personnelles restent dans le stockage local du navigateur.

## Structure du contenu

Les règles sont déclarées dans `rules-superieur.js` et
`rules-excellence.js` ; leur difficulté dans `difficulte.js` ; le parcours
(chapitres et leçons) dans `parcours.js` ; les « bons réflexes » dans
`astuces.js` ; les anecdotes dans `anecdotes.js`. Les exercices de référence sont dans `exos-niveau-700.js` et
`exos-excellence.js` (les anciens fichiers `exos-*.js` restent chargés mais sont
remplacés règle par règle). Une phrase erronée utilise la notation
`[forme incorrecte→forme correcte]`; une phrase sans crochets est correcte.

Les explications et exercices du projet sont des formulations originales. Les
ouvrages fournis par l'utilisateur et les ressources listées dans `SOURCES.md`
servent de références éditoriales, sans reproduction de leurs exercices.
