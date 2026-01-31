let currentCommand = 'CHECK';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ command: currentCommand });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
