'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const socialLinks = [
    {
      icon: GitHub,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: LinkedIn,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook',
    },
  ];

  const navLinks = [
    { label: t.footer.links.home, href: '#' },
    { label: t.footer.links.about, href: '#about' },
    { label: t.footer.links.skills, href: '#skills' },
    { label: t.footer.links.experience, href: '#experience' },
    { label: t.footer.links.resume, href: '#resume' },
    { label: t.footer.links.contact, href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        py: 8,
        marginTop: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ marginBottom: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              {language === 'zh' ? '关于我' : 'About Me'}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8 }}>
              {language === 'zh' 
                ? '全栈开发者，专注于使用现代技术构建高质量的web应用程序。'
                : 'Full Stack Developer, focused on building high-quality web applications using modern technologies.'}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              {language === 'zh' ? '导航' : 'Navigation'}
            </Typography>
            <Stack spacing={1}>
              {navLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: '#666',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: '#ff6b35',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              {language === 'zh' ? '联系方式' : 'Contact'}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#666' }}
                >
                📧 yanglongcui@gmail.com
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                📍 {language === 'zh' ? '加拿大安大略省密西沙加' : 'Mississauga, Ontario, Canada'}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
              {language === 'zh' ? '社交媒体' : 'Social Media'}
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#666',
                      transition: 'color 0.3s',
                      '&:hover': {
                        color: '#ff6b35',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: '#333', marginY: 3 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#666', marginBottom: 1 }}>
            {t.footer.rights}
          </Typography>
          <Typography variant="caption" sx={{ color: '#999' }}>
            Designed and built with React, Next.js and Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
