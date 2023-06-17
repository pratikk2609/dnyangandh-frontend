import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-4">
              <h3>About Us</h3>
              <p>Social Welfare committe provinding scholarships to students</p>
            </div>
            <div className="col-lg-4">
              <h3>Contact</h3>
              <p>Email: contact@example.com</p>
              <p>Phone: 9850698107</p>
            </div>
            <div className="col-lg-4">
              <h3>Social Accounts</h3>
              <ul className="list-unstyled">
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Facebook</a></li>
                <li><a href="https://www.youtube.com/channel/UCYdC71qCm2dIFL_ac5Grpgw">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-dark text-center py-2">
          <p className="mb-0">&copy; {new Date().getFullYear()} Dnyangandh Pratishthan. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
