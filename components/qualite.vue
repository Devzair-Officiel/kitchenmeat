<template>
    <div class="content">
        <div class="img-background">
            <div class="img-overlay">
                <h2>Qualité supérieure</h2>
                <p>Rien que le meilleur dans vos assiettes</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.img-background {
    width: 100vw;
    height: 500px;
    background-image: url('../assets/pictures/brochette.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-overlay {
        color: white;
        text-align: center;
        z-index: 1;

        h2 {
            font-size: 90px;
            color: white;
            font-family: 'Yellowtail';
            letter-spacing: 2px;
            margin: 0;
        }

        p {
            font-size: 14px;
            line-height: 14px;
            font-weight: 400;
            font-family: 'Montserrat', 'Helvetica Neue', Arial, Verdana, sans-serif;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 2px;
            background-color: transparent;
        }
    }

    // Optionnel : ajouter un fond semi-transparent pour améliorer la lisibilité
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4); // fondu sombre
        z-index: 0;
    }
}
</style>