<!-- <script setup>


</script>
<template>
    <div>
        <nav>
            <RouterLink to="/">E-Commerce </RouterLink>|
            <RouterLink to="/product">Products </RouterLink>|
            <RouterLink to="/orders">Orders </RouterLink>|
            <RouterLink to="/basket">Basket </RouterLink>
        </nav>
        <br>
        <RouterView />
    </div>


</template> -->
<!-- <script>
import { counterMixins } from './router/counterMixins.js'

export default {
    //ADD THE counterMixins

    mixins: [counterMixins]

}
</script>
<template>
    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
        <counterMixins />
    </div>
</template> -->
<script>
    import StudentScore from "./views/StudentScore.vue";

</script>
<script setup>
    import {ref, computed} from 'vue';

    const message = ref("Hello, World");

    function changeMessage(){
        message.value = "Hello, Vue 3!";
    }
    function clear(){
        message.value = "";

    }
</script>

<template>
  <StudentScore />
<h2>{{ message }}</h2>
<button @click="changeMessage">Change Message</button>
<button @click="clear">Clear Message</button>
</template>


