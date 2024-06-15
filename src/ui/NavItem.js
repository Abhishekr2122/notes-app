import "./navitem.css";

export default function NavItem({
  content,
  currElement,
  selectedItem,
  setSelectedItem,
}) {
  function handleSelectedItem(item) {
    setSelectedItem(item);
  }

  return (
    <button
      className={`nav-item ${selectedItem === currElement ? "active" : ""}`}
      onClick={function () {
        handleSelectedItem(currElement);
      }}
    >
      {content}
    </button>
  );
}
