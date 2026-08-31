<template>
    <section id="menu" class="container" aria-labelledby="menu-title">
        <div class="food-menu">
            <div class="title-box text-center">
                <p class="sub-title">Choisisez & Savourez</p>
                <h2 id="menu-title">Découvrer notre carte</h2>
            </div>

            <ul class="row menu-list">
                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Assiette 3 viandes au choix</h4>
                        <p>Salade fraîche + frites maison ou gratin maison</p>
                        <div class="price">12€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Tacos double viande</h4>
                        <p>Crudités, sauce au choix + boisson</p>
                        <div class="price">9€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Menu tacos double viande</h4>
                        <p>Crudités, barquette de frites + boisson</p>
                        <div class="price">10€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Sandwich double viande</h4>
                        <p>Crudités, frites à l’intérieur + boisson</p>
                        <div class="price">9€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Menu sandwich double viande</h4>
                        <p>Crudités, frites + boisson</p>
                        <div class="price">10€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Hamburger viande fraîche</h4>
                        <p>Pain brioché, steak bœuf grillé</p>
                        <div class="price">3€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Supplément viande</h4>
                        <p>Ajoutez une portion de viande au choix</p>
                        <div class="price">2€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Omelette / Sandwich / Assiette</h4>
                        <p>Avec sauce au choix</p>
                        <div class="price">5€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Frites maison</h4>
                        <p>Barquette de frites fraîches croustillantes</p>
                        <div class="price">3€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Gratin maison</h4>
                        <p>Portion généreuse et crémeuse</p>
                        <div class="price">5€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Salade fraîche</h4>
                        <p>Salade verte, maïs, thon, olive, tomates, oignons</p>
                        <div class="price">6€</div>
                    </div>
                </li>

                <li class="menu-item colum">
                    <div class="menu-block">
                        <h4>Supplément sauce maison</h4>
                        <p>Harissa, burger, mayo, BBQ, etc.</p>
                        <div class="price">1€</div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>


<style scoped lang="scss">
.container {
    position: relative;
    padding: 120px 90px;
    background: #faf6f3;

    @media screen and (max-width: 1350px) {
        padding: 120px 0;
    }
}

.row {
    justify-content: space-around;

    @media screen and (max-width: 1350px) {
        padding: 0;
    }
}


.colum {
    width: 45%;

    @media screen and (max-width: 1050px) {
        width: 95%;
    }
}

li {
    list-style: none;
}

.food-menu {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    position: static;
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
    margin-top: 0;
}

.menu-block {
    position: relative;
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;

    h4 {
        position: relative;
        font-size: 20px;
        line-height: 26px;
        color: #262626;
        font-weight: 400;
        font-family: "Arvo";
        margin: 0;
    }

    p {
        font-size: 16px;
        line-height: 26px;
        color: #808080;
        font-weight: 400;
        font-family: "Lato", sans-serif;
        margin: 5px 0 25px 0;
    }

    .price {
        position: absolute;
        top: 10px;
        right: 0;
        font-size: 20px;
        line-height: 26px;
        color: #262626;
        font-weight: 400;
        font-family: "Arvo";

        @media screen and (max-width: 450px) {
            position: relative;
            top: 0;
            margin-bottom: 30px;
        }
    }
}
</style>