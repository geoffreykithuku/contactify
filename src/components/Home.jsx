import React, { useEffect, useState } from "react";
import "./home.css";
const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [text, setText] = useState("")
  let url = `https://jsonplaceholder.typicode.com/users?q=${query}`;

  function fetchData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }
  useEffect(() => {
    fetchData();
  }, [text]);
  const display = contacts.map((contact) => {
    return (
      <tr className="tr" key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>{contact.website}</td>
      </tr>
    );
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setText(query)
  }

  return (
    <div className="home">
      <h3>
        Welcome to <span>Contactify</span> Here is a list of our top experts
      </h3>
      <br />
      <br />
      <form onSubmit={handleSubmit} action="">
        <input
          placeholder="Start typing here"
          type="search"
          onChange={handleChange}
          name="query"
          value={query}
        />
        <button type="submit">Search</button>
       
      </form>
      <h3 className="title">Our Experts</h3>
      <table>
        <tr className="header">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <br />

        {display}
      </table>
    </div>
  );
};

export default Home;
