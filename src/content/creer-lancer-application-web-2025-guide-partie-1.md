Bonjour à toutes et à tous, Baptiste, développeur Font-end.

Je suis ravi de partager avec vous cette série d'articles en deux parties dédiée au lancement de Match, mon nouveau projet de développement. Vous découvrirez l'ensemble du processus de création d'une application, depuis la conceptualisation de l'idée jusqu'à l'implémentation des premières lignes de code.

## 1 : Quand l'idée devient projet concret

**ANALYSE ET CONCEPTION - Définition du projet**

### Le déclic qui a tout changé

Train Linz-Vienne, fin de vacances, ordinateur portable sur les genoux. Je venais de finir la refonte de mon site web personnel - un projet qui m'avait occupé pendant des semaines - et j'avais cette sensation du devoir accompli mélangée à un vide étrange. **Qu'est-ce que j'allais bien pouvoir créer maintenant ?**

Dans mes écouteurs tournait "La misère est si belle" de PNL en boucle. Encore. Pour la centième fois cette semaine. **PNL, c'est mon obsession musicale** - ce rap français avec cette ambiance cloud, ces mélodies planantes, cette production si particulière qui n'appartient qu'à eux. Le problème ? À force d'écouter leur discographie en boucle, je connaissais chaque parole, chaque beat, chaque respiration par cœur.

**J'adorais ce qu'ils faisaient, mais j'avais épuisé leur catalogue.** Et là, regardant défiler la campagne Autrichienne par la fenêtre du train, cette question m'a frappé : **"Est-ce qu'il existe des artistes peu connus que je ne connais pas encore, qui font le même style que PNL ? Des artistes qui pourraient me faire découvrir d'autres choses du même univers que j'adore ?"**

J'ai ouvert Deezer, lancé un mix de PNL. Résultat ? Les mêmes noms que je connaissais déjà, DTF, Laylow, Kekra. **Rien de nouveau. Rien qui capture cette essence unique** que je recherchais. Les algorithmes me proposaient du rap français populaire, mais pas cette texture sonore précise, cette ambiance si particulière qui me fait vibrer chez PNL.

### L'illumination dans le train

À ce moment-là, l'idée a germé. **Et si je créais une app qui fait exactement ça ?** Trouver ces artistes émergents, ces pépites inconnues qui partagent l'essence musicale des artistes qu'on adore déjà.

Pas une énième plateforme de streaming complexe. Non. Quelque chose d'**ultra-simple** :

- Tu entres PNL → l'app te trouve des artistes émergents avec la même vibe cloud-rap
- Tu cherches une texture musicale précise → elle te déniche les inconnus qui la maîtrisent
- **Une fonction, un résultat** : découverte pure et efficace

L'énergie de cette idée m'a porté jusqu'à l'aéroport. Dans l'avion, j'esquissais déjà des wireframes sur mon cahier. **J'allais enfin pouvoir découvrir tous ces PNL en devenir** que les algorithmes mainstream ignorent.

### La fausse route (et pourquoi elle m'a sauvé)

Retour en France, j'étais en feu. **J'ai commencé à développer immédiatement**. Framework choisi, API musicale connectée, premières lignes de code... L'excitation du nouveau projet, vous connaissez ça.

Mais au bout de quelques semaines, **quelque chose clochait**. Je codais, certes, mais sans vraiment savoir où j'allais. Mon algorithme de recommendation était bancal, je ne savais pas vraiment comment définir la "similarité musicale", et surtout... **je n'avais pas pris le temps de structurer le projet correctement**.

Cette frustration m'a fait arrêter net. **J'avais sauté l'étape la plus importante : la conception**.

C'est là que j'ai eu ma deuxième illumination : **pourquoi ne pas documenter tout ce processus de A à Z ?** Créer un blog, raconter cette aventure, et surtout, me forcer à faire les choses dans l'ordre cette fois. Prendre le temps de la réflexion avant l'action.

**Ce blog, c'est ma façon de revenir sur ce projet avec des idées plus abouties**, des technologies mieux choisies, et un planning qui me laisse vraiment le temps de bien faire les choses.

### Transformer la frustration en cahier des charges

Cette fois, pas question de foncer tête baissée. J'ai ouvert un document et j'ai commencé à structurer cette idée en projet concret.

#### Définition claire de l'objectif

**Mission principale** : Créer un moteur de recommandations ultra-spécialisé dans la découverte d'artistes émergents, basé sur la similarité musicale fine plutôt que sur la popularité.

#### Identification du public cible

**Mon persona principal** : Les "découvreurs musicaux" - ces auditeurs passionnés qui :

- Écoutent beaucoup de musique (>3h/jour)
- Recherchent constamment de nouveaux sons
- Se lassent des recommendations mainstream
- Apprécient la découverte d'artistes avant tout le monde
- Ont des goûts musicaux précis et parfois de niche

#### Le problème à résoudre

**Pain point central** : L'impossibilité de trouver facilement de nouveaux artistes émergents qui correspondent exactement à des goûts musicaux spécifiques et pointus.

**Problèmes secondaires** :

- Les algorithmes actuels privilégient la popularité sur la pertinence
- Pas d'app dédiée uniquement à cette fonction
- Trop de bruit dans les recommendations (artistes déjà connus)
- Manque de focus sur les artistes émergents

#### Ma proposition de valeur unique

**Ce qui me différencie de Spotify/Deezer** :

1. **Focus 100% artistes émergents** (pas de mainstream dans les résultats)
2. **Simplicité radicale** : une fonction, une app
3. **Algorithme de similarité musicale** (pas de collaborative filtering)
4. **Interface minimaliste** : zéro distraction, efficacité maximale

### Mes premiers livrables concrets

Après cette structuration, j'avais enfin quelque chose de tangible :

#### Document de définition projet (v2)

**PROJET :** Match

**OBJECTIF :** Recommandations d'artistes émergents par similarité musicale

**PUBLIC :** Mélomanes découvreurs (25-40 ans, >3h écoute/jour)

**DIFFÉRENCIATION :** Focus émergents + simplicité + précision algorithmique

**MVP :** Input unique → Output équivalent émergent

**VISION :** Évolution vers SaaS de recommandations musicales

#### Cahier des charges fonctionnel (version réaliste)

**Fonctionnalité cœur** (une seule au choix) :

- **Option A** : Recherche par titre de chanson → recommandation chanson émergente
- **Option B** : Recherche par nom d'artiste → recommandation artiste émergent
- **Option C** : Recherche par album → recommandation album émergent

_→ Décision à prendre lors du prototypage_

**Hors scope V1** (pour rester ultra-simple) :

- Pas de système de feedback (👍/👎)
- Pas d'historique des découvertes
- Pas de streaming intégré (redirection vers Spotify/YouTube)
- Pas de playlists
- Pas de fonctionnalités sociales

**Vision long terme** : Évoluer vers un SaaS de recommandations musicales pour d'autres plateformes.

### La révélation de cette première étape

Ce qui m'a frappé en reprenant ce projet avec du recul, c'est à quel point **l'échec initial était nécessaire**. Foncer tête baissée dans le code m'a appris une leçon cruciale : **un projet sans fondations solides s'effondre rapidement**.

**Trois enseignements cruciaux** de cette expérience :

1. **Une frustration personnelle authentique** fait un excellent point de départ (PNL en boucle = problème réel)
2. **La simplicité extrême** peut être une stratégie (une fonction = une app = un avantage concurrentiel)
3. **Prendre le temps de la conception** évite des mois de développement dans le vide

Cette fois, je fais les choses dans l'ordre. Et vous savez quoi ? **C'est beaucoup plus excitant** que de coder à l'aveugle.

## 2 : À l'écoute de mes futurs utilisateurs

**ANALYSE ET CONCEPTION - Analyse des besoins**

Je vais être honnête avec vous : dans un monde idéal, je passerais des semaines à **interviewer mes futurs utilisateurs**, à créer des personas détaillés et à mapper chaque parcours utilisateur possible. Mais voilà, je suis sur un projet personnel avec une contrainte majeure : **je veux développer rapidement**.

Cette partie sur l'**analyse des besoins utilisateurs** est cruciale dans un contexte professionnel ou pour une startup qui lève des fonds. Mais pour mon application de recommandations musicales, j'ai fait le choix conscient d'une approche accélérée.

### Pourquoi je zappe (temporairement) l'analyse utilisateur poussée

**Contrainte temps :** Je développe sur mon temps libre, le soir et les week-ends. Chaque heure compte.

**Validation par l'usage :** Je préfère sortir un MVP rapidement et ajuster selon les retours réels plutôt que de sur-analyser en amont.

**Connaissance du domaine :** Je suis moi-même un utilisateur passionné de découverte musicale. Je connais les frustrations du public cible.

## 3 : Dans l'arène face à la concurrence

**ANALYSE ET CONCEPTION - Étude de marché**

### Ma première erreur : croire que j'étais le seul

Deux semaines après mon illumination dans le train, j'ai décidé de faire ce que tout créateur devrait faire dès le jour 1 : **analyser sérieusement la concurrence**.

Bien sûr, je savais déjà que les mastodontes du streaming (Spotify, Apple Music, Deezer) avaient tous leurs systèmes de recommandations intégrés. Mais je voulais comprendre précisément **pourquoi aucun d'eux ne répondait vraiment à mon besoin** de découverte d'artistes émergents.

C'est en creusant que j'ai découvert des acteurs plus spécialisés comme Last.fm, et surtout, que j'ai identifié les failles systémiques qui validaient mon approche.

### Les mastodontes : quand la recommandation est secondaire

Après avoir passé des heures sur Spotify, Apple Music, Deezer et SoundCloud, le constat était sans appel : **ils font tous la même erreur stratégique**.

**Leur approche commune** :

- **Recommandation diluée** : La découverte musicale est noyée dans 50 autres fonctionnalités
- **Interface surchargée** : Playlists, podcasts, vidéos, réseaux social... tout sauf la simplicité
- **Algorithmes généralistes** : Optimisés pour satisfaire le plus grand nombre, pas les goûts pointus

**Forces partagées** :

- Catalogues massifs (50-100 millions de titres)
- UX moderne et intuitive pour le streaming
- Données d'écoute énormes pour alimenter les algos

**Faiblesses communes pour mon cas d'usage** :

- **Biais mainstream systémique** : Les algorithmes favorisent les artistes populaires
- **Découverte = fonctionnalité bonus** : Pas le cœur de métier
- **Complexité cognitive** : Trop de choix tue le choix pour la découverte ciblée

### Les spécificités révélatrices

**Spotify** excelle sur "Discover Weekly" mais dilue les émergents dans la masse  
**Apple Music** mise sur la curation humaine mais reste orienté grand public  
**Deezer** propose "Flow" mais avec les mêmes biais de popularité  
**SoundCloud** détient la vraie mine d'or d'artistes émergents... mais n'a **aucun algorithme digne de ce nom** pour les faire découvrir

**Mon insight crucial** : SoundCloud a le contenu que je veux, mais pas les outils de découverte. Les autres ont les outils, mais pas le contenu émergent. **Personne ne fait le pont entre les deux**.

### Last.fm : Mon concurrent direct (et ma source d'inspiration)

Après ma recherche, Last.fm s'est révélé être **mon vrai concurrent**. Last.fm génère automatiquement des recommandations basées sur l'historique d'écoute et propose un "Taste-o-Meter" pour mesurer la compatibilité musicale.

**Ce que j'ai admiré chez Last.fm** :

- **Algorithme de scrobbling** : Tracking précis des écoutes
- **Recommandations basées sur la similarité** : Exactement mon approche
- **Communauté de mélomanes** : Users engagés et exigeants
- **Données historiques** : 20 ans de data musicale

**Mais leurs faiblesses m'ont ouvert les yeux** :

- **Design daté** : Interface qui sent les années 2000
- **UX catastrophique** : Navigation confuse, parcours utilisateur chaotique
- **Pas de focus mobile** : Application mobile négligée
- **Complexité rebutante** : Trop de features obscures pour l'utilisateur lambda

**Ma révélation** : Last.fm a l'algorithme, mais pas l'expérience. Exactement l'inverse de Spotify !

### Les limites fondamentales des algorithmes actuels

Ma recherche sur les algorithmes de recommandation m'a fait découvrir des problèmes systémiques fascinants :

#### Le biais de popularité

Les algorithmes de recommandation musicale sont les meilleurs pour la musique grand public, mais la qualité laisse beaucoup à désirer pour la musique non grand public. **Exactement mon problème avec PNL !**

#### La bulle de filtre

Le risque est de restreindre l'auditeur à un carcan prédéfini de musiques. Les algorithmes nous enferment dans nos goûts existants au lieu de nous faire découvrir.

#### Le problème du démarrage à froid

Les systèmes de filtrage collaboratif souffrent du problème du démarrage à froid : impossible de recommander un nouvel artiste sans historique d'écoute.

**Mon avantage conceptuel** : En me concentrant sur les artistes émergents ET la similarité musicale, j'évite ces trois écueils.

### Ma stratégie de différenciation : les 3 piliers

Cette analyse m'a permis de cristalliser ma stratégie :

#### 1. Simplicité radicale

**Constat** : Tous les acteurs souffrent de "feature creep" (accumulation de fonctionnalités)  
**Ma réponse** : Une fonction, un objectif, zéro distraction

#### 2. Focus émergents exclusif

**Constat** : Personne ne se spécialise vraiment sur les artistes émergents  
**Ma réponse** : 0% de mainstream dans les résultats, 100% d'artistes émergents

#### 3. UX mobile-first moderne

**Constat** : Last.fm a l'algo mais pas l'UX, Spotify a l'UX mais pas le focus  
**Ma réponse** : L'expérience utilisateur de Spotify avec la pertinence de Last.fm

### Mes livrables concrets

#### Étude concurrentielle structurée

**CONCURRENTS DIRECTS :**

- Last.fm : Algorithme fort, UX faible, opportunité énorme

**CONCURRENTS INDIRECTS :**

- Spotify/Apple Music/Deezer : UX forte, mais recommandation secondaire
- SoundCloud : Contenu émergent, mais pas d'algo de découverte

**GAPS IDENTIFIÉS :**

- Simplicité + Focus émergents + UX moderne = Océan bleu

#### Positionnement marché validé

**Mon créneau unique** : L'intersection entre la précision algorithmique de Last.fm et la simplicité d'usage de Spotify, 100% dédiée aux artistes émergents.

**Validation** : 60% des utilisateurs français écoutent les recommandations musicales personnalisées - le marché existe et est mature.

### La révélation de cette étape

Cette analyse concurrentielle m'a libéré d'un poids énorme. **Je ne suis pas en train d'inventer la roue**, je suis en train de la réinventer mieux.

**Trois insights stratégiques** :

1. **La concurrence valide le marché** : Si Last.fm survit depuis 20 ans avec une UX horrible, imaginez le potentiel avec une UX moderne
2. **Les gaps sont énormes** : Personne ne fait exactement ce que je veux faire
3. **Le timing est parfait** : Les users sont éduqués (merci Spotify), les artistes émergents pullulent (merci Internet), mais personne ne les connecte efficacement

## 4 : Choisir ses armes - Ma stack technique

**ARCHITECTURE ET PLANIFICATION - Architecture technique**

Après avoir analysé ma concurrence et clarifié mon positionnement, il était temps de passer au concret : **avec quelles technologies allais-je construire cette app ?**

### Le piège de la hype technologique

Premier réflexe : ouvrir 15 onglets sur les dernières tendances tech 2025. Rust ? Svelte ? Bun ? L'erreur classique du développeur : choisir sa stack en fonction du buzz plutôt que des besoins du projet.

Puis je me suis rappelé ma règle d'or tirée de mon échec initial : **privilégier la rapidité de développement sur tout le reste**. Pour un MVP en 2 mois avec zéro budget, pas question de partir dans l'expérimentation pure.

### Ma philosophie : équilibre entre maîtrise et apprentissage ciblé

Mon approche pour ce projet : utiliser majoritairement des technologies que je maîtrise, tout en m'autorisant **un seul** apprentissage stratégique. L'innovation viendra de l'idée et de l'exécution, pas de multiplier les nouvelles technologies.

#### Technologies dans mon arsenal actuel

- **Frontend** : HTML, CSS, SASS, Bootstrap, Tailwind, UIKit JavaScript, TypeScript, React, Next.js
- **Backend** : Node.js, Express.js, TypeScript
- **Bases de données** : MongoDB, Supabase, PostgreSQL, MySQL
- **Outils** : Jest, Vite, Vitest, Docker, Git/GitHub, Postman

Mon critère de sélection : **Quelles technos vont me permettre d'aller le plus vite tout en me faisant progresser sur une compétence clé ?**

### Frontend : Next.js, le choix évident

#### Pourquoi Next.js s'imposait naturellement

Pour le frontend, le choix était quasi-évident : **Next.js que je maîtrise déjà**. Voici mon raisonnement :

**Arguments techniques** :

- **React en base** : Framework que je connais parfaitement
- **SSR intégré** : Excellent pour le SEO (crucial pour la découvrabilité)
- **Routing file-based** : Plus simple que le routing React classique
- **Performance native** : Optimisations automatiques (images, bundles, etc.)
- **Déploiement gratuit** : Vercel offre un hosting gratuit optimisé pour Next.js

**Arguments business** :

- **Rapidité de développement** : Je connais déjà l'écosystème
- **Communauté active** : Solutions rapides aux problèmes courants
- **Écosystème mature** : Librairies tierces abondantes
- **Pas d'apprentissage** : Productivité maximale dès le jour 1

**L'alternative envisagée** : React pur  
**Pourquoi rejetée** : Moins performant pour le SEO, setup plus complexe

### Styling : Tailwind CSS (terrain de confiance)

Pour le CSS, **Tailwind était un no-brainer** :

- **Rapidité de prototypage** : Utility classes directement dans le JSX
- **Cohérence design** : Système de design intégré
- **Bundle optimisé** : Purge automatique des classes non utilisées
- **Mobile-first** : Parfait pour mon approche UX
- **Maîtrise totale** : Framework que je connais sur le bout des doigts

### Backend : Nest.js, le pari calculé

#### Pourquoi j'ai choisi d'apprendre Nest.js pour ce projet

Le choix du backend était plus délicat. J'hésitais entre **Express.js** (simple et que je maîtrise) et **Nest.js** (plus structuré mais nouveau pour moi).

**Nest.js a gagné pour ces raisons** :

- **Express.js en base** : Je maîtrise déjà Express, donc la courbe d'apprentissage porte "seulement" sur Nest.js
- **Architecture claire** : Modules, controllers, services - parfait pour éviter le code spaghetti
- **TypeScript natif** : Cohérence avec mon frontend Next.js
- **Décorateurs intégrés** : API REST propre et lisible
- **Évolutivité** : Si l'app grandit, l'architecture sera prête

#### Le calcul risque/bénéfice

- **Risque assumé** : Courbe d'apprentissage qui pourrait ralentir le développement
- **Bénéfice espéré** : Architecture plus propre + montée en compétences + meilleure maintenabilité

**L'alternative sécurisée** : Express.js pur  
**Pourquoi rejetée** : Risque de code moins structuré, pas d'évolution de compétences

#### Mon plan d'apprentissage Nest.js

1. **Semaine 1** : Documentation officielle + tutoriel de base
2. **Semaine 2** : Premier CRUD avec les concepts fondamentaux
3. **Développement** : Apprentissage progressif des features avancées

### Base de données : PostgreSQL + Supabase (zone de confort)

#### Le choix sécurisé après le risque backend

Pour stocker les données de recommandations, j'ai volontairement choisi **la sécurité** après avoir pris un risque sur Nest.js :

**PostgreSQL car** :

- **Relations complexes** : Artistes ↔ Genres ↔ Similarités ↔ Utilisateurs
- **Requêtes avancées** : Algorithmes de recommandation plus sophistiqués
- **Maîtrise existante** : Pas de courbe d'apprentissage
- **Évolutivité** : Si je veux ajouter de la data science plus tard

**Supabase : PostgreSQL hébergé + outils que je connais déjà**

Pourquoi Supabase plutôt qu'une DB classique :

- **Gratuit jusqu'à 500MB** : Parfait pour mon MVP
- **Auth intégrée** : Feature que j'ai déjà utilisée
- **API REST automatique** : Tables → endpoints que je sais exploiter
- **Dashboard admin** : Interface familière pour visualiser les données
- **Pas d'apprentissage** : Setup en 10 minutes vs 2 heures

### API musicale : Last.fm, la référence connue

#### Pourquoi Last.fm API plutôt que Spotify

Le choix de l'API musicale devait être **rapide et sûr** :

**Last.fm API s'imposait** :

- **Données de similarité** : Exactly ce dont j'ai besoin pour mon algo
- **Metadata riches** : Tags, biographies, images d'artistes
- **API familière** : J'ai déjà développé avec dans des projets perso
- **Pas de rate limiting sévère** : Plus permissive que Spotify
- **Gratuite** : Pas de coûts cachés pour le MVP

**Spotify API rejetée car** :

- Rate limiting strict pour les apps non-commerciales
- Plus orientée streaming que métadonnées
- Authentification complexe que je ne maîtrise pas
- Temps d'apprentissage incompatible avec mes délais

### Architecture globale : 80% sécurisé, 20% innovation

#### Mon schéma d'architecture MVP équilibré

**Frontend (Next.js + Tailwind)** ← MAÎTRISÉ

↓ API calls

**Backend (Nest.js + TypeScript)** ← NOUVEAU À APPRENDRE

↓ Database queries

**Database (PostgreSQL + Supabase)** ← MAÎTRISÉ

↓ External API calls

**Last.fm API** ← MAÎTRISÉ

#### Déploiement (mix sécurisé/nouveau)

- **Frontend** : Vercel ← _maîtrisé, gratuit et optimisé_
- **Backend** : Railway / Render ← _nouveau, mais tier gratuit_
- **Database** : Supabase ← _maîtrisé, 500MB gratuits_
- **Domaine** : www.match.baptistecainjo.fr

### Mes livrables techniques concrets

#### Document d'architecture technique (v1)

**STACK TECHNIQUE MVP**

- **Frontend**: Next.js 14 + React 19 + Tailwind CSS ← _stack maîtrisée_
- **Backend**: Nest.js + TypeScript + Node.js 22 ← _1 nouvelle techno_
- **Database**: PostgreSQL + Supabase ← _stack maîtrisée_
- **API**: Last.fm Web API ← _API connue_
- **Hosting**: Vercel (front) + Railway (back) + Supabase (db)
- **Auth**: Supabase Auth ← _déjà utilisé_
- **Monitoring**: Vercel Analytics + Supabase Dashboard

#### Estimation de développement révisée (avec apprentissage Nest.js)

- Setup projet & architecture - 3 jours
- **Apprentissage Nest.js + API de base** - **6 jours** (**← ajouté**)
- Interface utilisateur (recherche + résultats) - 10 jours
- API backend (endpoints + Last.fm integration) - 10 jours (_+2 jours_)
- Base de données & modèles - 4 jours
- Authentification (optionnelle V1) - 4 jours (_+1 jour_)
- Tests & debugging - 8 jours (_+1 jour_)
- Déploiement & configuration - 4 jours

**Total estimé : 49 jours** → Compatible avec mon objectif 2 mois avec une marge réduite

## 5 : Dessiner avant de construire

**ARCHITECTURE ET PLANIFICATION - Conception UX/UI**

Avec ma stack technique définie et Nest.js à apprivoiser, j'aurais pu me jeter directement dans le code. **Grosse erreur que j'ai failli commettre.** L'UX/UI, c'est le moment où votre idée devient tangible pour vos futurs utilisateurs.

### La tentation du "je dessine en codant"

#### Mon premier réflexe (le mauvais)

"Allez, je connais mon app par cœur, je vais wireframe directement en HTML/CSS !"

**Pourquoi c'était stupide :**

- Modifier du CSS prend 10x plus de temps que déplacer un rectangle sur Figma
- On se concentre sur la technique au lieu de l'expérience
- Impossible de tester rapidement différentes approches
- Risque de s'attacher à la première version (même mauvaise)

#### Le déclic qui a tout changé

En regardant mes apps préférées (Spotify, Discord, Notion), je me suis rendu compte qu'elles ont toutes une chose en commun : **on comprend immédiatement quoi faire**.

Ma question révélatrice : **"Si ma grand-mère ouvre mon app, comprend-elle en 5 secondes comment découvrir un nouvel artiste ?"**

Spoiler : avec mon idée initiale, même moi j'aurais galéré.

### Ma philosophie UX : simplicité brutale

#### Le principe des 3 clics maximum

Pour mon MVP, j'ai établi une règle stricte :

**Aucune action principale ne doit prendre plus de 3 clics :**

1. **Découvrir un artiste** : Recherche → Sélection → Recommandations
2. **Explorer un genre** : Genre → Filtres → Résultats
3. **Sauvegarder un artiste** : Artiste → Bouton cœur → Confirmé

#### L'obsession de la première impression

**Les 10 premières secondes sont critiques.** L'utilisateur doit immédiatement comprendre :

- À quoi sert l'app
- Comment s'en servir
- Pourquoi c'est mieux que Spotify

Mon objectif : **zéro temps d'adaptation, plaisir immédiat.**

### Wireframes : ma méthode rapide mais efficace

#### Outils choisis (et pourquoi)

**Figma** s'est imposé naturellement :

- **Gratuit** pour mon usage solo
- **Collaborative** : Je peux facilement partager avec des amis pour feedback
- **Composants réutilisables** : Je crée une fois, j'utilise partout
- **Prototypage intégré** : Wireframes → prototype cliquable sans changer d'outil

### Les erreurs UX que j'ai évitées

- **Erreur 1 : Copier la concurrence aveuglément** → _Ma solution_ : Inspiration oui, copie non
- **Erreur 2 : Trop de fonctionnalités d'un coup** → _Ma solution_ : Une fonctionnalité, parfaitement exécutée
- **Erreur 3 : Design-driven au lieu d'user-driven** → _Ma solution_ : Efficacité > esthétique (mais les deux si possible)
- **Erreur 4 : Négliger les états d'erreur** → _Ma solution_ : Loading, error, empty states dès la conception

### L'impact de ce travail UX sur mon développement

#### Développement plus fluide

**Avant cette phase UX** : "Comment je vais organiser cette page ?"  
**Après** : Code direct, composants clairs, hiérarchie définie

#### Moins de refactoring

**Grâce aux wireframes** : Aucune surprise sur l'organisation  
**Grâce au design system** : CSS cohérent, pas de bidouillage

#### Communication facilitée

**Avec les testeurs** : Prototype cliquable > longs discours  
**Avec moi-même** : Specs claires, pas d'improvisation
