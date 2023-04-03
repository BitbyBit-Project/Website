import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';


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
  
  export default function AnteriorGradeTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense simple table">
          <TableHead>
            <TableRow>
              <TableCell>Anterior</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.clear}</TableCell>
                <TableCell align="right">{row.diminished}</TableCell>
                <TableCell align="right">{row.crackles}</TableCell>
                <TableCell align="right">{row.rhonchi}</TableCell>
                <TableCell align="right">{row.wheezing}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export function PosteriorGradeTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Posterior</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.clear}</TableCell>
                <TableCell align="right">{row.diminished}</TableCell>
                <TableCell align="right">{row.crackles}</TableCell>
                <TableCell align="right">{row.rhonchi}</TableCell>
                <TableCell align="right">{row.wheezing}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  export function LateralGradeTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Lateral</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.clear}</TableCell>
                <TableCell align="right">{row.diminished}</TableCell>
                <TableCell align="right">{row.crackles}</TableCell>
                <TableCell align="right">{row.rhonchi}</TableCell>
                <TableCell align="right">{row.wheezing}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };