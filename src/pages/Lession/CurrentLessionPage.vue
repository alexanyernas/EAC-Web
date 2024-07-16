<script setup lang="ts">
// Import Vue Functions
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

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
        <v-btn 
            size="x-large"
            color="white"
            variant="plain"
            icon="mdi-arrow-left-drop-circle-outline"
            @click="router.push({
                name: 'SelectLession'
            })"
        />
        <p class="text-h2 text-white text-center font-weight-bold mb-12">{{ lessionStore.getCurrentLessionTitle }}</p>
    </v-container>
</template>