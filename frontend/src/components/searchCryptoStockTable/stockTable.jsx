import React from 'react'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddBoxIcon from "@material-ui/icons/AddBox";
import {useHistory} from "react-router-dom";

export const StockTable = ({symbol}) => {

    const history = useHistory();

    const toSymbolPage = () => {
        history.push(`/stock/${symbol.symbol}`);
    }

    return (
        <>
                     <tr>
                    <td className="headcol"><AddBoxIcon className="addIcon"/></td>
                    <td onClick={() => {
                        return (
                            !window.getSelection().toString().length ? toSymbolPage() : ''
                        )
                    }}>{symbol.symbol}</td>
                    <td>{symbol.companyName}</td>
                    <td>{symbol.latestPrice}</td>
                    <td>{symbol.change}</td>
                    <td>{symbol.changePercent}</td>
                    <td>{symbol.volume}</td>
                    <td>{symbol.marketCap}</td>
                    {/*<td><TrendingUpIcon/> {symbol.high}</td>*/}
                    </tr>
        </>
    )
}
