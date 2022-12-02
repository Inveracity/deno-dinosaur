import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dinos } from "dinosaurs";

const Dinosaur = () => {
  const { dinosaur } = useParams();
  const [dino, setDino] = useState<Dinos>({name: "", description: ""});
  useEffect(() => {
    fetch(`http://localhost:8000/api/${dinosaur}`)
      .then(async (res) => await res.json())
      .then((json) => setDino(json));
  }, []);

  return (
    <div>
      <h1>{dino.name}</h1>
      <p>
        {dino.description}
      </p>
      <Link to="/">See all</Link>
    </div>
  );
};

export default Dinosaur;