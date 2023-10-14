'use client';

import { ActionIcon, Button, Group, Switch, useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const sunIcon = (
    <Image src="https://s6.gifyu.com/images/S6h12.gif" alt="my gif" height={30} width={30} />
  );

  const moonIcon = (
    <Image src="  https://s6.gifyu.com/images/S6hOz.gif" alt="my gif" height={30} width={30} />
  );

  const iconSwitch = (
    <Image src="https://s6.gifyu.com/images/S6hOh.gif" alt="my gif" height={25} width={25} />
  )

  const toggleColorScheme = () => {
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    setColorScheme(newColorScheme);
  };

  return (
    <Group justify="end" m="xl" >
      <Switch
        size="xl"
        color={isDarkMode ? 'dark.4' : 'light.4'}
        onLabel={moonIcon}
        offLabel={sunIcon}
        checked={isDarkMode}
        thumbIcon={iconSwitch}
        onChange={toggleColorScheme}
      />
      {/* <Button variant="outline" color="yellow" onClick={() => setColorScheme('light')}>
        Text
      </Button> */}
    </Group>
  );
}
