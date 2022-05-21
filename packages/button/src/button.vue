<template>
  <div>
    <button @click="handleClick" class="rod-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'RodxButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      evt.preventDefault();
    }
  }
}
</script>

<style lang="scss">
.rod-button {
  width: 30px;
}
</style>