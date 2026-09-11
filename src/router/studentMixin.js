export default {
  data() {
    return {
      studentName: "April"
    };
  },

  methods: {
    displayStudent() {
      console.log("Student Name:", this.studentName);
    }
  }
};