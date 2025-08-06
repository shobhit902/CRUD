import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/book")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/novel")
      .then((res) => setNovels(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Books</h1>

      <div className="row">
        {books.map((item) => (
          <div className="col-md-4 mb-4" key={item._id}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author: {item.author_name}
                </Card.Subtitle>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Button variant="success">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <h1 className="text-center text-primary mb-4">Novels</h1>
      <div className="row">
        {novels.map((item) => (
          <div className="col-md-4 mb-4" key={item._id}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Author: {item.author_name}
                </Card.Subtitle>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                <Button variant="success">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
