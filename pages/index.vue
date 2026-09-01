<template>
    <header class="hero-header">
        <video
ref="videoEl"
class="background-video" autoplay muted loop playsinline
               poster="/images/intro-poster.webp" />

        <nav class="navbar">
            <input id="burger" v-model="menuOpen" type="checkbox" hidden>
            <label for="burger" class="burger"/>

            <ul class="nav-left">
                <li><a href="#">Accueil</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">À propos</a></li>
            </ul>

            <div class="logo">
                <img
src="/images/logo.webp" alt="Logo Kitchen Meat"
                     width="140" height="140" fetchpriority="high">
            </div>

            <ul class="nav-right">
                <li><a href="tel:04 26 17 28 08">04 26 17 28 08</a></li>
            </ul>

            <ul class="mobile-menu" :class="{ open: menuOpen }">
                <li><a href="#">Accueil</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="tel:04 26 17 28 08">04 26 17 28 08</a></li>
            </ul>
        </nav>

        <div class="hero-content">
            <h1>Restaurant de grillades à Lyon – Kitchen Meat</h1>
            <p>Grillades d’exception — viande 100% fraîche & produits locaux</p>
        </div>

    </header>

    <div class="intro">
        <RestaurantIntro />
    </div>
    <div>
        <RestaurantMenu />
    </div>
    <div class="about">
        <RestaurantAbout />
    </div>
    <div>
        <RestaurantQualite />
    </div>
    <div class="contact">
        <RestaurantContact />
    </div>
</template>

<script setup>
const menuOpen = ref(false)
const videoEl = ref(null)
let videoTimer = null

const handleResize = () => {
    if (window.innerWidth > 850) {
        menuOpen.value = false
    }
}

const loadVideo = () => {
    if (!videoEl.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const source = document.createElement('source')
    source.src = '/images/intro.mp4'
    source.type = 'video/mp4'
    videoEl.value.appendChild(source)
    videoEl.value.load()
    const p = videoEl.value.play()
    if (p !== undefined) p.catch(() => {})
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    if (document.readyState === 'complete') {
        videoTimer = setTimeout(loadVideo, 2000)
    } else {
        window.addEventListener('load', () => {
            videoTimer = setTimeout(loadVideo, 2000)
        }, { once: true })
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (videoTimer !== null) clearTimeout(videoTimer)
})

useHead({
  title: 'Restaurant grillades à Lyon – Kitchen Meat',
  meta: [
    { name: 'description', content: 'Kitchen Meat, restaurant à Lyon spécialisé dans les grillades. Viandes fraîches, cuisson au feu de bois, ambiance chaleureuse et produits maison.' },
    { name: 'keywords', content: 'restaurant grillade lyon, viande grillée, restaurant viande lyon, barbecue lyon, cuisine maison lyon' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Kitchen Meat - Restaurant de grillades à Lyon' },
    { property: 'og:description', content: 'Viandes fraîches, cuisson au feu de bois, produits maison – Kitchen Meat, restaurant grillade à Lyon.' },
    { property: 'og:image', content: 'https://www.kitchenmeat.fr/images/brochette.webp' },
    { property: 'og:url', content: 'https://www.kitchenmeat.fr' },
    { property: 'og:type', content: 'restaurant' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.kitchenmeat.fr' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Kitchen Meat",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lyon",
          "addressCountry": "France"
        },
        "servesCuisine": ["Grillades", "Viande", "Cuisine maison"],
        "url": "https://www.kitchenmeat.fr",
        "telephone": "+33426172808"
      })
    }
  ]
})

</script>



<style lang="scss" scoped>
@use '../assets/scss/utils/variables' as *;

.intro {
    padding: 10px 0;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
}

.contact {
    margin: 100px 0;
}

.about {
    margin: 100px 0;
}

/* HEADER */
.hero-header {
    position: relative;
    height: 100vh;
    min-height: 650px;
    width: 100%;
    background: none;
    color: #ffffff;

    // Ajoute cette pseudo-classe pour le filtre sombre
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.321); // Ajuste l'opacité selon tes préférences
        z-index: 1;
    }

    .navbar,
    .hero-content {
        position: relative;
        z-index: 2; // Pour rester au-dessus du filtre
    }

    .navbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 20px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
        border-bottom: thick double #ffffff;

        ul {
            display: flex;
            gap: 20px;
            list-style: none;

            li {
                a {
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                    letter-spacing: 1px;

                    &:hover {
                        color: #c7a17a;
                    }
                }
            }
        }

        @media screen and (max-width: 850px) {
            padding: 45px 100px;

            ul {
                display: block;
            }
        }
    }

    .logo {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;

        img {
            height: 140px;
            border-radius: 50%;
            border: thick double #ffffff;
            background-color: #ffffff;
        }
    }


}

.hero-content {
    position: absolute;
    top: 15em;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;

    h1 {
        font-size: 6em;
        font-style: italic;
        color: #d7b48c;
        margin: 0;
        font-family: 'arkipelagoregular';
        width: 75vw;
        margin: 0 auto;
    }

    h3 {
        font-size: 3em;
        font-weight: bold;
        letter-spacing: 2px;
        color: #ffffff;
        margin: 0;
        top: 25px;
        position: relative;
    }

    p {
        font-size: 2em;
        letter-spacing: 2px;
        margin: auto;
        width: 85%;
    }

}

/* OVERLAY IMAGE */
.img-overlay {
    background-image: url("/images/bg-header-overlay.webp");
    filter: brightness(0) saturate(100%) invert(1);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -97.3px;
    margin-bottom: 0;
    position: relative;
    height: 47.2px;
}

@media screen and (max-width: 850px) {
    .hero-content {
        h1 {
            font-size: 4em;
            width: 95vw;
        }

        h3 {
            font-size: 2em;
        }
    }

}

@media screen and (max-width: 480px) {
    .hero-content {
        h1 {
            font-size: 3em;
        }

        h3 {
            font-size: 1.5em;
        }

        p {
            font-size: 1em;
        }

        top: 19em;
    }
}

.burger {
    display: none;
    position: absolute;
    top: 25px;
    left: 20px;
    width: 30px;
    height: 24px;
    cursor: pointer;
    border-top: 4px solid coral;
    border-bottom: 4px solid coral;
    transition: transform 0.3s;

    &::before {
        content: '';
        position: absolute;
        top: 8px;
        left: 0;
        width: 100%;
        height: 4px;
        background: coral;
        transition: 0.3s;
    }
}

#burger:checked+.burger {
    transform: rotate(135deg);
    border-color: silver;

    &::before {
        background: silver;
        transform: rotate(90deg);
    }
}

.mobile-menu {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: rgb(34, 34, 34);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease;

    li {
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;

        a {
            display: block;
            color: #404040;
            padding: 12px 20px;
            font-weight: bold;
            border-bottom: 1px solid #f073144c;
            text-align: left;

            &:hover {
                color: coral;
            }
        }
    }

    &.open {
        max-height: 500px;

        li {
            opacity: 1;
            transform: translateY(0);
        }

        @for $i from 1 through 4 {
            li:nth-child(#{$i}) {
                transition-delay: ($i - 1) * 0.1s;
            }
        }
    }
}

// Activation responsive
@media (max-width: 850px) {
    .burger {
        display: block;
    }

    .nav-left,
    .nav-right {
        display: none !important;
    }
}
</style>
