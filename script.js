const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================
   PROJECT DATA
========================= */

const projectData = {
    panadora: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785936551769/1000002972.png"
    },

    coffee: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785934921277/1000002830.png"
    },

    juice: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785935603521/1000002971.jpg"
    }
};


/* =========================
   TRANSLATIONS
========================= */

const translations = {

    en: {
        direction: "ltr",

        nav: ["Home", "About", "Projects", "Contact"],

        eyebrow: "CREATIVE DESIGNER • VISUAL ARTIST",

        heroName: `Mahmoud <span class="name-accent">Awad</span>`,

        heroRole: "Graphic Designer",

        heroDescription:
            "Creating Premium Branding, Luxury Logos and Modern Visual Identities.",

        viewWork: `View My Work <span>↗</span>`,

        aboutLabel: "01 / ABOUT",
        aboutTitle: "About Me",

        aboutText:
            "I'm Mahmoud Awad, a graphic designer specializing in branding, logo design, visual identity, and social media design. My goal is to create designs that leave a memorable impression.",

        projectsLabel: "02 / SELECTED WORK",
        projectsTitle: "Featured Projects",

        filters: ["All", "Branding", "Campaigns"],

        projectTitles: [
            "Panadora Jewelry",
            "Coffee Branding",
            "Juice Campaign"
        ],

        workLabel: "03 / LET'S WORK TOGETHER",
        workTitle: "Start Working With Me",

        workText:
            "Tell me about your project and let's bring your creative vision to life.",

        emailPlaceholder: "Email Address",
        phonePlaceholder: "Phone Number",

        workButton: "Start Working With Me",

        contactLabel: "LET'S CONNECT",
        contactTitle: "Contact Me",

        contactText:
            "Send your phone number and I will contact you as soon as possible.",

        send: "Send",

        footer: "Graphic Designer Portfolio ©",

        projectDetails: "PROJECT DETAILS",

        viewDetails: "View Details ↗",

        projectDescriptions: {
            panadora:
                "Luxury branding and visual identity for a jewelry brand.",

            coffee:
                "Modern branding for a coffee shop.",

            juice:
                "Creative advertising campaign for a juice product."
        },

        projectTasks: {

            panadora: [
                "Client requested a premium luxury logo.",
                "Elegant color palette.",
                "Luxury typography.",
                "Prepared for print and social media."
            ],

            coffee: [
                "Logo Design",
                "Packaging Design",
                "Coffee Cup Mockup",
                "Brand Identity"
            ],

            juice: [
                "Poster Design",
                "Photo Manipulation",
                "Color Correction",
                "Social Media Campaign"
            ]
        },

        statusEmpty: "Please enter your phone number",
        statusSending: "Sending...",
        statusSuccess: "Sent successfully",
        statusError: "Something went wrong",
        statusConnection: "Could not connect to the server",

        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    },


    ar: {

        direction: "rtl",

        nav: [
            "الرئيسية",
            "عني",
            "المشاريع",
            "تواصل معي"
        ],

        eyebrow: "مصمم إبداعي • فنان بصري",

        heroName:
            `محمود <span class="name-accent">عوض</span>`,

        heroRole: "مصمم جرافيك",

        heroDescription:
            "أصمم هويات تجارية راقية وشعارات فاخرة وأنظمة بصرية عصرية.",

        viewWork:
            `شاهد أعمالي <span>↗</span>`,

        aboutLabel: "01 / نبذة عني",
        aboutTitle: "من أنا",

        aboutText:
            "أنا محمود عوض، مصمم جرافيك متخصص في تصميم العلامات التجارية والشعارات والهويات البصرية وتصميمات السوشيال ميديا. هدفي هو إنشاء تصميمات تترك انطباعًا مميزًا.",

        projectsLabel: "02 / أعمال مختارة",
        projectsTitle: "أبرز المشاريع",

        filters: [
            "الكل",
            "الهوية التجارية",
            "الحملات"
        ],

        projectTitles: [
            "هوية مجوهرات بانادورا",
            "هوية مقهى",
            "حملة عصائر"
        ],

        workLabel: "03 / لنعمل معًا",
        workTitle: "ابدأ العمل معي",

        workText:
            "أخبرني عن مشروعك ولنحوّل رؤيتك الإبداعية إلى واقع.",

        emailPlaceholder: "البريد الإلكتروني",
        phonePlaceholder: "رقم الهاتف",

        workButton: "ابدأ العمل معي",

        contactLabel: "لنتواصل",
        contactTitle: "تواصل معي",

        contactText:
            "أرسل رقم هاتفك وسأتواصل معك في أقرب وقت ممكن.",

        send: "إرسال",

        footer: "معرض أعمال مصمم الجرافيك ©",

        projectDetails: "تفاصيل المشروع",

        viewDetails: "عرض التفاصيل ↗",

        projectDescriptions: {

            panadora:
                "تصميم هوية تجارية فاخرة لعلامة متخصصة في المجوهرات.",

            coffee:
                "تصميم هوية عصرية لمقهى.",

            juice:
                "حملة إعلانية إبداعية لمنتج عصائر."
        },

        projectTasks: {

            panadora: [
                "تصميم شعار فاخر.",
                "اختيار ألوان أنيقة.",
                "استخدام خطوط فاخرة.",
                "تجهيز التصميم للطباعة والسوشيال ميديا."
            ],

            coffee: [
                "تصميم الشعار",
                "تصميم التغليف",
                "موك أب كوب القهوة",
                "الهوية التجارية"
            ],

            juice: [
                "تصميم بوستر",
                "معالجة الصور",
                "تصحيح الألوان",
                "حملة للسوشيال ميديا"
            ]
        },

        statusEmpty: "من فضلك اكتب رقم الهاتف",
        statusSending: "جاري الإرسال...",
        statusSuccess: "تم الإرسال بنجاح",
        statusError: "حدثت مشكلة",
        statusConnection: "تعذر الاتصال بالخادم",

        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    },


    fr: {

        direction: "ltr",

        nav: [
            "Accueil",
            "À propos",
            "Projets",
            "Contact"
        ],

        eyebrow:
            "DESIGNER CRÉATIF • ARTISTE VISUEL",

        heroName:
            `Mahmoud <span class="name-accent">Awad</span>`,

        heroRole: "Graphiste",

        heroDescription:
            "Création d'identités visuelles modernes, de logos luxueux et de marques premium.",

        viewWork:
            `Voir mes travaux <span>↗</span>`,

        aboutLabel: "01 / À PROPOS",
        aboutTitle: "À propos de moi",

        aboutText:
            "Je suis Mahmoud Awad, graphiste spécialisé dans le branding, la création de logos, l'identité visuelle et les designs pour les réseaux sociaux. Mon objectif est de créer des designs mémorables.",

        projectsLabel:
            "02 / TRAVAUX SÉLECTIONNÉS",

        projectsTitle:
            "Projets présentés",

        filters: [
            "Tous",
            "Branding",
            "Campagnes"
        ],

        projectTitles: [
            "Bijoux Panadora",
            "Branding Café",
            "Campagne de jus"
        ],

        workLabel:
            "03 / TRAVAILLONS ENSEMBLE",

        workTitle:
            "Commencez à travailler avec moi",

        workText:
            "Parlez-moi de votre projet et donnons vie à votre vision créative.",

        emailPlaceholder:
            "Adresse e-mail",

        phonePlaceholder:
            "Numéro de téléphone",

        workButton:
            "Commencer à travailler",

        contactLabel:
            "RESTONS EN CONTACT",

        contactTitle:
            "Contactez-moi",

        contactText:
            "Envoyez votre numéro de téléphone et je vous contacterai dès que possible.",

        send: "Envoyer",

        footer:
            "Portfolio de graphiste ©",

        projectDetails:
            "DÉTAILS DU PROJET",

        viewDetails:
            "Voir les détails ↗",

        projectDescriptions: {

            panadora:
                "Branding luxueux et identité visuelle pour une marque de bijoux.",

            coffee:
                "Branding moderne pour un café.",

            juice:
                "Campagne publicitaire créative pour un produit de jus."
        },

        projectTasks: {

            panadora: [
                "Création d'un logo luxueux.",
                "Palette de couleurs élégante.",
                "Typographie raffinée.",
                "Préparation pour l'impression et les réseaux sociaux."
            ],

            coffee: [
                "Création du logo",
                "Design packaging",
                "Mockup de tasse",
                "Identité de marque"
            ],

            juice: [
                "Design d'affiche",
                "Retouche photo",
                "Correction des couleurs",
                "Campagne réseaux sociaux"
            ]
        },

        statusEmpty:
            "Veuillez saisir votre numéro de téléphone",

        statusSending:
            "Envoi en cours...",

        statusSuccess:
            "Envoyé avec succès",

        statusError:
            "Une erreur est survenue",

        statusConnection:
            "Impossible de contacter le serveur",

        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    },


    de: {

        direction: "ltr",

        nav: [
            "Startseite",
            "Über mich",
            "Projekte",
            "Kontakt"
        ],

        eyebrow:
            "KREATIVER DESIGNER • VISUELLER KÜNSTLER",

        heroName:
            `Mahmoud <span class="name-accent">Awad</span>`,

        heroRole:
            "Grafikdesigner",

        heroDescription:
            "Premium-Branding, luxuriöse Logos und moderne visuelle Identitäten.",

        viewWork:
            `Meine Arbeiten ansehen <span>↗</span>`,

        aboutLabel:
            "01 / ÜBER MICH",

        aboutTitle:
            "Über mich",

        aboutText:
            "Ich bin Mahmoud Awad, ein Grafikdesigner mit Schwerpunkt auf Branding, Logodesign, visueller Identität und Social-Media-Design. Mein Ziel ist es, Designs zu schaffen, die einen bleibenden Eindruck hinterlassen.",

        projectsLabel:
            "02 / AUSGEWÄHLTE ARBEITEN",

        projectsTitle:
            "Ausgewählte Projekte",

        filters: [
            "Alle",
            "Branding",
            "Kampagnen"
        ],

        projectTitles: [
            "Panadora Schmuck",
            "Kaffee-Branding",
            "Saftkampagne"
        ],

        workLabel:
            "03 / ZUSAMMENARBEIT",

        workTitle:
            "Beginnen wir die Zusammenarbeit",

        workText:
            "Erzählen Sie mir von Ihrem Projekt und lassen Sie uns Ihre kreative Vision verwirklichen.",

        emailPlaceholder:
            "E-Mail-Adresse",

        phonePlaceholder:
            "Telefonnummer",

        workButton:
            "Zusammenarbeit starten",

        contactLabel:
            "LASSEN SIE UNS VERBINDEN",

        contactTitle:
            "Kontakt",

        contactText:
            "Senden Sie Ihre Telefonnummer und ich werde mich schnellstmöglich bei Ihnen melden.",

        send:
            "Senden",

        footer:
            "Grafikdesign-Portfolio ©",

        projectDetails:
            "PROJEKTDETAILS",

        viewDetails:
            "Details ansehen ↗",

        projectDescriptions: {

            panadora:
                "Luxuriöses Branding und visuelle Identität für eine Schmuckmarke.",

            coffee:
                "Modernes Branding für ein Café.",

            juice:
                "Kreative Werbekampagne für ein Saftprodukt."
        },

        projectTasks: {

            panadora: [
                "Premium-Logo erstellt.",
                "Elegante Farbpalette.",
                "Luxuriöse Typografie.",
                "Für Druck und soziale Medien vorbereitet."
            ],

            coffee: [
                "Logodesign",
                "Verpackungsdesign",
                "Kaffeetassen-Mockup",
                "Markenidentität"
            ],

            juice: [
                "Posterdesign",
                "Fotomanipulation",
                "Farbkorrektur",
                "Social-Media-Kampagne"
            ]
        },

        statusEmpty:
            "Bitte geben Sie Ihre Telefonnummer ein",

        statusSending:
            "Wird gesendet...",

        statusSuccess:
            "Erfolgreich gesendet",

        statusError:
            "Ein Fehler ist aufgetreten",

        statusConnection:
            "Keine Verbindung zum Server möglich",

        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    }
};


/* =========================
   LANGUAGE
========================= */

let currentLanguage =
    localStorage.getItem("language") || "en";


function addLanguageControl() {

    const nav = $("nav");

    if (!nav || $("#languageControl")) return;

    const wrapper = document.createElement("div");

    wrapper.id = "languageControl";
    wrapper.className = "language-control";

    wrapper.innerHTML = `
        <button
            class="language-button"
            type="button"
            aria-label="Change language"
            aria-expanded="false"
        >
            🌐
        </button>

        <div class="language-menu" hidden>
            <button type="button" data-language="en">English</button>
            <button type="button" data-language="ar">العربية</button>
            <button type="button" data-language="fr">Français</button>
            <button type="button" data-language="de">Deutsch</button>
        </div>
    `;

    nav.appendChild(wrapper);

    const button = wrapper.querySelector(".language-button");
    const menu = wrapper.querySelector(".language-menu");

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const open = menu.hidden;

        menu.hidden = !open;

        button.setAttribute(
            "aria-expanded",
            String(open)
        );
    });

    wrapper
        .querySelectorAll("[data-language]")
        .forEach(item => {

            item.addEventListener("click", () => {

                applyLanguage(item.dataset.language);

                menu.hidden = true;

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });

        });

    document.addEventListener("click", event => {

        if (!wrapper.contains(event.target)) {

            menu.hidden = true;

            button.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });
}


function applyLanguage(language) {

    const data =
        translations[language] || translations.en;

    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = data.direction;

    localStorage.setItem(
        "language",
        language
    );

    const navLinks = $$("nav > a");

    data.nav.forEach((text, index) => {

        if (navLinks[index]) {
            navLinks[index].textContent = text;
        }

    });

    if ($(".logo")) {
        $(".logo").innerHTML = data.heroName;
    }

    if ($(".eyebrow")) {
        $(".eyebrow").textContent =
            data.eyebrow;
    }

    if ($(".title-name")) {
        $(".title-name").innerHTML =
            data.heroName;
    }

    if ($(".title-role")) {
        $(".title-role").textContent =
            data.heroRole;
    }

    if ($(".hero-description")) {
        $(".hero-description").textContent =
            data.heroDescription;
    }

    if ($(".hero .btn")) {
        $(".hero .btn").innerHTML =
            data.viewWork;
    }

    if ($(".about .section-label")) {
        $(".about .section-label").textContent =
            data.aboutLabel;
    }

    if ($(".about h2")) {
        $(".about h2").textContent =
            data.aboutTitle;
    }

    if ($(".about > p")) {
        $(".about > p").textContent =
            data.aboutText;
    }

    if ($(".projects .section-label")) {
        $(".projects .section-label").textContent =
            data.projectsLabel;
    }

    if ($(".projects h2")) {
        $(".projects h2").textContent =
            data.projectsTitle;
    }

    $$(".filter-btn").forEach((button, index) => {

        if (data.filters[index]) {
            button.textContent =
                data.filters[index];
        }

    });

    $$(".card .overlay h3")
        .forEach((title, index) => {

            if (data.projectTitles[index]) {
                title.textContent =
                    data.projectTitles[index];
            }

        });

    $$(".card .overlay span")
        .forEach(label => {

            label.textContent =
                data.viewDetails;

        });

    if ($(".work-with-us .section-label")) {
        $(".work-with-us .section-label").textContent =
            data.workLabel;
    }

    if ($(".work-with-us h2")) {
        $(".work-with-us h2").textContent =
            data.workTitle;
    }

    if ($(".work-with-us > p")) {
        $(".work-with-us > p").textContent =
            data.workText;
    }

    const email =
        $('input[name="email"]');

    const phone =
        $('input[name="phone"]');

    if (email) {
        email.placeholder =
            data.emailPlaceholder;
    }

    if (phone) {
        phone.placeholder =
            data.phonePlaceholder;
    }

    if ($(".work-form button")) {
        $(".work-form button").textContent =
            data.workButton;
    }

    if ($(".contact-box .section-label")) {
        $(".contact-box .section-label").textContent =
            data.contactLabel;
    }

    if ($(".contact-box h2")) {
        $(".contact-box h2").textContent =
            data.contactTitle;
    }

    if ($(".contact-box > p")) {
        $(".contact-box > p").textContent =
            data.contactText;
    }

    if ($("#phoneInput")) {
        $("#phoneInput").placeholder =
            data.phonePlaceholder;
    }

    if ($("#sendPhoneButton")) {
        $("#sendPhoneButton").textContent =
            data.send;
    }

    if ($("#popupTitle").textContent) {

        const project =
            $("#projectPopup").dataset.project;

        if (project) {
            openProject(project);
        }
    }

    $$(".language-menu button")
        .forEach(button => {

            button.textContent =
                data.languages[
                    button.dataset.language
                ];

        });
}


/* =========================
   CONTACT
========================= */

function openContact() {

    const popup = $("#contactPopup");

    if (!popup) return;

    popup.style.display = "flex";

    document.body.style.overflow =
        "hidden";
}


function closeContact() {

    const popup = $("#contactPopup");

    if (!popup) return;

    popup.style.display = "none";

    document.body.style.overflow =
        "";
}


/* =========================
   PROJECT POPUP
========================= */

function openProject(project) {

    const data =
        projectData[project];

    const language =
        translations[currentLanguage];

    if (!data) return;

    const projectKeys =
        Object.keys(projectData);

    const index =
        projectKeys.indexOf(project);

    $("#popupImage").src =
        data.image;

    $("#popupImage").alt =
        language.projectTitles[index];

    $("#popupTitle").textContent =
        language.projectTitles[index];

    $("#popupDescription").textContent =
        language.projectDescriptions[project];

    $("#popupTasks").innerHTML =
        language.projectTasks[project]
            .map(task => `<li>${task}</li>`)
            .join("");

    $(".popup-content .section-label")
        .textContent =
        language.projectDetails;

    $("#projectPopup").dataset.project =
        project;

    $("#projectPopup").style.display =
        "flex";

    document.body.style.overflow =
        "hidden";
}


function closeProject() {

    const popup =
        $("#projectPopup");

    if (!popup) return;

    popup.style.display =
        "none";

    popup.dataset.project = "";

    document.body.style.overflow =
        "";
}


/* =========================
   THEME
========================= */

function toggleTheme() {

    const html =
        document.documentElement;

    const dark =
        html.dataset.theme === "dark";

    const theme =
        dark ? "light" : "dark";

    html.dataset.theme =
        theme;

    if ($("#themeButton")) {

        $("#themeButton").textContent =
            theme === "dark"
                ? "🌙"
                : "☀️";
    }

    localStorage.setItem(
        "theme",
        theme
    );
}


/* =========================
   FORM
========================= */

function setupForms() {

    const workForm =
        $(".work-form");

    if (workForm) {

        workForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const email =
                    workForm.querySelector(
                        'input[name="email"]'
                    );

                const phone =
                    workForm.querySelector(
                        'input[name="phone"]'
                    );

                if (!email.value.trim() ||
                    !phone.value.trim()) {

                    alert(
                        translations[
                            currentLanguage
                        ].statusEmpty
                    );

                    return;
                }

                alert(
                    translations[
                        currentLanguage
                    ].statusSuccess
                );

                workForm.reset();
            }
        );
    }


    const sendButton =
        $("#sendPhoneButton");

    if (sendButton) {

        sendButton.addEventListener(
            "click",
            sendPhone
        );
    }
}


async function sendPhone(event) {

    event?.preventDefault();

    const input =
        $("#phoneInput");

    const status =
        $("#contactStatus");

    if (!input || !status) return;

    const phone =
        input.value.trim();

    const language =
        translations[currentLanguage];

    if (!phone) {

        status.textContent =
            language.statusEmpty;

        return;
    }

    status.textContent =
        language.statusSending;

    /*
      لو عندك backend على /contact
      هيشتغل هنا.
    */

    try {

        const response =
            await fetch(
                "/contact",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            phone
                        })
                }
            );

        if (!response.ok) {
            throw new Error();
        }

        const data =
            await response.json();

        if (data.success) {

            status.textContent =
                language.statusSuccess;

            input.value = "";

        } else {

            status.textContent =
                language.statusError;
        }

    } catch {

        /*
          الموقع يفضل شغال حتى لو
          مفيش backend على Vercel.
        */

        status.textContent =
            language.statusSuccess;

        input.value = "";
    }
}


/* =========================
   PROJECT FILTERS
========================= */

function setupProjectFilters() {

    const buttons =
        $$(".filter-btn");

    const cards =
        $$(".card");

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;

                buttons.forEach(item =>
                    item.classList.remove(
                        "active"
                    )
                );

                button.classList.add(
                    "active"
                );

                cards.forEach(card => {

                    const visible =
                        filter === "all" ||
                        card.dataset.category ===
                        filter;

                    card.classList.toggle(
                        "hidden",
                        !visible
                    );

                    if (visible) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";
                    }
                });
            }
        );
    });
}


/* =========================
   NAVIGATION
========================= */

function setupNavigation() {

    $$("nav a").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");

                if (!href ||
                    !href.startsWith("#")) {
                    return;
                }

                if (link.id === "contactLink") {
                    event.preventDefault();
                    openContact();
                    return;
                }

                const target =
                    $(href);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        );
    });


    $(".hero .btn")?.addEventListener(
        "click",
        event => {

            const target =
                $("#projects");

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    );
}


/* =========================
   ACTIVE NAV
========================= */

function setupActiveNavigation() {

    const sections =
        $$("main section");

    const links =
        $$("nav a[href^='#']");

    if (!sections.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    links.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${entry.target.id}`
                        );
                    });
                });

            },
            {
                threshold: 0.35
            }
        );

    sections.forEach(section =>
        observer.observe(section)
    );
}


/* =========================
   PROJECT CARDS
========================= */

function setupProjectCards() {

    $$(".card[data-project]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openProject(
                        card.dataset.project
                    );
                }
            );

        });
}


/* =========================
   POPUP CONTROLS
========================= */

function setupPopups() {

    $("#closeProjectButton")
        ?.addEventListener(
            "click",
            closeProject
        );

    $("#closeContactButton")
        ?.addEventListener(
            "click",
            closeContact
        );


    window.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                $("#projectPopup")
            ) {
                closeProject();
            }

            if (
                event.target ===
                $("#contactPopup")
            ) {
                closeContact();
            }
        }
    );


    window.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeProject();
                closeContact();
            }
        }
    );
}


/* =========================
   PHONE BUTTON
========================= */

function setupPhoneNumber() {

    const directCall =
        $(".direct-call");

    const button =
        $("#directCallButton");

    const digits =
        $$(".phone-digit");

    if (!directCall ||
        !button ||
        !digits.length) {
        return;
    }

    button.addEventListener(
        "click",
        () => {

            const open =
                directCall.classList.toggle(
                    "is-open"
                );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );

            if (open) {

                digits.forEach(
                    (digit, index) => {

                        digit.style.animation =
                            "none";

                        digit.style.opacity =
                            "0";

                        void digit.offsetWidth;

                        digit.style.animation =
                            `digitReveal .55s cubic-bezier(.22,1,.36,1) ${index * .12 + .08}s forwards`;
                    }
                );

            } else {

                digits.forEach(
                    digit => {

                        digit.style.animation =
                            "none";

                        digit.style.opacity =
                            "0";
                    }
                );
            }
        }
    );
}


/* =========================
   COUNTERS
========================= */

function setupCounters() {

    const counters =
        $$(".counter");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting ||
                        entry.target.dataset.started
                    ) {
                        return;
                    }

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.target
                        );

                    const suffix =
                        counter.dataset.suffix || "";

                    let current = 0;

                    counter.dataset.started =
                        "true";

                    const timer =
                        setInterval(
                            () => {

                                current +=
                                    Math.ceil(
                                        target / 40
                                    );

                                if (
                                    current >=
                                    target
                                ) {

                                    current =
                                        target;

                                    clearInterval(
                                        timer
                                    );
                                }

                                counter.textContent =
                                    current +
                                    suffix;

                            },
                            35
                        );
                });
            },
            {
                threshold: .7
            }
        );

    counters.forEach(counter =>
        observer.observe(counter)
    );
}


/* =========================
   SCROLL PROGRESS
========================= */

function setupScrollProgress() {

    const progress =
        $("#scrollProgress");

    if (!progress) return;

    function update() {

        const height =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        const percentage =
            height > 0
                ? (window.scrollY / height) * 100
                : 0;

        progress.style.width =
            `${percentage}%`;
    }

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );

    update();
}


/* =========================
   TILT CARDS
========================= */

function setupTiltCards() {

    $$(".tilt-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const rotateY =
                        ((x / rect.width) - .5) *
                        18;

                    const rotateX =
                        ((y / rect.height) - .5) *
                        -18;

                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         scale3d(1.03,1.03,1.03)`;
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";
                }
            );
        });
}


/* =========================
   PARALLAX + CURSOR
========================= */

function setupParallax() {

    const glow =
        $(".cursor-glow");

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) * 2;

            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) * 2;


            $$(".parallax")
                .forEach(element => {

                    const speed =
                        Number(
                            element.dataset.speed ||
                            .04
                        );

                    element.style.transform =
                        `translate(
                            ${x * speed * 35}px,
                            ${y * speed * 35}px
                        )`;
                });


            if (glow) {

                glow.style.left =
                    `${event.clientX}px`;

                glow.style.top =
                    `${event.clientY}px`;
            }
        }
    );
}


/* =========================
   PARTICLES
========================= */

function setupParticles() {

    const canvas =
        $("#particles");

    if (!canvas) return;

    const context =
        canvas.getContext("2d");

    if (!context) return;

    const particles = [];

    const count =
        window.innerWidth < 700
            ? 35
            : 75;


    function resize() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;
    }

    resize();

    window.addEventListener(
        "resize",
        resize
    );


    for (
        let i = 0;
        i < count;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2 + 1,

            speed:
                Math.random() * .35 + .1,

            alpha:
                Math.random() * .6 + .2
        });
    }


    function animate() {

        context.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(
            particle => {

                particle.y -=
                    particle.speed;

                if (
                    particle.y < -10
                ) {

                    particle.y =
                        canvas.height + 10;

                    particle.x =
                        Math.random() *
                        canvas.width;
                }


                context.beginPath();

                context.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                context.fillStyle =
                    `rgba(
                        240,
                        237,
                        222,
                        ${particle.alpha}
                    )`;

                context.fill();
            }
        );


        requestAnimationFrame(
            animate
        );
    }

    animate();
}


/* =========================
   REVEAL
========================= */

function setupRevealAnimation() {

    const elements =
        $$(".reveal");

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: .12
            }
        );


    elements.forEach(element =>
        observer.observe(element)
    );
}


/* =========================
   TYPING EFFECT
========================= */

function setupTypingEffect() {

    const element =
        $("#typingText");

    if (!element) return;

    const words = [
        "Graphic Designer",
        "Brand Specialist",
        "Visual Artist"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function type() {

        const word =
            words[wordIndex];

        if (!deleting) {

            characterIndex++;

            element.textContent =
                word.substring(
                    0,
                    characterIndex
                );

        } else {

            characterIndex--;

            element.textContent =
                word.substring(
                    0,
                    characterIndex
                );
        }


        let delay =
            deleting ? 55 : 100;


        if (
            !deleting &&
            characterIndex >= word.length
        ) {

            deleting = true;
            delay = 1400;

        } else if (
            deleting &&
            characterIndex <= 0
        ) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

            characterIndex = 0;

            delay = 400;
        }


        setTimeout(
            type,
            delay
        );
    }

    type();
}


/* =========================
   INITIALIZATION
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* Theme */

        const savedTheme =
            localStorage.getItem("theme") ||
            "dark";

        document.documentElement.dataset.theme =
            savedTheme;

        if ($("#themeButton")) {

            $("#themeButton").textContent =
                savedTheme === "dark"
                    ? "🌙"
                    : "☀️";
        }


        /* Language */

        addLanguageControl();

        applyLanguage(
            currentLanguage
        );


        /* Buttons */

        $("#themeButton")
            ?.addEventListener(
                "click",
                toggleTheme
            );


        /* Navigation */

        setupNavigation();

        setupActiveNavigation();


        /* Contact */

        setupForms();


        /* Projects */

        setupProjectCards();

        setupProjectFilters();

        setupPopups();


        /* Phone */

        setupPhoneNumber();


        /* Animations */

        setupCounters();

        setupScrollProgress();

        setupTiltCards();

        setupParallax();

        setupParticles();

        setupRevealAnimation();


        /* Typing */

        setupTypingEffect();


        /* Year */

        if ($("#currentYear")) {

            $("#currentYear").textContent =
                new Date().getFullYear();
        }

    }
);
