import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Card,
  Container,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Search as SearchIcon } from 'react-feather';
import { toolTips } from './helper';
import { useStyles } from './style';
import companies from '../../../services/companies';
import Table from '../../../components/Table';
import { companiesHeader } from '../../../redux/modules/table/common';
import { headerMaker } from '../../../components/Table/helper';
import { fetchData, setData } from '../../../redux/modules/companies/actions';
import { useQuery } from '../../useQuery';

const Companies = ({ ...rest }) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const { handleOnTableChange } = useQuery({ fetchData });
  const dispatch = useDispatch();
  useEffect(() => {
    companies
      .getAll()
      .then((res) => dispatch(setData(res.items)))
      .catch((err) => console.log(err));
    setSort('a-z');
  }, []);

  const { data, total } = useSelector((state) => state.companiesReducer);
  const headers = useMemo(
    () => headerMaker(companiesHeader),
    [companiesHeader]
  );
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
        <title>Companies| UraCashback </title>
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
          <Typography variant="h3">Companies</Typography>

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
export default Companies;
