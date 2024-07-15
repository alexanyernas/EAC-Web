<template>
    <div class="bg-primary-color">
        <v-container class="container_statistics py-8">
            <v-row justify="space-evenly">
                <v-col cols="12" lg="2">
                    <p class="font-weight-bold secondary-color text-h5 d-flex align-center">
                        <v-icon icon="mdi-circle" size="14" class="mr-2"/>
                        240
                    </p>
                    <p class="text-white">Estudiantes felices</p>
                </v-col>
                <v-divider vertical color="blue-grey-lighten-4"/>
                <v-col cols="12" lg="2">
                    <p class="font-weight-bold text-white text-h5">8 h</p>
                    <p class="text-white">De capacitación</p>
                </v-col>
                <v-divider vertical color="blue-grey-lighten-4"/>
                <v-col cols="12" lg="2">
                    <p class="font-weight-bold text-white text-h5">6 módulos</p>
                    <p class="text-white">De enseñanza</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.container_statistics {
    border-radius: 20px;
    background: rgba(24, 13, 72, 0.20);
    backdrop-filter: blur(13.591408729553223px);
}
</style>