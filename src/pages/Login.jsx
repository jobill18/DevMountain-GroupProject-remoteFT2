import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData);

    if (res.data.success) {
      navigate("/user");
    }
  };

  return (
    <>
      <Card className="text-center">
        <Card.Img
          src="../images/world_map.jpg"
          alt="Card image"
          className="opacity-50"
        />
        <Card.ImgOverlay>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title className="bg-success-subtle p-2">
                  Log In
                </Card.Title>
                <Card.Text className="p-2">
                  <LoginForm onLogin={handleLogin} />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="../images/world_map_pins.png"
                className="opacity-75"
              />
            </Card>
          </CardGroup>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
