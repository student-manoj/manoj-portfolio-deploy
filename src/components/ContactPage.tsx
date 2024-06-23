import { motion } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";

type FormRef = React.MutableRefObject<HTMLFormElement | null>;

// init("YOUR_USER_ID");

const ContactPage = () => {
  const [fName, setfName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);

  const gatdata = () => {
    const validfName = z.string().min(3);

    const validEmail = z.string().email().endsWith("gmail.com");
    if (validfName.safeParse(fName).success) {
      toast.success(`Fist Name is : ${fName}`);
    } else {
      toast.error("Enter valid Fist Name");
    }

    if (validEmail.safeParse(email).success) {
      toast.success(`Name is : ${email}`);
    } else {
      toast.error("Enter valid Email");
    }
    setEmail("");
    setfName("");
  };

  let cols: number = 30;
  let rows: number = 3;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ytlkdx7", "template_7vj6ltv", form.current, {
          publicKey: "cpYgjdwqPTj6sL8is",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -60 },
          hidden: { opacity: 0, y: 0 },
        }}
        className="containere"
      >
        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="text-5xl font-semibold tracking-[0.20em]">
            Contact
          </div>
          <div className="mt-4 flex items-center justify-center text-yellow-700">
            <hr className="w-72 text-yellow-700" />
          </div>
          <div className="py-5 text-center font-medium leading-7 text-black/60 dark:text-white/60 lg:w-[550px]">
            Thanks for visiting the portfolio. Here the work of web site design
            and website development is done. And with figma and PhotoShop UI
            designing is also done.
          </div>
        </div>
        <div className="mt-14 grid gap-16 lg:grid-cols-2 ">
          <div className="h-[500px] lg:w-[500px] xl:w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.367443269133!2d88.77037357335726!3d22.714580127755305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8aca130e5d873%3A0x253272649870109f!2sArbelia%20Post%20Office!5e0!3m2!1sen!2sin!4v1700141906689!5m2!1sen!2sin"
              title="google maps"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>

          <div className="w-full lg:mt-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col items-center gap-5 text-center text-black ">
                <input
                  required
                  name="form_name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 bg-black/10 p-3 text-base text-gray-900 focus:outline-none dark:bg-black dark:text-white"
                  onChange={(e) => setfName(e.target.value)}
                />
                <input
                  name="form_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 bg-black/10 p-3 text-base text-gray-900 focus:outline-none dark:bg-black dark:text-white"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="message"
                  cols={cols}
                  rows={rows}
                  placeholder="Write your message "
                  className="h-52 w-full rounded-md border border-gray-300 bg-black/10 p-3 text-base text-gray-900 focus:outline-none dark:bg-black dark:text-white lg:h-72"
                ></textarea>

                <button
                  type="submit"
                  onClick={gatdata}
                  className="-ring-offset-4 group relative flex items-center overflow-hidden rounded-lg px-8 py-2 font-medium text-black shadow-lg shadow-yellow-700 ring ring-yellow-700 dark:text-white"
                >
                  <span className="absolute left-0 h-0 w-full bg-gradient-to-b from-yellow-600 to-yellow-800 transition-all duration-300 ease-in group-hover:top-0 group-hover:h-full" />
                  <span className="relative">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ContactPage;
