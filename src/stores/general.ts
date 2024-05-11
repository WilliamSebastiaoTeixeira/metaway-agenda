import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface GeneralStore {
  fullWidth: boolean
  flexibleDrawer: boolean
}

const generalStoreData = localStorage.getItem('generalStore')

export const useGeneralStore = defineStore('generalStore', () => {
  const defaultData = {
    fullWidth: false,
    flexibleDrawer: false,
  }

  const general = ref<GeneralStore>(
    generalStoreData ? JSON.parse(generalStoreData) : defaultData,
  )

  function clear() {
    general.value = defaultData
    localStorage.removeItem('generalStore')
  }

  function set() {
    if (!general.value) return

    localStorage.setItem('generalStore', JSON.stringify(general.value))
  }

  watch(general, set, { deep: true })

  return {
    general,
    clear,
    set,
  }
})
