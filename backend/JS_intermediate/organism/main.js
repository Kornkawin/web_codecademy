// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)]; 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    };
    return newStrand;
  };
  
  const pAequorFactory = (num, strand) => {
    return {
      _specimenNum: num,
      _dna: strand,
      
      get specimen() {
        return this._specimenNum;
      },
  
      get dna() {
        return this._dna;
      }, 
  
      get info() {
        return `${this._specimenNum} : ${this._dna}`;
      },
  
      mutate() {
        const position = Math.floor(Math.random() * 15);
        let base = this._dna[position];
        console.log(`position ${position} : ${base}`);
        let newBase = returnRandBase();
        while(base === newBase) {
          newBase = returnRandBase();
        };
        console.log(`position ${position} : ${newBase}`);
        this._dna[position] = newBase;
        console.log(this.info);
      },
  
      compareDNA(pAequorObj) {
        const dna1 = this.dna;
        const dna2 = pAequorObj.dna;
        let count = 0;
        for (let i=0; i<dna1.length; i++) {
          if (dna1[i] === dna2[i]) count++;
        };
        const result = (count/dna1.length * 100).toFixed(2); 
        console.log(`specimen #${this.specimen} and specimen #${pAequorObj.specimen} have ${result}% DNA in common`);
      },
  
      willLikelySurvive() {
        const dna = this.dna;
        let count = 0;
        for (const base of dna) {
          if (['C', 'G'].includes(base)) count++; 
        };
        const result = count/dna.length;
        return result >= 0.60 ? true : false; 
      },
  
    };
  };
  
  const pAequorSurviveArray = (num) => {
    const arr = [];
    let prototype = {};
    let specimenNum = 0;
    while(true) {
      prototype = pAequorFactory(specimenNum, mockUpStrand());
      if (prototype.willLikelySurvive()) {
        console.log(prototype.info);
        arr.push(prototype);
      };
      if (arr.length === num) break;
      specimenNum++;
    };
    return arr;
  }; 
  
  // test 
  let newStrand = mockUpStrand();
  let pAequor = pAequorFactory(0, newStrand);
  console.log(pAequor.info);
  console.log(pAequor.mutate());
  let otherpAequor = pAequorFactory(1, mockUpStrand());
  console.log(pAequor.compareDNA(otherpAequor));
  console.log(pAequor.willLikelySurvive());
  const surviveArray = pAequorSurviveArray(30); 
  
  
  
  
  
  
  