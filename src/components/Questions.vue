<template>
  <div style="padding: 20px">

    <h1>これはアンケートです</h1>

    <p>現在、生命保険に加入していますか？</p>
    <input type="radio" id="Yes1" value="はい" v-model="anserData.question1">
    <label for="Yes1">はい</label>
    <input type="radio" id="No1" value="いいえ" v-model="anserData.question1">
    <label for="No1">いいえ</label>

    <span v-if='anserData.question1 != ""'>
    <p>現在入院中ですか？</p>
    <input type="radio" id="Yes2" value="はい" v-model="anserData.question2">
    <label for="Yes2">はい</label>
    <input type="radio" id="No2" value="いいえ" v-model="anserData.question2">
    <label for="No2">いいえ</label>
    </span>

    <span v-if='anserData.question2 != ""'>
    <p>７日以上の入院はしたことありますか？</p>
    <input type="radio" id="Yes3" value="はい" v-model="anserData.question3">
    <label for="Yes3">はい</label>
    <input type="radio" id="No3" value="いいえ" v-model="anserData.question3">
    <label for="No3">いいえ</label>
    </span>

    <nav>
      <router-link to="/InputFormat">もどる</router-link>
      <router-link to="/freeFormat">次へ</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return{
      anserData: {
        question1: '',
        question2: '',
        question3: '',
      }
    }
  }
}
</script>
