
// import { ContributionType } from './Graph.types'
import graph from "./contribution.json"
import { useQueryParam, StringParam } from 'use-query-params';

const Graph = () => {
    const [foo, setFoo] = useQueryParam('foo', StringParam);

    return (
        <>
            <div style={{
                display: "flex",
            }}>
                {
                    graph.data.user.contributionsCollection.contributionCalendar.weeks.map((item) => {

                        return (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                {
                                    item.contributionDays.map((item2) => {

                                        const contributionCount = item2.contributionCount;
                                        let backgroundColor = "lightgray";


                                        switch (contributionCount) {
                                            case 0:
                                                backgroundColor = "lightgray";
                                                break;
                                            case 1:
                                                backgroundColor = "#ebedf0";
                                                break;
                                            case 2:
                                                backgroundColor = "#c6e48b";
                                                break;
                                            case 3:
                                                backgroundColor = "#7bc96f";
                                                break;
                                            case 4:
                                                backgroundColor = "#239a3b";
                                                break;
                                            case 5:
                                                backgroundColor = "#196127";
                                                break;
                                            default:
                                                if (contributionCount > 5) {
                                                    backgroundColor = "darkgreen";
                                                } else {
                                                    backgroundColor = "lightgray";
                                                }
                                                break;
                                        }
                                        return <>
                                            <div
                                                onClick={() => {
                                                    setFoo(item2.date)
                                                }}
                                                key={item2.date}
                                                style={{
                                                width: "13px",
                                                height: "13px",
                                                backgroundColor: backgroundColor,
                                                margin: "1px",
                                                borderRadius: "3px",
                                            }} >
                                                {/* {item2.contributionCount} */}
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>

        </>

    )
}

export default Graph