# Portfolio - Alexandre Gleizes (BTS SIO)
### Ce dépôt contient le code source de mon portfolio professionnel, développé dans le cadre de ma deuxième année de BTS SIO (Services Informatiques aux Organisations).

Lien de déploiement : https://flyscream.github.io/Portfolio-Angular/

## Présentation du projet
Cette application web a été conçue pour centraliser mon parcours académique, mes compétences techniques ainsi que les projets réalisés lors de mon cursus en BUT Informatique et en BTS SIO. L'objectif est de fournir un support numérique clair pour les épreuves de certification et les recherches de stage ou d'emploi.

Technologies exploitées
Framework : Angular 18+

---


Framework CSS : Tailwind CSS

Hébergement : GitHub Pages

### Installation et environnement de développement
Pour cloner et exécuter ce projet localement, suivez les étapes suivantes :

Clonage du dépôt

```Bash
git clone https://github.com/Flyscream/Portfolio-Angular.git
```
### Installation des dépendances

```Bash
npm install
```
### Lancement du serveur de développement

```Bash
ng serve
```

L'application est accessible à l'adresse suivante : http://localhost:4200/.


---

### Gestion des branches et déploiement
Ce projet utilise une architecture à deux branches pour séparer le développement de la mise en production :


#### Branche main : Branche de développement contenant l'intégralité du code source (Typescript, HTML, CSS). Toute modification doit être poussée sur cette branche.



#### Branche gh-pages : Branche de production générée automatiquement. Elle contient uniquement les artefacts de compilation (fichiers statiques) destinés à être servis par GitHub Pages.

Procédure de mise à jour du site
Pour déployer les dernières modifications effectuées sur la branche main, les commandes suivantes sont exécutées :

Compilation du projet (Build) Génère les fichiers statiques dans le répertoire dist/ en configurant la racine des liens pour GitHub Pages.

```Bash
ng build --base-href /Portfolio-Angular/
```
Déploiement Utilise l'utilitaire angular-cli-ghpages pour transférer le contenu du build vers la branche de destination.




```Bash
npx angular-cli-ghpages --dir=dist/projet-portfolio/browser
```
Architecture du Portfolio



