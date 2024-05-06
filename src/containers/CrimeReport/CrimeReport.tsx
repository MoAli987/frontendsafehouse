import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function CrimeReport() {
    const [data, setData] = React.useState([{
        category: "other-theft",
        location_type: "Force",
        location: {
            latitude: "52.629831",
            street: {
                id: 1738423,
                name: "On or near Marquis Street"
            },
            longitude: "-1.132503"
        },
        context: "",
        outcome_status: {
            category: "Under investigation",
            date: "2024-01"
        },
        persistent_id: "bb06e351c7056b9d74fcf5d519cc45e0318f72e1a39bdf45f9551a2743396d58",
        id: 116206187,
        location_subtype: "",
        month: "2024-01"
    }]);

    const [searchData, setSearchData] = React.useState({
        lat: "",
        log: ""
    })
    const fecthApiDataCrime = async () => {
        // console.log("d")
        const res = axios.get("https://data.police.uk/api/crimes-at-location?&lat=53.383331&lng=-1.466667")
            .then((response) => {

                setData(response.data)

            }).catch((error) => {
                console.log("error")
            })
    }


    const searchFunction = async () => {
        alert(`${searchData.lat} = ${searchData.log}`)
        const res = axios.get(`https://data.police.uk/api/crimes-at-location?&lat=${searchData.lat}&lng=${searchData.log}`)
            .then((response) => {

                setData(response.data)

            }).catch((error) => {
                console.log("error")
            })
    }
    React.useEffect(() => {
        fecthApiDataCrime()

    }, [])



    return (
        <>
            <div className="container ">
                <div className="mt-4 text-center justify-content-center">
                    <div className="h3 text-report">Crime Report in My Area</div>
                    <div className="h5 mt-3">Please Enter Full Postal Code</div>
                    <div className="d-flex justify-content-center">
                        <input className="form-control w-25 pt-3 pb-3 report-inpt mt-4 font-weight-bold pl-4" onChange={(e) => {
                            setSearchData({ ...searchData, lat: e.target.value });
                        }} type="number" name="" value={searchData.lat} id="" placeholder="latitude" />
                        <input className="form-control w-25 pt-3 pb-3 report-inpt mt-4 font-weight-bold pl-4 ml-3"
                            onChange={(e) => {
                                setSearchData({ ...searchData, log: e.target.value });
                            }}
                            value={searchData.log} type="number" name="" id="" placeholder="longitude" />
                        <button className="btn mt-4 btn-outline-primary search-button ml-3 btn-sm rounded" style={{ borderRadius: "50%" }} onClick={searchFunction} type="submit">Search</button>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>User ID's</StyledTableCell>
                                <StyledTableCell >Category</StyledTableCell>
                                <StyledTableCell >Category Status</StyledTableCell>
                                <StyledTableCell >Location</StyledTableCell>
                                <StyledTableCell >Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        <span className="badge badge-primary bg-primary">{row.id}</span>
                                    </StyledTableCell>
                                    <StyledTableCell >{row.category}</StyledTableCell>

                                    <StyledTableCell >{row.outcome_status?.category}</StyledTableCell>
                                    <StyledTableCell >{row.location.street.name}</StyledTableCell>
                                    <StyledTableCell >{row.month}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}