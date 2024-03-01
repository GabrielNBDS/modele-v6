import { Head } from '@inertiajs/react'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { ColorSchemeScript } from '@mantine/core'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head title="Home">
        <ColorSchemeScript key="color-scheme-script" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
