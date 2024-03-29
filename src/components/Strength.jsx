const REMARKS = ['Too Weak!', 'Weak', 'Medium', 'Strong'];
const className = 'w-3 h-8 border-2 border-white ';

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
  if (strength === 1) indicatorColor = 'bg-red-700 border-red-700';
  if (strength === 2) indicatorColor = 'bg-amber-700 border-amber-700';
  if (strength === 3) indicatorColor = 'bg-amber-300 border-amber-300';
  if (strength === 4) indicatorColor = 'bg-green-400 border-green-400';

  return (
    <div className="flex space-x-4 bg-[#191820] sm:text-xl text-lg h-16 sm:px-6 items-center justify-between px-4">
      <p className="text-[#807C92] font-semibold uppercase">Strength</p>
      <div className="flex items-cente space-x-2">
        <div className="uppercase font-bold sm:text-2xl text-xl w-max">
          {REMARKS[strength - 1]}
        </div>
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
    </div>
  );
}
