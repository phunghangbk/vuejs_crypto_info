<template>
  <div id="profile">
    <div class="left">
      <a href="https://www.facebook.com/phunghangbk">
        <img src="../../static/service_logo/avatar.jpg">
      </a>
      <p>Hang Phung</p>
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
    display: inline-flex;
    padding-bottom: 35px;
    width: 80%;
    justify-content: center;
    box-shadow: 0px 0px 3px 0px #178042;
  }
  div#profile > div.left {
    margin: 10px 0 0 0;
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
  #profile > div > a > img {
    width: 120px;
  }
  #profile > div > p > img {
    width: 120px;
  }
  .left > p {
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    div#profile {
      padding-top: 50px;
    }
  }
</style>