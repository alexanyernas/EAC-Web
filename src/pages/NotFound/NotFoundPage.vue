<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';

// Import Assets
import logo from '@/assets/images/logo.png';

const router = useRouter();
</script>

<template>
    <div class="bg-primary-color h-screen">
        <v-btn 
            size="x-large"
            color="white"
            variant="plain"
            icon="mdi-arrow-left-drop-circle-outline"
            @click="router.push({
                name: 'Home'
            })"
        />
        <div class="container">
            <v-img :src="logo" width="250" class="mx-auto mb-6" alt="Logo" />
            <p class="text-white text-center font-weight-bold text-h4">La página que intentas solicitar no está en el servidor (Error 404).</p>
        </div>
    </div>
</template>

<style scoped>
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>