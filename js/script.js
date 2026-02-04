/**
 * Grand Gallery - Centralized Architecture
 */

// Global Master Artworks Data
const MASTER_ARTWORKS = [
    // Nature
    { id: 1, title: "Nature 1", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/1.avif" },
    { id: 2, title: "Nature 2", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/adam-kool-ndN00KmbJ1c-unsplash.jpg" },
    { id: 3, title: "Nature 3", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/blake-verdoorn-cssvEZacHvQ-unsplash.jpg" },
    { id: 4, title: "Nature 4", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/casey-horner-4rDCa5hBlCs-unsplash.jpg" },
    { id: 5, title: "Nature 5", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/enrico-bet-IicyiaPYGGI-unsplash.jpg" },
    { id: 6, title: "Nature 6", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/goutham-krishna-h5wvMCdOV3w-unsplash.jpg" },
    { id: 7, title: "Nature 7", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/jeremy-bishop-EwKXn5CapA4-unsplash.jpg" },
    { id: 8, title: "Nature 8", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/johannes-andersson-UCd78vfC8vU-unsplash.jpg" },
    { id: 9, title: "Nature 9", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/robert-lukeman-_RBcxo9AU-U-unsplash.jpg" },
    { id: 10, title: "Nature 10", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/urban-vintage-78A265wPiO4-unsplash.jpg" },
    { id: 11, title: "Nature 11", artist: "User", category: "Nature", theme: "nature", year: 2024, url: "assets/images/nature/v2osk-1Z2niiBPg5A-unsplash.jpg" },

    // Artwork
    { id: 12, title: "Artwork 1", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/birmingham-museums-trust-5ruS8plfbvM-unsplash.jpg" },
    { id: 13, title: "Artwork 2", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/birmingham-museums-trust-6fv0MEf3FUE-unsplash.jpg" },
    { id: 14, title: "Artwork 3", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg" },
    { id: 15, title: "Artwork 4", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/europeana-5TK1F5VfdIk-unsplash.jpg" },
    { id: 16, title: "Artwork 5", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/europeana-MvR30qxn-MM-unsplash.jpg" },
    { id: 17, title: "Artwork 6", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/europeana-SMWPYQhVRuY-unsplash.jpg" },
    { id: 18, title: "Artwork 7", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/europeana-TjegK_z-0j8-unsplash.jpg" },
    { id: 19, title: "Artwork 8", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/jakub-durian-atGk-qalHsM-unsplash.jpg" },
    { id: 20, title: "Artwork 9", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/library-of-congress-ULl31hxiehE-unsplash.jpg" },
    { id: 21, title: "Artwork 10", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/mcgill-library-COphCQKS660-unsplash.jpg" },
    { id: 22, title: "Artwork 11", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/meric-dagli-7NBO76G5JsE-unsplash.jpg" },
    { id: 23, title: "Artwork 12", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/osman-rana-dI9KhXi0ooE-unsplash.jpg" },
    { id: 24, title: "Artwork 13", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/tamara-menzi-n-vnWQmmVoY-unsplash.jpg" },
    { id: 25, title: "Artwork 14", artist: "User", category: "Art Work", theme: "artwork", year: 2024, url: "assets/images/artwork/yaopey-yong-oDKyhEjOBfc-unsplash.jpg" },

    // Digital Art
    { id: 26, title: "Digital 1", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/8machine-_-GVAYgLlpeZ8-unsplash.jpg" },
    { id: 27, title: "Digital 2", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/alex-shuper-OycvR_0rW8E-unsplash.jpg" },
    { id: 28, title: "Digital 3", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/alex-shuper-aXgYJtVA3A8-unsplash.jpg" },
    { id: 29, title: "Digital 4", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/alexander-park-i6_XX1p7ai4-unsplash.jpg" },
    { id: 30, title: "Digital 5", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/mo-nm8b-BUnzuk-unsplash.jpg" },
    { id: 31, title: "Digital 6", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/note-thanun-GI10ZiPO_3w-unsplash.jpg" },
    { id: 32, title: "Digital 7", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/note-thanun-RUiGsJlkkRo-unsplash.jpg" },
    { id: 33, title: "Digital 8", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/omk-6DhD3VYd9q8-unsplash.jpg" },
    { id: 34, title: "Digital 9", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/sharan-pagadala-5HkxlQFDgN4-unsplash.jpg" },
    { id: 35, title: "Digital 10", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/simon-lee-zA66MV4EyXc-unsplash.jpg" },
    { id: 36, title: "Digital 11", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/steve-johnson-JNgehrAsQ-o-unsplash.jpg" },
    { id: 37, title: "Digital 12", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/steve-johnson-UrovDed1w3Q-unsplash.jpg" },
    { id: 38, title: "Digital 13", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/yumu-MDBojqzl7Mg-unsplash.jpg" },
    { id: 39, title: "Digital 14", artist: "User", category: "Digital Art", theme: "digital", year: 2024, url: "assets/images/digital/zack-walker-GM-FgNYBuo0-unsplash.jpg" },

    // Photography
    { id: 40, title: "Photo 1", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/alex-kalligas--nIpaV-VC1U-unsplash.jpg" },
    { id: 41, title: "Photo 2", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg" },
    { id: 42, title: "Photo 3", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/conor-luddy-IVaKksEZmZA-unsplash.jpg" },
    { id: 43, title: "Photo 4", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/dollar-gill-yqNRxWNrC04-unsplash.jpg" },
    { id: 44, title: "Photo 5", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/fidel-fernando-GuH4_xtKnnM-unsplash.jpg" },
    { id: 45, title: "Photo 6", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/krists-luhaers-YhC216tAYAg-unsplash.jpg" },
    { id: 46, title: "Photo 7", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/marco-xu-P1GL_FSF8po-unsplash.jpg" },
    { id: 47, title: "Photo 8", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/pablo-soriano-Qe5DTJKYM8I-unsplash.jpg" },
    { id: 48, title: "Photo 9", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/sean-pierce-171wBL4YSIc-unsplash.jpg" },
    { id: 49, title: "Photo 10", artist: "User", category: "Photography", theme: "photography", year: 2024, url: "assets/images/photography/silvestre-leon-Q7BcFI3RueM-unsplash.jpg" }
];

// App State
let currentFilter = 'All';
let bookmarks = JSON.parse(localStorage.getItem('gallery_bookmarks')) || [];

// Path Resolver Helper
function resolveArtUrl(url) {
    if (url.startsWith('http')) return url;
    const path = window.location.pathname;
    // If we're in a 'galleries' folder (or any subfolder), prepend ../
    // This is a simple check that works for the current structure
    if (path.includes('/galleries/')) {
        return '../' + url;
    }
    return url;
}

function toggleBookmark(id) {
    id = parseInt(id);
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(bId => bId !== id);
    } else {
        bookmarks.push(id);
    }
    localStorage.setItem('gallery_bookmarks', JSON.stringify(bookmarks));
    renderAll();
}

// Modal Logic
function openModal(id) {
    const art = MASTER_ARTWORKS.find(a => a.id === parseInt(id));
    if (!art) return;

    const modal = document.getElementById('artModal');
    const title = document.getElementById('modalTitle');
    const category = document.getElementById('modalCategory');
    const img = document.getElementById('modalImage');

    if (modal) {
        title.innerText = art.title;
        category.innerText = `${art.category} | ${art.artist}`;
        img.src = resolveArtUrl(art.url);
        img.alt = art.title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('artModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close on click outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('artModal');
    if (e.target === modal) closeModal();
});

function updateFilterButtonsUI(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnText = btn.innerText.trim().toLowerCase();
        const categoryLower = category.toLowerCase();

        // Match 'All Works' with 'All', or exact matches
        if ((categoryLower === 'all' && btnText.includes('all')) || btnText === categoryLower) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setFilter(category) {
    currentFilter = category;
    updateFilterButtonsUI(category);
    renderCollections();
}

// Search Functionality
const searchInput = document.getElementById('gallerySearch');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const filtered = MASTER_ARTWORKS.filter(art =>
            art.title.toLowerCase().includes(query) ||
            art.artist.toLowerCase().includes(query) ||
            art.category.toLowerCase().includes(query)
        );

        if (filtered.length > 0) {
            searchResults.style.display = 'block';
            searchResults.innerHTML = filtered.map(art => `
                <div class="search-item" onclick="window.location.href='collections.html?search=${art.id}'">
                    <img src="${resolveArtUrl(art.url)}" alt="${art.title}">
                    <div class="search-item-info">
                        <div class="search-item-title">${art.title}</div>
                        <div class="search-item-meta">${art.artist} | ${art.category}</div>
                    </div>
                </div>
            `).join('');
        } else {
            searchResults.innerHTML = '<div class="search-no-results">No masterpieces found.</div>';
            searchResults.style.display = 'block';
        }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// 3D Gallery Logic (For sub-pages)
let currentIndex = 0;
let isDragging = false;
let startX = 0;
const radius = 600;

function initSubGallery() {
    const container = document.getElementById('subGalleryContainer');
    if (!container) return;

    const theme = window.currentGalleryTheme;
    const filteredArt = MASTER_ARTWORKS.filter(art => art.theme === theme);

    filteredArt.forEach((art, index) => {
        const item = document.createElement('div');
        item.className = 'artwork-item';

        const angle = (index / filteredArt.length) * (Math.PI * 2);
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const rotY = (index / filteredArt.length) * 360;

        item.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg)`;
        item.innerHTML = `<img src="${resolveArtUrl(art.url)}" alt="${art.title}">`;

        container.appendChild(item);
    });

    let rotationY = 0;
    const updateRotation = () => {
        container.style.transform = `rotateY(${rotationY}deg)`;
    };

    // Button Logic
    document.getElementById('nextBtn')?.addEventListener('click', () => {
        rotationY -= 360 / filteredArt.length;
        updateRotation();
    });

    document.getElementById('prevBtn')?.addEventListener('click', () => {
        rotationY += 360 / filteredArt.length;
        updateRotation();
    });

    // Drag Logic
    let isDragging = false;
    let startX = 0;
    let startRotation = 0;

    const startDrag = (e) => {
        isDragging = true;
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        startRotation = rotationY;
        container.style.transition = 'none'; // Disable transition during drag
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const diffX = currentX - startX;
        rotationY = startRotation + (diffX * 0.1); // Sensitivity factor
        updateRotation();
    };

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        container.style.transition = 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)'; // Re-enable transition

        // Snap to nearest item
        const itemAngle = 360 / filteredArt.length;
        rotationY = Math.round(rotationY / itemAngle) * itemAngle;
        updateRotation();
    };

    container.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', stopDrag);

    // Touch support
    container.addEventListener('touchstart', startDrag);
    window.addEventListener('touchmove', onDrag);
    window.addEventListener('touchend', stopDrag);
}

// Render Collections Grid
function renderCollections() {
    const grid = document.getElementById('collectionsGrid');
    if (!grid) return;

    // Handle Deep-linking via URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    if (urlCategory && currentFilter === 'All') {
        currentFilter = urlCategory;
    }

    updateFilterButtonsUI(currentFilter);

    const filtered = currentFilter === 'All'
        ? MASTER_ARTWORKS
        : MASTER_ARTWORKS.filter(art => art.category === currentFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--clr-text-light);">No items found in this category.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(art => `
        <article class="art-card">
            <div class="art-image" onclick="openModal(${art.id})">
                <img src="${resolveArtUrl(art.url)}" alt="${art.title}">
                <div class="art-overlay">
                    <div class="quick-view-icon">
                        <i data-lucide="eye"></i>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); toggleBookmark(${art.id})" style="position: absolute; top: 1rem; right: 1rem; background: #fff; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; z-index: 10;">
                    <i data-lucide="bookmark" style="color: ${bookmarks.includes(parseInt(art.id)) ? 'var(--clr-accent)' : '#ccc'}"></i>
                </button>
            </div>
            <div class="art-info">
                <h3 class="art-title">${art.title}</h3>
                <div class="art-meta">
                    <span>${art.category}</span>
                    <span>${art.year}</span>
                </div>
            </div>
        </article>
    `).join('');
    lucide.createIcons();
}

// Render Bookmarks Grid
function renderBookmarks() {
    const grid = document.getElementById('bookmarkGrid');
    if (!grid) return;

    const savedArt = MASTER_ARTWORKS.filter(art => bookmarks.includes(parseInt(art.id)));

    if (savedArt.length > 0) {
        const noBookmarks = document.getElementById('noBookmarks');
        if (noBookmarks) noBookmarks.style.display = 'none';

        grid.innerHTML = savedArt.map(art => `
            <article class="art-card">
                <div class="art-image" onclick="openModal(${art.id})">
                    <img src="${resolveArtUrl(art.url)}" alt="${art.title}">
                    <div class="art-overlay">
                        <div class="quick-view-icon">
                            <i data-lucide="eye"></i>
                        </div>
                    </div>
                </div>
                <div class="art-info">
                    <h3 class="art-title">${art.title}</h3>
                    <div class="art-meta">
                        <span>${art.category}</span>
                        <button onclick="toggleBookmark(${art.id})" style="color: red; border: none; background: none; cursor: pointer; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px;">REMOVE FROM COLLECTION</button>
                    </div>
                </div>
            </article>
        `).join('');
    } else {
        const noBookmarks = document.getElementById('noBookmarks');
        if (noBookmarks) noBookmarks.style.display = 'block';
        grid.innerHTML = ''; // Clear anything else
    }
}

// Render Featured works on Home Page
function renderFeaturedHome() {
    const grid = document.getElementById('featuredHomeGrid');
    if (!grid) return;

    // Pick 3 high-quality pieces (or random ones)
    const featured = MASTER_ARTWORKS.filter(art => [7, 15, 25].includes(art.id));

    // If specific IDs aren't found (though they should be), pick first 3
    const displayList = featured.length === 3 ? featured : MASTER_ARTWORKS.slice(0, 3);

    grid.innerHTML = displayList.map(art => `
        <article class="art-card" onclick="openModal(${art.id})">
            <div class="art-image">
                <img src="${resolveArtUrl(art.url)}" alt="${art.title}">
                <div class="art-overlay">
                    <div class="quick-view-icon">
                        <i data-lucide="eye"></i>
                    </div>
                </div>
            </div>
            <div class="art-info">
                <h3 class="art-title">${art.title}</h3>
                <div class="art-meta">
                    <span>${art.category}</span>
                    <span>${art.artist}</span>
                </div>
            </div>
        </article>
    `).join('');
    lucide.createIcons();
}

function renderAll() {
    renderCollections();
    renderBookmarks();
    renderFeaturedHome();
    initSubGallery();
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', renderAll);
