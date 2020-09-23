<template>
    <div>
        <button @click="loginUser">Log In</button>
    </div>
</template>

<script>
import userService from '../services/user.service';
export default {
    methods: {
        async loginUser() {
            const user = await userService.authenticateUser(
                'gianni@pizza-love.me'
            );
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                this.$root.$emit('userLoggedIn');
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
