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
        minHeight: '100vh',
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
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
          {/* 背景图片 - 占据2/3空间 */}
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '55%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
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
              }}
            />
            
            {/* 照片容器 */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                maxWidth: '650px',
                maxHeight: '550px',
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

          {/* 左侧文字部分 - 覆盖在图片上 */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '55%',
              paddingRight: 4,
            }}
          >
            <Box
              sx={{
                animation: 'fadeInUp 1s ease-out',
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
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
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
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
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
                  fontSize: '1rem',
                  opacity: 0.8,
                  lineHeight: 1.8,
                  marginBottom: 3,
                  whiteSpace: 'pre-line',
                }}
              >
                {t.hero.description}
              </Typography>

              <Stack direction="row" spacing={2} sx={{ marginBottom: 4 }}>
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
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    },
                  }}
                >
                  {t.nav.contact}
                </Button>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Button
                  component="a"
                  href="https://github.com/yc09od"
                  target="_blank"
                  startIcon={<GitHub />}
                  sx={{
                    color: '#ff6b35',
                    fontWeight: 500,
                    textTransform: 'none',
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
