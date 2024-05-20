import type { Ref } from 'vue'
import type { QSelectProps } from 'quasar'

export interface UsuarioSelectExpose {
  valid: Ref<boolean>
}

export interface UsuarioSelectProps extends Omit<QSelectProps, 'modelValue'> {
  required: boolean
}
