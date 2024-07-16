<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';

// Import Assets
import bgHeroPng from '@/assets/images/bg-hero-min.png';
import bgHeroWebp from '@/assets/images/bg-hero-min.webp';

const router = useRouter();
</script>

<template>
    <v-container fluid class="bg-primary-color mt-2">
        <v-row justify="space-between" align="center">
            <v-col cols="12" lg="7" class="px-8">
                <h1 class="mb-6 text-h3 font-weight-bold text-white">CHATBOTS COMO ALIADOS:<br>REDACCIÓN DE PROMPTS PARA EL APRENDIZAJE</h1>
                <p class="text-white mb-4 text-h6">Descubre como utilizar la inteligencia artificial como herramienta para tu formación.</p>
                <v-btn 
                    rounded
                    size="large"
                    color="#84FFFF"
                    text="Iniciar capacitación"
                    @click="router.push({
                        name: 'SelectLession'
                    })"
                />
            </v-col>
            <v-col cols="12" lg="4" class="pa-0">
                <v-img :src="bgHeroPng" alt="bgHeroPng" class="image-hero">
                    <template #sources>
                        <source :srcset="bgHeroWebp" />
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>