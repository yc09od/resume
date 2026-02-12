'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import {
  Code,
  Palette,
  Speed,
  Lightbulb,
} from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t.about.features.codeQuality.title,
      description: t.about.features.codeQuality.description,
    },
    {
      icon: Palette,
      title: t.about.features.modernDesign.title,
      description: t.about.features.modernDesign.description,
    },
    {
      icon: Speed,
      title: t.about.features.performance.title,
      description: t.about.features.performance.description,
    },
    {
      icon: Lightbulb,
      title: t.about.features.innovation.title,
      description: t.about.features.innovation.description,
    },
  ];

  return (
    <Box
      id="about"
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
            background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t.about.title}
        </Typography>

        <Grid container spacing={4} sx={{ marginBottom: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: 'white',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 600 }}>
                {language === 'zh' ? '我是谁' : 'Who I Am'}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#666' }}>
                {t.about.description}
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: 'white',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 600 }}>
                {language === 'zh' ? '我的方法' : 'My Approach'}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#666' }}>
                {language === 'zh'
                  ? '我相信代码不仅应该工作，还应该优雅、高效且易于维护。在每个项目中，我优先考虑用户体验、性能和代码质量。我与客户和团队紧密合作，以确保最终产品符合或超过预期。'
                  : 'I believe code should not only work, but also be elegant, efficient, and easy to maintain. In every project, I prioritize user experience, performance, and code quality. I work closely with clients and teams to ensure the final product meets or exceeds expectations.'}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Icon
                      sx={{
                        fontSize: 50,
                        color: '#1976d2',
                        marginBottom: 2,
                      }}
                    />
                    <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
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
