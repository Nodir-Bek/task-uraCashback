import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AddCircleOutline as Add } from '@mui/icons-material';
import { AnimatePresence } from 'framer-motion';
import {
  Sliders as FilterIcon,
  Search as SearchIcon,
  ArrowDown as ExportIcon,
  ChevronDown as DownIcon,
} from 'react-feather';
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
  const [isShow, setIsShow] = useState(false);
  //   const [search, setSearch] = useState('');
  const { search, status, setSearch, setStatus, handleOnTableChange } =
    useQuery({ fetchData });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    companies
      .getAll()
      .then((res) => dispatch(setData(res.items)))
      .catch((err) => console.log(err));
  }, []);
  const { data, total, loading } = useSelector(
    (state) => state.companiesReducer
  );
  const headers = useMemo(
    () => headerMaker(companiesHeader),
    [companiesHeader]
  );
  console.log('data', data);
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
                  data={data}
                  headers={headers}
                  toolTips={toolTips}
                  total={total}
                  // onChange={handleOnTableChange}
                  onChange={() => {}}
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
