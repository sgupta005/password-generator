function App() {
  return (
    <div>
      <Heading />
      <Display />
      <Generator>
        <CharacterLength />
        <Options />
        <Strength />
        <GenerateBtn />
      </Generator>
    </div>
  );
}

function Heading() {
  return <h1>Password Generator</h1>;
}

function Display() {
  return <input disabled type="text" placeholder="P4$5W0rD!" />;
}

// eslint-disable-next-line react/prop-types
function Generator({ children }) {
  return <div>{children}</div>;
}

function CharacterLength() {
  return (
    <div className="flex">
      <div>
        <p>Character Length</p>
        <input type="range" min={1} max={20} />
      </div>
      <p>10</p>
    </div>
  );
}

function Options() {
  return (
    <div>
      <input type="checkbox" />
      <label>Include Uppercase Letters</label>
      <br />
      <input type="checkbox" />
      <label>Include Lowercase Letters</label>
      <br />
      <input type="checkbox" />
      <label>Include Numbers</label>
      <br />
      <input type="checkbox" />
      <label>Include Symbols</label>
      <br />
    </div>
  );
}

function Strength() {
  return (
    <div>
      <p>Strength</p>
    </div>
  );
}

function GenerateBtn() {
  return <button>Generate</button>;
}

export default App;
App;
