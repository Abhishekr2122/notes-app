import "./navitem.css";

export default function NavItem({
  content,

  selectedItem,
  setSelectedItem,
}) {
  function handleSelectedItem(item) {
    setSelectedItem(item);
  }

  return (
    <button
      className={`nav-item ${selectedItem === content ? "active" : ""}`}
      onClick={function () {
        handleSelectedItem(content);
      }}
    >
      {content}
    </button>
  );
}
