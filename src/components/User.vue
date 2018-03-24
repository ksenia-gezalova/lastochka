<template>
  <div class="user">
    <div class="user__header">
      <router-link to="/pad"><img src="../assets/logo2.png" alt="Logo" class="user__header-img" height="40"></router-link>
    </div>
   <img src="../assets/usericon.png" alt="User Icon" height="100px" class="user__icon">
    <h2 class="user__title">Авторизация</h2>
    <div class="user__wrapper">
    <button class="user__btn user__btn--active user__btn--left">&nbsp;&nbsp;&nbsp;По билету&nbsp;&nbsp;</button>
    <router-link to="/user2"><button class="user__btn user__btn--right">По телефону</button></router-link>
    </div>
    <form action="#" method="post">
    <label for="ticket" class="user__label">Введите номер билета</label>
    <masked-input type="text" class="user__input" id="ticket" v-model="ticket" v-on:keyup="dropAlphabet" mask="11111111111111" required />
    <label for="surname" class="user__label">Введите фамилию пассажира</label>
    <input type="text" class="user__input" id="surname" v-model="surname" required>
    <div class="user__container">
      <a class="user__help" @click="isShow=!isShow"><img src="../assets/question.png" alt="?" height="14px">
      &nbsp;Где найти номер билета?</a>
      <div class="user__info" v-show="isShow">
        <p><strong>В номере билета 14 цифр.</strong><br><br>
        1. Номер расположен в верхней части <br>электронного билета:</p>
        <img src="../assets/ticket1.png" class="user__info-ticket-1">
        <p>2. Номер расположен справа в билете,<br> купленном в кассе или терминале:</p>
        <img src="../assets/ticket2.png" class="user__info-ticket-2">
      </div>
    </div>
    <router-link to="/welcome" ><button class="user__button" type="submit" :disabled="(ticket.length !== 14) || (surname === '') ? true : false">Подтвердить данные</button></router-link>
    </form>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  
  export default {
    name: 'User',
    data() {
      return {
        'surname': '',
        'ticket': '',
        isShow: false
      }
    },
    methods: {
      dropAlphabet: function(event) {
        let testText = this.ticket;
        if (testText * 1 + 0 != this.ticket || testText.length > 14) {
          this.ticket = testText.substring(0, testText.length - 1);
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

  .user__info {
    width: 340px;
    height: 460px;
    text-align: center;
    z-index: 100;
    background-color: black;
    padding: 30px;
    border: 1px solid black;
    border-radius: 30px;
    position: absolute;
    right: 307px;
  }

  .user__info::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 70px solid black;
    border-bottom: 50px solid transparent;
    left: 370px;
    top: 210px;
  }

  .user {
    background: linear-gradient(to bottom, rgba(69, 11, 0, 0.95) 0%, rgba(0, 11, 0, 0.95) 100%),
    url("../assets/gradient.png");
    margin: 0;
    text-align: center;
    padding-bottom: 40px;
    min-height: 100vh;
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

  .user__container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 300px;
    margin: 0 auto;
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
    letter-spacing: 2em;
    font-size: 16px;
    text-align: center;
  }

  .user__label {
    font-size: 18px;
  }

  .user__help {
    opacity: .5;
    cursor: pointer;
  }

  .user__help:hover {
    opacity: 1;
    transition-duration: .7s;
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
    }

    .user__input {
      height: 25px;
      width: 87%;
      padding-left: 10px;
      font-size: 14px;
      letter-spacing: 1em;
      text-align: center;
    }

    .user__button {
      font-size: 22px;
      padding: 10px 30px;
      max-width: none;
    }
  }

  @media (min-width: 280px) and (max-width: 1000px) {
    .user__info {
      text-align: center;
      z-index: 100;
      background-color: black;
      padding: 10px;
      border: 1px solid black;
      border-radius: 10px;
      position: absolute;
      font-size: 12px;
      right: 47px;
      bottom: 42px;
      height: auto;
      width: auto;
    }

    .user__info::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 30px solid black;
      border-right: 30px solid transparent;
      border-left: 30px solid transparent;
      left: 12px;
      top: 345px;
    }

    .user__info-ticket-1,
    .user__info-ticket-2 {
      height: 100px;
    }
  }

</style>
