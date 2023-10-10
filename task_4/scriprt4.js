//================================= Задача 4 ====================================
// Задача 4.“Рахунок у банку”
// Вимоги:
// 1) Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.
// 2) Сума автоматично переводиться у долари та євро (фіксований курс задається у data).
// 3) можливість зарахувати суму (контролювати, щоб не була від’ємною)
// 4) можливість зняти (щоб не можна зняти більше ніж є на рахунку)
// 5) при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)

// При зміні суми :
// - якщо було зняття, то суму відоражати червоним
// - якщо було зарахування, то суму відображати зеленим
// Якщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим

 //========================================================================================================================================================
  

const { createApp } = Vue
const dollarRate = 37.5
const euroRate = 40
const percent = 0.03

const task4 = createApp({
  data() {
    return {
      totalBalance: 0,
      inpAdd: null,
      inpDecr: null,
      euro: 0,
      dollars: 0,
      transactionCost: 0,
      message: "",
    }
  },
  computed: {
    getColorForCurrency() {
      if (
        this.totalBalance / dollarRate >= 100 ||
        this.totalBalance / euroRate >= 100
      )
        return "green"
      else return "red"
    },
  },
  methods: {
    addMoney() {
      if (this.inpAdd >= 0)
     { 
      return (
        this.totalBalance +=
          this.inpAdd - this.getPercentForTransaction(this.inpAdd),
        this.inpAdd = null
      )
        }
      else return (this.message = `Помилка!!!  Не коректні данні`)
    },
    withdraw() {
      if (this.totalBalance > this.inpDecr && this.totalBalance > 0) {
        return (
          (this.totalBalance -=
            this.inpDecr - this.getPercentForTransaction(this.inpDecr)),
          (this.inpDecr = null)
        )
      } else return (this.message = ` Не вистачає коштів`) 
        
    },
    getPercentForTransaction(value) {
      return this.transactionCost = Math.ceil(value * percent)
    },
    convertToDollars() {
      return (this.totalBalance / dollarRate).toFixed(2)
    },
    convertToEuro() {
      return (this.totalBalance / euroRate).toFixed(2)
    },
  },
})
task4.mount("#app4")
//========================================================================================================================================================
