import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

function MovieModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movie.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.movie.overview}
        </p>

        {props.movieCast.length ? (
          <div className="col-xs-12">
            <h4>Skådespelare</h4>
            {props.movieCast.map((item, index) => (
              <div className="crew-name" key={index}>
                <ul>
                  <li>
                    <a href="#">{item.name}</a>
                    <img
                      className="crew-profile"
                      key={index}
                      src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                      alt="poster"
                    />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MovieModal;
