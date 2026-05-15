import { useEffect, useState } from 'react';

export function useTypingEffect(
  words: readonly string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
): string {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? '';

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, charIndex + 1);
          setDisplayText(next);
          setCharIndex((i) => i + 1);

          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const next = currentWord.slice(0, charIndex - 1);
          setDisplayText(next);
          setCharIndex((i) => i - 1);

          if (next === '') {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
            setCharIndex(0);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}
