import { ACTIONS } from '../App';

export function Options({ state, dispatch }) {
  const { includeUpper, includeLower, includeNumbers, includeSymbols } = state;
  return (
    <div className="space-y-4 mt-6 mb-8">
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_UPPER })}>
        <input
          type="checkbox"
          checked={includeUpper}
          className="accent-[#A3FFAE] h-[20px] w-[20px]"
        />
        <label className="text-xl pl-4 tracking-wider font-semibold">
          Include Uppercase Letters
        </label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_LOWER })}>
        <input
          type="checkbox"
          checked={includeLower}
          className="accent-[#A3FFAE] h-[20px] w-[20px] "
        />
        <label className="text-xl pl-4 tracking-wider font-semibold">
          Include Lowercase Letters
        </label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_NUMBERS })}>
        <input
          type="checkbox"
          checked={includeNumbers}
          className="accent-[#A3FFAE] h-[20px] w-[20px]"
        />
        <label className="text-xl pl-4 tracking-wider font-semibold">
          Include Numbers
        </label>
        <br />
      </div>
      <div onClick={() => dispatch({ type: ACTIONS.TOGGLE_SYMBOLS })}>
        <input
          type="checkbox"
          checked={includeSymbols}
          className="accent-[#A3FFAE] h-[20px] w-[20px]"
        />
        <label className="text-xl pl-4 tracking-wider font-semibold">
          Include Symbols
        </label>
        <br />
      </div>
    </div>
  );
}
