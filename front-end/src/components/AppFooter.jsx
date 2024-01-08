import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function AppFooter() {
  return (
    <footer className="p-3 bg-dark content-footer fixed-bottom">
      {/* <ul class="nav justify-content-center pb-3 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-white">
            Pricing
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul> */}
      <p className="text-center text-white">
        © 2024 Developed By Chanul Gunathilake
      </p>
    </footer>
  );
}
