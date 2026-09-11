import { ref } from "vue";

export function useStudentScore() {
  const studentName = ref("April");
  const score = ref(0);

  function addPoints() {
    score.value++;
  }

  function deductPoints() {
    score.value--;
  }

  function resetScore() {
    score.value = 0;
  }

  return {
    studentName,
    score,
    addPoints,
    deductPoints,
    resetScore
  };
}