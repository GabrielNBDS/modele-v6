import { Head } from '@inertiajs/react'
import { Container, Space } from '@mantine/core'
import { Hero } from './hero'
import { Features } from './features'
import Pricing from './pricing'
import { Contact } from './contact'
import DefaultLayout from '../../layouts/default'

function Home(props: { version: number }) {
  return (
    <Container>
      <Demo />
      <Space my="xl" py="xl" h="xl" />
      <Hero />
      <Space my="xl" py="xl" h="xl" />
      <Features />
      <Space my="xl" py="xl" h="xl" />
      <Pricing />
      <Space my="xl" py="xl" h="xl" />
      <Contact />
      <Space my="md" h="xl" />
    </Container>
  )
}

Home.layout = (page: JSX.Element) => <DefaultLayout children={page} />

export default Home

import { useMantineColorScheme, Button, Group } from '@mantine/core'

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme()

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  )
}
