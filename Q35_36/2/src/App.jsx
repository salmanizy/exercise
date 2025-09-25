import { gql, useQuery } from "@apollo/client";

const GET_POKEMON = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      image
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name: "Bulbasaur" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const bulbasaur = data.pokemon;
  
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
        <h1 style={{ textTransform: "capitalize" }}>{bulbasaur.name}</h1>
        <img src={bulbasaur.image} alt={bulbasaur.name} />
      </div>
    </>
  );
}
