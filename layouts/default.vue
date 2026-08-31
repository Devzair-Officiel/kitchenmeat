<script setup lang="ts">
import FooterPublic from '~/components/navigation/FooterPublic.vue'
</script>

<template>
  <div class="default">
    <NuxtPage />
    <footer>
      <FooterPublic />
    </footer>
  </div>
</template>

<style scoped lang="scss">
.default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
