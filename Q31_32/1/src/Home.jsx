export default function Home() {
  return (
    <>
      <h1>Halaman Home - Daftar Todo</h1>
      <p style={{marginTop:'200px'}}>Untuk melihat melihat root selain home dan create Todo, bisa menggunakan input manual di url karna saya menggunakan id</p>
      <p>Contoh:</p>
      <p>http://localhost:5173/edit/1</p>
      <p>http://localhost:5173/detail/1</p>
      <p>/1 di belakang url adalah contoh id nya</p>
    </>
  );
}