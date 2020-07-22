import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import numeral from "numeral";

import { connect } from "react-redux";
import { getBookById } from "../store/actions/books";

const mapStateToProps = (state) => {
  return {
    book: state.bookReducer.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBookId: (id) => dispatch(getBookById(id)),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const DetailBook = (props) => {
  const { book, match } = props;

  useEffect(() => {
    props.getBookId(match.params.id);
  }, []);
  console.log(book, "Detail book");
  return (
    <Layout>
      <SectionContent>
        <Container>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                variant="top"
                alt=""
                //src={book.imageUrl}
                src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
                width={450}
              />
            </div>
            <div className="col-md-4">
              <h4
                className="my-2 font-weight-bold"
                style={{ color: "#8052ff" }}
              >
                {`Rp ${numeral(book.price).format("0,0")}`}
              </h4>
              <h5 className="my-3 text-dark text-left">
                Author: {book.author}
              </h5>
              <h6 className="text-left">Book Synopsis :</h6>
              <p className="text-black-50 text-justify">{book.synopsis}</p>
            </div>
          </div>
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailBook);
