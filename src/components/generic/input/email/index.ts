import type { Ref } from 'vue'
import type { QInputProps } from 'quasar'

export interface GenericInputEmailExpose {
  valid: Ref<boolean>
}

export interface GenericInputEmailProps
  extends Omit<QInputProps, 'modelValue'> {
  required: boolean
}
