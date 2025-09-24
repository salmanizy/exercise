import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function App() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Masukkan username"
              />
              <Form.Control.Feedback type="invalid">
                Username harus diisi.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Masukkan password"
              />
              <Form.Control.Feedback type="invalid">
                Password harus diisi.
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Masuk
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;