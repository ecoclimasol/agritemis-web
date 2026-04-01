# Guide de publication — Blog AGRITEMIS

## Vue d'ensemble

Le blog AGRITEMIS fonctionne avec des fichiers Markdown (`.mdx`). Chaque article est un fichier texte que tu peux créer avec Claude ou n'importe quel éditeur de texte. Pas besoin de connaissances techniques.

---

## Structure des dossiers

```
content/blog/
  fr/   ← articles en français
  en/   ← articles en anglais
  es/   ← articles en espagnol
  pt/   ← articles en portugais

public/blog/   ← images des articles
```

---

## Comment creer un article

### 1. Creer le fichier

Creer un fichier dans `content/blog/fr/` avec un nom en minuscules, sans accents, mots separes par des tirets :

```
content/blog/fr/mon-titre-d-article.mdx
```

> Le nom du fichier devient l'URL : `/fr/blog/mon-titre-d-article`

### 2. Ajouter l'en-tete (frontmatter)

Chaque article commence par un bloc entre `---` qui contient les metadonnees :

```yaml
---
title: "Le titre de l'article"
description: "Un resume de 1-2 phrases qui apparait dans la liste et dans Google."
date: "2026-04-01"
author: "AGRITEMIS"
image: "/blog/nom-de-image.jpg"
tags: ["viticulture", "VitiScore", "reglementation"]
---
```

| Champ | Obligatoire | Description |
|-------|:-----------:|-------------|
| title | oui | Titre affiché sur la page et dans Google |
| description | oui | Résumé court (important pour le SEO) |
| date | oui | Date de publication au format AAAA-MM-JJ |
| author | non | Auteur (par défaut : "AGRITEMIS") |
| image | non | Chemin vers l'image d'illustration (voir section Images) |
| tags | non | Liste de mots-clés entre crochets |

### 3. Ecrire le contenu

Apres le bloc `---`, ecris le contenu en Markdown :

```markdown
## Titre de section

Un paragraphe de texte normal. Tu peux mettre du **gras** et de l'*italique*.

### Sous-titre

- Element de liste 1
- Element de liste 2
- Element de liste 3

1. Liste numerotee
2. Deuxieme element

> Citation ou mise en avant d'un point important

[Texte du lien](https://exemple.com)

![Description de l'image](/blog/mon-image.jpg)
```

#### Aide-memoire Markdown

| Tu veux... | Tu ecris... |
|-----------|------------|
| Titre principal | `## Mon titre` |
| Sous-titre | `### Mon sous-titre` |
| Gras | `**texte en gras**` |
| Italique | `*texte en italique*` |
| Liste a puces | `- element` |
| Liste numerotee | `1. element` |
| Lien | `[texte](url)` |
| Image | `![description](/blog/image.jpg)` |
| Citation | `> texte cite` |
| Separation | `---` |

### 4. Ajouter des images

1. Place l'image dans le dossier `public/blog/`
2. Reference-la dans l'article avec `/blog/nom-du-fichier.jpg`

**Bonnes pratiques pour les images :**
- Format : JPG ou WebP (plus leger)
- Largeur recommandee : 1200px
- Poids : moins de 500 Ko si possible
- Nom de fichier : descriptif, en minuscules, sans espaces (`impact-pesticide-eau.jpg`)

---

## Exemple d'article complet

Fichier : `content/blog/fr/csrd-et-agriculture.mdx`

```markdown
---
title: "CSRD et agriculture : ce que change la directive pour les filieres"
description: "La directive CSRD impose de nouvelles obligations de reporting environnemental. Decouvrez comment les indicateurs AGRITEMIS permettent d'y repondre."
date: "2026-04-15"
author: "AGRITEMIS"
image: "/blog/csrd-agriculture.jpg"
tags: ["CSRD", "reglementation", "reporting"]
---

## Qu'est-ce que la CSRD ?

La Corporate Sustainability Reporting Directive (CSRD) est une directive europeenne qui impose aux grandes entreprises de publier des rapports detailles sur leurs impacts environnementaux.

## Ce que ca change pour l'agriculture

Les filieres agricoles sont directement concernees, notamment sur :

- **L'impact sur les ressources en eau** : quantifier la pression pesticide sur les bassins versants
- **La biodiversite** : mesurer l'effet des pratiques sur les ecosystemes
- **La sante humaine** : documenter les risques pour les travailleurs et les riverains

## Comment AGRITEMIS vous accompagne

Nos indicateurs (ARI, CRI, CORI, BRI, WARI) fournissent les **donnees structurees et verificables** exigees par la CSRD.

![Schema du reporting CSRD avec AGRITEMIS](/blog/schema-csrd-agritemis.jpg)

Le WaterScore et le VitiScore s'integrent dans une architecture bottom-up qui garantit la tracabilite de chaque KPI, de la parcelle au groupe.

> Chaque indicateur agrege est tracable jusqu'a sa source — un avantage decisif pour les auditeurs.

## Pour aller plus loin

Contactez nos experts pour decouvrir comment integrer les indicateurs AGRITEMIS dans votre reporting CSRD.
```

---

## Traduire un article

Pour publier dans une autre langue, cree le meme fichier (meme nom) dans le dossier de la langue :

```
content/blog/fr/csrd-et-agriculture.mdx   ← original
content/blog/en/csrd-et-agriculture.mdx   ← traduction anglaise
content/blog/es/csrd-et-agriculture.mdx   ← traduction espagnole
content/blog/pt/csrd-et-agriculture.mdx   ← traduction portugaise
```

> Le contenu du frontmatter (title, description) doit aussi etre traduit.

---

## Utiliser Claude pour creer un article

Tu peux demander a Claude de generer un article au bon format. Voici un prompt type :

```
Cree un article de blog pour le site AGRITEMIS au format MDX.

Sujet : [ton sujet]

Regles :
- Frontmatter avec title, description, date (aujourd'hui), author "AGRITEMIS", tags
- Le nom du fichier doit etre en minuscules, sans accents, mots separes par des tirets
- Utilise des titres ## et ### pour structurer
- Integre des listes a puces pour les points cles
- Mentionne les indicateurs AGRITEMIS (ARI, CRI, CORI, BRI, WARI) quand c'est pertinent
- Mentionne VitiScore et/ou WaterScore si c'est lie
- Longueur : environ 800-1200 mots
- Ton : professionnel mais accessible, scientifique sans etre jargonneux
- Termine par un appel a l'action vers le formulaire de contact

Genere aussi les versions EN, ES et PT.
```

---

## Checklist avant publication

- [ ] Le fichier est dans `content/blog/fr/` (et les traductions dans les autres dossiers)
- [ ] Le nom du fichier est en minuscules, sans accents, avec des tirets
- [ ] Le frontmatter contient au minimum : title, description, date
- [ ] La date est au format AAAA-MM-JJ
- [ ] Les images sont dans `public/blog/` et font moins de 500 Ko
- [ ] La description fait 1-2 phrases (importante pour Google)
- [ ] Les tags sont pertinents et coherents avec les autres articles

---

## Idees de sujets pour les premiers articles

1. **Comment mesurer l'empreinte phytosanitaire d'un vignoble** (deja cree)
2. CSRD et agriculture : ce que change la directive pour les filieres
3. PFAS dans l'agriculture : pourquoi les indicateurs doivent en tenir compte
4. EIQ vs AGRITEMIS : comparaison des approches de mesure du risque pesticide
5. Benchmark phytosanitaire : comparer les pratiques entre regions et pays
6. Les metabolites secondaires : le risque cache des pesticides
7. WaterScore : comment proteger les ressources en eau de votre exploitation
8. SDHI et perturbateurs endocriniens : ce que mesurent nos indicateurs
9. Transition agroecologique : de l'intuition a la donnee
10. Maladies professionnelles agricoles : mesurer pour proteger
