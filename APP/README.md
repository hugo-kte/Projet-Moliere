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

- 341 règles et 1 096 exercices réellement rédigés ;
- liste consultable des exercices dans chaque fiche de règle ;
- séries éditoriales contrôlées progressivement, sans duplication automatique ;
- 62 séries déjà validées avec 10 cas distincts, 8 fautifs et 2 corrects ;
- test de positionnement et parcours en six étapes ;
- entraînement adaptatif par thème ou par règle ;
- répétition espacée et carnet d'erreurs ;
- objectifs quotidiens, XP, statistiques et historique des tests ;
- statistiques par domaine et par règle, avec classement des difficultés ;
- sauvegarde et restauration de la progression ;
- fonctionnement hors ligne après la première ouverture via HTTP.

Toutes les données personnelles restent dans le stockage local du navigateur.

## Structure du contenu

Les règles sont déclarées dans `rules-superieur.js` et
`rules-excellence.js`. Les exercices sont répartis dans les fichiers
`exos-*.js`. Une phrase erronée utilise la notation
`[forme incorrecte→forme correcte]`; une phrase sans crochets est correcte.

Les explications et exercices du projet sont des formulations originales. Les
ouvrages fournis par l'utilisateur et les ressources listées dans `SOURCES.md`
servent de références éditoriales, sans reproduction de leurs exercices.
