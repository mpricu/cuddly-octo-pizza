<template>
    <div id="app">
        <div class="header">
            <Header :user="user" />
        </div>
        <div>
            <h1>Main Router View</h1>
            <transition name="drop" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <SnackBar />
    </div>
</template>

<script>
import Header from './common-components/Header';
import SnackBar from './common-components/SnackBar';

export default {
    name: 'App',
    components: {
        Header,
        SnackBar
    },
    data() {
        return {
            user: null
        };
    },
    created() {
        this.$root.$on('userLoggedIn', () => {
            this.user = JSON.parse(localStorage.getItem('user'));
        });
        this.$root.$on('userLoggedOut', () => {
            this.user = null;
        });

        console.log('created');
    },
    mounted() {
        console.log('mounted');
        if (localStorage.getItem('user')) {
            this.user = JSON.parse(localStorage.getItem('user'));
        } else {
            this.user = null;
        }
    },
    methods: {}
};
</script>

<style>
body,
html {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
* {
    font-family: 'Nunito', sans-serif;
}
#app {
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    flex: 0 0 60px;
}
.container {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    overflow-y: auto;
    margin-top: 3%;
}
.item {
    font-weight: bold;
    text-align: center;
}

.drop-enter-active {
    transition: opacity 1s ease-in;
}

.drop-enter-to,
.drop-enter {
}

.drop-enter-to {
    opacity: 1;
}

.drop-enter {
    opacity: 0;
}

.drop-leave-active {
    transition: opacity 1s ease-out;
}

.drop-leave {
    opacity: 1;
}
.drop-leave-to {
    opacity: 0;
}
</style>
