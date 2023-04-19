import React from 'react';
import { Avatar, Box, Group, Stack, Text } from '@mantine/core';
import dayjs from 'dayjs';

interface Warrant {
  firstName: string;
  lastName: string;
  expiresIn: number;
  reason: string;
}

const WARRANTS: Warrant[] = [
  {
    firstName: 'Billy',
    lastName: 'Bob',
    expiresIn: 1682250523000,
    reason: 'Did some crime',
  },
  {
    firstName: 'Some',
    lastName: 'Dude',
    expiresIn: Date.now(),
    reason: 'Stole a cat',
  },
  {
    firstName: 'Billy',
    lastName: 'Bob',
    expiresIn: Date.now(),
    reason: 'Did some crime',
  },
  {
    firstName: 'Some',
    lastName: 'Dude',
    expiresIn: Date.now(),
    reason: 'Stole a cat',
  },
  {
    firstName: 'Billy',
    lastName: 'Bob',
    expiresIn: Date.now(),
    reason: 'Did some crime',
  },
  {
    firstName: 'Some',
    lastName: 'Dude',
    expiresIn: Date.now(),
    reason: 'Stole a cat',
  },
];

const WarrantList: React.FC = () => {
  const [warrants, setWarrants] = React.useState(WARRANTS);

  return (
    <Stack sx={{ overflow: 'auto' }}>
      {warrants.map((warrant) => (
        <Stack
          sx={(theme) => ({
            backgroundColor: theme.colors.durple[4],
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.md,
          })}
          p="md"
        >
          <Group>
            <Avatar size="lg" color="blue" radius="xl" />
            <Stack spacing={2}>
              <Text>
                {warrant.firstName} {warrant.lastName}
              </Text>
              <Box>
                <Text size="xs" c="dark.2">
                  Wanted for:{' '}
                  <Text component="span" c="dark.0">
                    {warrant.reason}
                  </Text>
                </Text>
                <Text size="xs" c="dark.2">
                  Expires in:{' '}
                  <Text component="span" c="dark.0">
                    {dayjs().to(warrant.expiresIn, true)}
                  </Text>
                </Text>
              </Box>
            </Stack>
          </Group>
        </Stack>
      ))}
    </Stack>
  );
};

export default WarrantList;
