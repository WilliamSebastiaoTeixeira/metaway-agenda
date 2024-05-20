import type { Ref } from 'vue'
import type { QSelectProps } from 'quasar'

export interface PessoaSelectExpose {
  valid: Ref<boolean>
}

export interface PessoaSelectProps extends Omit<QSelectProps, 'modelValue'> {
  required: boolean
}
