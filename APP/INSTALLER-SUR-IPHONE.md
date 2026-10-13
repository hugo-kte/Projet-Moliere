# Projet Molière — installer l'application sur iPhone / iPad

Projet Molière est une **PWA** (application web installable). Sur iPhone, elle s'installe
depuis une **adresse internet**, pas depuis un fichier : Apple n'autorise pas l'installation
d'une app à partir d'un fichier envoyé par mail ou AirDrop sans passer par l'App Store.

Il y a donc **deux étapes** : mettre le dossier en ligne une fois, puis partager le lien obtenu.

---

## Étape 1 — Mettre l'application en ligne (une seule fois, gratuit)

### Solution la plus rapide : Netlify Drop (≈ 1 minute, sans rien installer)

1. Ouvrir <https://app.netlify.com/drop> sur un ordinateur.
2. **Glisser-déposer le fichier `projet-moliere.zip`** (ou le dossier décompressé) sur la page.
3. Netlify met le site en ligne et affiche une adresse du type
   `https://nom-aleatoire-123456.netlify.app`.
4. Créer un compte gratuit si l'on veut conserver le site durablement et choisir un nom
   d'adresse plus simple (menu *Site configuration → Change site name*).

C'est cette adresse qu'il faut envoyer aux personnes concernées.

### Autres hébergements gratuits équivalents

| Service | Adresse | Principe |
|---|---|---|
| Cloudflare Pages | <https://pages.cloudflare.com> | Glisser-déposer, compte gratuit |
| GitHub Pages | <https://pages.github.com> | Déposer les fichiers dans un dépôt, activer Pages |
| Vercel | <https://vercel.com> | Glisser-déposer, compte gratuit |

**Important : l'adresse doit être en `https://`.** C'est une exigence d'iOS pour le mode
hors ligne et l'installation sur l'écran d'accueil. Tous les services ci-dessus la respectent.

---

## Étape 2 — Installer sur l'iPhone (à faire par chaque personne)

1. Ouvrir le lien **dans Safari** (indispensable : Chrome sur iOS ne propose pas
   l'installation sur l'écran d'accueil).
2. Appuyer sur le bouton **Partager** (le carré avec une flèche vers le haut, en bas de l'écran).
3. Faire défiler et choisir **« Sur l'écran d'accueil »**.
4. Valider avec **« Ajouter »**.

L'icône « Molière » apparaît alors sur l'écran d'accueil. L'application s'ouvre en plein écran,
sans la barre d'adresse de Safari, et fonctionne **hors connexion** après la première ouverture.

### Sur Android

Ouvrir le lien dans Chrome, puis menu **⋮ → « Installer l'application »**.

### Sur ordinateur

Ouvrir le lien dans Chrome ou Edge, puis cliquer sur l'icône d'installation dans la barre d'adresse.
Le dossier fonctionne aussi en local : il suffit d'ouvrir `index.html` dans un navigateur.

---

## Ce qu'il faut savoir sur la progression

- La progression est enregistrée **automatiquement** sur l'appareil, à chaque réponse ainsi
  qu'à chaque fois que l'application passe en arrière-plan.
- Elle est **propre à chaque appareil** : elle ne se synchronise pas entre l'iPhone et l'ordinateur.
- Elle serait perdue si l'icône était supprimée de l'écran d'accueil, ou si les données de
  Safari étaient effacées.

## Rappel quotidien et défis entre amis

- **Rappel** : dans l'app, *Réglages* (ou *Rappel quotidien*) → choisir une heure. iOS propose
  d'ajouter un événement quotidien au Calendrier, avec une alerte. Pour l'arrêter, il suffit de
  supprimer l'événement dans le Calendrier.
- **Défis** : en fin de séance, *Envoyer le défi* ouvre la feuille de partage (Messages, WhatsApp…).
  Le lien contient les phrases et le score ; il ne fonctionne que si l'app est **en ligne**
  (étape 1), pas quand elle est ouverte en local sur un ordinateur.

---

## Contenu du paquet

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (interface et moteur) |
| `rules-*.js` | Les 341 fiches de règles, avec leurs explications |
| `exos-*.js` | Les exercices (3 410 phrases) |
| `parcours.js`, `difficulte.js`, `astuces.js` | Le parcours, la difficulté des règles, les « bons réflexes » |
| `anecdotes.js` | Les anecdotes « Le saviez-vous ? » |
| `rappels/` | Les rappels quotidiens à ajouter au calendrier (un fichier par heure) |
| `sw.js` | Le service worker : permet le fonctionnement hors ligne |
| `manifest.webmanifest` | Déclare l'application installable (nom, icônes, couleurs) |
| `*.png`, `*.svg` | Les icônes, dont celle de l'écran d'accueil iOS |

Tous les fichiers doivent rester **ensemble, dans le même dossier**.
