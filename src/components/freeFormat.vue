<template>

  <div style="padding: 20px;">
    <p>-ご相談内容-</p>
    <textarea name="FreeFormat" id="FreeFormat" cols="150" rows="40" v-model="freeFormatData.freeFormat"></textarea>

    <nav>
      <router-link to="/Questions">もどる</router-link>
      <router-link to="/AllData">次へ</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  computed: {
    freeFormatData() {
      return this.$store.state.freeFormatData;
    }
  },
};
</script>