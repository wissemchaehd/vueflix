# Vueflix, application de gestion et de notation de films.

### Un projet Vue buildé

Vous êtes un grand adepte de cinéma qui aime partager ses derniers coups de coeurs avec ses amis. Au fil des années, vous vous rendez compte que la liste de films est longue et difficile à retenir. Vous franchissez le cap et décidez de créer une application pour archiver le large catalogue de films qui vous avez visionné.

Voici la liste de besoins que vous avez noté :

- lister les films vus
- donner une note et un avis à chaque film
- trier les films par catégories
- ajouter un film à la liste
- supprimer un film de la liste

### ⚠️ Modalités de rendu ⚠️

Tout votre travail doit être fait en utilisant **Git**. Votre avancement devra être présenté par un commit minimum par exercice, avec un message reprenant l'intitulé de l'exercice. 

*Les fichiers readme sont [au format Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Pour chaque exercice que vous compléterez, cochez la case dans le sujet en rajoutant une croix.* 

Vous travaillerez sur une branche par fonctionnalité, en respectant le [Feature Branch Workflow](https://www.atlassian.com/fr/git/tutorials/comparing-workflows/feature-branch-workflow). 

- Tous les commits doivent etre fait sur une branche dédiée à la fonctionnalité, par ex. `create-project`, `list-movies`, `add-gender-filter`, `movie-add-form` ... Une grande fonctionnalité peut par exemple être un chapitre de ce sujet.
- Une fois poussés, les commits doivent être présentés dans une Pull Request.
- Chaque Pull Request doit être lue et validée, puis mergée par un **autre membre** de votre ilôt.

## 0. Préparation du projet
### Mettre en place son repo Git 
- [ ] Forkez ce repo, et clonez votre fork
- [ ] Créez une branche `mise-en-place-git` depuis `main`.
- [ ] [Commitez la complétion](https://user-images.githubusercontent.com/632197/42737442-a94e7534-8873-11e8-82fa-75d178493074.png) des 3 étapes de cet exercice sur `mise-en-place-git`, puis ouvrez une Pull Request vers `main` sur votre repo.

## 1. Initialiser une application Vue.

##### Outil en ligne de commande Vue : le Vue CLI

Installez l'outil `vue-cli` avec NPM :

```bash
npm install -g @vue/cli
```

Vérifier que la version de Vue CLI installée est au moins la version 4 :

```bash
vue --version
```

Vue CLI vous sera utile pour créer vos projets Vue.js. Il vous permettra également de démarrer un serveur de développement pour tester vos projets en local.

##### Création de projet

Pour créer votre nouveau projet **vueflix** :

```bash
vue create vueflix
```

Si des questions vous sont posées, choisissez les options par défaut, Vue 2.
![image](https://user-images.githubusercontent.com/632197/114316682-d6273400-9b04-11eb-85f0-a9f68a725115.png)

Suivez ensuite les instructions contenues dans le fichier `README.md`, et lancez le projet.

## 2. Écran d'accueil.

Vue-CLI nous a généré un projet avec deux composants : `App.vue` et `HelloWorld.vue`. Pour le moment, restons dans App.vue uniquement. C'est ici qu'on ajoutera de la `data` pour notre application, dans la partie script, dans l'export, comme cela :

```js
export default {
  name: "App",
  data: function () {
    return {
      title: "Bienvenue sur VueFlix !",
      // On peut rajouter nos films ici
    };
  },
};
```

_Notez que `data` est maintenant devenu une fonction, c'est nécessaire à ce stade_

Dans un premier temps, nous voulons changer l'écran d'accueil, ce dernier vous permettra de consulter la liste de films.

1. Chargez dans la `data` de votre composant App quelques films sous le format suivant :

```js
{
  id: 1
  title: "Parasite",
  genres: ["comedy", "drama", "thriller"],
  rating: 9,
  review: "With an insightful and searing exploration of human behavior, ‘Parasite’ is a masterfully crafted film that is a definite must watch.",
  description: "Parasite (Korean: 기생충; RR: Gisaengchoong) is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won."
}
```

2. Listez ces films dans la vue principale, sans afficher leur description ni l'avis.
3. Affichez au dessus le compte du nombre de films affichés.

_Notre page présente maintenant une liste synthétique des films._

4. Ajoutez un formulaire d'ajout de film à la liste.

**Important : comment copier des objets en JS**
https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/

5. Créez un filtre de tri par catégorie grâce à une propriété calculée. Mettez bien à jour le compte du nombre de films affichés une fois le filtre appliqué.

## 3. Création d'un composant `Movie` pour représenter un film

1. Créez un composant `Movie` pour représenter un film unique.
2. Adaptez la liste pour afficher ce composant `Movie` autant de fois qu'il y a de films dans la data de `App`
3. Grâce aux props,

- Dans `App`, passez à chaque `Movie` la donnée qui le concerne
- Dans `Movie`, affichez cette donnée reçue.

4. Donnez une valeur par défaut aux props que `Movie` peut recevoir
5. Ajoutez une validation de type sur les props que `Movie` peut recevoir

## 4. Création d'un composant `MovieCreation` pour ajouter un film

1. Créez un composant `MovieCreation` contenant le formulaire d'ajout d'un film.
2. Passez la donnée de `App` à `MovieCreation` en props pour l'affichage

### Communication d'un composant enfant vers parent

Utilisez ces différentes techniques de communication entre ces deux composants, l'une après l'autre.
**Faites un commit séparé pour chaque technique utilisée.**

**Technique du passage de méthode en props**

1. Passez également la méthode `addMovie()` en props à `MovieCreation`
2. Appelez cette méthode depuis `MovieCreation` pour que le formulaire fonctionne.

**Technique de l'émission d'évènement par l'enfant**

1. Dans `MovieCreation`, émettez un évènement à l'envoi du formulaire.
2. Depuis `App`, écoutez cet évènement pour déclencher l'appel de méthode.

_Dans tous les cas, on évite à tout prix de modifier directement des props depuis l'enfant._

Voir sur le sujet :

- [FR] Flux de données unidirectionnel, sur la doc https://fr.vuejs.org/v2/guide/components-props.html#Flux-de-donnees-unidirectionnel
- [EN] Cet article complet https://michaelnthiessen.com/avoid-mutating-prop-directly/

**Technique de l'utilisation d'un event bus pour une émission d'évènement global**

En utilisant un Event Bus, on va pouvoir faire communiquer n'importe quels composants ensemble grâce à un unique intermédiaire, l'event bus.

1. Créez un Event Bus et utilisez le pour émettre et écouter votre évènement d'ajout au formulaire.
   Vous pouvez suivre ce tutoriel : https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus

![Schéma Event bus](./event-bus.png)

## 5. Mettre en forme efficacement

Notre application prenant forme, il est temps de se soucier de son rendu.

C'est l'occasion de découvrir SASS, un préprocesseur CSS. Comme un framework, il étend les fonctionnalités de CSS pour nous aider à écrire du style efficacement.

Site officiel: https://sass-lang.com/guide

Tester SASS: https://www.sassmeister.com/

Notre projet étant compilé, on peut utiliser SASS à condition de charger son loader:

```bash
npm install --save-dev sass sass-loader@10
```

Ajoutez `lang="scss"` aux balises de style quand vous voulez écrire du SASS.

```html
<style lang="scss">
  // On peut maintenant utiliser Sass !
</style>
```

1. Choisissez une couleur principale et [créez lui une variable](https://sass-lang.com/guide#topic-2).
2. Créez une seconde variable contenant un version assombrie de votre couleur principale [grâce à la fonction `darken()`](https://sass-lang.com/documentation/modules/color#darken).
3. Définissez un style de bouton qui a comme couleur de fond votre couleur principale, et au survol la version assombrie. Utilise le nesting et [le sélecteur parent](https://sass-lang.com/documentation/style-rules/parent-selector) pour simplifier la déclaration
4. Mettez en forme le composant `Movie` selon vos goûts, grâce à Sass.

## 6. Utiliser un composant externe

Pour renseigner la note d'un film dans `MovieCreation`, on se rend compte que la saisie utilisateur pourrait être facilitée en utilisant un contrôle "Star rating".
En cherchant ce type d'élément d'interface adapté pour Vue, on découvre le framework Material Design **Vuetify**, qui contient un composant de Star Rating.

- 1. Installez le framework dans votre projet grâce à la commande dans le CLI, et **choisir le preset Prototype (rapid development)**.
     https://vuetifyjs.com/en/getting-started/quick-start/#vue-cli-install
![image](https://user-images.githubusercontent.com/632197/114319012-e0026480-9b0f-11eb-8ee0-122f0b117a62.png)


- 2. Dans `MovieCreation`, appelez le composant `v-rating` en lui passant bien votre donnée.
     https://vuetifyjs.com/en/components/ratings/
- 2. Dans `Movie`, appelez le composant `v-rating` en mode non éditable, pour afficher la note uniquement.

En passant par vue-cli pour l'installation, Vuetify sera installé dans l'app entière, en global.

Envie de charger les composants de Vuetify manuellement, un à un ? C'est aussi possible, voir https://vuetifyjs.com/en/features/treeshaking/#manually-importing

## 7. Requêter une API pour proposer une auto-suggestion de film

Pour facilier l'ajout de film à notre liste, on veut maintenant proposer un autocomplete depuis le champ de saisie du titre. Dans cette liste de suggestion, le clic sur un film remplira rapidement les champs du formulaire d'ajout.

Le site www.themoviedb.org propose un annuaire très complet de films, et met également sa donnée à notre disposition sous forme d'une API.

#### Doc de l'API : Utiliser la recherche

https://developers.themoviedb.org/3/search/search-movies
Sur cette page, on nous explique comment faire une recherche sur la base de données de TMDB par l'API.

Pour cette API, une clé API est nécessaire, j'en ai créé une pour vous :

Clé API : `80d0dd074cbffeb2db4b0123882c7f44`

On peut donc tester un appel à l'API en navigant avec le navigateur à cette adresse, et le retour de l'API s'affichera en clair dans le corps de la page.

Ex. requête
https://api.themoviedb.org/3/search/movie?api_key=80d0dd074cbffeb2db4b0123882c7f44&query=%22big%22

Ici, on a utilisé le paramètre `query` pour renseigner notre requête.

#### Consignes

Pour les consignes suivantes, nous allons avoir besoin de la librairie Axios qui gèrera les appels à l'API.

- 1. Ajouter une méthode `getResult` à votre composant `MovieCreation`. Câblez cette méthode à un input sur lequel on voudra ajouter l'autocomplete : à chaque modification de la valeur de cet input, `getResult` sera appelé.
- 2. Dans `getResult` maintenant, rajoutez le requêtage de l'API pour le texte entré. Il faudra pour cela charger la librairie axios dans ce composant.
- 3. Stockez le retour de l'API dans la data du composant, sous forme d'array de films.
- 4. Affichez avec une boucle l'ensemble de ces films dans l'auto-suggestion
- 5. Pour rendre cette liste utile, utilisez un méthode qui permettra d'écrire dans notre formulaire d'ajout les caractéristiques de ce film au clic sur un des résultats.
- 6. Bonus: Trouvez sur la doc de TMDB un endpoint pour récupérer les genres des films. Utilisez cette information pour ajouter les genres du film à votre formulaire.

##### Ressources

Axios nous permet de manipuler les retours de l'API sous forme de promesses. Pour traiter ces retours efficacement, on doit pouvoir réagir aux différentes valeurs des promesses.

Fonctionnement d'une promesse

```js
p.then(siTenue);
p.then(siTenue, siRejetée);

p.then(
  (valeur) => {
    // Promesse tenue
  },
  (raison) => {
    // Rejet de la promesse
  }
);
```

Requêtage de l'API grâce à axios : `axios.get` retourne une promesse

```js
axios.get(URL_DE_LAPI).then((response) => {
  TRAITEMENT_DE_LA_REPONSE;
});
```

Présentation des Promises ( then et catch ):
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise

Guide sur les Promises :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses

Utiliser async/await, les fonctions asynchrones de ES2017 : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function

## 8. Router : afficher les détails d'un film dans une page en ajoutant manuellement le routeur

Depuis notre liste, on souhaite pouvoir afficher le détail d'un film pour voir sa description et l'avis que vous lui avez donné. Pour cela on souhaite pouvoir naviguer sur une page dédiée, et on a donc besoin d'ajouter un router à notre application.

Cela tombe bien, Vue a un routeur tout prêt que nous allons utiliser, [vue-router](https://router.vuejs.org/fr/)

Pour l'utilisation, nous allons avoir besoin des deux composants fournis par Vue Router :

- `<router-view>` affiche le contenu de la route correspondant au composant spécifié dans la déclaration.
- `<router-link>` permet de passer d'une page à l'autre.

- 1. Installez la librarie `vue-router`. Définissez ensuite une table de router, une instance du plugin que vous importerez dans votre fichier `main.js` pour l'ajouter à l'instance de Vue de votre application. Alternativement, utilisez le `vue-cli` pour l'installation.
- 2. Déclarez deux routes simple :
  - une `/` qui affiche un message d'accueil.
  - une `/admin` qui affiche la liste des films avec le formulaire d'ajout.
- 3. Affichez un menu de navigation sur ces deux pages pour passer de l'une à l'autre.
- 4. Créez une page pour afficher un film unique. Pour cela définissez la route `/movie/<id_du_film>` qui affichera un film en pleine page, donc notre composant `Movie`. Ajoutez également un lien depuis la liste de films qui amène à cette page de détail.
- 5. Sur `/`, affichez une simple liste des films, la version publique.
     Pour chacune des routes, assurez vous d'isoler le code dans des composants appelés plusieurs fois si nécessaire, mais sans dupliquer de code source.

##### Ressources

https://vueschool.io/courses/vue-router-for-everyone
Les 3 lecons du chapitre "Introduction to Vue Router"

## 9. Déploiement : publier l'application
