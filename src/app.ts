import { useQuasar } from 'quasar'
import { ref, reactive, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useValidation from './utils/composable/usevalidation'
import { validationField } from './core/validation/studentProfile/studentProfile'

export const { validation } = useValidation()

export const $q = useQuasar()

export const user = ref({
  name: 'Jitendra',
  lname: 'Sahu',
  age: 27,
  accept: 'yes',
  family: {
    father: 'Father Name test',
    mother: 'mother name test'
  }
})

export const familyObj = computed(() => {
  return user.value.family
})

export const checkValidate = async () => {
  //console.log('checkValidate', user.value)
  validation.setFormDataValue(user.value)
  validation.setFormDataValue(familyObj.value)

  // setFormDataValue(user.value.fam, validationFamilyField)
  // if(typeof user.value.fam == 'object') {
  //   console.log('yes')
  // } else{
  //   console.log('no')
  // }
}

export const submitRequest = () => {
  console.log('submitRequest')
}

export const errorMessages = (field: string) => {
  if (Object.keys(validation.form).length > 0) {
    if (validation.form[field] == undefined) {
      return true
    } else {
      return false
    }
  }
  return false
}
