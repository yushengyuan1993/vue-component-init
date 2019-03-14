import colorPicker from './src/color-picker.vue'

colorPicker.install = (Vue) => {
  Vue.component(colorPicker.name, colorPicker)
}

export default colorPicker