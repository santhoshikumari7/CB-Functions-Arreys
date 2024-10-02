
import './App.css';

function App() {

  
  


  let venuMarks ={
    engMarks:78,telMarks:89,hindMarks:66,mathMarks:88,sciMarks:77,sociMarks:76,calcResult:()=>{
      console.log("inside object calcResult");
    }
  };


  let{engMarks:vEngMarks,telMarks:vTelMarks,hindMarks:vHindMarks,mathMarks:vMathMarks,sciMarks:vSciMarks,sociMarks:vSociMarks} = venuMarks;

   console.log(vEngMarks);
   console.log(vTelMarks);
   console.log(vHindMarks);
   console.log(vMathMarks);
   console.log(vSciMarks);
   console.log(vSociMarks);



   console.log(venuMarks.engMarks);
   console.log(venuMarks.telMarks);
   console.log(venuMarks.hindMarks);
   console.log(venuMarks.mathMarks);
   console.log(venuMarks.sciMarks);
   console.log(venuMarks.sociMarks);

  venuMarks.calcResult();

  let suseelaMarks = [86,88,89,90,67,76];

  let [sEngMarks,sTelMarks,sHindMarks,sMathMaraks,sSciMarks,sSociMarks] = suseelaMarks;

  console.log(sEngMarks,sTelMarks,sHindMarks,sMathMaraks,sSciMarks,sSociMarks);

  console.log(suseelaMarks[0]);
  console.log(suseelaMarks[1]);
  console.log(suseelaMarks[2]);
  console.log(suseelaMarks[3]);
  console.log(suseelaMarks[4]);
  console.log(suseelaMarks[5]);


  let calculateResult = (engMarks,telMarks,hindMarks,mathMarks,sciMarks,sociMarks,passFn,failFn)=>{
   
    
    let passMarks = 35;

  if(engMarks >= passMarks && telMarks >= passMarks && hindMarks >= passMarks && mathMarks >= passMarks && sciMarks >= passMarks && sociMarks >= passMarks 

  ){
 passFn();
  }else{
    failFn();
  
  }
  };

  calculateResult(88,67,76,89,93,54,
    ()=>{ 
    console.log("CB - Student passed in Tenth");

  },
  ()=>{ 
    console.log("CB - Student failed in Tenth");

  }
);
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
