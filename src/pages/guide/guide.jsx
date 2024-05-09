import React, { useEffect, useRef, useState } from "react";
import "./guide.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Save } from "../../assets/icons/save-icon.svg";
import guide1 from "../../assets/images/guide/guide1.png";
import guide2 from "../../assets/images/guide/guide2.png";
import guide3 from "../../assets/images/guide/guide3.png";
import guide4 from "../../assets/images/guide/guide4.png";
import guide5 from "../../assets/images/guide/guide5.png";
import guide6 from "../../assets/images/guide/guide6.png";
import guide7 from "../../assets/images/guide/guide7.png";
import guide8 from "../../assets/images/guide/guide8.png";
import guide9 from "../../assets/images/guide/guide9.png";
import guide10 from "../../assets/images/guide/guide10.png";
import guide11 from "../../assets/images/guide/guide11.png";
import guide12 from "../../assets/images/guide/guide12.png";
import guide13 from "../../assets/images/guide/guide13.png";
import guide14 from "../../assets/images/guide/guide14.png";
import guide15 from "../../assets/images/guide/guide15.png";
import guide16 from "../../assets/images/guide/guide16.png";
import guide17 from "../../assets/images/guide/guide17.png";
import guide18 from "../../assets/images/guide/guide18.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";



function Guide() {
  const [activeNavItem, setActiveNavItem] = useState(null);
  const contentRefs = {
    preparationRef: useRef(null),
    cameraSetupRef: useRef(null),
    lensSetupRef: useRef(null),
    beforeRef: useRef(null),
    nextRef: useRef(null),
    shootingRef: useRef(null),
    additionRef: useRef(null),
    xyzRef: useRef(null),
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
          <p>Guide</p>
        </div>
        <div className="header_template_title">
          <h1>Guide</h1>
        </div>
        <div className="header_template_text">
          <p>
            This guide is the result of many years of experience gained by us
            and our colleagues while working on film sets and vfx studios. Here,
            we provide the most comprehensive and step-by-step instructions for
            shooting Distortion grids for various types of cameras and lenses.
            Additionally, we provide a file naming template that corresponds to
            industry standards.
          </p>
        </div>
      </div>
      <div className="guide_img"></div>
      <div className="guide_content">
        <div className="guide_content_navigation">
          <div className="guide_content_nav">
            <div className="guide_content_nav_list">
              <div
                className={
                  activeNavItem === "preparationRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("preparationRef")}
              >
                <p>Preparation</p>
              </div>
              <div
                className={
                  activeNavItem === "cameraSetupRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("cameraSetupRef")}
              >
                <p>Camera setup</p>
              </div>
              <div
                className={
                  activeNavItem === "lensSetupRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("lensSetupRef")}
              >
                <p>Lens setup</p>
              </div>
              <div
                className={
                  activeNavItem === "beforeRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("beforeRef")}
              >
                <p>Before the next steps</p>
              </div>
              <div
                className={
                  activeNavItem === "nextRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("nextRef")}
              >
                <p>Next</p>
              </div>
              <div
                className={
                  activeNavItem === "shootingRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("shootingRef")}
              >
                <p>Shooting</p>
              </div>
              <div
                className={
                  activeNavItem === "additionRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("additionRef")}
              >
                <p>Additional</p>
              </div>
              <div
                className={
                  activeNavItem === "xyzRef"
                    ? "active_nav_guide guide_content_nav_list_item"
                    : "guide_content_nav_list_item"
                }
                onClick={() => scrollToSection("xyzRef")}
              >
                <p>XYZ Magnetic Grid</p>
              </div>
            </div>
          </div>
        </div>

        <div className="guide_content_items">
          <div className="guide_content_item" ref={contentRefs.preparationRef}>
            <div className="guide_content_item_title guide_content_item1">
              <p>Preparation</p>
            </div>
            <div className="guide_content_item_box">
              <ul className="guide_content_item_list">
                <li>
                  Firstly, you need a grid – you can{" "}
                  <span> create it by yourself, buy it from us,</span> rent it,
                  or in some cases even display it on your monitor screen.
                </li>
                <li>
                  There are no ideal grid parameters – it all depends on the
                  camera and the used lens.
                </li>
                <li>
                  We have chosen a size of 62x120cm with a grid spacing of 15mm.
                </li>
              </ul>
              <img src={guide1} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box">
              <ul className="guide_content_item_list">
                <li>
                  We strongly do not recommend you to use grids with reduced
                  grid scale in the center – in some software, such as
                  3DEqualizer, this complicates automatic grid detection.
                </li>
              </ul>
              <img src={guide2} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box">
              <ul className="guide_content_item_list">
                <li>
                  Securely fasten the grid vertically maintaining the horizon.
                  It’s important to make sure that the surface of the grid is
                  perfectly flat and free from waves, wrinkles, bends, or any
                  other deformations.
                </li>
              </ul>
              <img src={guide3} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box">
              <ul className="guide_content_item_list">
                <li>
                  Make a flat soft lighting setup, as highlights and strong
                  lighting variations can complicate the automatic grid
                  detection.
                </li>
              </ul>
              <img src={guide4} alt="" />
            </div>
          </div>
          <div className="guide_content_item" ref={contentRefs.cameraSetupRef}>
            <div className="guide_content_item_title guide_content_item2">
              <p>Camera setup</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>01</h3>
                <h2>
                  Choose the frame format that uses the maximum area of your
                  camera sensor during filming.
                </h2>
                <p>
                  If you are unsure which format to choose, shoot in Open Gate.
                </p>
              </div>
              <img src={guide5} alt="" />
            </div>
            <ul className="guide_content_item_list">
              <li>
                We recommend to shoot grids after the main footages has been
                filmed – this is necessary to know in which formats the shooting
                was done, because the format affects which part of the sensor is
                used.
              </li>
              <li>
                If you’re not sure about the resolution you need to shoot in, or
                if Distortion grids are being shot before the shooting period
                begins, then shoot in Open Gate (a format that uses the full
                sensor size). Matchmove artists will find it more challenging to
                work with this material, but you will be certain that you have
                captured all the necessary information. Starting from version
                7.1, 3DEqualizer introduced a tool for adapting grids to the
                required format. For users of earlier versions, we have prepared
                our own tool.
              </li>
              <li>
                It is important to note that higher resolution does not always
                equal a larger sensor size – we recommend checking the
                information on the manufacturer’s website of your camera or
                using the website vfxcamdb.com (don’t forget to donate to its
                author).
              </li>
            </ul>
          </div>
          <div className="guide_content_item" ref={contentRefs.lensSetupRef}>
            <div className="guide_content_item_title guide_content_item3">
              <p>Lens setup</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>02</h3>
                <h2>Install the lens with the minimum focal length.</h2>
                <p>If using a zoom lens, set it to the minimum focal length.</p>
              </div>
              <img src={guide6} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>03</h3>
                <h2>
                  Place the camera so that its optical axis is perpendicular to
                  the surface of the Distortion grid.
                </h2>
              </div>
              <img src={guide7} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>04</h3>
                <h2>
                  Make sure that the edges of the frame are completely covered
                  with a chess pattern.
                </h2>
                <ul className="guide_content_item_list">
                  <li>
                    Double-check with the camera operator that the coverage is
                    based on the effective sensor area – not the internal frame
                    that can be set in the display settings.
                  </li>
                  <li>
                    Don’t try to fit the entire grid within the frame – let it
                    extend beyond its boundaries if necessary.
                  </li>
                </ul>
              </div>
              <img src={guide8} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>05</h3>
                <h2>Сlose the iris to its maximum value.</h2>
                <p>
                  This is necessary in order to achieve the maximum depth of
                  field, which will be required when changing the focus distance
                  in the next steps.
                </p>
                <ul className="guide_content_item_list">
                  <li>
                    Shooting Distortion grids for different focus distances is
                    important because when adjusting the focus ring, the ‘lens
                    breathing’ effect occurs, which also affects its distortion,
                    especially pronounced in anamorphic lenses. 
                  </li>
                  <li>
                    Now you understand that it’s important to shoot focus
                    distance AND gather this information on the set for each
                    shoot, because only together they will work correctly.
                  </li>
                  <li>
                    Most likely, a closed iris will significantly darken your
                    image, therefore.
                  </li>
                </ul>
              </div>
              <img src={guide9} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>06</h3>
                <h2>Reduce the FPS to the minimum value.</h2>
              </div>
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>07</h3>
                <h2>Set the shutter speed to the maximum (shutter 360).</h2>
              </div>
              <img src={guide10} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>08</h3>
                <h2>If necessary, increase the ISO.</h2>
                <ul className="guide_content_item_list">
                  <li>
                    After that, we recommend turning the focusing ring to make
                    sure that the grid is in focus and covers all of the frame
                    at the all focus distance values.
                  </li>
                </ul>
              </div>
            </div>
            <div className="guide_content_item_line"></div>
          </div>
          <div className="guide_content_item" ref={contentRefs.beforeRef}>
            <div className="guide_content_item_title guide_content_item4">
              <p>Before the next steps</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h2>
                  Let’s go over again what focal length is and what focus
                  distance is:
                </h2>
                <p>
                  Let’s go over again what focal length is and what focus
                  distance is:
                </p>
              </div>
              <img src={guide11} alt="" />
            </div>
            <ul className="guide_content_item_list">
              <li>
                <span> Focal length</span> is the distance from the optical
                center of the lens to the camera sensor.
              </li>

              <li>
                {" "}
                The <span>focus distance</span> is the distance from the camera
                sensor to the object that you want to get in focus.
              </li>
            </ul>
          </div>
          <div className="guide_content_item" ref={contentRefs.nextRef}>
            <div className="guide_content_item_title guide_content_item5">
              <p>Next</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>09</h3>
                <h2>Set the minimum focus distance on the lens.</h2>
                <p>If using a zoom lens, set it to the minimum focal length.</p>
              </div>
              <img src={guide12} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>10</h3>
                <h2>Ensure that the grid is in focus.</h2>
              </div>
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>11</h3>
                <h2>
                  Next, record the following information on a sheet of paper:
                </h2>
                <ul className="guide_content_item_list">
                  <li> Camera model</li>
                  <li>Frame format (shooting resolution)</li>
                  <li>Focal length</li>
                  <li>Focus distance</li>
                </ul>
              </div>
              <img src={guide13} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
          </div>
          <div className="guide_content_item" ref={contentRefs.shootingRef}>
            <div className="guide_content_item_title guide_content_item6">
              <p>Shooting</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>12</h3>
                <h2>Shoot the frame</h2>
                <p className="mb60px">
                  If using a zoom lens, set it to the minimum focal length.
                </p>
                <ul className="guide_content_item_list">
                  <li>Attach a sheet to the grid and press REC.</li>
                  <li>
                    If you are recording at a rate of 1 FPS, then after a couple
                    of seconds, remove the sheet from the frame and, making sure
                    that the grid image is evenly illuminated and without
                    shadows, stop recording.
                  </li>
                  <li>
                    For your convenience, magnetic stickers are included with
                    XYZ.Grids to record this information, which you do not need
                    to remove from the frame.
                  </li>
                </ul>
              </div>
              <img src={guide14} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>13</h3>
                <h2>After that, change the focus distance.</h2>

                <ul className="guide_content_item_list">
                  <li>
                    The step is determined independently based on your needs:
                    the smaller the step, the more accurate the lens distortion
                    profile will be, and the more time it will take to shoot.
                  </li>
                  <li>
                    For example: Hawk V-Lite Anamorphic 28mm (minimal focus
                    distance 0.8m):
                  </li>
                  <li>
                    80 – 100 – 130 – 180 – 200 – 250 – 350 – 450 – 600 – 800 –
                    1500 – ∞
                  </li>
                  <li>ATLAS 32mm (minimal focus distance 0.55m):</li>
                  <li>
                    55 – 65 – 75 – 85 – 100 – 120 – 140 – 200 – 250 – 300 – 450
                    – 1000 – ∞
                  </li>
                  <li>
                    As you can see, the change in focus distance is non-linear.
                    This is because the shorter the distance, the more the
                    distortion parameters changeTry to maintain a similar
                    dependency as in our example.
                  </li>
                </ul>
              </div>
              <img src={guide15} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>14</h3>
                <h2>
                  Repeat steps <span>10</span> - <span>13</span> until you reach
                  the “infinity” focus distance value (this also needs to be
                  captured).
                </h2>
              </div>
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>15</h3>
                <h2>
                  After reaching the “infinity” focus distance value, install
                  the next lens and repeat steps <span>9</span> –{" "}
                  <span>14</span> .
                </h2>

                <ul className="guide_content_item_list">
                  <li>
                    Please remember that we perform the shooting from a shorter
                    to a longer focal distance lens.
                  </li>
                  <li>
                    In that case we will get a slightly larger grid spacing in
                    the frame, but in most cases this is enough – it helps to
                    minimize camera movements.
                  </li>
                </ul>
              </div>
              <img src={guide16} alt="" />
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>16</h3>
                <h2>
                  If we use zoom lenses, the algorithm is similar to shooting a
                  Distortion grid for fixed focal length lenses, only instead of
                  changing the lens, we rotate the focus distance adjustment
                  ring and repeat steps <span>9</span> - <span>14</span>.
                </h2>

                <ul className="guide_content_item_list">
                  <li>
                    It is important to note that the non-linear dependence, as
                    with the focus distance, no longer works here, so we take
                    steps based on classical focal length values:8 – 14 – 18 –
                    24 – 32 – 35 – 50 – 65 – 80 – 100 – 135 – 140 – 200 – 300 –
                    400 – 600
                  </li>
                  <li>
                    In some cases, when the focus distance range does not allow
                    you to move the camera far enough away from the grid, you
                    may get a large grid size in the frame. For this you need to
                    use a grid with halved grid spacing.If you are using
                    XYZ.Grid, just magnetize an additional mini grid on top of
                    the main one. The principle here is the same – the new grid
                    should completely overlap the frame.
                  </li>
                </ul>
              </div>
              <img src={guide17} alt="" />
            </div>
            <div className="guide_content_item_line"></div>

            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>Great!</h3>
                <h2>
                  If you have followed our recommendations, you have got great
                  grids, which will be very easy and comfortable to work with.
                </h2>
              </div>
              <img src={guide18} alt="" />
            </div>
          </div>
          <div
            className="guide_content_item guide_content_7"
            ref={contentRefs.additionRef}
          >
            <div className="guide_content_item_title guide_content_item7">
              <p>Additional</p>
            </div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>01</h3>
                <h2>Lens Data System</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>02</h3>
                <h2>Naming of your working files</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_line"></div>
            <div className="guide_content_item_box_center">
              <div className="guide_content_item_box_center_text">
                <h3>03</h3>
                <h2>Different Grid and Footage resolutions</h2>
              </div>
              <div className="download_add_icon">
                <Save />
              </div>
            </div>
            <div className="guide_content_item_line"></div>
          </div>
        </div>
      </div>
      <div className="xyz_grid"  ref={contentRefs.xyzRef}>
        <h2>XYZ Magnetic Grid</h2>
        <p className="xyz_grid_text">
          Let yourself fulfill your creative vision with XYZ Magnetic Grid, <br />  a
          tool that makes shooting grids more convenient, efficient and
          exciting!
        </p>
        <div className="main_btn_temp see_more_btn_temp">
            <p>See more</p>
            <ArrowRight />
          </div>
      </div>
    </>
  );
}

export default Guide;
