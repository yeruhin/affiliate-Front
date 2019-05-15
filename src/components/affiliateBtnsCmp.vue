<template>
  <section class="btns">
    <button type="button" class="btn btn-primary" @click="FetchWords">Fetch-Words</button>
    <button type="button" class="btn btn-secondary" @click="ToggleTable">{{btnContext}}</button>
  </section>
</template>

<script>
export default {
  props:{
    isOpen :{
      type : Boolean,
      required  : true
    }
  },
  methods: {
    FetchWords() {
      this.$emit("FetchWords");
    },
    ToggleTable() {
      this.$emit('ToggleTable')
    }
  },
  computed:{
    btnContext(){
      return ( this.$props.isOpen) ? 'Close-Report' : 'Show-Report'
    }
  },
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
