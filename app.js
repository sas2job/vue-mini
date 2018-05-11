// function car(name, model, year, owner, phone, image) {
//   return {
//     name, model, year, owner, phone, image
//   }
// }

const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image})
const log = (text, type, date = new Date() ) => ({text, type, date})
const cars = [
  car('Ford', 'Focus', '2016', 'Max', '+7 999 999 99 99', 'images/focus.jpeg'),
  car('Ford', 'Mondeo', '2018', 'Vladimir', '+7 999 999 99 99', 'images/mondeo.jpg'),
  car('Porshe', 'Panamera', '2015', 'Irina', '+7 999 999 99 99', 'images/panamera.jpg')
]

new Vue({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],
    logs: [],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false
  },
  methods: {
    // selectCar: function(index) {
    selectCar(index) {
      // console.log('click', index)
      this.car = cars[index]
      this.selectedCarIndex = index
    },
    newOrder() {
      this.modalVisibility = false 
      this.logs.push(
        log(`Success order: ${this.car.name} - ${this.car.model}`, `ok`)
      )
    },
    cancelOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Cancelled order: ${this.car.name} - ${this.car.model}`, `cnl`)
        ) 
    }
  },
  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    }
  },
  filters: {
    date(value) {
      return value.toLocaleString()
    }
  }
})