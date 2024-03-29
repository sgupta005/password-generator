export function GenerateBtn({ state, setPass }) {
  function generatePassword({
    length,
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols,
  }) {
    if (!includeLower && !includeUpper && !includeSymbols && !includeNumbers)
      return;

    let characters = '';
    if (includeLower) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSymbols) characters += '!@#$%^&*()-_+=';

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPass(password);
  }

  return (
    <button
      onClick={() => generatePassword(state)}
      className="bg-[#A3FFAE] h-16 w-full text-black text-xl uppercase font-semibold hover:bg-inherit hover:border-2 border-[#A3FFAE] hover:text-[#A3FFAE] mt-8"
    >
      Generate
    </button>
  );
}
