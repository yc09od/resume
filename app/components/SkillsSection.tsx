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
      { name: 'TypeScript', level: 93 },
      { name: 'React.js / Next.js', level: 92 },
      { name: 'Angular', level: 90 },
      { name: 'HTML5 / CSS3 / SASS', level: 95 },
      { name: 'Bootstrap / Material-UI', level: 88 },
    ],
  },
  {
    category: 'Backend Development',
    categoryZh: '后端开发',
    skills: [
      { name: 'C# / .NET / .NET Core', level: 92 },
      { name: 'ASP.NET / REST API', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    category: 'Database & Cloud',
    categoryZh: '数据库与云服务',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 88 },
      { name: 'AWS (EC2, S3)', level: 85 },
      { name: 'NoSQL / Document DB', level: 82 },
      { name: 'Data Management & ETL', level: 85 },
    ],
  },
  {
    category: 'Tools & DevOps',
    categoryZh: '工具与开发运维',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker / CI/CD', level: 85 },
      { name: 'Jira / Agile/Scrum', level: 90 },
      { name: 'Visual Studio / VS Code', level: 90 },
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
              'AI/Machine Learning',
              'GraphQL',
              'Microservices',
              'Automated Testing',
              'Performance Optimization',
              'Code Review',
              'Figma',
              'Salesforce',
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
