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
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    years: function() {
      const yearData = [];
      for(let year = 1930; year < 2022; year++) {
        yearData.push(year);
      }
      return yearData;
    },
    months: function() {
      const monthData = [];
      for(let month = 1; month < 13; month++) {
        monthData.push(month);
      }
      return monthData;
    },
    days: function() {
      const dayData = [];
      for(let day = 1; day < 32; day++) {
        dayData.push(day);
      }
      return dayData;
    },
  }
}


</script>
