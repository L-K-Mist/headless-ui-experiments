<template>
  <div class="home">
    <Report/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Report from "@/components/Report"

export default defineComponent({
  name: "Home",
  components: {
    Report
  },
});
</script>

<style>
p {
  color: hsl(217deg 4% 40%);
}

.form {
  border: 1px dotted blue;
  height: 80vh;
}

.form-group {
  border: 1px dotted blue;
  height: 70vh;
}
</style>
