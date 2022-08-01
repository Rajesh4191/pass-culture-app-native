export const categoryIdMappingSnap = {
  ABO_BIBLIOTHEQUE: 'LIVRE',
  ABO_CONCERT: 'MUSIQUE_LIVE',
  ABO_JEU_VIDEO: 'JEU',
  ABO_LIVRE_NUMERIQUE: 'LIVRE',
  ABO_LUDOTHEQUE: 'JEU',
  ABO_MEDIATHEQUE: 'FILM',
  ABO_MUSEE: 'MUSEE',
  ABO_PLATEFORME_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  ABO_PLATEFORME_VIDEO: 'FILM',
  ABO_PRATIQUE_ART: 'PRATIQUE_ART',
  ABO_PRESSE_EN_LIGNE: 'MEDIA',
  ABO_SPECTACLE: 'SPECTACLE',
  ACHAT_INSTRUMENT: 'INSTRUMENT',
  ACTIVATION_EVENT: 'TECHNIQUE',
  ACTIVATION_THING: 'TECHNIQUE',
  APP_CULTURELLE: 'MEDIA',
  ATELIER_PRATIQUE_ART: 'PRATIQUE_ART',
  AUTRE_SUPPORT_NUMERIQUE: 'FILM',
  BON_ACHAT_INSTRUMENT: 'INSTRUMENT',
  CAPTATION_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  CARTE_CINE_ILLIMITE: 'CINEMA',
  CARTE_CINE_MULTISEANCES: 'CINEMA',
  CARTE_JEUNES: 'CARTE_JEUNES',
  CARTE_MUSEE: 'MUSEE',
  CINE_PLEIN_AIR: 'CINEMA',
  CINE_VENTE_DISTANCE: 'CINEMA',
  CONCERT: 'MUSIQUE_LIVE',
  CONCOURS: 'JEU',
  CONFERENCE: 'CONFERENCE',
  DECOUVERTE_METIERS: 'CONFERENCE',
  ESCAPE_GAME: 'JEU',
  EVENEMENT_CINE: 'CINEMA',
  EVENEMENT_JEU: 'JEU',
  EVENEMENT_MUSIQUE: 'MUSIQUE_LIVE',
  EVENEMENT_PATRIMOINE: 'MUSEE',
  FESTIVAL_CINE: 'CINEMA',
  FESTIVAL_LIVRE: 'LIVRE',
  FESTIVAL_MUSIQUE: 'MUSIQUE_LIVE',
  FESTIVAL_SPECTACLE: 'SPECTACLE',
  JEU_EN_LIGNE: 'JEU',
  JEU_SUPPORT_PHYSIQUE: 'TECHNIQUE',
  LIVESTREAM_EVENEMENT: 'SPECTACLE',
  LIVESTREAM_MUSIQUE: 'MUSIQUE_LIVE',
  LIVESTREAM_PRATIQUE_ARTISTIQUE: 'PRATIQUE_ART',
  LIVRE_AUDIO_PHYSIQUE: 'LIVRE',
  LIVRE_NUMERIQUE: 'LIVRE',
  LIVRE_PAPIER: 'LIVRE',
  LOCATION_INSTRUMENT: 'INSTRUMENT',
  MATERIEL_ART_CREATIF: 'BEAUX_ARTS',
  MUSEE_VENTE_DISTANCE: 'MUSEE',
  OEUVRE_ART: 'TECHNIQUE',
  PARTITION: 'INSTRUMENT',
  PLATEFORME_PRATIQUE_ARTISTIQUE: 'PRATIQUE_ART',
  PODCAST: 'MEDIA',
  PRATIQUE_ART_VENTE_DISTANCE: 'PRATIQUE_ART',
  RENCONTRE: 'CONFERENCE',
  RENCONTRE_EN_LIGNE: 'CONFERENCE',
  RENCONTRE_JEU: 'JEU',
  SALON: 'CONFERENCE',
  SEANCE_CINE: 'CINEMA',
  SEANCE_ESSAI_PRATIQUE_ART: 'PRATIQUE_ART',
  SPECTACLE_ENREGISTRE: 'SPECTACLE',
  SPECTACLE_REPRESENTATION: 'SPECTACLE',
  SPECTACLE_VENTE_DISTANCE: 'SPECTACLE',
  SUPPORT_PHYSIQUE_FILM: 'FILM',
  SUPPORT_PHYSIQUE_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  TELECHARGEMENT_LIVRE_AUDIO: 'LIVRE',
  TELECHARGEMENT_MUSIQUE: 'MUSIQUE_ENREGISTREE',
  VISITE: 'MUSEE',
  VISITE_GUIDEE: 'MUSEE',
  VISITE_VIRTUELLE: 'MUSEE',
  VOD: 'FILM',
}

export const subcategoriesMappingSnap = {
  ABO_BIBLIOTHEQUE: {
    appLabel: 'Abonnement (bibliothèques, médiathèques...)',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRE',
  },
  ABO_CONCERT: {
    appLabel: 'Abonnement concert',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  ABO_JEU_VIDEO: {
    appLabel: 'Abonnement jeux vidéos',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'JEU',
  },
  ABO_LIVRE_NUMERIQUE: {
    appLabel: 'Abonnement livres numériques',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'LIVRE',
  },
  ABO_LUDOTHEQUE: {
    appLabel: 'Abonnement ludothèque',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEU',
  },
  ABO_MEDIATHEQUE: {
    appLabel: 'Abonnement médiathèque',
    categoryId: 'FILM',
    homepageLabelName: 'FILM',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILM',
  },
  ABO_MUSEE: {
    appLabel: 'Entrée libre ou abonnement musée',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'VISITE',
  },
  ABO_PLATEFORME_MUSIQUE: {
    appLabel: 'Abonnement plateforme musicale',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MUSIQUE',
  },
  ABO_PLATEFORME_VIDEO: {
    appLabel: 'Abonnement plateforme streaming',
    categoryId: 'FILM',
    homepageLabelName: 'FILM',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILM',
  },
  ABO_PRATIQUE_ART: {
    appLabel: 'Abonnement pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'COURS',
  },
  ABO_PRESSE_EN_LIGNE: {
    appLabel: 'Abonnement presse en ligne',
    categoryId: 'MEDIA',
    homepageLabelName: 'PRESSE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'PRESSE',
  },
  ABO_SPECTACLE: {
    appLabel: 'Abonnement spectacle',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLE',
  },
  ACHAT_INSTRUMENT: {
    appLabel: 'Achat instrument',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENT',
  },
  ACTIVATION_EVENT: {
    appLabel: "Catégorie technique d'événement d'activation ",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  ACTIVATION_THING: {
    appLabel: "Catégorie technique de thing d'activation",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  APP_CULTURELLE: {
    appLabel: 'Application culturelle',
    categoryId: 'MEDIA',
    homepageLabelName: 'PRESSE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'PRESSE',
  },
  ATELIER_PRATIQUE_ART: {
    appLabel: 'Atelier, stage de pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'COURS',
  },
  AUTRE_SUPPORT_NUMERIQUE: {
    appLabel: 'Autre support numérique',
    categoryId: 'FILM',
    homepageLabelName: 'FILM',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILM',
  },
  BON_ACHAT_INSTRUMENT: {
    appLabel: "Bon d'achat instrument",
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENT',
  },
  CAPTATION_MUSIQUE: {
    appLabel: 'Captation musicale',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  CARTE_CINE_ILLIMITE: {
    appLabel: 'Carte cinéma illimité',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  CARTE_CINE_MULTISEANCES: {
    appLabel: 'Carte cinéma multi-séances',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  CARTE_JEUNES: {
    appLabel: 'Carte jeunes',
    categoryId: 'CARTE_JEUNES',
    homepageLabelName: 'CARTE_JEUNES',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CARTE_JEUNES',
  },
  CARTE_MUSEE: {
    appLabel: 'Cartes musées, patrimoine...',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'VISITE',
  },
  CINE_PLEIN_AIR: {
    appLabel: 'Cinéma plein air',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  CINE_VENTE_DISTANCE: {
    appLabel: 'Cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'CINEMA',
  },
  CONCERT: {
    appLabel: 'Concert',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  CONCOURS: {
    appLabel: 'Concours - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEU',
  },
  CONFERENCE: {
    appLabel: 'Conférence',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'CONFERENCE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONFERENCE',
  },
  DECOUVERTE_METIERS: {
    appLabel: 'Découverte des métiers',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'CONFERENCE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONFERENCE',
  },
  ESCAPE_GAME: {
    appLabel: 'Escape game',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEU',
  },
  EVENEMENT_CINE: {
    appLabel: 'Événement cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  EVENEMENT_JEU: {
    appLabel: 'Événements - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEU',
  },
  EVENEMENT_MUSIQUE: {
    appLabel: "Autre type d'événement musical",
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  EVENEMENT_PATRIMOINE: {
    appLabel: 'Événement et atelier patrimoine',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'VISITE',
  },
  FESTIVAL_CINE: {
    appLabel: 'Festival de cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  FESTIVAL_LIVRE: {
    appLabel: 'Festival et salon du livre',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRE',
  },
  FESTIVAL_MUSIQUE: {
    appLabel: 'Festival de musique',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  FESTIVAL_SPECTACLE: {
    appLabel: 'Festival',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLE',
  },
  JEU_EN_LIGNE: {
    appLabel: 'Jeux en ligne',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'JEU',
  },
  JEU_SUPPORT_PHYSIQUE: {
    appLabel: 'Catégorie technique Jeu support physique',
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  LIVESTREAM_EVENEMENT: {
    appLabel: "Live stream d'événement",
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'SPECTACLE',
  },
  LIVESTREAM_MUSIQUE: {
    appLabel: 'Livestream musical',
    categoryId: 'MUSIQUE_LIVE',
    homepageLabelName: 'MUSIQUE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MUSIQUE',
  },
  LIVESTREAM_PRATIQUE_ARTISTIQUE: {
    appLabel: 'Pratique artistique - livestream',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'COURS',
  },
  LIVRE_AUDIO_PHYSIQUE: {
    appLabel: 'Livre audio sur support physique',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRE',
  },
  LIVRE_NUMERIQUE: {
    appLabel: 'Livre numérique, e-book',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'LIVRE',
  },
  LIVRE_PAPIER: {
    appLabel: 'Livre',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'LIVRE',
  },
  LOCATION_INSTRUMENT: {
    appLabel: 'Location instrument',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENT',
  },
  MATERIEL_ART_CREATIF: {
    appLabel: 'Matériel arts créatifs',
    categoryId: 'BEAUX_ARTS',
    homepageLabelName: 'MATERIEL',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MATERIEL',
  },
  MUSEE_VENTE_DISTANCE: {
    appLabel: 'Musée vente à distance',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'VISITE',
  },
  OEUVRE_ART: {
    appLabel: "Catégorie technique d'oeuvre d'art",
    categoryId: 'TECHNIQUE',
    homepageLabelName: 'NONE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE_OR_OFFLINE',
    searchGroupName: 'NONE',
  },
  PARTITION: {
    appLabel: 'Partition',
    categoryId: 'INSTRUMENT',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'INSTRUMENT',
  },
  PLATEFORME_PRATIQUE_ARTISTIQUE: {
    appLabel: 'Plateforme de pratique artistique',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'COURS',
  },
  PODCAST: {
    appLabel: 'Podcast',
    categoryId: 'MEDIA',
    homepageLabelName: 'PRESSE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'PRESSE',
  },
  PRATIQUE_ART_VENTE_DISTANCE: {
    appLabel: 'Pratique artistique - vente à distance',
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'COURS',
  },
  RENCONTRE: {
    appLabel: 'Rencontre',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'CONFERENCE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONFERENCE',
  },
  RENCONTRE_EN_LIGNE: {
    appLabel: 'Rencontre en ligne',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'CONFERENCE',
    isEvent: true,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'CONFERENCE',
  },
  RENCONTRE_JEU: {
    appLabel: 'Rencontres - jeux',
    categoryId: 'JEU',
    homepageLabelName: 'JEU',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'JEU',
  },
  SALON: {
    appLabel: 'Salon, Convention',
    categoryId: 'CONFERENCE',
    homepageLabelName: 'CONFERENCE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CONFERENCE',
  },
  SEANCE_CINE: {
    appLabel: 'Séance de cinéma',
    categoryId: 'CINEMA',
    homepageLabelName: 'CINEMA',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'CINEMA',
  },
  SEANCE_ESSAI_PRATIQUE_ART: {
    appLabel: "Séance d'essai",
    categoryId: 'PRATIQUE_ART',
    homepageLabelName: 'COURS',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'COURS',
  },
  SPECTACLE_ENREGISTRE: {
    appLabel: 'Spectacle enregistré',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'SPECTACLE',
  },
  SPECTACLE_REPRESENTATION: {
    appLabel: 'Spectacle, représentation',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'SPECTACLE',
  },
  SPECTACLE_VENTE_DISTANCE: {
    appLabel: 'Spectacle vivant - vente à distance',
    categoryId: 'SPECTACLE',
    homepageLabelName: 'SPECTACLE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'SPECTACLE',
  },
  SUPPORT_PHYSIQUE_FILM: {
    appLabel: 'Support physique (DVD, Blu-ray...)',
    categoryId: 'FILM',
    homepageLabelName: 'FILM',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'FILM',
  },
  SUPPORT_PHYSIQUE_MUSIQUE: {
    appLabel: 'Support physique (CD, vinyle...)',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'MUSIQUE',
  },
  TELECHARGEMENT_LIVRE_AUDIO: {
    appLabel: 'Livre audio à télécharger',
    categoryId: 'LIVRE',
    homepageLabelName: 'LIVRE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'LIVRE',
  },
  TELECHARGEMENT_MUSIQUE: {
    appLabel: 'Téléchargement de musique',
    categoryId: 'MUSIQUE_ENREGISTREE',
    homepageLabelName: 'MUSIQUE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'MUSIQUE',
  },
  VISITE: {
    appLabel: 'Visite',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'VISITE',
  },
  VISITE_GUIDEE: {
    appLabel: 'Visite guidée',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: true,
    onlineOfflinePlatform: 'OFFLINE',
    searchGroupName: 'VISITE',
  },
  VISITE_VIRTUELLE: {
    appLabel: 'Visite virtuelle',
    categoryId: 'MUSEE',
    homepageLabelName: 'VISITE',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'VISITE',
  },
  VOD: {
    appLabel: 'Vidéo à la demande',
    categoryId: 'FILM',
    homepageLabelName: 'FILM',
    isEvent: false,
    onlineOfflinePlatform: 'ONLINE',
    searchGroupName: 'FILM',
  },
}

export const useSearchGroupLabelMappingSnap = {
  CARTE_JEUNES: 'Carte jeunes',
  CINEMA: 'Cinéma',
  CONFERENCE: 'Conférences, rencontres',
  COURS: 'Cours, ateliers',
  FILM: 'Films, séries',
  INSTRUMENT: 'Instruments de musique',
  JEU: 'Jeux',
  LIVRE: 'Livre',
  MATERIEL: 'Beaux-Arts',
  MUSIQUE: 'Musique',
  NONE: 'Toutes les catégories',
  PRESSE: 'Presse, médias',
  SPECTACLE: 'Spectacles',
  VISITE: 'Visites, expositions',
}

export const useCategoryHomeLabelMappingSnap = {
  ABO_BIBLIOTHEQUE: 'Livre',
  ABO_CONCERT: 'Musique',
  ABO_JEU_VIDEO: 'Jeux',
  ABO_LIVRE_NUMERIQUE: 'Livre',
  ABO_LUDOTHEQUE: 'Jeux',
  ABO_MEDIATHEQUE: 'Films',
  ABO_MUSEE: 'Visites',
  ABO_PLATEFORME_MUSIQUE: 'Musique',
  ABO_PLATEFORME_VIDEO: 'Films',
  ABO_PRATIQUE_ART: 'Cours',
  ABO_PRESSE_EN_LIGNE: 'Médias',
  ABO_SPECTACLE: 'Spectacle',
  ACHAT_INSTRUMENT: 'Musique',
  ACTIVATION_EVENT: null,
  ACTIVATION_THING: null,
  APP_CULTURELLE: 'Médias',
  ATELIER_PRATIQUE_ART: 'Cours',
  AUTRE_SUPPORT_NUMERIQUE: 'Films',
  BON_ACHAT_INSTRUMENT: 'Musique',
  CAPTATION_MUSIQUE: 'Musique',
  CARTE_CINE_ILLIMITE: 'Cinéma',
  CARTE_CINE_MULTISEANCES: 'Cinéma',
  CARTE_JEUNES: 'Carte jeunes',
  CARTE_MUSEE: 'Visites',
  CINE_PLEIN_AIR: 'Cinéma',
  CINE_VENTE_DISTANCE: 'Cinéma',
  CONCERT: 'Musique',
  CONCOURS: 'Jeux',
  CONFERENCE: 'Rencontres',
  DECOUVERTE_METIERS: 'Rencontres',
  ESCAPE_GAME: 'Jeux',
  EVENEMENT_CINE: 'Cinéma',
  EVENEMENT_JEU: 'Jeux',
  EVENEMENT_MUSIQUE: 'Musique',
  EVENEMENT_PATRIMOINE: 'Visites',
  FESTIVAL_CINE: 'Cinéma',
  FESTIVAL_LIVRE: 'Livre',
  FESTIVAL_MUSIQUE: 'Musique',
  FESTIVAL_SPECTACLE: 'Spectacle',
  JEU_EN_LIGNE: 'Jeux',
  JEU_SUPPORT_PHYSIQUE: null,
  LIVESTREAM_EVENEMENT: 'Spectacle',
  LIVESTREAM_MUSIQUE: 'Musique',
  LIVESTREAM_PRATIQUE_ARTISTIQUE: 'Cours',
  LIVRE_AUDIO_PHYSIQUE: 'Livre',
  LIVRE_NUMERIQUE: 'Livre',
  LIVRE_PAPIER: 'Livre',
  LOCATION_INSTRUMENT: 'Musique',
  MATERIEL_ART_CREATIF: 'Beaux-Arts',
  MUSEE_VENTE_DISTANCE: 'Visites',
  OEUVRE_ART: null,
  PARTITION: 'Musique',
  PLATEFORME_PRATIQUE_ARTISTIQUE: 'Cours',
  PODCAST: 'Médias',
  PRATIQUE_ART_VENTE_DISTANCE: 'Cours',
  RENCONTRE: 'Rencontres',
  RENCONTRE_EN_LIGNE: 'Rencontres',
  RENCONTRE_JEU: 'Jeux',
  SALON: 'Rencontres',
  SEANCE_CINE: 'Cinéma',
  SEANCE_ESSAI_PRATIQUE_ART: 'Cours',
  SPECTACLE_ENREGISTRE: 'Spectacle',
  SPECTACLE_REPRESENTATION: 'Spectacle',
  SPECTACLE_VENTE_DISTANCE: 'Spectacle',
  SUPPORT_PHYSIQUE_FILM: 'Films',
  SUPPORT_PHYSIQUE_MUSIQUE: 'Musique',
  TELECHARGEMENT_LIVRE_AUDIO: 'Livre',
  TELECHARGEMENT_MUSIQUE: 'Musique',
  VISITE: 'Visites',
  VISITE_GUIDEE: 'Visites',
  VISITE_VIRTUELLE: 'Visites',
  VOD: 'Films',
}