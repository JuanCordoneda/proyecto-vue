<template>
  <div class="student-card" @click="handleClick">
    <img :src="student.avatar" alt="Avatar" class="student-avatar" />
    <h3>{{ student.name }}</h3>
    <div class="student-status-buttons">
      <button
        v-for="status in statusOptions"
        :key="status"
        :class="[
          'status-button',
          { 'active': student.status === status },
          getStatusClass(status)
        ]"
        @click.stop="setStatus(status)"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      statusOptions: ['P', 'V', 'A', 'T', 'Aj', 'Tj'],
    };
  },
  methods: {
    handleClick() {
      this.$router.push(`/detalles/${this.student.id}`);
      alert(`ID: ${this.student.id}, Nombre: ${this.student.name}, Estado: ${this.student.status}`);
    },
    setStatus(newStatus) {
      this.$emit('update-status', { id: this.student.id, newStatus });
    },
    getStatusClass(status) {
      const classes = {
        'status-presente': status === 'P',
        'status-virtual': status === 'V',
        'status-ausente': status === 'A',
        'status-tarde': status === 'T',
        'status-ausente-justificado': status === 'Aj',
        'status-tarde-justificado': status === 'Tj',
      };
      return classes;
    }
  }
}
</script>

<style scoped>
.student-card {
  cursor: pointer;
  padding: 20px;
  margin: 10px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  width: calc(25% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.student-card:hover {
  transform: translateY(-5px);
}

.student-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
}
.student-status-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.student-status-buttons button {
  margin: 5px;
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  opacity: 0.5;
}
.status-presente { background-color: green; }
.status-virtual { background-color: rgb(10, 132, 239); }
.status-ausente { background-color: red; }
.status-tarde { background-color: orange; }
.status-ausente-justificado { background-color: purple; }
.status-tarde-justificado { background-color: rgb(232, 123, 230); }
.status-button.active {
  border-color: black;
  position: relative;
  top: -2px;
  opacity: 1;
}
</style>
