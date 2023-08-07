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

import React, { useState, ChangeEvent, FormEvent } from 'react';
import AppBar from 'ui-component/extended/AppBar';
import Footer from 'components/landingpage/Footer';

interface FormData {
  team: string;
  name: string;
  goals: string;
  industry: string;
  customerSize: string;
  firstName: string;
  lastName: string;
  phoneCountryCode: string;
  phoneNumber: string;
  email: string;
  company: string;
}

export default function ContactUsPage() {
  const initialFormData: FormData = {
    team: '',
    name: '',
    goals: '',
    industry: '',
    customerSize: '',
    firstName: '',
    lastName: '',
    phoneCountryCode: '',
    phoneNumber: '',
    email: '',
    company: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };
  return (
    <div className="min-h-screen bg-[#0E0C15]">
      <AppBar background={'transparent'} />
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E0C15] p-4">
        <form className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-family: ui-monospace word- mb-2 block font-bold text-black" htmlFor="team">
              What team are you part of?
            </label>
            <select
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
              required
            >
              <option value="">Select an option</option>
              <option value="Individual">Individual</option>
              <option value="Small team">Small team</option>
              <option value="Startup">Startup</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          {/* Q:2 */}
          <div className="mb-4">
            <label className="mb-2 block font-bold text-black " htmlFor="name">
              Hi 👋 And how about your Individual name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your answer here...."
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
              required
            />
          </div>
          {/* Q:3 */}
          <div className="mb-4">
            <label className="mb-2 block font-bold text-black " htmlFor="goals">
              Great, What are the goals you’re looking to achieve?
            </label>
            <select
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
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
          <div className="mb-4">
            <label className="mb-2 block font-bold text-black " htmlFor="industry">
              Which industry you specifically serve in?
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
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
          {/* Q:5 */}
          <div className="mb-4">
            <label className="mb-2 block font-bold text-black" htmlFor="customerSize">
              What will be end customers size?
            </label>
            <select
              id="customerSize"
              name="customerSize"
              value={formData.customerSize}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
              required
            >
              <option value="">Select an option</option>
              <option value="<1000">&lt;1000</option>
              <option value="<100K">&lt;100K</option>
              <option value="<100K">&lt;1M</option>
              <option value="<100K">&lt;10M</option>
              <option value="<100K">&gt;10M</option>
            </select>
          </div>
          {/* Q:6 */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-bold text-black" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block font-bold text-black" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-black" htmlFor="phoneCountryCode">
              Phone Country Code
            </label>
            <div className="flex">
              <select
                id="phoneCountryCode"
                name="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={handleChange}
                className="w-1/3 rounded-l-lg border bg-gray-100 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
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
                className="w-2/3 rounded-r-lg border bg-gray-100 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Phone Number"
                required
                pattern="^[0-9]{10}$"
                title="Please enter a valid phone number"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-black" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-black" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:border-green-300 focus:outline-none focus:ring"
              placeholder="Your Company name..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-green-500 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
