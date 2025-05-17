import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from "react-toastify/unstyled";
import Loader from "../../components/loader/Loader";


export default function Home() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      setUsers(data.users);
    } catch (e) {
      if (e.status == 404) {
        setError("Page Not Found");
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    const data = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    console.log(data);
    toast.success("User deleted successfully !", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    });

    const newUsers = users.filter((user) => user._id != id);
    setUsers(newUsers);
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <p className="text-danger">Page Not Found </p>;
  }

  return (
    <>
      <table
        className={`table  table-light table-borderless table-striped  container my-5 `}
      >
        <thead>
          <tr className={`table-success `}>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/details/${user._id}`}
                  className={`btn btn-outline-primary
                   `}
                >
                  {" "}
                  Details
                </Link>
                <button
                  onClick={() => deleteUser(user._id)}
                  className={`btn btn-outline-danger mx-4`}
                >
                  Delete
                </button>
                <Link
                  to={`/edit/${user._id}`}
                  className={`btn btn-outline-dark
                   `}
                >
                  {" "}
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
