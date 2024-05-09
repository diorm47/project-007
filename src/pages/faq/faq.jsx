import React, { useEffect, useRef, useState } from "react";
import "./faq.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Save } from "../../assets/icons/save-icon.svg";

function Faq() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const contentRefs = {
    techRef: useRef(null),
    pricingRef: useRef(null),
    paymentRef: useRef(null),
    howRef: useRef(null),
    presonalRef: useRef(null),
    licenseRef: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      Object.keys(contentRefs).forEach((section) => {
        const ref = contentRefs[section];
        if (ref.current) {
          const top = ref.current.offsetTop;
          const bottom = top + ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveNavItem(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contentRefs]);

  const scrollToSection = (section) => {
    contentRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>FAQ</p>
        </div>
        <div className="header_template_title">
          <h1>FAQ</h1>
        </div>
      </div>
      <section className="home_moto faq_contact">
        <h1>
          Find answers to all your questions about our <br /> free and paid
          products
        </h1>
        <p>
          Or contact us via email{" "}
          <a href="mailto:grids@matchmovemachine.com">
            grids@matchmovemachine.com
          </a>
        </p>
      </section>

      <div className="guide_content">
        <div className="guide_content_navigation">
          <div className="guide_content_nav">
            <div className="guide_content_nav_list">
              <div
                className={
                  activeNavItem === "techRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("techRef")}
              >
                <p>Tech specs</p>
              </div>
              <div
                className={
                  activeNavItem === "pricingRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("pricingRef")}
              >
                <p>Pricing</p>
              </div>
              <div
                className={
                  activeNavItem === "paymentRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("paymentRef")}
              >
                <p>Payment</p>
              </div>
              <div
                className={
                  activeNavItem === "howRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("howRef")}
              >
                <p>How to use the website</p>
              </div>
              <div
                className={
                  activeNavItem === "presonalRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("presonalRef")}
              >
                <p>Personal account</p>
              </div>
              <div
                className={
                  activeNavItem === "licenseRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("licenseRef")}
              >
                <p>License</p>
              </div>
            </div>
          </div>
        </div>

        <div className="guide_content_items">
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.techRef}
          >
            <div className="guide_content_item_title faq_content_item1">
              <p>Tech specs</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What are the technical specifications of the grid sets?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What technical standards do your grid sets adhere to?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>
                  Do you support customization of grid sets to meet specific
                  requirements of a film project?
                </h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.pricingRef}
          >
            <div className="guide_content_item_title faq_content_item2">
              <p>Pricing</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What are the prices of your grid sets?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>
                  Do you offer discounts or special offers for regular
                  customers?
                </h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>
                  Is the cost of shipping included in the price of the grid
                  sets?
                </h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.paymentRef}
          >
            <div className="guide_content_item_title faq_content_item3">
              <p>Payment</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What payment methods do you accept?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>Is it safe to make payments on your website?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>Can I request an invoice for my purchase?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.howRef}
          >
            <div className="guide_content_item_title faq_content_item4">
              <p>How to use the website</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Multi-Camera Geometry Tracking? </h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Extract Focal Length?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to OpenEXR Metadata Reader?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Favorite's Project?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Extract Focus Distance?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Camera Database?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Change Setting for Points?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Export Camera and Lens?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How to Replace Ref Cams Paths?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.presonalRef}
          >
            <div className="guide_content_item_title faq_content_item5">
              <p>Personal account</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How do I create a personal account on your website?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What are the benefits of having a personal account?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>How do I update my personal information or preferences in my account?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
          <div
            className="guide_content_item faq_content_item"
            ref={contentRefs.licenseRef}
          >
            <div className="guide_content_item_title faq_content_item6">
              <p>License</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>What type of license do I need to use your grid sets for film production?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>Can I use your grid sets in multiple film projects with a single license?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>Are there any restrictions on how I can use your grid sets in film production?</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
