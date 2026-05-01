export default function Profs() {
  const profs = [
    { name: "Ali", matiere: "Math" },
    { name: "Sara", matiere: "Physique" },
    { name: "Yassine", matiere: "Informatique" }
  ]

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>👨‍🏫 Professeurs</h1>

      {profs.map((p, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 8
        }}>
          <h3>{p.name}</h3>
          <p>Matière : {p.matiere}</p>

          <button
            onClick={() => alert("Réservation confirmée")}
            style={{
              padding: 8,
              background: "black",
              color: "white",
              border: "none",
              borderRadius: 5
            }}
          >
            Réserver
          </button>
        </div>
      ))}
    </div>
  )
}