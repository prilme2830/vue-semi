<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  id: Number,
  email: String,
  course: String,
  yearLevel: String,
});
</script>
<template>
  <h1>Student Information</h1>
  <h4>Student Name: {{ name }}</h4>
  <h4>Student ID: {{ id }}</h4>
  <h4>Student Email: {{ email }}</h4>
  <h4>Student Course: {{ course }}</h4>
  <h4>Student Year Level: {{ yearLevel }}</h4>
</template>