<template>
  <div>
    <h1>Detalles del Estudiante</h1>
    <p>Nombre: {{ studentName }}</p>
    <p>Estado: {{ studentStatus }}</p>
  </div>
</template>

<script>
export default {
  props: {
    studentName: String,
    studentStatus: String,
  },
};
</script>

