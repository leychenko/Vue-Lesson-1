

//================================= Задача 3 ====================================
// Задача 3.Задано початок та кінець діапазону. При натисканні на кнопку випадковим чином генерувати значення з вказаного діапазону та відображати його.

const { createApp } = Vue

const task3 = createApp({
  data() {
    return {
      inpMin: null,
      inpMax: null,
		randomNum:null,
    }
  },
  methods: {
	getRandomNum(){
		if (this.inpMin < this.inpMax)
      {return (this.randomNum =
        this.inpMin +
        Math.floor(Math.random() * (this.inpMax - this.inpMin + 1)))}
		  else this.randomNum = "Некоректо заданий діапазон"
	}
  },
})
task3.mount("#app3")


