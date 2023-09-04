// // material-ui
// import { styled } from '@mui/material/styles';

// // project imports
// import ContactCard from 'components/contact-us/ContactCard';
// import AppBar from 'ui-component/extended/AppBar';
// import Footer from 'components/landingpage/Footer';

// const HeaderWrapper = styled('div')(({ theme }) => ({
//   textAlign: 'center',
//   [theme.breakpoints.down('md')]: {
//     paddingTop: 0
//   }
// }));

// // ============================|| CONTACT US MAIN ||============================ //

// const ContactUsPage = () => (
//   <HeaderWrapper>
//     <AppBar />
//     <ContactCard />
//     <Footer />
//   </HeaderWrapper>
// );
// ContactUsPage.Layout = 'minimalLayout';
// export default ContactUsPage;

import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import sendThankYouEmail from 'pages/api/utils/sendThankyouEmail';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';
import Loader from 'ui-component/Loader';
import sendEmailToTeam from 'pages/api/utils/sendEmailToTeam';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Snackbar } from '@mui/material';

interface FormData {
  team: string;
  name: string;
  goals: string;
  email: string;
  note: string;
  // industry: string;
  //   customerSize: string;
  //   firstName: string;
  //   lastName: string;
  //   phoneCountryCode: string;
  //   phoneNumber: string;
  //   company: string;
}

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const initialFormData: FormData = {
    team: '',
    name: '',
    goals: '',
    email: '',
    note: ''
    // industry: '',
    // customerSize: '',
    // firstName: '',
    // lastName: '',
    // phoneCountryCode: '',
    // phoneNumber: '',
    // company: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleHeight = () => {
    if (ref.current) {
      ref.current.style.height = '0px';
      const newHeight = ref.current.scrollHeight;
      ref.current.style.height = newHeight + 'px';
      ref.current.style.minHeight = '96px';
    }
  };

  useEffect(() => {
    const el = ref.current;

    el?.addEventListener('keydown', handleHeight);

    return () => {
      el?.removeEventListener('keydown', handleHeight);
    };
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Send thank you email
      await sendThankYouEmail(formData.email);
      // Send contact data to the team
      await sendEmailToTeam(formData);

      setFormData(initialFormData);
      setSubmissionSuccess(true);

      // Show success alert
      setAlertOpen(true);
      setAlertSeverity('success');
      setAlertMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Error sending email:', error);

      // Show error alert
      setAlertOpen(true);
      setAlertSeverity('error');
      setAlertMessage('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#0E0C15]">
      <AppBar background="transparent" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E0C15] p-4">
        <p
          style={{
            height: '30%',
            width: '10%',
            top: '20%',
            left: '10%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(100px)'
          }}
        ></p>
        <p
          style={{
            height: '10%',
            width: '10%',
            top: '50%',
            left: '65%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(80px)'
          }}
        ></p>
        <p
          style={{
            height: '10%',
            width: '10%',
            top: '85%',
            left: '20%',
            transform: 'translateX(50%)',
            position: 'absolute',
            borderRadius: '582px',
            background: 'linear-gradient(180deg, rgba(99, 35, 196, 0.00) 0%, #FE851D 100%)',
            filter: 'blur(120px)'
          }}
        ></p>
        <form className="w-full max-w-2xl p-6 text-gray-900 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* Q:2 */}
          <div className="mb-4">
            <label className="block mb-3 text-sm font-semibold max-w-max" htmlFor="name">
              Name/Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your answer here...."
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-700 bg-transparent border-2 border-gray-100 rounded-lg focus:border-yellow-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-700 bg-transparent border-2 border-gray-100 rounded-lg focus:border-yellow-300 focus:outline-none"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold font-family: ui-monospace word-" htmlFor="team">
              What team are you part of? <span className="text-red-500">*</span>
            </label>
            <select
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-700 bg-transparent border-2 border-gray-100 rounded-lg focus:border-yellow-300 focus:outline-none"
              required
            >
              <option value="">Select an option</option>
              <option value="Individual">Individual</option>
              <option value="Small team">Small team</option>
              <option value="Startup">Startup</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          {/* Q:3 */}
          <div className="mb-4">
            <label className="block mb-2 font-bold " htmlFor="goals">
              Great, What are the goals you’re looking to achieve? <span className="text-red-500">*</span>
            </label>
            <select
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-700 bg-transparent border-2 border-gray-100 rounded-lg focus:border-yellow-300 focus:outline-none"
              required
            >
              <option value="">Select an option</option>
              <option value="Generative AI">Generative AI</option>
              <option value="AI Chatbots">AI Chatbots</option>
              <option value=" Voice Automation">Voice Automation</option>
              <option value="Code Generation">Code Generation</option>
              <option value="LangChain Development">LangChain Development</option>
              <option value="Custom Enterprise">Custom Enterprise</option>
              <option value="AI Development">AI Development</option>
            </select>
          </div>

          {/* Q:4 */}
          {/* <div className="mb-4">
            <label className="block mb-2 font-bold text-white " htmlFor="industry">
              Which industry you specifically serve in?
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full  rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
              required
            >
              <option value="">Select an option</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Tech Development">Tech Development</option>
              <option value="Finance">Finance</option>
              <option value="Business Analytics">Business Analytics</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-white" htmlFor="customerSize">
              What will be end customers size?
            </label>
            <select
              id="customerSize"
              name="customerSize"
              value={formData.customerSize}
              onChange={handleChange}
              className="w-full  rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
              required
            >
              <option value="">Select an option</option>
              <option value="<1000">&lt;1000</option>
              <option value="<100K">&lt;100K</option>
              <option value="<100K">&lt;1M</option>
              <option value="<100K">&lt;10M</option>
              <option value="<100K">&gt;10M</option>
            </select>
          </div> */}
          {/* Q:6 */}
          {/* <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-bold text-white" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full  rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-white" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full  rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
                placeholder="Last Name"
                required
              />
            </div>
          </div> */}

          {/* <div className="mb-4">
            <label className="block mb-2 font-bold text-white" htmlFor="phoneCountryCode">
              Phone Country Code
            </label>
            <div className="flex gap-2">
              <select
                id="phoneCountryCode"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleChange}
                className="w:1/3 rounded-lg  border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring "
                required
              >
                <option value="">Select</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-2/3 flex-grow rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
                placeholder="Phone Number"
                required
                pattern="^[0-9]{10}$"
                title="Please enter a valid phone number"
              />
            </div>
          </div> */}

          {/* <div className="mb-4">
            <label className="block mb-2 font-bold text-white" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full  rounded-lg border bg-[#0E0C15] px-4 py-2 text-white focus:border-green-300 focus:outline-none focus:ring"
              placeholder="Your Company name..."
              required
            />
          </div> */}

          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="company">
              Additional note (optional)
            </label>
            <textarea
              ref={ref}
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full h-24 px-4 py-3 text-gray-700 bg-transparent border-2 border-gray-100 rounded-lg focus:border-yellow-300 focus:outline-none"
              placeholder="Type your answer here..."
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full gap-3 py-2 text-base tracking-widest text-white uppercase transition-all duration-300 ease-in-out bg-yellow-400 rounded-lg hover:bg-yellow-500 hover:gap-5 active:gap-3"
          >
            <span>Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </form>
        {alertOpen && (
          <Snackbar open={alertOpen} autoHideDuration={6000} onClose={() => setAlertOpen(false)}>
            <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{ width: '100%' }}>
              Form submitted successfully!
            </Alert>
          </Snackbar>
        )}
      </div>
      <Footer />
    </div>
  );
}
