<script setup>


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


</template>
