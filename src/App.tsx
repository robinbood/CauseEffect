import { people } from "./data/mockdata";
import "./App.css";
import { useState } from "react";

interface Person {
  name: string;
  street: string;
  city: string;
  state: string;
  country: string;
  telephone: string;
  birthday: string;
}
const App = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const preview = () => {
    return (
      <div className="left">
        <ul>
          {people.map((p) => (
            <u><h3 key={p.name} onClick={() => setPerson(p)}>{p.name}</h3></u>
          ))}
        </ul>
      </div>
    );
  };

  const renderDetails = () => {
    if (!person) return null;
    return (
      <div className="right">
        <h1>{person.name}</h1>
        <h3>{person.birthday}</h3>
        <h3>{person.city}</h3>
        <h3>{person.country}</h3>
        <h3>{person.state}</h3>
        <h3>{person.street}</h3>
        <h3>{person.telephone}</h3>
      </div>
    );
  };

  return (
    <>
      <div >{preview()}</div>
      <div >{renderDetails()}</div>
    </>
  )
};
export default App;
