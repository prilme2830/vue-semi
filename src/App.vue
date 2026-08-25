<script setup>
// import FormActivity from "./components/FormActivity.vue";

import StudentForm from "./components/StudentForm.vue";

// import Form1 from "./components/Form1.vue";

// function receiveStudent(studentData) {
//   // console.log(student.studName);
//   // console.log(student.course);
//   // console.log(student.year);
//   alert(
//     `Student: ${studentData.studName}\nCourse: ${studentData.course}\nYear: ${studentData.year}`,
//   );
//   console.log(studentData);
// }



function handleStudent(student) {
  console.log("Student submitted:", student);
 
}
</script>

<template>
  <div>
    <!-- <FormActivity /> -->
    <StudentForm @submitted="handleStudent" />
    

    <!-- <Form1 /> -->
  </div>
</template>
