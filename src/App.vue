<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FamilyDetails from './components/studentProfile/familyDetails/FamilyDetails.vue'
import { user, checkValidate, validation, errorMessages, submitRequest } from './app'

onMounted(() => {
  console.log(`the component is now mounted.`)
  checkValidate();
})

watch(user.value, () => {
  checkValidate();
})

</script>

<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">
        <h4>Student Profile Form</h4>
        validate form object {{validation.form}}
      </div>
    </div>
    
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
                  :error="errorMessages('name')"
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
                  :error="errorMessages('lname')"
                />
              </div>
            </div>

            <FamilyDetails :user="user" :errorMessages="errorMessages" />
    
          <div>
            <q-btn label="Submit" type="button" color="primary" @click="submitRequest()" />
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
