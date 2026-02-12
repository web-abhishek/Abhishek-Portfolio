import React from 'react';

// Social Link component
const SocialLink = ({ href, icon: Icon, label, variant = 'default' }) => {
  const variants = {
    default: 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground',
    outline: 'border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary',
    ghost: 'text-muted-foreground hover:text-primary hover:bg-primary/10'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl transition-all duration-300 ${variants[variant]} focus-ring`}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};

export default SocialLink;
