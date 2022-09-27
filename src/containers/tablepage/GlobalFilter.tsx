import react from 'react';
import donutdata from "../data/donutdata.json";
import DonutChart from 'react-donut-chart';
import "./donut.css";

export const GlobalFilter = ({ filter, setFilter }: { filter: any; setFilter: any }) => {
    return (
        <>
            <div className='Donutdiv'>
                <div>
                    <span>
                        <h4>Test</h4>
                        <DonutChart width={300} height={300}
                            data={donutdata}
                            onClick={(item, toggled) =>
                                toggled
                                    ? setFilter(item.label)
                                    : setFilter("")
                            }
                        />
                    </span>
                </div>
                <div>
                    <span>
                        <h4>Test</h4>
                        <DonutChart width={300} height={300}
                            data={donutdata}
                            onClick={(item, toggled) =>
                                toggled
                                    ? setFilter(item.label)
                                    : setFilter("")
                            }
                        />
                    </span>
                </div>
                <div>
                    <span>
                        <h4>Test</h4>
                        <DonutChart width={300} height={300}
                            data={donutdata}
                            onClick={(item, toggled) =>
                                toggled
                                    ? setFilter(item.label)
                                    : setFilter("")
                            }
                        />
                    </span>
                </div>
            </div>
            <div className='globalSearch'>
                Search:
                <input value={filter || ''} onChange={e => setFilter(e.target.value)}></input>
            </div>
        </>

    )
}