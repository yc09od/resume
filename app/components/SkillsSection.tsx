'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Stack,
} from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

const skillCategoriesData = [
  {
    category: 'Frontend Development',
    categoryZh: '前端开发',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React.js', level: 92 },
      { name: 'Angular (5, 6.0.8)', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / SASS / SCSS', level: 93 },
      { name: 'jQuery', level: 90 },
      { name: 'Bootstrap 3/4', level: 88 },
      { name: 'Knockout.js', level: 85 },
      { name: 'PrimeNG', level: 82 },
      { name: 'KendoUI', level: 82 },
    ],
  },
  {
    category: 'Backend Development',
    categoryZh: '后端开发',
    skills: [
      { name: 'C# / .NET', level: 92 },
      { name: '.NET Core 2.2', level: 90 },
      { name: 'ASP.NET', level: 88 },
      { name: 'REST API', level: 92 },
      { name: 'Service Stack Framework', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Python (Pandas)', level: 85 },
      { name: 'JSON', level: 95 },
    ],
  },
  {
    category: 'Database & Data Management',
    categoryZh: '数据库与数据管理',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL 10 (JSONB)', level: 87 },
      { name: 'RavenDB', level: 82 },
      { name: 'Influx DB (TSDB)', level: 80 },
      { name: 'LDAP', level: 78 },
      { name: 'Marten (Event Sourcing)', level: 75 },
      { name: 'Data Management & ETL', level: 85 },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    categoryZh: '工具与基础设施',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'AWS (EC2, S3)', level: 85 },
      { name: 'IIS 7 (Windows Web Server)', level: 82 },
      { name: 'Figma', level: 80 },
      { name: 'Jira / Scrum', level: 90 },
      { name: 'Salesforce', level: 80 },
      { name: 'VS2017 / ReSharper / LINQPad', level: 88 },
      { name: 'Phabricator', level: 75 },
    ],
  },
  {
    category: 'Data & Visualization',
    categoryZh: '数据与可视化',
    skills: [
      { name: 'Amcharts', level: 82 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Business Intelligence Reports', level: 80 },
    ],
  },
  {
    category: 'Languages & Methodologies',
    categoryZh: '语言与方法论',
    skills: [
      { name: 'English (Professional Working)', level: 90 },
      { name: 'Chinese (Native/Bilingual)', level: 100 },
      { name: 'Agile/Scrum Development', level: 92 },
      { name: 'Cross-functional Collaboration', level: 90 },
      { name: 'Code Review & Best Practices', level: 88 },
    ],
  },
];

export default function SkillsSection() {
  const { t, language } = useLanguage();

  // Map categories based on language
  const skillCategories = skillCategoriesData.map(cat => ({
    ...cat,
    displayName: language === 'zh' ? cat.categoryZh : cat.category,
  }));

  return (
    <Box
      id="skills"
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
          {t.skills.title}
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: 3,
                      fontWeight: 600,
                      color: '#1976d2',
                    }}
                  >
                    {category.displayName}
                  </Typography>

                  <Stack spacing={2.5}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 0.5,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: '#1976d2', fontWeight: 600 }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 4,
                              background: `linear-gradient(90deg, #1976d2 0%, #dc004e 100%)`,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: 8, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 600 }}>
            {t.skills.otherSkills}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
            }}
          >
            {[
              'GraphQL',
              'CI/CD Pipeline',
              'Automated Testing',
              'Cross-functional Collaboration',
              'Code Review',
              'Performance Optimization',
              'Microservices',
              'Docker',
            ].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{
                  borderColor: '#1976d2',
                  color: '#1976d2',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  padding: 1,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
