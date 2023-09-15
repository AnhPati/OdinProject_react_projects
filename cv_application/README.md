# Générateur de CV

Une application React qui génère un CV à partir des données renseignés par l'utilisateur.

![Vue du mode edition](./src/assets/img/cv_generator-editmode.png)

## Outils

- JSX
- CSS
- Materialize - Framework CSS
- React - Librairie Javascript
- ❤️

## Apprentissage

C'est un projet React somme toute assez simple. Il a fallu tout d'abord établir la structure et le rendu entre le mode "édition" et le mode "à imprimer".

Comme le projet est rattaché à la section "States and Effects" du cursus React de [theodinproject](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/react#states-and-effects), j'ai pris le partie de n'utiliser que ce qui a été vu dans le cours jusqu'à maintenant.

J'ai particulièrement axé mes efforts sur la structure de l'application, la gestion des états et des accessoires, et négligé l'aspect visuel en utilisant Materialize et un poil de CSS. Je reviendrais surement sur le projet plus tard, ça me laisse des axes d'amélioration.

## Caractéristiques

Tous les composants gèrent eux même leur affichage en mode Edition ou Print selon un état qui sauvegarde le mode en cours.
> ```js
const [editionMode, setEditionMode] = useState(false)```

 - ### Le profil
 permet de renseigner toutes les informations basiques (nom, prénom, adresse, ...), mais également le titre du CV qui sera affiché à la place du nom de l'application en mode Print. Une photo est également chargeable.

 ![Vue du profil en mode edition](./src/assets/img/cv_generator-profil.png)

 Les états sont gérés dans le composant **<App/>** et transmis par accessoires jusqu'au composant **<Profil/>**. Ce dernier possède ses propres états pour la gestion de l'évènement de changement