<script setup lang="ts">
// Import Vue Functions
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Vue Components
import CurrentLessionHeader from '@/components/Headers/CurrentLessionHeader.vue';

// Import Data
const router = useRouter();
const lessionStore = useLessionStore();

onMounted(() => {
    if (!lessionStore.getCurrentLessionTitle)
        router.push({
            name: 'SelectLession'
        });
});
</script>

<template>
    <v-container>
        <current-lession-header />
        <v-row justify="center">
            <v-col class="text-center" cols="12" v-if="lessionStore.getCurrentLessionVideo && lessionStore.getCurrentLessionVideo.length">
                <div v-html="lessionStore.getCurrentLessionVideo"></div>
            </v-col>
            <v-col class="text-white" cols="12" v-if="lessionStore.getCurrentLessionContent && lessionStore.getCurrentLessionContent.length">
                <div v-for="(section, index) in lessionStore.getCurrentLessionContent" :key="index">
                    <div v-html="section"></div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>