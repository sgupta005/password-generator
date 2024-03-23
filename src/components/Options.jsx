import { ACTIONS } from '../App';

export function Options({ state, dispatch }) {
  const { includeUpper, includeLower, includeNumbers, includeSymbols } = state;
  return (
    <div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_UPPER })}>
        <input type="checkbox" checked={includeUpper} />
        <label>Include Uppercase Letters</label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_LOWER })}>
        <input type="checkbox" checked={includeLower} />
        <label>Include Lowercase Letters</label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_NUMBERS })}>
        <input type="checkbox" checked={includeNumbers} />
        <label>Include Numbers</label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_SYMBOLS })}>
        <input type="checkbox" checked={includeSymbols} />
        <label>Include Symbols</label>
        <br />
      </div>
    </div>
  );
}
