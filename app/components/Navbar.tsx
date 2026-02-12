'use client';

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useScrollTrigger,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.resume, href: '/#resume' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        color: '#ff6b35',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#ff6b35',
            }}
          >
            My Portfolio
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mr: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                href={link.href}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#ff6b35',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={(e, newLanguage) => {
              if (newLanguage !== null) {
                setLanguage(newLanguage);
              }
            }}
            sx={{
              backgroundColor: 'rgba(255, 107, 53, 0.1)',
              '& .MuiToggleButton-root': {
                color: '#ff6b35',
                border: '1px solid #ff6b35',
                '&.Mui-selected': {
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#ff5520',
                  },
                },
              },
            }}
          >
            <ToggleButton value="en" sx={{ px: 2, py: 0.5 }}>
              EN
            </ToggleButton>
            <ToggleButton value="zh" sx={{ px: 2, py: 0.5 }}>
              CN
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
