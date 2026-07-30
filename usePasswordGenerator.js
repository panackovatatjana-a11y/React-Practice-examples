import { useState, useCallback } from "react";

export function usePasswordGenerator() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("Weak");

  // Calculate password strength
  const calculateStrength = useCallback((len, num, char) => {
    let score = 0;

    if (len >= 12) score++;
    if (len >= 16) score++;
    if (num) score++;
    if (char) score++;

    if (score <= 1) setStrength("Weak");
    else if (score === 2) setStrength("Medium");
    else setStrength("Strong");
  }, []);

  // Main password generator logic
  const passwordGenerator = useCallback(() => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    if (!numberAllowed && !characterAllowed) {
      setError("Please select at least one character type.");
      setPassword("");
      return;
    }

    setError("");

    let selectedSets = [lower, upper];
    let requiredChars = [];

    if (numberAllowed) {
      selectedSets.push(numbers);
      requiredChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (characterAllowed) {
      selectedSets.push(symbols);
      requiredChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    const pool = selectedSets.join("");

    if (length < requiredChars.length || length < 6 || length > 100) {
      setError("Password length must be between 6 and 100.");
      setPassword("");
      return;
    }

    let newPass = [...requiredChars];

    for (let i = requiredChars.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      newPass.push(pool[randomIndex]);
    }

    newPass = newPass.sort(() => Math.random() - 0.5);

    const finalPass = newPass.join("");
    setPassword(finalPass);

    calculateStrength(length, numberAllowed, characterAllowed);
  }, [length, numberAllowed, characterAllowed, calculateStrength]);

  return {
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    characterAllowed,
    setCharacterAllowed,
    password,
    error,
    strength,
    passwordGenerator,
  };
}
