import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
function AddComment() {
  const { id } = useParams();
  const { showModal, setShowModal } = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = navigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const { author, text, rating } = e.target.elements;

    if (author.value && text.value && rating.value) {
      const newComment = {
        author: author.value,
        text: text.value,
        rating: rating.value,
      };

      VenueDataService.addComment(id, newComment)
        .then((response) => {
          dispatch({ type: "ADD_COMMENT_SUCCESS" });
          setShowModal(true);
        })
        .catch(() => {
          dispatch({ type: "ADD_COMMENT_FAILURE" });
        });
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate(`/venue/${id}`);
  };

  return (
    <>
      <Header headerText={location.state.name} motto=" mekanına yorum yap" />
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <form
            className="form-horizontal"
            id="yorumEkle"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">Puan:</label>
              <div className="col-xs-12 col-sm-2">
                <select
                  className="form-control input-sm"
                  id="rating"
                  name="rating"
                >
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Yorum:</label>
              <div className="col-sm-10">
                <textarea
                  className="review form-control"
                  name="text"
                  rows={5}
                />
              </div>
            </div>
            <button className="btn btn-default pull-right">Yorum Ekle</button>
          </form>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleModalClose}
        title="Tebrikler!"
        message="Yorumunuz yayınlandı!"
      />
    </>
  );
}
export default AddComment;
