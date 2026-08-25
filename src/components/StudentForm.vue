<script setup>
import StudentDisplay from './StudentDisplay.vue'
import {ref} from 'vue'

const studName = ref('')
const studID = ref('')
const email = ref('')
const course = ref('')
const year_level = ref('')


const emit = defineEmits(["student-submitted"])

function submitStudent(){
    alert('Student Submit')
    emit('submitted',  {
        name: studName.value,
        studentID: studID.value,
        email: email.value,
        course: course.value,
        yearLevel: year_level.value
    })
}

</script>
<template>
     <h1>Form Requirements</h1>
    <form @submit.prevent="submitStudent">
        <label>        
            <input v-model="studName" type="text" placeholder="Enter student name.."><br>
        </label>
       <label>
        <input v-model="studID" type="text" placeholder="Enter student id.."><br>
        </label>
        <label>
            <input v-model="email" type="email" placeholder="Enter your email"><br>
        </label>
       
        <label>
        <select v-model="course"><br>
            <option>BSIT</option>
            <option>BSCS</option>
            <option>BSIS</option>
        </select><br>
        </label>
      <label><input type="radio" value="1st Year" v-model="year_level">Year 1</label>
      <label><input type="radio" value="2nd Year" v-model="year_level">Year 2</label>
      <label><input type="radio" value="3rd Year" v-model="year_level">Year 3</label>
      <label><input type="radio" value="4th Year" v-model="year_level">Year 4</label>
      <br>

        <button type="submit">Submit</button>

    </form>


    <StudentDisplay
    :name="studName"
    :id="studID"
    :email="email"
    :course="course"
    :yearLevel="year_level" 
  />

    <hr>
    
</template>