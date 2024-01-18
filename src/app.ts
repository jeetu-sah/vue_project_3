
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useValidation from './utils/composable/usevalidation'

export const validationField  = ['name', 'age'];
export const validationFamilyField  = ['father', 'mother'];
const { validationFormData, setFormDataValue } = useValidation()

const $q = useQuasar()

export const user = ref({
  name: 'Jitendra',
  lname: 'Sahu',
  age: 27,
  accept: 'yes',
  family: {
    father : 'Father Name test',
    mother : 'mother name test',
  }
})
const userFamily = ref({
    father: '',
    mother: ''
})

export const checkValidate = () => {
  console.log('checkValidate', user.value)
  // setFormDataValue(user.value, validationField)
  // setFormDataValue(user.value.fam, validationFamilyField)
  // if(typeof user.value.fam == 'object') {
  //   console.log('yes')
  // } else{
  //   console.log('no')
  // }
}