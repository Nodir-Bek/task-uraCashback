import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Sliders as FilterIcon,
  Search as SearchIcon,
  ArrowDown as ExportIcon,
  ChevronDown as DownIcon,
} from 'react-feather';
import { toolTips } from './helper';
import { useStyles } from './style';
import products from '../../../services/products';
import Table from '../../../components/Table';
import { productsHeader } from '../../../redux/modules/table/common';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData, setData } from '../../../redux/modules/products/actions';
import { useQuery } from '../../useQuery';

const Products = ({ ...rest }) => {
  const classes = useStyles();
  const { id } = useParams();
  const { state } = useLocation();
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const { handleOnTableChange } = useQuery({ fetchData, state, id });
  const dispatch = useDispatch();
  useEffect(() => {
    products
      .getAll(id)
      .then((res) => {
        const tableData = [...res.items];
        console.log('sdjasndjsd', tableData);
        dispatch(setData(tableData));
      })
      .catch((err) => console.log(err));
    setSort('a-z');
  }, []);
  const { data, total } = useSelector((state) => state.productsReducer);
  const headers = useMemo(() => headerMaker(productsHeader), [productsHeader]);

  const filtertedProducts = useMemo(() => {
    if (!search) {
      return data;
    }
    if (sort === 'a-z') {
      return data.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      );
    }
    if (sort === 'z-a') {
      return data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
    }
    return data.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data, sort]);
  return (
    <>
      <Helmet>
        <title>Products| UraCashback </title>
      </Helmet>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',
          minHeight: '100%',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            py: 6,
          }}
        >
          <Typography variant="h3">Products</Typography>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'flex-end',
              gap: 2,
              width: '100%',
            }}
          >
            <div className={classes.navFilterSection}>
              <Box sx={{ mt: 2 }}>
                <TextField
                  className={classes.search}
                  size="small"
                  fullWidth
                  sx={{
                    height: 40,
                    maxWidth: '90%',
                    background: '#FFFFFF',
                    border: '1px solid rgba(47, 46, 46, 0.2)',
                    borderRadius: '6px',
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon fontSize="small" color="action">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search product"
                  variant="outlined"
                />
                <FormControl
                  sx={{
                    ml: 4,
                  }}
                >
                  <Select
                    id="demo-simple-select"
                    value={sort}
                    size="small"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <MenuItem value="a-z">A-Z</MenuItem>
                    <MenuItem value="z-a">Z-A</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className={classes.topBtns}>
            <Button
              disabled={true}
              main="true"
              startIcon={<ExportIcon />}
              sx={{
                backgroundColor: '#EAEAEA',
                width: 111,
                border: '1px solid #D5D5D5',
                borderRadius: '6px',
                height: 40,
                color: '#000',
              }}
            >
              Export
            </Button>
            <Button
              onClick={() => setIsShow(!isShow)}
              startIcon={
                <FilterIcon
                  style={{
                    marginLeft: 5,
                  }}
                />
              }
              endIcon={
                <DownIcon
                  style={{
                    marginRight: 5,
                  }}
                />
              }
              sx={{
                backgroundColor: '#fff',
                color: '#000',

                border: '1px solid rgba(47, 46, 46, 0.2)',
                // width: 111,
                height: 40,
                borderRadius: '8px',
              }}
            >
              Filter
            </Button>
          </div>
          <Box sx={{ pt: 5 }}>
            <div className={classes.root}>
              <Card {...rest}>
                <Table
                  data={filtertedProducts}
                  headers={headers}
                  toolTips={toolTips}
                  total={total}
                  onChange={handleOnTableChange}
                />
              </Card>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Products;
