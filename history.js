document.addEventListener('DOMContentLoaded',function () {
    
    let DATA = JSON.parse(localStorage.getItem('DATA')) || [];
    let scoreTable =document.querySelector('#last5games table')
    let highestScoreTable =document.querySelector('#highestscore table')
    let userHighestScoreTable =document.querySelector('#userscore table')
    let highestScores =[]
    let userHighestScore = {}
    let highestscoreSetionScoreBtns =[...document.querySelectorAll('#highestscore .scorebtn')]
    let scoreBTN =document.querySelectorAll('.scorebtn').value 

    
                        
    DATA.map(gameData=>{
        const newRow = document.createElement("tr");
        let tableColoums=`<td>${gameData.gamePlayer}</td>
                    <td>${gameData.gameMode}</td>
                    <td>${gameData.gameScore}</td>
                    <td>${gameData.date}</td>`
        newRow.innerHTML = tableColoums
        scoreTable.querySelector('tbody').appendChild(newRow)

    })

    DATA.sort((a,b)=>{
        if (a.gameScore !== b.gameScore) {
            return b.gameScore - a.gameScore; // Sort in descending order by gamescore
        } else {
            // If gamescores are equal, compare by date
            return new Date(b.date) - new Date(a.date); // Sort in descending order by date
        }
    })
    highestScores=DATA.slice(0,5)
    highestScores.map(gameData=>{ 
        const newRow = document.createElement("tr");
        let tableColoums=`<td>${gameData.gamePlayer}</td>
                        <td  ><span class="mode-${gameData.gameMode}">${gameData.gameMode}<span></td>
                        <td>${gameData.gameScore}</td>
                        <td>${gameData.date}</td>`
        newRow.innerHTML = tableColoums
        highestScoreTable.querySelector('tbody').appendChild(newRow)
    })
        
    DATA.map(gameData=>{
        const gameScore=gameData.gameScore
        const user =gameData.gamePlayer
        if (!userHighestScore[user]|| gameScore > userHighestScore[user].gameScore) {
            userHighestScore[user] =gameData
        }
    })

    for (const user in userHighestScore) {
        const userGameData = userHighestScore[user]
        const newRow = document.createElement("tr");
        let tableColumns = `
            <td>${userGameData.gamePlayer}</td>
            <td>${userGameData.gameMode}</td>
            <td>${userGameData.gameScore}</td>
            <td>${userGameData.date}</td>
        `;
        newRow.innerHTML = tableColumns;
        userHighestScoreTable.querySelector('tbody').appendChild(newRow);
    }
   
    highestscoreSetionScoreBtns.map(btn=>{
        btn .addEventListener('click',SCOREBTNhandler)
    })

    function SCOREBTNhandler(event) {
        const clickButtonValue =event.target.value
        let filteredObject =DATA
        if (clickButtonValue!=="") {
             filteredObject =DATA.filter(o =>{
                return o.gameMode==clickButtonValue
    
            }).slice(0,5)
        }
        highestScoreTable.querySelector('tbody').innerHTML=""
        
        filteredObject.map(gameData=>{ 
            const newRow = document.createElement("tr");
            let tableColoums=`<td>${gameData.gamePlayer}</td>
                            <td  ><span class="mode-${gameData.gameMode}">${gameData.gameMode}<span></td>
                            <td>${gameData.gameScore}</td>
                            <td>${gameData.date}</td>`
            newRow.innerHTML = tableColoums
            highestScoreTable.querySelector('tbody').appendChild(newRow)
        })
    }

})