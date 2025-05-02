import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Custom Avatar Creator</h3>
          <p>Create your personalized avatar with our futuristic avatar generator.</p>
        </div>


        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pranav-vp-3636b825a/" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/VPPranav" className="social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Custom Avatar Creator.Developed By Pranav V P All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
