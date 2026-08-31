<template>
    <div class="container">
        <section class="features" aria-labelledby="features-title">
            <h2 id="features-title">Nos engagements pour une viande d’exception</h2>
            <div class="row">
                <article class="col block">
                    <div class="icon">
                        <img src="../assets/icons/chef.png"
                            alt="Chef cuisinier professionnel spécialisé en grillades à Lyon" />
                    </div>
                    <h3>Chefs spécialisés en viandes grillées</h3>
                    <p>Nos chefs passionnés subliment chaque pièce de viande avec savoir-faire et créativité. Une
                        expérience gustative digne des meilleures tables.</p>
                </article>

                <article class="col block">
                    <div class="icon">
                        <img src="../assets/icons/quality.png"
                            alt="Icône de certification qualité restaurant viande Lyon" />
                    </div>
                    <h3>Qualité supérieure garantie</h3>
                    <p>De la sélection des produits à l’assiette, nous garantissons une qualité irréprochable, pour une
                        cuisine sincère et authentique.</p>
                </article>

                <article class="col block">
                    <div class="icon">
                        <img src="../assets/icons/vache.png" alt="Viande fraîche de bœuf livrée chaque jour à Lyon" />
                    </div>
                    <h3>Viandes fraîches du jour</h3>
                    <p>Chaque jour, nos viandes sont livrées fraîches, soigneusement choisies pour leur tendreté et leur
                        goût incomparable.</p>
                </article>

                <article class="col block">
                    <div class="icon">
                        <img src="../assets/icons/trendy.png" alt="Cuisine moderne et tendance à Lyon" />
                    </div>
                    <h3>Cuisine moderne et authentique</h3>
                    <p>Entre grillades maison et inspirations urbaines, notre cuisine mêle tradition et modernité pour
                        ravir tous les palais.</p>
                </article>
            </div>
        </section>

        <!-- Section à propos -->
        <section class="about" aria-labelledby="about-title">
            <div class="row">
                <div class="col align-center">
                    <div class="img-two">
                        <img src="../assets/pictures/presentation.jpg"
                            alt="Assiette de grillades servie au restaurant Kitchen Meat à Lyon">
                    </div>
                </div>
                <div class="col align-center">
                    <div class="content">
                        <div class="title-box">
                            <p class="sub-title">À propos de <strong>Kitchen Meat</strong></p>
                            <h2 id="about-title">L’esprit grillades, dans le centre de Lyon</h2>
                        </div>
                        <p>
                            Bienvenue chez <strong>Kitchen Meat</strong>, où la passion de la viande fraîche rime avec
                            convivialité.
                            Dans une ambiance chaleureuse et décontractée, nos chefs vous préparent des grillades
                            savoureuses, faites maison,
                            avec des produits de qualité. Que ce soit pour un dîner entre amis ou un repas en famille,
                            vivez une expérience gustative unique au cœur de Lyon.
                        </p>
                        <h3>Nos horaires d’ouverture</h3>
                        <ul class="opening-hours">
                            <li><strong>Lundi à jeudi :</strong> <time datetime="18:30">18h30</time> – <time
                                    datetime="23:30">23h30</time></li>
                            <li><strong>Vendredi & samedi :</strong> <time datetime="18:00">18h00</time> – <time
                                    datetime="01:00">01h00</time></li>
                            <li><strong>Dimanche :</strong> <time datetime="18:00">18h00</time> – <time
                                    datetime="00:00">00h00</time></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>


<style lang="scss" scoped>
.hero-content {
    color: rgb(43, 43, 43);
    text-align: center;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.403);
    padding: 1rem;
}

.features {
    margin-top: 80px;
}

.block {
    border: 1px solid #e5e5e5;
    padding: 44.5px 20px;
    text-align: center;
    transition: 0.5s;
    background: white;
    width: 20%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .icon {
        margin-bottom: 20px;
        position: relative;
        display: inline-block;

        img {
            height: auto;
            max-width: 100%;
            border: none;
            border-radius: 0;
            box-shadow: none;
        }
    }


}



.sub-title {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 30px;
    color: #f38b1c;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 5px;
}

h2 {
    font-size: 50px;
    line-height: 1.2em;
    color: #262626;
    font-weight: 400;
    font-family: "Arvo";
    margin-bottom: 50px;
    margin-top: 10px;
    text-align: center;
    @media screen and (max-width: 700px) {
        margin-top: 10px;
        text-align: start;
        font-size: 2.3em;
    }
}

ul {
    font-size: 16px;
    line-height: 30px;
    color: #262626;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    position: relative;
    padding-left: 20px;
    margin-bottom: 50px;
    list-style: none;

    ::before {
        background: #f38b1c;
        position: absolute;
        content: '';
        left: 0;
        top: 10px;
        bottom: 8px;
        width: 3px;
    }
}

.img-one {
    position: absolute;
    left: 476.4px;
    top: -145.7px;
    z-index: -1;

    img {
        height: auto;
        max-width: 100%;
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
}

.img-two {
    height: 100%;
    max-width: 500px;

    img {
        height: 550px;
        width: 100%;
    }
}
</style>