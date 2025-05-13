import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const { register, handleSubmit, setValue } = useForm();
    const { userId } = useParams();

    const getDetails = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BURL}/users/${userId}`
      );
      //عشان يعرضلي ياهم عشان أقدر اعدل عليهم
      setValue("userName", data.user.userName);
      setValue("email", data.user.email);
      setValue("phone", data.user.phone);
    };

    useEffect(() => {
      getDetails();
    }, []);

    const nav = useNavigate("");

    const UpdateForm = async (value) => {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BURL}/users/${userId}`,
        { userName: value.userName }
        
      );
      nav("/home");
      console.log(data);
    };

    return (
      <div className={`container my-5`}>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit(UpdateForm)}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              {...register("userName")}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=" user name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Email address
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Phone
            </label>
            <input
              {...register("phone")}
              type="text"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="phone number"
              disabled
            />
          </div>
          <input
            type="submit"
            className="btn btn-outline-primary"
            value="Update"
          />
        </form>
      </div>
    );
}
