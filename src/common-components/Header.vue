<template>
    <v-app-bar color="indigo" dark app>
        <v-toolbar-title>Cuddly Octo Pizza Store</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items v-show="!$vuetify.breakpoint.smAndDown">
            <!-- <v-btn v-for="item in menu" :key="item.title" :to="item.link" text>
                <v-icon left>{{ item.icon }}</v-icon>
                {{ item.title }}</v-btn
            > -->

            <v-btn text rounded to="/"
                ><v-icon left>mdi-home</v-icon>Home</v-btn
            >
            <v-btn to="/pizza-menu" text
                ><v-icon left>mdi-silverware</v-icon>Menu</v-btn
            >
            <v-btn to="/cart" text
                ><v-icon left>mdi-cart</v-icon>
                Shopping Cart
                <v-badge
                    v-if="getCartItemsNumber"
                    color="red"
                    :content="getCartItemsNumber"
                >
                </v-badge>
            </v-btn>
            <v-btn to="/authenticate" v-if="!isLoggedIn" text
                ><v-icon left>mdi-account</v-icon>Login
            </v-btn>
            <v-btn
                v-if="isLoggedIn"
                text
                :to="{
                    name: 'UserProfile',
                    params: { id: localUser.id }
                }"
                ><v-icon left>mdi-account-edit</v-icon>User Info
            </v-btn>
            <v-btn v-if="isLoggedIn" @click="logOut" text
                ><v-icon left>mdi-account-off</v-icon> {{ userName }}
            </v-btn>
        </v-toolbar-items>

        <v-menu v-if="$vuetify.breakpoint.smAndDown">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-card class="mx-auto" max-width="300" tile>
                <v-list>
                    <v-list-item-group color="primary">
                        <v-list-item
                            v-for="item in menu"
                            :to="item.link"
                            :key="item.title"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title
                                    v-text="item.title"
                                ></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item v-if="!isLoggedIn" to="/authenticate">
                            <v-list-item-icon
                                ><v-icon>
                                    mdi-account
                                </v-icon></v-list-item-icon
                            >
                            <v-list-item-content>
                                Login
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                            v-if="isLoggedIn"
                            :to="{
                                name: 'UserProfile',
                                params: { id: localUser.id }
                            }"
                        >
                            <v-list-item-icon
                                ><v-icon>
                                    mdi-account-edit
                                </v-icon></v-list-item-icon
                            >
                            <v-list-item-content class="justify-center">
                                User Info
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item v-if="isLoggedIn" @click="logOut">
                            <v-list-item-icon
                                ><v-icon>
                                    mdi-account-off
                                </v-icon></v-list-item-icon
                            >
                            <v-list-item-content>
                                {{ userName }}
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['user'],
    data() {
        return {
            actionsToolTip: "User's actions",
            localUser: null,
            menu: [
                { icon: 'mdi-home', title: 'Home', link: '/' },
                {
                    icon: 'mdi-silverware',
                    title: 'Menu',
                    link: 'pizza-menu'
                },
                {
                    icon: 'mdi-cart',
                    title: 'Shopping Cart',
                    link: 'cart'
                }
            ]
        };
    },
    computed: {
        ...mapGetters('menuModule', ['getCartItemsNumber']),

        userName: function() {
            return `${this.localUser.firstName} ${this.localUser.lastName}`;
        },
        isLoggedIn: function() {
            return !!this.localUser;
        }
    },
    watch: {
        user: function(newVal) {
            // console.log(newVal);
            this.localUser = newVal;
        }
    },
    methods: {
        logOut() {
            localStorage.removeItem('user');
            this.$root.$emit('userLoggedOut');
            this.$router.push('/pizza-menu');
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
    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; */
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
    background-color: transparent;
    color: white;
}

.signIn-link {
    color: white;
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 0 10px;
}

.signOut-link {
    all: unset;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 0 10px;
    color: #4a4abb;
}
</style>
