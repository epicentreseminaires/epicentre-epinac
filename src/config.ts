// Configuration centralisée du site.
// Modifie une fois ici, ça se propage partout.

// Endpoint FormSubmit (https://formsubmit.co)
// Aucune inscription requise. Le mail de réception est mis directement dans l'URL.
//
// Première utilisation :
// 1. Le formulaire est déjà configuré pour envoyer à CONTACT_EMAIL ci-dessous.
// 2. À la 1ère soumission de formulaire (depuis le site en prod), FormSubmit envoie
//    un mail "Confirm your email" sur contact@epicentre-seminaires.fr.
// 3. Clique le lien dans ce mail pour activer la réception définitive.
// 4. Toutes les soumissions suivantes arrivent directement par mail.
//
// Bonus sécurité (à faire après confirmation) : remplacer l'email par le hash
// fourni par FormSubmit dans le mail de confirmation, pour éviter que des bots
// scrapent ton email depuis le HTML source. Le hash ressemble à "al/abcdefgh".
// Une fois obtenu, remplace `CONTACT_EMAIL` ci-dessous par cet identifiant
// (ex. FORMSUBMIT_ENDPOINT_TOKEN = 'al/abcdefgh').
export const CONTACT_EMAIL = 'contact@epicentre-seminaires.fr';
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;

// Téléphone affiché et utilisé pour les liens tel:
export const CONTACT_PHONE_DISPLAY = '07 44 98 00 15';
export const CONTACT_PHONE_HREF = 'tel:+33744980015';

// URL canonique du site (utilisée pour SEO, og:image, sitemap)
export const SITE_URL = 'https://epicentre-seminaires.fr';
