import * as React from 'react';
import { getStatusStyle } from './helpers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, S1S2, Murmur) {
  return { name, S1S2, Murmur };
}

const rows = [
  createData('RSB 2IS', 'S1, S2', 'Murmur'),
  createData('LSB 2IS', 'S1, S2', 'Murmur'),
  createData('LSB 3IS', 'S1, S2', 'Murmur'),
  createData('LSB 4IS', 'S1, S2', 'Murmur'),
  createData('LSB 5IS', 'S1, S2', 'Murmur'),
];

export function PrecordiumGradeTable({ grades }) {
  const receivedStatus = grades?.[0] || {};

  function getStatusStyle(value, propertyName) {
    const formattedPropertyName = propertyName.replace(/ /g, '_');

    // Console log to check the value of receivedStatus
    console.log('Received Status:', receivedStatus);

    // Console log to check if getStatusStyle is being called and receiving the expected arguments
    console.log('getStatusStyle called with:', value, propertyName);

    // Console log to check the value of receivedStatus[formattedPropertyName]
    console.log('receivedStatus[formattedPropertyName]:', receivedStatus[formattedPropertyName]);

    return {
      backgroundColor: receivedStatus[formattedPropertyName] === value ? '#ffcc80' : 'transparent',
    };
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense simple table">
        <TableHead>
          <TableRow>
            <TableCell>Precordium</TableCell>
            <TableCell align="right">S1, S2</TableCell>
            <TableCell align="right">Murmur</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.S1S2, row.name)}>
                {row.S1S2}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.Murmur, row.name)}>
                {row.Murmur}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

