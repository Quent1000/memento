# 🎥 MEMENTO - Votre Capsule Temporelle en Vidéo

MEMENTO est une plateforme web moderne qui permet de capturer et préserver les souvenirs précieux de vos proches sous forme de capsules temporelles vidéo professionnelles.

## 🚀 Technologies Utilisées

- **Framework**: [Next.js 14](https://nextjs.org/) avec App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components inspirés de [shadcn/ui](https://ui.shadcn.com/)
- **Formulaires**: [React Hook Form](https://react-hook-form.com/) avec [Zod](https://zod.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 🌟 Fonctionnalités

- Design responsive et moderne
- Mode sombre/clair
- Animations fluides et performantes
- Formulaire de contact avec validation
- Optimisation SEO
- Optimisation des images
- Support multilingue (FR)

## 📁 Structure du Projet

```
memento/
├── app/                    # App Router de Next.js
│   ├── prestations/       # Page des prestations
│   ├── contact/           # Page de contact
│   └── layout.tsx         # Layout principal
├── components/            # Composants React réutilisables
│   ├── layout/           # Composants de mise en page
│   ├── sections/         # Sections de pages
│   └── ui/              # Composants UI réutilisables
├── lib/                  # Utilitaires et configurations
├── public/              # Assets statiques
└── styles/              # Styles globaux
```

## 🛠️ Installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/memento.git
cd memento
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run start` - Lance la version de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run format` - Formate le code avec Prettier

## 🌐 Déploiement

Le projet est optimisé pour être déployé sur [Vercel](https://vercel.com). Pour déployer :

1. Créez un compte sur Vercel
2. Importez votre repository GitHub
3. Vercel détectera automatiquement qu'il s'agit d'un projet Next.js
4. Cliquez sur "Deploy"

## 🎨 Personnalisation

### Thème

Les couleurs principales peuvent être modifiées dans `tailwind.config.js` :

```js
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...}
    }
  }
}
```

### Contenu

Le contenu principal peut être modifié dans les fichiers correspondants :

- Textes et images : `/app/**/page.tsx`
- Composants réutilisables : `/components/`
- Assets : `/public/`

## 📈 Analytics

Le projet utilise Vercel Analytics. Pour voir les statistiques :

1. Connectez-vous à votre dashboard Vercel
2. Sélectionnez votre projet
3. Cliquez sur l'onglet "Analytics"

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Contact

Gonzague Suter - info@polymento.fr

Lien du projet : [https://github.com/votre-username/memento](https://github.com/votre-username/memento)
