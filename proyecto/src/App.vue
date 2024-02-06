<template>
  <div id="app">
    <div class="student-list">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
        @update-status="handleStatusUpdate"
      />
    </div>
    <LegendDetails />
    
  </div>
</template>

<script>
import StudentCard from './components/StudentCard.vue';
import LegendDetails from './components/LegendDetails.vue';
import { users } from './backend/users.js';

export default {
  name: 'App',
  components: {
    StudentCard,
    LegendDetails
  },
  data() {
    return {
      students: users
    };
  },
  methods: {
    handleStatusUpdate({ id, newStatus }) {
      const studentIndex = this.students.findIndex(s => s.id === id);
      if (studentIndex !== -1) {
        this.students[studentIndex].status = newStatus;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.student-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}
</style>
