<template>

  <div style="padding: 20px;">
    <p>-ご相談内容-</p>
    <textarea name="freeFormat" id="freeFormat" cols="150" rows="40"></textarea>

    <nav>
      <router-link to="/Questions">もどる</router-link>
      <router-link to="">次へ</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return{
      inputData: '',
    }
  }
};
</script>