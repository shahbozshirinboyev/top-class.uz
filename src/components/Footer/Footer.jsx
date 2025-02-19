import React from 'react'

function Footer() {
  return (
    <div className='border-t'>
      <div className='container'>
      <footer className="footer text-base-content p-10">
  <aside>
    <img src="/img/logo-b.png" alt="" className='fill-current w-36' />
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved.</p>
  </aside>
</footer>
      </div>
    </div>
  )
}

export default Footer