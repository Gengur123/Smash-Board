import React from 'react'
import './MatchBlock.css'


function MatchBlock (props) {
    // const [matchStatus, setMatchStatus] = useState([]);

    
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

export default MatchBlock;