<template>
    <h1>Nothuing to see here</h1>
</template>


<script>
import LoginService from '@/services/LoginService.js'
export default {
    created() {
        console.log(`1`)
        LoginService.logout()
        console.log(`2`)
        this.$store.commit("logoutUser");
        this.$router.push({name: 'Home'})
    }
}
</script>
