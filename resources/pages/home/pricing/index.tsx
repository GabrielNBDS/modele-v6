import { Card, Text, Button, Title, SimpleGrid, List } from '@mantine/core'

export default function Pricing() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Text component="p" fz="lg" p="lg" pb="0">
            Plano Ouro
          </Text>

          <Title component="p" p="lg">
            R$ 24,99
          </Title>
        </Card.Section>

        <List withPadding>
          <List.Item>Vantagem 1</List.Item>
          <List.Item>Vantagem 2</List.Item>
          <List.Item>Vantagem 3</List.Item>
        </List>

        <Button color="blue" fullWidth mt="md" radius="md">
          Assinar
        </Button>
      </Card>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Text component="p" fz="lg" p="lg" pb="0">
            Plano Diamante
          </Text>

          <Title component="p" p="lg">
            R$ 24,99
          </Title>
        </Card.Section>

        <List withPadding>
          <List.Item>Vantagem 1</List.Item>
          <List.Item>Vantagem 2</List.Item>
          <List.Item>Vantagem 3</List.Item>
        </List>

        <Button color="blue" fullWidth mt="md" radius="md">
          Assinar
        </Button>
      </Card>
    </SimpleGrid>
  )
}
