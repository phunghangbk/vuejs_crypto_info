<template>
  <div id="profile">
    <div class="left">
      <a href="https://www.facebook.com/phunghangbk">
        <img src="../../static/service_logo/avatar.jpg">
      </a>
    </div>
    <div class="right">
      <p>
        <img src="../../static/service_logo/bag_icon.jpg">Works at Realworld Company
      </p>
      <p>
        <img src="../../static/service_logo/graduation_icon.jpg">Studied at Ha Noi University Of Science And Technology
      </p>
      <p>
        <img src="../../static/service_logo/home_icon.jpg">Lives in Adachiku, Tokyo, Japan
      </p>
      <p>
        <img src="../../static/service_logo/heart_icon.jpg">Single
      </p>
      <p>
        <img src="../../static/service_logo/address_icon.jpg">From Hanoi, Vietnam
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutAuthor'
  }
</script>

<style scoped>
  div#profile {
    display: inline-block;
  }
  div#profile > div.left {
    margin: 0;
    float: left;
  }
  div#profile > div.right {
    margin-top: 0px;
    float: right;
    text-align: left;
    margin-left: 70px;
  }
  div#profile > div.right > p {
    display: flex;
    align-items: center;
  }
</style>