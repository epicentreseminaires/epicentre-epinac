# Domaine d'Épinac — Mini-site

Site dédié au **Domaine d'Épinac**, lieu d'événement plein air en Bourgogne sud (Saône-et-Loire). Déployé en sous-domaine de epicentre-seminaires.fr.

- **URL prod** : https://epinac.epicentre-seminaires.fr
- **Stack** : Astro 5 + Tailwind 3 + GitHub Pages
- **Repo séparé du site agence** Plaine de l'Ain (epicentre-seminaires.fr)

## Stack & arborescence

```
src/
  pages/
    index.astro          → /
    le-domaine.astro     → /le-domaine/
    productions.astro    → /productions/
    contact.astro        → /contact/
    [slug].astro         → /seminaire-autun/, /seminaire-depuis-lyon/, etc.
    merci.astro          → /merci/  (noindex)
  content/
    lieux/               → 8 fichiers .md (autun, beaune, le-creusot, depuis-dijon/geneve/lyon/macon/paris)
  components/
    Header, Footer, Logo, Base, BeforeAfter3D, Breadcrumb, FAQ, NearbyLinks, etc.
public/
  CNAME                  → epinac.epicentre-seminaires.fr
  robots.txt
  favicon.svg
  images/                → logos
```

## Développement local

```bash
npm install              # installer les dépendances
npm run dev              # serveur de dev sur http://localhost:4321
npm run build            # build prod dans dist/
npm run preview          # tester le build local
```

## Déploiement GitHub Pages — Étapes pour Morgan

### 1. Créer le repo GitHub

```bash
cd /Users/morganspirli/Desktop/epicentre-epinac
git init
git add .
git commit -m "init: mini-site Domaine d'Épinac"
```

Puis, sur GitHub :
1. Créer un nouveau repo **public** nommé `epicentre-epinac` (ou autre nom)
2. Ajouter le remote et pousser :
   ```bash
   git remote add origin https://github.com/epicentreseminaires/epicentre-epinac.git
   git branch -M main
   git push -u origin main
   ```

### 2. Activer GitHub Pages

Dans le repo GitHub fraîchement créé :
1. **Settings → Pages**
2. Source : **GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` se lance automatiquement à chaque push sur `main` (~2 min).

### 3. Configurer le DNS chez ton registrar

Chez le registrar de `epicentre-seminaires.fr` (OVH, Gandi, GoDaddy, etc.), ajouter un enregistrement **CNAME** :

```
Type    : CNAME
Nom     : epinac
Cible   : epicentreseminaires.github.io.
TTL     : 3600 (ou défaut)
```

⚠️ Le **point final** après `.github.io` est important sur certains registrars (OVH notamment).

### 4. Vérifier le custom domain dans GitHub

Dans **Settings → Pages** du repo `epicentre-epinac` :
1. Custom domain : `epinac.epicentre-seminaires.fr`
2. Cocher **Enforce HTTPS** dès que possible (peut prendre quelques minutes après propagation DNS)

### 5. Vérification

- Propagation DNS : 5 min à quelques heures selon ton registrar
- Tester `https://epinac.epicentre-seminaires.fr/` une fois propagé
- Vérifier `https://epinac.epicentre-seminaires.fr/sitemap-index.xml` pour le SEO
- Soumettre le sitemap à **Google Search Console** (compte distinct du site agence)

## Mises à jour

Tout commit sur `main` redéploie automatiquement le site (workflow GitHub Actions).

## Lien avec le site agence

Le site agence (epicentre-seminaires.fr) ne contient plus aucune mention du Domaine d'Épinac. Les anciens liens `/epinac/*` redirigent vers ce sous-domaine pour préserver le SEO acquis.

Inversement, ce mini-site ne renvoie pas vers epicentre-seminaires.fr (séparation totale conforme à la stratégie "deux sites cousins, audiences distinctes").

## TODO post-déploiement

- [ ] Repositionnement éditorial outdoor (attente avis mère sur positionnement, périodes, packagé/nu)
- [ ] Photos réelles du domaine (remplacer placeholders Unsplash)
- [ ] Nom officiel du lieu si défini
- [ ] Soumettre sitemap dans Google Search Console (compte dédié au sous-domaine)
- [ ] Plausible Analytics avec instance dédiée si voulu
