import Modal from "react-bootstrap/Modal";

function ActorModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.selectedActor.name}
        </Modal.Title>
        <img
          className="actor"
          src={`https://image.tmdb.org/t/p/w200/${props.selectedActor.profile_path}`}
          alt="poster"
          style={{ width: "100px" }}
        />
      </Modal.Header>
      <Modal.Body>
        <p>
          Födelsedag:
          {props.selectedActor.birthday}
        </p>

        <p>{props.selectedActor.biography}</p>

        <p>
          Född:
          {props.selectedActor.place_of_birth}
        </p>

        <p>
          Känd för:
          {props.selectedActor.known_for_department}
        </p>

        <p>
          populäritet:
          {props.selectedActor.popularity}
        </p>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default ActorModal;
