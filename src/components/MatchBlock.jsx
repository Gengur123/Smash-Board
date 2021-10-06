import React, { useState, useEffect} from 'react';
import './MatchBlock.css'


function MatchBlock (props) {
    const [matchStatus, setMatchStatus] = useState(props.status);
    const [block, setBlock] = useState(props.block);

    useEffect(() => {
        setMatchStatus(props.status);
      }, [props.status])

    if(matchStatus === block){
        return (
            <div class="match">
                <>
                {props.p1} vs {props.p2}
                </>
                <br/>
            <button>START MATCH</button>
                
            <button>DISQUALIFIED</button>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}

export default MatchBlock;