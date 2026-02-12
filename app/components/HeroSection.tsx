'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { ArrowDownward, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', sm: '50vh', md: '60vh', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        color: '#333',
        position: 'relative',
        overflow: 'hidden',
        // 左侧橙色条纹装饰
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: '-50%',
          width: '400px',
          height: '200%',
          backgroundColor: '#ff6b35',
          opacity: 0.15,
          transform: 'skewX(-20deg)',
          pointerEvents: 'none',
        },
        // 右侧橙色圆形装饰
        '&::after': {
          content: '""',
          position: 'absolute',
          right: '-80px',
          bottom: '-80px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: '#ff6b35',
          opacity: 0.1,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            minHeight: { xs: 'auto', sm: '50vh', md: '60vh', lg: '100vh' },
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: { xs: 4, md: 0 },
            py: { xs: 10, md: 0 },
          }}
        >
          {/* 图片部分 */}
          <Box
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              right: { md: 0 },
              top: { md: 0 },
              width: { xs: '100%', sm: '80%', md: '55%' },
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              order: { xs: 1, md: 2 },
            }}
          >
            {/* 照片背景装饰 */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%)',
                borderRadius: '20px',
                display: { xs: 'none', md: 'block' },
              }}
            />

            {/* 照片容器 */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 'auto', md: '100%' },
                maxWidth: { xs: '100%', md: '650px' },
                maxHeight: { xs: '400px', md: '550px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/person.png"
                alt="Profile"
                width={500}
                height={600}
                priority
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Box>

          {/* 文字部分 */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: { xs: '100%', md: '55%' },
              paddingRight: { xs: 0, md: 4 },
              order: { xs: 2, md: 1 },
              width: '100%',
            }}
          >
            <Box
              sx={{
                animation: 'fadeInUp 1s ease-out',
                textAlign: { xs: 'center', md: 'left' },
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  marginBottom: 2,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {t.hero.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.5rem' },
                  fontWeight: 400,
                  marginBottom: 3,
                  opacity: 0.9,
                  color: '#ff6b35',
                }}
              >
                {t.hero.subtitle}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  opacity: 0.8,
                  lineHeight: 1.8,
                  marginBottom: 3,
                  whiteSpace: 'pre-line',
                }}
              >
                {t.hero.description}
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                  marginBottom: 4,
                  width: { xs: '100%', sm: 'auto' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  component="a"
                  href="/#experience"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#ff6b35',
                    color: 'white',
                    fontWeight: 600,
                    padding: '12px 32px',
                    fontSize: '1rem',
                    textTransform: 'none',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      backgroundColor: '#ff5520',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {t.hero.cta}
                </Button>
                <Button
                  component="a"
                  href="/#contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#ff6b35',
                    color: '#ff6b35',
                    fontWeight: 600,
                    padding: '12px 32px',
                    fontSize: '1rem',
                    textTransform: 'none',
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    },
                  }}
                >
                  {t.nav.contact}
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2 }}
                sx={{
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  component="a"
                  href="https://github.com/yc09od"
                  target="_blank"
                  startIcon={<GitHub />}
                  sx={{
                    color: '#ff6b35',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': {
                      color: '#ff8555',
                    },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/yanglong-cui-b389a0b7/"
                  target="_blank"
                  startIcon={<LinkedIn />}
                  sx={{
                    color: '#ff6b35',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': {
                      color: '#ff8555',
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  component="a"
                  href="mailto:yanglongcui@gmail.com"
                  startIcon={<Email />}
                  sx={{
                    color: '#ff6b35',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': {
                      color: '#ff8555',
                    },
                  }}
                >
                  Email
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* ???? */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '50%': {
                transform: 'translateX(-50%) translateY(10px)',
              },
            },
            color: '#ff6b35',
          }}
        >
          <ArrowDownward fontSize="large" />
        </Box>
      </Container>
    </Box>
  );
}
