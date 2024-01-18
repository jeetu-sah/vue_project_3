<script setup lang="ts">

import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FamilyDetails from './components/studentProfile/familyDetails/FamilyDetails.vue'
import { validationField, validationFamilyField, user, checkValidate } from './app'
import useValidation from './utils/composable/usevalidation'
const { validationFormData, setFormDataValue } = useValidation()


const userFamily = ref({
  father: '',
  mother: ''
})

</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <h4>Student Profile Form</h4>
      </div>
    </div>
    {{user}}
    <div class="row q-pa-md">
      <div class="col">
        <q-form class="q-gutter-md">
            <div class="row q-gutter-md items-start">
              <div class="col">
                <q-input
                  filled
                  v-model="user.name"
                  label="First name *"
                  hint="First name"
                  lazy-rules
                />
              </div>
              <div class="col">
                <q-input
                  filled
                  v-model="user.lname"
                  label="Last name *"
                  hint="Last Name"
                  lazy-rules
                />
              </div>
            </div>

            <FamilyDetails :user="user" />
    
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn
              label="Validate"
              @click="checkValidate()"
              type="button"
              color="primary"
              class="q-ml-sm"
            />
          </div>
        </q-form>   
      </div>
    </div>
    

  </div>
</template>
