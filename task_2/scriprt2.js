//================================= Задача 2 ====================================

// Задача 2.  Вводиться номер місяця. Автоматично виводити рекомендований одяг (зима – пальто, літо – шорти ….). Також автоматично виводити зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …).

const { createApp } = Vue

const task2 = createApp({
  data() {
    return {
      month: null,
      img: null,
      nameSeason:null,
      clothes:null,
    }
  },
  methods: {
    getSeason() {
		let result
      switch (this.month) {
        case 1:
        case 2:
        case 12:
          result = this.nameSeason = "Зима", this.img = "../img/winter.jpg",
            this.clothes = "Шапка,пальто,рукавиці"
          break
        case 3:
        case 4:
        case 5:
          result = this.img = "../img/spring.jpg",
            this.nameSeason = "Весна",
            this.clothes = "Лекга куртка,кросівки,штани"
          break
        case 6:
        case 7:
        case 8:
          result = this.img = "../img/sumer.jpg",
            this.nameSeason = "Літо",
            this.clothes = "Шорти,кепка,футболка"
          break
        case 9:
        case 10:
        case 11:
          result = this.img = "../img/autumn.jpg",
            this.nameSeason = "Осінь",
            this.clothes = "Плащ,резинові сапоги"
          break

        default:
          result = this.nameSeason = null,
            this.img = null,
            this.clothes = null
          break
      }
    },
  },
})
task2.mount("#app2")



//=================================================================================
 
