import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import SocialLink from './SocialLink';
import { Menu, X, Download } from 'lucide-react';
import { AuroraText } from "./ui/aurora-text";
import { BorderBeam } from "./ui/border-beam";
import resumePdf from "../public/abhishek_Frontend.pdf";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <section className="py-12 sm:py-16 md:py-24">
                <div className="container-custom text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-300 mb-4 animate-fade-in">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                        Fill out the form below or reach out through any of my social channels.
                    </p>
                    <a
                              href={resumePdf}
                              download
                              className="
                        relative overflow-hidden
                        inline-flex items-center gap-2
                        px-4 py-3 mt-6   text-sm font-medium
                        rounded-lg
                        bg-[linear-gradient(145deg,#1e2024,#23272b)]
                        hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)]
                        transition-all duration-300
                        shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]
                      "
                            >
                              <BorderBeam
                                duration={6}
                                size={400}
                                className="from-transparent via-blue-500 to-transparent"
                                 borderWidth={2}
                              />
                    
                              <BorderBeam
                                duration={6}  
                                delay={3}
                                size={400}
                                borderWidth={2}
                                className="from-transparent via-[#f2574f] to-transparent"
                              />
                    
                              <Download className="w-4 h-4 z-10 text-white" />
                              <span className="z-10">
                                <AuroraText>Download Resume</AuroraText>
                              </span>
                            </a>
                </div>
            </section>

            <section className="section-padding">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-around gap-6 sm:gap-8 my-10 md:my-15 text-center sm:text-left">
                        {contactInfo.map((info) => (
                            <div key={info.label} className="flex items-center sm:items-start gap-3 sm:gap-4 flex-1 min-w-max">
                                <div className="p-2 sm:p-3 rounded-lg text-gray-400 shrink-0">
                                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground text-left">{info.label}</p>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-gray-400 font-medium hover:text-white transition-colors text-sm sm:text-base"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-400 font-medium text-sm sm:text-base">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                <div className='my-10 md:my-15'>
                        <h3 className="font-semibold text-gray-400 my-8 md:my-10 text-left sm:text-center    text-sm sm:text-base">Connect with me</h3>
                        <div className="flex justify-start sm:justify-center gap-2 sm:gap-3">
                            {socialLinks.map((social) => (
                                <SocialLink key={social.label} {...social} />
                            ))}
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Contact;
