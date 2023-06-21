    
//criando o objeto 'score' puchando valor do localStorage ou dando valor padrao
let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
  };

  uprdateScore();

  function pickCompMove(){
      let computerMove='';
      const randomNumber = Math.random();
      if (randomNumber < 1/3 && randomNumber>=0){
        computerMove = 'Rock';
      }
      else if(randomNumber>=1/3 && randomNumber < 2/3){
        computerMove = 'Paper'; 
      } 
      else if(randomNumber>=2/3 && randomNumber<=1){
        computerMove = 'Scissors';
      }
       return computerMove;
  } 
  
  let isAutoPlaying = false;
  let intervalId;
  function autoPlay(){
    if(!isAutoPlaying){
  //arrow function    
      intervalId = setInterval(()=>{
        const playerMove = pickCompMove();
        compare(playerMove)
      },1000)
      isAutoPlaying = true;
    }
    else{
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }


  function compare(move){
      const compMove = pickCompMove();
      let result = '';
      if (move==='Scissors'){
        if(compMove ==='Rock'){
          result = 'Computer won';
          score.losses++;  
        }
        else if(compMove ==='Paper'){
          result = 'You won';
          score.wins++;
        }
        else if(compMove === 'Scissors'){
          result = 'Tie';
          score.ties++;
        }
        
       // alert(`you play Scissors and computer play ${compMove} 
        //Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties} `);
      }
      else if (move==='Paper'){
        if(compMove ==='Rock'){
          result ='You won';
          score.wins++;
        }
        else if(compMove ==='Paper'){
          result = 'Tie';
          score.ties++;
        }
        else if(compMove ==='Scissors'){
          result = 'Computer won';
          score.losses++;
        }
        
       // alert(`you play Paper and computer play ${compMove} ${result} 
        //Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`);
      }
      else if(move==="Rock"){
        if(compMove==='Rock'){
          result = 'Tie';
          score.ties++;
        }
        else if(compMove==='Paper'){
          result = 'Computer Won';
          score.losses++;
          
        }
        else if(compMove==='Scissors'){
          result = 'You won';
          score.wins++;
        }

        //alert(`you play Rock and computer play ${compMove} ${result} 
        //Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties} `);
      }

      document.querySelector('.js-moves').innerHTML=`you play ${move} and computer play ${compMove}`;
      document.querySelector('.js-result').innerHTML=result;
      //alert(`you play ${move} and computer play ${compMove} ${result} 
      //  Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties} `);
      //guardando valores em localStorage usando metodo setItem 
      localStorage.setItem('score',JSON.stringify(score));
      
      uprdateScore();
  }

  function uprdateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} losses: ${score.losses} ties: ${score.ties} `;
  }

