import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Feuchers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Company
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Support
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="">Help center</a>
                </li>
                <li>
                  <a href="">Terms of Services</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Stay up to date
              </h6>
              <p className="contact-info mt-4">
                <input
                  type="email"
                  placeholder="Enter email"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#444",
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                    width: "200px",
                  }}
                ></input>
              </p>
              <p className="contact-info">+91 1235324342</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">
          2024 © MediPrev, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
