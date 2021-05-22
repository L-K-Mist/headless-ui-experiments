<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <BasePopover />
    <base-right-slideover>
      <div>
        <p>
          I like how we can really decide exactly how we want stuff to be
          displayed.
        </p>
      </div>
    </base-right-slideover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasePopover from "@/components/BasePopover.vue";
import BaseRightSlideover from "@/components/BaseRightSlideover.vue";

export default defineComponent({
  name: "Home",
  components: {
    BasePopover,
    BaseRightSlideover,
  },
});
</script>

<style>
p {
  color: hsl(217deg 4% 40%);
}
</style>
