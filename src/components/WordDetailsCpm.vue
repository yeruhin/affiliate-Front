<template>
  <div class="word-details">
    <header>
      <h3>{{word.word}}</h3>
      <button @click="closeModal" class="exit">✖︎</button>
      <hr>
    </header>
    <main>
      <h3>Score : {{word.score}}</h3>
      <h3>Tags: {{word.tags.join()}}</h3>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.word-details {
  max-width: 300px;
  position: fixed;
  left: 50%;
  margin-left: -150px;
  top: 50%;
  margin-top: -150px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 1.5em;
  padding: 50px;
}

ul {
  list-style: none;
}

hr {
  background-color: white;
}

.exit {
  position: absolute;
  right: 10px;
  top: 5px;
}
</style>
