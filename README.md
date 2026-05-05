# Todo-react
# 📝 TP React : To-Do List

## 🚀 Présentation du Projet
Ce projet est ma première application réalisée avec **React** et **Vite**. L'objectif était de mettre en pratique les concepts fondamentaux de React à travers la création d'une liste de tâches interactive.

Cette application permet de :
- Ajouter des tâches via un formulaire.
- Marquer une tâche comme terminée (changement de couleur et texte barré).
- Supprimer des tâches de la liste.
- Suivre un compteur indépendant (Get Started).

## 🧠 Concepts React Appris
Durant ce TP, j'ai implémenté les notions suivantes issues du cours :

1.  **Les Composants** : Découpage de l'interface en blocs réutilisables (`TodoForm`, `TodoList`, `TodoItem`).
2.  **Les Props** : Passage de données et de fonctions des composants parents vers les composants enfants.
3.  **Le State (useState)** : Gestion de l'état local (pour les inputs) et de l'état global (pour la liste des tâches).
4.  **Lifting State Up** : Remontée de l'état dans `App.jsx` pour permettre la communication entre le formulaire et la liste.
5.  **Rendu de listes** : Utilisation de `.map()` avec des `key` uniques pour afficher dynamiquement les tâches.
6.  **Rendu conditionnel** : Modification du style CSS en fonction du statut `completed` d'une tâche.


src/
├── assets/          # Images et logos
├── components/      # Composants réutilisables
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
├── App.jsx          # Composant principal (Gestion du State)
├── main.jsx         # Point d'entrée React
└── App.css          # Styles de l'application

✒️ Auteur
Lucas - Étudiant en Bachelor Conception développement & data IA à l'ESTIAM 
