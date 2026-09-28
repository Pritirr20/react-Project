import { useEffect, useState } from "react";
import axios from "axios";

function Form() {

    const API_URL = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const getUsers = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await axios.get(API_URL);

            console.log("Response:", response.data);

            setUsers(response.data);

        } catch (error) {

            console.log(error);

            setError("Failed to fetch users.");

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        getUsers();

    }, []);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const addUser = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);
            setError("");
            setMessage("");

            const response = await axios.post(
                API_URL,
                formData
            );

            console.log("POST Response:", response.data);

            // Add new user to UI
            setUsers([
                ...users,
                response.data
            ]);

            setMessage("User added successfully.");

            clearForm();

        } catch (error) {

            console.log(error);

            setError("Failed to add user.");

        } finally {

            setLoading(false);

        }
    };

    const updateUser = async (id) => {

        try {

            setLoading(true);
            setError("");
            setMessage("");

            const response = await axios.put(
                `${API_URL}/${id}`,
                formData
            );

            console.log("PUT Response:", response.data);

            // Update user in UI
            setUsers(
                users.map(user =>
                    user.id === id
                        ? {
                            ...user,
                            ...response.data
                        }
                        : user
                )
            );

            setMessage("User updated successfully.");

            clearForm();

        } catch (error) {

            console.log(error);

            setError("Failed to update user.");

        } finally {

            setLoading(false);

        }
    };

    const updateEmail = async (user) => {

        const newEmail = prompt(
            "Enter new email:",
            user.email
        );

        if (!newEmail) {
            return;
        }

        try {

            setLoading(true);
            setError("");
            setMessage("");

            const response = await axios.patch(
                `${API_URL}/${user.id}`,
                {
                    email: newEmail
                }
            );

            console.log("PATCH Response:", response.data);

            // Update only email in UI
            setUsers(
                users.map(item =>
                    item.id === user.id
                        ? {
                            ...item,
                            email: newEmail
                        }
                        : item
                )
            );

            setMessage("Email updated successfully.");

        } catch (error) {

            console.log(error);

            setError("Failed to update email.");

        } finally {

            setLoading(false);

        }
    };

    const deleteUser = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            setLoading(true);
            setError("");
            setMessage("");

            await axios.delete(
                `${API_URL}/${id}`
            );

            console.log("DELETE successful");

            // Remove user from UI
            setUsers(
                users.filter(user => user.id !== id)
            );

            setMessage("User deleted successfully.");

        } catch (error) {

            console.log(error);

            setError("Failed to delete user.");

        } finally {

            setLoading(false);

        }
    };

    const editUser = (user) => {

        setEditingId(user.id);

        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone
        });

        setMessage("");

        setError("");
    };

    const clearForm = () => {

        setFormData({
            name: "",
            email: "",
            phone: ""
        });

        setEditingId(null);

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (editingId) {

            updateUser(editingId);

        } else {

            addUser(e);

        }
    };


    return (
        <div
            style={{
                width: "800px",
                margin: "30px auto",
                fontFamily: "Arial"
            }}
        >

            <h1>User Management</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <br />
                <br />

                <button type="submit">

                    {editingId
                        ? "Update User"
                        : "Add User"
                    }

                </button>

                {editingId && (

                    <button
                        type="button"
                        onClick={clearForm}
                        style={{ marginLeft: "10px" }}
                    >
                        Cancel
                    </button>

                )}

            </form>

            {message && (
                <p>{message}</p>
            )}

            {error && (
                <p>{error}</p>
            )}

            {loading && (
                <h3>Loading...</h3>
            )}

            <hr />

            <h2>Users</h2>

            {users.map(user => (

                <div
                    key={user.id}
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        marginBottom: "10px"
                    }}
                >

                    <h3>
                        {user.name}
                    </h3>

                    <p>
                        Email: {user.email}
                    </p>

                    <p>
                        Phone: {user.phone}
                    </p>


                    {/* PUT */}

                    <button
                        onClick={() => editUser(user)}
                    >
                        Edit
                    </button>


                    {/* PATCH */}

                    <button
                        onClick={() => updateEmail(user)}
                        style={{ marginLeft: "10px" }}
                    >
                        Change Email
                    </button>


                    {/* DELETE */}

                    <button
                        onClick={() => deleteUser(user.id)}
                        style={{ marginLeft: "10px" }}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default Form;