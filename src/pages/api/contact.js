function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    const newMessage = {
      email,
      name,
      message,
    };

    // TODO - store in db
    console.log(newMessage);

    res.status(201).json({ message: 'Success' });
  }
}

export default handler;
