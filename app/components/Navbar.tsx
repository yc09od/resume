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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const { language, setLanguage, t } = useLanguage();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.skills, href: '/#skills' },
    { label: t.nav.resume, href: '/#resume' },
    { label: t.nav.contact, href: '/#contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid #ff6b35',
        }}
      >
        <Box sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#ff6b35' }}>
          Menu
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ff6b35' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flex: 1 }}>
        {navLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton
              component={Link}
              href={link.href}
              onClick={handleDrawerToggle}
              sx={{
                color: '#ff6b35',
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                },
              }}
            >
              <ListItemText
                primary={link.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid rgba(255, 107, 53, 0.2)' }}>
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={(e, newLanguage) => {
            if (newLanguage !== null) {
              setLanguage(newLanguage);
            }
          }}
          fullWidth
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
      </Box>
    </Box>
  );

  return (
    <>
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

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center', mr: 3 }}>
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

            {/* Desktop Language Toggle */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
