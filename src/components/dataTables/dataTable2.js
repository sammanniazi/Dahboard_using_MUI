import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Avatar, Grid, Typography } from '@mui/material';




  // Define custom renderer for "Autho" column
  const AuthorRenderer = ({ value }) => (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Avatar src={value.avatarUrl} alt={value.name} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">{value.name}</Typography>
      </Grid>
    </Grid>
  );

const columns: GridColDef[] = [
    { field: 'autho', headerName: 'Project', width: 200, renderCell: AuthorRenderer },
    { field: 'function', headerName: 'Buget', width: 150,editable: true },
    { field: 'status', headerName: 'Status', width: 150,editable: true },
    { field: 'employeed', headerName: 'Completion', width: 150,editable: true },
     { field: 'action', headerName: 'Action', width: 150,editable: true,
    valueGetter: (params: GridValueGetterParams) =>
      ` ${params.row.action || ''}`,
  },
];

const rows = [
    {
      id: 1,
      autho: { name: 'Github', avatarUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
      function: 'Manager',
      status: 'Active',
      employeed: '2020-01-01',
      action: 'Edit',
    
    },
    {
        id: 2,
        autho: { name: 'Asana', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLPltA_NAEq8rPJ6NWEIVOiJ5ijxjMJ-cUsXhaE8heA&s' },
        function: 'Employee',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 3,
        autho: { name: 'spotify', avatarUrl: 'https://e7.pngegg.com/pngimages/420/432/png-clipart-spotify-logo-spotify-computer-icons-podcast-music-apps-miscellaneous-angle-thumbnail.png' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 4,
        autho: { name: 'Slack', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPa_dRk0KCpXnYRhEvdzKHZ-XQ5Dv5FJzGDjZMDdw-Gg&s' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 5,
        autho: { name: 'Invesion', avatarUrl: 'https://www.vectorlogo.zone/logos/invisionapp/invisionapp-ar21.png' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 6,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },
      {
        id: 7,
        autho: { name: 'John', avatarUrl: 'https://i.pravatar.cc/48?img=1' },
        function: 'Manager',
        status: 'Active',
        employeed: '2020-01-01',
        action: 'Edit',
      
      },

]
export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      disableColumnMenu
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  );
}
