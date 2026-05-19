import { computed, effectScope, ref, watchEffect } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'tom-holland-theme'
const theme = ref<Theme>('light')
let initialized = false

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined')
    return 'light'

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark')
    return storedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(nextTheme: Theme) {
  if (typeof document === 'undefined')
    return

  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    theme.value = getPreferredTheme()

    const scope = effectScope(true)
    scope.run(() => {
      watchEffect(() => {
        applyTheme(theme.value)

        if (typeof window !== 'undefined')
          window.localStorage.setItem(STORAGE_KEY, theme.value)
      })
    })
  }

  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = isDark.value ? 'light' : 'dark'
  }

  return {
    isDark,
    theme,
    toggleTheme,
  }
}
