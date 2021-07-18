<template>
  <div style="padding: 20px;">

    <p>-性別-</p>
    <form>
      <input type="radio" id="man" value="男性" v-model="userData.sex">
      <label for="man">男性</label>
      <input type="radio" id="woman" value="女性" v-model="userData.sex">
      <label for="woman">女性</label>
    </form>


    <p>-生年月日-</p>
    <select name="birthyear" id="birthyear" v-model="userData.birthyear">
      <option v-for="year in years" :key="year">
        {{ year }}年
      </option>
    </select>年

    <select name="birthmonth" id="birthmonth" v-model="userData.birthmonth">
      <option v-for="month in months" :key="month">
        {{ month }}
      </option>
    </select>月

    <select name="birthday" id="birthday" v-model="userData.birthday">
      <option v-for="day in days" :key="day">
        {{ day }}
      </option>
    </select>日

    <nav>
      <router-link to="/InputFormat">もどる</router-link>
      <router-link to="/Questions">次へ</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return{
      userData: {
        sex: '',
        birthyear: '',
        birthmonth: '',
      },
    }
  },
  computed: {
    years: function() {
      let yearData = [];
      for(let i = 1930; i < 2022; i++) {
        yearData.push(i);
      }
      return yearData;
    },
    months: function() {
      let monthData = [];
      for(let j = 1; j < 13; j++) {
        monthData.push(j);
      }
      return monthData;
    },
    days: function() {
      let dayData = [];
      for(let k = 1; k < 32; k++) {
        dayData.push(k);
      }
      return dayData;
    },
  }
}


</script>
