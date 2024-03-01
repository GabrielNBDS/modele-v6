import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Title,
  Stack,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react'
import s from './styles.module.css'

const menuItems = [
  {
    icon: IconCode,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: IconCoin,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: IconBook,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: IconFingerprint,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: IconChartPie3,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    icon: IconNotification,
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const theme = useMantineTheme()

  const links = menuItems.map((item) => (
    <UnstyledButton className={s.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <header className={s.header}>
        <Group justify="space-between" h="100%">
          <Title>Modèle</Title>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={s.link}>
              Início
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={s.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={s.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={s.link}>
              Preços
            </a>
            <a href="#" className={s.link}>
              Blog
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Entrar</Button>
            <Button>Cadastre-se</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        title={<Title>Modèle</Title>}
      >
        <ScrollArea mx="-md">
          <Stack h={`calc(100vh - ${rem(80)})`} justify="space-between">
            <Stack>
              <a href="#" className={s.link}>
                Início
              </a>
              <a href="#" className={s.link}>
                Preços
              </a>
              <a href="#" className={s.link}>
                Blog
              </a>
            </Stack>

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
