<script setup lang="ts">
// Import Vue Functions
import { useDisplay } from 'vuetify';

// Import Assets
import logo from '@/assets/images/logo.png';

const { mdAndDown } = useDisplay();
</script>

<template>
    <v-app-bar elevation="0" color="#180D48" class="pt-2">
        <v-row justify="space-between" align="center">
            <v-col cols="2">
                <v-img v-if="!mdAndDown" :src="logo" alt="Logo" height="60" />
            </v-col>
            <v-col :cols="mdAndDown ? 6 : 2">
                <div class="d-flex justify-center align-center">
                    <p class="mr-2">Bienvenido</p>
                </div>
            </v-col>
        </v-row>
    </v-app-bar>
</template>