import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header() {
  return (
    <div>
      <h1>Doğukan Özcan ilk denemeler</h1>
      <Switch {...label} defaultChecked />
      <Switch {...label} />

    </div>
  );
}