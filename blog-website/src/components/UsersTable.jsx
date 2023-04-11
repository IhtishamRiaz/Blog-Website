import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { blogs } from '../context/BlogsProvider';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
];

export default function UsersTable() {

    const { usersData } = React.useContext(blogs);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={usersData}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}