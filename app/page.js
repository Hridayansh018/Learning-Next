"use client"
import ToDo from "@/components/ToDo";
import { useState } from "react";


export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({ ...form, [name]: value }));
    console.log(formData)
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">

        <input
          value={formData.title}
          onChange={onChangeHandler}
          placeholder="Enter Title"
          type="text"
          name="title"
          className="px-3 py-2 border-2 w-full"
        />

        <textarea 
          value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Description" className="px-3 py-2 border-2 w-full" >
        </textarea>

        <button type="submit" className="w-28 h-10 rounded-sm bg-orange-400 hover:bg-orange-500 text-white font-semibold">
          ADD Todo
        </button>

      </form>


      <div className="relative overflow-x-auto mt-10 mx-auto w-[90%] lg:w-[60%]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <ToDo />
          </tbody>
        </table>
      </div>


    </>
  );
}
