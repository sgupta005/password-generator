export function GenerateBtn({ state, setPass }) {
  function generatePassword({
    length,
    includeLower,
    includeUpper,
    includeSymbols,
    includeNumbers,
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

  return <button onClick={() => generatePassword(state)}>Generate</button>;
}
