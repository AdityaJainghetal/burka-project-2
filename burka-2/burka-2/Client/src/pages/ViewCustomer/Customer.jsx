// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';

// const Customer = () => {
//     const api = "http://localhost:8080/user";
//     const [registrations, setRegistrations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Define columns for the data table
//     const columns = [
//         {
//             name: 'Firm Name',
//             selector: row => row.firmName,
//             sortable: true,
//         },
//         {
//             name: 'Contact Name',
//             selector: row => row.contactName,
//             sortable: true,
//         },
//         {
//             name: 'Contact Type',
//             selector: row => row.contactType,
//             sortable: true,
//         },
//         {
//             name: 'Primary Mobile',
//             selector: row => row.mobile1,
//         },
//         {
//             name: 'Secondary Mobile',
//             selector: row => row.mobile2 || 'N/A',
//         },
//         {
//             name: 'WhatsApp',
//             selector: row => row.whatsapp || 'N/A',
//         },
//         {
//             name: 'Email',
//             selector: row => row.email,
//             sortable: true,
//         },
//         {
//             name: 'State',
//             selector: row => row.state,
//             sortable: true,
//         },
//         {
//             name: 'City',
//             selector: row => row.city,
//             sortable: true,
//         },
//         {
//             name: 'Discount',
//             selector: row => `${row.discount}%`,
//             sortable: true,
//         },
//         {
//             name: 'Registered At',
//             selector: row => new Date(row.createdAt).toLocaleString(),
//             sortable: true,
//         },
//     ];

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(api);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setRegistrations(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading data...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="container mt-4">
//             <h2 className="mb-4">Customer Registrations</h2>
//             <DataTable
//                 columns={columns}
//                 data={registrations}
//                 pagination
//                 highlightOnHover
//                 striped
//                 responsive
//                 defaultSortFieldId={1} // Default sort by Contact Name
//                 subHeader
//                 subHeaderComponent={
//                     <div className="mb-3">
//                         <input 
//                             type="text" 
//                             className="form-control" 
//                             placeholder="Search customers..." 
//                             // You can implement search functionality here
//                         />
//                     </div>
//                 }
//             />
//         </div>
//     );
// };

// export default Customer;


import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const Customer = () => {
    const api = "http://localhost:8080/user";
    const [registrations, setRegistrations] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const columns = [
        { name: 'Firm Name', selector: row => row.firmName, sortable: true },
        { name: 'Contact Name', selector: row => row.contactName, sortable: true },
        { name: 'Contact Type', selector: row => row.contactType, sortable: true },
        { name: 'Primary Mobile', selector: row => row.mobile1 },
        { name: 'Secondary Mobile', selector: row => row.mobile2 || 'N/A' },
        { name: 'WhatsApp', selector: row => row.whatsapp || 'N/A' },
        { name: 'Email', selector: row => row.email, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'Discount', selector: row => `${row.discount}%`, sortable: true },
        {
            name: 'Registered At',
            selector: row => new Date(row.createdAt).toLocaleString(),
            sortable: true,
        },
    ];

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setRegistrations(data);
                setFilteredData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Filter search
    useEffect(() => {
        const lowercasedValue = searchText.toLowerCase();
        const filtered = registrations.filter(item =>
            Object.values(item).some(value =>
                String(value).toLowerCase().includes(lowercasedValue)
            )
        );
        setFilteredData(filtered);
    }, [searchText, registrations]);

    if (loading) return <div>Loading data...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Customer Registrations</h2>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                striped
                responsive
                defaultSortFieldId={1}
                progressPending={loading}
                noDataComponent="No matching customers found."
                subHeader
                subHeaderComponent={
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Search customers..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                }
            />
        </div>
    );
};

export default Customer;
