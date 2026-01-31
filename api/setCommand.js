let currentCommand = 'CHECK';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { cmd } = req.body;
    currentCommand = cmd;
    console.log(`Perintah diterima: ${cmd}`);
    res.status(200).json({ success: true, command: currentCommand });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
