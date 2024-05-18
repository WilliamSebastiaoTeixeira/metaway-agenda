import type { Ref } from 'vue'
import type { QInputProps } from 'quasar'

export interface GenericInputCEPExpose {
  valid: Ref<boolean>
}

export interface GenericInputCEPProps extends Omit<QInputProps, 'modelValue'> {
  required: boolean
}
