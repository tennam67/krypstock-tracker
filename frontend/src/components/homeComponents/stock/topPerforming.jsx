import { FormSelectWrapper } from "../../../styles/components/cryptoStyles/bitCoinStyles";
import { SelectorWrapper } from "../../../styles/components/cryptoStyles/quickTradeStyles";
import { StockTable } from "../../../styles/components/stockStyles/tableStyles"
import { ShrinkingComponentWrapper } from "../../../styles/globalParts/containerStyles"


const TopPerformingStocks = ({gain_stock}) => {
    return (
        <ShrinkingComponentWrapper>
            <FormSelectWrapper>
                <div className="title">
                    <h3>Top 10 gain stocks</h3>
                </div>
               {/* <SelectorWrapper>
                    <div className="buySell">
                        <select className="selector">
                            <option value="today">Today</option>
                            <option value="one-week">1 Week</option>
                            <option value="one-month">1 Month</option>
                            <option value="one-year">1 Year</option>
                        </select>
                    </div>
                </SelectorWrapper>*/}
            </FormSelectWrapper>  
            <StockTable id="top-performing">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Change %</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                {
                    gain_stock.map((data, index) => {
                        return (
                            <tr key={index}>
                        <td>{data.companyName}</td>
                        <td>{data.latestPrice.toFixed(2)}</td>
                        <td>{data.changePercent.toFixed(2)}</td>
                        <td>{data.volume}</td>
                    </tr>
                        )
                    })
                }

                  {/*  <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>520</td>
                        <td>20.20%</td>
                        <td>1.3M</td>
                    </tr>*/}
                </tbody>
            </StockTable>
        </ShrinkingComponentWrapper>
    )
}

export default TopPerformingStocks;