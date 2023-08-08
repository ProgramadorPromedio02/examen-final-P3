function SideBar () { 
  const lenguajes = [
    {id:1 , nombre: 'JavaScript' , visto: true},
    {id:2 , nombre: 'Python' , visto: false},
    {id:3 , nombre: 'Java' , visto: false},
    {id:4 , nombre: 'HTML' , visto: true},
    {id:5 , nombre: 'CSS' , visto: true}
  ];
  return (
    <div className="text-center">
      <h3>Para la realización de está página, se uso:</h3>
      <ul>
        {
          lenguajes.map((lenguaje) => (
            <li key={lenguaje.id}>
              {lenguaje.nombre} {lenguaje.visto ? (<span>✔️</span>) : (<span>❌</span>)}
            </li>
          ))
        }
      </ul>
    </div>
  );

};

export default SideBar;