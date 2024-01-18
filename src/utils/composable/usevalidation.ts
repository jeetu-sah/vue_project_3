import { reactive, ref } from 'vue'

const useValidation = () => {
  // state encapsulated and managed by the composable
  const validationFormData = ref({})
  const form = reactive({})

  const setFormDataValue = (data: object) => {
    console.log('setFormDataValue', Object.entries(data))
    if (Object.keys(data).length > 0) {
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' || value == null || value == '') {
          console.log('test blank and object variable')
          delete form[key]
        } else {
          console.log('key', key)
          console.log('value', value)
          console.log('type of variable', typeof value)
          form[key] = value
        }
      }
    }
    // console.log('setFormDataValue data', data)
    // console.log('validationField', validationField)
    //console.log('test', Object.entries(data))

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
