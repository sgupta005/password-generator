const REMARKS = ['Too Weak!', 'Weak', 'Medium', 'Strong'];
const className = 'w-4 h-11 border-2 border-black ';

function includesLower(str) {
  return /[a-z]/.test(str);
}
function includesUpper(str) {
  return /[A-Z]/.test(str);
}
function includesNumbers(str) {
  return /[0-9]/.test(str);
}
function includesSymbols(str) {
  return /[!@#$%^&*()\-_+=]/.test(str);
}

export function Strength({ pass }) {
  let strength = Math.ceil(pass.length / 5);

  if (
    includesLower(pass) &&
    includesUpper(pass) &&
    includesNumbers(pass) &&
    includesSymbols(pass)
  ) {
    if (strength > 1 && strength < 4) {
      strength += 1;
    }
  }

  let indicatorColor = '';
  if (strength === 1) indicatorColor = 'bg-red-500 border-red-500';
  if (strength === 2) indicatorColor = 'bg-amber-500 border-amber-500';
  if (strength === 3) indicatorColor = 'bg-amber-300 border-amber-300';
  if (strength === 4) indicatorColor = 'bg-green-400 border-green-400';

  return (
    <div className="flex space-x-4">
      <p>Strength</p>
      <div>{REMARKS[strength - 1]}</div>
      <div className="flex space-x-2">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={
              i + 1 <= strength ? className + indicatorColor : className
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
