<script setup lang="ts">
import { ref, computed, defineProps} from 'vue'

const props = defineProps({
    user: {
        type: Object,
        require: true
    }
})

const fatherName = computed({
  get() {
    console.log('props?.user?.father', )
    return props?.user?.family?.father ?? ''
  },
  // setter
  set(newValue) {
    props.user.family.father = newValue;
  }
})

const motherName = computed({
  get() {
    return props?.user?.family?.mother ?? ''
  },
  // setter
  set(newValue) {
    props.user.family.mother = newValue;
  }
})

</script>

<template>
    <div class="row q-pa-md">
        <div class="col">
            {{ props.user }}
            <div class="row q-gutter-md items-start">
                <div class="col">
                <q-input
                    filled
                    v-model="fatherName"
                    label="Father Name *"
                    hint="Father name"
                    lazy-rules
                />
                </div>
                <div class="col">
                    <q-input
                        filled
                        v-model="motherName"
                        label="Mother name *"
                        hint="Mother Name"
                        lazy-rules
                    />
                </div>
            </div>
        </div>
    </div>
</template>
