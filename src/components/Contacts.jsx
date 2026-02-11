import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import SocialLink from './SocialLink';

const Contact = () => {

    const contactInfo = [
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA, USA' },
        { icon: Mail, label: 'Email', value: 'john@example.com', href: 'mailto:john@example.com' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' }
    ];

    const socialLinks = [
        { href: 'https://github.com/web-abhishek', icon: Github, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/web-abhiacharya/', icon: Linkedin, label: 'LinkedIn' },
        { href: 'https://twitter.com/johndoe', icon: Twitter, label: 'Twitter' }
    ];

    return (
        <>
            {/* Hero Section */}
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

            {/* Contact Section */}
            <section className="section-padding">
                <div className="p-10 h-full text-center rounded-3xl bg-[linear-gradient(145deg,#1e2024,#23272b)] 
                hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300
                shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] animate-fade-in">
                    <h2 className="text-2xl font-bold font-display text-gray-400 mb-6">
                        Contact Information
                    </h2>

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

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold text-gray-400 my-10">Connect with me</h3>
                        <div className="flex justify-center gap-3">
                            {socialLinks.map((social) => (
                                <SocialLink key={social.label} {...social} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
