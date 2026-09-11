<script setup>
export default{
    data(){
        return {
            message: "Hello, World!"
        
        }
    },
    methods: {
        changeMessage(){
            this.message = "Hi, Vue!"
        },
        clear(){
            this.message = ""
        }

    }
    
}
</script>
<template>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">Change Message</button>
    <button @click="clear">Clear</button>
</template>