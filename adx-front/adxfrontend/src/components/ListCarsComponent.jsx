import React, { Component } from "react";

class ListCarsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Car List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Year Made</th>
                <th>Milleage</th>
                <th>Fuel</th>
                <th>Price</th>
                <th>New/Used</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.brand_masina}</td>
                  <td>{car.an_fabricatie}</td>
                  <td>{car.kilometraj}</td>
                  <td>{car.combustibil}</td>
                  <td>{car.pret}</td>
                  <td>{car.isNew}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCarsComponent;
