<template>
  <div class="pad">
    <img src="../assets/logo.png" height="230px" alt="Logo" class="pad__logo">
    <p class="pad__subtitle">Медиацентр поезда "Ласточка"</p>
    <h2 class="pad__name">Добро пожаловать</h2>
    <p class="pad__text">Чтобы подключиться к Медиацентру<br> и получить доступ в интернет<br> необходима идентификация</p>
    <router-link to="/user"><button class="pad__btn">Авторизоваться</button></router-link>
    <p class="pad__note">Нажимая на кнопку, Вы соглашаетесь с
      <a href="#" class="pad__link">условиями пользовательского соглашения</a>
    </p>
    <div class="pad__footer">
      <span class="pad__cooperate">
        &#169; 2018 ООО "РМ"
      </span><span class="pad__feedback">
        Об обнаруженных ошибках в работе <br>сайта просим сообщать по адресу <a href="mailto:lastochka_ivanovo@rm-tech.ru">lastochka_ivanovo@rm-tech.ru</a>
      </span></div>
  </div>
</template>

<script>
export default {
  name: 'Pad'
}
</script>

<style scoped>
a {
  display: block;
}
  .pad {
    padding: 40px;
    background:
      linear-gradient(to bottom, rgba(69, 11, 0, 0.95) 0%, rgba(0, 11, 0, 0.95) 100%),
      url("../assets/gradient.png");
    margin: 0;
    height: 100vh;

  }

  .pad__subtitle {
    font-size: 18px;
    margin-top: 0;
    text-transform: uppercase;
  }

  .pad__name {
    font-weight: 100;
    font-size: 80px;
    margin-bottom: 0;
    margin-top: 25px;
  }

  .pad__text {
    font-size: 25px;
    font-weight: lighter;
  }

  .pad__btn {
    background-color: #ed1b28;
    border: none;
    color: #ffffff;
    padding: 15px 65px;
    border-radius: 5px;
    font-size: 22px;
    margin-top: 15px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .pad__btn:hover {
    background-color:#ffffff;
    color:#ed1b28;
    transition-duration: .5s;
  }

  .pad__link {
    display: block;
    color: #ffffff;
    margin-top: 3px;
  }

  .pad__link:hover {
    color: #ed1b28;
    transition-duration: .5s;
  }

  .pad__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;
  }

  .pad__feedback a {
    display: block;
    color: #ed1b28;
    margin-top: 3px;
  }

  .pad__feedback a:hover {
    color: #ffffff;
    transition-duration: .5s;
  }

@media (min-width: 280px) and (max-width: 510px) {
  .pad {
    min-width: 320px;
    padding: 30px 0;
  }

  .pad__logo {
    height: 100px;
  }

  .pad__subtitle {
    font-size: 14px;
  }

  .pad__name {
    font-size: 42px;
  }

  .pad__text {
    font-size: 16px;
  }

  .pad__note {
    font-size: 14px;
    margin-top: 25px;
  }

  .pad__footer {
    font-size: 10px;
    margin-top: 20px;
    padding: 0 10px;
  }
}
</style>
