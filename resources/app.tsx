import { MantineProvider } from '@mantine/core'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/page.tsx', { eager: true })
    return pages[`./pages/${name}/page.tsx`]
  },

  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <MantineProvider>
        <App {...props} />
      </MantineProvider>
    )
  },
})
