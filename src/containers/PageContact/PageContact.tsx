import React, { FC, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "195 High St,Guildford,Surrey,United Kingdom",
  },
  {
    title: "💌 EMAIL",
    desc: "contact@safehouse.com",
  },
  {
    title: "☎ PHONE",
    desc: "000-123-456-7890",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const templateParams = {
    name: '',
    emailaddress: '',
    message: "",
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
   

    setOpen(false);
  };
  const [contactForm, setContactForm] = useState(templateParams)
  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .send('service_noh2h7h', 'template_64ts3rs', contactForm, {
        publicKey: 'qbaHB54JOpzIisD4Q',
      })
      .then(
        () => {
          setOpen(true);
          // alert('SUCCESS!');
          setContactForm(templateParams)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="mb-24 lg:mb-32">

        <div className="container">
          <div className="row">
            <div className="col-sm-3 h1 font-weight-bold mt-5">Customer <br /> Service</div>
            <div className="col-sm-9 mt-4"><img className="img-fluid" style={{ height: "150px", width: "100%" }} src={require('./../../images/contact.png')} alt="" /></div>
          </div>
        </div>
        <br />
        <br />
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}

            </div>
            <div>
              <div className="grid grid-cols-1 gap-6" >
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                    value={contactForm.name}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, "name": e.target.value })

                    }}
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    value={contactForm.emailaddress}
                    onChange={(e) => {
                      setContactForm({ ...contactForm, "emailaddress": e.target.value })

                    }}
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea value={contactForm.message} className="mt-1" rows={6} onChange={(e) => {
                    setContactForm({ ...contactForm, "message": e.target.value })

                  }} />
                </label>
                <div>
                  <ButtonPrimary type="submit" onClick={sendEmail}>Send Message</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Email send SUCCESS!
        </Alert>
      </Snackbar>

    </div>
  );
};

export default PageContact;
