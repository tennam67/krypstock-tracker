import React from 'react';
import {useSelector} from 'react-redux';
import {ShrinkingComponentWrapper } from '../../../styles/globalParts/containerStyles';
// import {TableWrapper} from '../../../styles/components/cryptoStyles/transactionHistoryStyles'
import {Table} from '../../../styles/components/cryptoStyles/cryptoTablesStyles'
import TablePagination from '@material-ui/core/TablePagination';
import Moment from 'react-moment';
import {darkTheme} from '../../../styles/Themes';

export const TransactionHistory = () => {

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;
    const allData = useSelector(state => state.transactionsReducer.transactions);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <ShrinkingComponentWrapper> 
            <h3>Transaction History</h3>
            {/* <TableWrapper> */}
            <Table id="trans-history">
                    <thead>
                        <tr>
                        <th>Currency</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData ?
                            allData.filter(data => data.type === 'C').slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map( (cryptoData, index) => 
                                <tr key={"Stock"+ index}>
                                    <td>{cryptoData.symbol}</td>
                                    <td><Moment format="DD.MM.YY">{cryptoData.exec_time}</Moment></td>
                                    <td>{cryptoData.cost}</td>
                                    <td>{cryptoData.buy_sell === "B" ? "BUY" : "SELL"}</td>
                                </tr>
                            )
                            :
                            <tr>
                                <td colSpan="4">No crypto assets in your portfolio</td>
                            </tr>
                        }
                        <TablePagination 
                            component="div"
                            count={allData.filter(data => data.type === 'C').length}
                            page={page}
                            onChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[]}
                            style={{color: darkTheme.text}}
                        />
                    </tbody>
            </Table>

        </ShrinkingComponentWrapper>
    )
}

