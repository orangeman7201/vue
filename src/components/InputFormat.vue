<template>
  <div style="padding: 20px;">
    
    <p>-性別-</p>
    <form>
      <input type="radio" id="man" value="男性" v-model="getterUserData.sex">
      <label for="man">男性</label>
      <input type="radio" id="woman" value="女性" v-model="getterUserData.sex">
      <label for="woman">女性</label>
    </form>


    <p>-生年月日-</p>
    <select name="birthyear" id="birthyear" v-model="getterUserData.birthyear">
      <option v-for="year in years" :key="year">
        {{ year }}年
      </option>
    </select>年

    <select name="birthmonth" id="birthmonth" v-model="getterUserData.birthmonth">
      <option v-for="month in months" :key="month">
        {{ month }}
      </option>
    </select>月

    <select name="birthday" id="birthday" v-model="getterUserData.birthday">
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
  computed: {
    getterUserData: function() {
      return this.$store.getters.getterUserData;
    },
    years: function() {
      let yearData = [];
      for(let year = 1930; year < 2022; year++) {
        yearData.push(year);
      }
      return yearData;
    },
    months: function() {
      let monthData = [];
      for(let month = 1; month < 13; month++) {
        monthData.push(month);
      }
      return monthData;
    },
    days: function() {
      let dayData = [];
      for(let day = 1; day < 32; day++) {
        dayData.push(day);
      }
      return dayData;
    },
  }
}
</script>
