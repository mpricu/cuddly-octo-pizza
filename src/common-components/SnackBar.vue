<template>
    <v-snackbar
        bottom
        right
        v-model="snackbar.show"
        :color="snackbar.color"
        :timeout="snackbar.timeout"
    >
        {{ snackbar.message }}
        <v-btn text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data: () => ({}),
    computed: {
        ...mapState('snackbarModule', ['snackbar'])
    },
    mounted() {
        //let error = { message: 'Bau bau!' };
        //this.showError(error);
        this.showSuccess({ message: 'Hello! Welcome to ower pizza store' });
    },
    methods: {
        ...mapActions('snackbarModule', [
            'showSuccess',
            'showError',
            'showWarning',
            'hide'
        ])
    }
};
</script>

<style></style>
