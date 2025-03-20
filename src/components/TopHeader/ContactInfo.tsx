import React from 'react'

const ContactInfo: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <a
        href="tel:+551186400518"
        className="contact-link"
        aria-label="Suporte por telefone"
      >
        <i className="bx bx-phone-call" aria-hidden="true"></i>
        <span>Ligue Agora: 11 98640-0518</span>
      </a>
    </div>
  )
}

export default ContactInfo
