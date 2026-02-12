'use client';

import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
} from '@mui/material';
import { useLanguage } from '@/context/LanguageContext';

const experiences = [
  {
    company: 'Bell',
    position: 'Senior Site Engineer',
    period: 'Apr 2022 - Present',
    duration: '3 yrs 11 mos',
    location: 'Mississauga, Ontario, Canada',
    locationType: 'On-site',
    description: 'Spearheaded the end-to-end design, development, and maintenance of a significant portion of Bell\'s medium-to-large-scale corporate web pages within a cross-functional Agile (Scrum) environment. Recognized for leveraging automation to solve operational bottlenecks and significantly enhance team productivity.',
    keyResponsibilities: [
      {
        title: 'Agile Development & Implementation',
        description: 'Delivered pixel-perfect, responsive web pages from Figma mockups within iterative sprint cycles. Translated design concepts into production-ready code from blank slate to deployment, using HTML, CSS, JavaScript, and React within a modern component-based architecture.'
      },
      {
        title: 'Efficiency Engineering Initiative',
        description: 'Identified a recurring bottleneck in processing client content updates provided in Excel format. Designed and implemented a solution that automated the conversion of tabular data into production-ready HTML. Result: This initiative reduced the time spent on bulk content updates by over 90%, eliminated human error, and freed up developer time for more complex problem-solving tasks.'
      },
      {
        title: 'Technical Stack',
        description: 'Wrote scripts in Python (using Pandas) and Node.js to parse Excel files, transform data, and generate structured HTML with appropriate CSS classes, seamlessly integrating the output into the codebase.'
      },
      {
        title: 'Maintenance & Collaboration',
        description: 'Maintained and updated site content while collaborating within an Agile team to provide technical insights during the design phase and participating in sprint planning and retrospectives.'
      }
    ],
    skills: ['HTML5', 'CSS3', 'SASS/SCSS', 'JavaScript (ES6+)', 'jQuery', 'React.js', 'Python', 'Pandas', 'Node.js', 'Git', 'Figma', 'Jira', 'Salesforce'],
  },
  {
    company: 'Adaptiv Networks',
    position: 'Senior application developer',
    period: 'Jan 2017 - Apr 2022',
    duration: '5 yrs 4 mos',
    location: 'Mississauga, Ontario, Canada',
    locationType: 'On-site',
    description: 'Developed a Software-defined Internet Management System (SaaS, CMS) with complete end-to-end solution spanning frontend, backend, deployment, and maintenance in a collaborative Agile environment.',
    keyResponsibilities: [
      {
        title: 'Software-defined Portal UI Development',
        description: 'Developed a Software-defined Internet Management System (SaaS, CMS). Built dynamic UI using ES6, jQuery, Knockout, and Angular 6.0.8. Developed Angular projects using PrimeNG and KendoUI components. Implemented responsive layouts and effects using CSS3, Bootstrap 3 & 4. Connected front-end with .NET Service using JSON data binding. Used Amcharts library to display comprehensive data reports for Internet usage and logs including bandwidth, talkers, and ASN BGP metrics.'
      },
      {
        title: '.NET (C#) Backend API Development',
        description: 'Responsible for coding RESTful router services and functional objects for data transfer, data collection, SSH connections (Rebex library), and operations with AgniOS (FreeBSD-based) CPE, including email and FTP operations. Developed RESTful backend services using .NET Core 2.2 and Service Stack framework. Worked with GitHub API, Netbox (IPAM) API, and Rebex library (SSH, SFTP, FTP). Maintained code using VS2017 with ReSharper and LINQPad5 for productivity.'
      },
      {
        title: 'Data Management',
        description: 'Participated in comprehensive data management using .NET with multiple database systems: Influx DB (TSDB), RavenDB, MySQL, LDAP, and PostgreSQL 10 with JSONB support, and Marten for event sourcing. Developed applications on Windows web server using IIS 7.'
      },
      {
        title: 'Deploy & Maintenance',
        description: 'Deployed GUI to QA and production environments on AWS Ubuntu servers. Deployed RESTful API to QA and production environments on AWS Windows Server 2016. Traced batches, jobs, and sessions using Hangfire and Log Rocket for monitoring and debugging. Maintained RavenDB databases across environments.'
      },
      {
        title: 'Teamwork & Agile Practices',
        description: 'Used Git for version control with experience in Phabricator and Private GitHub for process and ticket management. Operated across Windows 7, Linux (CentOS, Ubuntu) environments. Participated in Agile environment with two stand-ups per week, code reviews, face-to-face conversations, Scrum ceremonies. Independently worked on assigned components while collaborating effectively with team members.'
      }
    ],
    skills: ['Angular 6', 'ES6', 'jQuery', 'Knockout.js', 'Bootstrap 3/4', 'PrimeNG', 'KendoUI', 'CSS3', 'C#', '.NET Core 2.2', 'Service Stack', 'REST API', 'Influx DB', 'RavenDB', 'MySQL', 'PostgreSQL', 'LDAP', 'Marten', 'IIS 7', 'AWS', 'Git', 'Jira'],
  },
  {
    company: 'TelOIP Networks',
    position: 'Web Developer',
    period: 'Aug 2016 - Dec 2016',
    duration: '5 mos',
    location: 'Mississauga, Ontario, Canada',
    locationType: 'On-site',
    description: 'Developed Software-defined Internet Management System (SaaS, CMS) focusing on dynamic UI development and front-end integration with .NET backend services.',
    keyResponsibilities: [
      {
        title: 'Software-defined Portal UI Development',
        description: 'Developed Software-defined Internet Management System (SaaS, CMS) with emphasis on UI/UX quality. Built dynamic UI using ES6, jQuery, Knockout, and Angular 5 framework. Created responsive layouts and visual effects using CSS and Bootstrap 3 & 4. Integrated front-end with .NET Service using Ajax for seamless data communication. Implemented data visualization using Amcharts library to display Internet usage reports and logs including bandwidth, talkers, and ASN BGP metrics.'
      }
    ],
    skills: ['Angular 5', 'ES6', 'jQuery', 'Knockout.js', 'Bootstrap 3/4', 'CSS3', 'AJAX', '.NET', 'Amcharts'],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        pb: 2.5,
        mb: 2.5,
        borderBottom: '1px solid #e0e0e0',
        '&:last-child': {
          borderBottom: 'none',
          mb: 0,
        },
      }}
    >
      {/* Position and Company */}
      <Box sx={{ mb: 0.75 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#000', m: 0, fontSize: '1.05rem' }}>
            {exp.position}
          </Typography>
          {index === 0 && (
            <Typography
              variant="caption"
              sx={{
                px: 1,
                py: 0.4,
                backgroundColor: '#e8f5e9',
                color: '#2e7d32',
                borderRadius: '3px',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            >
              {t.experience.current}
            </Typography>
          )}
        </Box>
        <Typography variant="subtitle2" sx={{ color: '#666', fontWeight: 600, fontSize: '0.95rem' }}>
          {exp.company}
        </Typography>
        <Typography variant="caption" sx={{ color: '#999', display: 'block', fontSize: '0.85rem' }}>
          {exp.period} · {exp.duration} · 📍 {exp.location}
        </Typography>
      </Box>

      {/* Key Responsibilities as a list */}
      <Box sx={{ mt: 1.2, mb: 1.2 }}>
        {exp.keyResponsibilities.map((resp, respIndex) => (
          <Box key={respIndex} sx={{ mb: 0.8, display: 'flex', gap: 1.2 }}>
            <Typography sx={{ color: '#ff6b35', fontWeight: 600, minWidth: '6px', mt: 0.3 }}>
              •
            </Typography>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: '#ff6b35',
                  fontSize: '0.9rem',
                  mb: 0.25,
                }}
              >
                {resp.title}:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#555',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}
              >
                {resp.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Skills Chips */}
      <Stack direction="row" spacing={0.6} sx={{ flexWrap: 'wrap', gap: 0.6, mt: 1.2 }}>
        {exp.skills.slice(0, 10).map((skill, skillIndex) => (
          <Chip
            key={skillIndex}
            label={skill}
            size="small"
            sx={{
              height: 24,
              backgroundColor: '#f0f0f0',
              color: '#333',
              fontWeight: 500,
              fontSize: '0.8rem',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          />
        ))}
        {exp.skills.length > 10 && (
          <Chip
            label={`+${exp.skills.length - 10}`}
            size="small"
            sx={{
              height: 24,
              backgroundColor: '#f0f0f0',
              color: '#ff6b35',
              fontWeight: 600,
              fontSize: '0.8rem',
              borderRadius: '4px',
            }}
          />
        )}
      </Stack>
    </Box>
  );
}

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Box
      id="experience"
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: '#000',
            fontSize: '1.75rem',
          }}
        >
          {t.experience.title}
        </Typography>

        <Box>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
