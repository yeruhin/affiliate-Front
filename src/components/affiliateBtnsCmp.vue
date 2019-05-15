<template>
  <section class="btns">
    <button type="button" class="btn btn-primary" @click="FetchWords">Fetch-words</button>
    <button type="button" class="btn btn-secondary" @click="ShowWords">Show-report</button>
  </section>
</template>

<script>
export default {
  methods: {
    FetchWords() {
      this.$emit("FetchWords");
    },
    ShowWords() {
      this.$emit("ShowWords");
    }
  }
};
</script>

<style>
.btns {
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  margin: auto;
}
</style>
