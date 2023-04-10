import React, { useEffect, useState } from "react";
import dump from "./Mock.json";
// import mock from "./Mock1.json";

const SimpleAccordian1 = function () {
  const [response, setResponse] = useState();
  const [price1, setPrice] = useState();
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => (setResponse(json), setPrice(json.price), setImage(json.images)));
  }, []);

  console.log("json", response);
  console.log("img", image);
  console.log("price", price1);
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "60%" }}>
        <div>
          <h1>Custom Element Scroll</h1>
          <div style={{ height: "30rem", overflowY: "scroll" }}>
            {dump.paragraph}
            {dump.paragraph}
          </div>
          <div>
            <Mailto
              email={shareEmailID}
              subject={price1}
              body={image}
            >
              Mail me!
            </Mailto>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAccordian1;
