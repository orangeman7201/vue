<template>
  <div style="padding: 20px;">
    <p>-性別-</p>
    <p>{{getterUserData.sex}}</p>
    <br>
    <p>-生年月日-</p>
    <p>{{getterUserData.birthyear}}{{getterUserData.birthmonth}}月{{getterUserData.birthday}}日</p>
    <br>
    <p>現在、生命保険に加入していますか？</p>
    <p>{{getterAnswerData.question1}}</p>
    <br>
    <p>現在入院中ですか？</p>
    <p>{{getterAnswerData.question2}}</p>
    <br>
     <p>７日以上の入院はしたことありますか？</p>
    <p>{{getterAnswerData.question3}}</p>
    <br>
    <p>-ご相談内容-</p>
    <p>{{getterFreeFormatData.freeFormat}}</p>
  <router-link to="/freeFormat">もどる</router-link>
  <router-link to="">次へ</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    getterUserData: function() {
      return this.$store.getters.getterUserData;
    },
    getterAnswerData: function() {
      return this.$store.getters.getterAnswerData;
    },
    getterFreeFormatData: function() {
      return this.$store.getters.getterFreeFormatData;
    },
  },
};
</script>