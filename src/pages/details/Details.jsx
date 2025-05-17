import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";

export default function Details() {
  const { userId } = useParams();//عشان أجيب الid بسهولة 
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);


  const getDetails = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BURL}/users/${userId}`
      );
      setUser(data.user);
    } catch (e) {
      if (e.status == 404) {
        setError("Page Not Found");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (loading) {
    return <Loader/>
  }
  if (error) {
    return <div className="text-danger">Page Not Found </div>;
  }

  return (
    <div className={` container my-4`}>
      <h2 className={`fs-2 fw-bold my-5`}>User Details</h2>
    
      <h3 className={`mb-2 `}> User Name is : {user.userName}</h3>
      <h3 className={`mb-2 `}> User Email is : {user.email}</h3>
      <h3 className={`mb-2 `}> User Phone Number is : {user.phone}</h3>
    </div>
  )
}
