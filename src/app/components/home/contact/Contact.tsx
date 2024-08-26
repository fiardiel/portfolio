"use client";

import GithubIcon from "@/components/icons/GithubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import Reveal from "@/components/utils/Reveal";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const [email, setEmail] = React.useState("");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedinIcon />,
      href: "https://www.linkedin.com/in/rafiardiel",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/fiardiel",
    },
    {
      name: "Whatsapp",
      icon: <WhatsappIcon />,
      href: "https://wa.me/+6281943413505",
    },
  ];

  return (
    <section id="contact" className={className}>
      <Reveal>
        <div className="flex flex-col md:grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <Chip
              color="default"
              size="lg"
              variant="bordered"
              radius="md"
              className="bg-black"
            >
              Contact
            </Chip>
            <p className="text-4xl md:text-5xl font-semibold mt-5 z-10">
              <span className="z-20">Need a hand on your</span>{" "}
              <span className="font-medium text-primary">project?</span>{" "}
              <span className="underline underline-offset-4 decoration-primary">
                Just leave a message.
              </span>
            </p>
            <Button
              size="lg"
              color="primary"
              className="py-1.5 h-auto self-start mt-5"
            >
              <div className="flex gap-4 -ml-2">
                <div className="p-2 bg-primary-500 rounded-xl my-0.5">
                  {" "}
                  <CiMail size={20} />{" "}
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-neutral-50">Mail me via Gmail at</p>
                  <p className="-mt-2 text-primary-700">rafivct@gmail.com</p>
                </div>
              </div>
            </Button>
            <p className="mt-5">or reach me through social media</p>
            <div className="flex mt-2 gap-4">
              {socialLinks.map((item, index) => (
                <Tooltip key={index} content={item.name}>
                  <Link
                    href={item.href}
                    className="h-[30px] w-[30px] transition hover:-translate-y-1 hover:scale-105"
                  >
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
          </div>
          <Card className="p-5 border bg-neutral-950/50 backdrop-blur-lg border-neutral-800/70">
            <CardHeader>
              <p className="text-xl"> Send me a message </p>
            </CardHeader>
            <CardBody className="gap-4">
              <Input label="Name" variant="bordered"/>
              <Input
                variant="bordered"
                label="Email"
                type="email"
                value={email}
                onValueChange={setEmail}
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "default"}
                errorMessage="please enter a valid email"
              />
              <Input variant="bordered" label="Subject" />
              <Textarea
                label="Tell us about your project"
                required
                labelPlacement="outside"
                variant="bordered"
              />
              <Button
                color="primary"
                radius="md"
                endContent={<FaPaperPlane />}
                className="flex mt-4 gap-3 self-start"
              >
                Send
              </Button>
            </CardBody>
          </Card>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
