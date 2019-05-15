<template>
  <section class="home-page">
    <affiliate-btns @FetchWords="FetchWords" @ToggleTable="ToggleTable" :isOpen="isTableOpen"/>
    <words-tables v-if="isTableOpen" :tables="tables" @showDetail="showDetail"/>
    <word-details v-if="word" :word="word" @closeModal="closeModal"/>
  </section>
</template>

<script>
import AffiliateBtns from "../components/affiliateBtnsCmp";
import wordsTables from "../components/wordsTablesCpm";
import affiliateService from "../services/affiliateService";
import WordDetails from "../components/WordDetailsCpm";

export default {
  data() {
    return {
      isTableOpen: false,
      tables: [],
      word: null
    };
  },
  components: {
    AffiliateBtns,
    wordsTables,
    WordDetails
  },
  methods: {
    FetchWords() {
      affiliateService
        .loadWords()
        .then(res => this.$toast.Success("Words Successfully Fetched!"))
        .catch(err => this.$toast.Error("Something goes wrong"));
    },
    ToggleTable() {
      if (this.isTableOpen) {
        this.isTableOpen = false;
        return;
      }
      affiliateService
        .query()
        .then(res => {
          this.tables = res;
          this.isTableOpen = true;
          this.$toast.Success("Enjoy!");
        })
        .catch(err => this.$toast.Error("Something goes wrong"));
    },
    showDetail(id) {
      this.tables.forEach(table => {
        let res = table.find(cell => cell._id === id);
        if (res) this.word = res;
      });
    },
    closeModal() {
      this.word = null;
    }
  }
};
</script>
