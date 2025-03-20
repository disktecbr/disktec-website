import React from 'react'
import { SocialLink } from './types'

const SocialLinks: React.FC = () => {
  // Dados dos links sociais
  const socialLinks: SocialLink[] = [
    { icon: 'bxl-facebook', url: '#', ariaLabel: 'Facebook' },
    { icon: 'bxl-twitter', url: '#', ariaLabel: 'Twitter' },
    { icon: 'bxl-instagram', url: '#', ariaLabel: 'Instagram' },
    { icon: 'bxl-linkedin', url: '#', ariaLabel: 'LinkedIn' },
  ]

  return (
    <div className="social-links-container">
      <ul className="social-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a
              href={link.url}
              className="social-link"
              aria-label={link.ariaLabel}
            >
              <i className={`bx ${link.icon}`} aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
