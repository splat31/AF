# TP 3 — Composants Vue.js (M1 SDL/IHM)

## Identification

- Nom : Nguyen
- Prénom : Bastien
- Groupe de TP : A52

## Prérequis

- Node.js **24 LTS recommandé** et npm ; une version de Node.js >= 22.12 est techniquement compatible.
- IntelliJ IDEA avec la prise en charge de Vue.js (ou autre IDE adapté).
- Le **sujet PDF/Word fourni sur Moodle** décrit les exercices 0 à 3.

Ce projet utilise Vue 3 (Options API), Vite 8 et Bootstrap 5 (CSS uniquement).
Les sections `TODO` sont intentionnelles : **le TP n'est pas corrigé**.

## Démarrer

1. Décompresser l'archive du starter.
2. Ouvrir le dossier du projet dans l'IDE.
3. Ouvrir un terminal à la racine du projet (là où se trouve `package.json`).
4. Exécuter :

```sh
node --version
npm --version
npm install
npm run dev
```

5. Ouvrir l'URL indiquée dans le terminal (habituellement `http://localhost:5173/`).

Vite recharge la page à chaud lors des changements, sans relancer manuellement le serveur.
Arrêter le serveur dans le terminal avec `Ctrl+C`.

## Vérifier la construction (facultatif)

```sh
npm run build
```

Les fichiers générés sont placés dans `dist/`.

## Rendu sur Moodle

- Compléter les trois exercices dans le code source.
- Renseigner votre nom, prénom et groupe dans ce README.
- Créer **une archive ZIP du projet** pour le dépôt Moodle.
- **Ne pas inclure** `node_modules/` et `dist/` dans votre archive.
- Inclure les sources, `index.html`, `package.json`, `vite.config.js` et ce README.

## Repères

- `index.html` : page HTML racine utilisée par Vite.
- `src/main.js` : point d'entrée JavaScript et import de Bootstrap CSS.
- `src/App.vue` : composant racine, liste des messages et sélection.
- `src/components/NewMessage.vue` : composant à développer à l'exercice 1.
- `vite.config.js` : configuration minimale de Vite et du plugin Vue.

Documentation : https://vuejs.org/guide/ et https://vite.dev/guide/
