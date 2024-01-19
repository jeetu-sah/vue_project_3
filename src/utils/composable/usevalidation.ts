import { reactive, ref } from 'vue'

const useValidation = () => {
  // state encapsulated and managed by the composable
  const validationFormData = ref({})
  const form = reactive({})

  const setFormDataValue = (data: object) => {
    if (Object.keys(data).length > 0) {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' || value == null || value == '') {
          delete form[key]
        } else {
          form[key] = value
        }
      }
    }
 
    // validationField.forEach( (field) => {
    //   if(data[field] != undefined) {
    //     validationFormData.value[field] = data[field]
    //   }
    // })

    // validationFormData.value = formData;
    //console.log('validationFormData', validationFormData.value)
  }
  // expose managed state as return value
  const validation = reactive({ validationFormData, form, setFormDataValue })
  return { validation }
}

export default useValidation
