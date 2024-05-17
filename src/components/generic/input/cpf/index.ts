import type { Ref } from 'vue'
import type { QInputProps } from 'quasar'

export interface GenericInputCPFExpose {
  valid: Ref<boolean>
}

export interface GenericInputCPFProps extends Omit<QInputProps, 'modelValue'> {
  required: boolean
}
