<script setup lang="ts">
// Import Vue Components
import MainMenu from '@/components/Navigation/MainMenu.vue';
import FooterSection from '@/components/Section/FooterSection.vue';
</script>

<template>
    <v-layout>
        <v-main>
            <main-menu />
            <router-view />
            <footer-section />
        </v-main>
    </v-layout>
</template>