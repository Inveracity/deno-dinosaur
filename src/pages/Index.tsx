import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dinos } from "dinosaurs";

const Index = () => {
  const [dinos, setDinos] = useState<Dinos[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/`)
      .then(async (res) => await res.json())
      .then((json) => setDinos(json));
  }, []);

  return (
    <div>
      <h1>Welcome to the Dinosaur app</h1>
      <p>
        Click on a dinosaur below to learn more.
      </p>
      <div>
        {dinos.map((dino) => {
          return (
            <div>
              <Link to={`/${dino.name.toLowerCase()}`}>{dino.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
