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
    width: 100%;
    height: 500px;
    background-image: url('/images/brochette.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        background-image: url('/images/brochette-mobile.webp');
        background-attachment: scroll;
    }

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

            @media (max-width: 600px) {
                font-size: 60px;
            }
        }

        p {
            font-size: 14px;
            line-height: 14px;
            font-weight: 400;
            font-family: 'Helvetica Neue', Arial, Verdana, sans-serif;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 2px;
            background-color: transparent;
        }
    }

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 0;
    }
}
</style>
