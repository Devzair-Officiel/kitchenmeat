<script setup lang="ts">
import FooterPublic from '~/components/navigation/FooterPublic.vue';
import NavBar from '~/components/navigation/NavBar.vue';

</script>

<template>
    <div>
        <NavBar />
    </div>
    <div class="default">
        <NuxtPage />
        <footer>
            <FooterPublic />
        </footer>
    </div>
</template>

<style scoped lang="scss">
.default {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
}
</style>