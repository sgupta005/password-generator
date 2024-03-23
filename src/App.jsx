import { useReducer } from 'react';
import { CharacterLength } from './components/CharacterLength';
import { Options } from './components/Options';
import { Heading } from './components/Heading';
import { Display } from './components/Display';
import { Generator } from './components/Generator';
import { Strength } from './components/Strength';
import { GenerateBtn } from './components/GenerateBtn';

export const ACTIONS = {
  CHANGE_LENGTH: 'change-length',
  TOGGLE_UPPER: 'toggle-uppercase',
  TOGGLE_LOWER: 'toggle-lowercase',
  TOGGLE_NUMBERS: 'toggle-numbers',
  TOGGLE_SYMBOLS: 'toggle-symbols',
};

const initialState = {
  length: 10,
  includeUpper: false,
  includeLower: false,
  includeNumbers: false,
  includeSymbols: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_LENGTH:
      return { ...state, length: action.payload.length };
    case ACTIONS.TOGGLE_UPPER:
      return { ...state, includeUpper: !state.includeUpper };
    case ACTIONS.TOGGLE_LOWER:
      return { ...state, includeLower: !state.includeLower };
    case ACTIONS.TOGGLE_NUMBERS:
      return { ...state, includeNumbers: !state.includeNumbers };
    case ACTIONS.TOGGLE_SYMBOLS:
      return { ...state, includeSymbols: !state.includeSymbols };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Heading />
      <Display />
      <Generator>
        <CharacterLength state={state} dispatch={dispatch} />
        <Options state={state} dispatch={dispatch} />
        <Strength />
        <GenerateBtn />
      </Generator>
    </div>
  );
}

export default App;
App;
