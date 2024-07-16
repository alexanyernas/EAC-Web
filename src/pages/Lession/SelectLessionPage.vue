<script setup lang="ts">
// Import Vue Functions
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import { LessionItemModel } from '@/models';
import { useLessionStore } from '@/plugins/pinia';

// Import Data
import { lessionItems } from '@/data/lessionItems.ts';

const { mdAndDown } = useDisplay();
const router = useRouter();
const lessionStore = useLessionStore();

const handleGoToLession = (value: LessionItemModel) => {
    lessionStore.setCurrentLession(value);
    router.push({
        name: 'CurrentLession'
    });
}
</script>

<template>
    <v-container>
        <v-btn 
            size="x-large"
            color="white"
            variant="plain"
            icon="mdi-arrow-left-drop-circle-outline"
            @click="router.push({
                name: 'Home'
            })"
        />
        <p class="text-h2 text-white text-center font-weight-bold mb-12">Seleccione la Sección <br>de su Preferencia</p>
        <v-timeline align="start" v-if="!mdAndDown">
            <v-timeline-item v-for="(lession, index) in lessionItems" :key="lession.id" class="text-white" size="x-small" dot-color="#84FFFF">
                <div :class="index % 2 === 0 ? 'text-left' : 'text-right'">
                    <p class="font-weight-bold text-h3" :class="index % 2 === 0 ? 'purple-color' : 'secondary-color'">SECCIÓN {{ index + 1 }}</p>
                    <p class="font-weight-bold mb-4">{{ lession.title }}</p>
                    <p class="mb-12">{{ lession.description }}</p>
                    <v-btn 
                        rounded
                        size="large"
                        text="Iniciar"
                        color="#84FFFF"
                        variant="outlined"
                        @click="handleGoToLession(lession)"
                    />
                </div>
            </v-timeline-item>
        </v-timeline>
        <v-row v-else>
            <v-col lg="12" v-for="(lession, index) in lessionItems" :key="lession.id" class="text-white text-center">
                <div class="mb-8">
                    <p class="font-weight-bold text-h3" :class="index % 2 === 0 ? 'purple-color' : 'secondary-color'">SECCIÓN {{ index + 1 }}</p>
                    <p class="font-weight-bold mb-4">{{ lession.title }}</p>
                    <p class="mb-4">{{ lession.description }}</p>
                    <v-btn 
                        rounded
                        size="large"
                        text="Iniciar"
                        color="#84FFFF"
                        variant="outlined"
                        @click="handleGoToLession(lession)"
                    />
                </div>
            </v-col lg="12">
        </v-row>
    </v-container>
</template>