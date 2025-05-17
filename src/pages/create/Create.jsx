import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";

export default function Create() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const RegisterForm = async (data) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/users`,
      data
    );
    if (response.status == 201) {
      toast.success("User Added Successfully", {
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

      nav("/home");
    }
    console.log(response);
  };

  //Start from here Render Phase and then commit Phase to rerender  ...... 
  return (
    <div className={`container my-5`}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(RegisterForm)}>
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Password{" "}
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="password"
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
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary"
          value="Register"
        />
      </form>
    </div>
  );
}
