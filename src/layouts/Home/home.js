import "./index.css";
import html from "../images/html-icon1.png";
import css from "../images/css-icon1.png";
import url from "../images/url-icon1.png";

function home() {
  return (
    <div className="home">
      <div className="logo"></div>
      <div className="content">
        <div className="content-title">Lorem ipsum dolor sit asmet?</div>
        <div className="content-nd">
          Lorem ipsum dolor sit asmet? Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor
          pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel
          consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo
          tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue.
          Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo
          eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus
          congue mollis orci, sit amet luctus augue tristique eu. Donec
          vulputate odio neque, sed semper turpis pellentesque a.
        </div>
      </div>

      <div className="other">
        <div className="html">
          <div className="other-title">Lorem ipsum dolor sit amet</div>

          <div className="other-content">
            <img src={html} alt="Html-Icon" align="left" className="icon-anh" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </div>
        </div>
        <div className="css">
          <div className="other-title">Lorem ipsum dolor sit amet</div>

          <div className="other-content">
            <img src={css} alt="Css-Icon" align="left" className="icon-anh" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </div>
        </div>
        <div className="url">
          <div className="other-title">Lorem ipsum dolor sit amet</div>

          <div className="other-content">
            <img src={url} alt="url-Icon" align="left" className="icon-anh" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
