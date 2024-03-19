import React from "react";

export default function Menu({ menuItems }) {
  return (
    <main>
      <div className="container">
        <div className="row">

          { menuItems.length > 0 ?  ( menuItems.map((i) => {
            return (
              <div key={i.id} className="col-6 contents">
                <div className="inner-content">
                  <img
                    src={i.image}
                    alt="food item"
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
                <h4>{i.title}</h4>
                <h6>${i.price}</h6>
                <p>{i.description}</p>
              </div>
            );
          })):( <p>No items found</p>)
        
        }
        </div>
      </div>
    </main>
  );
}
