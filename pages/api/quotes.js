import reviews from './data';

/*
export default (req, res) => {
  res.status(200).json({ reviews });
};
*/

export default function handler(req, res) {
  res.status(200).json(reviews);
}
