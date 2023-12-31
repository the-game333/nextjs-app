// pages/api/utils/sendEmailToTeam.ts
import axios from 'axios';
import NextAuth from "next-auth";


const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_KEY;
const TEAM_EMAIL = 'team@infrahive.io';

const sendEmailToTeam = async (formData: any) => {
  try {
    const sendinblueEndpoint = 'https://api.sendinblue.com/v3/smtp/email';
    const sendinblueData = {
      sender: { email: formData.email },
      to: [{ email: TEAM_EMAIL }],
      subject: `New Contact Form Submission from ${formData.name}`,
      htmlContent: `
        <p>You have received a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Team:</strong> ${formData.team}</p>
        <p><strong>Goals:</strong> ${formData.goals}</p>
        <p><strong>Additional Note:</strong> ${formData.note}</p>
      `
    };

    const response = await axios.post(sendinblueEndpoint, sendinblueData, {
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      }
    });

    console.log('Contact data sent to team successfully:', response.data);
  } catch (error) {
    console.error('Error sending contact data to team:', error);
  }
};

export default sendEmailToTeam;
