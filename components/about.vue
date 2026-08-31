<template>

    <div class="container">
        <section id="about" aria-labelledby="values-title">
        <div class="row">
            <div class="col align-center">
                <div class="content">
                    <div class="title-box">
                        <p class="sub-title">Nos valeurs fondamentales</p>
                        <h2 id="values-title">Plus qu’un repas, une expérience de partage et de passion</h2>
                    </div>
                    <p>
                        Chez <strong>Kitchen Meat</strong>, chaque plat raconte une histoire de passion, de convivialité et d’authenticité. Nous ne nous contentons pas de servir des assiettes : nous offrons des instants mémorables.
                    </p>
                    <p>
                        Générosité, respect des produits, sourcing local et accueil chaleureux sont les piliers de notre cuisine. Nos chefs mettent un point d’honneur à travailler des viandes fraîches et savoureuses dans une ambiance familiale et sincère.
                    </p>
                </div>
            </div>
            <div class="col align-center">
                <img src="../assets/pictures/1.png"
                    alt="Grillades maison servies au restaurant Kitchen Meat à Lyon, illustrant les valeurs de convivialité et d'authenticité">
            </div>
        </div>
    </section>

    </div>

</template>

<style lang="scss" scoped>
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
    margin-top: 0;

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

img {
    width: 100%;
}

@media screen and (max-width: 1100px) {
    h2 {
        font-size: 35px;
    }

    .col {
        flex: 1 1 90%;
        flex-direction: column-reverse;
    }
}

</style>