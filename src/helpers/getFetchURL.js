export default function getFetchURL(token, config) {
  console.log('getFetchURL config', config);

  if (!config) return `https://opentdb.com/api.php?amount=5&token=${token}`;

  const { type, category, difficulty } = config;

  const url = ['https://opentdb.com/api.php?amount=5'];

  if (category) url.push('&category=', category);
  if (difficulty) url.push('&difficulty=', difficulty);
  if (type) url.push('&type=', type);
  url.push('&token=', token);

  console.log(url.join(''));
  return url.join('');
}
