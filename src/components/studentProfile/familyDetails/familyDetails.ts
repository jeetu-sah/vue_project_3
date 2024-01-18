import { useQuasar } from 'quasar'
import { ref, defineProps} from 'vue'

export const props = defineProps({
    user: {
        type: Object,
        require: true
    }
})

const $q = useQuasar()