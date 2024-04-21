import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import { toast } from "react-toastify";

const Form = () => {
  // Oluşturduğumuz kitap objelerini state de tutarız
  const [books, setBooks] = useState([]);
  // Formun gönderilme olayı
  const handleSubmit = (e) => {
    // Sayfanın yenilenmesini engeller
    e.preventDefault();
    // formun içerisinde bulunan inputun değerine erişme
    const bookName = e.target[0].value;

    // yeni bir kitap objesi oluşturduk
    const newBook = {
      // idsini uuid kütüphanesini kullanarak oluşturduk
      id: uuidv4(),
      bookName,
      date: new Date().toLocaleString(),
    };
    console.log(newBook);
    // Kitapları diziye ekleme
    setBooks([...books, newBook]);

    // inputu temizleme
    e.target[0].value = "";

    console.log(books);
    toast.success("Kitap başarıyla eklenildi!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleDelete = (delete_id) => {
    // diziden belirli idli elemanı kaldırma
    const filtred = books.filter((book) => book.id !== delete_id);
    // statei güncelle
    setBooks(filtred);

    toast.error("Kitap kaldırıldı!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex mt-4 gap-3 p-4">
        <input type="text" className="form-control shadow" />
        <button className="btn btn-warning shadow">Ekle</button>
      </form>
      <div className="d-flex flex-column gap-5 mt-4">
        {books.map((book) => (
          <Card key={book.id} book={book} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};
export default Form;
