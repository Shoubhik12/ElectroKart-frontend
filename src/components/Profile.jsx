import { useState } from "react";
import { Link } from "react-router-dom";
import { useUtls } from "./useUtls";

const Profile = () => {
  const profile = {
    name: "Shoubhik Ghosh",
    email: "shoubhikghosh360@gmail.com",
    phone: 8910584697,
  };

  const { cart, list } = useUtls();

  const [addr, setAddr] = useState([
    "Flat No. 204, Green Valley Apartments Lakeview Road, Andheri West, Mumbai, Maharashtra – 400058",
    "12, Park Street, Near City Centre Mall, Kolkata, West Bengal – 700016",
    "B-45, Sunrise Residency, Sector 62, Noida, Uttar Pradesh – 201301",
  ]);

  const [address, setAddress] = useState(addr[0]);
  const [show, setShow] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

 
  const addAddress = () => {
    if (newAddress.trim() === "") return;
    setAddr([...addr, newAddress.trim()]);
    setNewAddress("");
    setAddMode(false);
  };

  const deleteAddress = (index) => {
    setAddr(addr.filter((_, i) => i !== index));
  };

  
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(addr[index]);
  };

  
  const saveEdit = () => {
    if (editValue.trim() === "") return;
    const updated = [...addr];
    updated[editIndex] = editValue.trim();
    setAddr(updated);
    setEditIndex(null);
  };

  return (
    <div className="bg-secondary-subtle min-vh-100">
      
      <header className="bg-success-subtle px-4 py-3">
        <h3 className="text-success d-flex flex-wrap justify-content-between align-items-center">
          <a
            className="link-offset-2 link-success link-underline link-underline-opacity-0"
            href="/"
          >
            ElectroKart
          </a>
          <span>
            <Link
              className="link-success link-offset-2 link-underline link-underline-opacity-0 me-2"
              to="/profile"
            >
              <img
                className="px-2 py-2"
                src="https://img.icons8.com/?size=30&id=7820&format=png"
                alt="profile"
              />
            </Link>
            <Link
              className="link-success link-offset-2 link-underline link-underline-opacity-0 me-2"
              to="/cart"
            >
              <img
                src="https://img.icons8.com/?size=30&id=ii6Lr4KivOiE&format=png&color=737373"
                alt="cart"
              />{" "}
              {cart.length}
            </Link>
            <Link
              className="link-success link-offset-2 link-underline link-underline-opacity-0"
              to="/wishlist"
            >
              <img
                src="https://img.icons8.com/?size=30&id=7697&format=png&color=737373"
                alt="wishlist"
              />{" "}
              {list.length}
            </Link>
          </span>
        </h3>
      </header>

     
      <div className="container py-5">
        <h1 className="display-3 text-center mb-4">Profile</h1>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ul className="list-group rounded-3 shadow">
              <li className="list-group-item">Name: {profile.name}</li>
              <li className="list-group-item text-break">
                Email: {profile.email}
              </li>
              <li className="list-group-item">Phone: {profile.phone}</li>

              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-info"
                    onClick={() => setShow(!show)}
                  >
                    {show ? "Hide Addresses" : "Show Addresses"}
                  </button>
                  <button
                    className="btn btn-warning px-4"
                    onClick={() => setAddMode(!addMode)}
                  >
                    {addMode ? "Cancel" : "Add"}
                  </button>
                </div>
              </li>

              
              {show && (
                <li className="list-group-item">
                  <div className="card">
                    {addr.map((ad, i) => (
                      <div
                        key={i}
                        className="card-header  px-2 py-2"
                      >
                        {editIndex === i ? (
                          <div className="w-100">
                            <input
                              type="text"
                              className="form-control my-2"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                            />
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-primary"
                                onClick={saveEdit}
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-dark"
                                onClick={() => setEditIndex(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <span className="">{ad}</span>
                            <div className="py-2">
                              <button
                                className="btn btn-success mx-2"
                                onClick={() => setAddress(ad)}
                              >
                                Select
                              </button>
                              <button
                                className="btn btn-secondary mx-2"
                                onClick={() => startEdit(i)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteAddress(i)}
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </li>
              )}

              {addMode && (
                <li className="list-group-item">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new address"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                  <button className="btn btn-primary my-2" onClick={addAddress}>
                    Save Address
                  </button>
                </li>
              )}

             
              <li className="list-group-item text-break">
                <strong>Selected Address:</strong> {address || "None Selected"}
              </li>

              
              <li className="list-group-item">
                <Link
                  className="d-grid gap-2 col-6 mx-auto btn btn-warning"
                  to="/placed"
                >
                  Check Out
                </Link>
                <Link
                  className="d-grid gap-2 col-6 mx-auto my-3 btn btn-danger"
                  to="/history"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
