/*
Update page
It populates the supplier data into the form.
*/
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");

  useEffect(() => {
    reset(supplier);
  }, []);

  const updateSupplier = async (data) => {
    const response = await fetch(`/api/suppliers/information/${supplier._id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // serialisation
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const result = await response.json(); // deserialise
    if (result.error) {
      alert("Error: " + result.error);
    } else {
      alert("Supplier updated");
      window.location.href = "/suppliers";
    }
    console.log(result);
    setData(JSON.stringify(data));
  };

  console.log("supplier 2", supplier);
  if (!supplier)
    return (
      <div>
        <p>Supplier not found</p>
        <Link href="/suppliers">Back</Link>
      </div>
    );

  return (
    <>
      <Head>
        <title>Update {supplier.supplier_name}</title>
      </Head>

      <div>
        <style jsx>{`
          body {
            background-color: #e3f2fd;
          }

          form {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            color: #333;
            font-family: Arial, sans-serif;
            font-size: 16px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }

          h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 4%;
            margin-bottom: 2%;
            color: #1565c0;
          }

          label {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            font-weight: bold;
            text-align: left;
          }

          input {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: none;
            border-radius: 0.5rem;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
          }

          input[type="submit"] {
            background-color: #1565c0;
            color: #fff;
            border: none;
            border-radius: 0.5rem;
            padding: 1rem 1rem;
            margin-top: 1rem;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          }

          input[type="submit"]:hover {
            background-color: #fff;
            color: #1565c0;
          }
        `}</style>

        <Link
          href="/suppliers"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#1565c0",
            marginLeft: "22.5%",
            textDecoration: "none",
          }}
        >
          Back
        </Link>
        <form onSubmit={handleSubmit(updateSupplier)}>
          <h1>Update Supplier</h1>
          <label htmlFor="supplier_name">Supplier Name</label>
          <br />
          <input
            id="supplier_name"
            {...register("supplier_name", { required: true })}
            placeholder="Supplier Name"
          />
          <br />

          <label htmlFor="address">Address</label>
          <br />
          <input
            id="address"
            {...register("address", { required: true })}
            placeholder="Address"
          />
          <br />

          <label htmlFor="phone_number">Phone Number</label>
          <br />
          <input
            id="phone_number"
            {...register("phone_number", { required: true })}
            placeholder="Phone Number"
          />
          <br />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await axios.get(
    `https://final-exam-6238023.vercel.app/api/suppliers/information/${params.id}`
  );
  const supplier = res.data;
  console.debug("supplier 1", supplier);
  return { props: { supplier } };
}
