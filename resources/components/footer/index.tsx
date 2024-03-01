import { Anchor, Group, ActionIcon, rem, Title } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import s from './styles.module.css'

const links = [
  { link: '#', label: 'Início' },
  { link: '#', label: 'Preços' },
  { link: '#', label: 'Blog' },
]

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={s.footer}>
      <div className={s.inner}>
        <Title>Modèle</Title>

        <Group className={s.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  )
}
