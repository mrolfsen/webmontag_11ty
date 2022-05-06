var klaroConfig = {
    cookieExpiresAfterDays: 365,
    privacyPolicy: '/datenschutz.html',
    default: true,
    mustConsent: false,
    translations: {
        de: {

            close: 'Anwenden',
            acceptSelected: 'Akzeptieren',
            consentNotice: {
                learnMore: 'Anpassen',
            },

            googleMap: {
                description: 'Kartendienst von Google',
                default:true,
            },
            googleFonts: {
                description: 'Web-Schriftarten von Google gehostet',
                default: true,
            },
            purposes: {
                styling: 'Styling',
                mapServices: 'Kartendienste',
            },
            consentModal: {
                title: "Informationen, die wir sammeln",
                description: "Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.",
                privacyPolicy: {
                    name: "Datenschutzerklärung",
                    text: "Bitte lesen Sie unsere {privacyPolicy}, um weitere Details zu erfahren.",
                },
            },
            app: {
                disableAll: {
                    title: 'Alle Anwendungen aktivieren/deaktivieren',
                    description: 'Nutzen Sie diesen Schalter, um alle Dienste zu aktivieren/deaktivieren.',
                },
            },
        },
    },
    apps: [

        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
            default: true,
        },
        {
            name: 'googleMap',
            title: 'Google Maps',
            purposes: ['mapServices'],
            default: true,
            cookies: ['CONSENT', '1P_JAR'],
        }

    ],
};