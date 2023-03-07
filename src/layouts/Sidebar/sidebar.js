import "./index.css";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sb-home sb-list">Home</div>
      <div className="sb-services sb-list">Services</div>
      <div className="sb-news sb-list active">News</div>
      <div className="sb-blog sb-list">Blog</div>
      <div className="sb-contact sb-list">Contact</div>
    </div>
  );
}

export default sidebar;
