import React, { useEffect, Component } from "react";
import { Container, Button } from "@material-ui/core";
import Layout from "../../templates/layout";
import numeral from "numeral";
import { connect } from "react-redux";
import { getBookById } from "../../store/actions/books";

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

class DetailBook extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log("test");
    const { match, getBookId } = this.props;
    getBookId(match.params.id);
  }

  render() {
    const { book } = this.props;
    // useEffect(() => {
    //   if (match) {
    //     getBookId(match.params.id);
    //     console.log(match, "match");
    //   }
    // }, [match, getBookId]);

    return (
      <Layout>
        <Container>
          <div>
            <h4>{book.title}</h4>
          </div>
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
                {`Rp ${numeral(book.harga).format("0,0")}`}
              </h4>
              <h5 className="my-3 text-dark text-left">
                Author: {book.author}
              </h5>
              <p className="text-black-50 text-justify">
                {book.kategori && book.kategori.name}
              </p>
              <h6 className="text-left">Book Synopsis :</h6>
              <p className="text-black-50 text-justify">{book.synopsis}</p>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailBook);
