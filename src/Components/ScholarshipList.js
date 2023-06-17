import { useState, useEffect } from "react";
import axios from "axios";

function ScholarshipList() {
    const [users, setusers] = useState();
    
    const handleSubmit = (e) => {
        console.log("clicked ", e)
        axios.delete('http://localhost:5555/Scholarship/'+e).then((res) => {
            //setusers(res.data);
            //console.log(res.data);
            getuserList();
        })

    };

    function getuserList(){
        axios.get('http://localhost:5555/Scholarship').then((res) => {
            setusers(res.data);
            //console.log(res.data);
        })
    }

    useEffect(() => {
        getuserList();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>

                {users && users.map(d => <tr>

                    <th> {d.username}</th>
                    <th>{d.description}</th>
                    <th>{d._id}</th>
                    <th> <button type="button" onClick={() => handleSubmit(d._id)} >Delete </button></th>
                </tr>)}

            </tbody>
        </table>
    )
}

export default ScholarshipList