import React from 'react';
import '@/styles/footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-copyright">
                    © {currentYear} Christos. All rights reserved.
                </p>
                <div className="footer-links">
                    <a 
                        href="https://github.com/ChrisPa691" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <span className="footer-separator">·</span>
                    <a 
                        href="https://www.linkedin.com/in/cpaparistodemou/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;