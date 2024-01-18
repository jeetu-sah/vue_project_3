import { ref } from 'vue'

 const useValidation = () => {
    // state encapsulated and managed by the composable
    const validationFormData = ref({})
  
    const setFormDataValue = (data, validationField) => {
      // console.log('setFormDataValue data', data)
      // console.log('validationField', validationField)
      console.log('test', Object.entries(data))

      // validationField.forEach( (field) => {
      //   if(data[field] != undefined) {
      //     validationFormData.value[field] = data[field]
      //   }
      // }) 
      
      // validationFormData.value = formData;
      console.log('validationFormData', validationFormData.value)
    }
    // expose managed state as return value
    return { validationFormData, setFormDataValue }
  }

  export default useValidation