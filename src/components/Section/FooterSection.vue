<script setup lang="ts">
// Import Assets
import logo from '@/assets/images/logo.png';
</script>

<template>
    <v-footer class="bg-dark px-12">
        <div class="py-12 text-white text-left">
            <v-img :src="logo" alt="Logo" height="60" position="left" class="mb-4" />
            <p class="mb-12">Tu mejor forma de aprender sobre<br>inteligencia artificial</p>
            <p>&copy; {{ new Date().getFullYear() }} Universidad Central de Venezuela (UCV). Todos los Derechos Reservados.</p>
        </div>
    </v-footer>
</template>