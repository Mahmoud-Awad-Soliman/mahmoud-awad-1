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

    if (!data) return;

    $("#popupImage").src = data.image;
    $("#popupImage").alt = data.title;
    $("#popupTitle").textContent = data.title;
    $("#popupDescription").textContent = data.description;
    $("#popupTasks").innerHTML = data.tasks
        .map(task => `<li>${task}</li>`)
        .join("");

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
    $(".theme-btn").textContent = isDark ? "☀️" : "🌙";
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
    const counters = $$(".counter");

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
    }, { threshold: 0.8 });

    counters.forEach(counter => observer.observe(counter));
}

function setupProjectFilters() {
    $$(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            $$(".filter-btn").forEach(item => item.classList.remove("active"));
            button.classList.add("active");

            $$(".card").forEach(card => {
                const show = filter === "all" || card.dataset.category === filter;
                card.classList.toggle("hidden", !show);
            });
        });
    });
}

function setupScrollProgress() {
    const progress = $("#scrollProgress");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = pageHeight > 0 ? (scrollTop / pageHeight) * 100 : 0;

        progress.style.width = `${percentage}%`;
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
    }, { threshold: 0.45 });

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

async function sendPhone() {
    const phone = $("#phoneInput").value.trim();
    const status = $("#contactStatus");

    if (!phone) {
        status.textContent = "من فضلك اكتب رقم التليفون";
        return;
    }

    status.textContent = "جاري الإرسال...";

    try {
        const response = await fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone })
        });

        const data = await response.json();
        status.textContent = data.success
            ? "تم الإرسال بنجاح"
            : "حصلت مشكلة";

        if (data.success) {
            $("#phoneInput").value = "";
        }
    } catch {
        status.textContent = "مش قادر اتصل بالسيرفر";
    }
}

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

window.addEventListener("scroll", () => {
    const header = $("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, .88)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.3)";
    } else {
        header.style.background = "var(--header-bg)";
        header.style.boxShadow = "none";
    }
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    document.documentElement.dataset.theme = savedTheme;
    $(".theme-btn").textContent = savedTheme === "dark" ? "🌙" : "☀️";
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
