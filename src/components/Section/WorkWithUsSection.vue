<script setup lang="ts">
// Import Assets
import fourPng from '@/assets/images/4-min.png';
import fourWebp from '@/assets/images/4-min.webp';
</script>

<template>
    <div class="bg-primary-color">
        <v-container class="container_work-with-us px-0">
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="6" class="pl-6 mt-6">
                    <p class="text-h3 font-weight-bold mb-6">Contribuye con nosotros</p>
                    <p>Nuestro propósito es ayudarte a mejorar tu calidad de aprendizaje gracias a la IA, ayúdanos para continuar con nuestro objetivo.</p>
                </v-col>
                <v-col cols="12" lg="6">
                    <v-img :src="fourPng" alt="fourPng" cover>
                        <template #sources>
                            <source :srcset="fourWebp" />
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.container_work-with-us {
    border-radius: 60px;
    background: linear-gradient(180deg, #84FFFF 0%, #D3C4EE 79.59%, #F8BBD0 103.12%);
}
</style>