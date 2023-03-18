import Head from "next/head";
import Link from "next/link";
import axios from "axios";

export default function Home({ suppliers }) {
  function deleteSupplier(id) {
    fetch(`/api/suppliers/information/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Deleting " + id)
        window.location.reload(false);
      });
  }

  return (
    <>
      <style jsx>{`
        body {
          background-color: #e3f2fd;
        }

        h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1%;
          margin-bottom: 2%;
          color: #1565c0;
        }

        table {
          border-collapse: separate;
          border-spacing: 0 8px;
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
        }

        th {
          background-color: #1565c0;
          color: #fff;
          padding: 12px;
          text-transform: uppercase;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }

        td {
          border: none;
          padding: 12px;
        }

        tbody tr:nth-child(even) {
          background-color: #bbdefb;
        }

        tbody tr:hover {
          background-color: #90caf9;
        }

        .delete-button {
          background-color: #90caf9;
          color: #fff;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.2s ease-in-out;
        }

        .delete-button:hover {
          background-color: #1565c0;
          border-radius: 5px;
        }

        p {
          margin-left: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>

      <Head>
        <title>Suppliers</title>
      </Head>
      <h1>Suppliers</h1>
      <p>
        <Link
          href="/suppliers/add"
          style={{
            backgroundColor: "#1565c0",
            color: "#fff",
            padding: "8px 16px",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "all 0.2s ease-in-out",
            marginTop: "2rem",
            marginLeft: "22%",
          }}
          hover={{}}
        >
          +New Supplier
        </Link>
      </p>

      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => {
            return (
              <tr key={supplier._id}>
                <td>
                  <Link
                    href={`/suppliers/${supplier._id}`}
                    style={{
                      color: "#1565c0",
                      textDecoration: "none",
                      borderBottom: "1px solid #1565c0",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {supplier.supplier_name}
                  </Link>
                </td>
                <td>{supplier.address}</td>
                <td>{supplier.phone_number}</td>
                <td>
                  {
                    <>
                      <Link
                        href={`/suppliers/update/${supplier._id}`}
                        style={{
                          color: "#1565c0",
                          textDecoration: "none",
                          borderBottom: "1px solid #1565c0",
                          transition: "all 0.2s ease-in-out",
                        }}
                      >
                        Update
                      </Link>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        onClick={() => deleteSupplier(supplier._id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/api/suppliers/information/"
  );
  const suppliers = response.data;
  // console.debug('supplier 1', suppliers)
  return { props: { suppliers } };
}
