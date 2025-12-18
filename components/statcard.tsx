'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';

interface Props {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: Props) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(145deg, #0b0f12, #000)',
        border: '1px solid #00363a',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 0 20px #00e5ff',
        },
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" color="#80deea">
          {title}
        </Typography>
        <Typography variant="h4" color="#00e5ff" fontWeight={700}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
