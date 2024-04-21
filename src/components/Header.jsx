import book from "../assets/book.png";

const Header = () => {
  return (
    <header className="d-flex bg-dark text-light justify-content-center align-items-center py-3">
      <img src={book} style={{ height: "50px" }} />
      <h1>Kitap Kurdu</h1>
    </header>
  );
};
export default Header;
