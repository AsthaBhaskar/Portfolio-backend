export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    // Capture IP and tracking data
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'Unknown';
    
    // Add tracking fields to form data
    const emailData = {
      ...req.body,
      '_tracking_ip': ip,
      '_tracking_browser': req.headers['user-agent'] || 'Unknown',
      '_tracking_time': new Date().toISOString(),
      '_tracking_referer': req.headers['referer'] || 'Direct',
    };
  
    // Forward to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xblawgeo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        return res.status(200).json({ success: true, message: 'Message sent!' });
      } else {
        return res.status(500).json({ success: false, message: 'Failed to send' });
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error: ' + error.message });
    }
  }