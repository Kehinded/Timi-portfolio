import React, {useState, useEffect} from 'react'
import '../styles/OverviewProfile.css'
import {FaThumbsUp} from 'react-icons/fa'


const VoteBox = () => {
    const [voteNo, setVoteNo] = useState('')
    const [onCheck, setOnCheck]  = useState(false)
    const [showVote, setShowVote] = useState(false)

    useEffect(() => {
        const getLikeNo = async () => {
             const likeNo = await fetchLikeNo()
             setVoteNo(likeNo)
            setShowVote(true)
            //  console.log(likeNo);
        }
        getLikeNo();
    }, [])

    const fetchLikeNo = async () => {
      const res = await fetch('https://portfolio-2f480-default-rtdb.firebaseio.com/votes.json')
      const data = await res.json()
       return data ;
    }

    const addLike = () => {

        if(onCheck){
            
             const numb = voteNo - 1
            setOnCheck(false)
            // setVoteNo(numb)
            addLikeToData(numb)
        }
        else{
            const numb = voteNo + 1
            setOnCheck(true)
            // setVoteNo(numb)
            addLikeToData(numb)
        }
    }
    
    const addLikeToData = (num) => {
        fetch('https://portfolio-2f480-default-rtdb.firebaseio.com/votes.json', {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(num)
        })
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setVoteNo(data)
        })
    }
    return (
        <>
        {showVote ?  <div className="like-box">
               <div className="like-control-box">
               <input type="checkbox" id='likes' className="like-input" />
            <label htmlFor="likes" className="like-label" onClick={addLike}>
            <FaThumbsUp className= 'like-icon'/>
            </label>
               </div>
            <div className="like-no-box">
                <p><span className="like-no">{voteNo}</span><sub>likes</sub></p>
                <p>View my projects and Like</p>
            </div>
            </div> : <div className="like-box"><p className="text">Loading likes ...</p></div>}
        </>
    )
}

export default VoteBox
