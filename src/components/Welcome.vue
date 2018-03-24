<template>
<div class="welcome">
  <div class="welcome__header">
    <router-link to="/pad"><img src="../assets/logo2.png" alt="Logo" class="user__header-img" height="40"></router-link>
  </div>
  <img src="../assets/usericon.png" alt="User Icon" height="100px" class="welcome__icon">
  <h1 class="welcome__title">Приветствуем Вас<br> на борту скоростного поезда <br>«Ласточка»!</h1>
  <p class="welcome__note">Вы получили доступ к интернету<br>и Медиацентру поезда «Ласточка».<br>Для работы большинства сервисов<br>портала интернет не требуется.
  </p>
  <button class="welcome__button">Начать</button>
</div>
</template>

<style scoped>
.welcome {
  text-align: center;
  background: linear-gradient(to bottom, rgba(69, 11, 0, 0.95) 0%, rgba(0, 11, 0, 0.95) 100%),
  url("../assets/gradient.png");
  margin: 0;
  text-align: center;
  padding-bottom: 40px;
  background-size: cover;
  height: 100vh;
}

.welcome__header {
  background-color: #ed1b28;
  margin: 0;
  padding: 3px 0;
  margin-bottom: 60px;
}

.welcome__button {
  background-color: #ed1b28;
  border: none;
  color: #ffffff;
  padding: 15px 160px;
  border-radius: 5px;
  font-size: 26px;
  margin-top: 15px;
  cursor: pointer;
  max-width: 80%;
  margin: 30px auto;
}

.welcome__button:hover {
  background-color: #ffffff;
  color: #ed1b28;
  transition-duration: .5s;
}

.welcome__title {
  font-weight: 100;
  font-size: 40px;
  margin-top: 50px;
}

.welcome__note {
  font-size: 26px;
  font-weight: 100;
  margin-top: 60px;
}

@media (min-width:280px) and (max-width: 510px) {
  .welcome {
    min-width: 320px;
  }

  .welcome__header {
    margin-bottom: 20px;
  }

  .welcome__icon {
    height: 80px;
  }

  .welcome__title {
    margin-top: 20px;
    font-size: 26px;
  }

  .welcome__note {
    font-size: 16px;
    margin-top: 0;
    letter-spacing: .5px;
  }

  .welcome__button {
    font-size: 22px;
    padding: 10px 30px;
    max-width: none;
  }
}
</style>
