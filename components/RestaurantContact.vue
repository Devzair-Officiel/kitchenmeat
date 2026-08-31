<template>
    <section class="container">
        <div class="bg">
            <div class="row">
                <div class="col align-center img">
                    <img
src="/images/contact.webp" width="500" height="400" loading="lazy"
                        alt="table avec un panneau resérvé au restaurant Kitchen Meat à Lyon" >
                </div>
                <div class="col align-center">
                    <div class="content">
                        <div class="title-box">
                            <p class="section-subtitle">Faites votre réservation</p>
                            <h2 id="values-title">Contactez nous</h2>
                        </div>
                        <ul class="">
                            <li class="">
                                <svg
xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <p>4 Rue Saint-Philippe, <strong>69003 Lyon</strong></p>
                            </li>
                            <li class="">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                <p>04 26 17 28 08</p>
                            </li>
                            <li class="">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                <p>contact@kitchen-meat.fr</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.container {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    position: static;
}

.bg {
    background: #faf6f3;
    position: relative;
    padding: 50px;
    padding-bottom: 50px;
    padding-bottom: 20px;
}

.img {
    max-width: 500px;
    img {
        width: 100%;
    }
}


h2 {
    font-size: 50px;
    line-height: 1.2em;
    color: #262626;
    font-weight: 400;
    font-family: "Arvo";
    margin-bottom: 50px;
    margin-top: 0;
}

ul {
    list-style: none;
    li {
        display: flex;
        margin: 15px 0;
    }
    svg {
        margin-right: 10px;
    }
    p {
        margin: 0;
    }
}
</style>