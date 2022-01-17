import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import ActorModal from "./ActorModal";
import { fetchActor, fetchActorInfo } from "../services/API";

function MovieModal(props) {
  const [selectedActor, setSelectedActor] = useState([]);
  const [actorModalShow, setActorModalShow] = useState(false);

  const getActor = async (id) => {
    setSelectedActor({
      ...(await fetchActor(id)),
      movies: await fetchActorInfo(id),
    });
  };

  const getInfo = (actor) => {
    getActor(actor);
    setActorModalShow(true);
  };

  return (
    <Container>
      <ActorModal
        show={actorModalShow}
        onHide={() => setActorModalShow(false)}
        selectedActor={selectedActor}
      />
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
          <p>{props.movie.overview}</p>

          {props.movieCast.length ? (
            <div className="col-xs-12">
              <h4>Skådespelare</h4>
              {props.movieCast.map((item, index) => (
                <div className="crew-name" key={index}>
                  <ul>
                    <li>
                      <img
                        className="crew-profile"
                        key={index}
                        src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                        alt="poster"
                      />
                      <Button onClick={() => getInfo(item.id)}>
                        {item.name}
                      </Button>
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
    </Container>
  );
}
export default MovieModal;
