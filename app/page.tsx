'use client';

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { Welcome } from '@/components/Welcome/Welcome';
import { MainHeader } from '@/components/MainHeader/MainHeader';
import { FooterMain } from '@/components/FooterMain/FooterMain';
import { ProfileBanner } from '@/components/ProfileBanner/ProfileBanner';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  // URL de la imagen de fondo
  const backgroundImageUrl =
    'https://i.pinimg.com/originals/c4/92/ba/c492baf54af3024902ae3cc570f2aaf3.jpg'; // Reemplaza con la URL de tu imagen de fondo

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: '15%', breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: '15%', breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <MainHeader></MainHeader>
      </AppShell.Header>
      <AppShell.Navbar>
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`, // URL de la imagen de fondo
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed', // Para que la imagen quede fija
            height: '100%', // 100% de altura
            width: '100%', // 100% de ancho
          }}
        ></div>
      </AppShell.Navbar>
      <AppShell.Main>
        <Welcome></Welcome>
        <ProfileBanner></ProfileBanner>
      </AppShell.Main>

      <AppShell.Aside>
        <div
          style={{
            backgroundImage: `url(${backgroundImageUrl})`, // URL de la imagen de fondo
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed', // Para que la imagen quede fija
            height: '100%', // 100% de altura
            width: '100%', // 100% de ancho
          }}
        ></div>
      </AppShell.Aside>

      <AppShell.Footer p="md">
        <FooterMain></FooterMain>
      </AppShell.Footer>
    </AppShell>
  );
}
