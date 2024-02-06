<template>
  <div class="legend">
    <div class="legend-item" v-for="status in statusOptions" :key="status">
      <div class="legend-color" :class="'status' + status">{{ status }}</div>
      <span>{{ getStatusLabel(status) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusOptions: ['P', 'V', 'A', 'T', 'Aj', 'Tj'],
    };
  },
  methods: {
    getStatusLabel(status) {
      // Agrega etiquetas descriptivas para los estados aquí
      switch (status) {
        case 'P':
          return 'Presente';
        case 'V':
          return 'Virtual';
        case 'A':
          return 'Ausente';
        case 'T':
          return 'Tarde';
        case 'Aj':
          return 'Ausente Justificado';
        case 'Tj':
          return 'Tarde Justificado';
        default:
          return 'Desconocido';
      }
    },
  },
};
</script>

<style scoped>
.legend {
  display: flex;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.legend-color {
  width: 20px;
  height: 20px; /* Cambiamos la altura para hacerlo cuadrado */
  margin-right: 5px;
  text-align: center;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.statusP {
  background-color: green;
}

.statusV {
  background-color: blue;
}

.statusA {
  background-color: red;
}

.statusT {
  background-color: orange;
}

.statusAj {
  background-color: purple;
}

.statusTj {
  background-color: pink;
}
</style>
