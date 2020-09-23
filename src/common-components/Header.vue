<template>
    <header>
        <nav class="site-nav">
            <div class="logo">
                <a href="/" class="item">Cuddly Octo Pizza Store</a>
            </div>
            <ul>
                <li>
                    <router-link exact to="/">Home</router-link>
                </li>
                <li>
                    <router-link exact :to="{ path: '/pizza-menu' }"
                        >Menu</router-link
                    >
                </li>
                <li v-if="isLoggedIn">
                    <router-link
                        exact
                        :to="{
                            name: 'UserProfile',
                            params: { id: localUser.id }
                        }"
                        >User Info</router-link
                    >
                </li>
            </ul>
        </nav>
        <div class="actions" v-bind:title="actionsToolTip">
            <button v-if="isLoggedIn" class="signOut-link" @click="logOut">
                Welcome {{ userName }}
            </button>
            <router-link v-else to="/authenticate" class="signIn-link"
                >Login</router-link
            >
        </div>
    </header>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            actionsToolTip: "User's actions",
            localUser: null
        };
    },
    computed: {
        userName: function() {
            return `${this.localUser.firstName} ${this.localUser.lastName}`;
        },
        isLoggedIn: function() {
            return !!this.localUser;
        }
    },
    watch: {
        user: function(newVal) {
            console.log(newVal);
            this.localUser = newVal;
        }
    },
    methods: {
        logOut() {
            localStorage.removeItem('user');
            this.$root.$emit('userLoggedOut');
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
    cursor: pointer;
}
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 10px 3px rgb(156, 156, 156);
}
header > nav {
    display: flex;
    flex-direction: row;
}
header > nav > .logo {
    font-size: 1.4rem;
    place-self: center;
    padding: 10px 20px;
}
header > nav > ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;
}
header > nav > ul > li:not(:first-of-type)::before {
    content: '|';
    opacity: 0.4;
    padding-right: 10px;
}
.site-nav {
    display: flex;
    margin: 0;
    padding: 0;
}
.actions {
    margin-left: auto;
    display: flex;
    margin-right: 10px;
}
.signIn-link {
    color: #bb4a4a;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0 10px;
}
.router-link-active {
    border-bottom: 2px solid tomato;
}
.signOut-link {
    all: unset;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0 10px;
    color: #4a4abb;
}
</style>
