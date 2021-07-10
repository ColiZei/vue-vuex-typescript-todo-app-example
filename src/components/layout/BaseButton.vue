<template>
  <button
    :disabled="disabled"
    :class="{
      [bgColorNotDisabled]: !disabled,
      [bgColorActive]: !disabled,
      'bg-gray-400': disabled,
    }"
    class="
      text-white
      font-bold
      uppercase
      text-xs
      px-4
      py-2
      rounded
      shadow
      outline-none
      focus:outline-none
      ml-2
    "
    :type="type"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
    color: {
      type: String,
      required: false,
      default: "green",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const bgColor = computed(() => `bg-${props.color}`);
    const bgColorNotDisabled = computed(() => `${bgColor.value}-500`);
    const bgColorActive = computed(() => `active:${bgColor.value}-600`);

    return {
      bgColor,
      bgColorNotDisabled,
      bgColorActive,
    };
  },
});
</script>

<style scoped></style>
