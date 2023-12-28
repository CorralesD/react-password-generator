const shuffle = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const getRandomCharacter = (text) => {
  return text[Math.floor(Math.random() * text.length)];
};

export const generatePassword = (formData) => {
  let result = '';
  let charToskip = 1;
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS = '01234567890';
  const CHARACTERS = '!@#$%^&*()_-+=[]{}|;:\'",.<>?/\\';
  let alphabet = LOWERCASE;
  result += getRandomCharacter(LOWERCASE);

  if (formData.uppercase) {
    alphabet += UPPERCASE;
    result += getRandomCharacter(UPPERCASE);
    charToskip++;
  }
  if (formData.number) {
    alphabet += NUMBERS;
    result += getRandomCharacter(NUMBERS);
    charToskip++;
  }
  if (formData.character) {
    alphabet += CHARACTERS;
    result += getRandomCharacter(CHARACTERS);
    charToskip++;
  }

  for (let i = charToskip; i < Number(formData.size); i++) {
    result += getRandomCharacter(alphabet);
  }

  return shuffle(result).join('');
};
