<template>
  <section class="tables">
    <table>
      <tr>
        <th>
          <h1>
            Affiliate
            <span>{{tables[0].length}}</span>
          </h1>
        </th>
        <th>
          <h1>
            Marketing
            <span>{{tables[1].length}}</span>
          </h1>
        </th>
        <th>
          <h1>
            Influencer
            <span>{{tables[2].length}}</span>
          </h1>
        </th>
      </tr>
      <tr v-for="(row,idx) in tables[0]" :key="idx" @click="showDetails">
        <td :id="tables[0][idx]._id">{{tables[0][idx].word}}</td>
        <td :id="tables[1][idx]._id">{{tables[1][idx].word}}</td>
        <td :id="tables[2][idx]._id">{{tables[2][idx].word}}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    tables: {
      type: Array,
      required: true
    }
  },
  methods: {
    showDetails(e) {
      this.$emit("showDetail", e.target.id);
    }
  }
};
</script>

<style scoped>
.tables {
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
th {
  border-bottom: 1px solid #25252563;
}
td:hover {
  color: gray;
  cursor: pointer;
}
td,
th {
  text-align: left;
  padding: 7px;
}
h1 > span {
  font-size: 0.4em;
  color: #5a6268;
}
td:nth-child(1),
th:nth-child(1) {
  background: hsl(150, 50%, 50%);
}
td:nth-child(2),
th:nth-child(2) {
  background: hsl(160, 60%, 50%);
}
td:nth-child(3),
th:nth-child(3) {
  background: hsl(170, 70%, 50%);
}
</style>
