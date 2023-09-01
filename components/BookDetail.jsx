import libraryService from "../services/libraryService";
import { useParams } from "next/navigation";
const BookDetail = () => {
  const next = useParams();
  const { id } = next;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await libraryService.getBook(id);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
