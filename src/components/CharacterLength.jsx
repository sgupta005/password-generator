import { ACTIONS } from '../App';

export function CharacterLength({ state, dispatch }) {
  return (
    <div className="flex">
      <div>
        <p>Character Length</p>
        <input
          type="range"
          min={1}
          max={20}
          value={state.length}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHANGE_LENGTH,
              payload: { length: +e.target.value },
            })
          }
        />
      </div>
      <p>{state.length}</p>
    </div>
  );
}
