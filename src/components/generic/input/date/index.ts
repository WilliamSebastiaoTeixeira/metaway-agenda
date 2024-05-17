import type { Ref } from 'vue'
import type { QInputProps } from 'quasar'

export interface GenericInputDateExpose {
  valid: Ref<boolean>
}

export interface GenericInputDateProps extends Omit<QInputProps, 'modelValue'> {
  date: Date | null | undefined
  iconPositon: 'prepend' | 'append'
  required: boolean
}
