<template>
  <div class="user">
    <div class="user__header">
      <router-link to="/pad"><img src="../assets/logo2.png" alt="Logo" class="user__header-img" height="40"></router-link>
    </div>
   <img src="../assets/usericon.png" alt="User Icon" height="100px" class="user__icon">
    <h2 class="user__title">Авторизация</h2>
    <div class="user__wrapper">
    <router-link to="/user"><button class="user__btn user__btn--left">&nbsp;&nbsp;&nbsp;По билету&nbsp;&nbsp;</button></router-link>
    <button class="user__btn user__btn--right user__btn--active">По телефону</button>
    </div>
    <form action="#" method="post">
    <label for="phone" class="user__label">Введите номер вашего телефона и получите SMS с кодом доступа</label>
    <div class="user2__wrapper">
    <masked-input type="tel" class="user__input user__input--flex" id="phone" v-model="phone" mask="\+\7 (111) 111-11-11" v-on:keyup="dropAlphabet" required />
    <button class="user__button user__button--small" :disabled="phone.length < 12 ? true : false">Получить код</button>
    </div>
    <label for="code" class="user2__label">Введите одноразовый код вашего телефона и получите SMS с кодом доступа</label>
    <masked-input type="text" class="user2__input" v-model="code" mask="1111" />
    <router-link to="/welcome"><button class="user__button" maxlength=4 type="submit" :disabled="code.length < 4 ? true : false">Подтвердить данные</button></router-link>
    </form>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'User',
    data() {
      return {
        'phone': '',
        'code': '',
        disableButton: true
      }
    },
    methods: {
      dropAlphabet: function(event) {
        let testText = this.phone;
        if (testText * 1 + 0 != this.phone || testText.length > 12) {
          this.phone = testText.substring(0, testText.length - 1);
        }
      }
    },
    components: {
      MaskedInput
    }
  }

</script>

<style scoped>
  button:disabled {
    opacity: .3;
  }

  button:disabled:hover {
    background-color: #ed1b28;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .user {
    background: linear-gradient(to bottom, rgba(69, 11, 0, 0.95) 0%, rgba(0, 11, 0, 0.95) 100%),
    url("../assets/gradient.png");
    margin: 0;
    text-align: center;
    padding-bottom: 40px;
    height: 100vh;
  }

  .user__header {
    background-color: #ed1b28;
    margin: 0;
    padding: 3px 0;
    margin-bottom: 60px;
  }

  .user__title {
    font-weight: 100;
    font-size: 45px;
  }

  .user__btn {
    display: block;
    border: none;
    padding: 5px 30px;
    font-size: 22px;
    color: #ed1b28;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #ed1b28;
  }

  .user__btn--left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .user__btn--right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .user__btn:hover {
    opacity: .7;
    transition-duration: .5s;
  }

  .user__btn--active {
    background-color: #ed1b28;
    color: #ffffff;
  }

  .user__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  .user__button {
    background-color: #ed1b28;
    border: none;
    color: #ffffff;
    padding: 15px 60px;
    border-radius: 5px;
    font-size: 22px;
    margin-top: 15px;
    cursor: pointer;
    max-width: 80%;
    margin: 30px auto;
  }

  .user__button--small {
    font-size: 16px;
    padding: 11px 33px;
    display: block;
    margin: 0;
    border-radius: 0;
    position: absolute;
    right: 2%;
  }

  .user__button:hover {
    background-color: #ffffff;
    color: #ed1b28;
    transition-duration: .5s;
  }

  .user__input {
    display: block;
    width: 63%;
    margin: 15px auto;
    height: 45px;
    border-radius: 3px;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    letter-spacing: 1em;
  }

  .user__input--flex {
    margin: 0;
    border-radius: 0;
    width: 95%;
    text-align: center;
    padding-right: 191px;
    letter-spacing: 3px;
    padding-left: 10px;
  }

  .user__label {
    font-size: 18px;
  }

  .user2__label {
    display: block;
  }

  .user2__input {
    display: block;
    margin: 15px auto;
    padding: 0 40px;
    height: 40px;
    letter-spacing: 10px;
    text-align: center;
    font-size: 24px;
  }

  .user__help {
    opacity: .5;
    cursor: pointer;
  }

  .user__help:hover {
    opacity: 1;
    transition-duration: .7s;
  }

  .user2__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 35px auto;
    position: relative;
  }

  @media (min-width: 280px) and (max-width: 510px) {
    .user {
      min-width: 320px;
    }

    .user__header {
      margin-bottom: 20px;
    }

    .user__icon {
      height: 80px;
    }

    .user__title {
      margin-top: 20px;
      font-size: 32px;
    }

    .user__wrapper {
      margin: 0 20px;
      margin-bottom: 40px;
    }

    .user__btn {
      font-size: 14px;
      padding: 5px 25px;
    }

    .user__label {
      font-weight: 100;
      font-size: 16px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .user__input {
      height: 25px;
      width: 70%;
      padding-left: 10px;
      font-size: 14px;
      letter-spacing: 1em;
    }

    .user__input--flex {
      width: 80%;
      height: 30px;
      letter-spacing: .3em;
      text-align: center;
      padding-right: 0;
    }

    .user2__input {
      width: 40%;
    }

    .user__button {
      font-size: 22px;
      padding: 10px 30px;
      max-width: none;
    }

    .user__button--small {
      font-size: 16px;
      margin: 0;
      padding: 10px 25px;
      position: static;
      margin-top: 20px;
      border-radius: 5px;
    }

    .user2__label {
      margin-left: 20px;
      margin-right: 20px;
    }

    .user2__wrapper {
      flex-direction: column;
    }
  }

</style>
