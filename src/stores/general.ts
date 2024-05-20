import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import { useQuasar } from 'quasar'

export interface GeneralStore {
  fullWidth: boolean
  flexibleDrawer: boolean
}

const generalStoreData = localStorage.getItem('generalStore')

export const useGeneralStore = defineStore('generalStore', () => {
  const $q = useQuasar()

  const defaultData = {
    fullWidth: true,
    flexibleDrawer: false,
  }

  const mobileOrSmallWidth = computed(() => {
    return $q.screen.width < 585 || $q.platform.is.mobile
  })

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
    mobileOrSmallWidth,
    clear,
    set,
  }
})
