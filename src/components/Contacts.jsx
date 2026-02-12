import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import SocialLink from './SocialLink';

const Contact = () => {

    const contactInfo = [
        { icon: MapPin, label: 'Location', value: 'Kolkata, India' },
        { icon: Mail, label: 'Email', value: 'web.abhiacharya@gmail.com', href: 'mailto:web.abhiacharya@gmail.com' },
        { icon: Phone, label: 'Phone', value: '(+91) 9570258922', href: 'tel:+919570258922' }
    ];

    const socialLinks = [
        { href: 'https://github.com/web-abhishek', icon: Github, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/web-abhiacharya/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://twitter.com/johndoe', icon: Twitter, label: 'Twitter' }
    ];

    return (
        <>
            <section className="py-16 md:py-24">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-300 mb-4 animate-fade-in">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                        Fill out the form below or reach out through any of my social channels.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="flex justify-around space-y-6 my-15 text-left">
                        {contactInfo.map((info) => (
                            <div key={info.label} className="flex items-start gap-4">
                                <div className="p-3 rounded-lg text-gray-400">
                                    <info.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{info.label}</p>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-gray-400 font-medium hover:text-white transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-400 font-medium">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                <div className='my-15'>
                        <h3 className="font-semibold text-gray-400 my-10 text-center">Connect with me</h3>
                        <div className="flex justify-center gap-3">
                            {socialLinks.map((social) => (
                                <SocialLink key={social.label} {...social} />
                            ))}
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Contact;
