import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function App() {
  const { data: bulbasaur, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/1",
    fetcher
  );

  if (error)
    return (
      <div className="App">
        <h1>Terjadi Kesalahan!</h1>
      </div>
    );
  if (isLoading)
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <style>
        {`
          .App {
            font-family: sans-serif;
            text-align: center;
          }
        `}
      </style>
      <div className="App">
        <h1>Halo, Selamat Datang di Jayjay API</h1>
        <h3>Kali ini kita akan menampilkan Bulbasaur</h3>
        <hr />
        <h1 style={{ textTransform: "capitalize" }}>{bulbasaur?.name}</h1>
        <img
          src={bulbasaur?.sprites?.other["official-artwork"].front_default}
          alt={bulbasaur?.name}
        />
      </div>
    </>
  );
}
