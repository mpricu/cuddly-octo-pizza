<template>
    <!-- <div>
        <button @click="loginUser">Log In</button>
    </div> -->

    <v-container fluid>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <v-card width="400px" class="mt-5 mx-a">
                    <v-flex xs12 class="text-xs-center" mt-5>
                        <!-- <v-card-title class="pb-0"> -->
                        <h1 class="display-1">
                            Login
                        </h1>
                        <!-- </v-card-title> -->
                    </v-flex>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="Username"
                                prepend-icon="mdi-account-circle"
                            />
                            <v-text-field
                                :type="showPassword ? 'text' : 'password'"
                                label="Password"
                                prepend-icon="mdi-lock"
                                :append-icon="
                                    showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append="showPassword = !showPassword"
                            />
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn color="success">Register</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="info" @click="loginUser">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import userService from '../services/user.service';
export default {
    data() {
        return {
            showPassword: false
        };
    },
    methods: {
        async loginUser() {
            const user = await userService.authenticateUser(
                'gianni@pizza-love.me'
            );
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                this.$root.$emit('userLoggedIn');
            }
            this.$router.push('pizza-menu');
        }
    }
};
</script>

<style lang="scss" scoped></style>
