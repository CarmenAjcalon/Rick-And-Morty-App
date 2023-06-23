import { useState, useEffect } from "react";
import Characters from "../components/Characters";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import "../styles/modulos.css";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const initialURL = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url = "https://rickandmortyapi.com/api/character") => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCharacters(initialURL);
  }, []);

  const onNext = () => {
    getCharacters(info.next);
  };

  const onPrev = () => {
    getCharacters(info.prev);
  };

  if (isLoading) {
    return (
      <div className="contenedor-modulo">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="contenedor-modulo">
        <div className="brand">
          <h1>Personajes</h1>
        </div>
        <Pagination
          next={info.next}
          prev={info.prev}
          onNext={onNext}
          onPrev={onPrev}
        />
        <Characters characters={characters} />
        <Pagination
          next={info.next}
          prev={info.prev}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </>
  );
};

export const Locations = () => {
  return (
    <>
      <Navbar />
      <h1>Locations</h1>
    </>
  );
};

export const Episodes = () => {
  return (
    <>
      <Navbar />
      <h1>Episodes</h1>
    </>
  );
};
