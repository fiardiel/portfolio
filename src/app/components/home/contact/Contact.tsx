'use client'

import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import Reveal from '@/components/utils/Reveal';
import { Button, Card, CardBody, CardHeader, Chip, Input, Textarea, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { CiMail } from 'react-icons/ci';
import { FaPaperPlane } from 'react-icons/fa';

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const [email, setEmail] = React.useState('')
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const socialLinks = [
    { name: "LinkedIn", icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/rafiardiel" },
    { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/fiardiel" },
  ]

  return (
    <section id='contact' className={className}>
      <Reveal>
        <div className='flex flex-col md:grid grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <Chip color='default' variant='bordered' radius='md' className=''>
              Contact
            </Chip>
            <p className='text-4xl md:text-5xl font-semibold mt-5 z-10'>
              <span className='z-20'>Need a hand about your</span> <span className='font-medium text-primary'>project?</span> <span className='bg-primary-100/70 z-10'>Let's chat!</span>
            </p>
            <div className='flex mt-6 gap-5'>
              {socialLinks.map((item, index) => (
                <Tooltip key={index} content={item.name}>
                  <Link href={item.href} className='h-[30px] w-[30px]'>
                    {item.icon}
                  </Link>
                </Tooltip>
              ))}
            </div>
            <Button size='lg' variant='flat' color='primary' className='py-1.5 h-auto self-start mt-5'>
              <div className='flex gap-4 -ml-2'>
                <div className='p-2 bg-primary-500/20 rounded-xl my-0.5'> <CiMail size={20}/> </div>
                <div className='flex flex-col items-start'>
                  <p className='text-neutral-50'>Mail me via Gmail at</p>
                  <p className='-mt-2'>rafivct@gmail.com</p>
                </div>
              </div>
            </Button>
          </div>
          <Card className='p-5 border bg-neutral-950/50 backdrop-blur-lg border-neutral-800/70'>
            <CardHeader>
              <p className='text-xl'> Send me a message </p>
            </CardHeader>
            <CardBody className='gap-4'>
              <Input label='Name' isDisabled />
              <Input label='Email' isDisabled type='email' value={email} onValueChange={setEmail} isInvalid={isInvalid} color={isInvalid ? 'danger' : "default"} errorMessage='please enter a valid email' />
              <Input label='Subject' isDisabled />
              <Textarea isDisabled label='Tell us about your project' required labelPlacement='outside'>
              </Textarea>
              <Button isDisabled color='primary' radius='md' endContent={<FaPaperPlane/>} className='flex mt-4 gap-3 self-start'>Send</Button>
            </CardBody>
          </Card>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
