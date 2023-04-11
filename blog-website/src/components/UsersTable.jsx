import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { blogs } from '../context/BlogsProvider';
import { useContext } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'email', headerName: 'Email', width: 170 },
];

export default function UsersTable() {

    const { usersData } = useContext(blogs);
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={usersData}
                columns={columns}
                checkboxSelection
            />
        </div>
    );
}