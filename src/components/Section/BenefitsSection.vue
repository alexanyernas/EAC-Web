<script setup lang="ts">
// Import Vue Functions
import { useDisplay } from 'vuetify';

// Import Assets
import onePng from '@/assets/images/1-min.png';
import oneWebp from '@/assets/images/1-min.webp';
import twoPng from '@/assets/images/2-min.png';
import twoWebp from '@/assets/images/2-min.webp';
import threePng from '@/assets/images/3-min.png';
import threeWebp from '@/assets/images/3-min.webp';

const { mdAndDown } = useDisplay();
</script>

<template>
    <div class="bg-primary-color">
        <v-container v-if="!mdAndDown">
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <v-img :src="onePng" alt="onePng" width="400" height="400">
                        <template #sources>
                            <source :srcset="oneWebp" />
                        </template>
                    </v-img>
                </v-col>
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Aprendizaje Continuo
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Recursos Asíncronos
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img :src="twoPng" alt="twoPng" width="400" height="400">
                        <template #sources>
                            <source :srcset="twoWebp" />
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <v-img :src="threePng" alt="threePng" width="400" height="400">
                        <template #sources>
                            <source :srcset="threeWebp" />
                        </template>
                    </v-img>
                </v-col>
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Videos explicativos + Texto
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else>
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Aprendizaje Continuo
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img :src="onePng" alt="onePng" width="400" height="400">
                        <template #sources>
                            <source :srcset="oneWebp" />
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Recursos Asíncronos
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img :src="twoPng" alt="twoPng" width="400" height="400">
                        <template #sources>
                            <source :srcset="twoWebp" />
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <v-row justify="space-evenly" align="center">
                <v-col cols="12" lg="4">
                    <p class="secondary-color mb-4 font-weight-bold text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        Videos explicativos + Texto
                    </p>
                    <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit expedita tempore natus quidem atque sequi esse modi facere. Voluptas.</p>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img :src="threePng" alt="threePng" width="400" height="400">
                        <template #sources>
                            <source :srcset="threeWebp" />
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>