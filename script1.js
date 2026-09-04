(function loadPortfolioScript() {
    const script = document.createElement("script");

    script.src = "script1.js";

    script.onload = () => {
        document.addEventListener("DOMContentLoaded", enhancePortfolio);

        if (document.readyState !== "loading") {
            document.dispatchEvent(new Event("DOMContentLoaded"));
        }

        if (document.readyState === "complete") {
            window.dispatchEvent(new Event("load"));
        }
    };

    document.currentScript.after(script);
})();

function enhancePortfolio() {
    const cardsContainer = document.querySelector(".cards");
    const tools = document.querySelector(".project-tools");

    if (!cardsContainer || !tools) return;

    const style = document.createElement("style");

    style.textContent = `
        .project-tools {
            row-gap: 12px;
        }

        .card:not(.hidden) {
            animation: galleryCardIn .32s ease both;
        }

        @keyframes galleryCardIn {
            from {
                opacity: .25;
                transform: translateY(8px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #popupDescription {
            animation: projectDescriptionIn .35s ease both;
        }

        .project-description-refresh {
            animation: projectDescriptionIn .35s ease both;
        }

        @keyframes projectDescriptionIn {
            from {
                opacity: 0;
                transform: translateY(7px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .popup-project-gallery {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-bottom: 20px;
        }

        .popup-project-gallery img {
            width: 100%;
            max-height: 420px;
            margin: 0;
            border-radius: 15px;
            object-fit: cover;
        }

        .popup-project-gallery img:only-child {
            grid-column: 1 / -1;
        }

        @media (max-width: 600px) {
            .project-tools {
                padding: 0 4px;
            }

            .filter-btn {
                padding: 9px 14px;
                font-size: 12px;
            }

            .popup-project-gallery {
                grid-template-columns: 1fr;
            }

            .popup-project-gallery img {
                max-height: 360px;
            }
        }
    `;

    document.head.appendChild(style);

    const categories = [
        {
            filter: "perfume",
            label: "Perfume / Luxury Fragrance"
        },
        {
            filter: "youtube",
            label: "YouTube Thumbnails"
        },
        {
            filter: "academic",
            label: "Academic Design"
        }
    ];

    categories.forEach(category => {
        if (tools.querySelector(`[data-filter="${category.filter}"]`)) return;

        const button = document.createElement("button");

        button.className = "filter-btn";
        button.type = "button";
        button.dataset.filter = category.filter;
        button.textContent = category.label;

        tools.appendChild(button);
    });

    if (!cardsContainer.querySelector('[data-project="pandora-jewellery"]')) {
        const pandoraCard = document.createElement("article");

        pandoraCard.className = "card tilt-card";
        pandoraCard.dataset.category = "branding";
        pandoraCard.dataset.project = "pandora-jewellery";

        pandoraCard.innerHTML = `
            <div class="card-number">04</div>

            <img
                src="https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003138.png"
                alt="Pandora Jewellery black and white branding project"
            >

            <div class="overlay">
                <h3>Pandora Jewellery</h3>
                <span>View Details ↗</span>
            </div>
        `;

        cardsContainer.appendChild(pandoraCard);

        pandoraCard.addEventListener("click", () => {
            const popup = document.querySelector("#projectPopup");
            const image = document.querySelector("#popupImage");
            const title = document.querySelector("#popupTitle");
            const description = document.querySelector("#popupDescription");
            const tasks = document.querySelector("#popupTasks");

            if (!popup || !image || !title || !description || !tasks) return;

            removeExtraProjectImages();

            image.src =
                "https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003138.png";
            image.alt = "Pandora Jewellery black and white branding project";
            title.textContent = "Pandora Jewellery";

            description.textContent =
                "Training branding project for Pandora Jewellery Store. I focused on creating a luxurious and memorable visual identity through monogram design, typography, color palette, logo composition, and premium brand positioning. The black, white, ivory, and gold color scheme was selected to communicate elegance, prestige, and timeless luxury.";

            refreshDescription(description);

            tasks.innerHTML = `
                <li>Monogram design</li>
                <li>Typography and logo composition</li>
                <li>Luxury color palette</li>
                <li>Premium brand positioning</li>
            `;

            popup.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    if (!cardsContainer.querySelector('[data-project="purple-veil"]')) {
        const perfumeCard = document.createElement("article");

        perfumeCard.className = "card tilt-card";
        perfumeCard.dataset.category = "perfume";
        perfumeCard.dataset.project = "purple-veil";

        perfumeCard.innerHTML = `
            <div class="card-number">01</div>

            <img
                src="https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003211.png"
                alt="Purple Veil luxury perfume branding project"
            >

            <div class="overlay">
                <h3>Purple Veil</h3>
                <span>View Details ↗</span>
            </div>
        `;

        cardsContainer.appendChild(perfumeCard);

        perfumeCard.addEventListener("click", openPurpleVeilProject);
    }

    if (!cardsContainer.querySelector('[data-project="youtube-electricity"]')) {
        const youtubeCard = document.createElement("article");

        youtubeCard.className = "card tilt-card";
        youtubeCard.dataset.category = "youtube";
        youtubeCard.dataset.project = "youtube-electricity";

        youtubeCard.innerHTML = `
            <div class="card-number">02</div>

            <img
                src="https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003212.png"
                alt="Educational electricity YouTube thumbnail design"
            >

            <div class="overlay">
                <h3>YouTube Thumbnail</h3>
                <span>View Details ↗</span>
            </div>
        `;

        cardsContainer.appendChild(youtubeCard);

        youtubeCard.addEventListener("click", openYouTubeProject);
    }

    function reorderGalleryCards() {
        const preferredOrder = [
            "purple-veil",
            "youtube-electricity",
            "pandora-jewellery"
        ];

        const cards = [...cardsContainer.querySelectorAll(".card")];

        cards.sort((firstCard, secondCard) => {
            const firstProject = firstCard.dataset.project;
            const secondProject = secondCard.dataset.project;

            const firstIndex = preferredOrder.includes(firstProject)
                ? preferredOrder.indexOf(firstProject)
                : preferredOrder.length;

            const secondIndex = preferredOrder.includes(secondProject)
                ? preferredOrder.indexOf(secondProject)
                : preferredOrder.length;

            if (firstIndex !== secondIndex) {
                return firstIndex - secondIndex;
            }

            return cards.indexOf(firstCard) - cards.indexOf(secondCard);
        });

        cards.forEach((card, index) => {
            const number = card.querySelector(".card-number");

            if (number) {
                number.textContent = String(index + 1).padStart(2, "0");
            }

            cardsContainer.appendChild(card);
        });
    }

    function refreshDescription(description) {
        description.classList.remove("project-description-refresh");
        void description.offsetWidth;
        description.classList.add("project-description-refresh");
    }

    function removeExtraProjectImages() {
        document
            .querySelectorAll(".popup-project-gallery-extra")
            .forEach(image => image.remove());

        const gallery = document.querySelector(".popup-project-gallery");

        if (!gallery) return;

        const popupImage = document.querySelector("#popupImage");

        if (popupImage && gallery.contains(popupImage)) {
            gallery.parentNode.insertBefore(popupImage, gallery);
        }

        gallery.remove();
    }

    function openPurpleVeilProject() {
        const popup = document.querySelector("#projectPopup");
        const popupImage = document.querySelector("#popupImage");
        const title = document.querySelector("#popupTitle");
        const description = document.querySelector("#popupDescription");
        const tasks = document.querySelector("#popupTasks");

        if (!popup || !popupImage || !title || !description || !tasks) return;

        let gallery = document.querySelector(".popup-project-gallery");

        if (!gallery) {
            gallery = document.createElement("div");
            gallery.className = "popup-project-gallery";
            popupImage.parentNode.insertBefore(gallery, popupImage);
            gallery.appendChild(popupImage);
        }

        document
            .querySelectorAll(".popup-project-gallery-extra")
            .forEach(image => image.remove());

        popupImage.src =
            "https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003211.png";
        popupImage.alt = "Purple Veil luxury perfume branding presentation";

        const secondImage = document.createElement("img");

        secondImage.className = "popup-project-gallery-extra";
        secondImage.src =
            "https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003206.png";
        secondImage.alt = "Purple Veil luxury perfume packaging design";

        gallery.appendChild(secondImage);

        title.textContent = "Purple Veil";

        description.textContent =
            "Purple Veil is a luxury perfume branding and packaging design concept inspired by elegance, mystery, and feminine confidence. The visual identity combines deep purple tones, gold accents, crystal-inspired details, and floral elements to create a refined and memorable premium fragrance experience.\n\nThe project includes the perfume bottle presentation, packaging direction, product advertising composition, brand messaging, and social media visual concept. The design focuses on creating a luxurious visual language that communicates sophistication, long-lasting fragrance, and timeless elegance.\n\nDesign Focus: Brand Identity, Product Packaging, Art Direction, Advertising Design, Visual Storytelling, and Luxury Branding.\n\nRole: Brand Designer and Art Director.";

        description.style.whiteSpace = "pre-line";
        refreshDescription(description);

        tasks.innerHTML = `
            <li>Brand Identity</li>
            <li>Product Packaging</li>
            <li>Art Direction</li>
            <li>Advertising Design</li>
            <li>Visual Storytelling</li>
            <li>Luxury Branding</li>
        `;

        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function openYouTubeProject() {
        const popup = document.querySelector("#projectPopup");
        const image = document.querySelector("#popupImage");
        const title = document.querySelector("#popupTitle");
        const description = document.querySelector("#popupDescription");
        const tasks = document.querySelector("#popupTasks");

        if (!popup || !image || !title || !description || !tasks) return;

        removeExtraProjectImages();

        image.src =
            "https://uploads.onecompiler.io/44ssreqmg/44xbvrtf7/1000003212.png";
        image.alt = "Educational electricity YouTube thumbnail design";

        title.textContent = "YouTube Thumbnail";

        description.textContent =
            "This is a training project focused on designing an engaging YouTube thumbnail for an educational electricity video. The main goal was to create a clear and attention-grabbing visual that communicates the topic quickly and encourages viewers to click.\n\nIn this project, I focused on visual hierarchy, strong color contrast, readable Arabic typography, subject placement, facial expression, directional pointing, and the use of electricity-related visual elements to support the message. I also worked on balancing the presenter’s image with the headline, creating a dynamic composition, and maintaining readability across different screen sizes.\n\nThe design combines a bold blue background, yellow headline typography, electric effects, and a clear focal point to create an energetic educational look suitable for YouTube.\n\nProject Type: Training Project\nFocus: YouTube Thumbnail Design, Visual Hierarchy, Arabic Typography, Composition, Color Theory, and Educational Content Design.";

        description.style.whiteSpace = "pre-line";
        refreshDescription(description);

        tasks.innerHTML = `
            <li>Training Project</li>
            <li>YouTube Thumbnail Design</li>
            <li>Visual Hierarchy</li>
            <li>Arabic Typography</li>
            <li>Composition and Color Theory</li>
            <li>Educational Content Design</li>
        `;

        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    const categoryLabels = new Map(
        categories.map(category => [
            category.filter,
            category.label
        ])
    );

    const restoreCategoryLabels = () => {
        tools.querySelectorAll(".filter-btn").forEach(button => {
            const label = categoryLabels.get(button.dataset.filter);

            if (label && button.textContent !== label) {
                button.textContent = label;
            }
        });
    };

    const labelObserver = new MutationObserver(restoreCategoryLabels);

    labelObserver.observe(tools, {
        subtree: true,
        childList: true,
        characterData: true
    });

    restoreCategoryLabels();
    reorderGalleryCards();
}
