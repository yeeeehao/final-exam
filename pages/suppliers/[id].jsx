import Head from "next/head";
import Link from "next/link";

export default function Supplier({ supplier }) {
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
          border-radius: 5px;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }

        h1 {
          text-align: center;
          font-size: 40px;
          color: #1565c0;
          margin: 0;
        }

        .backbutton {
          font-size: 20px;
          font-weight: bold;
          color: #1565c0;
          margin-left: 22.5%;
          text-decoration: none;
        }

        p {
          font-size: 25px;
          margin: 1rem;
        }
      `}</style>
      <Head>
        <title>{supplier.supplier_name}</title>
      </Head>
      <a href="/suppliers" className="backbutton">
        Back
      </a>
      <form>
        <h1>{supplier.supplier_name}</h1>
        <p>Address: {supplier.address}</p>
        <p>Phone Number: {supplier.phone_number}</p>
      </form>
    </>
  );
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await fetch(
    `http://localhost:3000/api/suppliers/information/${params.id}`
  );
  const supplier = await res.json();
  console.debug("supplier 1", supplier);
  return { props: { supplier } };
}