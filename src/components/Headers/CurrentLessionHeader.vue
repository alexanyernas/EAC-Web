<script setup lang="ts">
// Import Vue Functions
import { useRouter } from 'vue-router';
import { useLessionStore } from '@/plugins/pinia';

// Import Data
const router = useRouter();
const lessionStore = useLessionStore();
</script>

<template>
    <div>
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
    </div>
</template>