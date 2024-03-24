import { ACTIONS } from '../App';

export function CharacterLength({ state, dispatch }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <p className="text-2xl">Character Length</p>
        <p className="text-3xl font-bold text-[#A3FFAE]">{state.length}</p>
      </div>

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
        className="w-full accent-[#A3FFAE]"
      />
    </div>
  );
}
