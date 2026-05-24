import { computed, effectScope, ref, watch } from 'vue'

type Theme = 'light' | 'dark'

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>
    ready: Promise<void>
  }
}

type ThemeAnimationOptions = KeyframeAnimationOptions & {
  pseudoElement: string
}

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

function prefersReducedMotion() {
  if (typeof window === 'undefined')
    return true

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function applyTheme(nextTheme: Theme) {
  if (typeof document === 'undefined')
    return

  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
}

function persistTheme(nextTheme: Theme) {
  if (typeof window !== 'undefined')
    window.localStorage.setItem(STORAGE_KEY, nextTheme)
}

function getTransitionPoint(event?: MouseEvent) {
  if (typeof window === 'undefined')
    return { x: 0, y: 0, radius: 0 }

  const x = event?.clientX ?? window.innerWidth / 2
  const y = event?.clientY ?? window.innerHeight / 2
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  return { x, y, radius }
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    theme.value = getPreferredTheme()

    const scope = effectScope(true)
    scope.run(() => {
      watch(
        theme,
        (nextTheme) => {
          applyTheme(nextTheme)
          persistTheme(nextTheme)
        },
        { flush: 'sync', immediate: true },
      )
    })
  }

  const isDark = computed(() => theme.value === 'dark')

  function setTheme(nextTheme: Theme, event?: MouseEvent) {
    if (nextTheme === theme.value)
      return

    if (typeof document === 'undefined') {
      theme.value = nextTheme
      return
    }

    const root = document.documentElement
    const { x, y, radius } = getTransitionPoint(event)
    root.style.setProperty('--theme-x', `${x}px`)
    root.style.setProperty('--theme-y', `${y}px`)

    const startViewTransition = (document as DocumentWithViewTransition).startViewTransition?.bind(document)
    const commit = () => {
      theme.value = nextTheme
    }

    if (!startViewTransition || prefersReducedMotion()) {
      commit()
      return
    }

    root.classList.add('theme-is-changing')

    const transition = startViewTransition(commit)

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 680,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          } as ThemeAnimationOptions,
        )
      })
      .catch(() => {})

    transition.finished
      .finally(() => {
        root.classList.remove('theme-is-changing')
      })
      .catch(() => {})
  }

  function toggleTheme(event?: MouseEvent) {
    setTheme(isDark.value ? 'light' : 'dark', event)
  }

  return {
    isDark,
    setTheme,
    theme,
    toggleTheme,
  }
}
