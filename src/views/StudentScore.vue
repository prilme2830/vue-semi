<script setup>
import { useStudentScore } from "../router/useStudentScore";


const {
  studentName,
  score,
  addPoints,
  deductPoints,
  resetScore
} = useStudentScore();
</script>
<script>
import studentMixin from "../router/studentMixin";

export default {
  mixins: [studentMixin]
};
</script>


<template>
  <div>
    <h2>Student Score Manager</h2>

    <p>Student Name: {{ studentName }}</p>
    <p>Score: {{ score }}</p>

    <button @click="addPoints">Add 1</button>
    <button @click="deductPoints">Deduct 1</button>
    <button @click="resetScore">Reset</button>
  </div>
</template>