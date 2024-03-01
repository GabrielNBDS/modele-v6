import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core'
import { ContactIconsList } from './icons'
import bg from './bg.svg'
import s from './styles.module.css'

export function Contact() {
  return (
    <Paper shadow="md" radius="lg">
      <div className={s.wrapper}>
        <div className={s.contacts} style={{ backgroundImage: `url(${bg})` }}>
          <Text fz="lg" fw={700} className={s.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={s.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={s.title}>
            Get in touch
          </Text>

          <div className={s.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mantine.dev" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={s.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  )
}
