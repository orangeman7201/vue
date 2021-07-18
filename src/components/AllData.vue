<template>
  <div style="padding: 20px;">
    <p>-性別-</p>
    <p>{{userData.sex}}</p>
    <br>
    <p>-生年月日-</p>
    <p>{{userData.birthyear}}{{userData.birthmonth}}月{{userData.birthday}}日</p>
    <br>
    <p>現在、生命保険に加入していますか？</p>
    <p>{{answerData.question1}}</p>
    <br>
    <p>現在入院中ですか？</p>
    <p>{{answerData.question2}}</p>
    <br>
     <p>７日以上の入院はしたことありますか？</p>
    <p>{{answerData.question3}}</p>
    <br>
    <p>-ご相談内容-</p>
    <p>{{freeFormatData.freeFormat}}</p>
  <router-link to="/freeFormat">もどる</router-link>
  <router-link to="">次へ</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    answerData() {
      return this.$store.state.answerData;
    },
    userData() {
      return this.$store.state.userData;
    },
    freeFormatData() {
      return this.$store.state.freeFormatData;
    }
  },
};
</script>