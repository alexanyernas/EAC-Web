<script setup lang="ts">
// Import Vue Components
import HeroSection from '@/components/Section/HeroSection.vue';
import BenefitsSection from '@/components/Section/BenefitsSection.vue';
import StatisticsSection from '@/components/Section/StatisticsSection.vue';
import WorkWithUsSection from '@/components/Section/WorkWithUsSection.vue';
</script>

<template>
    <hero-section />
    <statistics-section class="mb-12"/>
    <benefits-section class="mb-12"/>
    <work-with-us-section class="mb-12"/>
</template>