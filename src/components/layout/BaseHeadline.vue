<template>
  <h2 class="text-xl font-semibold"><slot /></h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseHeadline",
});
</script>
