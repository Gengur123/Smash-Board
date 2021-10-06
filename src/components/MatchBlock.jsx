import React, { useState, useEffect} from 'react';
import './MatchBlock.css'


function MatchBlock (props) {
    const [matchStatus, setMatchStatus] = useState(props.status);
    const [block, setBlock] = useState(props.block);
    const [statusFunction, setStatusFunction] = useState(props.statusFunc)
    const [idx, setIdx] = useState(props.idx)

    useEffect(() => {
        setMatchStatus(props.status);
        setStatusFunction(props.statusFunc);
        setIdx(props.idx);
    }, [props.status, props.statusFunc, props.idx])



    let startMatch = () => {
        statusFunction(idx, 'P')
    }

    let dqMatch = () => {
        statusFunction(idx, 'D')
    }

    let endMatch = () => {
        statusFunction(idx, 'F')
    }

    if(matchStatus === block){
        if(matchStatus === 'S'){
            return (
                <div class="match">
                    <>
                    {props.p1} vs {props.p2}
                    </>
                    <br/>
                <button onClick={startMatch}>START MATCH</button>
                    
                <button onClick={dqMatch}>DISQUALIFIED</button>
                </div>
            )
        }
        else if(matchStatus === 'P'){
            return (
                <div class="match">
                    <>
                    {props.p1} vs {props.p2}
                    </>
                    <br/>
                    
                <button onClick={dqMatch}>DISQUALIFIED</button>
                <button onClick={endMatch}>END MATCH</button>
                </div>
            )
        }
        else if(matchStatus === 'D'){
            return (
                <div class="match">
                    <>
                    {props.p1} vs {props.p2}
                    </>
                    <br/>
                <button onClick={startMatch}>START MATCH</button>
                <button onClick={endMatch}>END MATCH</button>
                </div>
            )

        }
    }
    else{
        return(
            <></>
        )
    }
}

export default MatchBlock;