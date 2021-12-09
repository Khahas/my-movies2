import Modal from "react-bootstrap/Modal";
// here do we have the html code for the actors
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

        { props.selectedActor.movies &&   
              props.selectedActor.movies.results &&
              props.selectedActor.movies.results.length ? (
                <div>
                  <b>Filmer {props.selectedActor.name} medverkat i:</b>
                  
                  {props.selectedActor.movies.results.map((movieItem) => (
                   <div> {movieItem.title} </div>
                ))}
                </div>
              ) : null}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
export default ActorModal;
