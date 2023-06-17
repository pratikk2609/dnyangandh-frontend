import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
    const [users, setusers] = useState();
  
    const handleSubmit = (e) => {
        console.log("clicked ", e)
        axios.delete('http://localhost:5555/user/'+e).then((res) => {
            //setusers(res.data);
            //console.log(res.data);
            getuserList();
        })

    };


    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });
    function getuserList(){
        axios.get('http://localhost:5555/user').then((res) => {
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
                    <th>password</th>
                    <th>email</th>
                    <th>id</th>
                </tr>
            </thead>
            <tbody>

                {users && users.map(d => <tr>

                    <th> {d.username}</th>
                    <th>{d.password}</th>
                    <th>{d.email}</th>
                    <th>{d._id}</th>
                    <th> <button type="button" onClick={() => handleSubmit(d._id)} >Delete </button></th>
                </tr>)}

            </tbody>
        </table>
    )
}

export default UserList