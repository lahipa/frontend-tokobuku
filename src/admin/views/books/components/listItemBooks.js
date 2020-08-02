import React, { useState, useEffect, Fragment } from "react";
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
  Input,
  InputAdornment,
  Select,
  FormHelperText,
  Button,
  TableCell,
  TableRow,
  IconButton,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import EditRounded from "@material-ui/icons/EditRounded";

const Books = (props) => {
  const [categories, setCategories] = useState([]);
  const [kategori_id, setKategori] = useState("");
  const [title, setTitle] = useState("");
  const [harga, setHarga] = useState("");
  const [author, setAuthor] = useState("");
  const [image_url, setImage] = useState("");
  const [no_isbn, setIsbn] = useState("");
  const [berat, setBerat] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const { no, key, listData, doUpdate, doDelete, classes } = props;

  const getCategory = async () => {
    const request = await axios.get("http://localhost:4000/kategori");
    setCategories(request.data.data);
  };

  useEffect(() => {
    setKategori(listData.kategori_id);
    setTitle(listData.title);
    setHarga(listData.harga);
    setAuthor(listData.author);
    setImage(listData.image_url);
    setIsbn(listData.no_isbn);
    setBerat(listData.berat);
    setSynopsis(listData.synopsis);

    getCategory();
  }, []);

  const handleUpdate = (id) => {
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
    setEdit(false);
    doUpdate(id, formData);
  };

  const handleDelete = (id) => {
    doDelete(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleForm = (e, formName) => {
  //   setData({ ...data, [formName]: e.target.value });
  //   console.log(data, "From dashboard");
  // };

  return (
    <Fragment>
      <TableRow key={key}>
        <TableCell>{no}</TableCell>
        <TableCell>{listData.title}</TableCell>
        <TableCell>{listData.author}</TableCell>
        <TableCell>{listData.kategori && listData.kategori.name}</TableCell>
        <TableCell align="right">{listData.no_isbn}</TableCell>
        <TableCell align="right">{`${listData.berat} gram`}</TableCell>
        <TableCell align="right">{listData.harga}</TableCell>
        <TableCell align="center">
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={() => {
              setEdit(true);
              handleOpen();
            }}
          >
            <EditRounded />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(listData.id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>

      {edit ? (
        <Dialog fullWidth maxWidth="md" open={open} onClose={handleOpen}>
          <DialogTitle>Edit Buku</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Grid container spacing={3}>
              <Grid item md={4} lg={3}>
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink id="select-category">
                    Category
                  </InputLabel>
                  <Select
                    labelId="select-category"
                    id="demo-simple-select"
                    value={kategori_id}
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
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>Title</InputLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=""
                  />
                  <FormHelperText>Maksimum karakter 255</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item md={2} lg={2}>
                <div className={classes.withoutLabel}>
                  <input
                    type="file"
                    id="upload-file"
                    accept="image/*"
                    multiple
                    className={classes.inputFile}
                    //value={image_url}
                    onChange={(e) => setImage(e.target.value)}
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
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>Harga</InputLabel>
                  <Input
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    type="number"
                    placeholder=""
                    startAdornment={
                      <InputAdornment position="start">Rp</InputAdornment>
                    }
                  />
                  <FormHelperText>Only number!</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item md>
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>Penulis</InputLabel>
                  <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder=""
                  />
                </FormControl>
              </Grid>
              <Grid item md>
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>No. ISBN</InputLabel>
                  <Input
                    value={no_isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder=""
                  />
                </FormControl>
              </Grid>
              <Grid item md>
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>Berat</InputLabel>
                  <Input
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">gr</InputAdornment>
                    }
                    placeholder="ex: 33"
                  />
                  <FormHelperText>Berat buku</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel shrink>Synopsis</InputLabel>
                  <Input
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                    multiline
                    placeholder=""
                  />
                  <FormHelperText>Maksimum 255 kata</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
                setEdit(false);
                setKategori(listData.kategori_id);
                setTitle(listData.title);
                setHarga(listData.harga);
                setAuthor(listData.author);
                setImage(listData.image_url);
                setIsbn(listData.no_isbn);
                setBerat(listData.berat);
                setSynopsis(listData.synopsis);
              }}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              type="submit"
              startIcon={<SaveIcon />}
              onClick={() => handleUpdate(listData.id)}
            >
              Simpan
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default withRouter(Books);
