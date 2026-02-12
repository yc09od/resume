'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { Download, Visibility, VisibilityOff } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

export default function ResumeSection() {
  const [showPdf, setShowPdf] = useState(false);
  const { t } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="resume"
      sx={{
        py: 10,
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            marginBottom: 3,
            background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t.resume.title}
        </Typography>

        <Box sx={{ textAlign: 'center', marginBottom: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            endIcon={<Download />}
            onClick={handleDownload}
            sx={{
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            {t.resume.download}
          </Button>
          <Button
            variant="outlined"
            startIcon={showPdf ? <VisibilityOff /> : <Visibility />}
            onClick={() => setShowPdf(!showPdf)}
            sx={{
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            {showPdf ? t.resume.preview : t.resume.preview}
          </Button>
        </Box>

        {showPdf && (
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '800px',
              backgroundColor: 'white',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              overflow: 'auto',
              p: 2,
            }}
          >
            <Box
              component="iframe"
              src="/resume.pdf"
              sx={{
                width: '100%',
                height: '100%',
                border: 'none',
                minHeight: '800px',
              }}
            />
          </Paper>
        )}

        <Alert severity="info" sx={{ marginTop: 3 }}>
          {t.resume.description}
        </Alert>
      </Container>
    </Box>
  );
}
