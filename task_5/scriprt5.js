//================================= Задача 5 ==================================================================================================

// Задача 5. Додаток містить масив об’єктів (логін, пароль) --  інсуючі логіни і паролі. Користувач вводить логін і пароль, а програма повідомляє чи може користувач бути авторизованим (чи є він одним з масиву).

const { createApp } = Vue
const userData = [
  {
    login: "max",
    password: "12345",
  },
  {
    login: "admin",
    password: "00000",
  },
  {
    login: "user",
    password: "300485",
  },
  {
    login: "Koly",
    password: "22222",
  },
  {
    login: "Ira",
    password: "99999",
  },
]

const task5 = createApp({
  data() {
    return {
      userLogin: null,
      userPassword: null,
      message: null,
		color:null
    }
  },

  methods: {
    checkUserData() {
      for (const item of userData) {
        if (
          item.login.toLowerCase() === this.userLogin.toLowerCase() &&
          item.password.toLowerCase() === this.userPassword.toLowerCase()
        ) {
         return this.message = "Вхід дозволено",this.color = 'green'
        } else 
           (this.message = "Вхід заборонено"),this.color = "red"
			 
      }
    },
  },
})
task5.mount("#app5")




















//========================================================================================================================================================
