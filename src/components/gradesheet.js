import * as React from 'react';
import { getStatusStyle, getStatuses } from './helpers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, clear, diminished, crackles, rhonchi, wheezing) {
  return { name, clear, diminished, crackles, rhonchi, wheezing };
}


const rows = [
  createData('RUL', 'Clear', 'Diminished', 'Crackles', 'Rhonchi', 'Wheezing'),
  createData('RML', 'Clear', 'Diminished', 'Crackles', 'Rhonchi', 'Wheezing'),
  createData('RLL', 'Clear', 'Diminished', 'Crackles', 'Rhonchi', 'Wheezing'),
  createData('LUL', 'Clear', 'Diminished', 'Crackles', 'Rhonchi', 'Wheezing'),
  createData('LLL', 'Clear', 'Diminished', 'Crackles', 'Rhonchi', 'Wheezing'),
];


export function AnteriorGradeTable({ grades }) {
  const receivedStatus = grades?.[0] || {}; // Assuming grades is an array with at least one element

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense simple table">
        <TableHead>
          <TableRow>
            <TableCell>Anterior</TableCell>
            <TableCell align="right">Clear</TableCell>
            <TableCell align="right">Diminished</TableCell>
            <TableCell align="right">Crackles</TableCell>
            <TableCell align="right">Rhonchi</TableCell>
            <TableCell align="right">Wheezing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.clear, receivedStatus[`Ant_${row.name}`])}>
                {row.clear}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.diminished, receivedStatus[`Ant_${row.name}`])}>
                {row.diminished}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.crackles, receivedStatus[`Ant_${row.name}`])}>
                {row.crackles}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.rhonchi, receivedStatus[`Ant_${row.name}`])}>
                {row.rhonchi}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.wheezing, receivedStatus[`Ant_${row.name}`])}>
                {row.wheezing}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export function PosteriorGradeTable({ grades }) {
  const receivedStatus = grades?.[0] || {}; // Assuming grades is an array with at least one element

  const filteredRows = rows.filter(row => row.name !== 'RML');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense simple table">
        <TableHead>
          <TableRow>
            <TableCell>Posterior</TableCell>
            <TableCell align="right">Clear</TableCell>
            <TableCell align="right">Diminished</TableCell>
            <TableCell align="right">Crackles</TableCell>
            <TableCell align="right">Rhonchi</TableCell>
            <TableCell align="right">Wheezing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.clear, receivedStatus[`Post_${row.name}`])}>
                {row.clear}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.diminished, receivedStatus[`Post_${row.name}`])}>
                {row.diminished}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.crackles, receivedStatus[`Post_${row.name}`])}>
                {row.crackles}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.rhonchi, receivedStatus[`Post_${row.name}`])}>
                {row.rhonchi}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.wheezing, receivedStatus[`Post_${row.name}`])}>
                {row.wheezing}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function LateralGradeTable({ grades }) {
  const receivedStatus = grades?.[0] || {}; // Assuming grades is an array with at least one element

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense simple table">
        <TableHead>
          <TableRow>
            <TableCell>Lateral</TableCell>
            <TableCell align="right">Clear</TableCell>
            <TableCell align="right">Diminished</TableCell>
            <TableCell align="right">Crackles</TableCell>
            <TableCell align="right">Rhonchi</TableCell>
            <TableCell align="right">Wheezing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.clear, receivedStatus[`Lat_${row.name}`])}>
                {row.clear}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.diminished, receivedStatus[`Lat_${row.name}`])}>
                {row.diminished}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.crackles, receivedStatus[`Lat_${row.name}`])}>
                {row.crackles}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.rhonchi, receivedStatus[`Lat_${row.name}`])}>
                {row.rhonchi}
              </TableCell>
              <TableCell align="right" style={getStatusStyle(row.wheezing, receivedStatus[`Lat_${row.name}`])}>
                {row.wheezing}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
