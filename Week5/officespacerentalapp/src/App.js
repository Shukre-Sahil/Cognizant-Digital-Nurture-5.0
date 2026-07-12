import './App.css';

function App() {

  const offices = [
    {
      Name: "Sky Tower",
      Rent: 55000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      Name: "Business Hub",
      Rent: 48000,
      Address: "Pune",
      Image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (

        <div className="office" key={index}>

          <img
            src={office.Image}
            alt={office.Name}
            width="300"
            height="200"
          />

          <h2>{office.Name}</h2>

          <h3
            style={{
              color: office.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.Rent}
          </h3>

          <p>Address: {office.Address}</p>

        </div>

      ))}

    </div>
  );
}

export default App;