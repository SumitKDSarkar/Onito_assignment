import React from "react";
import "./FormData.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const FormData = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    dobOrAge: yup.string().required(),
    sex: yup.string().required(),
    mobile: yup
      .string()
      .matches(
        /^[6-9]\d{9}$/,
        "Mobile Number must be a Valid Indian Mobile Number"
      )
      .nullable(),
    emergencyContactNumber: yup
      .string()
      .matches(
        /^[6-9]\d{9}$/,
        "Emergency Contact Number must be a Valid Indian Mobile Number"
      )
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 
  return (
    <div className="main-div">
      <form className="form">
        <h1 className="Personal-details">Personal Details</h1>
        <hr className="hr" />
        <br />
        <div className="second_main_div">
          <div>
            <label>Name:* </label>
            <input
              className="input_details"
              type="text"
              name="Fname"
              placeholder="Enter Your Name"
              {...register("fullName")}
            />
            <h4>
              <span>{errors.fullName?.message}</span>
            </h4>
          </div>
          <div>
            <label className="form-label">Date of Birth / Age: </label>
            <input
              className="input_details"
              type="date"
              name="age"
              {...register("dobOrAge")}
            />
            <h4>
              <span>{errors.dobOrAge?.message}</span>
            </h4>
          </div>
          <div>
            <label className="form-label">Sex: </label>

            <select className="select_details" name="sex" {...register("sex")}>
              <option>Enter Sex</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">Other</option>
            </select>
            <h4>
              <span>{errors.sex?.message}</span>
            </h4>
          </div>
          <div>
            <label className="form-label">Mobile: </label>
            <input
              className="input_details"
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              {...register("mobile")}
            />
            <h4>
              <span>{errors.mobile?.message}</span>
            </h4>
          </div>
          <div>
            <label className="form-label">ID Type: </label>
            <select
              className="select_details"
              name="idType"
              {...register("idType")}
            >
              <option value="">Select ID Type</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
            </select>
            <input type="text" className="input_details" placeholder="Enter Govt ID" name="id" {...register("id")} />
            <h4>
              <span>{errors.id?.message}</span>
            </h4>
          </div>
        </div>

        <h1 className="contact-Details">Contact Details</h1>
        <hr className="hr" />
        <br />
        <div className="second_main_div">
          <div>
            <label className="form-label">Guardian Details: </label>
            <select
              className="select_details"
              name="guardian"
              {...register("guardianTitle")}
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
            </select>

            <input
              type="text"
              placeholder="Enter Guardian Name"
              name="guardianName"
              className="input_details"
              {...register("guardianName")}
            />
          </div>
          <div>
            <label className="form-label">Emergency Contact No.: </label>
            <input
              className="input_details"
              placeholder="Enter Emergency No."
              type="text"
              name="emergencyContact"
              {...register("emergencyContactNumber")}
            />
            <h4>
              <span>{errors.emergencyContactNumber?.message}</span>
            </h4>
          </div>
          <div>
            <label>Email: </label>
            <input
              className="input_details"
              placeholder="Enter Email"
              type="text"
              name="email"
              {...register("email")}
            />
          </div>
        </div>

        <h1 className="address-Details">Address Details</h1>
        <hr className="hr" />
        <br />
        <div className="second_main_div">
          <div>
            <label className="form-label">Address: </label>
            <input
            placeholder="Enter Address"
              className="input_details"
              type="text"
              name="address"
              {...register("address")}
            />
          </div>

          <div>
            <label className="form-label">Country: </label>
            <input
              className="input_details"
              placeholder="Enter Country"
              type="text"
              name="country"
              {...register("country")}
            />
          </div>

          <div>
            <label className="form-label">State: </label>
            <input
              className="input_details"
              placeholder="Enter State"
              type="text"
              name="state"
              {...register("state")}
            />
          </div>

          <div>
            <label className="form-label">Pincode: </label>
            <input
              className="input_details"
              placeholder="Enter PinCode"
              type="text"
              name="pincode"
              {...register("pincode")}
            />
          </div>

          <div>
            <br />
            <label className="form-label">City: </label>
            <input
              className="input_details"
              placeholder="Enter City"
              type="text"
              name="city"
              {...register("city")}
            />
          </div>
        </div>

        <h1 className="other-Details">Other Details</h1>
        <hr className="hr" />
        <br />
        <div className="second_main_div">
          <div>
            <label>Occupation: </label>
            <input
              className="input_details"
              type="text"
              name="occupation"
              placeholder="Enter Occupation"
              {...register("occupation")}
            />
          </div>

          <div>
            <label className="form-label">Religion: </label>
            <select
              className="select_details"
              name="religion"
              {...register("religion")}
            >
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Sikh">Sikh</option>
              <option value="Jain">Jain</option>
              <option value="Buddhist">Buddhist</option>
            </select>
          </div>

          <div>
            <label className="form-label">Marital Status: </label>
            <select
              className="select_details"
              name="maritalStatus"
              {...register("marital")}
            >
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>

          <div>
            <label className="form-label">Blood Group: </label>
            <select
              className="select_details"
              name="bloodGroup"
              {...register("blood")}
            >
              <option value="O">O+</option>
              <option value="O">O-</option>
              <option value="A">A+</option>
              <option value="A">A-</option>
              <option value="B">B+</option>
              <option value="B">B-</option>
              <option value="AB">AB+</option>
              <option value="AB">AB-</option>
            </select>
          </div>

          <div>
            <label className="form-label">Nationality: </label>
            <input
              className="input_details"
              placeholder="Enter Nationality"
              type="text"
              name="nationality"
              {...register("nationality")}
            />
          </div>
        </div>
      </form>
      <div className="second_main_div">
      <button id="button1" type="">
          Cancel
        </button>
        <button className="button2" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormData;
