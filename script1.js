const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const projectData = {
    panadora: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785936551769/1000002972.png",
        title: "Panadora Jewelry",
        description: "Luxury branding and visual identity for a jewelry brand.",
        tasks: [
            "Client requested a premium luxury logo.",
            "Elegant color palette.",
            "Luxury typography.",
            "Prepared for print and social media."
        ]
    },
    coffee: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785934921277/1000002830.png",
        title: "Coffee Branding",
        description: "Modern branding for a coffee shop.",
        tasks: [
            "Logo Design",
            "Packaging Design",
            "Coffee Cup Mockup",
            "Brand Identity"
        ]
    },
    juice: {
        image: "https://uploads.onecompiler.io/44ssreqmg/1785935603521/1000002971.jpg",
        title: "Juice Campaign",
        description: "Creative advertising campaign for a juice product.",
        tasks: [
            "Poster Design",
            "Photo Manipulation",
            "Color Correction",
            "Social Media Campaign"
        ]
    }
};

const translations = {
    en: {
        direction: "ltr",
        nav: ["Home", "About", "Projects", "Contact"],
        eyebrow: "CREATIVE DESIGNER • VISUAL ARTIST",
        heroName: "Mahmoud <span class=\"name-accent\">Awad</span>",
        heroRole: "Graphic Designer",
        heroDescription: "Creating Premium Branding, Luxury Logos and Modern Visual Identities.",
        viewWork: "View My Work <span>↗</span>",
        aboutLabel: "01 / ABOUT",
        aboutTitle: "About Me",
        aboutText: "I'm Mahmoud Awad, a graphic designer specializing in branding, logo design, visual identity, and social media design. My goal is to create designs that leave a memorable impression.",
        projectsLabel: "02 / SELECTED WORK",
        projectsTitle: "Featured Projects",
        filters: ["All", "Branding", "Campaigns"],
        projectTitles: ["Panadora Jewelry", "Coffee Branding", "Juice Campaign"],
        workLabel: "03 / LET'S WORK TOGETHER",
        workTitle: "Start Working With Me",
        workText: "Tell me about your project and let's bring your creative vision to life.",
        emailPlaceholder: "Email Address",
        phonePlaceholder: "Phone Number",
        workButton: "Start Working With Me",
        contactLabel: "LET'S CONNECT",
        contactTitle: "Contact Me",
        contactText: "Send your phone number and I will contact you as soon as possible.",
        send: "Send",
        footer: "Graphic Designer Portfolio ©",
        projectDetails: "PROJECT DETAILS",
        viewDetails: "View Details ↗",
        projectDescriptions: {
            panadora: "Luxury branding and visual identity for a jewelry brand.",
            coffee: "Modern branding for a coffee shop.",
            juice: "Creative advertising campaign for a juice product."
        },
        projectTasks: {
            panadora: [
                "Client requested a premium luxury logo.",
                "Elegant color palette.",
                "Luxury typography.",
                "Prepared for print and social media."
            ],
            coffee: ["Logo Design", "Packaging Design", "Coffee Cup Mockup", "Brand Identity"],
            juice: ["Poster Design", "Photo Manipulation", "Color Correction", "Social Media Campaign"]
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
        nav: ["الرئيسية", "عني", "المشاريع", "تواصل معي"],
        eyebrow: "مصمم إبداعي • فنان بصري",
        heroName: "محمود <span class=\"name-accent\">عوض</span>",
        heroRole: "مصمم جرافيك",
        heroDescription: "أصمم هويات تجارية راقية وشعارات فاخرة وأنظمة بصرية عصرية.",
        viewWork: "شاهد أعمالي <span>↗</span>",
        aboutLabel: "01 / نبذة عني",
        aboutTitle: "من أنا",
        aboutText: "أنا محمود عوض، مصمم جرافيك متخصص في تصميم العلامات التجارية والشعارات والهويات البصرية وتصميمات السوشيال ميديا. هدفي هو إنشاء تصميمات تترك انطباعًا مميزًا.",
        projectsLabel: "02 / أعمال مختارة",
        projectsTitle: "أبرز المشاريع",
        filters: ["الكل", "الهوية التجارية", "الحملات"],
        projectTitles: ["هوية مجوهرات بانادورا", "هوية مقهى", "حملة عصائر"],
        workLabel: "03 / لنعمل معًا",
        workTitle: "ابدأ العمل معي",
        workText: "أخبرني عن مشروعك ولنحوّل رؤيتك الإبداعية إلى واقع.",
        emailPlaceholder: "البريد الإلكتروني",
        phonePlaceholder: "رقم الهاتف",
        workButton: "ابدأ العمل معي",
        contactLabel: "لنتواصل",
        contactTitle: "تواصل معي",
        contactText: "أرسل رقم هاتفك وسأتواصل معك في أقرب وقت ممكن.",
        send: "إرسال",
        footer: "معرض أعمال مصمم الجرافيك ©",
        projectDetails: "تفاصيل المشروع",
        viewDetails: "عرض التفاصيل ↗",
        projectDescriptions: {
            panadora: "تصميم هوية تجارية فاخرة لعلامة متخصصة في المجوهرات.",
            coffee: "تصميم هوية عصرية لمقهى.",
            juice: "حملة إعلانية إبداعية لمنتج عصائر."
        },
        projectTasks: {
            panadora: [
                "تصميم شعار فاخر.",
                "اختيار ألوان أنيقة.",
                "استخدام خطوط فاخرة.",
                "تجهيز التصميم للطباعة والسوشيال ميديا."
            ],
            coffee: ["تصميم الشعار", "تصميم التغليف", "موك أب كوب القهوة", "الهوية التجارية"],
            juice: ["تصميم بوستر", "معالجة الصور", "تصحيح الألوان", "حملة للسوشيال ميديا"]
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
        nav: ["Accueil", "À propos", "Projets", "Contact"],
        eyebrow: "DESIGNER CRÉATIF • ARTISTE VISUEL",
        heroName: "Mahmoud <span class=\"name-accent\">Awad</span>",
        heroRole: "Graphiste",
        heroDescription: "Création d'identités visuelles modernes, de logos luxueux et de marques premium.",
        viewWork: "Voir mes travaux <span>↗</span>",
        aboutLabel: "01 / À PROPOS",
        aboutTitle: "À propos de moi",
        aboutText: "Je suis Mahmoud Awad, graphiste spécialisé dans le branding, la création de logos, l'identité visuelle et les designs pour les réseaux sociaux. Mon objectif est de créer des designs mémorables.",
        projectsLabel: "02 / TRAVAUX SÉLECTIONNÉS",
        projectsTitle: "Projets présentés",
        filters: ["Tous", "Branding", "Campagnes"],
        projectTitles: ["Bijoux Panadora", "Branding Café", "Campagne de jus"],
        workLabel: "03 / TRAVAILLONS ENSEMBLE",
        workTitle: "Commencez à travailler avec moi",
        workText: "Parlez-moi de votre projet et donnons vie à votre vision créative.",
        emailPlaceholder: "Adresse e-mail",
        phonePlaceholder: "Numéro de téléphone",
        workButton: "Commencer à travailler",
        contactLabel: "RESTONS EN CONTACT",
        contactTitle: "Contactez-moi",
        contactText: "Envoyez votre numéro de téléphone et je vous contacterai dès que possible.",
        send: "Envoyer",
        footer: "Portfolio de graphiste ©",
        projectDetails: "DÉTAILS DU PROJET",
        viewDetails: "Voir les détails ↗",
        projectDescriptions: {
            panadora: "Branding luxueux et identité visuelle pour une marque de bijoux.",
            coffee: "Branding moderne pour un café.",
            juice: "Campagne publicitaire créative pour un produit de jus."
        },
        projectTasks: {
            panadora: [
                "Création d'un logo luxueux.",
                "Palette de couleurs élégante.",
                "Typographie raffinée.",
                "Préparation pour l'impression et les réseaux sociaux."
            ],
            coffee: ["Création du logo", "Design packaging", "Mockup de tasse", "Identité de marque"],
            juice: ["Design d'affiche", "Retouche photo", "Correction des couleurs", "Campagne réseaux sociaux"]
        },
        statusEmpty: "Veuillez saisir votre numéro de téléphone",
        statusSending: "Envoi en cours...",
        statusSuccess: "Envoyé avec succès",
        statusError: "Une erreur est survenue",
        statusConnection: "Impossible de contacter le serveur",
        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    },

    de: {
        direction: "ltr",
        nav: ["Startseite", "Über mich", "Projekte", "Kontakt"],
        eyebrow: "KREATIVER DESIGNER • VISUELLER KÜNSTLER",
        heroName: "Mahmoud <span class=\"name-accent\">Awad</span>",
        heroRole: "Grafikdesigner",
        heroDescription: "Premium-Branding, luxuriöse Logos und moderne visuelle Identitäten.",
        viewWork: "Meine Arbeiten ansehen <span>↗</span>",
        aboutLabel: "01 / ÜBER MICH",
        aboutTitle: "Über mich",
        aboutText: "Ich bin Mahmoud Awad, ein Grafikdesigner mit Schwerpunkt auf Branding, Logodesign, visueller Identität und Social-Media-Design. Mein Ziel ist es, Designs zu schaffen, die einen bleibenden Eindruck hinterlassen.",
        projectsLabel: "02 / AUSGEWÄHLTE ARBEITEN",
        projectsTitle: "Ausgewählte Projekte",
        filters: ["Alle", "Branding", "Kampagnen"],
        projectTitles: ["Panadora *****", "Kaffee-Branding", "Saftkampagne"],
        workLabel: "03 / ZUSAMMENARBEIT",
        workTitle: "Beginnen wir die Zusammenarbeit",
        workText: "Erzählen Sie mir von Ihrem Projekt und lassen Sie uns Ihre kreative Vision verwirklichen.",
        emailPlaceholder: "E-Mail-Adresse",
        phonePlaceholder: "Telefonnummer",
        workButton: "Zusammenarbeit starten",
        contactLabel: "LASSEN SIE UNS VERBINDEN",
        contactTitle: "Kontakt",
        contactText: "Senden Sie Ihre Telefonnummer und ich werde mich schnellstmöglich bei Ihnen melden.",
        send: "Senden",
        footer: "Grafikdesign-Portfolio ©",
        projectDetails: "PROJEKTDETAILS",
        viewDetails: "Details ansehen ↗",
        projectDescriptions: {
            panadora: "Luxuriöses Branding und visuelle Identität für eine Schmuckmarke.",
            coffee: "Modernes Branding für ein Café.",
            juice: "Kreative Werbekampagne für ein Saftprodukt."
        },
        projectTasks: {
            panadora: [
                "Premium-Logo erstellt.",
                "Elegante Farbpalette.",
                "Luxuriöse Typografie.",
                "Für Druck und soziale Medien vorbereitet."
            ],
            coffee: ["Logodesign", "Verpackungsdesign", "Kaffeetassen-Mockup", "Markenidentität"],
            juice: ["Posterdesign", "Fotomanipulation", "Farbkorrektur", "Social-Media-Kampagne"]
        },
        statusEmpty: "Bitte geben Sie Ihre Telefonnummer ein",
        statusSending: "Wird gesendet...",
        statusSuccess: "Erfolgreich gesendet",
        statusError: "Ein Fehler ist aufgetreten",
        statusConnection: "Keine Verbindung zum Server möglich",
        languages: {
            en: "English",
            ar: "العربية",
            fr: "Français",
            de: "Deutsch"
        }
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function addLanguageControl() {
    const nav = $("nav");
    if (!nav || $("#languageControl")) return;

    const wrapper = document.createElement("div");
    wrapper.id = "languageControl";
    wrapper.className = "language-control";

    wrapper.innerHTML = `
        <button class="language-button" type="button" aria-label="Change language" aria-expanded="false">
            🌐
        </button>
        <div class="language-menu" hidden>
            <button data-language="en">English</button>
            <button data-language="ar">العربية</button>
            <button data-language="fr">Français</button>
            <button data-language="de">Deutsch</button>
        </div>
    `;

    nav.appendChild(wrapper);

    const button = wrapper.querySelector(".language-button");
    const menu = wrapper.querySelector(".language-menu");

    button.addEventListener("click", () => {
        const isOpen = !menu.hidden;
        menu.hidden = isOpen;
        button.setAttribute("aria-expanded", String(!isOpen));
    });

    wrapper.querySelectorAll("[data-language]").forEach(item => {
        item.addEventListener("click", () => {
            applyLanguage(item.dataset.language);
            menu.hidden = true;
            button.setAttribute("aria-expanded", "false");
        });
    });

    const style = document.createElement("style");
    style.textContent = `
        .language-control {
            position: relative;
            display: inline-flex;
        }

        .language-button {
            width: 42px;
            height: 42px;
            border: 0;
            border-radius: 50%;
            color: white;
            background: var(--primary);
            cursor: pointer;
            font-size: 19px;
            transition: .3s;
        }

        .language-button:hover {
            transform: scale(1.1);
        }

        .language-menu {
            position: absolute;
            top: 50px;
            right: 0;
            min-width: 125px;
            padding: 7px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--card);
            box-shadow: var(--shadow);
        }

        html[dir="rtl"] .language-menu {
            right: auto;
            left: 0;
        }

        .language-menu button {
            display: block;
            width: 100%;
            padding: 8px 10px;
            color: var(--text);
            text-align: left;
            border: 0;
            border-radius: 7px;
            background: transparent;
            cursor: pointer;
        }

        html[dir="rtl"] .language-menu button {
            text-align: right;
        }

        .language-menu button:hover {
            color: white;
            background: var(--primary);
        }

        @media (max-width: 768px) {
            .language-menu {
                top: 48px;
            }
        }
    `;

    document.head.appendChild(style);
}

function applyLanguage(language) {
    const data = translations[language] || translations.en;
    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = data.direction;
    localStorage.setItem("language", language);

    const navLinks = $$("nav a");
    data.nav.forEach((text, index) => {
        if (navLinks[index]) navLinks[index].textContent = text;
    });

    $(".logo").innerHTML = data.heroName;
    $(".eyebrow").textContent = data.eyebrow;
    $(".title-name").innerHTML = data.heroName;
    $(".title-role").textContent = data.heroRole;
    $(".hero-description").textContent = data.heroDescription;
    $(".btn").innerHTML = data.viewWork;

    $(".about .section-label").textContent = data.aboutLabel;
    $(".about h2").textContent = data.aboutTitle;
    $(".about > p").textContent = data.aboutText;

    $(".projects .section-label").textContent = data.projectsLabel;
    $(".projects h2").textContent = data.projectsTitle;

    $$(".filter-btn").forEach((button, index) => {
        button.textContent = data.filters[index];
    });

    $$(".card .overlay h3").forEach((title, index) => {
        title.textContent = data.projectTitles[index];
    });

    $$(".card .overlay span").forEach(label => {
        label.textContent = data.viewDetails;
    });

    $(".work-with-us .section-label").textContent = data.workLabel;
    $(".work-with-us h2").textContent = data.workTitle;
    $(".work-with-us > p").textContent = data.workText;
    $('input[name="email"]').placeholder = data.emailPlaceholder;
    $('input[name="phone"]').placeholder = data.phonePlaceholder;
    $(".work-form button").textContent = data.workButton;

    $(".contact-box .section-label").textContent = data.contactLabel;
    $(".contact-box h2").textContent = data.contactTitle;
    $(".contact-box > p").textContent = data.contactText;
    $("#phoneInput").placeholder = data.phonePlaceholder;
    $("#sendPhoneButton").textContent = data.send;

    $("footer p").childNodes[0].textContent = `${data.footer} `;

    $$(".language-menu button").forEach(button => {
        button.textContent = data.languages[button.dataset.language];
    });

    const activeProject = $("#projectPopup").style.display === "flex"
        ? document.querySelector(".card[data-project]")?.dataset.project
        : null;

    if (activeProject) openProject(activeProject);
}

function openContact() {
    $("#contactPopup").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeContact() {
    $("#contactPopup").style.display = "none";
    document.body.style.overflow = "";
}

function openProject(project) {
    const data = projectData[project];
    const language = translations[currentLanguage];

    if (!data) return;

    $("#popupImage").src = data.image;
    $("#popupImage").alt = language.projectTitles[
        Object.keys(projectData).indexOf(project)
    ];
    $("#popupTitle").textContent = language.projectTitles[
        Object.keys(projectData).indexOf(project)
    ];
    $("#popupDescription").textContent = language.projectDescriptions[project];
    $("#popupTasks").innerHTML = language.projectTasks[project]
        .map(task => `<li>${task}</li>`)
        .join("");

    $(".popup-content .section-label").textContent = language.projectDetails;
    $("#projectPopup").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeProject() {
    $("#projectPopup").style.display = "none";
    document.body.style.overflow = "";
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.dataset.theme === "dark";
    const theme = isDark ? "light" : "dark";

    html.dataset.theme = theme;
    $("#themeButton").textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
}

function setupTypingEffect() {
    const element = $("#typingText");
    const words = ["Graphic Designer", "Brand Specialist", "Visual Artist"];
    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function type() {
        const word = words[wordIndex];

        element.textContent = deleting
            ? word.substring(0, characterIndex--)
            : word.substring(0, characterIndex++);

        let delay = deleting ? 55 : 100;

        if (!deleting && characterIndex > word.length) {
            deleting = true;
            delay = 1400;
        } else if (deleting && characterIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            characterIndex = 0;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();
}

function setupCounters() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.target.dataset.started) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";
            let current = 0;

            counter.dataset.started = "true";

            const timer = setInterval(() => {
                current += Math.ceil(target / 40);

                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                counter.textContent = current + suffix;
            }, 35);
        });
    }, { threshold: .8 });

    $$(".counter").forEach(counter => observer.observe(counter));
}

function setupProjectFilters() {
    $$(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            $$(".filter-btn").forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            $$(".card").forEach(card => {
                const visible = filter === "all" || card.dataset.category === filter;
                card.classList.toggle("hidden", !visible);
            });
        });
    });
}

function setupScrollProgress() {
    window.addEventListener("scroll", () => {
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = pageHeight > 0
            ? (window.scrollY / pageHeight) * 100
            : 0;

        $("#scrollProgress").style.width = `${percentage}%`;
    });
}

function setupActiveNavigation() {
    const sections = $$("main section");
    const links = $$("nav a[href^='#']");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            links.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        });
    }, { threshold: .45 });

    sections.forEach(section => observer.observe(section));
}

function setupTiltCards() {
    $$(".tilt-card").forEach(card => {
        card.addEventListener("mousemove", event => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - .5) * 18;
            const rotateX = ((y / rect.height) - .5) * -18;

            card.style.transform =
                `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

function setupParallax() {
    window.addEventListener("mousemove", event => {
        const x = (event.clientX / window.innerWidth - .5) * 2;
        const y = (event.clientY / window.innerHeight - .5) * 2;

        $$(".parallax").forEach(element => {
            const speed = Number(element.dataset.speed || .04);
            element.style.transform =
                `translate(${x * speed * 35}px, ${y * speed * 35}px)`;
        });

        const glow = $(".cursor-glow");

        if (glow) {
            glow.style.left = `${event.clientX}px`;
            glow.style.top = `${event.clientY}px`;
        }
    });
}

function setupParticles() {
    const canvas = $("#particles");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const particles = [];
    const count = window.innerWidth < 700 ? 35 : 75;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speed: Math.random() * .35 + .1,
            alpha: Math.random() * .6 + .2
        });
    }

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.y -= particle.speed;

            if (particle.y < -10) {
                particle.y = canvas.height + 10;
                particle.x = Math.random() * canvas.width;
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
                `rgba(240, 237, 222, ${particle.alpha})`;

            context.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function setupRevealAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: .15 });

    $$(".reveal, .card").forEach(element => observer.observe(element));
}

function setupPhoneNumber() {
    const directCall = $(".direct-call");
    const phoneNumber = $("#phoneNumber");
    const button = $("#directCallButton");
    const digits = $$(".phone-digit");

    if (!directCall || !phoneNumber || !button || !digits.length) return;

    phoneNumber.style.fontFamily = '"Cinzel", serif';
    phoneNumber.style.fontWeight = "600";
    phoneNumber.style.marginTop = "18px";
    phoneNumber.style.display = "flex";
    phoneNumber.style.justifyContent = "center";
    phoneNumber.style.alignItems = "baseline";
    phoneNumber.style.direction = "ltr";

    digits.forEach((digit, index) => {
        digit.style.fontFamily = '"Cinzel", serif';
        digit.style.opacity = "0";
        digit.style.animation = "none";
        digit.style.animationDelay = `${index * 0.12}s`;
    });

    const animateDigits = () => {
        digits.forEach(digit => {
            digit.style.animation = "none";
            digit.style.opacity = "0";
        });

        void phoneNumber.offsetWidth;

        digits.forEach((digit, index) => {
            digit.style.animation =
                `digitReveal .55s cubic-bezier(.22, 1, .36, 1) ${index * 0.12 + .08}s forwards`;
        });
    };

    const observer = new MutationObserver(() => {
        const isOpen = directCall.classList.contains("is-open");

        if (isOpen) {
            button.style.boxShadow = "0 0 25px rgba(155, 8, 8, .75)";
            animateDigits();
        } else {
            button.style.boxShadow = "";

            digits.forEach(digit => {
                digit.style.animation = "none";
                digit.style.opacity = "0";
            });
        }
    });

    observer.observe(directCall, {
        attributes: true,
        attributeFilter: ["class"]
    });
}

async function sendPhone(event) {
    event?.preventDefault();

    const phone = $("#phoneInput").value.trim();
    const status = $("#contactStatus");
    const language = translations[currentLanguage];

    if (!phone) {
        status.textContent = language.statusEmpty;
        return;
    }

    status.textContent = language.statusSending;

    try {
        const response = await fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone })
        });

        const data = await response.json();

        status.textContent = data.success
            ? language.statusSuccess
            : language.statusError;

        if (data.success) $("#phoneInput").value = "";
    } catch {
        status.textContent = language.statusConnection;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addLanguageControl();
    applyLanguage(currentLanguage);

    $("#contactLink")?.addEventListener("click", event => {
        event.preventDefault();
        openContact();
    });

    $("#themeButton")?.addEventListener("click", toggleTheme);
    $("#closeProjectButton")?.addEventListener("click", closeProject);
    $("#closeContactButton")?.addEventListener("click", closeContact);
    $("#sendPhoneButton")?.addEventListener("click", sendPhone);

    $(".work-form")?.addEventListener("submit", event => {
        event.preventDefault();
        alert(translations[currentLanguage].statusSuccess);
    });

    $$(".card[data-project]").forEach(card => {
        card.addEventListener("click", () => openProject(card.dataset.project));
    });

    window.addEventListener("click", event => {
        if (event.target === $("#projectPopup")) closeProject();
        if (event.target === $("#contactPopup")) closeContact();
    });

    window.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeProject();
            closeContact();
        }
    });

    setupPhoneNumber();

    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("theme") || "dark";

        document.documentElement.dataset.theme = savedTheme;
        $("#themeButton").textContent =
            savedTheme === "dark" ? "🌙" : "☀️";

        $("#currentYear").textContent = new Date().getFullYear();

        setupTypingEffect();
        setupCounters();
        setupProjectFilters();
        setupScrollProgress();
        setupActiveNavigation();
        setupTiltCards();
        setupParallax();
        setupParticles();
        setupRevealAnimation();
    });
});
