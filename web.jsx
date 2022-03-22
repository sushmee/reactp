import React  from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Web =() =>
{
    return (
        <>
        <h1 className ="text-center text-capitalize text-success my-5"> Welcome here</h1>
        <div className="container">
 

  <div className="row">
    <div className="col">
    <div class="card">
  <img src="https://picsum.photos/200/302" class="card-img-top" alt="..."
  height ="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      1 of 3
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://picsum.photos/200/294" class="card-img-top" alt="..."
  height ="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
2 of 3
    </div>
    <div className="col">
    <div class="card" >
  <img src="https://picsum.photos/200/309" class="card-img-top" alt="..."
  height ="200px"
  width="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      3 of 3
    </div>
  </div>
</div>
        </>
    );
};
export default Web;
