'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Email,
      title: language === 'zh' ? '邮箱' : 'Email',
      value: 'yanglongcui@gmail.com',
      link: 'mailto:yanglongcui@gmail.com',
    },
    {
      icon: LocationOn,
      title: language === 'zh' ? '地点' : 'Location',
      value: language === 'zh' ? '加拿大安大略省密西沙加' : 'Mississauga, Ontario, Canada',
      link: '#',
    },
    {
      icon: Phone,
      title: language === 'zh' ? '电话' : 'Phone',
      value: '+1 (905) 325-0111',
      link: 'tel:+9053250111',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: '#ffffff',
        color: '#333',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            marginBottom: 6,
            color: '#ff6b35',
          }}
        >
          {t.contact.title}
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 6 }}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#f5f5f5',
                    color: '#333',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)',
                      backgroundColor: '#efefef',
                    },
                  }}
                >
                  <CardContent>
                    <Icon
                      sx={{
                        fontSize: 40,
                        color: '#ff6b35',
                        marginBottom: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    <Typography
                      component="a"
                      href={info.link}
                      variant="body2"
                      sx={{
                        color: '#666',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#ff6b35',
                        },
                      }}
                    >
                      {info.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
