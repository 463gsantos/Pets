import { React, useState, useCallback } from "react";
// import AllPets from "./pets/AllPets";

function Pets() {
  const [arrayOfPets] = useState(["Horse", "Fish", "Guinea pig"]);

  const onPetClick = useCallback((myPet) => {
    console.log(myPet);
  }, []);

  console.log(React, arrayOfPets);
  return (
    <div className="container">
      <h3>Pets</h3>
      <div className="row"></div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://seriouslyequestrian.com/wp-content/uploads/2020/05/Arabian-Horse.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"
              className="card-img-top"
              alt="horse"
            />
            <div className="card-body">
              <h5 className="card-title">Horse</h5>
              <p className="card-text">
                The horse is a domesticated, odd-toed, hoofed mammal. It belongs
                to the taxonomic family Equidae and is one of two extant
                subspecies of Equus ferus. The horse has evolved over the past
                45 to 55 million years from a small multi-toed creature,
                Eohippus, into the large, single-toed animal of today..
              </p>
              <button
                onClick={onPetClick}
                className="btn  btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.itsafishthing.com/wp-content/uploads/2021/06/betta-fish-Mr.Soonthorn-Thonglor-Shutterstock-4-e1626881660879.jpg"
              className="card-img-top"
              alt="fish"
            />
            <div className="card-body">
              <h5 className="card-title">Fish</h5>
              <p className="card-text">
                Are you looking for some good stocking ideas for your freshwater
                aquarium? Here is a list of the 25 most well-known freshwater
                fish to get you started. You can keep these fish in a jungle
                paludarium, riverbed replicas, underwater gardens, and many
                other beautiful environments.
              </p>
              <button
                onClick={onPetClick}
                className="btn  btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_506/MTc0MzA1MTgxMDY2ODY0MTI0/peruvian-guinea-pig-care.webp"
              className="card-img-top"
              alt="Guinea pig"
            />
            <div className="card-body">
              <h5 className="card-title">Guinea pig</h5>
              <p className="card-text">
                Peruvian guinea pigs are the best known of the long-haired
                breeds of guineas, and upon seeing them, it can be difficult to
                tell which side the head is on! Due to their long hair, these
                guineas require a great deal of grooming, bathing, and brushing
                in order to keep their fur from matting.
              </p>
              <button
                onClick={onPetClick}
                className="btn  btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="row">{arrayOfPets.map(aPet)}</div>
  );
}

export default Pets;
