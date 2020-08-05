import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";

const AddBooks = (props) => {
  const [categories, setCategories] = useState([]);
  const [kategori_id, setKategori] = useState("");
  const [title, setTitle] = useState("");
  const [harga, setHarga] = useState("");
  const [author, setAuthor] = useState("");
  const [image_url, setImage] = useState("");
  const [no_isbn, setIsbn] = useState("");
  const [berat, setBerat] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const { endpoint, classes, doAdd, open, handleClose } = props;

  const getCategory = async () => {
    try {
      const request = await axios.get(`${endpoint}/kategori`);

      if (request) {
        setCategories(request.data.data);
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = async (e) => {
    //e.preventDefault();

    const formData = new FormData();
    formData.append("kategori_id", kategori_id);
    formData.append("title", title);
    formData.append("harga", harga);
    formData.append("author", author);
    formData.append("image_url", image_url);
    formData.append("no_isbn", no_isbn);
    formData.append("berat", berat);
    formData.append("synopsis", synopsis);

    handleClose();
    doAdd(formData);
  };

  // const handleForm = (e, formName) => {
  //   setData({ ...data, [formName]: e.target.value });
  //   console.log(data, "From dashboard");
  // };
  //
  // onChange={(e) => handleForm(e, "synopsis")}

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle>Add Books</DialogTitle>
      <form onSubmit={(e) => handleSubmit(e)}>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={3}>
            <Grid item md={4} lg={3}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel shrink id="select-category">
                  Category
                </InputLabel>
                <Select
                  labelId="select-category"
                  id="demo-simple-select"
                  displayEmpty
                  onChange={(e) => setKategori(e.target.value)}
                >
                  <MenuItem>Pilih</MenuItem>
                  {categories.rows &&
                    categories.rows.map((val) => {
                      return (
                        <MenuItem key={val.id} value={val.id}>
                          {val.name}
                        </MenuItem>
                      );
                    })}
                </Select>
                <FormHelperText>Pengelompokan buku</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} lg={7}>
              <TextField
                required
                label="Title"
                placeholder="ex: Kambing Jantan Mencari Mangsa"
                helperText="Maksimum karakter 255"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item md={2} lg={2}>
              <div className={classes.withoutLabel}>
                <input
                  type="file"
                  id="upload-file"
                  accept="image/*"
                  multiple
                  className={classes.inputFile}
                  onChange={(event) => setImage(event.target.files[0])}
                />
                <label htmlFor="upload-file">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Cover
                  </Button>
                </label>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md>
              <TextField
                required
                label="Harga"
                type="number"
                helperText="Only number!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setHarga(e.target.value)}
              />
            </Grid>
            <Grid item md>
              <TextField
                required
                label="Penulis"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Grid>
            <Grid item md>
              <TextField
                required
                label="ISBN"
                placeholder="ex: AB3033"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </Grid>
            <Grid item md>
              <TextField
                required
                placeholder="ex: 33"
                helperText="Berat buku"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">g</InputAdornment>
                  ),
                }}
                className={classes.withoutLabel}
                onChange={(e) => setBerat(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <TextField
                required
                label="Synopsis"
                multiline
                rows={3}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setSynopsis(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="reset" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" type="submit" startIcon={<SaveIcon />}>
            Simpan
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default withRouter(AddBooks);
