import React, { useState, useEffect } from 'react';
import axios from 'axios';
function TableList() {
    const [users, setUsers] = useState({ hits: [] });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(result => result.json())
            .then((res) => {
                console.log('vinod',res)
                setUsers({ hits: res });
            })
    }, [setUsers])

    return (
        <>
         <div>
            <h1>List data</h1>
            <table style={{ width: '100%' }} >
                <td>ID</td>
                <td>Table</td>
                <td>Body</td>
            </table>
            {users.hits &&
                users.hits.map(item =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>

                )}
        </div></>
       
    );
}
export default TableList;