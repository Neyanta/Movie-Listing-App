import React from "react";

function Search() {
  return (
    <section className="searchbox-wrap mx-3">
      <div class="input-group mb-3 ">
        <input
          type="text"
          className="form-control "
          placeholder="Search for movies ..."
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            Search
          </span>
        </div>
      </div>
    </section>
  );
}

export default Search;
