
import { useQuasar } from 'quasar'
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useValidation from './utils/composable/usevalidation'
import { validationField } from './core/validation/studentProfile/studentProfile'

export const { validation } = useValidation()

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

export const familyObj = computed(() => {
  return user.value.family
})


export const checkValidate = async () => {
  console.log('checkValidate', user.value)
  validation.setFormDataValue(user.value)
  validation.setFormDataValue(familyObj.value)
 
  // setFormDataValue(user.value.fam, validationFamilyField)
  // if(typeof user.value.fam == 'object') {
  //   console.log('yes')
  // } else{
  //   console.log('no')
  // }
}