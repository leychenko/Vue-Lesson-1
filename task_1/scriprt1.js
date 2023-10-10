//================================= Задача 1 ====================================
// Задача 1. Задача 1. Вводиться кількість пасажирів. Вивести:
// скільки потрібно автобусів (кожен автобус на 20 місць)
// скільки пляшок води (кожному пасажиру 2 пляшки)
// скільки бутербродів (кожному пасажиру 3 бутерброди)

const { createApp } = Vue

const busPlace = 20
const bottleOfWater = 2
const sandwich = 3

const task1 = createApp({
  data() {
    return {
      passenger: null,
    }
  },
  methods: {
    countBus() {
      return Math.ceil(this.passenger / busPlace)
    },
    countBottleOfWater() {
      return this.passenger * bottleOfWater
    },
    countSandwich() {
      return this.passenger * sandwich
    },
  },
})
task1.mount("#app")

