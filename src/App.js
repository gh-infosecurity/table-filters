import {Table} from 'antd';
import React, {useState} from 'react';
import Button from "antd/es/button";

let columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe Black',
                value: 'Joe Black',
            },
            {
                text: 'Jim Red',
                value: 'Jim Red',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
            },
        ],

        onFilter: (value, record) => record.name.indexOf(value) === 0,
        defaultFilteredValue: ['Joe Black']
    },
    {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};


const App = () => {
    let [cols, setCols] = useState(columns);

    function resetFiltersHandler() {

        let map = columns.map(item => {
            item = item.dataIndex === 'name' ? {...item, defaultFilteredValue: []} : item;
            item = item.dataIndex === 'address' ? {...item, filterResetToDefaultFilteredValue: true} : item;
            return item;
        });

        console.log('resetFiltersHandler', map);
        setCols(map);
    }

    console.log('re-render', cols[0], cols[2]);
    return <>
        <Table columns={cols} dataSource={data} onChange={onChange}/>
        < Button onClick={resetFiltersHandler} type="primary">Reset Filters</Button>
    </>;
};

export default App;