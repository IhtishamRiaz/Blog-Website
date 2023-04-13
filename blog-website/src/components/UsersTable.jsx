import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { blogs } from '../context/BlogsProvider';
import { Box } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'regDate', headerName: 'Reg Date', width: 170 },
];

export default function UsersTable() {
    const { usersData } = useContext(blogs);
    const [filteredData, setFilteredData] = useState(usersData);

    const handleSearch = (search) => {
        const searchValue = search.target.value.toLowerCase();
        const filtered = usersData.filter((data) => {
            const firstName = data.firstName.toLowerCase();
            const lastName = data.lastName.toLowerCase();
            const id = data.id.toString().toLowerCase();
            const age = data.age.toString().toLowerCase();
            return (
                firstName.includes(searchValue) ||
                lastName.includes(searchValue) ||
                id.includes(searchValue) ||
                age.includes(searchValue)
            );
        });
        setFilteredData(filtered);
    };

    useEffect(() => {
        setFilteredData(usersData);
    }, [usersData]);

    return (
        <Box className='user-table'>
            <div class="searchBox">
                <input className='search' type="text" placeholder="Search" onChange={handleSearch} />
            </div>
            <div style={{ height: 600, width: '100%' }}>
                <div style={{ marginBottom: 10 }}>
                </div>
                <DataGrid
                    rows={filteredData}
                    columns={columns}
                    checkboxSelection
                />
            </div>
        </Box>
    );
}
